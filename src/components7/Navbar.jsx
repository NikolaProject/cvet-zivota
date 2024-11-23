import React, { useState } from 'react'
import Logo from '../assets/WhiteLogo.svg'
import { slide as Menu } from 'react-burger-menu'
import { useEffect } from 'react'


const Navbar = () => {
  const showSettings = (event) => {
    event.preventDefault();

    
  }

  return (
    <div className='font-opensans bg-zelena mt-10 bg-cover md:h-[40vh] bg-center '>
     
      <div className='flex justify-between w-full max-w-[1140px] items-center m-auto'>
        <a href="/" className=''>
          <img src={Logo} alt="Logo" />
        </a>
        {/* <img src={Menu} className='mr-5 w-8  md:hidden' alt="Menu" /> */}
        <div className='mr-5 w-8  md:hidden'>
          <Menu right>
            <a id="home" className="menu-item" href="/">Početna</a>
            <a id="about" className="menu-item" href="/Obukeikursevi">Kursevi i Obuke</a>
            <a id="contact" className="menu-item" href="/NasiProjekti">Naši Projekti</a>
            <a id="home" className="menu-item" href="/Napomene">Napomene</a>
            <a id="home" className="menu-item" href="/Onama">O nama</a>
          </Menu>
        </div>

        <ul className='hidden md:flex text-white items-center'>
          <a className='p-5' href="/Obukeikursevi">Kursevi i Obuke</a>
          <a className='p-5' href="/NasiProjekti">Naši Projekti</a>
          <a className='p-5' href="/Napomene">Napomene</a>
          <a className='p-5' href="/Onama">O nama</a>
          <a href="/Kontakt"><button className='bg-zuta w-[189px] h-[51px] rounded-md '>Kontaktiraj Nas</button></a>
        </ul>

     
      </div>
      <div className='max-w-[400px] mt-[-250px] w-full h-screen mx-auto text-center justify-center flex flex-col '>
        <p className='text-white font-velikaslova text-5xl mb-10 md:text-[64px]'>Napomene</p>
      </div>
    </div>
  )
}

export default Navbar