import React from 'react'

const Stavamnudi = () => {
  return (
    <div className='mt-10 lg:w-[1140px] m-auto'>
    <div className='p-3 lg:p-0 text-center md:flex justify-between'>
        <div className='mb-14 text-left'>
    <p className='text-3xl font-velikaslova mb-3'>Šta vam nudi udruženje cvet života?</p>
    <p className='w-[70%]'>Centar radi svakog dana od 17 do 21h, u ulici Tamnavska 2. Uvek smo dostupni na telefon 00381 64 3307 907. Tretmani i intervencije se zakazuju,kao i dolazak na lokaciju. Ako je situacija hitna možemo vam pružiti pomoć istog dana.</p>
    </div>
    <div className='flex'>
    <ul className='list-none flex   '>
        <li className='rounded-full w-[40px] h-[40px] mr-3 border-gray-400 border-[1px]'><span className='ml-[-5px] mt-[-3px] absolute w-4 h-4 border-2 border-black rotate-45 border-r-0 border-t-0 '></span></li>
        <li className='rounded-full w-[40px] h-[40px] bg-zuta'><span className='ml-[-9px] mt-[-3px] absolute w-4 h-4 border-2 border-black rotate-45 border-l-0 border-b-0'></span></li>
    </ul>
    </div>
    </div>
    <div className='m-auto px-2 md:px-0 md:w-full md:flex'>
        <div className=' rounded-md p-4 border-slate-200 border-[1px] mb-5 lg:w-[365px]'>
            <p className='text-2xl font-velikaslova mb-4'>Mentorstvo</p>
            <p className='text-gray-500'>Obuke za uvođenje u duhovni rad i duhovne tehnike rada na sebi i drugima, kao i mentorstvo se zakazuju. 
<br /><br />
(Cena 3000 dinara po obuci, ima ih 8; ko nije u mogućnosti da plati, besplatno je).</p>
        </div>
        <div className=' rounded-md p-4 border-slate-200 border-[1px] mb-5 md:mx-3 lg:w-[365px]'>
            <p className='text-2xl font-velikaslova mb-4'>Individualni termini</p>
            <p className='text-gray-500'>Individualne termine (online i na licu mesta) za rešavanje svih vrsta problema: emotivnih, psiholoških, duhovnih, fizičkih.</p>
            
        </div>
        <div className=' rounded-md p-4 border-slate-200 border-[1px] mb-5 lg:w-[365px]'>
            <p className='text-2xl font-velikaslova mb-4'>Čišćenje negativnih energija</p>
            <p className='text-gray-500'>Čišćenje negativnih energija svih vrsta, individualno i preko slike.
            <br /><br />
            Napomena: ovu uslugu možemo odbiti ako procenimo da nismo u mogućnosti da pomognemo. Najtežim slučajevima u 50 % slučajeva ne možemo pomoći. Kod ovakvih pojedinaca za rešavanje je potrebno i da klijent dugo radi na sebi (za šta možemo ponuditi besplatnu obuku). Za lakše i srednje slučajeve možemo raditi besplatno (ko nema novca), ali to ne radimo za teške slučajeve, zbog količine posla i teške energije koja opterećuje i samog terapeuta. Kod klijenata u najtežim situacijama možemo raditi besplatno u meri da malo sredimo situaciju, bez garancije za boljitak.
             </p>
            
        </div>
    </div>

</div>
  )
}

export default Stavamnudi