import React from 'react'

const UvodObuke = () => {
  return (
    <div className='mt-10 lg:w-[1140px] m-auto'>
        <div className='text-center'>
        <p className='text-3xl font-velikaslova mb-7'>Uvod u Obuke “Cvet Života”</p>
        <p className='mb-12 text-gray-500'>Obuka cvet zivota je duhovna škola koja se prolazi krz tri nadovezujuće celine.</p>
        </div>
        <div className='w-[365px] m-auto px-2 md:w-full md:flex'>
            <div className='p-4 border-slate-200 border-[1px] mb-5 lg:w-[365px]'>
                <p className='text-2xl font-velikaslova mb-4'>Rad Na Sebi</p>
                <p className='text-gray-500'>Obuhvata hronološki prva 4 kursa, gde polaznik uči kako da radi na sebi ,svojim ličnim nesavršenostima, da se energetski čisti i održava u stabilnom energetskom, psihičkom i emotivnom stanju.</p>
                <p className='font-velikaslova text-end text-8xl text-zuta'>1.</p>
            </div>
            <div className='p-4 border-slate-200 border-[1px] mb-5 md:mx-3 lg:w-[365px]'>
                <p className='text-2xl font-velikaslova mb-4'>Prenos Znanja</p>
                <p className='text-gray-500'>Obuhvata kurseve od 5og do 8og, gde polaznik uči kako da pomaže drugim ljudima, kako da utiče na svoje životne okolnosti, kako da se odvezuje od negativnih tokova života, ljudi energetskih vampira i matriks delovanja.</p>
                <p className='font-velikaslova text-end text-8xl text-zuta'>2.</p>
            </div>
            <div className='p-4 border-slate-200 border-[1px] mb-5 lg:w-[365px]'>
                <p className='text-2xl font-velikaslova mb-4'>Napredna Obuka</p>
                <p className='text-gray-500'>Je neka vrsta napredne duhovne individualne obuke i upućivanja u najdublja znanja o načinu funkcionisanja sveta i njegovoj promeni. Ovaj deo obuke se zavredjuje tek nakon dužeg rada i rezervisan je za one najposvećenije.</p>
                <p className='font-velikaslova text-end text-8xl text-zuta'>3.</p>
            </div>
        </div>

    </div>
  )
}

export default UvodObuke