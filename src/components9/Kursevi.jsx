import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slika from '../assets/image 23.png'
import Item from './Item'

const initialData = [
  {
    title: "Prvi kurs",
    subtitle: "Teta talasi i rad sa molitvama",
    brackets: "(obavezan kurs sa pet predavanja)",
    content: [
        "•	Uči se ulazak u alfa moždane talase",
        "•	Uči se osnovni rad sa molitvama",
        "•	Uči se osnovni rad vizualizacijama",
        "•	Uče se tehnike samosvešćivanja i rada na ličnim nesavršenostima",
        "•	Uči se tehnika svesno meditativno disanje",
        "•	Uči se tehnika otpuštanja aspekata ličnosti",
        "•	Uči se tehnika PIP (proces integracije polariteta)",
        "•	Savladavanje tehnike CVET TRANSFORMACIJE, za brzu eliminaciju negativnih energija",
        "•	Uči se kako se spuštaju moždani talasi u teta talase – stanje",
        "•	Osnovni rad sa molitvama i rad na pojačavanju ličnih parametara molitvama",
        "•	Napredniji rad sa vizualizacijom. Rad vizualizacijom za ojačavanje pozitivnih životnih parametara i otklanjanje negativnih",
        "•	Uči se rad sa složenijim molitvama",
        "•	Rade se osnovne vizualizacije, radi čišćenja čakri, energetskih tela",
        "•	Uči se kako meditirati" 
    ],
    hidden: false
  },
  {
    title: "Drugi kurs",
    subtitle: "Svetlosni kodovi",
    brackets: "(obavezan kurs sa četiri predavanja)",
    content: [
        "•	Uvod u „duhovna oružja” - energetske skupine energija i njihovu upotrebu – svetlosni kodovi, sveta geometrija (sklopovi energija koji služe za određene duhovne akcije, čišćenja i pojačavanja)",
        "•	Čišćenje svih čakri",
        "•	Čišćenje svih energetskih tela",
        "•	Čišćenje aure",
        "•	Čišćenje upliva tehničkih zračenja, veštačke inteligencije, mreža, energetskih negativnih konstrukcija",
        "•	Povraćaj izgubljenih ili zarobljenih fragmenata duše, ličnosti, kvaliteta, osobina, sposobnosti",
        "•	Izbacivanje tuđih fragmenata duše iz nas, kao i tuđih delova energija, osećanja, osobina, kvaliteta, emocija iz našeg polja",
        "•	Skidanje osnovnih blokada sa života",
        "•	Povećanje vitalne energije"
    ],
    hidden: true
  },
  {
    title: "Treći kurs",
    subtitle: "Duševni ugovori",
    brackets: "(obavezan kurs sa četiri predavanja)",
    content: [
        "•	Rad iz delta talasa moždane aktivnosti – duboka smirenost",
        "•	Uči se o postojanju negativnih energija i njihovom delovanju",
        "•	Skidanje duševnih ugovora",
        "•	Skidanje mana, slabosti, zavisnosti, poroka, negativnih uverenja, blokada itd.",
        "•	Osnovno isceljivanje fizičkog tela",
        "•	Skidanje baznih emocija (spoljašnji uticaji koji u nas ubacuju emocije koje nisu naše)",
        "•	Pojačavanje aure i pojačavanje svih pozitivnih vrednosti, kvaliteta, osobina za dalji duhovni rad",
        "•	Meditacija iz delta talasa moždane aktivnosti",
        "•	Pokretanje i aktivacija energija; neaktivnih aspekata života",
        "•	Osnovno čišćenje magijskih energija",
        "•	Povezivanje na naddušu i duhovno vođstvo",
        "•	Procesi za isceljenje fizičkog tela"
    ],
    hidden: true
  },
  {
    title: "Četvrti kurs",
    subtitle: "Sveta geometrija",
    brackets: "(obavezan kurs sa četiri predavanja)",
    content: [
        "•	Učenje svete geometrije, njenog znanja, te njene praktične upotrebe za duhovni rad",   
        "•	Povezivanje na izvore svetlosti, pojačavanje snage isijavanja aure, duhovnih parametara",
        "•	Upotreba svete geometrije radi skidanja svih negativnih upliva u čoveka",
        "•	Izrada svetlosne rešetke, duhovnih aparata za pročišćenje (iz kombinacije orgonita, kristala i svete geometrije)"
    ],
    hidden: true
  },
  {
    title: "Peti kurs",
    subtitle: "Anđeoski red",
    brackets: "(obavezan kurs sa četiri predavanja)",
    content: [
        "•	Povezivanje na lični anđeoski red: učenje upotrebe anđeoskog oružja - svetlosnog mača, kugle i anđeoskih krila",
        "•	Ulazak u ipsilon moždane talase – dubinsko smirenje",
        "•	Stvaranje svetlosnih izvora",
        "•	Čišćenje matriks centara; skidanje uticaja matriksa – negativnih energetskih uticaja koji van čoveka talasima, vibracijama i energijama utiču na čoveka",
        "•	Mentalna projekcija",
        "•	Upotreba naprednih duhovnih oružja"
    ],
    hidden: true
  },
  {
    title: "Šesti kurs",
    subtitle: "Vremenske linije",
    brackets: "(obavezan kurs sa pet predavanja)",
    content: [
        "•	Isceljivanje predačkog i ličnog nasleđa koji nam blokiraju otvaranje određenih životnih aspekata poput ljubavi, posla, novca, zdravlja, porodičnih odnosa",
        "•	Regresoterapija prošlih života",
        "•	Programiranje i rad sa kristalima",
        "•	Manifestacija duhovnog rada u fizički plan, radi otvaranja vremenskih linija uspeha i napretka u određenim oblastima života",
        "•	Rad sa našom naddušom i povezivanje na svetlosne svetove (vežbanje njihovog jasnoviđenja)"
    ],
    hidden: true
  },
  {
    title: "Sedmi kurs",
    subtitle: "Isceljenje lične tame",
    brackets: "(obavezan kurs sa četiri dela)",
    content: [
        "•	Povezivanje i rad sa našom naddušom",
        "•	Isceljivanje i čišćenje naše nadduše, podsvesti, nadsvesti, savesti, ega",
        "•	Izvlačenje delova bića iz tame",
        "•	Isceljivanje trauma",
        "•	Isceljivanje unutrašnjeg deteta",
        "•	Energetsko odvezivanje od toksičnih ljudi i ljudi parazita",
        "•	Oslobađanje zarobljenih ili izgubljenih pozitivnih emocija i kvaliteta koje smo nekad imali",
        "•	Skidanje najjačih magijskih energija",
        "•	Procesi za dubinsko isceljenje duše"
    ],
    hidden: true
  },
  {
    title: "Osmi kurs",
    subtitle: "Reprogramiranje negativnog nasleđa",
    brackets: "(obavezan kurs sa četiri predavanja)",
    content: [
        "•	Reprogramiranje nasleđa naših prošlih života",
        "•	Regresoterapija",
        "•	Isceljivanje porodičnog nasleđa i predaka"
    ],
    hidden: true
  },
  {
    title: "Deveti nivo",
    subtitle: "",
    brackets: "(obavezan kurs sa tri predavanja)",
    content: [
        "•  Napredno čišćenje negativnih energija",
        "•	Molitva božanske moći",
        "•	Rad sa rezonancom",
        "•	Osnove rada sa namerom",
        "•	Čišćenje i reprogramiranje DNK",
        "•	Rad na energetskim tokovima života"
    ],
    hidden: true
  },
  {
    title: "Deseti nivo",
    subtitle: "Put ka čistoj svesti",
    brackets: "(neobavezan kurs)",
    content: [
        "•	Obitavanje u sadašnjem trenutku",
        "•	Tehnike sticanja čiste svesnosti",
        "•	Sticanje dubinskog znanja – gnoze",
        "•	Objašnjenje duhovnih ciljeva i načina postizanja istih",
        "•	Naprednije učenje rada sa namerom"
    ],
    hidden: true
  },
  {
    title: "Jedanaesti i dvanaesti nivo",
    subtitle: "Rad sa kvantnim poljima",
    brackets: "(obavezan kurs iz 8 predavanja)",
    content: [
        "•	Duhovni rad iz anđeoske forme",
        "•	Čišćenje najtežih negativnih energija",
        "•	Rad sa kvantnim poljima – rad namerom",
        "•	Osvešćivanje životne i duhovne misije"
    ],
    hidden: true
  },
  {
    title: "Trinaesti nivo",
    subtitle: "Isceljenje duše",
    brackets: "",
    content: [
        "•	Tehnike rada na duši",
        "•	Isceljenje trauma, poroka, praznina, najdublje lične tame",
        "•	Napredni isceliteljski rad"
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
      <img src={Slika} className='mt-10 flex' alt="" />
        <div className='lg:ml-10'>

          {
            data.map((item) => <Item itemData={item} />)

          }
          <button onClick={back} className='ml-4'>
            <ul className='list-none flex'>
                <li className='rounded-full w-[40px] h-[40px] mr-3 bg-zelena'>
                    <span className='ml-[-5px] mt-[-3px] absolute w-4 h-4 border-2 border-white rotate-45 border-r-0 border-t-0 '>
                    </span>
                </li>
            </ul>
          </button>
          <button onClick={forward} className=''>
            <ul className='list-none flex '>
                <li className='rounded-full w-[40px] h-[40px] bg-zelena'>
                    <span className='ml-[-10px] mt-[-3px] absolute w-4 h-4 border-2 border-white rotate-45 border-l-0 border-b-0'>
                    </span>
                </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Kursevi
