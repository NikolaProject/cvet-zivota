import React from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';

import SwiperCore, {Navigation, Pagination, scrollbar, Scrollbar} from 'swiper';


import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation,Pagination,Scrollbar]);

const data =[

    {
        id: 1,
        username: 'Razvoj tehnologija',
        
        smalltext: 'Razvoj tehnologija baziranih na Teslinim principima magnetizma. '
      },
  
    {
        id: 3,
        username: 'Pronalazak Energetskih Tačaka',
        text: 'Pronalaženje,obilazak i obeležavanje svih energetskih tačaka („najdanovih krugova“) u Srbiji(a potom i šire),te promocija ovih lokacija radi isceljivanja i pročišćenja(Pronadjen je veliki broj energetskih tačaka,preko 20, ali se trebaju obeležiti. Rok za izvršenje 2024.g.).',
        
    },
    
    {
      id: 5,
      username: 'Rad na razvoju tehnika',
      text: 'Rad na razvoju domaćih i sigurnih duhovnih tehnika za lični razvoj i duhovnu evoluciju.',
      smalltext: '	Rad na razvoju duhovnih tehnika za rad na globalnim duhovnim i fizičkim pitanjima.'
    },
    {
      id: 6,
      username: 'Udruživanje duhovnih organizacija',
      text: 'Rad na udruživanju raznih duhovnih organizacijija sa zajedničkim ciljem širenja duhovnosti, tradicionalnih vrednosti i zajedničke borbe protiv svih anti ljudskih fakora u svetu. ',
      smalltext: 'Promocija duhovnosti i tehnika za duhovni razvoj.'
    },
]


const Text = () => {
  return (
    <div className='max-w-[1140px] m-auto lg:hidden px-3 mt-10'>
        <div className='text-center flex justify-between'>
        <p className='text-3xl font-velikaslova mb-14'>Tekući projekti udruženja za opšte dobro</p>
        <div className='flex'>
       
        </div>
        </div>


        <Swiper 
      spaceBetween={20}
      slidesPerView={1} 
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
      {data.map(user =>(
        <SwiperSlide key={user.id}>
            <div className='border-siva border-solid border-[1px] md:h-[410px] rounded-md'>
                {user.testimonial}
                
                <div className='p-5'>
                <h1 className='pb-4 font-velikaslova text-xl'>{user.username}</h1>
                <p className='text-gray-600'>{user.text}</p>
                <p className='text-[14px] pt-4 text-gray-600'>{user.smalltext}</p>
                </div>
            </div>
            <div className='h-10'></div>
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
  )
}

export default Text