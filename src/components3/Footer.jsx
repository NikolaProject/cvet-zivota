import React from 'react'
import Buda from '../assets/buda.png'
import Logo from '../assets/WhiteLogo.svg'
import Menu from '../assets/Vector.svg'
import Sijalica from '../assets/Sijalica.svg'

const Footer = () => {
  return (
    <div className=' bg-zelena mt-10'>
      <div className=' md:flex lg:w-[1140px] m-auto text-white justify-center items-center'>
        <div className='h-[50%] p-10 flex '>
            <img src={Sijalica} alt="" />
            <p className='ml-3'>“Suština je u tome da iznova i iznova realizujići svoje planove u stvarnosti, trenirate svoju sposobnost stvaranja, približavajući se nivou Stvoritelja.”</p>
        </div>
        <img className='m-auto' src={Buda} alt="" />
      </div>
        <div className='bg-crna'>
      <div className=' flex justify-between lg:w-[1140px] items-center m-auto'>
      <a href="/">
      <img src={Logo} alt="Logo" />
      </a>
      

        <ul className='flex text-white items-center'>
          <a className='hidden sm:flex p-5' href="/Obukeikursevi">Kursevi i Obuke</a>
          <a className='hidden sm:flex p-5' href="/Strukturaobuke">Struktura obuke</a> 
          <a className='hidden sm:flex p-5' href="/NasiProjekti">Naši Projekti</a>
          <a className='hidden sm:flex p-5' href="/Napomene">Napomene</a>
          <a className='hidden sm:flex p-5 mr-0 md:mr-40' href="/Onama">O nama</a>
          <a href="/Kontakt"><button className='bg-zuta w-[189px] h-[51px] rounded-md mr-3 sm:mr-0'>Kontaktiraj Nas</button></a>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer