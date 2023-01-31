import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slika from '../assets/slika1.png'
import Item from './Item'

const initialData = [
  {
    title: "Šta je Cvet Života?",
    content: [
      "Centar za duhovni razvoj i edukaciju“ je udruženje gradjana, tim ljudi koji deli zajedničku strast prema radu na sebi i pomaganju drugima da stanu na taj put. Naš cilj je edukacija svih zainteresovanih u duhovne tehnike, promocija duhovnosti  i rada na sebi kao načina života, kao i pružanje pomoći svima kojima je potrebna. U tu svrhu organizujemo seminare, kruseve, druženja i zajedničke aktivnosti sa ciljem unapređenja kvaliteta života i duhovne evolucije. Tim poseduje svoj razvojni centar i svakodnevno radi na istraživanju duhovnih svetova i njihovih zakonitosti, a sve to potom prezentujemo i delimo sa svima. Za sve one koji su zablokirani i trenutno sputani, nudimo savetovalište, terapijsku pomoć, duhovno usmeravanje i energetska čišćenja svih vrsta."
      , "Ako vam je potrebna, pomoć u rešavanju određenih zivotnih ili emotivnih problema, ili vam je potrebana edukacija iz bilo koje duhovne sfere, javite nam se na kontakt broj, izaćićemo vam u susret u što kraćem roku.",
      "Centar vam moze pruziti i pomoć i obuku i kada niste pri novcu, a za one koji su u mogućnosti platiti za našu uslugu, garantujemo poboljšanje stanja, ili u suprotnom ne naplacujemo svoje usluge. "
    ],
    hidden: false
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "Centar za duhovni razvoj i edukaciju – Cvet života“ je registrovano i ovlašćeno udruženje za pruzanje duhovne pomoći, savetovanja i edukacije iz oblasti duhovnih tehnika kao što su:", "-Bioenergije ",
      "-Regresoterapije i hipnoze",
      "-Astrologije",
      "-Radiestezije (merenje viskom)",
      "-Astralne i mentalne projekcije",
      "-Energetskih čišćenja svih negativnih energija",
      "-PEAT tehnika proisteklih iz rada Živorada Mihajovića Slavinskog",
      "-Medijumstva (dobijanja informacija iz duhovnih sfera)",
      "-Teslinih tehnologija"
    ],
    hidden: true
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "Centar za duhovni razvoj i edukaciju sastoji se od preko 70 članova, nadarenih,  obučenih i uvežbanih u tehnike rada na sebi i na kolektivu. Grupa u svom sastavu ima i ljude posebnih duhovnih sposobnosti: ",
      "-3 medijuma - ljudi koji mogu komunicirati sa duhovnim svetovima i bićima",
      "-preko 15 jasnovidaca – ljudi koji mogu videti duhovne svetove",
      "-preko 15 ljudi sa sposobnošću jasnoosećanja – sposobnost da se fizički osete duhovne energije",
      "-40 radiestezista – ljudi koji viskom mogu meriti duhovne energije",
    ],
    hidden: true
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "U sastavu grupe imamo i pojedince specijalizovane za pružanje pomoći u sledećim oblastima:",
      "-Astrologije",
      "-Čiscenja negativnih energija prostora i ljudi – nefizickih entieta, magija, prokletstva i drugih",
      "-Čiscenja čarki i  energetskih tela",
      "-Bioenergije",
      "-Regreso i hipnoterapije",
      "-Radiestezijskog merenja životnih i energetskih parametra čoveka",
      "-Neutralizacije negativnih emocija, zavisnosti- poroka, depresivnih stanja, kompuslivnih misli, mana, negativnih uverenja.",
      "-Pojačavanju pozitivnih energetskih parametra, kvalita, vrlina, osobina, sposobnosti"
    ],
    hidden: true
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "Članovi centra, svakodnevno po svojim mogućnostima rade grupne zajedničke, moltive, meditacije, online skupove u cilju rada na našem individualnom dobru i na dobru celoga kolektiva. Zajednički rad je usmeren na naše međusobno pomaganje, usavršavanje, razvoj i edukaciju, ali i na udruživanje zajedničkih moći i sposobnosti za neutrazlizaciju svih negativnih dejstava po kolektiv i naše države.",
      "Ko želi dati donaciju udruženju i omogućiti njegov dalji rad, te finansirati naš rad na koletivnom dobru i duhovnoj zaštiti svih nas, može nam se javiti na kontakt.",
    ],
    hidden: true
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "-Članovi udruženja prate svetska dešavanja i trude se da koliko je u njihovoj moći pomognu da se one razreše onako kako je to najbolje za sve.",
      "-Članovi udruzenja aktivno rade na kreiranju pozitivnih vremenskih linija i energetskih tokova koji će omogućiti bolju budućnost za sve. ",
      "-Članovi udruženja međusobno se pomažu u cilju prevazilaženja naših ličnih i porodičnih problema i životnih izazova. Članovi udruženja su tu uvek jedni za druge.",
      "-Članovi udruženja rade na sebi, na svojim sposobnostima, na svom duhu i na drugima u svom okruzenju, svoje sposobnosti nesebično koriste za druge, ali to rade mudro, članovi znaju kada, kome i koliko treba pomoći. ",
      "-Članovi prema svojim mogućnostima daju doprinos duhovnoj nauci i istražuju njene zakonitosti i tajne. Svoja saznanja dele besplatno svim ljudima, bili oni članovi ili ne. Međutim, članovi raspoznaju kada je ko spreman da primi koje znanje i zanje i sposobnosti prenose drugima samo kada su oni za to spremni. "
    ],
    hidden: true
  },
  {
    title: "Šta je Cvet Života?",
    content: [
      "Član grupe za zajednicki duhovni rad može prostati svako ko prođe 5 nivoa obuke udruženja gde će se kroz te nivoe svaki pojedinac prvo individualno očisiti, potom naučiti sve što treba da  zna o duhovnom svetu, a potom kako i da radi za dobrobit svih u okviru udruženja. Obuke su besplatne za one koji nemaju novca. Članovi udruženja mogu postati i oni koji nisu zavrišili obuku, ali poseduju znanja i sposobnosti koje mogu pomoći svetu u okviru zajedničkog rada udruženja.  Poštovaoc ideje cveta života je svako ko vrednuje rad na sebi i trudi se da doprinosi na onom polju života gde mu je to dato i omogućeno.",
    ],
    hidden: true
  },
]

const Content = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => console.log(data), [data]);

  const back = () => setCurrentIndex(current => current - 1 < 0 ? data.length - 1 : current - 1);
  const forward = () => setCurrentIndex(current => current + 1 > (data.length - 1) ? 0 : current + 1);

  useEffect(() => {
    setData(data.map((el, i) => i === currentIndex ? { ...el, hidden: false } : { ...el, hidden: true }));
  }, [currentIndex]);

  return (
    
    <div className='font-opensans mt-12 justify-between items-center flex lg:w-[1140px] m-auto'>
      <div className='mt-20 lg:flex rounded'>
        <div>

          {
            data.map((item) => <Item itemData={item} />)

          }
          <button onClick={back} className='ml-4 '>
            <ul className='list-none flex   '>
              <li className='rounded-full w-[40px] h-[40px] mr-3 bg-zuta'><span className='ml-[-5px] mt-[-3px] absolute w-4 h-4 border-2 border-black rotate-45 border-r-0 border-t-0 '></span></li>
            </ul>
          </button>
          <button onClick={forward} className=''>
            <ul className='list-none flex '>
              <li className='rounded-full w-[40px] h-[40px] bg-zuta'><span className='ml-[-10px] mt-[-3px] absolute w-4 h-4 border-2 border-black rotate-45 border-l-0 border-b-0'></span></li>
            </ul>
          </button>
        </div>
        <img src={Slika} className='m-auto mt-10' alt="" />
      </div>
    </div>
  )
}

export default Content
