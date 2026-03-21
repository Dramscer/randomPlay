"use client"

import { Gamepad2, Users, GraduationCap, MapPin, Heart, Zap } from 'lucide-react'
import { SocialLinks } from './social-icons'

export function AboutSection() {
  return (
    <section id="nuestra-historia" className="relative py-20 overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <iframe
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/-BXiVs8n2ek?autoplay=1&mute=1&loop=1&playlist=-BXiVs8n2ek&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#7c3aed]/20 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium mb-4">
            Conoce al Equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra <span className="bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent">Historia</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Una aventura que comenzo con la pasion por los videojuegos y el deseo de crear algo increible
          </p>
        </div>

        {/* Main Story Card */}
        <div className="bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Side - Icon/Visual */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#00e5ff] p-1">
                <div className="w-full h-full rounded-2xl bg-[#101014] flex items-center justify-center">
                  <Gamepad2 className="w-16 h-16 md:w-20 md:h-20 text-[#00e5ff]" />
                </div>
              </div>
            </div>

            {/* Right Side - Story */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#7c3aed]" />
                <span className="text-[#7c3aed] font-semibold">Orizaba, Veracruz</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Estudiantes con una Mision
              </h3>
              <p className="text-[#9ca3af] leading-relaxed mb-6">
                Somos un grupo de estudiantes del <span className="text-white font-semibold">8vo semestre de la carrera de Ingenieria</span> en Orizaba, Veracruz. 
                Unidos por nuestra pasion por los videojuegos, decidimos crear <span className="text-[#00e5ff] font-semibold">RANDOMPLAY</span>, 
                una plataforma donde los gamers puedan encontrar los mejores juegos a precios increibles.
              </p>
              <p className="text-[#9ca3af] leading-relaxed mb-6">
                Cada linea de codigo, cada diseno y cada funcion de esta tienda fue creada con amor y dedicacion. 
                Creemos que los videojuegos son mas que entretenimiento: son arte, son historias, son conexiones. 
                Y queremos compartir esa magia contigo.
              </p>

              {/* Social Links */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <span className="text-sm text-[#9ca3af]">Siguenos en redes sociales:</span>
                <SocialLinks variant="colored" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#7c3aed] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/30 transition-colors">
              <GraduationCap className="w-7 h-7 text-[#7c3aed]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Innovacion Estudiantil</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Como futuros ingenieros, aplicamos todo lo aprendido en nuestra carrera para crear una experiencia de compra unica y moderna.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#00e5ff] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-[#00e5ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#00e5ff]/30 transition-colors">
              <Heart className="w-7 h-7 text-[#00e5ff]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Pasion por el Gaming</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              No solo vendemos juegos, los jugamos. Entendemos lo que los gamers buscan porque somos parte de la comunidad.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#10b981] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-[#10b981]/20 flex items-center justify-center mb-4 group-hover:bg-[#10b981]/30 transition-colors">
              <Users className="w-7 h-7 text-[#10b981]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Comunidad Primero</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Construimos RANDOMPLAY pensando en ti. Precios justos, entrega instantanea y soporte de gamers para gamers.
            </p>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-1">8vo</div>
            <div className="text-sm text-[#9ca3af]">Semestre</div>
          </div>
          <div className="bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#00e5ff] mb-1">100%</div>
            <div className="text-sm text-[#9ca3af]">Pasion</div>
          </div>
          <div className="bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#10b981] mb-1">24/7</div>
            <div className="text-sm text-[#9ca3af]">Gaming</div>
          </div>
          <div className="bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-bold text-white mb-1">
              <Zap className="w-6 h-6 md:w-8 md:h-8" />
              <span>VER</span>
            </div>
            <div className="text-sm text-[#9ca3af]">Veracruz</div>
          </div>
        </div>
      </div>
    </section>
  )
}
