"use client"

import { useState, useMemo, useEffect } from 'react'
import { Filter, Loader2 } from 'lucide-react'
import { CartProvider } from '@/lib/cart-context'
import { CurrencyProvider } from '@/lib/currency-context'
import { ThemeProvider, useTheme } from '@/lib/theme-context'
// Eliminamos la importación de datos estáticos 'games'
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
  priceRange: [0, 2000] // Ajustado a precios de videojuegos reales en MXN
}

interface Game {
  id: number;
  title: string;
  price: number;
  type: string;
  image: string;
  description?: string;
  stock?: number;
  label?: string;
  // Campos extra que pide tu componente ProductGrid
  originalPrice?: number;
  discount?: number;
  platform?: string[];
  region?: string;
  rating?: number;
}

function StoreContent() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'discount'>('relevance')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // ESTADO PARA LA API (PATRÓN OBSERVER)
  const [apiGames, setApiGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true)

  // Conexión a la API de Django
useEffect(() => {
  const getGames = async () => {
    try {
      // AGREGA "/lista/" AL FINAL DE LA URL
      const response = await fetch('http://127.0.0.1:8000/api/videojuegos/lista/')
      const data = await response.json()
      
      const normalizedData = data.map((g: any) => ({
  id: g.id,
  title: g.titulo,
  price: parseFloat(g.precio) || 0,
  image: g.portada,
  type: g.categoria_nombre,
  description: g.descripcion,
  stock: g.stock_actual,
  label: g.etiqueta_stock,
  // AGREGA ESTA LÍNEA PARA EVITAR EL ERROR DE 'SLICE'
  platform: g.platform || ["PC"], 
  // Otros campos opcionales por si acaso
  rating: 5,
  discount: 0,
  region: "Global"
}));
      
      setApiGames(normalizedData)
    } catch (error) {
      console.error("Error al conectar:", error)
    } finally {
      setLoading(false)
    }
  }
  getGames()
}, [])
const filteredGames = useMemo(() => {
    let result: Game[] = [...apiGames]; // <--- Agrega : Game[]

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((game: Game) => // <--- Agrega : Game
        game.title.toLowerCase().includes(query)
      );
    }

    // Filtros de la barra lateral
if (filters.types.length > 0) {
      result = result.filter((game: Game) => filters.types.includes(game.type));
    }

    // El ordenamiento ya no debería marcar error tras definir 'price' como number
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);

    return result;
}, [apiGames, searchQuery, filters, sortBy]);

  const activeFilterCount = 
    filters.types.length + 
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 2000 ? 1 : 0)

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
        <section className="mb-8">
          <HeroCarousel />
        </section>

        <div className="flex gap-6">
          <SidebarFilters 
            filters={filters}
            onFiltersChange={setFilters}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
          />

          <section className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className={cn("text-2xl font-bold mb-1", theme === 'dark' ? "text-white" : "text-gray-900")}>
                  Catálogo Real (Desde Django)
                </h2>
                <p className={cn("text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500")}>
                  {filteredGames.length} productos sincronizados
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className={cn(
                    "px-4 py-2.5 border rounded-lg text-sm cursor-pointer",
                    theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white" : "bg-white border-gray-200 text-gray-900"
                  )}
                >
                  <option value="relevance">Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-[#7c3aed] mb-4" />
                <p className="text-gray-500">Conectando con el servidor de base de datos...</p>
              </div>
            ) : (
              <ProductGrid games={filteredGames} />
            )}

            {filteredGames.length === 0 && !loading && (
              <div className="text-center py-20 text-gray-500">
                No se encontraron juegos en la base de datos.
              </div>
            )}
          </section>
        </div>
      </main>

      <AboutSection />
      
      <footer className={cn("border-t mt-12", theme === 'dark' ? "border-[#2d2d35] bg-[#101014]" : "border-gray-200 bg-white")}>
          {/* ... Resto del footer igual ... */}
      </footer>

      <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
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