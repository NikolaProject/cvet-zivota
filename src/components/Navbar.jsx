import React, { useState } from 'react'
import Logo from '../assets/WhiteLogo.svg'
// import Menu from '../assets/Vector.svg'
import { slide as Menu } from 'react-burger-menu'
import { useEffect } from 'react'

/*
function Header(){
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll =()=> {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
*/


const Navbar = () => {
  const showSettings = (event) => {
    event.preventDefault();

    
  }

  return (
    <div className='font-opensans bg-hero lg:bg-herotri bg-cover md:h-[80vh] bg-center '>
     
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
            <a id="home" className="menu-item" href="/Onama">O nama</a>
          </Menu>
        </div>

        <ul className='hidden md:flex text-white items-center'>
          <a className='p-5' href="/Obukeikursevi">Kursevi i Obuke</a>
          <a className='p-5' href="/NasiProjekti">Nasi Projekti</a>
          <a className='p-5' href="/Onama">O nama</a>
          <a href="/Kontakt"><button className='bg-zuta w-[189px] h-[51px] rounded-md '>Kontaktiraj Nas</button></a>
        </ul>

     
      </div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col '>
        <p className='text-white font-velikaslova text-5xl mb-10 md:text-[64px]'>Centar za duhovni razvoj i edukaciju Cvet Života</p>
        <p className='text-white'>Cvet života je simbol stvaranja univerzuma i svekreacije,ali i globalni pokret čija je cilj raditi na usavršavanju sebe i kolektiva. Svako ko se vodi idejom da pomaže svetu i drugima onoliko koliko mu je dato, je neko ko zivi u skladu sa cvetom života“
        </p>
        <div className='mt-4 flex justify-center'>
          <a href="/Obukeikursevi"><button className='w-[150px] h-[41px] mr-10 sm:w-[190px] sm:h-[51px]  bg-zuta rounded-md mb-2'>Kursevi i Obuke</button></a>
          <a href="/Kontakt"><button className='w-[150px] h-[41px] sm:w-[190px] sm:h-[51px] border-zuta border-[1px] rounded-md text-zuta'>Kontaktiraj Nas</button></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar