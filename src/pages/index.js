import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarctu from '@/components/Navbarctu';
import Servicos from '@/components/Servicos';
import Baner from '@/components/baner';
import Eventos from '@/components/eventos';
import Sobre from '@/components/sobre';
import Contato from '@/components/contato';
import Footer from '@/components/footer';




export default function Home() {
  return (
    <div className='bg-white min-h-screen h-screen'>
      <main className='pt-[127px]'>
        <section id='Home'></section>
          <Baner />
        <section id='Servicos'></section>
          <Servicos/>
        <section id='Eventos'></section>
        <Eventos/>
        <section id='Sobre'></section>
        <Sobre/>
        <section id='Contato'></section>
        <Contato/>
      </main>
      <footer>
      <Footer  />
      </footer>
    </div>
  )
}
