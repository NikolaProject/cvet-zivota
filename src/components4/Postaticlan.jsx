import React from 'react'
import Zalazak from '../assets/zalazak.png'
const Postaticlan = () => {
  return (
    <div className='lg:w-[1140px] font-opensans m-auto mt-20 justify-between items-center flex mx-3 lg:mx-auto '>

        

      <div className='  flex rounded-3xl bg-neutral-800 '>
        
        <img src={Zalazak} className='p-6 hidden  lg:flex ' alt="" />

        <div className='p-5'>
        <p className='font-velikaslova text-4xl pb-10 mt-20  text-white'>Kako postati član udruženja?</p>
        <p className='text-gray-400'>Članom Udruženja smatra se pojedinac koji dobrovoljno želi na bilo koji način da doprinosi ciljevima Udruženja. Ko god želi da učestvuje u ovim projektima dobrodošao je i može se smatrati članom. 
<br /><br />
Takva osoba dobiće od Udruženja pomoć, duhovnu zaštitu i prijatelje. Članstvo u ovom Udruženju je neformalno, neobavezujuće, bez ikakvog upisivanja. Uslov za pristup aktivnom članstvu (koje se ogleda u pripadnosti istoj viber grupi u kojoj se dele tehnike i znanja, razgovara o svim duhovnim problemima kolektiva) je završavanje minimum 5 nivoa obuke Centra za duhovni razvoj (Udruženja), uz uslov da su duhovno očišćeni od direktnog pristupa negativnih energija.
<br /><br />
Većina aktivnih članova radi zajedničke molitve i meditacije, oni najaktivniji pomažu direktno Udruženju. Pri Udruženju postoje i neaktivni članovi koji doprinose kako su u mogućnosti. Oni ne učestvuju u zajedničkom istraživanju direktno, niti rade duhovne tehnike za kolektiv, ali pomažu kako to žele i mogu, najčeše aktivizmom i fizičkim radom.</p>
        
        </div>  
        
      </div>
    </div>
  )
}

export default Postaticlan