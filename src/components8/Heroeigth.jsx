import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Logo from '../assets/WhiteLogo.svg'

export const Heroeight = () => {
  const showSettings = (event) => {
    event.preventDefault();
  }
  return (
    <div className='font-opensans bg-heroosam bg-cover h-[100vh] bg-center mt-0'>

      <div className='flex justify-between lg:w-[1140px] items-center m-auto'>
        <a href="/">
        <img src={Logo} alt="Logo" />
        </a>
        <div className='mr-5 w-8 md:hidden'>
          <Menu right>
            <a id="home" className="menu-item" href="/">Početna</a>
            <a id="about" className="menu-item" href="/Obukeikursevi">Kursevi i Obuke</a>
            <a id="about" className="menu-item" href="/Strukturaobuke">Struktura obuke</a>
            <a id="contact" className="menu-item" href="/NasiProjekti">Naši Projekti</a>
            <a id="home" className="menu-item" href="/Napomene">Napomene</a>
            <a id="home" className="menu-item" href="/Onama">O nama</a>
          </Menu>
        </div>
       

        <ul className='hidden md:flex text-white items-center'>
          <a className='p-5' href="/Obukeikursevi">Kursevi i Obuke</a>
          <a className='p-5' href="/Strukturaobuke">Struktura obuke</a>
          <a className='p-5' href="/NasiProjekti">Naši Projekti</a>
          <a className='p-5' href="/Napomene">Napomene</a>
          <a className='p-5' href="/Onama">O nama</a>
          <a href="/Kontakt"><button className='bg-zuta w-[189px] h-[51px] rounded-md'>Kontaktiraj Nas</button></a>
        </ul>

      </div>
      <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col '>
      <p className='font-velikaslova text-5xl mb-10 md:text-[64px]'>
        <span className='text-white'>Struktura obuke </span>
        <span className='text-zuta'>„Cvet Života”</span>
      </p>
      <p className='text-white font-opensans justify-center'>Cilj obuke „Cvet života” je da duhovne tragaoce poduči disciplini u duhovnom radu, da prezentujemo jedan logični i praktični duhovni put koji ljudi mogu slediti na putu duhovne evolucije kroz etape rasta nivoa svesti i drugih duhovnih parametara. Stoga obuka ima stepene – korake koje je poželjno proći. </p>
      </div>
    </div>
  )
}

