export const metadata = {
  title: 'Portfolio | Abhishek ',
  description: 'Passionate frontend developer with a keen eye for design and a commitment to creating seamless user experiences.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
