"use client"

import { useState } from 'react'
import { ChevronDown, X, SlidersHorizontal, Check } from 'lucide-react'
import { PlatformIcon } from './platform-icons'

const platforms = [
  { id: 'steam', name: 'Steam' },
  { id: 'xbox', name: 'Xbox' },
  { id: 'playstation', name: 'PlayStation' },
  { id: 'nintendo', name: 'Nintendo' }
]

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

export interface Filters {
  types: string[]
  platforms: string[]
  genres: string[]
  regions: string[]
  priceRange: [number, number]
}

interface SidebarFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  isMobileOpen: boolean
  onMobileClose: () => void
  // AÑADIMOS LA PROP QUE FALTABA
  availableCategories: any[] 
}

interface FilterSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-[#2d2d35] pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-3"
      >
        <span className="font-semibold text-white">{title}</span>
        <ChevronDown className={cn("w-4 h-4 text-[#9ca3af] transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="space-y-2">{children}</div>}
    </div>
  )
}

export function SidebarFilters({ 
  filters, 
  onFiltersChange, 
  isMobileOpen, 
  onMobileClose,
  availableCategories = [] // Valor por defecto
}: SidebarFiltersProps) {

  const handleTypeToggle = (categoryName: string) => {
    const newTypes = filters.types.includes(categoryName)
      ? filters.types.filter(t => t !== categoryName)
      : [...filters.types, categoryName]
    onFiltersChange({ ...filters, types: newTypes })
  }

  const handlePlatformToggle = (platformId: string) => {
    const newPlatforms = filters.platforms.includes(platformId)
      ? filters.platforms.filter(p => p !== platformId)
      : [...filters.platforms, platformId]
    onFiltersChange({ ...filters, platforms: newPlatforms })
  }

  const handlePriceChange = (value: number, index: 0 | 1) => {
    const newRange: [number, number] = [...filters.priceRange] as [number, number]
    newRange[index] = value
    onFiltersChange({ ...filters, priceRange: newRange })
  }

  const clearFilters = () => {
    onFiltersChange({
      types: [],
      platforms: [],
      genres: [],
      regions: [],
      priceRange: [0, 5000]
    })
  }

  const hasActiveFilters = 
    filters.types.length > 0 ||
    filters.platforms.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 5000

  const filterContent = (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#7c3aed]" />
          <h2 className="text-lg font-bold text-white">Filtros</h2>
        </div>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-sm text-[#7c3aed] hover:text-[#9d6eff] font-medium">
            Limpiar
          </button>
        )}
      </div>

      <FilterSection title="Categorías (Django)">
        <div className="space-y-2">
          {availableCategories.length === 0 ? (
            <p className="text-xs text-gray-500 italic">Cargando categorías...</p>
          ) : (
            availableCategories.map((cat) => (
              <label 
                key={cat.id} 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={(e) => {
                  e.preventDefault();
                  handleTypeToggle(cat.nombre); // Usamos 'nombre' que viene de Django
                }}
              >
                <div className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center transition-all",
                  filters.types.includes(cat.nombre) 
                    ? "bg-[#7c3aed] border-[#7c3aed] shadow-lg shadow-[#7c3aed]/20" 
                    : "border-[#3f3f46] bg-[#252529] group-hover:border-[#7c3aed]/50"
                )}>
                  {filters.types.includes(cat.nombre) && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className={cn(
                  "text-sm transition-colors",
                  filters.types.includes(cat.nombre) ? "text-white font-medium" : "text-[#9ca3af] group-hover:text-gray-300"
                )}>
                  {cat.nombre}
                </span>
              </label>
            ))
          )}
        </div>
      </FilterSection>

      <FilterSection title="Plataforma">
        <div className="grid grid-cols-2 gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => handlePlatformToggle(platform.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all border",
                filters.platforms.includes(platform.id) 
                  ? "bg-[#7c3aed] border-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20" 
                  : "bg-[#252529] border-[#2d2d35] text-[#9ca3af] hover:border-[#3f3f46]"
              )}
            >
              <PlatformIcon platform={platform.id} className="w-3.5 h-3.5" />
              <span className="truncate">{platform.name}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Rango de Precio">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#9ca3af] mb-1">
            <span>$0</span>
            <span className="text-white font-bold">${filters.priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
            className="w-full h-1.5 bg-[#252529] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
          />
        </div>
      </FilterSection>
    </>
  )

  return (
    <>
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-[#1a1a1f] rounded-xl p-5 border border-[#2d2d35] shadow-xl">
          {filterContent}
        </div>
      </aside>

      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onMobileClose} />
          <div className="relative w-80 bg-[#1a1a1f] h-full p-6 overflow-y-auto border-r border-[#2d2d35]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white font-bold text-xl">Filtros</h2>
              <button 
                onClick={onMobileClose}
                className="p-2 bg-[#252529] rounded-full text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  )
}