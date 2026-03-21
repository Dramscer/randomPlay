"use client"

import { useState, useEffect } from 'react'
import { User, Mail, Heart, Save, LogOut, Loader2, Gamepad2, ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PerfilPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // Estado para los datos del usuario
  const [userData, setUserData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: ''
  })

  // Estado para la lista de favoritos
  const [favoritos, setFavoritos] = useState<any[]>([])

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    
    // Si no hay token, lo mandamos al inicio (Protección de ruta)
    if (!token) {
      router.push('/')
      return
    }

    const cargarDatos = async () => {
      try {
        // 1. Cargar datos personales
        const resPerfil = await fetch('http://127.0.0.1:8000/api/videojuegos/perfil/', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        
        // 2. Cargar favoritos
        const resFavs = await fetch('http://127.0.0.1:8000/api/videojuegos/favoritos/', {
          headers: { 'Authorization': `Bearer ${token}` }
        })

        if (resPerfil.ok) {
          const data = await resPerfil.json()
          setUserData(data)
        }
        
        if (resFavs.ok) {
          const favsData = await resFavs.json()
          setFavoritos(favsData)
        }
      } catch (error) {
        console.error("Error cargando perfil:", error)
      } finally {
        setLoading(false)
      }
    }

    cargarDatos()
  }, [router])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const token = localStorage.getItem('access_token')

    try {
      const res = await fetch('http://127.0.0.1:8000/api/videojuegos/perfil/1/', {
        method: 'PATCH', // Usamos PATCH para actualizar solo algunos campos
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email
        })
      })

      if (res.ok) {
        alert("¡Perfil actualizado con éxito!")
      }
    } catch (error) {
      alert("Error al actualizar")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-[#101014] flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-[#7c3aed] animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#101014] text-white pt-10 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN PERSONAL */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1a1a1f] border border-[#2d2d35] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <User className="w-24 h-24" />
            </div>
            
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6 flex items-center gap-2">
              <ShieldCheck className="text-[#00e5ff]" /> Mis Datos
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Usuario</label>
                <div className="bg-[#101014] p-3 rounded-xl border border-[#2d2d35] text-gray-400 text-sm">
                  @{userData.username}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Nombre</label>
                  <input 
                    type="text" 
                    value={userData.first_name}
                    onChange={(e) => setUserData({...userData, first_name: e.target.value})}
                    className="w-full bg-[#101014] border border-[#2d2d35] p-3 rounded-xl text-sm focus:border-[#7c3aed] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Apellido</label>
                  <input 
                    type="text" 
                    value={userData.last_name}
                    onChange={(e) => setUserData({...userData, last_name: e.target.value})}
                    className="w-full bg-[#101014] border border-[#2d2d35] p-3 rounded-xl text-sm focus:border-[#7c3aed] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Email</label>
                <input 
                  type="email" 
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full bg-[#101014] border border-[#2d2d35] p-3 rounded-xl text-sm focus:border-[#7c3aed] outline-none transition-all"
                />
              </div>

              <button 
                type="submit" 
                disabled={saving}
                className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>

        {/* COLUMNA DERECHA: FAVORITOS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1a1a1f] border border-[#2d2d35] rounded-3xl p-8 min-h-[500px]">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-2">
              <Heart className="text-[#ef4444] fill-[#ef4444]" /> Mi Lista de Deseos
            </h2>

            {favoritos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 space-y-4">
                <Gamepad2 className="w-16 h-16 opacity-20" />
                <p className="font-medium">Aún no has guardado ningún juego como favorito.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoritos.map((fav) => (
                  <div key={fav.id} className="flex gap-4 p-4 bg-[#101014] border border-[#2d2d35] rounded-2xl group hover:border-[#7c3aed]/50 transition-all">
                    <img 
                      src={fav.videojuego_data.portada} 
                      alt={fav.videojuego_data.titulo}
                      className="w-20 h-24 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="font-bold text-sm line-clamp-1">{fav.videojuego_data.titulo}</h3>
                      <p className="text-[#00e5ff] font-black text-lg">{fav.videojuego_data.precio_descuento_formateado}</p>
                      <button className="text-[10px] text-red-500 font-bold uppercase mt-2 hover:underline">Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}