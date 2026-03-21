"use client"

import { useState } from 'react'
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react'
import { platforms, genres, regions, productTypes } from '@/lib/game-data'
import { PlatformIcon } from './platform-icons'
import { cn } from '@/lib/utils'

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

export function SidebarFilters({ filters, onFiltersChange, isMobileOpen, onMobileClose }: SidebarFiltersProps) {
  const handleTypeToggle = (typeId: string) => {
    const newTypes = filters.types.includes(typeId)
      ? filters.types.filter(t => t !== typeId)
      : [...filters.types, typeId]
    onFiltersChange({ ...filters, types: newTypes })
  }

  const handlePlatformToggle = (platformId: string) => {
    const newPlatforms = filters.platforms.includes(platformId)
      ? filters.platforms.filter(p => p !== platformId)
      : [...filters.platforms, platformId]
    onFiltersChange({ ...filters, platforms: newPlatforms })
  }

  const handleGenreToggle = (genre: string) => {
    const newGenres = filters.genres.includes(genre)
      ? filters.genres.filter(g => g !== genre)
      : [...filters.genres, genre]
    onFiltersChange({ ...filters, genres: newGenres })
  }

  const handleRegionToggle = (region: string) => {
    const newRegions = filters.regions.includes(region)
      ? filters.regions.filter(r => r !== region)
      : [...filters.regions, region]
    onFiltersChange({ ...filters, regions: newRegions })
  }

  const handlePriceChange = (value: number, index: 0 | 1) => {
    const newRange: [number, number] = [...filters.priceRange] as [number, number]
    newRange[index] = value
    if (index === 0 && value > newRange[1]) newRange[1] = value
    if (index === 1 && value < newRange[0]) newRange[0] = value
    onFiltersChange({ ...filters, priceRange: newRange })
  }

  const clearFilters = () => {
    onFiltersChange({
      types: [],
      platforms: [],
      genres: [],
      regions: [],
      priceRange: [0, 100]
    })
  }

  const hasActiveFilters = 
    filters.types.length > 0 ||
    filters.platforms.length > 0 ||
    filters.genres.length > 0 ||
    filters.regions.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 100

  const filterContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#7c3aed]" />
          <h2 className="text-lg font-bold text-white">Filtros</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-[#7c3aed] hover:text-[#9d6aff] transition-colors"
          >
            Limpiar todo
          </button>
        )}
      </div>

      {/* Product Type */}
      <FilterSection title="Tipo de Producto">
        {productTypes.map((type) => (
          <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
            <div className={cn(
              "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
              filters.types.includes(type.id)
                ? "bg-[#7c3aed] border-[#7c3aed]"
                : "border-[#3f3f46] group-hover:border-[#7c3aed]"
            )}>
              {filters.types.includes(type.id) && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-[#9ca3af] group-hover:text-white transition-colors">{type.name}</span>
          </label>
        ))}
      </FilterSection>

      {/* Platform */}
      <FilterSection title="Plataforma">
        <div className="grid grid-cols-2 gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => handlePlatformToggle(platform.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all",
                filters.platforms.includes(platform.id)
                  ? "bg-[#7c3aed] text-white"
                  : "bg-[#252529] text-[#9ca3af] hover:bg-[#2d2d35] hover:text-white"
              )}
            >
              <PlatformIcon platform={platform.id} className="w-4 h-4" />
              <span className="truncate">{platform.name}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Genre */}
      <FilterSection title="Genero">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreToggle(genre)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                filters.genres.includes(genre)
                  ? "bg-[#7c3aed] text-white"
                  : "bg-[#252529] text-[#9ca3af] hover:bg-[#2d2d35] hover:text-white"
              )}
            >
              {genre}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Rango de Precio">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-xs text-[#9ca3af] mb-1 block">Min</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">$</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                  className="w-full pl-7 pr-3 py-2 bg-[#252529] border border-[#2d2d35] rounded-lg text-white text-sm focus:outline-none focus:border-[#7c3aed]"
                />
              </div>
            </div>
            <span className="text-[#9ca3af] mt-5">-</span>
            <div className="flex-1">
              <label className="text-xs text-[#9ca3af] mb-1 block">Max</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">$</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                  className="w-full pl-7 pr-3 py-2 bg-[#252529] border border-[#2d2d35] rounded-lg text-white text-sm focus:outline-none focus:border-[#7c3aed]"
                />
              </div>
            </div>
          </div>
          
          {/* Price Slider */}
          <div className="relative pt-2">
            <input
              type="range"
              min="0"
              max="100"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="w-full h-1 bg-[#252529] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
              style={{
                background: `linear-gradient(to right, #7c3aed ${filters.priceRange[0]}%, #7c3aed ${filters.priceRange[1]}%, #252529 ${filters.priceRange[1]}%)`
              }}
            />
          </div>
        </div>
      </FilterSection>

      {/* Region */}
      <FilterSection title="Region">
        {regions.map((region) => (
          <label key={region} className="flex items-center gap-3 cursor-pointer group">
            <div className={cn(
              "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
              filters.regions.includes(region)
                ? "bg-[#7c3aed] border-[#7c3aed]"
                : "border-[#3f3f46] group-hover:border-[#7c3aed]"
            )}>
              {filters.regions.includes(region) && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-[#9ca3af] group-hover:text-white transition-colors">{region}</span>
          </label>
        ))}
      </FilterSection>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 bg-[#1a1a1f] rounded-xl p-5 max-h-[calc(100vh-6rem)] overflow-y-auto">
          {filterContent}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#1a1a1f] animate-slide-in overflow-y-auto">
            {/* Mobile Header */}
            <div className="sticky top-0 bg-[#1a1a1f] flex items-center justify-between p-4 border-b border-[#2d2d35]">
              <h2 className="text-lg font-bold text-white">Filtros</h2>
              <button
                onClick={onMobileClose}
                className="p-2 text-[#9ca3af] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5">
              {filterContent}
            </div>

            {/* Apply Button */}
            <div className="sticky bottom-0 bg-[#1a1a1f] p-4 border-t border-[#2d2d35]">
              <button
                onClick={onMobileClose}
                className="w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
