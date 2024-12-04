import React from 'react'
import Slika from '../assets/image 18.png'

export const Molitva = () => {
  return (
    <div className='lg:w-[1140px] flex:col items-center mx-auto justify-between m-auto lg:flex'>
        <div>
            <h1 className='font-velikaslova text-4xl mb-10'>Kvantna molitva</h1>

            <p className='font-opensans max-w-[560px]'>
            Sada ćemo dati pregled obuka. Svaka obuka je celina za sebe, ali se sa svakim novim kursom to znanje produbljuje. Najoptimalnije je svako predavanje prelaziti jednom nedeljno, pa stoga jedan nivo treba prolaziti oko mesec dana ili više, u zavisnosti koliko ko oseća da treba.
            <br/><br/>
            Cena svakog kursa pojedinačno je 30 evra ili 3500 dinara, a oni koji nisu pri novcu, kurs mogu dobiti besplatno. Kursevi i obuke „Cvet života” imaju za cilj da budu opšte dostupni za svakog, te da svako ko želi da uđe u duhovni rad i razvoj može to uraditi bez ikakvih opterećenja i obaveza. 
            <br/><br/>
            Simbolična cena od 30 evra po kursu je neki minimum, kojim udruženje delom pokriva svoje mesečne troškove. Svi oni tragaoci koji imaju želju da plate više od navedene cene za neki kurs, to mogu uraditi po svom nahođenju, a sav profit ide na istraživanje i razvoj novih duhovnih znanja, njihovo deljenje, objavljivanje knjiga, štampu materijala i druge fiksne troškove rada.
            </p>

        </div>
        <div className='ml-10'>
            <img src={Slika} />
        </div>
    </div>
  )
}

export default Molitva
