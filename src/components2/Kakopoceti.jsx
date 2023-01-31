import React from 'react'
import Poceti from '../assets/Kakopoceti.png'
import Phone from '../assets/Phone.svg'

const Kakopoceti = () => {
  return (
    <div>
       <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

        

<div className='mt-20 lg:flex rounded '>

<img src={Poceti} className='hidden lg:flex' alt="" />

  <div className='p-5'>
  <p className='pt-16 font-velikaslova text-4xl pb-10 md:text-6xl'>Kako Početi?</p>
  <p className='font-bold'>Prva četiri kursa možete naručiti na viber broj:</p>
  <div className='my-4 flex rounded-full w-[280px]  bg-siva'>
    <img className='mr-3 ml-3' src={Phone} alt="" />
    <p >00381 64 532 39 58 (Nemanja)</p>
  </div>
  <p>Naručene obuke dobijate odmah u vidu snimljenih vodjenih audio i video materijala,kao i skripti,  na vaš viber i mail. Javite nam se na viber kontakt, ostavite vaš mail i mi ćemo vam poslati celokupne kurseve za koje ste zainteresovani. Cena po kursu je 25e (3000 din), medjutim oni koji nemaju novca da plate za njih je besplatno. 
<br /><br />
Medjutim ako želite svejedno ih opet možete proći besplatno i vodjeno sa Nemanjom tokom nekog od zajedničkih radova koji se organizuju svake nedelje(informacije će te dobiti zajedno sa preuzetim kursom).
</p>
  
<img src={Poceti} className='lg:hidden m-auto mt-10' alt="" />
  </div>  
  
</div>
</div>

    </div>
  )
}

export default Kakopoceti