import React from 'react'
import Buduci from '../assets/buduciprojekti.png'
import Noteicon from '../assets/ikonica.svg'
import Gender from '../assets/Group 7.png'
import Zemlja from '../assets/planeta.svg'
import Prijatelji from '../assets/friends.svg'

const Buduciprojekti = () => {
  return (
    <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

      <div className='p-3 lg:p-0 mt-20 lg:flex rounded '>
        
        <div className=''>
            <p className='font-velikaslova text-5xl'>Budući Projekti Udruženja Za Opšte Dobro</p>
       

        <div className='flex mt-10 '>
            <div>
            <img className='min-w-fit bg-zuta  p-4 rounded-full' src={Noteicon} alt="" />
            </div>
            <p className='ml-10'>Pokretanje peticije o ispitivanju štetnosti mrežnih  tornjeva i talasnih uredjaja 5G generacije.</p>
        </div>
        <div className='flex mt-10'>
            <div>
            <img className='w-[55px]  rounded-full absolute' src={Gender} alt="" />
            </div>
            <p className='ml-20'>Ispitivanje uzročnika globalne neplodnosti muškaraca i žena. Pokretanje peticijije u cilju ograničavanja svih onih faktora koji utiču na neplodnost stanovništva.</p>
        </div>
        <div className='flex mt-10'>
            <div>
            <img className='min-w-fit bg-zuta  p-4 rounded-full' src={Zemlja} alt="" />
            </div>
            <p className='ml-10'>Izrada tehničkih aparata koji mogu meriti i snimati duhovne svetove i njihov uticaj na svet, a potom i njihova upotreba radi dokazivanja šrioj javnosti i naučnoj zajednici medjusobno uticanje fizičkih i duhovnih svetova, jednih na druge.</p>
        </div>
        <div className='flex mt-10'>
            <div>
            <img className='min-w-fit bg-zelena  p-4 rounded-full' src={Prijatelji} alt="" />
            </div>
            <p className='ml-10'>Dublje povezivanje sa sličnim organizacijama iz celog sveta radi deljenja znanja,otkrića ,kao i povezivanja istomišljenika.</p>
        </div>

        </div>

        <img src={Buduci} className='m-auto' alt="" />
      </div>
    </div>
    
  )
}

export default Buduciprojekti