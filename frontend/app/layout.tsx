import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// --- IMPORTACIÓN DE PROVEEDORES ---
import { CurrencyProvider } from '@/lib/currency-context'
import { CartProvider } from '@/lib/cart-context'
import { AuthProvider } from '@/lib/auth-context' // <--- NUEVO

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'RANDOMPLAY - Tu Tienda de Videojuegos',
  description: 'Las mejores ofertas en videojuegos, tarjetas de regalo y DLC. Precios bajos garantizados.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-[#101014] text-white`}>
        {/* Envolvemos con AuthProvider para que toda la App tenga "memoria" del usuario */}
        <AuthProvider>
          <CurrencyProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </CurrencyProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}