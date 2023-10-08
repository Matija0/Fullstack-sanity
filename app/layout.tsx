import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'JS Mastery',
  description: 'JS Mastery Resources',
  other:{
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twittter:image": "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
    "og:type": "website",
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 '>{children}</body>
    </html>
  )
}
