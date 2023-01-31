import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Meditiranje from '../assets/Meditiranje.png'
import Item from './Item'



const initialData = [
  {
    title: "I Kurs - Teta talasi i rad sa molitvama",
    content: [
      "•	Uči se kako se spustaju mozdani talasi u alfa i teta talase - stanje"
      , "•	Osnovni rad sa molitvama i rad na pojačavanju ličnih parametra molitvamaAko vam je potrebna, pomoć u rešavanju određenih zivotnih ili emotivnih problema, ili vam je potrebana edukacija iz bilo koje duhovne sfere, javite nam se na kontakt broj, izaćićemo vam u susret u što kraćem roku.",
      "•	Osnovni rad sa vizualizacijom. Rad vizualizacijom za ojačavanje pozitivnih životnih parametra i otklanjenje negativnih"
      ,"•	Osnovne mentalne projekcije ,radi čišcenja čakiri, energetskih tela"
      ,"•	Osvnovno čiscenje enteteta i negativnih energija iz auričnog polja čoveka"
      ,"•	Savladavanje PIP procesa, unapredjenje verzije PEAT sistema za eliminaciju negativnih misli i emocija"
      ,"•	Savladavanje tehnike CVET TRANSFORMACIJE, za brzu eliminaciju negativnih energija"
      ,"•	Ucenje kako meditirati"
    ],
    hidden: false
  },
  {
    title: "II Kurs - Ima dve verzije: ",
    content: [
      "•	Radiestezija: Ko prolazi obuke lično ili uživo online to je obuka za radiesteziju i rad sa viskom."
      ,"", "•	Molitve: Ko prolazi sam drugi nivo, preko knjiga i vodjenih tehnika,onda dobija materijale i obuku za rad sa molitvama na ciščenju i rešavanju ličnih problema."
      
    ],
    hidden: false
  },
  {
    title: "RADIESTEZIJA I RAD SA VISKOM",
    content: [
      "•	Teorijski uput u merenja i istražvianja energetskih parametra viskom",
      "•	Programiranje i uskadjivanje za rad sa viskom",
      "•	Merenja ličnih i tudjih energetskih parametra viskom",
      "•	Ciscenja i optustanje u svetlo  entiteta viskom, ili molitvom",
      "•	Ciscenje  negativnih nedefinisanih energija viskom,ili molitvom",
      "•	Ciscenje prostora viskom",
      "•	Skidanje blokada viskom, ili molitvom",
      "•	Ciscenje podsvesnih programa viskom,ili molitvom",
      "•	Neutralizacija i spajanje polariteta viskom,ili molitvom",
      "•	Ocitavanje viskom najboljih mogućih zivotnih izbora po nas u zivotu",
      "•	Očitavanje viskom potencijalne buducnosti, tj. mogućih vremenskih linija",
    ],
    hidden: false
  },
  {
    title: "RAD SA MOLITVAMA",
    content: [
      "•	Teorijski deo o energetskim i duhovnim parametrima čoveka",
      "",
      "•	Teoretski deo razumevanja duhovnih ciljeva i duhovnog puta čoveka",
      "",
      "•	Razumevanje principa rada sa molitvama",
      "",
      "•	Rad sa molitvama za očišćenje ličnih nesavršesnosti i negativnih energija",
      "",
      "•	Rad sa molitvama za fizičko isceljivanje",
      "",
      "•	Rad sa molitvama za skidanje životnih blokada",
      "",
      "•	Rad sa molitvama za za razne vrste životnih problema",
    ],
    hidden: false
  },
  {
    title: "III KURS – ČIŠĆENJE VERTIKALNOG STUBA",
    content: [
      "•	Uvod u „duhovna oruzja“ -energetske skupine energija i njihovu upotrebu –-svetlosni kodovi-sveta geometrija (sklopovi energija koji sluze za odredjene duhovne akcije, cisčenja i pojačavanja)",
      "•	Ciscenja  svih cakri ",
      "•	Ciscenje svih meridijana ",
      "•	Ciscenje svih energetskih tela ",
      "•	Cisćenje aure ",
      "•	Ciscenje negativnih definisanih energija: magija ,cini,carolija, proklestva, inicijacija, zapisa, kletvi",
      "•	Ciscenje upliva tehničkih zračenja, veštačke inteligencije, mreza, energetskih negativnih konstrukcija ",
      "•	Povraćaj izgubljenih ili zarobljenih  fragmenta duse, ličnosti, kvaliteta, osobina, sposobnosti",
      "•	Izbacivanje tudjih fragmenata duse iz nas, kao i tudjih delova enerigja, osecanja, osobina, kvaliteta, emocija iz našeg polja",
      "•	Početni rad na isceljivanju predačkog nasledja",
      "•	Učenje ulaska u DELTA stanje mozdanih talasa",
    ],
    hidden: false
  },
  {
    title: "IV KURS – DELTA TALASI ",
    content: [
      "•	Usavršavanje rada iz DELTA TALASA mozdane aktivnosti – duboka smirenost",
      "•	Skidanje duševnih ugovora",
      "•	Skidanje mana, slabosti, zavisnosti ,poroka, negativnih uverenja, blokada itd.",
      "•	Ciscenje fizickih prazita,teskih metala,negativnih gljivica,baktrija, virusa i toksina",
      "•	Skidanje bazicnih emocija (spoljasnji uticaji koji u nas ubacuju emocije koje nisu naše)",
      "•	Razgranja mrezno programskih centara (spoljasnji uticaji koji u nas ubacuju programe- misli ,ideje i nagone)",
      "•	Pojačavanje aure i pojacavanje svih pozitivnih vrednosti,kvaliteta, osobina za dalji duhovni rad",
      "•	Meditacija iz delta talasa mozdane aktivnosti",
      
    ],
    hidden: false
  },
  {
    title: "V KURS – ANDJEOSKI RED ",
    content: [
      "•	Osnove svete geometrije i njene upotrebe ",
      "•	Otvaranje čakri iznad 7me, do 16te",
      "•	Upotreba svete geometrije radi skidanja svih negativnih upliva u coveka",
      "•	Povezivanje na lični andjeoski red: Upotreba andjeoskog orudja - svetlosnog mača, kugle i andjeoskih krila",
      "•	Rad na razvijanju jasnovidjenja duhovnih sfera",
      "•	Skidanje uticaja matriska – negativnih energetskih uticaja koji van coveka talasima, vibracijama i energijama uticu na coveka",
 
    ],
    hidden: false
  },
  {
    title: "VI KURS – VREMENSKE LINIJE",
    content: [
      "•	Isceljivanje predackog i licnog nasledja koji nam blokiraju otvaranje odredjenih zivotnih aspekata ,poput ljubavi, posla, novca, zdravlja, pordicnih odnosa",
      "•	Programiranje i rad sa kristalima",
      "•	Manifestacija duhovnog rada u fizicki plan,radi otvaranja vremenskih linija uspeha i napretka u odredjenim oblastima zivota",
      "•	Rad sa nasom nad dusom i povezivanje na svetlosne svetove(vezbanje njihovog jasnovidjenja)",
 
    ],
    hidden: false
  },
  {
    title: "VII KURS – SVETA GEOMETRIJA",
    content: [
      "•	Osnove isceljiteljstva:  Upotreba talasa, svete geometrije, vibracije radi isceljenja fizickih i duhovnih bolesti",
      "•	Budjenje kosmičke energije i rad sa njom radi isceljivanja bioenergijom",
      "•	Povezivanje i rad sa našom nad dušom ",
      "•	Isceljivanje i čišćenje naše nad duše, pod svesti, nad svesti, savesti, ega. ",
      "•	Napredna upotreba svete geometrije",
      "•	Upotreba  i rad sa elementima (voda, vatra, vazduh, zemlja, energija i svetlo)",
      "•	Energetsko odvezivanje od toksicnih ljudi i ljudi parazita",
      "•	Oslobadjanje zarobljnih ili izgubljenih pozitivnih emocija i kvalita koje smo nekad imali",
      "•	Ucenje kako da cistimo druge ljude ",
 
    ],
    hidden: false
  },
  {
    title: "VIII KURS – ISCELITELJSTVO",
    content: [
      "•	Regresija sopstvenih zivota i isceljivanje svojih proslih zivota i njegovog nasledja",
      "•	Isceljivanje porodicnog nasledja i predaka",
      "•	Rad sa svetim energijama, radi čiscenja ili isceljivanja sebe ili drugih ljudi",
      "•	Rad sa bioenergijom i isceljiteljsto fizickih bolesti",
    ],
    hidden: false
  },
  {
    title: "DODATNI KURS – REGRESIJA PROŠLIH ZIVOTA (po sitemu CVET ŽIVOTA)",
    content: [
      "Obuka za regresoterapeuta. (ova obuka je nezavisna od proslih, da bi se ona pohadjala obavezan je samo prvi kurs, ali je pozeljno zavrsiti i drugi i treći)",
      "",
      "•	Očitavanje svojih i tudjih prošlih zivota. (ovo nije klasinca regresija,vec se u sasvim svesnom stanju, mentalno dobijaju vizije i slike proslih zivota)",
      "•	Rešavanje svih oblika trauma, iz ovog ili proslih zivota",
      "•	Reprogramiranje vremenskih linija – menjanje negativnih proslih zivota u pozitivne",
      "•	Isceljivanje proslih zivota ",
      "•	Resavanje svih oblika blokada ka ostvarivanju nečega u ovom zivotu",
      "•	Regresija proslih zivota,rad sa drugim ljudima",
    ],
    hidden: false
  },
  {
    title: "IX KURS – TAJNE MATRIKSA",
    content: [
      "Individualna obuka  i obuka u manjim grupama,radi  potpunog razumevanja funkcionisanja matriks kontrole i načina oslobadjanja od istog."
    ],
    hidden: false
  },
  
]

const Sazetak = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => console.log(data), [data]);

  const back = () => setCurrentIndex(current => current - 1 < 0 ? data.length - 1 : current - 1);
  const forward = () => setCurrentIndex(current => current + 1 > (data.length - 1) ? 0 : current + 1);

  useEffect(() => {
    setData(data.map((el, i) => i === currentIndex ? { ...el, hidden: false } : { ...el, hidden: true }));
  }, [currentIndex]);

    return (
      
      <div className='font-opensans mt-12 justify-between items-center flex lg:w-[1140px] m-auto '>
        
        <div className='mt-20 lg:flex rounded max-h-[750px]'>
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
          <img src={Meditiranje} className='m-auto mt-10' alt="" />
        </div>
      </div>
    )
  }

  export default Sazetak