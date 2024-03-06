import Head from 'next/head'
import Navbarctu from './Navbarctu'
import Footer from './footer'
import { Chicle } from 'next/font/google'
import { Children } from 'react'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>CTU | Clube De Tiro Urandi</title>
        <meta
          name="description"
          content="Clube de Tiro Urandi: sua experiência de tiro esportivo em um ambiente seguro e profissional. Pratique conosco e descubra a emoção do tiro com instrutores especializados."
        />
      </Head>
      <Navbarctu />
      {children}
      
    </>
  )
}