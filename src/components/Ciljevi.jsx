import React from 'react'
import Oko from "../assets/oko.png"
import Lupa from "../assets/lupa.png"
import Knjiga from "../assets/knjiga.png"
import Prezentacija from "../assets/prezentacija.png"
import Lenijar from "../assets/lenijar.png"
import Planine from "../assets/planine.png"
import Atom from "../assets/atom.png"
import Misljenje from "../assets/misljenje.png"

export const Ciljevi = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>

        <p className='font-velikaslova text-4xl text-center p-10'>
            Ciljevi udruženja
        </p>

        <div className='text-center mt-5 hidden lg:flex space-x-4 '>
            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Oko} alt="" className='max-w-full max-h-full'/>
                <p className='font-opensans text-sm mt-4'>
                Istraživanje duhovnih fenomena i nevidljivih svetova
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Lupa} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Istraživanje i razvoj duhovnih tehnika i tehnika za samopomoć
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Knjiga} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Deljenje znanja i širenje svih spoznaja
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Prezentacija} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Održavanje kurseva, radionica i obuka na temu praktične duhovnosti
                </p>
            </div>
        </div>
        <div className='text-center mt-10 hidden lg:flex space-x-4'>
            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Lenijar} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Istraživanje svete geometrije
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Planine} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Ispitivanje energetski snažnih i svetih prirodnih mesta (energetskih tačaka)
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Atom} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Istraživanje i razvoj Teslinih tehnologija
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Misljenje} alt="" />
                <p className='font-opensans text-sm mt-4'>
                Organizovanje grupe istomišljenika za zajednički duhovni rad i praksu, ekskurzije, druženja, deljenje saznanja i spoznaja
                </p>
            </div>
        </div>
        </div>
        
  )
}

export default Ciljevi
