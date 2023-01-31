import React from 'react'
import { useState } from 'react';
import Article from './Article'
import ArticleDescription from './ArticleDescription';

const articles = [
  {
    id: 1,
    text: "Božanska usklađenost člana sa stvoriteljevom najuzvišenijom vizijom za njega."
  },
  {
    id: 2,
    text: "Nivo svesti (od 0 do 12)"
  },
  {
    id: 3,
    text: "Duhovni nivo (nivo svetosti)"
  },
  {
    id: 4,
    text: "Procenat očišćenosti od matriksa"
  },
  {
    id: 5,
    text: "Procenat očišćenosti od ličnih nesavršenosti"
  },
  {
    id: 6,
    text: "Snaga isijavanja aure"
  },
  {
    id: 7,
    text: "Božanska usklađenost sa ostalim članovima Saveta"
  },
  {
    id: 8,
    text: "Zalaganje za dobrobit Udruženja i kolektiva"
  }
];

const articlesDescription = new Map([
  [
    1,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ], [
    2,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ]
  ],[
    3,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],[
    4,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],[
    5,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],[
    6,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],[
    7,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],[
    8,
    [
      "Udruženje poseduje svoj sistem ocenjivanja nivoa duhovne čistoće pojedinca koje se sprovodi kombinacijom duhovnih čula i sposobnostima više svojih članova: radiestezijski, medijumstvom, jasnoviđenjem, jasnoosećajnošću.",
      "Svaka odluka i svaki stav prolazi kroz uži i širi krug Saveta. Potrebna je apsolutna jednoglasnost u donošenju odluka koje se tiču Udruženja. U širi i uži krug Saveta Udruženja može ući svako ko zadovoljava kriterijume očišćenosti i nivoa svesti potrebne za taj krug donošenja odluka. Ostali članovi mogu doprinositi onoliko koliko to žele.",
      "Član zaslužuje učešće u Savetu Udruženja, a samim tim i funkciju u njemu na osnovu parametara sa desne strane."
    ],

  ],
]);

const Sistem = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(1);

  const changeArticle = (id) => setSelectedArticleId(id);

  return (
    <div className='p-3 lg:p-0 lg:w-[1140px] m-auto mt-20 md:flex '>

      <div className='md:w-[50%] '>
        <ArticleDescription textArray={articlesDescription.get(selectedArticleId) ?? []} />
      </div>


      <div className='md:w-[488px] text-sm md:text-base'>
        {articles.map((article) => <Article orderNumber={article.id} text={article.text} key={article.id} onClick={() => changeArticle(article.id)} />)}
      </div>

    </div>
  )
}

export default Sistem