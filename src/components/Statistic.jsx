import React from 'react'


const Statistic = () => {
  return (
    <div className=' bg-statistika bg-cover h-[1000px] bg-center text-center'> 
        

        <div className='max-w-[800px]  w-full h-screen mx-auto text-center justify-center flex flex-col '>
        <p className='font-velikaslova text-4xl md:text-6xl text-white  mt-[500px]'>Statistika za godinu dana rada udruženja</p>
        <div className='flex justify-between mt-10'>
          <div className='pr-3'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'>10+</p>
            <p className='text-siva'>Duhovnih oblasti izucavanja</p>
          </div>
          <div className='pr-3'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'>10+</p>
            <p className='text-siva text-sm'>Zajedničkih ekskurzija</p>
          </div>
          <div className='pr-2'>
           <p className='font-velikaslova text-2xl md:text-5xl text-white'>100+</p>
           <p className='text-siva text-sm'>Aktivnih članova</p>
         </div>
         <div className='pr-2'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white sm:flex hidden'>100+</p>
            <p className='text-siva text-sm sm:flex hidden'>Održavanih kurseva</p>
          </div>
          <div>
           <p className='font-velikaslova text-2xl md:text-5xl text-white sm:flex hidden'>100+</p>
            <p className='text-siva text-sm sm:flex hidden'>Duhovnih akcija za <br /> kolektivno dobro</p>
          </div>

        </div>
        <div className='flex justify-center mt-4'>
        <div className='pr-3'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white sm:hidden'>100+</p>
            <p className='text-siva sm:hidden'>Održavanih kurseva</p>
          </div>
          
          <div className='pr-2'>
           <p className='font-velikaslova text-2xl md:text-5xl text-white sm:hidden'>100+</p>
           <p className='text-siva text-sm sm:hidden'>Duhovnih akcija za kolektivno dobro</p>
         </div>
         <div className='pr-2'>
            <p className='font-velikaslova text-2xl md:text-5xl text-white'></p>
            <p className='text-siva text-sm'></p>
          </div>
          <div>
           <p className='font-velikaslova text-2xl md:text-5xl text-white'></p>
            <p className='text-siva text-sm'></p>
          </div>
          </div>
        </div>

        
       

        
        
    </div>
  )
}

export default Statistic