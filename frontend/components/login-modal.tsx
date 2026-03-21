"use client"

import { useState } from 'react'
import { X, Mail, Eye, EyeOff, Gamepad2, ChevronRight, HelpCircle, Shield, Loader2, User } from 'lucide-react'
import { useAuth } from '@/lib/auth-context' // <--- IMPORTACIÓN DEL CONTEXTO

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // --- USAMOS EL CEREBRO GLOBAL ---
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [step, setStep] = useState<'main' | 'email' | 'console'>('main')
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      setLoading(false)
      return
    }

    const endpoint = isLogin 
      ? 'http://127.0.0.1:8000/api/videojuegos/auth/login/' 
      : 'http://127.0.0.1:8000/api/videojuegos/auth/registro/';

    const payload = isLogin 
      ? { username: email, password } 
      : { username, email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || data.error || "Algo salió mal. Verifica tus datos.")
      }

      if (isLogin) {
        // --- AQUÍ OCURRE LA MAGIA ---
        // Usamos la función del contexto. Ella guarda los tokens y actualiza el Header
        login(data.access, data.refresh)
        onClose()
      } else {
        alert("¡Cuenta creada! Ahora inicia sesión.")
        setIsLogin(true)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const renderEmailForm = () => (
    <div className="space-y-4">
      <button
        onClick={() => { setStep('main'); setError(null); }}
        className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-sm">Volver</span>
      </button>

      <div className="flex bg-[#252529] rounded-lg p-1 mb-6">
        <button
          onClick={() => { setIsLogin(true); setError(null); }}
          className={cn(
            "flex-1 py-2.5 rounded-md text-sm font-medium transition-colors",
            isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"
          )}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => { setIsLogin(false); setError(null); }}
          className={cn(
            "flex-1 py-2.5 rounded-md text-sm font-medium transition-colors",
            !isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"
          )}
        >
          Crear Cuenta
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2 ml-1">Nombre de Usuario</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej. PlayerOne"
                className="w-full pl-12 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed] transition-all"
                required
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2 ml-1">
            {isLogin ? 'Correo o Usuario' : 'Correo electrónico'}
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full pl-12 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed] transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2 ml-1">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-4 pr-12 py-3 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed] transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div>
            <label className="block text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2 ml-1">Confirmar contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-4 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-xl text-white outline-none focus:border-[#7c3aed] transition-all"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-[#7c3aed]/20"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {isLogin ? 'Acceder' : 'Crear Cuenta'}
        </button>
      </form>
    </div>
  )

  const renderMainOptions = () => (
    <div className="space-y-4">
      <button onClick={() => setStep('email')} className="w-full flex items-center gap-4 p-4 bg-[#252529] hover:bg-[#2d2d35] rounded-xl transition-all group border border-transparent hover:border-[#7c3aed]/50">
        <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-[#7c3aed]" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-bold text-white text-sm uppercase tracking-tighter">Dirección de correo</div>
          <div className="text-[10px] text-[#9ca3af] font-bold uppercase tracking-widest">Inicia sesión o crea una cuenta</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-white" />
      </button>

      <button onClick={() => setStep('console')} className="w-full flex items-center gap-4 p-4 bg-[#252529] hover:bg-[#2d2d35] rounded-xl transition-all group border border-transparent hover:border-[#00e5ff]/50">
        <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/20 flex items-center justify-center">
          <Gamepad2 className="w-6 h-6 text-[#00e5ff]" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-bold text-white text-sm uppercase tracking-tighter">¿Juegas en Consola?</div>
          <div className="text-[10px] text-[#9ca3af] font-bold uppercase tracking-widest">Sincroniza tus plataformas</div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-white" />
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#2d2d35]" /></div>
        <div className="relative flex justify-center"><span className="px-4 bg-[#1a1a1f] text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">social connect</span></div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {['PSN', 'XBOX', 'NINTENDO'].map((social) => (
          <button key={social} className="flex flex-col items-center gap-2 py-4 bg-[#252529] hover:bg-[#7c3aed]/10 rounded-xl transition-all group border border-[#2d2d35] hover:border-[#7c3aed]/50">
             <span className="text-[10px] font-black text-[#9ca3af] group-hover:text-[#7c3aed]">{social}</span>
          </button>
        ))}
      </div>
    </div>
  )

  const renderConsoleOptions = () => (
    <div className="space-y-4">
      <button onClick={() => setStep('main')} className="flex items-center gap-2 text-[#9ca3af] hover:text-white mb-4">
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span className="text-xs font-bold uppercase tracking-widest">Volver</span>
      </button>
      <div className="text-center py-10">
        <h3 className="text-xl font-black italic uppercase text-white mb-2">Próximamente</h3>
        <p className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest">Podrás vincular tus cuentas de consola directamente.</p>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#1a1a1f] rounded-[2rem] shadow-2xl border border-[#2d2d35] overflow-hidden">
        <div className="flex items-center justify-between p-8 border-b border-[#2d2d35]">
          <h2 className="text-2xl font-black italic text-white tracking-tighter uppercase">
            {step === 'main' ? 'ACCESO' : step === 'email' ? (isLogin ? 'LOGIN' : 'UNIRSE') : 'CONSOLA'}
          </h2>
          <button onClick={onClose} className="p-2 text-[#9ca3af] hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {step === 'main' && renderMainOptions()}
          {step === 'email' && renderEmailForm()}
          {step === 'console' && renderConsoleOptions()}
        </div>
      </div>
    </div>
  )
}