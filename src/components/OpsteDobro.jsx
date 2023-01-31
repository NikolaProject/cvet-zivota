import React from 'react'

const OpsteDobro = () => {
  return (
    <div className='m-auto r mx-[10%] mt-24'>
        <div className='flex justify-between pb-14'>
        <p className='font-velikaslova text-3xl mb-4 mt-10'>Tekuci Projekti udruzenja za opste dobro</p>
        <button className='bg-zuta p-7 w-60'>Saznajte vise <img src="" alt="" /></button>
        </div>

        <div className='flex justify-between space-x-3 h-[365px]'>
            <div className='border-solid border-gray-200 border-[1px] rounded-md p-5 '>
                <p className='font-velikaslova mb-10 text-3xl'>Razvoj Tehnologija</p>
                <p>Razvoj tehnologija obnovljive energije, razvoj indukcionog motora sa izlaznom silom-energijom većom od ulazne (Projekat je na oko 60 procenta. Izradjen je prototip. Potrebno je napraviti industrijsku – funckionalnu varijatnu. Rok za izvršenje 2020.g.).
<br /><br /><br />
Razvoj tehnologija baziranih na Teslinim principima magnetizma.</p>
            </div>
            <div className='border-solid border-gray-200 border-[1px] rounded-md p-5 '>
                <p className='font-velikaslova mb-10 text-3xl'>Izgradnja pravoslavnog hrama</p>
                <p>Izgradnja pravoslavnog hrama i monaških kelija, na Kosmaju u selu Koraćici, pored izvora lekovite vode i jedne od najačih energetskih tačaka u Srbiji (Projekat je na oko 20 procenta. Kupljeno je zemljište, raskrčen prostor, arhitektnoski plan je u izradi. Rok za izvršenje 2025.g.).</p>
            </div>
            <div className='border-solid border-gray-200 border-[1px] rounded-md p-5 '>
                <p className='font-velikaslova mb-10 text-3xl'>Pronalazak Energetskih tacaka</p>
                <p>Pronalaženje,obilazak i obeležavanje svih energetskih tačaka („najdanovih krugova“) u Srbiji(a potom i šire),te promocija ovih lokacija radi isceljivanja i pročišćenja(Pronadjen je veliki broj energetskih tačaka,preko 20, ali se trebaju obeležiti. Rok za izvršenje 2024.g.).</p>
            </div>
        </div>

    </div>
  )
}

export default OpsteDobro