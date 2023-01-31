import React from 'react'
import Phone from '../assets/Phone.svg'

const Zelitepomoc = () => {
  return (
    <div className='flex'>

        <div className=' mt-20 sm:flex bg-crna text-slate-300 md:w-[1140px] m-auto p-10 rounded-3xl'>
            <p className='font-velikaslova text-4xl'>Želite Pomoći Udruženju i Daznati Više Informacija o Projektima?</p>
            <div className=' md:p-3'>
                <p className='mb-4 mt-4 md:mt-0'>Broj za dobijanje infomacija o tekućim projektima, njihovom napretku, mogućnosti za pružanjem pomoći:</p>
                <div className='flex bg-white rounded-full text-black'>
                    <img className='mx-4' src={Phone} alt="" />
                    <p className='font-bold'>00381 64 532 39 58 (Nemanja)</p>
                </div>
            </div>
        </div>    
    
    </div>
  )
}

export default Zelitepomoc