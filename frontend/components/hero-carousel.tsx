"use client"

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  discount: string
  image: string
  bgColor: string
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: 'OFERTAS DE PRIMAVERA',
    subtitle: 'Hasta 80% de descuento en los mejores juegos',
    discount: '-80%',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=400&fit=crop',
    bgColor: 'from-[#7c3aed]/30 to-[#101014]'
  },
  {
    id: 2,
    title: 'LANZAMIENTOS 2024',
    subtitle: 'Pre-ordena los juegos mas esperados',
    discount: 'PRE-ORDER',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
    bgColor: 'from-[#00e5ff]/30 to-[#101014]'
  },
  {
    id: 3,
    title: 'TARJETAS DE REGALO',
    subtitle: 'Steam, PlayStation, Xbox y mas',
    discount: '-5%',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1200&h=400&fit=crop',
    bgColor: 'from-[#10b981]/30 to-[#101014]'
  },
  {
    id: 4,
    title: 'GAME PASS ULTIMATE',
    subtitle: 'Acceso a cientos de juegos por un precio increible',
    discount: '-27%',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=1200&h=400&fit=crop',
    bgColor: 'from-[#ef4444]/30 to-[#101014]'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div 
      className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex-shrink-0 w-full h-full"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={cn("absolute inset-0 bg-gradient-to-r", slide.bgColor)} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12">
              <div className="max-w-xl">
                {/* Discount Badge */}
                <span className="inline-block px-3 py-1 mb-3 text-sm font-bold text-white bg-[#ef4444] rounded-md">
                  {slide.discount}
                </span>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {slide.title}
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-[#9ca3af] mb-4">
                  {slide.subtitle}
                </p>
                
                <button className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors">
                  Ver Ofertas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index 
                ? "w-6 bg-[#7c3aed]" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
