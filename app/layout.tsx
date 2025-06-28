import type { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: '¿ESTÁS SEGURO DE QUE TUS GUARDIAS ESTÁN CUMPLIENDO SU TRABAJO? ¿O SIMPLEMENTE LO SUPONES?',
  description: 'El sistema inteligente OnPatrol, te permite monitorear en tiempo real, auditar recorridos, registrar accesos y responder con evidencia a cualquier incidente, todo desde tu celular o PC.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <a className="fixed p-3 rounded-full bg-green-500 z-20 right-4 bottom-4 shadow-xl" href='/'><img className='w-14' src="./whatsapp.svg" /></a>
      </body>
    </html>
  )
}
