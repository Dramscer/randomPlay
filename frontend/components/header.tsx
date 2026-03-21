"use client"

import { useState } from 'react'
import { Search, Heart, ShoppingCart, Globe, Menu, X, ChevronDown, User, Sun, Moon } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency, regions } from '@/lib/currency-context'
import { useTheme } from '@/lib/theme-context'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onSearch: (query: string) => void
  searchQuery: string
  onLoginClick: () => void
}

export function Header({ onSearch, searchQuery, onLoginClick }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart()
  const { region, setRegion, currency } = useCurrency()
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRegionOpen, setIsRegionOpen] = useState(false)

  const currentRegion = regions.find(r => r.id === region)

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b transition-colors",
      theme === 'dark' 
        ? "bg-[#101014] border-[#2d2d35]" 
        : "bg-white border-gray-200"
    )}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent">
              RANDOMPLAY
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#" className={cn(
              "px-3 py-2 text-sm transition-colors rounded-lg",
              theme === 'dark' 
                ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}>
              Juegos
            </a>
            <a href="#" className={cn(
              "px-3 py-2 text-sm transition-colors rounded-lg",
              theme === 'dark' 
                ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}>
              DLC
            </a>
            <a href="#nuestra-historia" className="px-3 py-2 text-sm text-[#7c3aed] hover:text-[#9d6eff] transition-colors rounded-lg hover:bg-[#7c3aed]/10 font-medium">
              Nosotros
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5",
                theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
              )} />
              <input
                type="text"
                placeholder="Buscar juegos, DLC, tarjetas de regalo..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]",
                  theme === 'dark' 
                    ? "bg-[#1a1a1f] border-[#2d2d35] text-white placeholder-[#9ca3af]" 
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                )}
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2.5 transition-colors rounded-lg",
                theme === 'dark' 
                  ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Region Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm transition-colors rounded-lg",
                  theme === 'dark' 
                    ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <span className="text-lg">{currentRegion?.flag}</span>
                <span>{currency}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", isRegionOpen && "rotate-180")} />
              </button>
              
              {isRegionOpen && (
                <div className={cn(
                  "absolute top-full right-0 mt-2 w-48 border rounded-lg shadow-xl animate-fade-in overflow-hidden",
                  theme === 'dark' 
                    ? "bg-[#1a1a1f] border-[#2d2d35]" 
                    : "bg-white border-gray-200"
                )}>
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        setRegion(r.id)
                        setIsRegionOpen(false)
                      }}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center gap-3",
                        theme === 'dark' ? "hover:bg-[#252529]" : "hover:bg-gray-50",
                        region === r.id 
                          ? "text-[#7c3aed]" 
                          : theme === 'dark' ? "text-white" : "text-gray-900"
                      )}
                    >
                      <span className="text-lg">{r.flag}</span>
                      <span>{r.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button className={cn(
              "relative p-2.5 transition-colors rounded-lg",
              theme === 'dark' 
                ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}>
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={cn(
                "relative p-2.5 transition-colors rounded-lg",
                theme === 'dark' 
                  ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" 
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 flex items-center justify-center px-1.5 text-xs font-bold text-white bg-[#7c3aed] rounded-full animate-pulse-glow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Login Button */}
            <button
              onClick={onLoginClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Entrar</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2.5 transition-colors",
                theme === 'dark' 
                  ? "text-[#9ca3af] hover:text-white" 
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5",
              theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"
            )} />
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all focus:outline-none focus:border-[#7c3aed]",
                theme === 'dark' 
                  ? "bg-[#1a1a1f] border-[#2d2d35] text-white placeholder-[#9ca3af]" 
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
              )}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "md:hidden border-t py-4 animate-fade-in",
            theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
          )}>
            <nav className="flex flex-col gap-2">
              <a href="#" className={cn(
                "px-4 py-2 rounded-lg",
                theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"
              )}>Juegos</a>
              <a href="#" className={cn(
                "px-4 py-2 rounded-lg",
                theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"
              )}>DLC</a>
              <a href="#" className={cn(
                "px-4 py-2 rounded-lg",
                theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"
              )}>Tarjetas de Regalo</a>
              <a href="#nuestra-historia" className="px-4 py-2 text-[#7c3aed] hover:bg-[#7c3aed]/10 rounded-lg font-medium">Nuestra Historia</a>
              
              {/* Mobile Login Button */}
              <button
                onClick={onLoginClick}
                className="mx-4 mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Iniciar Sesion</span>
              </button>

              <div className={cn(
                "border-t mt-2 pt-2",
                theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"
              )}>
                <div className={cn(
                  "px-4 py-2 text-sm",
                  theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"
                )}>Region y Moneda</div>
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRegion(r.id)}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg flex items-center gap-3",
                      region === r.id 
                        ? "text-[#7c3aed] bg-[#7c3aed]/10" 
                        : theme === 'dark' ? "text-white" : "text-gray-900"
                    )}
                  >
                    <span className="text-lg">{r.flag}</span>
                    <span>{r.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
