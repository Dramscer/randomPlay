"use client"

import { ProductCard } from './product-card'

interface ProductGridProps {
  games: any[] // Mantenemos any[] por portabilidad
}

export function ProductGrid({ games }: ProductGridProps) {
  // Estado para cuando no hay juegos o la API falla
  if (!games || games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-[#1a1a1f] rounded-2xl border border-[#2d2d35]">
        <div className="w-24 h-24 mb-8 text-[#3f3f46]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          No se encontraron videojuegos
        </h3>
        <p className="text-[#9ca3af] max-w-md text-sm leading-relaxed">
          No logramos conectar con la base de datos de Django o no hay juegos registrados en el panel de administración. Intenta recargar la página más tarde.
        </p>
      </div>
    )
  }

  return (
    // Configuración de rejilla responsive: 1 col en móvil, 2 en tablet, 3 en laptop, 4 en desktop grande
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((gameFromDjango) => (
        // Pasamos el objeto 'game' directamente al ProductCard
        <ProductCard 
          key={gameFromDjango.id} 
          game={gameFromDjango} 
        />
      ))}
    </div>
  )
}