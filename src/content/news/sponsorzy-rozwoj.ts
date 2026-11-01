import type { Locale, NewsCard, NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const stand = '/images/34-final/1839e07d-8956-4617-b3b5-02805c21b81d.jpg';
const finale = '/images/34-final/5fe11b00-9140-49cb-9fea-4a179aea23c9.jpg';

type CardText = { kind: string; text: string };
type FirmKey = 'delicias' | 'krakoviak' | 'wawel' | 'bona' | 'polcat' | 'arttur' | 'worldClass' | 'kosmo';

const FIRMS: Record<FirmKey, { name: string; logo: string; url: string; map?: boolean }> = {
    delicias: { name: 'Delicias by Bea', logo: '/images/sponsors/delicias_by_bea_2.avif', url: 'https://www.deliciasbybea.com' },
    krakoviak: { name: 'Krakoviak', logo: '/images/sponsors/krakoviak.png', url: 'https://maps.app.goo.gl/kWQt3NZxNPzwSihj8', map: true },
    wawel: { name: 'Wawel RestoBar', logo: '/images/sponsors/Wawel.png', url: 'https://maps.app.goo.gl/ALp5fnzBVBzRfsR68', map: true },
    bona: { name: 'Bona Barcelona', logo: '/images/sponsors/logo wektory-krzywe kolor DO DRUKU-1.png', url: 'https://bonabarcelona.eu' },
    polcat: { name: 'PolCat', logo: '/images/sponsors/polcat.jpg', url: 'https://polcat.net' },
    arttur: { name: 'ART-TUR', logo: '/images/sponsors/art-tur.jpg', url: 'https://www.art-tur.pl' },
    worldClass: { name: 'World Class Barcelona', logo: '/images/sponsors/world class barcelona.png', url: 'https://worldclassbcn.com/en/' },
    kosmo: { name: 'Kosmo HisPLano', logo: '/images/sponsors/kosmo-his-plano.png', url: 'https://kosmohisplano.com' },
};

const mapLabel: Record<Locale, string> = { pl: 'Mapa', en: 'Map', es: 'Mapa', ca: 'Mapa' };

function cards(locale: Locale, keys: FirmKey[], t: Partial<Record<FirmKey, CardText>>): NewsCard[] {
    return keys.map((k) => ({
        name: FIRMS[k].name,
        logo: FIRMS[k].logo,
        url: FIRMS[k].url,
        linkLabel: FIRMS[k].map ? mapLabel[locale] : undefined,
        ...(t[k] as CardText),
    }));
}

export const sponsorzyRozwoj: NewsSource = {
    slug: 'polskie-firmy-w-barcelonie-jak-rozwijaja-sie-nasi-sponsorzy',
    date: '2026-10-15',
    coverImage: stand,
    tags: ['Sponsorzy', 'PolskieFirmy', 'Barcelona', 'Polonia', 'WOŚPBarcelona'],
    sources: [
        { label: 'Delicias by Bea', url: 'https://www.deliciasbybea.com' },
        { label: 'World Class BCN', url: 'https://worldclassbcn.com/en/' },
        { label: 'Bona Barcelona', url: 'https://bonabarcelona.eu' },
        { label: 'PolCat', url: 'https://polcat.net' },
        { label: 'ART-TUR', url: 'https://www.art-tur.pl' },
        { label: 'Kosmo HisPLano', url: 'https://kosmohisplano.com' },
        { label: 'AulaNews (UAO CEU) – polska kuchnia w Barcelonie', url: 'https://aulanews.uao.es/2025/03/28/exploring-polish-cuisine-in-barcelona/' },
    ],
    content: {
        pl: {
            title: 'Polskie firmy w Barcelonie: jak rozwijają się nasi sponsorzy',
            excerpt: 'Nowa polska cukiernia w Les Corts, szkoła hiszpańskiego z certyfikatem Instytutu Cervantesa, biura podróży z polskimi przewodnikami i przewoźnik, który od 1993 roku łączy Polskę z Hiszpanią. Sprawdziliśmy, co słychać u firm i organizacji, które grają z nami w Finale WOŚP.',
            sections: [
                {
                    p: [
                        'Bez sponsorów i partnerów nie byłoby Finału WOŚP w Barcelonie. To oni dają nam jedzenie na stoiska, przedmioty na licytacje, transport, miejsce, promocję – i po prostu wsparcie. Wiele z tych firm prowadzą Polacy, którzy zbudowali w Katalonii własne biznesy.',
                        'Postanowiliśmy sprawdzić, jak radzą sobie nasi sponsorzy w 2026 roku – roku rekordowego ruchu turystycznego, ale też rosnących kosztów. Oto, czego się dowiedzieliśmy.',
                    ],
                    image: { src: finale, alt: 'Uczestnicy 34. Finału WOŚP w Barcelonie', caption: 'Finał WOŚP w Barcelonie to także zasługa naszych sponsorów i partnerów.' },
                },
                {
                    title: 'Gastronomia: polskie smaki w sercu Barcelony',
                    p: [
                        'Największa wiadomość roku: **Delicias by Bea** otworzyła **własną cukiernię**! Bea Michalak, cukierniczka pochodząca z Namysłowa, która szlifowała warsztat w Berlinie, prowadzi markę od 2023 roku. W **marcu 2026 roku** otworzyła cukiernię z pracownią w dzielnicy **Les Corts** (Travessera de les Corts 303) – razem z nową, odświeżoną stroną internetową. Wszystko powstaje na miejscu, bez półproduktów – z naturalnego masła i nabiału, sezonowych owoców od lokalnych dostawców i jaj z wolnego wybiegu.',
                        'W ofercie są klasyki – **drożdżówki, sernik, szarlotka** – a przed świętami także rolada makowa, piernik staropolski, orzechowiec i sernik krakowski. Bea przygotowuje torty na wesela, komunie i urodziny oraz słodkie stoły na wydarzenia firmowe. Strona cukierni działa w czterech językach – po katalońsku, hiszpańsku, polsku i angielsku – co dobrze pokazuje, jak zróżnicowana jest jej klientela.',
                    ],
                    cards: cards('pl', ['delicias', 'krakoviak', 'wawel'], {
                        delicias: { kind: 'Cukiernia · sponsor', text: 'Własna cukiernia w Les Corts od marca 2026. Polskie wypieki, torty okolicznościowe i słodkie stoły na wydarzenia.' },
                        krakoviak: { kind: 'Polski sklep · sponsor', text: 'Polskie produkty w pobliżu Sagrady Família – pierogi, wędliny, ogórki kiszone, twaróg. Oprócz zakupów można tu też zjeść coś na szybko.' },
                        wawel: { kind: 'Polska restauracja · partner', text: 'Carrer de Sicília 330, niedaleko Sagrady Família. Gołąbki, bigos, placki ziemniaczane, pierogi i piwo Wawel IPA.' },
                    }),
                },
                {
                    p: [
                        'Polska kuchnia w Barcelonie przyciąga nie tylko Polaków. W 2025 roku studenci uniwersytetu UAO CEU opisali polskie lokale w mieście w artykule „Polish Food in Barcelona”. **Wawel** pochwalili za gołąbki, bigos i hojne porcje, a w tekście znalazła się nawet anegdota, że pierogi z Wawelu smakowały Robertowi Lewandowskiemu. **Krakowiak** w pobliżu Sagrady Família polecili jako miejsce, gdzie kupisz kiełbasę, ogórki i mrożone pierogi, a także zjesz coś na wynos.',
                    ],
                    image: { src: stand, alt: 'Stoisko z polskim jedzeniem na Finale WOŚP', caption: 'Polskie przysmaki na stoisku podczas 34. Finału w Barcelonie.' },
                },
                {
                    title: 'Turystyka i transport: Katalonia po polsku',
                    p: [
                        'Rok 2026 to dla barcelońskiej turystyki rok wyjątkowy: start Tour de France, wizyta papieża Leona XIV, ukończenie Wieży Jezusa w Sagradzie Família i stulecie śmierci Gaudíego. Korzystają na tym także polskie biura podróży.',
                    ],
                    cards: cards('pl', ['bona', 'polcat', 'arttur'], {
                        bona: { kind: 'Biuro podróży · sponsor', text: 'Licencjonowane biuro w Katalonii. Polscy przewodnicy, małe grupy, Montserrat i Tibidabo, Costa Brava, rzymska Tarragona, Andora („Iberyjskie Zakopane”) i warsztaty cava.' },
                        polcat: { kind: 'Biuro podróży · sponsor', text: 'Od prawie 20 lat w Katalonii, biuro w Canet de Mar. Wycieczki z polskimi przewodnikami po Barcelonie, Gironie i Figueres oraz Costa Brava. Organizuje też wyjazdy szkolne, pielgrzymki i wyjazdy integracyjne.' },
                        arttur: { kind: 'Przewoźnik · sponsor', text: 'Od 1993 roku przewozi osoby i paczki na trasach Polska–Hiszpania i Polska–Francja. Wyjazdy z Lublina w każdy czwartek.' },
                    }),
                },
                {
                    p: [
                        'Ciekawe jest to, jak różne są te modele biznesowe. **Bona Barcelona** stawia na spersonalizowane wyjazdy premium i małe grupy, z transferem w cenie. **PolCat** od blisko dwóch dekad organizuje zarówno wycieczki fakultatywne dla turystów, jak i wyjazdy dla szkół i grup. **ART-TUR** z Lublina od ponad 30 lat dowozi ludzi i paczki – to dla wielu rodzin w Katalonii sposób na przesłanie słoików od mamy albo prezentów na święta.',
                    ],
                    image: withCaption(IMG.montserrat, 'Montserrat – jedna z najpopularniejszych wycieczek z Barcelony.'),
                },
                {
                    title: 'Edukacja: od hiszpańskiego dla expatów po polski dla dzieci',
                    cards: cards('pl', ['worldClass', 'kosmo'], {
                        worldClass: { kind: 'Szkoła hiszpańskiego · partner', text: 'Szkoła akredytowana przez Instytut Cervantesa, dwie lokalizacje w Barcelonie. Kursy od A1 do C2, przygotowanie do DELE, kursy z wizą studencką na 6, 9 lub 12 miesięcy oraz kursy dla Erasmusa i firm.' },
                        kosmo: { kind: 'Stowarzyszenie edukacyjne · współorganizator', text: 'Działa od 2010 roku. Bobasowo (0–2 lata), MiniPL (2,5–4 lata), warsztaty czytania i pisania po polsku (4,5–7 lat), półkolonie oraz korepetycje z polskiego i hiszpańskiego online.' },
                    }),
                },
                {
                    p: [
                        '**World Class Barcelona** to dziś jedna z rozpoznawalnych szkół hiszpańskiego w mieście. Szkoła ma **akredytację Instytutu Cervantesa** i dwie lokalizacje: w Ciutat Vella (Carrer del Bisbe Laguarda 4) i w Eixample. Na społeczność „World Class mates” składa się ponad 900 kursantów. Codziennie, od poniedziałku do niedzieli, szkoła organizuje zajęcia: siatkówkę plażową, paddle surfing o wschodzie słońca, wycieczki, warsztaty winiarskie czy wieczory z paellą. Dla wielu nowych mieszkańców Barcelony, także Polaków, to pierwszy krok do życia w mieście.',
                        '**Kosmo HisPLano** od ponad 15 lat dba o to, by dzieci z polskich rodzin w Barcelonie nie traciły kontaktu z językiem i kulturą. Programy dopasowane do wieku, od niemowląt po pierwszoklasistów, pomagają rodzinom dwujęzycznym wychowywać dzieci po polsku i po hiszpańsku. Stowarzyszenie współorganizuje z nami Finał WOŚP w Barcelonie.',
                    ],
                },
                {
                    title: 'Co łączy naszych sponsorów?',
                    ul: [
                        '**Wielojęzyczność** – obsługują klientów po polsku, hiszpańsku, katalońsku i angielsku i nie ograniczają się do Polonii.',
                        '**Jakość i rzemiosło** – od wypieków bez półproduktów po akredytowane nauczanie.',
                        '**Zakorzenienie w Barcelonie** – część z nich działa tu od kilkunastu lat i zna miasto od podszewki.',
                        '**Zaangażowanie społeczne** – wspierają nie tylko WOŚP, ale całą polską społeczność w Katalonii.',
                    ],
                    p: [
                        'Nie jest im łatwo: rosnące czynsze lokali, wyższa płaca minimalna i koszty energii to codzienność małych firm w Barcelonie. Tym bardziej doceniamy, że co roku znajdują czas i środki, by grać z Orkiestrą.',
                    ],
                },
                {
                    title: 'Jak możesz ich wspierać?',
                    ul: [
                        'Zamów tort u Bei, zrób zakupy w Krakoviaku, zjedz pierogi w Wawelu.',
                        'Gdy odwiedzi Cię rodzina, poleć im wycieczkę z Bona Barcelona albo PolCat.',
                        'Jeśli zaczynasz naukę hiszpańskiego, sprawdź World Class Barcelona. Jeśli masz małe dzieci, sprawdź zajęcia Kosmo HisPLano.',
                        'Paczkę do Polski wyślij z ART-TUR.',
                        'Zostawiaj im opinie w internecie i polecaj znajomym. Dla małej firmy to bezcenne.',
                    ],
                },
                {
                    p: [
                        'Prowadzisz własną firmę w Barcelonie i chcesz dołączyć do tego grona? Lista sponsorów 35. Finału jest jeszcze pusta, a to wyjątkowa okazja, by pokazać się polskiej i międzynarodowej społeczności w mieście.',
                    ],
                    cta: { label: 'Zostań sponsorem 35. Finału', href: '/sponsors/35-final' },
                },
            ],
        },
        en: {
            title: 'Polish businesses in Barcelona: how our sponsors are growing',
            excerpt: 'A new Polish patisserie in Les Corts, a Spanish school certified by the Instituto Cervantes, travel agencies with Polish guides and a carrier that has linked Poland and Spain since 1993. We checked in on the businesses and organisations that play with us at the WOŚP Finale.',
            sections: [
                {
                    p: [
                        'Without sponsors and partners there would be no WOŚP Finale in Barcelona. They give us food for the stands, auction items, transport, venues, promotion – and simply support. Many of these businesses are run by Poles who have built their own companies in Catalonia.',
                        'We decided to check how our sponsors are doing in 2026 – a year of record tourism, but also rising costs. Here is what we found.',
                    ],
                    image: { src: finale, alt: 'Participants of the 34th WOŚP Finale in Barcelona', caption: 'The WOŚP Finale in Barcelona is also thanks to our sponsors and partners.' },
                },
                {
                    title: 'Food: Polish flavours in the heart of Barcelona',
                    p: [
                        'The biggest news of the year: **Delicias by Bea** has opened **its own patisserie**! Bea Michalak, a confectioner from Namysłów who honed her craft in Berlin, has run the brand since 2023. In **March 2026** she opened a patisserie with its own workshop in **Les Corts** (Travessera de les Corts 303) – along with a new, refreshed website. Everything is made on site with no semi-finished products – natural butter and dairy, seasonal fruit from local suppliers and free-range eggs.',
                        'The range includes classics – **sweet yeast buns (drożdżówki), sernik cheesecake and szarlotka apple cake** – and before Christmas also poppy-seed roll, old-Polish gingerbread, walnut cake and Kraków-style cheesecake. Bea makes cakes for weddings, communions and birthdays and dessert tables for corporate events. The bakery\'s website is in four languages – Catalan, Spanish, Polish and English – a sign of how diverse her customers are.',
                    ],
                    cards: cards('en', ['delicias', 'krakoviak', 'wawel'], {
                        delicias: { kind: 'Patisserie · sponsor', text: 'Own patisserie in Les Corts since March 2026. Polish baking, celebration cakes and dessert tables for events.' },
                        krakoviak: { kind: 'Polish shop · sponsor', text: 'Polish products near the Sagrada Família – pierogi, cold cuts, pickles, twaróg – plus quick meals to go.' },
                        wawel: { kind: 'Polish restaurant · partner', text: 'Carrer de Sicília 330, near the Sagrada Família. Gołąbki, bigos, potato pancakes, pierogi and Wawel IPA beer.' },
                    }),
                },
                {
                    p: ['Polish cuisine in Barcelona attracts more than just Poles. In 2025, students from UAO CEU university described Polish places in the city in an article titled "Polish Food in Barcelona". They praised **Wawel** for its gołąbki, bigos and generous portions – the article even mentions that Robert Lewandowski enjoyed its pierogi – and recommended **Krakowiak** near the Sagrada Família for sausage, pickles and frozen pierogi, as well as a quick meal to take away.'],
                    image: { src: stand, alt: 'A Polish food stand at the WOŚP Finale', caption: 'Polish treats at a stand during the 34th Finale in Barcelona.' },
                },
                {
                    title: 'Tourism and transport: Catalonia in Polish',
                    p: ['2026 is an exceptional year for Barcelona tourism: the Tour de France start, the visit of Pope Leo XIV, the completion of the Tower of Jesus at the Sagrada Família and the centenary of Gaudí\'s death. Polish travel agencies benefit too.'],
                    cards: cards('en', ['bona', 'polcat', 'arttur'], {
                        bona: { kind: 'Travel agency · sponsor', text: 'A licensed agency in Catalonia. Polish guides, small groups, Montserrat and Tibidabo, the Costa Brava, Roman Tarragona, Andorra and cava workshops.' },
                        polcat: { kind: 'Travel agency · sponsor', text: 'Almost 20 years in Catalonia, with an office in Canet de Mar. Tours with Polish guides of Barcelona, Girona and Figueres, and the Costa Brava. It also runs school trips, pilgrimages and team-building trips.' },
                        arttur: { kind: 'Carrier · sponsor', text: 'Since 1993, carrying passengers and parcels between Poland and Spain and Poland and France. Departures from Lublin every Thursday.' },
                    }),
                },
                {
                    p: ['It is interesting how different these business models are. **Bona Barcelona** focuses on personalised premium trips and small groups, with transfers included. **PolCat** has spent almost two decades running both optional excursions for tourists and trips for schools and groups. **ART-TUR** from Lublin has been carrying people and parcels for over 30 years – for many families in Catalonia, it is how jars of homemade food from mum or Christmas presents travel.'],
                    image: withCaption(IMG.montserrat, 'Montserrat – one of the most popular day trips from Barcelona.'),
                },
                {
                    title: 'Education: from Spanish for expats to Polish for kids',
                    cards: cards('en', ['worldClass', 'kosmo'], {
                        worldClass: { kind: 'Spanish school · partner', text: 'Accredited by the Instituto Cervantes, two locations in Barcelona. Courses from A1 to C2, DELE preparation, 6/9/12-month student-visa courses, Erasmus and company courses.' },
                        kosmo: { kind: 'Educational association · co-organiser', text: 'Active since 2010. Bobasowo (0–2 years), MiniPL (2.5–4), Polish reading and writing workshops (4.5–7), day camps and online Polish and Spanish tutoring.' },
                    }),
                },
                {
                    p: [
                        '**World Class Barcelona** is now one of the city\'s well-known Spanish schools. It is **accredited by the Instituto Cervantes** and has two locations: in Ciutat Vella (Carrer del Bisbe Laguarda 4) and in the Eixample. Its "World Class mates" community counts over 900 students. The school runs activities every day, Monday to Sunday: beach volleyball, sunrise paddle surfing, day trips, wine workshops and paella nights. For many newcomers to Barcelona, including Poles, it is the first step into city life.',
                        '**Kosmo HisPLano** has spent over 15 years helping children from Polish families in Barcelona stay connected to the language and culture. Age-tailored programmes, from babies to first-graders, help bilingual families raise children in both Polish and Spanish. The association co-organises the WOŚP Finale in Barcelona with us.',
                    ],
                },
                {
                    title: 'What do our sponsors have in common?',
                    ul: [
                        '**Multilingualism** – they serve customers in Polish, Spanish, Catalan and English, well beyond the Polish community.',
                        '**Quality and craft** – from baking without semi-finished products to accredited teaching.',
                        '**Roots in Barcelona** – some have been here for over a decade and know the city inside out.',
                        '**Social commitment** – they support not only WOŚP but the whole Polish community in Catalonia.',
                    ],
                    p: ['It is not easy for them: rising commercial rents, a higher minimum wage and energy costs are everyday reality for small businesses in Barcelona. That is why we appreciate all the more that every year they find time and resources to play with the Orchestra.'],
                },
                {
                    title: 'How can you support them?',
                    ul: [
                        'Order a cake from Bea, shop at Krakoviak, eat pierogi at Wawel.',
                        'When family visits, recommend a tour with Bona Barcelona or PolCat.',
                        'Starting Spanish? Check out World Class Barcelona. Have small kids? Look at Kosmo HisPLano\'s activities.',
                        'Send a parcel to Poland with ART-TUR.',
                        'Leave them online reviews and recommend them to friends – for a small business it is priceless.',
                    ],
                },
                {
                    p: ['Do you run your own business in Barcelona and want to join them? The 35th Finale sponsor list is still empty – a unique chance to reach the Polish and international community in the city.'],
                    cta: { label: 'Become a sponsor of the 35th Finale', href: '/sponsors/35-final' },
                },
            ],
        },
        es: {
            title: 'Empresas polacas en Barcelona: así crecen nuestros patrocinadores',
            excerpt: 'Una nueva pastelería polaca en Les Corts, una escuela de español acreditada por el Instituto Cervantes, agencias de viajes con guías polacos y un transportista que une Polonia y España desde 1993. Hemos visto cómo les va a las empresas y entidades que tocan con nosotros en el Final de WOŚP.',
            sections: [
                {
                    p: [
                        'Sin patrocinadores y colaboradores no habría Final de WOŚP en Barcelona. Nos dan comida para los puestos, objetos para subastar, transporte, espacios, difusión y, sencillamente, apoyo. Muchas de estas empresas las llevan polacos que han creado su propio negocio en Cataluña.',
                        'Hemos querido saber cómo les va a nuestros patrocinadores en 2026, un año de turismo récord pero también de costes al alza. Esto es lo que hemos descubierto.',
                    ],
                    image: { src: finale, alt: 'Participantes del 34.º Final de WOŚP en Barcelona', caption: 'El Final de WOŚP en Barcelona también es mérito de nuestros patrocinadores y colaboradores.' },
                },
                {
                    title: 'Gastronomía: sabores polacos en el corazón de Barcelona',
                    p: [
                        'La gran noticia del año: **Delicias by Bea** ha abierto **su propia pastelería**. Bea Michalak, pastelera de Namysłów que perfeccionó su oficio en Berlín, lleva la marca desde 2023. En **marzo de 2026** abrió su pastelería con obrador en **Les Corts** (Travessera de les Corts 303), junto con una web renovada. Todo se elabora allí mismo, sin productos semielaborados: mantequilla y lácteos naturales, fruta de temporada de proveedores locales y huevos camperos.',
                        'En la carta hay clásicos (**bollos dulces drożdżówki, tarta de queso sernik y tarta de manzana szarlotka**) y, antes de Navidad, rollo de amapola, pan de jengibre a la antigua usanza, pastel de nueces y tarta de queso de Cracovia. Bea prepara tartas para bodas, comuniones y cumpleaños, y mesas dulces para eventos de empresa. La web del obrador está en cuatro idiomas (catalán, castellano, polaco e inglés), muestra de lo diversa que es su clientela.',
                    ],
                    cards: cards('es', ['delicias', 'krakoviak', 'wawel'], {
                        delicias: { kind: 'Pastelería · patrocinador', text: 'Pastelería propia en Les Corts desde marzo de 2026. Repostería polaca, tartas para celebraciones y mesas dulces para eventos.' },
                        krakoviak: { kind: 'Tienda polaca · patrocinador', text: 'Productos polacos cerca de la Sagrada Família: pierogi, embutidos, pepinillos, requesón, y también comida para llevar.' },
                        wawel: { kind: 'Restaurante polaco · colaborador', text: 'Carrer de Sicília 330, cerca de la Sagrada Família. Gołąbki, bigos, tortitas de patata, pierogi y cerveza Wawel IPA.' },
                    }),
                },
                {
                    p: ['La cocina polaca en Barcelona no atrae solo a polacos. En 2025, estudiantes de la universidad UAO CEU describieron los locales polacos de la ciudad en el artículo «Polish Food in Barcelona». Elogiaron el **Wawel** por sus gołąbki, su bigos y sus raciones generosas (el artículo cuenta incluso que a Robert Lewandowski le gustaron sus pierogi) y recomendaron el **Krakowiak**, cerca de la Sagrada Família, para comprar embutido, pepinillos y pierogi congelados o tomar algo para llevar.'],
                    image: { src: stand, alt: 'Puesto de comida polaca en el Final de WOŚP', caption: 'Delicias polacas en un puesto durante el 34.º Final en Barcelona.' },
                },
                {
                    title: 'Turismo y transporte: Cataluña en polaco',
                    p: ['2026 es un año excepcional para el turismo en Barcelona: la salida del Tour de Francia, la visita del papa León XIV, la finalización de la Torre de Jesucristo de la Sagrada Família y el centenario de la muerte de Gaudí. Las agencias de viajes polacas también lo notan.'],
                    cards: cards('es', ['bona', 'polcat', 'arttur'], {
                        bona: { kind: 'Agencia de viajes · patrocinador', text: 'Agencia con licencia en Cataluña. Guías polacos, grupos pequeños, Montserrat y el Tibidabo, la Costa Brava, la Tarragona romana, Andorra y talleres de cava.' },
                        polcat: { kind: 'Agencia de viajes · patrocinador', text: 'Casi 20 años en Cataluña, con oficina en Canet de Mar. Excursiones con guías polacos por Barcelona, Girona y Figueres y la Costa Brava. También organiza viajes escolares, peregrinaciones y viajes de empresa.' },
                        arttur: { kind: 'Transportista · patrocinador', text: 'Desde 1993 transporta personas y paquetes entre Polonia y España y entre Polonia y Francia. Salidas desde Lublin todos los jueves.' },
                    }),
                },
                {
                    p: ['Es curioso lo distintos que son estos modelos de negocio. **Bona Barcelona** apuesta por viajes personalizados premium y grupos pequeños, con traslados incluidos. **PolCat** lleva casi dos décadas organizando tanto excursiones para turistas como viajes para escuelas y grupos. **ART-TUR**, de Lublin, lleva más de 30 años transportando personas y paquetes: para muchas familias en Cataluña es la forma de recibir los tarros de comida casera de mamá o los regalos de Navidad.'],
                    image: withCaption(IMG.montserrat, 'Montserrat, una de las excursiones más populares desde Barcelona.'),
                },
                {
                    title: 'Educación: del español para expats al polaco para niños',
                    cards: cards('es', ['worldClass', 'kosmo'], {
                        worldClass: { kind: 'Escuela de español · colaborador', text: 'Acreditada por el Instituto Cervantes, dos sedes en Barcelona. Cursos de A1 a C2, preparación del DELE, cursos con visado de estudiante de 6, 9 o 12 meses, cursos Erasmus y para empresas.' },
                        kosmo: { kind: 'Asociación educativa · coorganizador', text: 'En activo desde 2010. Bobasowo (0-2 años), MiniPL (2,5-4), talleres de lectura y escritura en polaco (4,5-7), campamentos de día y clases online de polaco y español.' },
                    }),
                },
                {
                    p: [
                        '**World Class Barcelona** es hoy una de las escuelas de español conocidas de la ciudad. Está **acreditada por el Instituto Cervantes** y tiene dos sedes: en Ciutat Vella (Carrer del Bisbe Laguarda 4) y en el Eixample. Su comunidad de «World Class mates» suma más de 900 alumnos. La escuela organiza actividades cada día, de lunes a domingo: vóley playa, paddle surf al amanecer, excursiones, talleres de vino o noches de paella. Para muchos recién llegados a Barcelona, también polacos, es el primer paso en la ciudad.',
                        '**Kosmo HisPLano** lleva más de 15 años ayudando a que los niños de familias polacas en Barcelona no pierdan el contacto con la lengua y la cultura. Sus programas adaptados a cada edad, de bebés a niños de primer curso, ayudan a las familias bilingües a criar a sus hijos en polaco y en castellano. La asociación coorganiza con nosotros el Final de WOŚP en Barcelona.',
                    ],
                },
                {
                    title: '¿Qué tienen en común nuestros patrocinadores?',
                    ul: [
                        '**Multilingüismo**: atienden en polaco, castellano, catalán e inglés, mucho más allá de la comunidad polaca.',
                        '**Calidad y oficio**: desde la repostería sin semielaborados hasta la enseñanza acreditada.',
                        '**Arraigo en Barcelona**: algunos llevan aquí más de una década y conocen la ciudad al dedillo.',
                        '**Compromiso social**: apoyan no solo a WOŚP, sino a toda la comunidad polaca en Cataluña.',
                    ],
                    p: ['No lo tienen fácil: el aumento de los alquileres de locales, un salario mínimo más alto y el coste de la energía son el día a día de las pequeñas empresas de Barcelona. Por eso valoramos aún más que cada año encuentren tiempo y recursos para tocar con la Orquesta.'],
                },
                {
                    title: '¿Cómo puedes apoyarlos?',
                    ul: [
                        'Encarga una tarta a Bea, compra en Krakoviak, come pierogi en el Wawel.',
                        'Cuando te visite la familia, recomiéndales una excursión con Bona Barcelona o PolCat.',
                        '¿Empiezas con el español? Mira World Class Barcelona. ¿Tienes niños pequeños? Echa un vistazo a las actividades de Kosmo HisPLano.',
                        'Envía un paquete a Polonia con ART-TUR.',
                        'Déjales reseñas en internet y recomiéndalos a tus amigos: para un pequeño negocio no tiene precio.',
                    ],
                },
                {
                    p: ['¿Tienes tu propio negocio en Barcelona y quieres unirte a ellos? La lista de patrocinadores del 35.º Final aún está vacía: una oportunidad única para llegar a la comunidad polaca e internacional de la ciudad.'],
                    cta: { label: 'Hazte patrocinador del 35.º Final', href: '/sponsors/35-final' },
                },
            ],
        },
        ca: {
            title: 'Empreses poloneses a Barcelona: així creixen els nostres patrocinadors',
            excerpt: 'Una nova pastisseria polonesa a Les Corts, una escola d\'espanyol acreditada per l\'Institut Cervantes, agències de viatges amb guies polonesos i un transportista que uneix Polònia i Espanya des del 1993. Hem vist com els va a les empreses i entitats que toquen amb nosaltres al Final de WOŚP.',
            sections: [
                {
                    p: [
                        'Sense patrocinadors i col·laboradors no hi hauria Final de WOŚP a Barcelona. Ens donen menjar per a les parades, objectes per subhastar, transport, espais, difusió i, senzillament, suport. Moltes d\'aquestes empreses les porten polonesos que han creat el seu propi negoci a Catalunya.',
                        'Hem volgut saber com els va als nostres patrocinadors el 2026, un any de turisme rècord però també de costos a l\'alça. Això és el que hem descobert.',
                    ],
                    image: { src: finale, alt: 'Participants del 34è Final de WOŚP a Barcelona', caption: 'El Final de WOŚP a Barcelona també és mèrit dels nostres patrocinadors i col·laboradors.' },
                },
                {
                    title: 'Gastronomia: sabors polonesos al cor de Barcelona',
                    p: [
                        'La gran notícia de l\'any: **Delicias by Bea** ha obert **la seva pròpia pastisseria**. La Bea Michalak, pastissera de Namysłów que va perfeccionar l\'ofici a Berlín, porta la marca des del 2023. El **març de 2026** va obrir la pastisseria amb obrador a **Les Corts** (Travessera de les Corts 303), juntament amb un web renovat. Tot s\'elabora allà mateix, sense productes semielaborats: mantega i làctics naturals, fruita de temporada de proveïdors locals i ous de gallines en llibertat.',
                        'A la carta hi ha clàssics (**brioixos drożdżówki, pastís de formatge sernik i pastís de poma szarlotka**) i, abans de Nadal, braç de rosella, pa de pessic de gingebre a l\'antiga, pastís de nous i pastís de formatge de Cracòvia. La Bea prepara pastissos per a casaments, comunions i aniversaris, i taules dolces per a esdeveniments d\'empresa. El web de l\'obrador és en quatre idiomes (català, castellà, polonès i anglès), mostra de com n\'és de diversa la seva clientela.',
                    ],
                    cards: cards('ca', ['delicias', 'krakoviak', 'wawel'], {
                        delicias: { kind: 'Pastisseria · patrocinador', text: 'Pastisseria pròpia a Les Corts des del març de 2026. Rebosteria polonesa, pastissos per a celebracions i taules dolces per a esdeveniments.' },
                        krakoviak: { kind: 'Botiga polonesa · patrocinador', text: 'Productes polonesos a prop de la Sagrada Família: pierogi, embotits, cogombrets, mató, i també menjar per emportar.' },
                        wawel: { kind: 'Restaurant polonès · col·laborador', text: 'Carrer de Sicília 330, a prop de la Sagrada Família. Gołąbki, bigos, truites de patata, pierogi i cervesa Wawel IPA.' },
                    }),
                },
                {
                    p: ['La cuina polonesa a Barcelona no atrau només polonesos. El 2025, estudiants de la universitat UAO CEU van descriure els locals polonesos de la ciutat a l\'article «Polish Food in Barcelona». Van elogiar el **Wawel** pels seus gołąbki, el bigos i les racions generoses (l\'article explica fins i tot que a Robert Lewandowski li van agradar els seus pierogi) i van recomanar el **Krakowiak**, a prop de la Sagrada Família, per comprar embotit, cogombrets i pierogi congelats o menjar alguna cosa per emportar.'],
                    image: { src: stand, alt: 'Parada de menjar polonès al Final de WOŚP', caption: 'Delícies poloneses en una parada durant el 34è Final a Barcelona.' },
                },
                {
                    title: 'Turisme i transport: Catalunya en polonès',
                    p: ['El 2026 és un any excepcional per al turisme a Barcelona: la sortida del Tour de França, la visita del papa Lleó XIV, la finalització de la Torre de Jesucrist de la Sagrada Família i el centenari de la mort de Gaudí. Les agències de viatges poloneses també ho noten.'],
                    cards: cards('ca', ['bona', 'polcat', 'arttur'], {
                        bona: { kind: 'Agència de viatges · patrocinador', text: 'Agència amb llicència a Catalunya. Guies polonesos, grups petits, Montserrat i el Tibidabo, la Costa Brava, la Tarragona romana, Andorra i tallers de cava.' },
                        polcat: { kind: 'Agència de viatges · patrocinador', text: 'Gairebé 20 anys a Catalunya, amb oficina a Canet de Mar. Excursions amb guies polonesos per Barcelona, Girona i Figueres i la Costa Brava. També organitza viatges escolars, pelegrinatges i viatges d\'empresa.' },
                        arttur: { kind: 'Transportista · patrocinador', text: 'Des del 1993 transporta persones i paquets entre Polònia i Espanya i entre Polònia i França. Sortides des de Lublin cada dijous.' },
                    }),
                },
                {
                    p: ['És curiós com són de diferents aquests models de negoci. **Bona Barcelona** aposta per viatges personalitzats prèmium i grups petits, amb trasllats inclosos. **PolCat** fa gairebé dues dècades que organitza tant excursions per a turistes com viatges per a escoles i grups. **ART-TUR**, de Lublin, fa més de 30 anys que transporta persones i paquets: per a moltes famílies a Catalunya és la manera de rebre els pots de menjar casolà de la mare o els regals de Nadal.'],
                    image: withCaption(IMG.montserrat, 'Montserrat, una de les excursions més populars des de Barcelona.'),
                },
                {
                    title: 'Educació: de l\'espanyol per a expats al polonès per a infants',
                    cards: cards('ca', ['worldClass', 'kosmo'], {
                        worldClass: { kind: 'Escola d\'espanyol · col·laborador', text: 'Acreditada per l\'Institut Cervantes, dues seus a Barcelona. Cursos d\'A1 a C2, preparació del DELE, cursos amb visat d\'estudiant de 6, 9 o 12 mesos, cursos Erasmus i per a empreses.' },
                        kosmo: { kind: 'Associació educativa · coorganitzador', text: 'En actiu des del 2010. Bobasowo (0-2 anys), MiniPL (2,5-4), tallers de lectura i escriptura en polonès (4,5-7), casals de dia i classes en línia de polonès i espanyol.' },
                    }),
                },
                {
                    p: [
                        '**World Class Barcelona** és avui una de les escoles d\'espanyol conegudes de la ciutat. Està **acreditada per l\'Institut Cervantes** i té dues seus: a Ciutat Vella (Carrer del Bisbe Laguarda 4) i a l\'Eixample. La seva comunitat de «World Class mates» suma més de 900 alumnes. L\'escola organitza activitats cada dia, de dilluns a diumenge: vòlei platja, paddle surf a l\'alba, excursions, tallers de vi o nits de paella. Per a molts nouvinguts a Barcelona, també polonesos, és el primer pas a la ciutat.',
                        '**Kosmo HisPLano** fa més de 15 anys que ajuda els infants de famílies poloneses a Barcelona a no perdre el contacte amb la llengua i la cultura. Els seus programes adaptats a cada edat, de nadons a infants de primer, ajuden les famílies bilingües a criar els fills en polonès i en castellà. L\'associació coorganitza amb nosaltres el Final de WOŚP a Barcelona.',
                    ],
                },
                {
                    title: 'Què tenen en comú els nostres patrocinadors?',
                    ul: [
                        '**Multilingüisme**: atenen en polonès, castellà, català i anglès, molt més enllà de la comunitat polonesa.',
                        '**Qualitat i ofici**: des de la rebosteria sense semielaborats fins a l\'ensenyament acreditat.',
                        '**Arrelament a Barcelona**: alguns fa més d\'una dècada que hi són i coneixen la ciutat de dalt a baix.',
                        '**Compromís social**: donen suport no només a WOŚP, sinó a tota la comunitat polonesa a Catalunya.',
                    ],
                    p: ['No ho tenen fàcil: l\'augment dels lloguers de locals, un salari mínim més alt i el cost de l\'energia són el dia a dia de les petites empreses de Barcelona. Per això valorem encara més que cada any trobin temps i recursos per tocar amb l\'Orquestra.'],
                },
                {
                    title: 'Com els pots donar suport?',
                    ul: [
                        'Encarrega un pastís a la Bea, compra al Krakoviak, menja pierogi al Wawel.',
                        'Quan et visiti la família, recomana\'ls una excursió amb Bona Barcelona o PolCat.',
                        'Comences amb l\'espanyol? Mira World Class Barcelona. Tens infants petits? Fes un cop d\'ull a les activitats de Kosmo HisPLano.',
                        'Envia un paquet a Polònia amb ART-TUR.',
                        'Deixa\'ls ressenyes a internet i recomana\'ls als amics: per a un petit negoci no té preu.',
                    ],
                },
                {
                    p: ['Tens el teu propi negoci a Barcelona i vols unir-t\'hi? La llista de patrocinadors del 35è Final encara és buida: una oportunitat única per arribar a la comunitat polonesa i internacional de la ciutat.'],
                    cta: { label: 'Fes-te patrocinador del 35è Final', href: '/sponsors/35-final' },
                },
            ],
        },
    },
};
