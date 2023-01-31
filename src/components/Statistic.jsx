import React from 'react'


const Statistic = () => {
  return (
    <div className=' bg-statistika bg-cover h-[1000px] bg-center text-center'> 
        

        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col'>
        <p className='font-velikaslova text-4xl md:text-6xl text-slate-400  mt-72'>Statistika za godinu dana rada udruženja</p>
        <div className='flex justify-between mt-10'>
          <div className='pr-3'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'>10+</p>
            <p className='text-siva'>Duhovnih oblasti</p>
          </div>
          <div className='pr-3'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'>10+</p>
            <p className='text-siva text-sm'>Zajedničkih ekskurzija i obilaska <br /> svetih prirodnih mesta</p>
          </div>
          <div className='pr-2'>
           <p className='font-velikaslova text-2xl md:text-5xl text-white'>50+</p>
           <p className='text-siva text-sm'>zajedničkih sprovedenih akcija za<br/> globalno dobro</p>
         </div>
         <div className='pr-2'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'>70+</p>
            <p className='text-siva text-sm'>Aktivnih članova</p>
          </div>
          <div>
           <p className='font-velikaslova text-2xl md:text-5xl text-white'>100+</p>
            <p className='text-siva text-sm'>Održanih kurseva</p>
          </div>

        </div>
        <div className='flex justify-center mt-4'>
        <div className='pr-3'>
            <p className='font-velikaslova text-4xl md:text-5xl text-white'>150+</p>
            <p className='text-siva'>Duhovnih oblasti</p>
          </div>
          
          <div className='pr-2'>
           <p className='font-velikaslova text-4xl md:text-5xl text-white'>300+</p>
           <p className='text-siva text-sm'>zajedničkih sprovedenih akcija za<br/> globalno dobro</p>
         </div>
         <div className='pr-2'>
            <p className='font-velikaslova text-4xl md:text-5xl text-white'>500+</p>
            <p className='text-siva text-sm'>Aktivnih članova</p>
          </div>
          <div>
           <p className='font-velikaslova text-4xl md:text-5xl text-white'>800+</p>
            <p className='text-siva text-sm'>Održanih kurseva</p>
          </div>
          </div>
        </div>

        
       

        
        
    </div>
  )
}

export default Statistic