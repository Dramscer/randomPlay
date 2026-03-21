"use client"

import { useState } from 'react'
import { Search, Heart, ShoppingCart, ChevronDown, User, Sun, Moon, LogOut } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useCurrency, regions } from '@/lib/currency-context'
import { useAuth } from '@/lib/auth-context' // <--- IMPORTACIÓN DEL CONTEXTO
import Link from 'next/link'

interface HeaderProps {
  onSearch: (query: string) => void
  searchQuery: string
  onLoginClick: () => void
}

export function Header({ onSearch, searchQuery, onLoginClick }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart()
  const { region, setRegion } = useCurrency()
  
  // --- LÓGICA GLOBAL DE USUARIO ---
  const { user, isLoggedIn, logout } = useAuth() // <--- OBTENEMOS TODO DEL CONTEXTO

  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isRegionOpen, setIsRegionOpen] = useState(false)

  const currentRegion = regions.find(r => r.id === region) || regions[0]
  const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b transition-colors",
      theme === 'dark' ? "bg-[#101014] border-[#2d2d35]" : "bg-white border-gray-200"
    )}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-black bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent tracking-tighter italic">
              RANDOMPLAY
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#" className={cn("px-3 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white" : "text-gray-600")}>Juegos</a>
            <a href="#" className={cn("px-3 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white" : "text-gray-600")}>DLC</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative group">
            <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400")} />
            <input
              type="text"
              placeholder="¿Qué quieres jugar hoy?"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs font-bold transition-all focus:outline-none focus:border-[#7c3aed]",
                theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white" : "bg-gray-50 border-gray-200 text-gray-900"
              )}
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-1 sm:gap-3">
            
            <button onClick={toggleTheme} className={cn("p-2.5 rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white" : "text-gray-500")}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Currency Selector */}
            <div className="relative hidden sm:block">
              <button 
                onClick={() => setIsRegionOpen(!isRegionOpen)} 
                className={cn("flex items-center gap-1.5 px-3 py-2 text-xs font-black rounded-lg transition-all", theme === 'dark' ? "text-[#9ca3af] hover:text-white" : "text-gray-500")}
              >
                <span>{currentRegion.flag}</span>
                <span className="uppercase">{currentRegion.currency}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isRegionOpen && "rotate-180")} />
              </button>
              
              {isRegionOpen && (
                <div className={cn("absolute top-full right-0 mt-2 w-48 border rounded-xl shadow-2xl z-50 overflow-hidden", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35]" : "bg-white border-gray-200")}>
                  {regions.map((r) => (
                    <button 
                      key={r.id} 
                      onClick={() => { setRegion(r.id); setIsRegionOpen(false); }} 
                      className={cn("w-full px-4 py-3 text-left text-[10px] font-black flex items-center justify-between hover:bg-[#7c3aed] hover:text-white", theme === 'dark' ? "text-white" : "text-gray-900")}
                    >
                      <span>{r.flag} {r.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Icons */}
            <div className="flex items-center border-l border-[#2d2d35] ml-2 pl-2 gap-1">
              <button className={cn("p-2.5 rounded-lg transition-colors", isLoggedIn ? "text-[#ef4444]" : "text-gray-500 hover:text-white")}>
                <Heart className={cn("w-5 h-5", isLoggedIn && "fill-current")} />
              </button>
              
              <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 rounded-lg text-gray-500 hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-[#7c3aed] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* BOTÓN DINÁMICO: LOGIN / PERFIL */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Link href="/perfil" className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1f] text-white rounded-xl text-[10px] font-black border border-[#2d2d35] hover:border-[#7c3aed] transition-all group">
                  <User className="w-4 h-4 text-[#7c3aed]" />
                  <span className="hidden lg:block uppercase tracking-[0.1em]">
                    {user?.first_name ? `HOLA, ${user.first_name}` : `MI PERFIL`}
                  </span>
                </Link>
                <button 
                  onClick={logout} 
                  className="p-2.5 text-gray-500 hover:text-red-500 transition-colors" 
                  title="Cerrar Sesión"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick} 
                className="flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#6d28d9] hover:scale-105 transition-all shadow-lg shadow-[#7c3aed]/20"
              >
                <User className="w-4 h-4" />
                <span>Entrar</span>
              </button>
            )}

          </div>
        </div>
      </div>
    </header>
  )
}