import React from 'react'
import Kamen from '../assets/o udruzenju 2nd.png'

const Kakofunkcionise = () => {
  return (
    <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

        

      <div className='mt-20 lg:flex rounded '>

        <img src={Kamen} className='hidden lg:flex' alt="" />

        <div className='p-5 mt-10'>
        <p className='font-velikaslova text-4xl pb-10 md:text-6xl'>Kako udruženje funkcioniše?</p>
        <p>Udruženje funkcioniše na principu saborništva: duhovno, umno i moralno najčistiji donose odluke za zajednicu tj. udruženje. Osam članova najviših duhovnih karakteristika donosi odluke, a Savetom predsedava direktor Udruženja sa mandatom od 4 godine. 
<br /><br />
Širi krug Saveta sastoji se od više desetina članova koji mogu predlagati ideje i zahteve za duhovni ili fizički rad. Ostatak grupe pomaže prema mogućnostima i radi duhovne tehnike za kolektiv,ili doprinosi na fizičkom nivou onako kao su u mogućnosti. Svi aktivni članovi prošli su obuku Centra za duhovni razvoj (Udruženja) i duhovnim vidom i radiestezijom od Saveta potvrđeni su kao čisti, ispravni i sposobni da rade na sebi i kolektivu.</p>
        
        <img src={Kamen} className='lg:hidden m-auto mt-10' alt="" />

        </div>  
        
      </div>
    </div>
  )
}

export default Kakofunkcionise