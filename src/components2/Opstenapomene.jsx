import React from 'react'
import Iskustvo from '../assets/3rd obuka.png'
import Download from '../assets/Download.svg'

const Opstenapomene = () => {
  return (
    <div>
    <div className='lg:w-[1140px] font-opensans m-auto mt-12 justify-between items-center flex  '>

     

<div className='mt-20 lg:flex rounded '>

<img src={Iskustvo} className='hidden lg:flex' alt="" />

<div className='p-10'>
<p className='mb-10 pt-14 font-velikaslova text-4xl pb-5 md:text-4xl'>Opšte Napomene i Upustva</p>

<p>Sve navedene kurseve drži Nemanja Blagojević i sve tehnike su nastale kao rezultat njegovog rada i istrazvianja, zajedno sa svim prijateljima, učiteljima i istraživačima iz „CENTRA ZA DUHOVNI RAZVOJ I EDUKACIJU – CVET ŽIVOTA“. 
<br /><br />
Sve tehnike su nebrojano puta dokazane u praksi, isprobane, sigurne i svakodnevno se primenjuju od svih članova, učenika i u radu sa klijentima. Do kraja 2022. godine, centar je održao preko 100 kurseva i obuka, kako online i uživo i 80 procenta svih polaznika prvog kursa završe svih 8 regularnih nivoa obuke svojevoljno, a potom i nastave na dalji rad koliko su u mogućnosti.
</p>

<button className='flex mt-9 mb-3 p-4 bg-zuta rounded-md'>Preuzmi Detaljna Upustva
    <img className='ml-4' src={Download} alt="" />
</button>
<a href="/Nasiprojekti"><button className='p-4 bg-black text-white rounded-md'>Više O Nama</button></a>

</div>  

<img src={Iskustvo} className='lg:hidden m-auto mt-10 ' alt="" />

</div>
</div>

 </div>
  )
}

export default Opstenapomene