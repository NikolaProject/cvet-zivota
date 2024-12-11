import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slika from '../assets/image 19.png'
import Item from './Item2'

const initialData = [
  {
    title: "Dodatni kursevi",
    subtitle: "Radiestezija i rad sa viskom",
    brackets: "(neobavezan kurs sa pet predavanja)",
    content: [
        "•	Teorijski uvod u merenja i istraživanja energetskih parametara viskom",
        "•	Programiranje i usklađivanje za rad sa viskom",
        "•	Merenja ličnih i tuđih energetskih parametara viskom",
        "•	Čišćenje i otpuštanje u svetlo entiteta viskom ili molitvom",
        "•	Čišćenje negativnih nedefinisanih energija viskom ili molitvom",
        "•	Čišćenje prostora viskom",
        "•	Očitavanje viskom najboljih mogućih životnih izbora po nas u životu",
        "•	Očitavanje viskom potencijalne budućnosti, tj. mogućih vremenskih linija",
        "•	Terenska radiestezija",
        "•	Zdravstvena radiestezija – dijagnostika",
        "•	Izrada orgonita" 
    ],
    hidden: false
  },
  {
    title: "Dodatni kursevi",
    subtitle: "Isceliteljstvo - Bioenergija",
    brackets: "(neobavezan kurs sa pet predavanja)",
    content: [
        "•	Bioenergija",
        "•	Isceljivanje fizičkih bolesti",
        "•	Rad sa svetim energijama, radi čišćenja ili isceljivanja sebe ili drugih ljudi",
        "•	Intuitivno sprovođenje energija",
        "•	Ulazak u stanja mira, sreće, svesti"
    ],
    hidden: true
  },
  {
    title: "Dodatni kursevi",
    subtitle: "Rad za global",
    brackets: "(neobavezan kurs)",
    content: [
        "•	Procesi za isceljenje, uzdizanje i pročišćenje kolektiva naroda"
    ],
    hidden: true
  },
  {
    title: "Dodatni kursevi",
    subtitle: "Terapeutski i isceliteljski rad sa drugim ljudima",
    brackets: "(neobavezan kurs)",
    content: [
        "•	Praktični rad sa drugim ljudima"
    ],
    hidden: true
  },
]

const Kursevi = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => console.log(data), [data]);

  const back = () => setCurrentIndex(current => current - 1 < 0 ? data.length - 1 : current - 1);
  const forward = () => setCurrentIndex(current => current + 1 > (data.length - 1) ? 0 : current + 1);

  useEffect(() => {
    setData(data.map((el, i) => i === currentIndex ? { ...el, hidden: false } : { ...el, hidden: true }));
  }, [currentIndex]);

  return (

    <div className='font-opensans mt-3 justify-between items-center flex lg:w-[1140px] m-auto '>
      <div className='mt-20 lg:flex rounded '>
        <div>

          {
            data.map((item) => <Item itemData={item} />)

          }
          <button onClick={back} className='ml-4'>
            <ul className='list-none flex'>
              <li className='rounded-full w-[40px] h-[40px] mr-3 bg-zuta'><span className='ml-[-5px] mt-[-3px] absolute w-4 h-4 border-2 border-white rotate-45 border-r-0 border-t-0 '></span></li>
            </ul>
          </button>
          <button onClick={forward} className=''>
            <ul className='list-none flex '>
              <li className='rounded-full w-[40px] h-[40px] bg-zuta'><span className='ml-[-10px] mt-[-3px] absolute w-4 h-4 border-2 border-white rotate-45 border-l-0 border-b-0'></span></li>
            </ul>
          </button>
        </div>
        <img src={Slika} className='mt-10 flex' alt="" />
      </div>
    </div>
  )
}

export default Kursevi
