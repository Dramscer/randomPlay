"use client"

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { useCurrency } from '@/lib/currency-context'

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

export function HeroCarousel() {
  const { formatPrice } = useCurrency()
  const [slides, setSlides] = useState<any[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loading, setLoading] = useState(true)

  // --- FETCH DE DATOS DESDE DJANGO ---
  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://127.0.0.1:8000/api/videojuegos/lista/')
        const data = await response.json()
        
        // Filtramos juegos que marcaste como "es_destacado" en el Admin
        const destacados = data.filter((game: any) => game.es_destacado === true)
        
        setSlides(destacados)
        setLoading(false)
      } catch (error) {
        console.error("Error en HeroCarousel:", error)
        setLoading(false)
      }
    }
    fetchDestacados()
  }, [])

  const nextSlide = useCallback(() => {
    if (slides.length === 0) return
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    if (slides.length === 0) return
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, slides.length])

  if (loading) return (
    <div className="w-full h-[300px] md:h-[400px] bg-[#1a1a1f] animate-pulse rounded-2xl flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#7c3aed] animate-spin" />
    </div>
  )

  // Si no hay destacados, el carrusel no se renderiza (evita espacios en blanco)
  if (slides.length === 0) return null

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] overflow-hidden rounded-2xl border border-[#2d2d35] group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Contenedor de Slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-shrink-0 w-full h-full">
            
            {/* Imagen de Fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.portada})` }}
            />
            
            {/* Degradados para visibilidad (Copiado de tu imagen) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#101014] via-[#101014]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent" />
            
            {/* Contenido Informativo */}
            <div className="relative h-full flex flex-col justify-end p-8 md:p-14 lg:p-16">
              <div className="max-w-xl space-y-4">
                
                {/* Badge de Descuento Rojo */}
                {slide.porcentaje_descuento > 0 && (
                  <span className="inline-block px-3 py-1 text-xs font-black text-white bg-[#ef4444] rounded-md shadow-lg">
                    -{slide.porcentaje_descuento}%
                  </span>
                )}
                
                {/* Título del Juego */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {slide.titulo}
                </h2>
                
                {/* Descripción Corta */}
                <p className="text-sm md:text-base text-gray-400 font-medium line-clamp-2">
                  {slide.descripcion || "Acceso inmediato a los mejores títulos por un precio increíble."}
                </p>
                
                {/* Botón y Precio Final */}
                <div className="flex items-center gap-6 pt-2">
                  <button className="px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-[#7c3aed]/20">
                    Ver Ofertas
                  </button>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 line-through font-bold">
                      {formatPrice(slide.precio)}
                    </span>
                    <span className="text-2xl font-black text-[#00e5ff]">
                      {formatPrice(slide.precio_con_descuento)}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas (Solo visibles en Hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[#7c3aed] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[#7c3aed] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Puntos de Navegación (Originales) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-[#7c3aed] w-8" : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  )
}