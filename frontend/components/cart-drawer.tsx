"use client"

import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'
import { useTheme } from '@/lib/theme-context'
import { PlatformIcon } from './platform-icons'
import { cn } from '@/lib/utils'

interface CartDrawerProps {
  onCheckout: () => void
}

export function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart()
  const { formatPrice } = useCurrency()
  const { theme } = useTheme()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setIsCartOpen(false)
    onCheckout()
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={cn(
        "absolute right-0 top-0 bottom-0 w-full max-w-md animate-slide-in shadow-2xl flex flex-col",
        theme === 'dark' ? "bg-[#1a1a1f]" : "bg-white"
      )}>
        {/* Header */}
        <div className={cn(
          "flex items-center justify-between p-4 border-b",
          theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
        )}>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#7c3aed]" />
            <h2 className={cn(
              "text-lg font-bold",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>Carrito</h2>
            <span className="px-2 py-0.5 text-xs font-bold text-white bg-[#7c3aed] rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className={cn(
              "p-2 transition-colors rounded-lg",
              theme === 'dark' 
                ? "text-[#9ca3af] hover:text-white hover:bg-[#252529]" 
                : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className={cn(
                "w-20 h-20 mb-4",
                theme === 'dark' ? "text-[#3f3f46]" : "text-gray-300"
              )}>
                <ShoppingBag className="w-full h-full" />
              </div>
              <h3 className={cn(
                "text-lg font-semibold mb-2",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Tu carrito esta vacio</h3>
              <p className={cn(
                "text-sm mb-6",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>
                Agrega algunos juegos increibles a tu carrito
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors"
              >
                Explorar Tienda
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className={cn(
                    "flex gap-4 p-3 rounded-xl",
                    theme === 'dark' ? "bg-[#252529]" : "bg-gray-50"
                  )}
                >
                  {/* Image */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={cn(
                        "font-semibold text-sm leading-tight line-clamp-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className={cn(
                          "p-1 transition-colors flex-shrink-0",
                          theme === 'dark' 
                            ? "text-[#9ca3af] hover:text-[#ef4444]" 
                            : "text-gray-400 hover:text-red-500"
                        )}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Platform & Region */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"}>
                        <PlatformIcon platform={item.platform} className="w-3.5 h-3.5" />
                      </span>
                      <span className={cn(
                        "text-xs",
                        theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
                      )}>{item.region}</span>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={cn(
                            "p-1 rounded transition-colors",
                            theme === 'dark' 
                              ? "text-[#9ca3af] hover:text-white hover:bg-[#3f3f46]" 
                              : "text-gray-400 hover:text-gray-900 hover:bg-gray-200"
                          )}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className={cn(
                          "font-medium w-6 text-center",
                          theme === 'dark' ? "text-white" : "text-gray-900"
                        )}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={cn(
                            "p-1 rounded transition-colors",
                            theme === 'dark' 
                              ? "text-[#9ca3af] hover:text-white hover:bg-[#3f3f46]" 
                              : "text-gray-400 hover:text-gray-900 hover:bg-gray-200"
                          )}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-[#00e5ff] font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        {item.quantity > 1 && (
                          <div className={cn(
                            "text-xs",
                            theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
                          )}>
                            {formatPrice(item.price)} c/u
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={cn(
            "border-t p-4 space-y-4",
            theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
          )}>
            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className={cn(
                "w-full py-2 text-sm transition-colors",
                theme === 'dark' 
                  ? "text-[#9ca3af] hover:text-[#ef4444]" 
                  : "text-gray-500 hover:text-red-500"
              )}
            >
              Vaciar carrito
            </button>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className={theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"}>Subtotal</span>
              <span className={cn(
                "text-xl font-bold",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>{formatPrice(totalPrice)}</span>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceder al Pago</span>
              <span className="text-[#00e5ff]">{formatPrice(totalPrice)}</span>
            </button>

            {/* Security Note */}
            <p className={cn(
              "text-xs text-center",
              theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
            )}>
              Pago seguro. Entrega instantanea por email.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
