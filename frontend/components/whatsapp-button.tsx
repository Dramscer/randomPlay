"use client"

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const whatsappNumber = "5212345678901"
  const message = "Hola! Me interesa obtener mas informacion sobre los juegos de RANDOMPLAY"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-lg shadow-lg p-3 max-w-[200px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-[#252529] rounded-full flex items-center justify-center text-white hover:bg-[#3f3f46] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm text-gray-800 font-medium">
            Necesitas ayuda? Escribenos!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${isHovered ? "pr-6" : ""}`}
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${isHovered ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
          WhatsApp
        </span>
      </a>
    </div>
  )
}