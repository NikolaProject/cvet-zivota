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

        img: "oko.png",
        
        text: 'Istraživanje duhovnih fenomena i nevidljivih svetova'
    },
    
    {
        id: 2,

        img: "lupa.png",
        
        text: 'Istraživanje i razvoj duhovnih tehnika i tehnika za samopomoć'
    },

    {
        id: 3,

        img: "knjiga.png",
        
        text: 'Deljenje znanja i širenje svih spoznaja'
    },

    {
        id: 4,

        img: "prezentacija.png",
        
        text: 'Održavanje kurseva, radionica i obuka na temu praktične duhovnosti'
    },

    {
        id: 5,

        img: "lenijar.png",
        
        text: 'Istraživanje svete geometrije'
    },

    {
        id: 6,

        img: "planine.png",
        
        text: 'Ispitivanje energetski snažnih i svetih prirodnih mesta (energetskih tačaka)'
    },

    {
        id: 7,

        img: "atom.png",
        
        text: 'Istraživanje i razvoj Teslinih tehnologija'
    },

    {
        id: 8,

        img: "misljenje.png",
        
        text: 'Organizovanje grupe istomišljenika za zajednički duhovni rad i praksu, ekskurzije, druženja, deljenje saznanja i spoznaja'
    },
    
]


const Ciljevi2 = () => {
  return (
    <div className='max-w-[1140px] m-auto max-sm:hidden lg:hidden px-3 mt-12'>


        <Swiper 
      spaceBetween={20}
      slidesPerView={2.4} 
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
      {data.map(user =>(
        <SwiperSlide key={user.id}>
            <div className=' md:h-[300px] md:w-[280px] rounded-md mx-auto'>
                {user.testimonial}
                
                <div className='h-[280px] w-[280px] mx-auto rounded-md border-[1px] p-10 flex flex-col items-center'>
                <img src={require(`../assets/${user.img}`)} alt='User' />
                <p className='text-center font-opensans'>{user.text}</p>
                </div>
            </div>
            <div className='h-10'></div>
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
  )
}

export default Ciljevi2