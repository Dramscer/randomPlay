"use client"

import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'

interface CartDrawerProps {
  onCheckout: () => void
}

export function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isCartOpen, setIsCartOpen, removeItem, totalPrice } = useCart()
  const { formatPrice } = useCurrency()

  if (!isCartOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#16161a] text-white z-[110] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-[#2d2d35] flex items-center justify-between bg-[#1a1a1f]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#7c3aed]" />
            <h2 className="text-xl font-bold">Tu Carrito</h2>
            <span className="bg-[#7c3aed]/20 text-[#7c3aed] text-xs px-2 py-0.5 rounded-full font-bold">
              {items.length}
            </span>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#2d2d35] rounded-full">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <ShoppingBag className="w-16 h-16 mb-4" />
              <p>El carrito está vacío</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 bg-[#1a1a1f] p-3 rounded-xl border border-[#2d2d35]">
                <img src={item.portada} alt={item.titulo} className="w-16 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white line-clamp-1">{item.titulo}</h4>
                  <p className="text-[#00e5ff] font-bold text-sm mt-1">{formatPrice(item.price)}</p>
                  <button onClick={() => removeItem(item.id)} className="mt-2 text-[10px] text-red-500 font-bold uppercase flex items-center gap-1">
                    <Trash2 className="w-3 h-3" /> Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-[#1a1a1f] border-t border-[#2d2d35]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium">Subtotal</span>
              <span className="text-2xl font-black text-[#00e5ff]">{formatPrice(totalPrice)}</span>
            </div>
            <button 
              onClick={() => {
                setIsCartOpen(false); // Primero cerramos el carrito
                onCheckout();        // Luego abrimos el pago
              }}
              className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              Proceder al pago
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}