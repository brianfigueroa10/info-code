import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-providers'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InfoCODE',
  description: 'Sitio de información de Tecnología',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className}  grid min-h-screen grid-rows-[auto,1fr,auto]  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className="flex flex-col items-center justify-center mt-16 mb-8">
            {children}
          </main>
          <footer className="flex items-center justify-center border-t py-6">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Info
              <span className="text-primary font-bold uppercase">Code</span>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
