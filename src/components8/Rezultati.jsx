import React from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';

import SwiperCore, {Navigation, Pagination, scrollbar, Scrollbar} from 'swiper';


import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation,Pagination,Scrollbar]);

const data = [

    {
        id: 1,
        
        text: 'Isceljuje svoje aurično polje i podiže zaštite oko njega'
    },
    
    {
        id: 2,
        
        text: 'Izbacuje većinu negativnih energija iz svog polja (entitete, magijske energije, razni otpad, nakačke)'
    },

    {
        id: 3,
        
        text: 'Vraća fragmente svog bića'
    },

    {
        id: 4,
        
        text: 'Skida duševne ugovore'
    },

    {
        id: 5,
        
        text: ' Podiže osnovne energetske parametre: snaga isijavanja aure, procenat celovitosti energetskih tela, povećava nivo svesti, širinu svesti, podiže procenat duhovnih zaštita, povećava procenat svoje božanske usklađenosti'
    },

    {
        id: 6,
        
        text: 'Smanjuje procenat ličnih nesavršenosti (mane, negativne emocije, uverenja, stavove, očekivanja, vezivanja...)'
    },
    
]


const Rezultati = () => {
  return (
    <div className='max-w-[1140px] m-auto hidden lg, md:block mt-16 '>
        <div className='text-left justify-between'>
        <p className='font-opensans mb-20 h-6 w-[600px]'>
        Tokom prva tri kursa, tragalac postiže sledeće rezultate:
        </p>
        <div>
            
        </div>
        </div>


        <Swiper
      spaceBetween={20}
      slidesPerView={4} 
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
      {data.map(user =>(
        <SwiperSlide key={user.id}>
            <div className='border-siva bg-zelena border-solid border-[1px] md:h-[380px] rounded-md'>
                {user.testimonial}
                
                <div className='p-5'>
                <p className='text-white font-opensans'>{user.text}</p>
                </div>
            </div>
            <div className='h-10'></div>
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
  )
}

export default Rezultati