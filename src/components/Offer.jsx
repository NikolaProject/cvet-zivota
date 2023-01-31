import React from 'react'
import Phone from '../assets/Phone.svg'
import Prva from '../assets/1st.png'
import Druga from '../assets/2nd.png'
import Treca from '../assets/3rd.png'
import Viber from '../assets/Viber.svg'
import Waap from '../assets/Waap.svg'




const Offer = () => {
  return (
    <div className=''>
      
      
        <div className=' mx-auto lg:w-[1140px] lg:h-[945px]'>
        <div className=''>
        <p className='font-velikaslova text-[54px]'>Šta Vam Nudimo?</p>
        <p className=' lg:w-[620px]'>Ovo su terapeutske i energetske usluge  koje nudimo, a sve se rade online, preko viber ili whatsapp video poziva. Javite nam se na viber i napišite koji problem imate, a mi vam možemo dati sugestiju kako najbolje da ga rešite uz našu pomoć.</p>
        <div className='flex mt-4'>
        <img src={Viber} alt="" />
        <img className='px-2' src={Waap} alt="" />
        <p className='bold'>00381 64 3307907</p>
        </div>
        </div>
        

        <div className=' m-auto md:flex md:space-x-2 mt-10 '>
            <div className='w-[365px] h-[694px] p-4 border-solid border-siva border-[1px] rounded-md m-auto mb-2 md:mb-0'>
                <img src={Prva} alt="" />
                <p className='font-bold pt-5 text-zelena'>Duhovni Rad</p>
                <p className='text-sm pt-4 pb-2 text-gray-500'>Obuke i kursevi za samostalan duhovni rad!</p>
                <div className='rounded-full flex bg-siva justify-center mb-3 mt-2'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 64 3307907 (Nemanja)</p>
                    
                </div>
                <p className='text-sm pb-2 text-gray-500'>Duhovno svetovanje i usmeravanje!</p>
                <div className=''>
                <div className='text-sm mb-3 rounded-full flex bg-siva justify-center mt-2'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 63 700 20 02 (Jelena)</p>
                    
                </div>
                <div className='text-sm sm:mt-3 rounded-full flex bg-siva justify-center '>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 64 532 39 58 (Nemanja)</p>
                    
                </div>
                </div>
            </div>
            <div className='w-[365px] h-[694px] p-4 border-solid border-siva border-[1px] rounded-md m-auto mb-2 md:mb-0'>
                <img src={Druga} alt="" />
                <p className='font-bold pt-5 text-zelena'>Duhovna Analiza i energetska merenja</p>
                <p className='text-sm pt-4 pb-2 text-gray-500'>Radiestezijsko merenje duhovnih i životnih potencijala, sa preko 30 parametra!</p>
                <div className='rounded-full flex bg-siva justify-center mb-3 mt-2'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 67 797 86 11 (Dušan)</p>
                    
                </div>
                <p className='text-sm pb-2 mt-5 text-gray-500'>Duhovno jasnovidjenje energetskih tela, uzroka problema, prošlosti i potencijalne budućnosti!</p>
                <div className=''>
                <div className='text-sm mb-3 rounded-full flex bg-siva justify-center mt-2'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 63 700 20 02 (Jelena)</p>
                    
                </div>
                
                <p className='text-sm mt-5 text-gray-500'>Astrološko savetovalište i izrada svih vrsta astroloških karti!</p>
                <div className='text-sm sm:mt-3 rounded-full flex bg-siva justify-center'>
                    
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 62 299 791 (Marijana)</p>
                    
                </div>
                </div>
            </div>
            <div className='w-[365px] h-[694px] p-4 border-solid border-siva border-[1px] rounded-md m-auto '>
                <img src={Treca} alt="" />
                <p className='font-bold pt-5 text-zelena'>Duhovna pomoć u rešavanju problema</p>
                <p className='text-sm pt-4 pb-2 text-gray-500'>Cišćenje od svih vrsta negativnih energija!</p>
                <div className='rounded-full flex bg-siva justify-center mb-3'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 67 797 86 11 (Dušan)</p>
                    
                </div>
                <p className='text-sm pb-2 text-gray-500'>Pomoć u prevazilaženju svih životnih blokada!</p>
                <div className=''>
                <div className='text-sm mb-3 rounded-full flex bg-siva justify-center'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 63 700 20 02 (Jelena)</p>
                    
                </div>
                <p className='text-sm pb-2 text-gray-500'>Savladavanje teških emocija, trauma, poroka, negativnosti!</p>
                <div className='text-sm sm:mt-3 rounded-full flex bg-siva justify-center'>
                    <img src={Phone} className='pr-4' alt="phone" />
                    <p className=''>00381 63 700 20 02 (Jelena)</p>
                    
                </div>
                </div>
            </div>
            

        </div>
        </div>
        
    </div>
  )
}

export default Offer