"use client"

import { useState, useMemo, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { Header } from '@/components/header'
import { HeroCarousel } from '@/components/hero-carousel'
import { ProductGrid } from '@/components/product-grid'
import { SidebarFilters, type Filters } from '@/components/sidebar-filters'
import { CartDrawer } from '@/components/cart-drawer'
import { AboutSection } from '@/components/about-section'
import { LoginModal } from '@/components/login-modal'
import { CheckoutModal } from '@/components/checkout-modal'
import { WhatsAppButton } from '@/components/whatsapp-button'

const initialFilters: Filters = {
  types: [],
  platforms: [],
  genres: [],
  regions: [],
  priceRange: [0, 5000]
}

export function StoreContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'discount'>('relevance')
  
  // Modales
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // Datos de API
  const [apiGames, setApiGames] = useState<any[]>([])
  const [apiCategories, setApiCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // --- SINCRONIZACIÓN CON DJANGO ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [gamesRes, catRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/videojuegos/lista/'),
          fetch('http://127.0.0.1:8000/api/videojuegos/categorias/')
        ])

        const gamesData = await gamesRes.json()
        setApiGames(gamesData)

        if (catRes.ok) {
          const catData = await catRes.json()
          setApiCategories(catData)
        }
      } catch (error) {
        console.error("Error al sincronizar con Django:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // --- FILTRADO Y ORDENAMIENTO ---
  const filteredGames = useMemo(() => {
    let result = [...apiGames]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((game) => game.titulo.toLowerCase().includes(query))
    }

    if (filters.types.length > 0) {
      result = result.filter((game) => filters.types.includes(game.categoria_nombre))
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.precio_con_descuento || a.precio) - (b.precio_con_descuento || b.precio))
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.precio_con_descuento || b.precio) - (a.precio_con_descuento || a.precio))
    } else if (sortBy === 'discount') {
      result.sort((a, b) => (b.porcentaje_descuento || 0) - (a.porcentaje_descuento || 0))
    }

    return result
  }, [apiGames, searchQuery, filters, sortBy])

  return (
    <div className="min-h-screen bg-[#101014]">
      {/* El Header ahora maneja internamente si muestra "Entrar" o "Mi Perfil" */}
      <Header 
        onSearch={setSearchQuery} 
        searchQuery={searchQuery} 
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <section className="mb-12">
          <HeroCarousel />
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          <SidebarFilters 
            filters={filters}
            onFiltersChange={setFilters}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
            availableCategories={apiCategories} 
          />

          <section className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                  {filters.types.length > 0 ? filters.types[0] : 'Catálogo Completo'}
                </h2>
                <p className="text-[#9ca3af] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  {filteredGames.length} PRODUCTOS ENCONTRADOS
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Ordenar:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2.5 bg-[#1a1a1f] border border-[#2d2d35] rounded-xl text-[11px] font-black text-white uppercase tracking-tighter focus:border-[#7c3aed] outline-none cursor-pointer transition-all"
                >
                  <option value="relevance">Relevancia</option>
                  <option value="discount">Mejores Ofertas</option>
                  <option value="price-asc">Precio: + Bajo</option>
                  <option value="price-desc">Precio: + Alto</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 space-y-4">
                <Loader2 className="w-10 h-10 text-[#7c3aed] animate-spin" />
                <p className="text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">Sincronizando con servidor...</p>
              </div>
            ) : (
              <ProductGrid games={filteredGames} />
            )}
          </section>
        </div>
      </main>

      <AboutSection />
      
      <footer className="border-t border-[#2d2d35] mt-20 bg-[#0a0a0c] py-16">
          <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-4">
            <div className="text-xl font-black bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent italic">RANDOMPLAY</div>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest text-center">
              © 2026 RANDOMPLAY - LA MEJOR TIENDA DE KEYS PARA GAMERS
            </p>
          </div>
      </footer>

      <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} /> 
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}

export default function Home() {
  return <StoreContent />
}