import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

export const papiezSagrada: NewsSource = {
    slug: 'papiez-leon-xiv-w-barcelonie-wieza-jezusa-sagrada-familia',
    date: '2026-06-12',
    coverImage: '/images/blog/commons/barcelona-skyline.jpg',
    tags: ['Barcelona', 'SagradaFamília', 'Gaudí2026', 'Katalonia'],
    sources: [
        { label: 'Vatican News', url: 'https://www.vaticannews.va/en/church/news/2026-02/basilica-sagrada-familia-cross-completed-tower-of-jesus-christ.html' },
        { label: 'Catalan News', url: 'https://www.catalannews.com/popes-visit/item/pope-leo-xiv-to-visit-sagrada-familia-and-montserrat-on-june-10' },
        { label: 'RTVC – relacja z 10.06.2026', url: 'https://rtvc.es/papa-leon-xiv-visita-barcelona-minuto-a-minuto-10-junio-2026/' },
        { label: 'Diari de Tarragona', url: 'https://www.diaridetarragona.com/catalunya/240227/torre-jesucrist-sagrada-familia-junio-2026.html' },
    ],
    content: {
        pl: {
            title: 'Papież Leon XIV w Barcelonie: Wieża Jezusa Chrystusa poświęcona w 100. rocznicę śmierci Gaudíego',
            excerpt: '10 czerwca 2026 roku – dokładnie sto lat po śmierci Antoniego Gaudíego – papież Leon XIV odprawił mszę w Sagradzie Família i pobłogosławił ukończoną Wieżę Jezusa Chrystusa, najwyższy punkt bazyliki. Opowiadamy, co działo się w Barcelonie i na Montserracie.',
            sections: [
                {
                    p: [
                        'Barcelona przeżyła w czerwcu jedne z najważniejszych dni w swojej najnowszej historii. W dniach **9–11 czerwca 2026 roku** miasto odwiedził papież **Leon XIV**, wybrany na Stolicę Piotrową w maju 2025 roku. Wizyta była częścią podróży do Hiszpanii, która objęła także Madryt i Wyspy Kanaryjskie.',
                        'Kulminacja przypadła na **10 czerwca** – dzień, w którym mijało dokładnie **sto lat od śmierci Antoniego Gaudíego**, architekta Sagrady Família. Tego dnia papież odprawił mszę w bazylice i pobłogosławił jej najwyższą, właśnie ukończoną wieżę.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Nocna panorama Barcelony z Sagradą Família.'),
                },
                {
                    title: 'Wieża Jezusa Chrystusa – najwyższy punkt Barcelony',
                    p: [
                        'Centralna **Wieża Jezusa Chrystusa** mierzy **172,5 metra** i jest najwyższym punktem Sagrady Família. Zwieńcza ją ogromny krzyż – **17 metrów wysokości i 13,5 metra szerokości** – wykonany ze szkła i białej glazurowanej ceramiki, z kamienną konstrukcją wewnętrzną i witrażami.',
                    ],
                    ul: [
                        'Panele wieży montowano od **2018 roku** – ostatni z dwunastu poziomów ukończono w grudniu 2024 roku na wysokości 142,5 m.',
                        'Krzyż wyprodukowano w **Niemczech w 2025 roku**, a potem złożono na platformie 54 metry nad nawą główną i wciągnięto na wieżę w siedmiu częściach.',
                        'Dolne ramię krzyża zamontowano w październiku 2025 roku, a górne – **20 lutego 2026 roku**. Tym samym wszystkie sześć centralnych wież bazyliki zostało ukończonych z zewnątrz.',
                        'Prace wewnątrz wieży potrwają jeszcze w latach 2027–2028.',
                    ],
                    image: withCaption(IMG.sagradaPinnacle, 'Mozaikowe zwieńczenia wież Sagrady Família – w tle panorama Barcelony.'),
                },
                {
                    title: 'Msza w Sagradzie Família',
                    p: [
                        'Przed mszą papież modlił się przy grobie Gaudíego w krypcie bazyliki i zapalił tam świecę. Następnie pobłogosławił Wieżę Jezusa Chrystusa z fasady Narodzenia. W uroczystości uczestniczyli m.in. król Filip VI z królową Letycją, premier Pedro Sánchez i przewodniczący rządu Katalonii Salvador Illa. Wieczór zamknął pokaz świetlny na cześć Gaudíego.',
                        'W homilii padły słowa, które obiegły media na całym świecie:',
                    ],
                    quote: { text: 'Nie możemy wierzyć w Jezusa i prowadzić wojny. Nie możemy wierzyć w Jezusa i zabijać niewinnych.', author: 'papież Leon XIV, Sagrada Família, 10.06.2026' },
                },
                {
                    title: 'Więzienie, Raval i Montserrat',
                    p: ['Program wizyty nie ograniczył się do bazyliki. Tego samego dnia papież:'],
                    ul: [
                        'odwiedził więzienie **Brians 1** w Sant Esteve Sesrovires, gdzie spotkał się z około 80 osadzonymi i mówił, że „przeszłość nie przekreśla przyszłości”,',
                        'w kościele **Sant Agustí w dzielnicy Raval** spotkał się z organizacjami charytatywnymi diecezji – i z dziećmi, którym tłumaczył, że piłka nożna przypomina, iż życie to nie wyścig w pojedynkę,',
                        'udał się na **Montserrat**, gdzie poprowadził różaniec z udziałem około 800 uczniów z 24 szkół katolickich, wysłuchał „Salve Regina” i „Virolai” w wykonaniu słynnego chóru i zjadł obiad z benedyktynami.',
                    ],
                    image: withCaption(IMG.montserrat, 'Masyw Montserrat – jedno z najważniejszych sanktuariów Katalonii.'),
                },
                {
                    title: 'Polski ślad: Jan Paweł II na Montserracie',
                    p: [
                        'Dla Polaków mieszkających w Katalonii wizyta na Montserracie ma szczególny wymiar. Poprzednim papieżem, który odwiedził to sanktuarium w czasach współczesnych, był **Jan Paweł II – w 1982 roku**, podczas swojej pierwszej pielgrzymki do Hiszpanii. Wielu starszych Katalończyków wciąż wspomina tamtą wizytę.',
                        'Montserrat to zresztą jedno z ulubionych miejsc wycieczek Polaków odwiedzających Barcelonę – polskojęzyczne wycieczki na Montserrat organizuje m.in. nasz sponsor, biuro podróży **Bona Barcelona**.',
                    ],
                },
                {
                    title: 'Co to oznacza dla Barcelony i Polaków?',
                    p: [
                        'Ukończenie Wieży Jezusa i obchody stulecia śmierci Gaudíego sprawiają, że rok 2026 jest dla Sagrady Família wyjątkowy. Można się spodziewać jeszcze większego zainteresowania turystów – także z Polski. To dobra wiadomość dla polskich przewodników, biur podróży i lokali gastronomicznych w okolicy bazyliki (w tym **Wawel RestoBar** przy ulicy Sicília).',
                        'Z drugiej strony – jeśli planujesz wizytę z rodziną odwiedzającą Cię z Polski, bilety do bazyliki warto rezerwować z dużym wyprzedzeniem.',
                    ],
                    image: withCaption(IMG.sagradaStairs, 'Kręcone schody w jednej z wież Sagrady Família.'),
                },
            ],
        },
        en: {
            title: 'Pope Leo XIV in Barcelona: the Tower of Jesus Christ blessed on the 100th anniversary of Gaudí\'s death',
            excerpt: 'On 10 June 2026 – exactly a hundred years after Antoni Gaudí died – Pope Leo XIV celebrated Mass at the Sagrada Família and blessed the completed Tower of Jesus Christ, the basilica\'s highest point. Here is what happened in Barcelona and Montserrat.',
            sections: [
                {
                    p: [
                        'In June Barcelona lived through some of the most important days in its recent history. On **9–11 June 2026** the city was visited by **Pope Leo XIV**, elected in May 2025. The visit was part of a trip to Spain that also included Madrid and the Canary Islands.',
                        'The highlight came on **10 June** – exactly **one hundred years after the death of Antoni Gaudí**, the architect of the Sagrada Família. That day the Pope celebrated Mass in the basilica and blessed its highest, newly completed tower.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona at night with the Sagrada Família.'),
                },
                {
                    title: 'The Tower of Jesus Christ – Barcelona\'s highest point',
                    p: ['The central **Tower of Jesus Christ** is **172.5 metres** tall and is the highest point of the Sagrada Família. It is crowned by a huge cross – **17 metres high and 13.5 metres wide** – made of glass and white glazed ceramic, with an internal stone structure and stained glass.'],
                    ul: [
                        'The tower panels were installed from **2018** – the last of twelve levels was completed in December 2024 at 142.5 m.',
                        'The cross was manufactured in **Germany in 2025**, pre-assembled on a platform 54 metres above the nave and hoisted in seven sections.',
                        'The lower arm was installed in October 2025 and the upper arm on **20 February 2026**, completing the exterior of all six central towers.',
                        'Interior work on the tower will continue in 2027–2028.',
                    ],
                    image: withCaption(IMG.sagradaPinnacle, 'Mosaic pinnacles of the Sagrada Família towers, with Barcelona in the background.'),
                },
                {
                    title: 'Mass at the Sagrada Família',
                    p: [
                        'Before Mass, the Pope prayed at Gaudí\'s tomb in the crypt and lit a candle. He then blessed the Tower of Jesus Christ from the Nativity façade. Attendees included King Felipe VI and Queen Letizia, Prime Minister Pedro Sánchez and Catalan President Salvador Illa. The evening ended with a light show in Gaudí\'s honour.',
                        'His homily included words that travelled around the world:',
                    ],
                    quote: { text: 'We cannot believe in Jesus and wage war. We cannot believe in Jesus and kill the innocent.', author: 'Pope Leo XIV, Sagrada Família, 10.06.2026' },
                },
                {
                    title: 'A prison, the Raval and Montserrat',
                    p: ['The programme went beyond the basilica. The same day the Pope:'],
                    ul: [
                        'visited **Brians 1** prison in Sant Esteve Sesrovires, meeting about 80 inmates and saying that "the past does not condemn the future",',
                        'met the diocese\'s charities at **Sant Agustí church in the Raval** – and children, to whom he said football reminds us that life is not a solo race,',
                        'travelled to **Montserrat**, where he led the rosary with about 800 pupils from 24 Catholic schools, listened to the "Salve Regina" and the "Virolai" and had lunch with the Benedictines.',
                    ],
                    image: withCaption(IMG.montserrat, 'The Montserrat massif – one of Catalonia\'s most important sanctuaries.'),
                },
                {
                    title: 'A Polish connection: John Paul II at Montserrat',
                    p: [
                        'For Poles living in Catalonia, the Montserrat visit has a special meaning. The previous pope to visit the sanctuary in modern times was **John Paul II, in 1982**, during his first pilgrimage to Spain. Many older Catalans still remember that visit.',
                        'Montserrat is also one of the favourite day trips for Poles visiting Barcelona – Polish-language tours there are run by, among others, our sponsor, the travel agency **Bona Barcelona**.',
                    ],
                },
                {
                    title: 'What does it mean for Barcelona and for Poles?',
                    p: [
                        'The completion of the Tower of Jesus and the Gaudí centenary make 2026 a special year for the Sagrada Família. Even more tourist interest can be expected – including from Poland. Good news for Polish guides, travel agencies and restaurants near the basilica (including **Wawel RestoBar** on Carrer de Sicília).',
                        'On the other hand – if family from Poland is coming to visit, book basilica tickets well in advance.',
                    ],
                    image: withCaption(IMG.sagradaStairs, 'Spiral stairs in one of the Sagrada Família towers.'),
                },
            ],
        },
        es: {
            title: 'El papa León XIV en Barcelona: bendecida la Torre de Jesucristo en el centenario de la muerte de Gaudí',
            excerpt: 'El 10 de junio de 2026, exactamente cien años después de la muerte de Antoni Gaudí, el papa León XIV celebró misa en la Sagrada Família y bendijo la Torre de Jesucristo, el punto más alto de la basílica. Te contamos qué pasó en Barcelona y Montserrat.',
            sections: [
                {
                    p: [
                        'Barcelona vivió en junio algunos de los días más importantes de su historia reciente. Del **9 al 11 de junio de 2026** la ciudad recibió al **papa León XIV**, elegido en mayo de 2025. La visita formaba parte de un viaje a España que incluyó también Madrid y las Islas Canarias.',
                        'El momento culminante llegó el **10 de junio**, justo **cien años después de la muerte de Antoni Gaudí**, arquitecto de la Sagrada Família. Ese día el Papa celebró misa en la basílica y bendijo su torre más alta, recién terminada.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona de noche con la Sagrada Família.'),
                },
                {
                    title: 'La Torre de Jesucristo, el punto más alto de Barcelona',
                    p: ['La **Torre de Jesucristo** central mide **172,5 metros** y es el punto más alto de la Sagrada Família. La corona una enorme cruz de **17 metros de altura y 13,5 de anchura**, de vidrio y cerámica blanca vidriada, con estructura interior de piedra y vidrieras.'],
                    ul: [
                        'Los paneles de la torre se colocaron desde **2018**; el último de los doce niveles se terminó en diciembre de 2024, a 142,5 m.',
                        'La cruz se fabricó en **Alemania en 2025**, se premontó en una plataforma a 54 metros sobre la nave y se izó en siete secciones.',
                        'El brazo inferior se instaló en octubre de 2025 y el superior el **20 de febrero de 2026**, con lo que las seis torres centrales quedaron terminadas por fuera.',
                        'Los trabajos interiores de la torre seguirán en 2027 y 2028.',
                    ],
                    image: withCaption(IMG.sagradaPinnacle, 'Pináculos de mosaico de la Sagrada Família, con Barcelona al fondo.'),
                },
                {
                    title: 'Misa en la Sagrada Família',
                    p: [
                        'Antes de la misa, el Papa rezó ante la tumba de Gaudí en la cripta y encendió una vela. Después bendijo la Torre de Jesucristo desde la fachada del Nacimiento. Asistieron, entre otros, los Reyes Felipe VI y Letizia, el presidente del Gobierno Pedro Sánchez y el president de la Generalitat Salvador Illa. La jornada terminó con un espectáculo de luz en honor a Gaudí.',
                        'En la homilía pronunció palabras que dieron la vuelta al mundo:',
                    ],
                    quote: { text: 'No podemos creer en Jesús y hacer la guerra. No podemos creer en Jesús y matar al inocente.', author: 'papa León XIV, Sagrada Família, 10.06.2026' },
                },
                {
                    title: 'La cárcel, el Raval y Montserrat',
                    p: ['El programa fue más allá de la basílica. Ese mismo día el Papa:'],
                    ul: [
                        'visitó la cárcel de **Brians 1** en Sant Esteve Sesrovires, donde se reunió con unos 80 internos y dijo que «el pasado no condena el futuro»,',
                        'se encontró con las entidades caritativas de la diócesis en la **iglesia de Sant Agustí, en el Raval**, y con niños, a los que dijo que el fútbol recuerda que la vida no es una carrera en solitario,',
                        'subió a **Montserrat**, donde rezó el rosario con unos 800 alumnos de 24 escuelas católicas, escuchó la «Salve Regina» y el «Virolai» y comió con la comunidad benedictina.',
                    ],
                    image: withCaption(IMG.montserrat, 'El macizo de Montserrat, uno de los santuarios más importantes de Cataluña.'),
                },
                {
                    title: 'Un vínculo polaco: Juan Pablo II en Montserrat',
                    p: [
                        'Para los polacos que viven en Cataluña, la visita a Montserrat tiene un significado especial. El anterior papa que visitó el santuario en tiempos modernos fue **Juan Pablo II, en 1982**, durante su primera peregrinación a España. Muchos catalanes mayores aún recuerdan aquella visita.',
                        'Montserrat es además una de las excursiones favoritas de los polacos que visitan Barcelona: organiza visitas en polaco, entre otros, nuestro patrocinador, la agencia **Bona Barcelona**.',
                    ],
                },
                {
                    title: '¿Qué supone para Barcelona y para los polacos?',
                    p: [
                        'La finalización de la Torre de Jesucristo y el centenario de Gaudí convierten 2026 en un año especial para la Sagrada Família. Cabe esperar aún más interés turístico, también desde Polonia: una buena noticia para guías, agencias de viajes y restaurantes polacos cerca de la basílica (como **Wawel RestoBar**, en la calle Sicília).',
                        'Eso sí: si te visita la familia desde Polonia, reserva las entradas a la basílica con mucha antelación.',
                    ],
                    image: withCaption(IMG.sagradaStairs, 'Escalera de caracol en una de las torres de la Sagrada Família.'),
                },
            ],
        },
        ca: {
            title: 'El papa Lleó XIV a Barcelona: beneïda la Torre de Jesucrist en el centenari de la mort de Gaudí',
            excerpt: 'El 10 de juny de 2026, exactament cent anys després de la mort d\'Antoni Gaudí, el papa Lleó XIV va celebrar missa a la Sagrada Família i va beneir la Torre de Jesucrist, el punt més alt de la basílica. T\'expliquem què va passar a Barcelona i Montserrat.',
            sections: [
                {
                    p: [
                        'Barcelona va viure al juny alguns dels dies més importants de la seva història recent. Del **9 a l\'11 de juny de 2026** la ciutat va rebre el **papa Lleó XIV**, elegit el maig de 2025. La visita formava part d\'un viatge a Espanya que també va incloure Madrid i les Canàries.',
                        'El moment culminant va arribar el **10 de juny**, just **cent anys després de la mort d\'Antoni Gaudí**, arquitecte de la Sagrada Família. Aquell dia el Papa va celebrar missa a la basílica i va beneir la seva torre més alta, acabada de completar.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona de nit amb la Sagrada Família.'),
                },
                {
                    title: 'La Torre de Jesucrist, el punt més alt de Barcelona',
                    p: ['La **Torre de Jesucrist** central fa **172,5 metres** i és el punt més alt de la Sagrada Família. La corona una enorme creu de **17 metres d\'alçada i 13,5 d\'amplada**, de vidre i ceràmica blanca vidriada, amb estructura interior de pedra i vitralls.'],
                    ul: [
                        'Els panells de la torre es van col·locar des del **2018**; l\'últim dels dotze nivells es va acabar el desembre de 2024, a 142,5 m.',
                        'La creu es va fabricar a **Alemanya el 2025**, es va premuntar en una plataforma a 54 metres sobre la nau i es va hissar en set seccions.',
                        'El braç inferior es va instal·lar l\'octubre de 2025 i el superior el **20 de febrer de 2026**, i així les sis torres centrals van quedar acabades per fora.',
                        'Els treballs interiors de la torre continuaran el 2027 i el 2028.',
                    ],
                    image: withCaption(IMG.sagradaPinnacle, 'Pinacles de mosaic de la Sagrada Família, amb Barcelona al fons.'),
                },
                {
                    title: 'Missa a la Sagrada Família',
                    p: [
                        'Abans de la missa, el Papa va pregar davant la tomba de Gaudí a la cripta i hi va encendre una espelma. Després va beneir la Torre de Jesucrist des de la façana del Naixement. Hi van assistir, entre d\'altres, els Reis Felip VI i Letícia, el president del Govern espanyol Pedro Sánchez i el president de la Generalitat Salvador Illa. La jornada es va tancar amb un espectacle de llum en honor de Gaudí.',
                        'A l\'homilia va pronunciar paraules que van fer la volta al món:',
                    ],
                    quote: { text: 'No podem creure en Jesús i fer la guerra. No podem creure en Jesús i matar l\'innocent.', author: 'papa Lleó XIV, Sagrada Família, 10.06.2026' },
                },
                {
                    title: 'La presó, el Raval i Montserrat',
                    p: ['El programa va anar més enllà de la basílica. Aquell mateix dia el Papa:'],
                    ul: [
                        'va visitar la presó de **Brians 1** a Sant Esteve Sesrovires, on es va trobar amb uns 80 interns i va dir que «el passat no condemna el futur»,',
                        'es va reunir amb les entitats caritatives de la diòcesi a l\'**església de Sant Agustí, al Raval**, i amb infants, als quals va dir que el futbol recorda que la vida no és una cursa en solitari,',
                        'va pujar a **Montserrat**, on va resar el rosari amb uns 800 alumnes de 24 escoles catòliques, va escoltar la «Salve Regina» i el «Virolai» i va dinar amb la comunitat benedictina.',
                    ],
                    image: withCaption(IMG.montserrat, 'El massís de Montserrat, un dels santuaris més importants de Catalunya.'),
                },
                {
                    title: 'Un vincle polonès: Joan Pau II a Montserrat',
                    p: [
                        'Per als polonesos que viuen a Catalunya, la visita a Montserrat té un significat especial. L\'anterior papa que va visitar el santuari en temps moderns va ser **Joan Pau II, el 1982**, durant el seu primer pelegrinatge a Espanya. Molts catalans grans encara recorden aquella visita.',
                        'Montserrat és a més una de les excursions preferides dels polonesos que visiten Barcelona: hi organitza visites en polonès, entre d\'altres, el nostre patrocinador, l\'agència **Bona Barcelona**.',
                    ],
                },
                {
                    title: 'Què suposa per a Barcelona i per als polonesos?',
                    p: [
                        'La finalització de la Torre de Jesucrist i el centenari de Gaudí fan del 2026 un any especial per a la Sagrada Família. Es pot esperar encara més interès turístic, també des de Polònia: una bona notícia per a guies, agències de viatges i restaurants polonesos a prop de la basílica (com el **Wawel RestoBar**, al carrer de Sicília).',
                        'Això sí: si et visita la família des de Polònia, reserva les entrades a la basílica amb molta antelació.',
                    ],
                    image: withCaption(IMG.sagradaStairs, 'Escala de cargol en una de les torres de la Sagrada Família.'),
                },
            ],
        },
    },
};
