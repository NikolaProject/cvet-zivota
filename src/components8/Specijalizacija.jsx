import React from 'react'
import Flaster from '../assets/image 13.png'
import Atom from '../assets/image 14.png'
import Glava from '../assets/image 15.png'

export const Specijalizacija = () => {
  return (
    <div className='mx-auto flex flex-col lg:flex-row w-full mt-10'>

        <div className='mx-auto flex-1 bg-duhovna bg-cover p-32 h-[800px]'>
        <h1 className='font-velikaslova text-4xl text-white mb-6'>Duhovna specijalizacija</h1>

        <p className='font-opensans text-white mb-6 max-w-md'>
        Posle osmog nivoa obuke, počinje duhovna specijalizacija ili master studije. Na ovom nivou pojedinac može svojim izborom prolaziti jednu ili sve tri oblasti naprednog duhovnog rada. Sve ove tri oblasti su potpuno novi principi duhovnog rada u svetu i vrlo efikasni u rešavanju velikog broja fizičkih i duhovnih problema. Napredne oblasti duhovnog rada su:
        </p>

        <ul className='space-y-4'>
            <li className='flex items-center space-x-8'>
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-4 border-[2px] border-zuta">
            <img src={Flaster} />
            </span>
            <p className='font-opensans text-white font-bold'>
            Isceliteljstvo - sprovođenje energije
            </p>
            </li>

            <li className='flex items-center space-x-8'>
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-4 border-[2px] border-zelena">
            <img src={Atom} />
            </span>
            <p className='font-opensans text-white font-bold'>
            Kvantna polja
            </p>
            </li>

            <li className='flex items-center space-x-8'>
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-4 border-[2px] border-[#979a1a]">
            <img src={Glava} />
            </span>
            <p className='font-opensans text-white font-bold'>
            Egzorcizam i duhovna borba
            </p>
            </li>
        </ul>

        </div>

        <div className='mx-auto flex-1 p-32 mt-20'>
        <p className='mb-4 font-opensans max-w-md'>
        Sve ukupno ima oko 15 nivoa obuke „Cvet života”, koje se nadograđuju i
        nadovezuju jedna na drugu. Obuka je tako koncipirana da se prolaskom
        nivoa tragalaca usmerava u sve dublje oblasti duhovnog rada i gde nije
        nužno da se vraća nazad, te da sa svim znanjem i nivom svesti njegov
        rad postaje sve jednostavniji i efikasniji, a konačni cilj je da
        duhovnik može vrlo brzo i efikasno rešavati velike životne i duhovne
        probleme, te stabilno raditi na sebi kroz ovu duhovnu praksu kako bi
        dostigao što veće nivoe očišćenja, individualizacije i svesti.
        <br/><br/>
        Svi kursevi zajedno traju sa pauzama dve godine i nakon toga tragalac dobija diplomu energoterapeuta, 
        kao i sve potrebne upute kako da se praktično i legalno bavi tim poslom u Srbiji ili Evropi. 
        Za one koji to ne žele, svakako će steći dovoljno znanja da pomognu sebi, svojoj porodici, te steknu dovoljno alata 
        da dalje napreduju u životu.  
        </p>
        </div>
    </div>
  )
}

export default Specijalizacija
