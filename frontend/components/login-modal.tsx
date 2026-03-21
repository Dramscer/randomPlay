"use client"

import { useState } from 'react'
import { X, Mail, Eye, EyeOff, Gamepad2, ChevronRight, HelpCircle, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [step, setStep] = useState<'main' | 'email' | 'console'>('main')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login/register logic here
    console.log('Submit:', { email, password, isLogin })
  }

  const renderMainOptions = () => (
    <div className="space-y-4">
      {/* Email Option */}
      <button
        onClick={() => setStep('email')}
        className="w-full flex items-center gap-4 p-4 bg-[#252529] dark:bg-[#252529] light:bg-gray-100 hover:bg-[#2d2d35] dark:hover:bg-[#2d2d35] light:hover:bg-gray-200 rounded-xl transition-colors group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-[#7c3aed]" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white dark:text-white light:text-gray-900">Direccion de correo</div>
          <div className="text-sm text-[#9ca3af]">Inicia sesion o crea una cuenta</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-white transition-colors" />
      </button>

      {/* Console Option */}
      <button
        onClick={() => setStep('console')}
        className="w-full flex items-center gap-4 p-4 bg-[#252529] dark:bg-[#252529] light:bg-gray-100 hover:bg-[#2d2d35] dark:hover:bg-[#2d2d35] light:hover:bg-gray-200 rounded-xl transition-colors group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/20 flex items-center justify-center">
          <Gamepad2 className="w-6 h-6 text-[#00e5ff]" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white dark:text-white light:text-gray-900">Solo has jugado en consola?</div>
          <div className="text-sm text-[#9ca3af]">Inicia sesion y recupera tu progreso</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-white transition-colors" />
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#2d2d35]" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-[#1a1a1f] text-sm text-[#9ca3af]">o continua con</span>
        </div>
      </div>

      {/* Gaming Platform Logins */}
      <div className="grid grid-cols-3 gap-3">
        {/* PlayStation */}
        <button className="flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#003791] rounded-xl transition-colors group">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 4v15.5l3.5 1V6.5l2.5-1v12.5l3.5-1.5V4.5L9.5 4zM4 15.5l3.5 1.5V7L4 8.5v7z"/>
          </svg>
          <span className="text-xs text-[#9ca3af] group-hover:text-white">PlayStation</span>
        </button>

        {/* Xbox */}
        <button className="flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#107c10] rounded-xl transition-colors group">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.5-2-4-4.5-4-6.5 0-1.5 1-2.5 2-2.5s2 1 2 1 1-1 2-1 2 1 2 2.5c0 2-1.5 4.5-4 6.5z"/>
          </svg>
          <span className="text-xs text-[#9ca3af] group-hover:text-white">Xbox</span>
        </button>

        {/* Nintendo */}
        <button className="flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#e60012] rounded-xl transition-colors group">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6V4zm-3 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-14h-6v16h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
          </svg>
          <span className="text-xs text-[#9ca3af] group-hover:text-white">Nintendo</span>
        </button>
      </div>

      {/* Help Links */}
      <div className="pt-6 space-y-3 border-t border-[#2d2d35] mt-6">
        <button className="w-full flex items-center gap-3 p-3 text-[#9ca3af] hover:text-white hover:bg-[#252529] rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm">Tienes problemas para iniciar sesion?</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 text-[#9ca3af] hover:text-white hover:bg-[#252529] rounded-lg transition-colors">
          <Shield className="w-5 h-5" />
          <span className="text-sm">Politica de privacidad</span>
        </button>
      </div>
    </div>
  )

  const renderEmailForm = () => (
    <div className="space-y-4">
      <button
        onClick={() => setStep('main')}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Volver</span>
      </button>

      {/* Toggle Login/Register */}
      <div className="flex bg-[#252529] rounded-lg p-1 mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={cn(
            "flex-1 py-2.5 rounded-md text-sm font-medium transition-colors",
            isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"
          )}
        >
          Iniciar Sesion
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={cn(
            "flex-1 py-2.5 rounded-md text-sm font-medium transition-colors",
            !isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"
          )}
        >
          Crear Cuenta
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm text-[#9ca3af] mb-2">Correo electronico</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full pl-12 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-[#9ca3af] mb-2">Contrasena</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-4 pr-12 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Confirmar contrasena</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full pl-4 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors"
                required
              />
            </div>
          </div>
        )}

        {isLogin && (
          <div className="flex justify-end">
            <button type="button" className="text-sm text-[#7c3aed] hover:text-[#9d6eff] transition-colors">
              Olvidaste tu contrasena?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors"
        >
          {isLogin ? 'Iniciar Sesion' : 'Crear Cuenta'}
        </button>
      </form>
    </div>
  )

  const renderConsoleOptions = () => (
    <div className="space-y-4">
      <button
        onClick={() => setStep('main')}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Volver</span>
      </button>

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Recupera tu progreso</h3>
        <p className="text-sm text-[#9ca3af]">Conecta tu cuenta de consola para sincronizar tus compras</p>
      </div>

      {/* PlayStation Network */}
      <button className="w-full flex items-center gap-4 p-4 bg-[#003791] hover:bg-[#0044ad] rounded-xl transition-colors">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.5 4v15.5l3.5 1V6.5l2.5-1v12.5l3.5-1.5V4.5L9.5 4zM4 15.5l3.5 1.5V7L4 8.5v7z"/>
        </svg>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">PlayStation Network</div>
          <div className="text-sm text-blue-200">Conectar cuenta PSN</div>
        </div>
        <ChevronRight className="w-5 h-5 text-white/70" />
      </button>

      {/* Xbox Live */}
      <button className="w-full flex items-center gap-4 p-4 bg-[#107c10] hover:bg-[#128c12] rounded-xl transition-colors">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.5-2-4-4.5-4-6.5 0-1.5 1-2.5 2-2.5s2 1 2 1 1-1 2-1 2 1 2 2.5c0 2-1.5 4.5-4 6.5z"/>
        </svg>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">Red Xbox</div>
          <div className="text-sm text-green-200">Conectar cuenta Xbox Live</div>
        </div>
        <ChevronRight className="w-5 h-5 text-white/70" />
      </button>

      {/* Nintendo */}
      <button className="w-full flex items-center gap-4 p-4 bg-[#e60012] hover:bg-[#ff1a1a] rounded-xl transition-colors">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6V4zm-3 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-14h-6v16h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
        </svg>
        <div className="flex-1 text-left">
          <div className="font-semibold text-white">Cuenta de Nintendo</div>
          <div className="text-sm text-red-200">Conectar Nintendo Account</div>
        </div>
        <ChevronRight className="w-5 h-5 text-white/70" />
      </button>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#1a1a1f] rounded-2xl shadow-2xl animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2d2d35]">
          <div>
            <h2 className="text-xl font-bold text-white">
              {step === 'main' ? 'Bienvenido a RANDOMPLAY' : 
               step === 'email' ? (isLogin ? 'Iniciar Sesion' : 'Crear Cuenta') :
               'Conectar Consola'}
            </h2>
            <p className="text-sm text-[#9ca3af] mt-1">
              {step === 'main' ? 'Elige como quieres continuar' : 
               step === 'email' ? 'Ingresa tus datos' :
               'Selecciona tu plataforma'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9ca3af] hover:text-white transition-colors rounded-lg hover:bg-[#252529]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {step === 'main' && renderMainOptions()}
          {step === 'email' && renderEmailForm()}
          {step === 'console' && renderConsoleOptions()}
        </div>
      </div>
    </div>
  )
}
