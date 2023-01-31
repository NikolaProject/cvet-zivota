import React from 'react'

const Item = ({ itemData }) => {
    if (itemData.hidden) return null;

    return (
        <div className='p-5'>
            <p className='font-velikaslova text-4xl pb-10 md:text-6xl mt-5 '>{itemData.title}</p>
            <div className="grid">
                <p className='mr-0 lg:mr-20 md:h-[560px]'>
                    {
                        itemData.content.map((content) => (<span>{content}<br></br><br></br></span>))
                    }
                </p>
                {/*„Centar za duhovni razvoj i edukaciju“ je udruženje gradjana, tim ljudi koji deli zajedničku strast prema radu na sebi i pomaganju drugima da stanu na taj put. Naš cilj je edukacija svih zainteresovanih u duhovne tehnike, promocija duhovnosti i rada na sebi kao načina života, kao i pružanje pomoći svima kojima je potrebna.
          <br></br><br></br>
          U tu svrhu organizujemo seminare, kruseve, druženja i zajedničke aktivnosti sa ciljem unapređenja kvaliteta života i duhovne evolucije. Tim poseduje svoj razvojni centar i svakodnevno radi na istraživanju duhovnih svetova i njihovih zakonitosti, a sve to potom prezentujemo i delimo sa svima. Za sve one koji su zablokirani i trenutno sputani, nudimo savetovalište, terapijsku pomoć, duhovno usmeravanje i energetska čišćenja svih vrsta.
          <br></br><br></br>
          Ako vam je potrebna, pomoć u rešavanju određenih zivotnih ili emotivnih problema, ili vam je potrebana edukacija iz bilo koje duhovne sfere, javite nam se na kontakt broj, izaćićemo vam u susret u što kraćem roku. Centar vam moze pruziti i pomoć i obuku i kada niste pri novcu, a za one koji su u mogućnosti platiti za našu uslugu, garantujemo poboljšanje stanja, ili u suprotnom ne naplacujemo svoje usluge. */}
            </div>
            
        </div>
    );
}

export default Item
