"use client"

import { useState } from 'react'
import { X, CreditCard, Wallet, Bitcoin, Check, Shield, Zap, ChevronRight } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'
import { cn } from '@/lib/utils'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

type PaymentMethod = 'card' | 'paypal' | 'crypto'

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart()
  const { formatPrice } = useCurrency()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [step, setStep] = useState<'method' | 'details' | 'success'>('method')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')

  if (!isOpen) return null

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    setTimeout(() => {
      setStep('success')
      setTimeout(() => {
        clearCart()
        onClose()
        setStep('method')
      }, 3000)
    }, 1500)
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(' ') : value
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const renderMethodSelection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Selecciona tu metodo de pago</h3>
      
      {/* Credit Card */}
      <button
        onClick={() => {
          setPaymentMethod('card')
          setStep('details')
        }}
        className={cn(
          "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all",
          paymentMethod === 'card' 
            ? "border-[#7c3aed] bg-[#7c3aed]/10" 
            : "border-[#2d2d35] bg-[#252529] hover:border-[#7c3aed]/50"
        )}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">Tarjeta de Credito/Debito</div>
          <div className="text-sm text-[#9ca3af]">Visa, Mastercard, American Express</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af]" />
      </button>

      {/* PayPal */}
      <button
        onClick={() => {
          setPaymentMethod('paypal')
          setStep('details')
        }}
        className={cn(
          "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all",
          paymentMethod === 'paypal' 
            ? "border-[#00457C] bg-[#00457C]/10" 
            : "border-[#2d2d35] bg-[#252529] hover:border-[#00457C]/50"
        )}
      >
        <div className="w-12 h-12 rounded-xl bg-[#00457C] flex items-center justify-center">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">PayPal</div>
          <div className="text-sm text-[#9ca3af]">Pago rapido y seguro</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af]" />
      </button>

      {/* Crypto */}
      <button
        onClick={() => {
          setPaymentMethod('crypto')
          setStep('details')
        }}
        className={cn(
          "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all",
          paymentMethod === 'crypto' 
            ? "border-[#f7931a] bg-[#f7931a]/10" 
            : "border-[#2d2d35] bg-[#252529] hover:border-[#f7931a]/50"
        )}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f7931a] to-[#ffb84d] flex items-center justify-center">
          <Bitcoin className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">Criptomonedas</div>
          <div className="text-sm text-[#9ca3af]">Bitcoin, Ethereum, USDT</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af]" />
      </button>

      {/* Security Note */}
      <div className="flex items-center gap-3 p-4 bg-[#252529] rounded-xl mt-6">
        <Shield className="w-5 h-5 text-[#10b981]" />
        <span className="text-sm text-[#9ca3af]">
          Todos los pagos estan protegidos con encriptacion SSL
        </span>
      </div>
    </div>
  )

  const renderCardForm = () => (
    <form onSubmit={handlePayment} className="space-y-4">
      <button
        type="button"
        onClick={() => setStep('method')}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Cambiar metodo</span>
      </button>

      <div className="flex items-center gap-3 p-4 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-xl mb-6">
        <CreditCard className="w-5 h-5 text-[#7c3aed]" />
        <span className="text-sm text-white font-medium">Pago con Tarjeta</span>
      </div>

      {/* Card Number */}
      <div>
        <label className="block text-sm text-[#9ca3af] mb-2">Numero de tarjeta</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          className="w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
          required
        />
      </div>

      {/* Card Name */}
      <div>
        <label className="block text-sm text-[#9ca3af] mb-2">Nombre en la tarjeta</label>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="NOMBRE APELLIDO"
          className="w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors uppercase"
          required
        />
      </div>

      {/* Expiry & CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#9ca3af] mb-2">Vencimiento</label>
          <input
            type="text"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
            placeholder="MM/YY"
            maxLength={5}
            className="w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#9ca3af] mb-2">CVV</label>
          <input
            type="text"
            value={cardCvv}
            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
            placeholder="123"
            maxLength={4}
            className="w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-6"
      >
        <span>Pagar</span>
        <span className="text-[#00e5ff]">{formatPrice(totalPrice)}</span>
      </button>
    </form>
  )

  const renderPayPalForm = () => (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setStep('method')}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Cambiar metodo</span>
      </button>

      <div className="flex items-center gap-3 p-4 bg-[#00457C]/20 border border-[#00457C]/30 rounded-xl mb-6">
        <Wallet className="w-5 h-5 text-[#00457C]" />
        <span className="text-sm text-white font-medium">Pago con PayPal</span>
      </div>

      <div className="text-center py-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#00457C] flex items-center justify-center">
          <Wallet className="w-10 h-10 text-white" />
        </div>
        <p className="text-[#9ca3af] mb-6">
          Seras redirigido a PayPal para completar tu pago de forma segura.
        </p>
        <button
          onClick={() => setStep('success')}
          className="w-full py-4 bg-[#00457C] hover:bg-[#003d6b] text-white font-bold rounded-lg transition-colors"
        >
          Continuar con PayPal - {formatPrice(totalPrice)}
        </button>
      </div>
    </div>
  )

  const renderCryptoForm = () => (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setStep('method')}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Cambiar metodo</span>
      </button>

      <div className="flex items-center gap-3 p-4 bg-[#f7931a]/20 border border-[#f7931a]/30 rounded-xl mb-6">
        <Bitcoin className="w-5 h-5 text-[#f7931a]" />
        <span className="text-sm text-white font-medium">Pago con Criptomonedas</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <button className="p-4 bg-[#252529] hover:bg-[#f7931a]/20 border border-[#2d2d35] hover:border-[#f7931a] rounded-xl transition-all flex flex-col items-center gap-2">
          <span className="text-2xl">₿</span>
          <span className="text-xs text-[#9ca3af]">Bitcoin</span>
        </button>
        <button className="p-4 bg-[#252529] hover:bg-[#627eea]/20 border border-[#2d2d35] hover:border-[#627eea] rounded-xl transition-all flex flex-col items-center gap-2">
          <span className="text-2xl">Ξ</span>
          <span className="text-xs text-[#9ca3af]">Ethereum</span>
        </button>
        <button className="p-4 bg-[#252529] hover:bg-[#26a17b]/20 border border-[#2d2d35] hover:border-[#26a17b] rounded-xl transition-all flex flex-col items-center gap-2">
          <span className="text-2xl">₮</span>
          <span className="text-xs text-[#9ca3af]">USDT</span>
        </button>
      </div>

      <button
        onClick={() => setStep('success')}
        className="w-full py-4 bg-gradient-to-r from-[#f7931a] to-[#ffb84d] hover:opacity-90 text-white font-bold rounded-lg transition-opacity"
      >
        Generar direccion de pago - {formatPrice(totalPrice)}
      </button>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#10b981] flex items-center justify-center animate-pulse">
        <Check className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Pago Exitoso!</h3>
      <p className="text-[#9ca3af] mb-4">
        Tu pedido ha sido procesado correctamente
      </p>
      <div className="flex items-center justify-center gap-2 text-[#00e5ff]">
        <Zap className="w-5 h-5" />
        <span>Las claves seran enviadas a tu correo</span>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#1a1a1f] rounded-2xl shadow-2xl animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2d2d35]">
          <div>
            <h2 className="text-xl font-bold text-white">Checkout</h2>
            <p className="text-sm text-[#9ca3af] mt-1">
              {items.length} {items.length === 1 ? 'producto' : 'productos'} - {formatPrice(totalPrice)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9ca3af] hover:text-white transition-colors rounded-lg hover:bg-[#252529]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {step === 'method' && renderMethodSelection()}
          {step === 'details' && paymentMethod === 'card' && renderCardForm()}
          {step === 'details' && paymentMethod === 'paypal' && renderPayPalForm()}
          {step === 'details' && paymentMethod === 'crypto' && renderCryptoForm()}
          {step === 'success' && renderSuccess()}
        </div>
      </div>
    </div>
  )
}
