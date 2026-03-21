"use client"

import { ProductCard } from './product-card'
interface ProductGridProps {
  games: any[] // <--- Cambiamos Game[] por any[]
}

export function ProductGrid({ games }: ProductGridProps) {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 text-[#3f3f46]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No se encontraron resultados</h3>
        <p className="text-[#9ca3af] max-w-md">
          No encontramos juegos que coincidan con tu busqueda. Intenta con otros filtros o terminos de busqueda.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {games.map((game) => (
        <ProductCard key={game.id} game={game} />
      ))}
    </div>
  )
}
