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
        username: 'Mentorstvo',
        text: 'Obuke za uvođenje u duhovni rad i duhovne tehnike rada na sebi i drugima, kao i mentorstvo se zakazuju.(Cena 3000 dinara po obuci, ima ih 8; ko nije u mogućnosti da plati, besplatno je).',
    },
    {
        id: 2,
        username: 'Individualni termini',
        text: 'Individualne termine (online i na licu mesta) za rešavanje svih vrsta problema: emotivnih, psiholoških, duhovnih, fizičkih.',
    },
    {
        id: 3,
        username: 'Čišćenje negativnih energija',
        text: 'Čišćenje negativnih energija svih vrsta, individualno i preko slike.',
        smalltext: 'Napomena: ovu uslugu možemo odbiti ako procenimo da nismo u mogućnosti da pomognemo. Najtežim slučajevima u 50 % slučajeva ne možemo pomoći. Kod ovakvih pojedinaca za rešavanje je  potrebno i da klijent dugo radi na sebi (za šta možemo ponuditi besplatnu obuku). Za lakše i srednje slučajeve možemo raditi besplatno (ko nema novca), ali to ne radimo za teške slučajeve, zbog količine posla i teške energije koja opterećuje i samog terapeuta. Kod klijenata u najtežim situacijama možemo  raditi besplatno u meri da malo sredimo situaciju, bez garancije za boljitak.'
    },
    {
        id: 4,
        username: 'Duhovno, poslovno, emotivno i životno savetovanje',
        text: 'Duhovno, poslovno, emotivno i životno savetovanje sa iskusnim medijumom i jasnovidom. Ovu uslugu pružamo besplatno ako je ljudima potrebna za ozdravljenje i pitanje života. ',
    },
    {
        id: 5,
        username: 'Održavamo besplatna predavanja',
        text: 'Održavamo besplatna predavanja, tribine i druženja koja su otvorena za sve, a održavaju se dva puta mesečno.',
    },
    {
        id: 6,
        username: 'Besplatan materijal za duhovni rad na sebi',
        text: 'Delimo besplatan materijal za duhovni rad na sebi, besplatne skripte, video klipove i ostalo što delimo na društvenim mrežama i na internetu.',
    },
    {
        id: 7,
        username: 'Rad za kolektiv',
        text: 'Udruženje svaki dan prati aktuelne situacije, naročito one vezane za naš narod i Balkan, i kad god je to potrebno reagujemo svim raspoloživim duhovnim sredstvima, koliko možemo. Svakodnevno radimo tehnike i molitve za kreiranje bolje energetske atmosfere na Balkanu i usmeravanje boljih vremenskih linija za ceo Balkan. ',
    },
    {
        id: 8,
        username: 'Pretraga energetskih tačaka',
        text: 'Radimo pretragu energetskih tačaka u Srbiji i težimo tome da se one obeleže i pretvore u centre prirodnog energetskog isceljivanja. Organizujemo izlete i posete tim lokacijma.',
    }
]

const Proba = () => {
  return (
    

    <div className='max-w-[1140px] m-auto hidden lg:block mt-10'>
        
        <div className='pb-10 font-velikaslova text-4xl'>Šta vam nudi udruženje cvet života?</div>
        <p className='pb-10 max-w-[780px] text-gray-500'>Centar radi svakog dana od 17 do 21h, u ulici Tamnavska 2. Uvek smo dostupni na telefon 00381 64 3307 907. Tretmani i intervencije se zakazuju,kao i dolazak na lokaciju. Ako je situacija hitna možemo vam pružiti pomoć istog dana.</p>
       <Swiper 
      spaceBetween={20}
      slidesPerView={3} 
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

export default Proba