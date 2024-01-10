import { Inter } from 'next/font/google'
import './globals.css'

// import './styles/nav.scss'
// import './styles/home.scss'
// import './styles/about.scss'
// import './styles/research.scss'
// import './styles/projects.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Najib Abdi - ',
  description: 'Najib Abdi is a full stack and mobile app developer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
