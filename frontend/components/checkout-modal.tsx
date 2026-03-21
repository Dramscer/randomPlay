"use client"

import { useState, useEffect } from 'react'
import { X, CreditCard, Wallet, Check, Zap, ChevronRight, Loader2, Sparkles, ShieldCheck, Mail, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

type PaymentMethod = 'card' | 'paypal' | 'special'

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart()
  const { formatPrice } = useCurrency()
  
  const [step, setStep] = useState<'method' | 'details' | 'success'>('method')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0) // Estado para la barra de carga

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
    paypalEmail: '',
    specialCode: ''
  })

  // Resetear progreso cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setProgress(0)
      setIsProcessing(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConfirmPurchase = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setProgress(10) // Empezamos la carga

    try {
      // Simulación de carga visual inicial
      const interval = setInterval(() => {
        setProgress(prev => (prev < 90 ? prev + 5 : prev))
      }, 200)

      // 1. Notificar a Django para descontar stock
      for (const item of items) {
        const response = await fetch(`http://127.0.0.1:8000/api/videojuegos/lista/${item.id}/comprar/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })

        const data = await response.json()
        if (!response.ok) throw new Error(data.error || "Error en el stock")
      }
      
      clearInterval(interval)
      setProgress(100) // Carga completa

      // 2. Pantalla de éxito
      setTimeout(() => {
        setStep('success')
        clearCart()
      }, 500)

      setTimeout(() => {
        onClose()
        setStep('method')
        setIsProcessing(false)
        setFormData({ cardNumber: '', cardHolder: '', expiry: '', cvv: '', paypalEmail: '', specialCode: '' })
      }, 4500)

    } catch (error: any) {
      setProgress(0)
      alert(`⚠️ ERROR: ${error.message}`)
      setIsProcessing(false)
    }
  }

  const formatCardNumber = (val: string) => val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
  const formatExpiry = (val: string) => val.replace(/\D/g, '').replace(/(.{2})/, '$1/').trim().slice(0, 5)

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#1a1a1f] rounded-3xl shadow-2xl border border-[#2d2d35] overflow-hidden">
        
        {/* BARRA DE CARGA SUPERIOR */}
        {isProcessing && (
          <div className="absolute top-0 left-0 w-full h-1 bg-[#2d2d35] z-50">
            <div 
              className="h-full bg-[#7c3aed] transition-all duration-300 ease-out shadow-[0_0_10px_#7c3aed]"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Header */}
        <div className="p-6 border-b border-[#2d2d35] flex justify-between items-center bg-[#16161a]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#7c3aed]" />
            <h2 className="text-xl font-bold text-white tracking-tighter uppercase">Checkout</h2>
          </div>
          {!isProcessing && (
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400"><X /></button>
          )}
        </div>

        <div className="p-6">
          {step === 'method' && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Método de Pago</p>
              <button onClick={() => { setPaymentMethod('card'); setStep('details'); }} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-[#2d2d35] bg-[#212126] hover:border-[#7c3aed] transition-all group">
                <CreditCard className="text-[#7c3aed]" />
                <span className="flex-1 text-left text-white font-bold">Tarjeta Bancaria</span>
              </button>
              <button onClick={() => { setPaymentMethod('paypal'); setStep('details'); }} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-[#2d2d35] bg-[#212126] hover:border-[#00457C] transition-all group">
                <Wallet className="text-[#00457C]" />
                <span className="flex-1 text-left text-white font-bold">PayPal</span>
              </button>
              <button onClick={() => { setPaymentMethod('special'); setStep('details'); }} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500 transition-all group">
                <Sparkles className="text-yellow-500" />
                <span className="flex-1 text-left text-white font-bold">Random Points</span>
              </button>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleConfirmPurchase} className="space-y-4">
              <button type="button" onClick={() => setStep('method')} disabled={isProcessing} className="text-[10px] text-gray-500 hover:text-white mb-2 uppercase font-black flex items-center gap-1">
                <ChevronRight className="w-3 h-3 rotate-180" /> Volver
              </button>
              
              <div className="p-4 bg-[#16161a] rounded-2xl border border-[#2d2d35] mb-6 flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase font-black">Total</span>
                <span className="text-2xl font-black text-[#00e5ff] tracking-tight">{formatPrice(totalPrice)}</span>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <input type="text" value={formData.cardNumber} onChange={(e) => setFormData({...formData, cardNumber: formatCardNumber(e.target.value)})} placeholder="Número de tarjeta" className="w-full p-4 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed]" required />
                  <input type="text" name="cardHolder" value={formData.cardHolder} onChange={handleInputChange} placeholder="Titular" className="w-full p-4 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed] uppercase" required />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" value={formData.expiry} onChange={(e) => setFormData({...formData, expiry: formatExpiry(e.target.value)})} placeholder="MM/YY" className="p-4 bg-[#252529] border border-[#2d2d35] rounded-xl text-white" required />
                    <input type="password" value={formData.cvv} onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '').slice(0, 3)})} placeholder="CVV" className="p-4 bg-[#252529] border border-[#2d2d35] rounded-xl text-white" required />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <input type="email" name="paypalEmail" value={formData.paypalEmail} onChange={handleInputChange} placeholder="usuario@paypal.com" className="w-full p-4 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#00457C]" required />
              )}

              {paymentMethod === 'special' && (
                <input type="text" name="specialCode" value={formData.specialCode} onChange={handleInputChange} placeholder="RP-XXXX-XXXX" className="w-full p-4 bg-yellow-500/5 border border-yellow-500/30 rounded-xl text-white text-center font-mono focus:border-yellow-500" required />
              )}

              <button type="submit" disabled={isProcessing} className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] disabled:bg-gray-800 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all">
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin w-5 h-5" /> PROCESANDO {progress}%
                  </span>
                ) : (
                  <><ShieldCheck className="w-5 h-5" /> CONFIRMAR Y PAGAR</>
                )}
              </button>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-500">
                <Check className="text-emerald-500 w-12 h-12" strokeWidth={3} />
              </div>
              <h3 className="text-4xl font-black text-white italic uppercase">¡COMPRADO!</h3>
              <p className="text-gray-500 text-sm mt-2">Código enviado a tu correo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}