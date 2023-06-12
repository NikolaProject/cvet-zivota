import React from 'react'
import Logo from '../assets/WhiteLogo.svg'
import { slide as Menu } from 'react-burger-menu'

const Kontakt = () => {
  const showSettings = (event) => {
    event.preventDefault();
  }
  return (
    <div className='font-opensans bg-kontakt bg-cover  bg-center '>

    <div className='flex justify-between lg:w-[1140px] items-center m-auto'>
      <a href="/">
      <img src={Logo} alt="Logo" />
      </a>
      <div className='mr-5 w-8  md:hidden'>
        
      </div>

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
          <a href="/Kontakt"></a><button className='bg-zuta w-[189px] h-[51px] rounded-md'>Kontaktiraj Nas</button>
        </ul>

    </div>

    <div className='md:flex sm:mt-24 lg:w-[1140px] h-[1024px] m-auto p-4 lg:p-0'>
        <div>
            <p className='font-velikaslova text-5xl text-white mb-10 mr-10'>Kontaktiraj Nas Već Danas</p>
            <p className='md:w-[450px] text-white'>Članovi centra za duhovni razvoj su tu za svakog, a svoje usluge naplaćujemo samo kada je klijent zadovoljan sa radom. 
<br /><br />
Javite nam se običnom porukom ili na viber i kažite koji je vaš problem, a mi ćemo probati da vam pomognemo koliko smo u mogućnosti.</p>
        </div>
        <div className='justify-cente m-auto text-white mt-7 text-center lg:flex'>
          <div>
            <div className='border-zinc-300 border-[1px] mb-2 lg:mr-2 rounded-md py-4 lg:w-[259px] lg:h-[165px]'>
                <p className='text-2xl font-bold'>Centrala</p>
                
                <div className='md:mt-10  bg-siva text-black rounded-full mx-3 py-1 font-bold'><img src="" alt="" /> <p>00381 64 532 39 58</p></div>
            </div>
            
          </div>
          
        </div>
    </div>
    
  </div>
  )
}

export default Kontakt