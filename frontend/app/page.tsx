"use client"

import { useState, useMemo } from 'react'
import { Filter } from 'lucide-react'
import { CartProvider } from '@/lib/cart-context'
import { CurrencyProvider } from '@/lib/currency-context'
import { ThemeProvider, useTheme } from '@/lib/theme-context'
import { games } from '@/lib/game-data'
import { Header } from '@/components/header'
import { HeroCarousel } from '@/components/hero-carousel'
import { ProductGrid } from '@/components/product-grid'
import { SidebarFilters, type Filters } from '@/components/sidebar-filters'
import { CartDrawer } from '@/components/cart-drawer'
import { AboutSection } from '@/components/about-section'
import { LoginModal } from '@/components/login-modal'
import { CheckoutModal } from '@/components/checkout-modal'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SocialLinks } from '@/components/social-icons'
import { cn } from '@/lib/utils'

const initialFilters: Filters = {
  types: [],
  platforms: [],
  genres: [],
  regions: [],
  priceRange: [0, 100]
}

function StoreContent() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'discount'>('relevance')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const filteredGames = useMemo(() => {
    let result = [...games]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.genre.some(g => g.toLowerCase().includes(query)) ||
        game.platform.some(p => p.toLowerCase().includes(query))
      )
    }

    // Type filter
    if (filters.types.length > 0) {
      result = result.filter(game => filters.types.includes(game.type))
    }

    // Platform filter
    if (filters.platforms.length > 0) {
      result = result.filter(game => 
        game.platform.some(p => filters.platforms.includes(p))
      )
    }

    // Genre filter
    if (filters.genres.length > 0) {
      result = result.filter(game => 
        game.genre.some(g => filters.genres.includes(g))
      )
    }

    // Region filter
    if (filters.regions.length > 0) {
      result = result.filter(game => filters.regions.includes(game.region))
    }

    // Price filter
    result = result.filter(game => 
      game.price >= filters.priceRange[0] && game.price <= filters.priceRange[1]
    )

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'discount':
        result.sort((a, b) => b.discount - a.discount)
        break
      default:
        // relevance - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [searchQuery, filters, sortBy])

  const activeFilterCount = 
    filters.types.length + 
    filters.platforms.length + 
    filters.genres.length + 
    filters.regions.length + 
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 100 ? 1 : 0)

  return (
    <div className={cn(
      "min-h-screen transition-colors",
      theme === 'dark' ? "bg-[#101014]" : "bg-gray-50"
    )}>
      <Header 
        onSearch={setSearchQuery} 
        searchQuery={searchQuery} 
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Hero Carousel */}
        <section className="mb-8">
          <HeroCarousel />
        </section>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <SidebarFilters 
            filters={filters}
            onFiltersChange={setFilters}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
          />

          {/* Products Section */}
          <section className="flex-1 min-w-0">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className={cn(
                  "text-2xl font-bold mb-1",
                  theme === 'dark' ? "text-white" : "text-gray-900"
                )}>Todos los Juegos</h2>
                <p className={cn(
                  "text-sm",
                  theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
                )}>
                  {filteredGames.length} productos encontrados
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className={cn(
                    "lg:hidden flex items-center gap-2 px-4 py-2.5 border rounded-lg transition-colors",
                    theme === 'dark' 
                      ? "bg-[#1a1a1f] border-[#2d2d35] text-white hover:border-[#7c3aed]" 
                      : "bg-white border-gray-200 text-gray-900 hover:border-[#7c3aed]"
                  )}
                >
                  <Filter className="w-4 h-4" />
                  <span>Filtros</span>
                  {activeFilterCount > 0 && (
                    <span className="px-1.5 py-0.5 text-xs font-bold bg-[#7c3aed] text-white rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className={cn(
                    "px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#7c3aed] cursor-pointer",
                    theme === 'dark' 
                      ? "bg-[#1a1a1f] border-[#2d2d35] text-white" 
                      : "bg-white border-gray-200 text-gray-900"
                  )}
                >
                  <option value="relevance">Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="discount">Mayor Descuento</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid games={filteredGames} />

            {/* Load More Button */}
            {filteredGames.length >= 18 && (
              <div className="mt-8 text-center">
                <button className={cn(
                  "px-8 py-3 font-semibold rounded-lg transition-colors border",
                  theme === 'dark' 
                    ? "bg-[#252529] hover:bg-[#2d2d35] text-white border-[#2d2d35] hover:border-[#7c3aed]" 
                    : "bg-white hover:bg-gray-50 text-gray-900 border-gray-200 hover:border-[#7c3aed]"
                )}>
                  Cargar mas productos
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className={cn(
        "border-t mt-12",
        theme === 'dark' ? "border-[#2d2d35] bg-[#101014]" : "border-gray-200 bg-white"
      )}>
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className={cn(
                "font-bold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Productos</h3>
              <ul className={cn(
                "space-y-2 text-sm",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Juegos</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">DLC</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Tarjetas de Regalo</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Game Pass</a></li>
              </ul>
            </div>
            <div>
              <h3 className={cn(
                "font-bold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Plataformas</h3>
              <ul className={cn(
                "space-y-2 text-sm",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Steam</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">PlayStation</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Xbox</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Nintendo</a></li>
              </ul>
            </div>
            <div>
              <h3 className={cn(
                "font-bold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Soporte</h3>
              <ul className={cn(
                "space-y-2 text-sm",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Reembolsos</a></li>
              </ul>
            </div>
            <div>
              <h3 className={cn(
                "font-bold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Legal</h3>
              <ul className={cn(
                "space-y-2 text-sm",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Terminos de Servicio</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Politica de Privacidad</a></li>
                <li><a href="#" className="hover:text-[#7c3aed] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t",
            theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
          )}>
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className={cn(
                "text-sm",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
              )}>Siguenos en redes sociales</span>
              <SocialLinks />
            </div>
            <div className="flex items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="PayPal" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968260.png" alt="Bitcoin" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t",
            theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
          )}>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent">
              RANDOMPLAY
            </div>
            <p className={cn(
              "text-sm",
              theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
            )}>
              2024 RANDOMPLAY. Todos los derechos reservados. Hecho con amor en Orizaba, Veracruz.
            </p>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} />

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <CartProvider>
          <StoreContent />
        </CartProvider>
      </CurrencyProvider>
    </ThemeProvider>
  )
}
