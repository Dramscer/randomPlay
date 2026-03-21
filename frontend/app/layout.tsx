import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'RANDOMPLAY - Tu Tienda de Videojuegos',
  description: 'Las mejores ofertas en videojuegos, tarjetas de regalo y DLC. Precios bajos garantizados.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-[#101014] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
