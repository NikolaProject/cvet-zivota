import React from 'react'
import Ruke2 from '../assets/ciljevi.png'

const Ciljevi = () => {
  return (
    <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

        

      <div className='mt-20 lg:flex rounded '>
      
        <div className='p-5'>
        <p className='font-velikaslova text-4xl pb-10 md:text-6xl '>Ciljevi obuka</p>
        <p className='mr-0 lg:mr-20'>Cilj je da svaki polaznik nauči da radi na sebi i drugima,olakša sebi život, oseti promene koje su došle kao rezultat korišćenja ovih tehnika i molitvi, a onda da koristi metode i molitve da pomogne i drugim ljudima. 
<br /><br />
Svaki kurs je odvojena celina i sa svakim sledećim nivoom zanje i sposobnosti se produbljuju. Niko nije u obavezi da pohadja sve kurseve,već ko je zadovoljan sa onime sto je naucio i zeli nauciti jos, moze krenuti na sledeci kurs kada on to zeli(mesecno jednom ima svaki nivo kursa online). 
<br /><br />
Svaki kurs je ujedno i rad na nasem očiscenju i duhovnom uzdizanju,stoga je svaki krus vrsta tretmana,ali gde sam učenik sebe čisti uz vodjstvo instrukora.
<br /><br />
Sve tehnike se uglavnom rade kroz moltivu iz stanja duboke smirenosti. Nema nikakvih inicijacija, povezivanja na bilo kakve energije, niti je nužno da instruktor direktno uči polaznika. Svako može tehnike,tj molitve naučiti i sam, preko knjige, ili vodjenih snimljenih matarijala.</p>
        
        </div>  
        <img src={Ruke2} className='m-auto mt-10' alt="" />
      </div>
    </div>
    
  
  )
}

export default Ciljevi