import React from 'react'
import Meditacija from '../assets/image 27.png'

export const Nezavisneobuke = () => {
  return (
    <div>

        <div className='items-center'>
            <p className='font-velikaslova text-4xl text-center mt-20'>
                Nezavisne obuke
            </p>

            <p className='font-opensans text-center mt-10 text-base max-w-[900px] mx-auto mb-10'>
            Nakon prvog dela obuke „Cvet života – kvantna molitva”, pojedinac može svojevoljno dopuniti svoja znanja uz pomoć tri nezavisne obuke koje su tu da dopune znanja tragaoca i da mu daju pomoćne alate za duhovni rad:
            </p>
        </div>

        <div className='md:flex md:w-full justify-center mb-16 border-solid max-w-[1140px] m-auto '>

            <div className='max-w-[367px] rounded-md mb-10 mx-5 justify-start'>
                <h1 className='bg-zelena text-white font-opensans text-lg rounded-md p-4'>
                  Radiestezija
                </h1>

                <p className='p-4 font-opensans'>
                Merenje preko 150 energetskih i životnih parametara čoveka, čišćenje i detekcija negativnih energija prostora viskom, dobijanje odgovora na postavljena pitanja, detekcija zdravstvenih problema!
                </p>
            </div>

            <div className='max-w-[367px] rounded-md mb-10 mx-5 justify-start'>
                <h1 className='bg-zelena text-white font-opensans text-lg rounded-md p-4'>
                Sveta geometrija
                </h1>

                <p className='p-4 font-opensans'>
                Vizualni duhovni rad, isceljivanje i uzdizanje preko principa svete geometrije, korišćenje moćnih duhovnih oružja - svete geometrije!
                </p>
                
            </div>

            <div className='max-w-[367px] rounded-md mb-10 mx-5 justify-start border-siva border-solid'>
                <h1 className='bg-zelena text-white font-opensans text-lg p-4 rounded-md'>
                Regresoterapija
                </h1>

                <p className='p-4 font-opensans border-siva '>
                Hipno terapija i povraćaj u prošle živote, očitavanje duhovnih uzoraka životnih problema, razumevanje karmičkih lekcija
                </p>
            </div>

        </div>

        

        <img src={Meditacija} className='mt-0 m-auto lg:p-0 lg:flex w-full' alt="" />
    </div>
  )
}

export default Nezavisneobuke