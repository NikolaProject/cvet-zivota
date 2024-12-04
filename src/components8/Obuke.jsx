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
        
        text: 'Nauči osnovne duhovne parametre na kojima tragalac treba raditi'
    },
    
    {
        id: 2,
        
        text: 'Nauči da sigurno i bezbedno sprovodi duhovnu praksu: podiže duhovne zaštite, priziva pomoć svetlosne hijerarhije, vrši duhovnu praksu po ustaljenom sigurnom protokolu'
    },

    {
        id: 3,
        
        text: 'Nauči osnovne duhovne tehnike: meditacije, molitve, vizualizacije (duhovna projekcija), tehnike disanja i vizualizacije'
    },

    {
        id: 4,
        
        text: 'Izgradi osnove discipline i navike da svakodnevno barem minimalno sprovodi duhovnu praksu'
    },

    {
        id: 5,
        
        text: 'Započne proces isceljenja i obnove svoje aure, svetlosnog stupa i unutrašnjeg polja'
    },

    {
        id: 6,
        
        text: 'Počne proces uzdizanja duhovnih parametara'
    },

    {
        id: 7,
        
        text: 'Nauči da ulazi u smirenje'
    },
    
]


const Obuke = () => {
  return (
    <div className='max-w-[1140px] m-auto hidden lg:block mt-24 '>
        <div className='text-left justify-between flex:col'>
        <p className='text-4xl font-velikaslova mb-10'>Početni deo obuke</p>
        <p className='font-opensans mb-20 h-6 w-[600px] flex'>
        Ova tri principa rada se uče na prva tri kursa obuke „Cvet života” i potpadaju pod celinu koja se zove kvantna molitva. Cilj početnog dela obuke je da pojedinac:
        </p>
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
            <div className='border-siva bg-zuta border-solid border-[1px] md:h-[200px] rounded-md'>
                {user.testimonial}
                
                <div className='p-5'>
                <p className='text-black font-opensans'>{user.text}</p>
                </div>
            </div>
            <div className='h-10'></div>
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
  )
}

export default Obuke