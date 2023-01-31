import React from 'react'
import Slikakrug from '../assets/obuke i kursevi.png'

const Obuke = () => {
  return (
    <div className=' lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex mb-24'>

        

      <div className='mt-20 lg:flex rounded '>

      <img src={Slikakrug} className='hidden lg:flex' alt="" />
        <div className='p-5'>
        <p className='font-velikaslova text-4xl pb-10 md:text-6xl'>Obuke I Kursevi</p>
        <p className=''>Cilj je da svaki polaznik nauči da radi na sebi i drugima,olakša sebi život, oseti promene koje su došle kao rezultat korišćenja ovih tehnika i molitvi, a onda da koristi metode i molitve da pomogne i drugim ljudima.  
        <br></br><br></br>
        Svaki kurs je odvojena celina i sa svakim sledećim nivoom zanje i sposobnosti se produbljuju. Niko nije u obavezi da pohadja sve kurseve,već ko je zadovoljan sa onime sto je naucio i zeli nauciti jos, moze krenuti na sledeci kurs kada on to zeli(mesecno jednom ima svaki nivo kursa online). 
        <br></br><br></br>
        
        Svaki kurs je ujedno i rad na nasem očiscenju i duhovnom uzdizanju,stoga je svaki krus vrsta tretmana,ali gde sam učenik sebe čisti uz vodjstvo instrukora.</p>
        <div className=''>
        <img src="" alt="" />
        <img src="" alt="" />

        <img src={Slikakrug} className='lg:hidden m-auto mt-10' alt="" />

        </div>
        </div>
        

        
      </div>
      
      
      
    </div>
  )
}

export default Obuke