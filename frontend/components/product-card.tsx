"use client"

import { useState, useEffect } from 'react'
import { ShoppingCart, Heart, Globe, Check, XCircle } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency } from '@/lib/currency-context'

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

export function ProductCard({ game }: { game: any }) {
  const { addItem } = useCart()
  const { formatPrice } = useCurrency()
  
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [imageError, setImageError] = useState(false)

  // --- VARIABLES DE DJANGO ---
  const titulo = game.titulo || "Sin título";
  const precioOriginal = Number(game.precio) || 0;
  const precioConDescuento = Number(game.precio_con_descuento) || precioOriginal;
  const porcentajeDescuento = game.porcentaje_descuento || 0;
  const tieneDescuento = porcentajeDescuento > 0;
  const portadaRaw = game.portada;
  const categoria = game.categoria_nombre || "General";
  const stockEtiqueta = game.etiqueta_stock || "Disponible";
  const stockActual = game.stock_actual ?? 0;
  const isOutOfStock = stockActual <= 0;

  const finalImageUrl = portadaRaw || `https://placehold.co/600x800/1a1a1f/7c3aed?text=No+Image`;

  // --- LÓGICA DE FAVORITOS (CONEXIÓN DJANGO) ---
  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const token = localStorage.getItem('access_token')
    
    if (!token) {
      alert("Debes iniciar sesión para guardar favoritos")
      return
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/videojuegos/favoritos/toggle/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ videojuego: game.id })
      })

      if (response.ok) {
        const data = await response.json()
        setIsWishlisted(data.status === 'added')
      } else if (response.status === 401) {
        alert("Tu sesión ha expirado. Por favor, inicia sesión de nuevo.")
      }
    } catch (error) {
      console.error("Error al gestionar favorito:", error)
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isOutOfStock) return;

    setIsAdding(true)
    addItem({
      id: game.id,
      titulo: titulo,
      price: tieneDescuento ? precioConDescuento : precioOriginal,
      portada: finalImageUrl
    })
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 bg-[#1a1a1f] border border-[#2d2d35]/50",
        isHovered && !isOutOfStock && "transform -translate-y-1 shadow-2xl shadow-[#7c3aed]/20 border-[#7c3aed]/50",
        isOutOfStock && "opacity-75 grayscale-[0.5]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageError ? `https://placehold.co/600x800/1a1a1f/7c3aed?text=${titulo}` : finalImageUrl}
          alt={titulo}
          onError={() => setImageError(true)}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && !isOutOfStock ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent opacity-80" />

        {/* ETIQUETA DE DESCUENTO */}
        {tieneDescuento && !isOutOfStock && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black px-2 py-1 rounded shadow-lg z-40">
            -{porcentajeDescuento}%
          </div>
        )}

        {/* MARCA DE AGOTADO */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-30">
            <div className="bg-red-600/90 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-red-500">
              Sin códigos
            </div>
          </div>
        )}

        {/* BOTÓN CORAZÓN (FAVORITOS) */}
        <button
          onClick={handleToggleFavorite}
          className={cn(
            "absolute top-3 right-3 p-2.5 rounded-full transition-all z-10 backdrop-blur-md",
            isWishlisted ? "bg-[#ef4444] text-white shadow-lg shadow-red-500/40" : "bg-black/40 text-white hover:bg-black/60"
          )}
        >
          <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
        </button>

        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 z-20",
          isHovered || isOutOfStock ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all",
              isOutOfStock 
                ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                : "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/20"
            )}
          >
            {isOutOfStock ? (
              <><XCircle className="w-4 h-4" /> AGOTADO</>
            ) : isAdding ? (
              <><Check className="w-5 h-5" /> ¡Añadido!</>
            ) : (
              <><ShoppingCart className="w-4 h-4" /> Añadir al carrito</>
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] px-2 py-1 bg-[#7c3aed]/10 text-[#a78bfa] rounded-md uppercase font-bold">
            {categoria}
          </span>
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-tighter",
            isOutOfStock ? "text-red-500" : "text-emerald-400"
          )}>
            {isOutOfStock ? "No disponible" : stockEtiqueta}
          </span>
        </div>
        
        <h3 className="font-bold text-white text-sm leading-snug mb-3 line-clamp-2">
          {titulo}
        </h3>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            {tieneDescuento && (
              <span className="text-[10px] text-gray-500 line-through font-bold">
                {formatPrice(precioOriginal)}
              </span>
            )}
            <span className="text-lg font-black text-[#00e5ff] leading-none">
              {formatPrice(tieneDescuento ? precioConDescuento : precioOriginal)}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-500">
            <Globe className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Global</span>
          </div>
        </div>
      </div>
    </div>
  )
}