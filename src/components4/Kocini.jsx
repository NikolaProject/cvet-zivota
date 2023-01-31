import React from 'react'
import Dveruke from '../assets/O udruzenju 1st.png'

const Kocini = () => {
  return (
    <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

        

      <div className='mt-20 lg:flex rounded '>
      
        <div className='p-5 mt-10'>
        <p className=' font-velikaslova text-4xl pb-12 md:text-6xl'>Ko čini udruženje?</p>
        <p className='mr-0 lg:mr-28'>Udruženje se sastoji od više desetina aktivnih članova koji na svoj način doprinose radu Centra za duhovni razvoj (Udruženja), rade zajedničke duhovne tehnike za globalno društvo i zajednicu i učestvuju u istraživanju duhovnih fenomena. 
<br /><br />
U sklopu Udruženja postoji više desetina obučenih medijuma, jasnovidaca - ljudi sa sposobnošću viđenja duhovnih tehnika, radiestezista, egzorcista i drugih ljudi sa posebnim sposobnostima koji svakodnevno imaju uvide u nevidljive svetove. 
<br /><br />
Zajedničkim naporima slažemo slagalicu nepoznatih fenomena, dopunjujemo se, beležimo rezultate i objavljujemo ih. Više članova aktivno radi terapeutski i energetski rad sa ljudima. Takođe, Udruženje organizuje i svoju duhovnu školu sa programom postepenog uvođenja polaznika u svet duhovnosti i rad sa duhovnim tehnikama na ličnom i kolektivnom očišćenju.</p>
        
        </div>  
        <img src={Dveruke} className=' p-4 m-auto lg:p-0 lg:flex' alt="" />
      </div>
    </div>
  )
}

export default Kocini