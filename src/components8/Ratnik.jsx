import React from 'react'
import One from '../assets/1.png'
import Two from '../assets/2.png'
import Three from '../assets/3.png'
import Four from '../assets/4.png'
import Five from '../assets/5.png'
import Six from '../assets/6.png'
import Seven from '../assets/7.png'

export const Ratnik = () => {
  return (
    <div className='flex p-10'>
      
      <div className='mx-auto mt-20 max-w-[624px]'>
      <h1 className='text-4xl font-velikaslova mb-6'>Svetlosni ratnik</h1>
        <p className='font-opensans'>
          Sledeća celina, koja kreće sa petim nivoom obuke „Cvet života“, zove se
          „Svetlosni ratnik“. Ovo je napredniji sistem rada na sebi, ali i osnovni
          princip rada na drugima i na kolektivu. Sa ovom celinom od četiri obuke –
          nivoa, tragalac se uči da utiče na faktore koji na njegov život utiču
          spolja: matriks centri, vremenske linije, entiteti, magije, energetski
          vampiri, ali i da isceljuje dubinske rane i nesavršenosti unutar svoga bića:
          traume, unutrašnje dete, odvojenost bića, DNK, predacko nasleđe.
        </p>
        <p className='font-opensans mt-4'>
          Savladavanjem ovog stepena obuke, pojedinac dolazi do nivoa gde postaje obučen
          da rešava čitav spektar problema srednjeg nivoa, za sebe i druge ljude. Ovaj
          nivo predstavlja ozbiljan nivo duhovnog rada i sa njegovim završetkom smatramo
          da pojedinac dolazi do nivoa svesti i znanja „duhovnog ratnika“, tj. osobe
          koja zna i može delovati na duhovne svetove.
        </p>
        <p className='font-opensans mt-4'>
          Od petog zaključno sa osmim nivoom obuke „Cvet života“, tragalac postiže/stiče:
        </p>
      </div>
      <ul className='max-w-lg mx-auto mt-10'>
        <li className='flex items-center space-x-4'>
            <img src={One} />
            <p className='font-opensans'>
            Stabilnu i trajnu duhovnu praksu koja će ga pratiti kroz život
            </p>
        </li>
        <li className='flex items-start space-x-4'>
            <img src={Two} />
            <p className='font-opensans'>
            Potpuno isceljenje i očišćenje svog unutrašnjeg polja od negativnih energija
            </p>
        </li>
        <li className='flex items-start space-x-4'>
            <img src={Three} />
            <p className='font-opensans'>
            Uči da utiče na spoljne faktore koji mu unose negativnosti i negativne sinhronicitete u život
            </p>
        </li>
        <li className='flex items-start space-x-4'>
            <img src={Four} />
            <p className='font-opensans'>
            Uči da radi na dubokim unutrašnjim ranama i nesavršenostima svoga bića
            </p>
        </li>
        <li className='flex items-start space-x-4'>
            <img src={Five} />
            <p className='font-opensans'>
            Aktivno već radi na nekim kolektivnim pitanjima te vrši duhovnu praksu za celu zajednicu
            </p>
        </li>
        <li className='flex items-start space-x-4'>
             <img src={Six} />
            <p className='font-opensans'>
            Stiče znanje o tome kako energetski svetovi funkcionišu te mogućnost da na njih vidno utiče
            </p>
        </li>
        <li className='flex items-start space-x-4'>
            <img src={Seven} />
            <p className='font-opensans'>
            Sve ovo radi i za druge – isceljujući ljude svoje okoline
            </p>
        </li>
      </ul>
    </div>
  )
}

export default Ratnik