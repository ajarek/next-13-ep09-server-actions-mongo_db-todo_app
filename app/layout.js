import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App use Next JS 13.5.6',
  description: 'Next js 13 CRUD App with MongoDB and Server Actions ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
