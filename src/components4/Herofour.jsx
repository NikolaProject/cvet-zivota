import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Logo from '../assets/WhiteLogo.svg'

export const Herofour = () => {
  const showSettings = (event) => {
    event.preventDefault();
  }
  return (
    <div className='font-opensans bg-onama bg-cover h-[100vh] bg-center '>

      <div className='flex justify-between lg:w-[1140px] items-center m-auto'>
        <a href="/">
        <img src={Logo} alt="Logo" />
        </a>
        <div className='mr-5 w-8  md:hidden'>
          <Menu right>
          <a id="home" className="menu-item" href="/">Početna</a>
            <a id="about" className="menu-item" href="/Obukeikursevi">Kursevi i Obuke</a>
            <a id="contact" className="menu-item" href="/NasiProjekti">Naši Projekti</a>
            <a id="home" className="menu-item" href="/Onama">O nama</a>
          </Menu>
        </div>
       

        <ul className='hidden md:flex text-white items-center'>
          <a className='p-5' href="/Obukeikursevi">Kursevi i Obuke</a>
          <a className='p-5' href="/NasiProjekti">Nasi Projekti</a>
          <a className='p-5' href="/Onama">O nama</a>
          <a href="/Kontakt"><button className='bg-zuta w-[189px] h-[51px] rounded-md'>Kontaktiraj Nas</button></a>
        </ul>

      </div>
      <div className='max-w-[700px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col '>
      <p className='text-white font-velikaslova text-5xl mb-10 md:text-[64px]'>O udruženju cvet života</p>
      <p className='text-white'>„Centar za duhovni razvoj i edukaciju Cvet života“ jeste udruženje građana, pravno registrovano za istraživanje duhovnih fenomena, pružanje duhovne pomoći, savetovanja i održavanje obuka za duhovne tehnike kao što su: regresoterapija, radiestezija, bioenergija, meditacija i mnoge druge.</p>
      </div>
    </div>
  )
}
