"use client"

import { useState } from 'react'
import { ShoppingCart, Heart, Globe } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'
import { useTheme } from '@/lib/theme-context'
import { PlatformIcon } from './platform-icons'
import type { Game } from '@/lib/game-data'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  game: Game
}

export function ProductCard({ game }: ProductCardProps) {
  const { addItem } = useCart()
  const { formatPrice } = useCurrency()
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({
      id: game.id,
      title: game.title,
      image: game.image,
      price: game.price,
      originalPrice: game.originalPrice,
      platform: game.platform[0],
      region: game.region
    })
    setTimeout(() => setIsAdding(false), 300)
  }

  const fallbackImage = `https://placehold.co/460x215/1a1a1f/7c3aed?text=${encodeURIComponent(game.title)}`

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
        theme === 'dark' ? "bg-[#1a1a1f]" : "bg-white border border-gray-200",
        isHovered && "transform -translate-y-1 shadow-xl shadow-[#7c3aed]/10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageError ? fallbackImage : game.image}
          alt={game.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60",
          theme === 'dark' ? "from-[#1a1a1f]" : "from-white"
        )} />
        
        {/* Discount Badge */}
        {game.discount > 0 && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-[#ef4444] text-white text-xs font-bold rounded">
            -{game.discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsWishlisted(!isWishlisted)
          }}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all",
            isWishlisted 
              ? "bg-[#ef4444] text-white" 
              : "bg-black/50 text-white hover:bg-black/70"
          )}
        >
          <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
        </button>

        {/* Quick Add to Cart - Shows on Hover */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-3 transform transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleAddToCart()
            }}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all",
              isAdding 
                ? "bg-[#10b981] text-white" 
                : "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
            )}
          >
            <ShoppingCart className="w-4 h-4" />
            {isAdding ? 'Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Platform & Region Icons */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            {game.platform.slice(0, 3).map((p) => (
              <span key={p} className={theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"}>
                <PlatformIcon platform={p} className="w-4 h-4" />
              </span>
            ))}
            {game.platform.length > 3 && (
              <span className={cn(
                "text-xs",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
              )}>+{game.platform.length - 3}</span>
            )}
          </div>
          <div className={cn(
            "flex items-center gap-1 text-xs",
            theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
          )}>
            <Globe className="w-3 h-3" />
            {game.region}
          </div>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-semibold text-sm leading-tight mb-3 line-clamp-2 min-h-[2.5rem]",
          theme === 'dark' ? "text-white" : "text-gray-900"
        )}>
          {game.title}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#00e5ff]">
            {formatPrice(game.price)}
          </span>
          {game.originalPrice > game.price && (
            <span className={cn(
              "text-sm line-through",
              theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
            )}>
              {formatPrice(game.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
