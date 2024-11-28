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
    <div>

        <p className='font-velikaslova text-4xl text-center p-20'>
            Ciljevi udruženja
        </p>

        <div className='text-center ml-32 mr-32 mt-10 hidden lg:flex'>
            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Oko} alt="" className='max-w-full max-h-full'/>
                <p className='font-opensans text-sm'>
                Istraživanje duhovnih fenomena i nevidljivih svetova
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Lupa} alt="" />
                <p className='font-opensans text-sm'>
                Istraživanje i razvoj duhovnih tehnika i tehnika za samopomoć
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Knjiga} alt="" />
                <p className='font-opensans text-sm'>
                Deljenje znanja i širenje svih spoznaja
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Prezentacija} alt="" />
                <p className='font-opensans text-sm'>
                Održavanje kurseva, radionica i obuka na temu praktične duhovnosti
                </p>
            </div>
        </div>
        <div className='text-center ml-32 mr-32 mt-10 hidden lg:flex'>
            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Lenijar} alt="" />
                <p className='font-opensans text-sm'>
                Istraživanje svete geometrije
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Planine} alt="" />
                <p className='font-opensans text-sm'>
                Ispitivanje energetski snažnih i svetih prirodnih mesta (energetskih tačaka)
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center '>
                <img src={Atom} alt="" />
                <p className='font-opensans text-sm'>
                Istraživanje i razvoj Teslinih tehnologija
                </p>
            </div>

            <div className='md:h-[280px] md:w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={Misljenje} alt="" />
                <p className='font-opensans text-sm'>
                Organizovanje grupe istomišljenika za zajednički duhovni rad i praksu, ekskurzije, druženja, deljenje saznanja i spoznaja
                </p>
            </div>
        </div>
        </div>
        
  )
}

export default Ciljevi