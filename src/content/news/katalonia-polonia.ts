import type { Locale, NewsCard, NewsSection, NewsSource } from './_shared';
import { IMG } from './_images';

const skyline = '/images/pictures/pexels-frederic-bartl-256900-786126.jpg';
const beach = '/images/pictures/pexels-valdemaras-d-784301-1874675.jpg';

/** Polish-run businesses & organisations in Barcelona that support our staff (data from the sponsors page). */
const firmLinks = {
    delicias: { logo: '/images/sponsors/delicias_by_bea_2.avif', url: 'https://www.deliciasbybea.com' },
    worldClass: { logo: '/images/sponsors/world class barcelona.png', url: 'https://worldclassbcn.com/en/' },
    krakoviak: { logo: '/images/sponsors/krakoviak.png', url: 'https://maps.app.goo.gl/kWQt3NZxNPzwSihj8' },
    wawel: { logo: '/images/sponsors/Wawel.png', url: 'https://maps.app.goo.gl/ALp5fnzBVBzRfsR68' },
    kosmo: { logo: '/images/sponsors/kosmo-his-plano.png', url: 'https://kosmohisplano.com' },
};

const mapLabel: Record<Locale, string> = { pl: 'Mapa', en: 'Map', es: 'Mapa', ca: 'Mapa' };

function firmCards(locale: Locale, t: Record<keyof typeof firmLinks, { kind: string; text: string }>): NewsCard[] {
    const names = { delicias: 'Delicias by Bea', worldClass: 'World Class Barcelona', krakoviak: 'Krakoviak', wawel: 'Wawel RestoBar', kosmo: 'Kosmo HisPLano' };
    return (Object.keys(firmLinks) as (keyof typeof firmLinks)[]).map((k) => ({
        name: names[k],
        logo: firmLinks[k].logo,
        url: firmLinks[k].url,
        linkLabel: k === 'krakoviak' || k === 'wawel' ? mapLabel[locale] : undefined,
        ...t[k],
    }));
}

const firms: Record<Locale, NewsSection> = {
    pl: {
        title: 'Polskie firmy w Barcelonie – nasi sponsorzy i partnerzy',
        p: [
            'Polacy w Barcelonie to nie tylko pracownicy międzynarodowych korporacji. Coraz więcej z nas zakłada tu **własne biznesy** – cukiernie, sklepy, restauracje, szkoły – i z powodzeniem prowadzi je w samym sercu miasta. Wiele z tych firm co roku gra razem z nami w Finale WOŚP jako sponsorzy, partnerzy i współorganizatorzy.',
            'Oto kilka miejsc prowadzonych przez Polaków, które warto znać i odwiedzić:',
        ],
        cards: firmCards('pl', {
            delicias: { kind: 'Cukiernia · sponsor', text: 'Polska cukiernia **Bei Michalak** w Barcelonie. Bea łączy smaki rodzinnych, polskich przepisów z nowoczesną sztuką cukierniczą, którą doskonaliła w Berlinie i Barcelonie.' },
            worldClass: { kind: 'Szkoła hiszpańskiego · partner', text: 'Szkoła języka hiszpańskiego w centrum Barcelony z wyjątkową społecznością uczniów i nauczycieli. Intensywne kursy, lekcje próbne i mnóstwo aktywności – idealny start dla nowych mieszkańców miasta.' },
            krakoviak: { kind: 'Polski sklep · sponsor', text: 'Polski sklep tuż obok Sagrady Família, przy ulicy Sicília. Pierogi, twaróg, ogórki kiszone, wędliny, kiełbasy, serki – wszystko, za czym tęsknimy. Otwarty także w niedziele!' },
            wawel: { kind: 'Polska restauracja · partner', text: 'Mały kawałek Polski w Barcelonie: pierogi, zupy, kiełbaski, naleśniki i szarlotka – a do tego, jak zgodnie twierdzą goście, wyśmienite piwo.' },
            kosmo: { kind: 'Stowarzyszenie edukacyjne · współorganizator', text: 'Stowarzyszenie Edukacyjne Kosmo HisPLano organizuje zajęcia dodatkowe dla dzieci i młodzieży z polonijnych rodzin – rozwija język polski i wiedzę o Polsce. Współorganizuje z nami Finał WOŚP w Barcelonie.' },
        }),
    },
    en: {
        title: 'Polish businesses in Barcelona – our sponsors and partners',
        p: [
            'Poles in Barcelona are not only employees of international corporations. More and more of us start **our own businesses** here – patisseries, shops, restaurants, schools – and run them successfully in the heart of the city. Many of them play with us every year at the WOŚP Finale as sponsors, partners and co-organisers.',
            'Here are some Polish-run places worth knowing and visiting:',
        ],
        cards: firmCards('en', {
            delicias: { kind: 'Patisserie · sponsor', text: 'The Polish patisserie of **Bea Michalak** in Barcelona. Bea combines the flavours of Polish family recipes with modern pastry techniques she perfected in Berlin and Barcelona.' },
            worldClass: { kind: 'Spanish school · partner', text: 'A Spanish language school in central Barcelona with a great community of students and teachers. Intensive courses, trial lessons and lots of activities – a perfect start for newcomers to the city.' },
            krakoviak: { kind: 'Polish shop · sponsor', text: 'A Polish shop right next to the Sagrada Família, on Carrer de Sicília. Pierogi, twaróg, pickles, cold cuts, sausages – everything we miss from home. Open on Sundays too!' },
            wawel: { kind: 'Polish restaurant · partner', text: 'A little piece of Poland in Barcelona: pierogi, soups, sausages, pancakes and apple pie – plus, as guests agree, excellent beer.' },
            kosmo: { kind: 'Educational association · co-organiser', text: 'The Kosmo HisPLano Educational Association runs extracurricular activities for children and teenagers from Polish families – building Polish language skills and knowledge about Poland. It co-organises the WOŚP Finale in Barcelona with us.' },
        }),
    },
    es: {
        title: 'Empresas polacas en Barcelona: nuestros patrocinadores y colaboradores',
        p: [
            'Los polacos de Barcelona no son solo empleados de multinacionales. Cada vez más de nosotros montamos aquí **nuestros propios negocios** (pastelerías, tiendas, restaurantes, escuelas) y los llevamos con éxito en pleno centro de la ciudad. Muchos de ellos tocan cada año con nosotros en el Final de WOŚP como patrocinadores, colaboradores y coorganizadores.',
            'Estos son algunos lugares gestionados por polacos que vale la pena conocer y visitar:',
        ],
        cards: firmCards('es', {
            delicias: { kind: 'Pastelería · patrocinador', text: 'La pastelería polaca de **Bea Michalak** en Barcelona. Bea combina los sabores de las recetas familiares polacas con técnicas de repostería modernas que perfeccionó en Berlín y Barcelona.' },
            worldClass: { kind: 'Escuela de español · colaborador', text: 'Una escuela de español en el centro de Barcelona con una gran comunidad de alumnos y profesores. Cursos intensivos, clases de prueba y muchas actividades: el comienzo perfecto para quien acaba de llegar a la ciudad.' },
            krakoviak: { kind: 'Tienda polaca · patrocinador', text: 'Una tienda polaca justo al lado de la Sagrada Família, en la calle Sicília. Pierogi, requesón, pepinillos, embutidos, salchichas: todo lo que echamos de menos. ¡Abierta también los domingos!' },
            wawel: { kind: 'Restaurante polaco · colaborador', text: 'Un pedacito de Polonia en Barcelona: pierogi, sopas, salchichas, crepes y pastel de manzana, y además, según los clientes, una cerveza excelente.' },
            kosmo: { kind: 'Asociación educativa · coorganizador', text: 'La Asociación Educativa Kosmo HisPLano organiza actividades extraescolares para niños y jóvenes de familias polacas, centradas en la lengua polaca y el conocimiento de Polonia. Coorganiza con nosotros el Final de WOŚP en Barcelona.' },
        }),
    },
    ca: {
        title: 'Empreses poloneses a Barcelona: els nostres patrocinadors i col·laboradors',
        p: [
            'Els polonesos de Barcelona no són només treballadors de multinacionals. Cada vegada més de nosaltres hi muntem **els nostres propis negocis** (pastisseries, botigues, restaurants, escoles) i els portem amb èxit al bell mig de la ciutat. Molts d\'ells toquen cada any amb nosaltres al Final de WOŚP com a patrocinadors, col·laboradors i coorganitzadors.',
            'Aquests són alguns llocs gestionats per polonesos que val la pena conèixer i visitar:',
        ],
        cards: firmCards('ca', {
            delicias: { kind: 'Pastisseria · patrocinador', text: 'La pastisseria polonesa de **Bea Michalak** a Barcelona. La Bea combina els sabors de les receptes familiars poloneses amb tècniques de pastisseria modernes que va perfeccionar a Berlín i Barcelona.' },
            worldClass: { kind: 'Escola d\'espanyol · col·laborador', text: 'Una escola d\'espanyol al centre de Barcelona amb una gran comunitat d\'alumnes i professors. Cursos intensius, classes de prova i moltes activitats: el començament perfecte per a qui acaba d\'arribar a la ciutat.' },
            krakoviak: { kind: 'Botiga polonesa · patrocinador', text: 'Una botiga polonesa just al costat de la Sagrada Família, al carrer de Sicília. Pierogi, mató, cogombrets, embotits, salsitxes: tot el que trobem a faltar. Oberta també els diumenges!' },
            wawel: { kind: 'Restaurant polonès · col·laborador', text: 'Un trosset de Polònia a Barcelona: pierogi, sopes, salsitxes, creps i pastís de poma, i a més, segons els clients, una cervesa excel·lent.' },
            kosmo: { kind: 'Associació educativa · coorganitzador', text: 'L\'Associació Educativa Kosmo HisPLano organitza activitats extraescolars per a infants i joves de famílies poloneses, centrades en la llengua polonesa i el coneixement de Polònia. Coorganitza amb nosaltres el Final de WOŚP a Barcelona.' },
        }),
    },
};

const firmsOutro: Record<Locale, NewsSection> = {
    pl: {
        p: ['Wspierając te miejsca, wspierasz też Orkiestrę – to dzięki takim firmom możemy co roku zorganizować Finał w Barcelonie. Pełną listę naszych sponsorów i partnerów znajdziesz na stronie sponsorów, a jeśli prowadzisz własny biznes – dołącz do nich przy 35. Finale!'],
        cta: { label: 'Zobacz sponsorów 34. Finału', href: '/sponsors/34-final' },
    },
    en: {
        p: ['By supporting these places, you also support the Orchestra – businesses like these make our Barcelona Finale possible every year. You will find the full list of our sponsors and partners on the sponsors page – and if you run your own business, join them for the 35th Finale!'],
        cta: { label: 'See the sponsors of the 34th Finale', href: '/sponsors/34-final' },
    },
    es: {
        p: ['Al apoyar estos lugares, también apoyas a la Orquesta: gracias a empresas como estas podemos organizar cada año el Final en Barcelona. Encontrarás la lista completa de patrocinadores y colaboradores en la página de patrocinadores, y si tienes tu propio negocio, ¡únete a ellos en el 35.º Final!'],
        cta: { label: 'Ver los patrocinadores del 34.º Final', href: '/sponsors/34-final' },
    },
    ca: {
        p: ['Donant suport a aquests llocs, també dones suport a l\'Orquestra: gràcies a empreses com aquestes podem organitzar cada any el Final a Barcelona. Trobaràs la llista completa de patrocinadors i col·laboradors a la pàgina de patrocinadors, i si tens el teu propi negoci, uneix-t\'hi al 35è Final!'],
        cta: { label: 'Veure els patrocinadors del 34è Final', href: '/sponsors/34-final' },
    },
};

export const kataloniaPolonia: NewsSource = {
    slug: 'co-czwarty-mieszkaniec-katalonii-urodzil-sie-za-granica',
    date: '2025-02-20',
    coverImage: skyline,
    tags: ['Katalonia', 'Barcelona', 'Polonia', 'WOŚPBarcelona'],
    sources: [
        { label: 'Catalan News (13.02.2025)', url: 'https://catalannews.com/society-science/item/foreign-born-nationals-quarter-population-catalonia-13-february-2025' },
        { label: 'Catalan News – osoby 25–39 lat', url: 'https://www.catalannews.com/society-science/item/nearly-half-of-catalonias-residents-aged-25-to-39-were-born-abroad' },
        { label: 'Idescat – ludność zagraniczna', url: 'https://www.idescat.cat/poblacioestrangera/?b=1&lang=en' },
        { label: 'Konsulat Generalny RP w Barcelonie', url: 'https://gov.pl/hiszpania/konsulat-generalny-rp-w-barcelonie' },
    ],
    content: {
        pl: {
            title: 'Co czwarty mieszkaniec Katalonii urodził się za granicą – my też jesteśmy częścią tej historii',
            excerpt: 'Według danych INE na 1 stycznia 2025 roku w Katalonii mieszkało ponad 2 miliony osób urodzonych poza Hiszpanią. Wśród nich są Polacy – i to właśnie oni tworzą Sztab WOŚP Barcelona. Przyglądamy się liczbom i podpowiadamy, gdzie szukać polskiej społeczności.',
            sections: [
                {
                    highlight: { value: '2 028 315', label: 'osób urodzonych za granicą mieszkało w Katalonii 1 stycznia 2025 r. – to 24,98% wszystkich mieszkańców' },
                    p: [
                        'W lutym 2025 roku hiszpański urząd statystyczny INE opublikował dane, które szeroko komentowały katalońskie media: po raz pierwszy w historii niemal **co czwarty mieszkaniec Katalonii urodził się poza Hiszpanią**. Wspólnota autonomiczna liczy ponad 8 milionów mieszkańców, a ponad 2 miliony z nich przyjechały tu z innych krajów – z Europy, Ameryki Łacińskiej, Afryki i Azji.',
                        'Dla nas, Polaków mieszkających w Barcelonie, te liczby nie są abstrakcją. Codziennie mijamy sąsiadów mówiących po arabsku, hiszpańsku z kolumbijskim akcentem, włosku czy ukraińsku. Barcelona to dziś jedno z najbardziej międzynarodowych miast Europy – i właśnie w takim mieście od lat gra nasz sztab.',
                    ],
                },
                {
                    title: 'Katalonia w liczbach',
                    p: ['Kilka faktów, które pokazują skalę zmian:'],
                    ul: [
                        '**2 028 315** – tyle osób urodzonych za granicą mieszkało w Katalonii 1 stycznia 2025 r. (dane INE).',
                        '**Niemal połowa** mieszkańców Katalonii w wieku **25–39 lat** urodziła się poza Hiszpanią – to właśnie grupa, która najczęściej przyjeżdża tu do pracy.',
                        'Najliczniejsze grupy cudzoziemców to – według katalońskiego instytutu statystycznego Idescat – obywatele **Maroka** (ok. 253 tys.), **Kolumbii** (ok. 107 tys.) i **Włoch** (ok. 92 tys.).',
                        'Wstępne dane na początek 2026 roku mówią już o **ok. 1,58 mln osób z obcym obywatelstwem** – to prawie co piąty mieszkaniec regionu (część osób urodzonych za granicą ma już obywatelstwo hiszpańskie).',
                    ],
                    image: { src: beach, alt: 'Plaża Barceloneta i hotel W w Barcelonie', caption: 'Barcelona przyciąga ludzi z całego świata – także tysiące Polaków.' },
                },
                {
                    title: 'Nowa Polonia: młodsza, mobilna, wielojęzyczna',
                    p: [
                        'Polonia w Hiszpanii bardzo się zmieniła. Na posiedzeniach sejmowej komisji ds. łączności z Polakami za granicą podkreślano, że profil polskiej emigracji w Hiszpanii przesuwa się od typowo zarobkowej w stronę **młodszej i lepiej sytuowanej** – to specjaliści IT, pracownicy międzynarodowych firm, studenci programów wymiany, przedsiębiorcy, a także rodziny, które wybrały śródziemnomorski styl życia.',
                        'To widać także w naszym sztabie. Wolontariusze WOŚP Barcelona to programiści, nauczyciele, kucharze, graficy, lekarze, studenci i rodzice z dziećmi. Część z nas mieszka tu od kilkunastu lat, część przyjechała kilka miesięcy przed Finałem. Łączy nas jedno: chcemy pomagać i nie chcemy tracić kontaktu z Polską.',
                    ],
                },
                {
                    title: 'Gdzie szukać polskiej społeczności w Barcelonie?',
                    p: ['Jeśli dopiero się przeprowadziłeś, oto kilka miejsc, od których warto zacząć:'],
                    ul: [
                        '**Konsulat Generalny RP w Barcelonie** – Avinguda Diagonal 593–595. Obsługuje Katalonię, Wspólnotę Walencką, Baleary, Aragonię i Andorę. Wizyty umawia się przez system e-Konsulat.',
                        '**Polskie szkoły i zajęcia dla dzieci** – w Barcelonie i okolicach działają placówki prowadzące lekcje języka polskiego, historii i kultury.',
                        '**Grupy w mediach społecznościowych** – lokalne grupy Polaków w Barcelonie to kopalnia wiedzy o mieszkaniach, pracy, lekarzach i urzędach.',
                        '**Polskie sklepy i restauracje** – wielu naszych sponsorów to właśnie polskie biznesy w Barcelonie. Zajrzyj na stronę **Sponsorzy**, by je poznać.',
                        '**Sztab WOŚP Barcelona** – i oczywiście my! Co roku w styczniu organizujemy Finał, a przez cały rok mniejsze wydarzenia.',
                    ],
                },
                firms.pl,
                firmsOutro.pl,
                {
                    title: 'Finał WOŚP – nasz wspólny dzień',
                    p: [
                        'Dla Polaków za granicą Finał Wielkiej Orkiestry Świątecznej Pomocy to coś więcej niż zbiórka pieniędzy. To jeden dzień w roku, kiedy spotykamy się wszyscy razem – z dziećmi, przyjaciółmi z pracy, sąsiadami z Katalonii. Jemy pierogi, słuchamy polskiej muzyki, licytujemy, śmiejemy się i razem zapalamy Światełko do nieba.',
                        'Co ważne, na naszym Finale nigdy nie brakuje Katalończyków, Hiszpanów i obcokrajowców z całego świata. Dla wielu z nich to pierwsze zetknięcie z polską kulturą – i z ideą, że tysiące ludzi może co roku wspólnie kupić sprzęt medyczny dla szpitali. Nasze plakaty i materiały przygotowujemy w czterech językach: po polsku, katalońsku, hiszpańsku i angielsku.',
                    ],
                    image: IMG.barcelonaSkyline,
                },
                {
                    title: 'Dołącz do nas',
                    p: [
                        'Jeśli niedawno przeprowadziłeś się do Barcelony i szukasz polskiej społeczności – zapraszamy! Wolontariat w sztabie to świetny sposób, by poznać ludzi, poczuć się „u siebie” i zrobić coś naprawdę dobrego. Nie musisz mieć doświadczenia ani dużo wolnego czasu – czasem wystarczy kilka godzin w dniu Finału.',
                        'Napisz do nas przez stronę **Kontakt** albo na Facebooku lub Instagramie. Do zobaczenia!',
                    ],
                },
            ],
        },
        en: {
            title: 'One in four Catalonia residents was born abroad – and we are part of that story',
            excerpt: 'According to INE data, on 1 January 2025 more than 2 million people born outside Spain lived in Catalonia. Among them are Poles – the people behind WOŚP Barcelona. We look at the numbers and suggest where to find the Polish community.',
            sections: [
                {
                    highlight: { value: '2,028,315', label: 'people born abroad lived in Catalonia on 1 January 2025 – 24.98% of all residents' },
                    p: [
                        'In February 2025, Spain\'s National Statistics Institute (INE) published data widely discussed in the Catalan media: for the first time ever, almost **one in four Catalonia residents was born outside Spain**. The region has over 8 million inhabitants, and more than 2 million of them came from other countries – from Europe, Latin America, Africa and Asia.',
                        'For us, Poles living in Barcelona, these numbers are not abstract. Every day we pass neighbours speaking Arabic, Spanish with a Colombian accent, Italian or Ukrainian. Barcelona is one of the most international cities in Europe – and this is the city where our staff has been playing for years.',
                    ],
                },
                {
                    title: 'Catalonia in numbers',
                    p: ['A few facts that show the scale of change:'],
                    ul: [
                        '**2,028,315** – people born abroad living in Catalonia on 1 January 2025 (INE data).',
                        '**Almost half** of Catalonia\'s residents aged **25–39** were born outside Spain – the group most likely to move here for work.',
                        'According to the Catalan statistics institute Idescat, the largest foreign groups are citizens of **Morocco** (approx. 253,000), **Colombia** (approx. 107,000) and **Italy** (approx. 92,000).',
                        'Preliminary data for early 2026 show **around 1.58 million people with foreign citizenship** – almost one in five residents (some people born abroad already hold Spanish citizenship).',
                    ],
                    image: { src: beach, alt: 'Barceloneta beach and the W hotel in Barcelona', caption: 'Barcelona attracts people from all over the world – including thousands of Poles.' },
                },
                {
                    title: 'The new Polish diaspora: younger, mobile, multilingual',
                    p: [
                        'The Polish community in Spain has changed a lot. At sessions of the Polish parliament\'s committee for Poles abroad, it was noted that Polish emigration to Spain is shifting from mainly economic towards **younger and better-off** people – IT specialists, employees of international companies, exchange students, entrepreneurs, and families who chose a Mediterranean lifestyle.',
                        'You can see this in our staff too. WOŚP Barcelona volunteers are programmers, teachers, cooks, designers, doctors, students and parents with children. Some of us have lived here for over a decade, some arrived a few months before the Finale. What unites us: we want to help and we don\'t want to lose touch with Poland.',
                    ],
                },
                {
                    title: 'Where to find the Polish community in Barcelona?',
                    p: ['If you have just moved here, here are a few places to start:'],
                    ul: [
                        '**Consulate General of Poland in Barcelona** – Avinguda Diagonal 593–595. It serves Catalonia, the Valencian Community, the Balearic Islands, Aragon and Andorra. Appointments are booked via the e-Konsulat system.',
                        '**Polish schools and activities for children** – in and around Barcelona there are schools teaching Polish language, history and culture.',
                        '**Social media groups** – local groups of Poles in Barcelona are a goldmine of information on flats, jobs, doctors and paperwork.',
                        '**Polish shops and restaurants** – many of our sponsors are Polish businesses in Barcelona. Visit the **Sponsors** page to meet them.',
                        '**WOŚP Barcelona** – and of course us! Every January we organise the Finale, and smaller events throughout the year.',
                    ],
                },
                firms.en,
                firmsOutro.en,
                {
                    title: 'The WOŚP Finale – our shared day',
                    p: [
                        'For Poles abroad, the Great Orchestra of Christmas Charity Finale is more than a fundraiser. It is the one day a year when we all meet – with children, work friends and Catalan neighbours. We eat pierogi, listen to Polish music, bid at auctions, laugh, and light the Light to Heaven together.',
                        'Importantly, our Finale always welcomes Catalans, Spaniards and people from all over the world. For many of them it is their first encounter with Polish culture – and with the idea that thousands of people can buy medical equipment for hospitals together every year. We prepare our posters and materials in four languages: Polish, Catalan, Spanish and English.',
                    ],
                    image: IMG.barcelonaSkyline,
                },
                {
                    title: 'Join us',
                    p: [
                        'If you have recently moved to Barcelona and are looking for the Polish community – welcome! Volunteering with our staff is a great way to meet people, feel at home and do something truly good. You don\'t need experience or lots of free time – sometimes a few hours on Finale day is enough.',
                        'Write to us via the **Contact** page or on Facebook or Instagram. See you soon!',
                    ],
                },
            ],
        },
        es: {
            title: 'Uno de cada cuatro residentes en Cataluña nació en el extranjero, y nosotros formamos parte de esa historia',
            excerpt: 'Según datos del INE, a 1 de enero de 2025 vivían en Cataluña más de 2 millones de personas nacidas fuera de España. Entre ellas hay polacos, las personas que forman WOŚP Barcelona. Analizamos las cifras y te contamos dónde encontrar a la comunidad polaca.',
            sections: [
                {
                    highlight: { value: '2.028.315', label: 'personas nacidas en el extranjero vivían en Cataluña el 1 de enero de 2025: el 24,98 % de los residentes' },
                    p: [
                        'En febrero de 2025, el Instituto Nacional de Estadística (INE) publicó unos datos muy comentados en los medios catalanes: por primera vez, casi **uno de cada cuatro residentes en Cataluña nació fuera de España**. La comunidad supera los 8 millones de habitantes, y más de 2 millones llegaron de otros países: de Europa, América Latina, África y Asia.',
                        'Para nosotros, los polacos que vivimos en Barcelona, estas cifras no son abstractas. Cada día nos cruzamos con vecinos que hablan árabe, español con acento colombiano, italiano o ucraniano. Barcelona es hoy una de las ciudades más internacionales de Europa, y es la ciudad donde nuestro equipo toca desde hace años.',
                    ],
                },
                {
                    title: 'Cataluña en cifras',
                    p: ['Algunos datos que muestran la magnitud del cambio:'],
                    ul: [
                        '**2.028.315**: personas nacidas en el extranjero que vivían en Cataluña el 1 de enero de 2025 (datos del INE).',
                        '**Casi la mitad** de los residentes en Cataluña de **25 a 39 años** nació fuera de España: es el grupo que más suele llegar por trabajo.',
                        'Según el Idescat, los grupos extranjeros más numerosos son los ciudadanos de **Marruecos** (unos 253.000), **Colombia** (unos 107.000) e **Italia** (unos 92.000).',
                        'Los datos provisionales de principios de 2026 hablan ya de **unos 1,58 millones de personas con nacionalidad extranjera**, casi uno de cada cinco residentes (parte de los nacidos fuera ya tiene la nacionalidad española).',
                    ],
                    image: { src: beach, alt: 'Playa de la Barceloneta y el hotel W de Barcelona', caption: 'Barcelona atrae a personas de todo el mundo, también a miles de polacos.' },
                },
                {
                    title: 'La nueva comunidad polaca: más joven, móvil y multilingüe',
                    p: [
                        'La comunidad polaca en España ha cambiado mucho. En la comisión del Parlamento polaco dedicada a los polacos en el extranjero se señaló que la emigración polaca a España pasa de ser sobre todo económica a estar formada por personas **más jóvenes y con mejor posición**: especialistas en informática, empleados de empresas internacionales, estudiantes de intercambio, emprendedores y familias que eligieron el estilo de vida mediterráneo.',
                        'Lo vemos también en nuestro equipo. Los voluntarios de WOŚP Barcelona son programadores, profesores, cocineros, diseñadores, médicos, estudiantes y padres con niños. Algunos llevamos aquí más de diez años; otros llegaron unos meses antes del Final. Nos une lo mismo: queremos ayudar y no queremos perder el contacto con Polonia.',
                    ],
                },
                {
                    title: '¿Dónde encontrar a la comunidad polaca en Barcelona?',
                    p: ['Si acabas de mudarte, estos son algunos puntos de partida:'],
                    ul: [
                        '**Consulado General de Polonia en Barcelona**: Avinguda Diagonal 593-595. Atiende Cataluña, la Comunidad Valenciana, Baleares, Aragón y Andorra. Las citas se piden por el sistema e-Konsulat.',
                        '**Escuelas polacas y actividades infantiles**: en Barcelona y alrededores hay centros que enseñan lengua, historia y cultura polacas.',
                        '**Grupos en redes sociales**: los grupos locales de polacos en Barcelona son una mina de información sobre pisos, trabajo, médicos y trámites.',
                        '**Tiendas y restaurantes polacos**: muchos de nuestros patrocinadores son negocios polacos de Barcelona. Visita la página de **Patrocinadores** para conocerlos.',
                        '**WOŚP Barcelona**: ¡y nosotros, claro! Cada enero organizamos el Final y, durante el año, eventos más pequeños.',
                    ],
                },
                firms.es,
                firmsOutro.es,
                {
                    title: 'El Final de WOŚP, nuestro día en común',
                    p: [
                        'Para los polacos en el extranjero, el Final de la Gran Orquesta de la Caridad Navideña es más que una recaudación. Es el día del año en que nos juntamos todos: con niños, compañeros de trabajo y vecinos catalanes. Comemos pierogi, escuchamos música polaca, pujamos en subastas, reímos y encendemos juntos la Luz al cielo.',
                        'Y algo importante: en nuestro Final nunca faltan catalanes, españoles y personas de todo el mundo. Para muchos es su primer contacto con la cultura polaca y con la idea de que miles de personas pueden comprar juntas, cada año, equipos médicos para hospitales. Preparamos carteles y materiales en cuatro idiomas: polaco, catalán, castellano e inglés.',
                    ],
                    image: IMG.barcelonaSkyline,
                },
                {
                    title: 'Únete a nosotros',
                    p: [
                        'Si te has mudado hace poco a Barcelona y buscas la comunidad polaca, ¡bienvenido! El voluntariado es una forma estupenda de conocer gente, sentirte como en casa y hacer algo realmente bueno. No necesitas experiencia ni mucho tiempo libre: a veces bastan unas horas el día del Final.',
                        'Escríbenos desde la página de **Contacto** o por Facebook o Instagram. ¡Hasta pronto!',
                    ],
                },
            ],
        },
        ca: {
            title: 'Un de cada quatre residents a Catalunya va néixer a l\'estranger, i nosaltres formem part d\'aquesta història',
            excerpt: 'Segons dades de l\'INE, a 1 de gener de 2025 vivien a Catalunya més de 2 milions de persones nascudes fora d\'Espanya. Entre elles hi ha polonesos, les persones que formen WOŚP Barcelona. Analitzem les xifres i t\'expliquem on trobar la comunitat polonesa.',
            sections: [
                {
                    highlight: { value: '2.028.315', label: 'persones nascudes a l\'estranger vivien a Catalunya l\'1 de gener de 2025: el 24,98 % dels residents' },
                    p: [
                        'El febrer de 2025, l\'Institut Nacional d\'Estadística (INE) va publicar unes dades molt comentades als mitjans catalans: per primera vegada, gairebé **un de cada quatre residents a Catalunya va néixer fora d\'Espanya**. Catalunya supera els 8 milions d\'habitants, i més de 2 milions van arribar d\'altres països: d\'Europa, l\'Amèrica Llatina, l\'Àfrica i l\'Àsia.',
                        'Per a nosaltres, els polonesos que vivim a Barcelona, aquestes xifres no són abstractes. Cada dia ens creuem amb veïns que parlen àrab, castellà amb accent colombià, italià o ucraïnès. Barcelona és avui una de les ciutats més internacionals d\'Europa, i és la ciutat on el nostre equip toca des de fa anys.',
                    ],
                },
                {
                    title: 'Catalunya en xifres',
                    p: ['Algunes dades que mostren la magnitud del canvi:'],
                    ul: [
                        '**2.028.315**: persones nascudes a l\'estranger que vivien a Catalunya l\'1 de gener de 2025 (dades de l\'INE).',
                        '**Gairebé la meitat** dels residents a Catalunya de **25 a 39 anys** va néixer fora d\'Espanya: és el grup que més sovint arriba per feina.',
                        'Segons l\'Idescat, els grups estrangers més nombrosos són els ciutadans del **Marroc** (uns 253.000), **Colòmbia** (uns 107.000) i **Itàlia** (uns 92.000).',
                        'Les dades provisionals de principis de 2026 parlen ja d\'**uns 1,58 milions de persones amb nacionalitat estrangera**, gairebé un de cada cinc residents (part dels nascuts fora ja té la nacionalitat espanyola).',
                    ],
                    image: { src: beach, alt: 'Platja de la Barceloneta i l\'hotel W de Barcelona', caption: 'Barcelona atrau persones de tot el món, també milers de polonesos.' },
                },
                {
                    title: 'La nova comunitat polonesa: més jove, mòbil i multilingüe',
                    p: [
                        'La comunitat polonesa a Espanya ha canviat molt. A la comissió del Parlament polonès dedicada als polonesos a l\'estranger es va destacar que l\'emigració polonesa a Espanya passa de ser sobretot econòmica a estar formada per persones **més joves i amb millor posició**: especialistes en informàtica, treballadors d\'empreses internacionals, estudiants d\'intercanvi, emprenedors i famílies que han triat l\'estil de vida mediterrani.',
                        'Ho veiem també al nostre equip. Els voluntaris de WOŚP Barcelona són programadors, mestres, cuiners, dissenyadors, metges, estudiants i pares amb fills. Alguns fa més de deu anys que vivim aquí; altres van arribar uns mesos abans del Final. Ens uneix el mateix: volem ajudar i no volem perdre el contacte amb Polònia.',
                    ],
                },
                {
                    title: 'On trobar la comunitat polonesa a Barcelona?',
                    p: ['Si t\'acabes de traslladar, aquests són alguns punts de partida:'],
                    ul: [
                        '**Consolat General de Polònia a Barcelona**: Avinguda Diagonal 593-595. Atén Catalunya, el País Valencià, les Balears, l\'Aragó i Andorra. Les cites es demanen pel sistema e-Konsulat.',
                        '**Escoles poloneses i activitats per a infants**: a Barcelona i rodalies hi ha centres que ensenyen llengua, història i cultura poloneses.',
                        '**Grups a les xarxes socials**: els grups locals de polonesos a Barcelona són una mina d\'informació sobre pisos, feina, metges i tràmits.',
                        '**Botigues i restaurants polonesos**: molts dels nostres patrocinadors són negocis polonesos de Barcelona. Visita la pàgina de **Patrocinadors** per conèixer-los.',
                        '**WOŚP Barcelona**: i nosaltres, és clar! Cada gener organitzem el Final i, durant l\'any, esdeveniments més petits.',
                    ],
                },
                firms.ca,
                firmsOutro.ca,
                {
                    title: 'El Final de WOŚP, el nostre dia en comú',
                    p: [
                        'Per als polonesos a l\'estranger, el Final de la Gran Orquestra de la Caritat Nadalenca és més que una recaptació. És el dia de l\'any en què ens trobem tots: amb infants, companys de feina i veïns catalans. Mengem pierogi, escoltem música polonesa, fem ofertes a les subhastes, riem i encenem junts la Llum al cel.',
                        'I una cosa important: al nostre Final mai no hi falten catalans, espanyols i persones de tot el món. Per a molts és el primer contacte amb la cultura polonesa i amb la idea que milers de persones poden comprar juntes, cada any, equips mèdics per a hospitals. Preparem cartells i materials en quatre idiomes: polonès, català, castellà i anglès.',
                    ],
                    image: IMG.barcelonaSkyline,
                },
                {
                    title: 'Uneix-te a nosaltres',
                    p: [
                        'Si fa poc que t\'has traslladat a Barcelona i busques la comunitat polonesa, benvingut! El voluntariat és una manera fantàstica de conèixer gent, sentir-te com a casa i fer alguna cosa realment bona. No cal experiència ni gaire temps lliure: de vegades n\'hi ha prou amb unes hores el dia del Final.',
                        'Escriu-nos des de la pàgina de **Contacte** o per Facebook o Instagram. Fins aviat!',
                    ],
                },
            ],
        },
    },
};
