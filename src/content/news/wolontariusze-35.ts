import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const cover = '/images/35-final/noworodek-sprzet-wosp.webp';
const poster = '/images/35-final/35FinalBarcelona.png';

export const wolontariusze35: NewsSource = {
    slug: 'wolontariusze-35-finalu-wosp-zapisy-barcelona',
    date: '2026-10-21',
    coverImage: cover,
    tags: ['35FinałWOŚP', 'Wolontariat', 'Noworodki', 'WOŚPBarcelona'],
    sources: [
        { label: 'TVN24 (19.10.2026)', url: 'https://tvn24.pl/polska/jerzy-owsiak-o-35-finale-wosp-rocznie-rodzi-sie-okolo-20-tysiecy-wczesniakow-st9293840' },
        { label: 'Alert Medyczny', url: 'https://alertmedyczny.pl/wosp-oglosila-temat-35-finalu-pieniadze-trafia-na-opieke-nad-noworodkami/' },
    ],
    content: {
        pl: {
            title: '20 tysięcy wcześniaków rocznie. Szukamy wolontariuszy na 35. Finał w Barcelonie!',
            excerpt: 'Co roku w Polsce rodzi się blisko 20 tysięcy wcześniaków, a liczba oddziałów noworodkowych spadła z 400 do 266. 35. Finał WOŚP zagra dla nich 31 stycznia 2027 roku – i potrzebujemy Twojej pomocy!',
            sections: [
                {
                    p: [
                        'W październiku 2026 roku Fundacja WOŚP ogłosiła cel 35. Finału. Orkiestra zagra w niedzielę **31 stycznia 2027 roku** pod hasłem **„Dzisiaj?! Zdrowie noworodka najważniejsze!”**. Zebrane pieniądze trafią na nowoczesny sprzęt dla oddziałów neonatologicznych – przede wszystkim tych, które opiekują się wcześniakami i noworodkami wymagającymi intensywnej terapii.',
                        'To powrót do tematu bardzo bliskiego Orkiestrze. Neonatologia była celem Finałów już wielokrotnie – według samego Jerzego Owsiaka do 2018 roku aż siedem razy. Sprzęt z czerwonym serduszkiem stoi dziś niemal na każdej sali porodowej w Polsce. Ale potrzeby wciąż rosną.',
                    ],
                    image: withCaption(IMG.nicu, 'Oddział intensywnej terapii noworodka – inkubatory i aparatura monitorująca.'),
                },
                {
                    title: 'Liczby, które poruszają',
                    ul: [
                        'W Polsce rodzi się rocznie blisko **20 tysięcy wcześniaków** – dzieci urodzonych przed 37. tygodniem ciąży. Część z nich wymaga wielotygodniowego leczenia.',
                        'Dziesięć lat temu w Polsce działało około **400 oddziałów noworodkowych**. Dziś jest ich **266**.',
                        'Choć liczba urodzeń spada, odsetek porodów obarczonych podwyższonym ryzykiem powikłań pozostaje wysoki.',
                    ],
                    quote: { text: 'Chcemy zrobić wszystko, żeby 20 tysięcy rosło, rozwijało się, mogło żyć.', author: 'Jerzy Owsiak (TVN24)' },
                },
                {
                    title: 'Dlaczego właśnie teraz?',
                    p: [
                        'Fundacja wskazuje kilka powodów. Kobiety coraz później decydują się na macierzyństwo, częstsze są ciąże mnogie i narodziny dzieci po leczeniu niepłodności – a to sytuacje, w których ryzyko przedwczesnego porodu jest wyższe. Jednocześnie małe oddziały są zamykane, a opieka nad najbardziej potrzebującymi noworodkami koncentruje się w ośrodkach III stopnia referencyjnego. Te ośrodki muszą być znakomicie wyposażone – i potrzebują sprawnego transportu, by przyjmować dzieci z całego regionu.',
                    ],
                    quote: { text: 'Coraz więcej się tych oddziałów zamyka.', author: 'Jerzy Owsiak' },
                },
                {
                    title: 'Jaki sprzęt kupi Fundacja?',
                    p: ['Według zapowiedzi Fundacji lista zakupów obejmuje m.in.:'],
                    ul: [
                        '**stoły do resuscytacji noworodków** – pierwsze minuty życia są kluczowe,',
                        '**respiratory noworodkowe** i **monitory funkcji oddechowych**,',
                        '**wideolaryngoskopy** – ułatwiające bezpieczną intubację najmniejszych pacjentów,',
                        '**aparaty do tomografii impedancyjnej** – do monitorowania wentylacji płuc bez promieniowania,',
                        '**monitory NIRS** – do nieinwazyjnej oceny utlenowania tkanek, m.in. mózgu,',
                        '**systemy HeRO** – analizujące zmienność rytmu serca i pomagające wcześnie wykryć infekcje,',
                        '**inkubatory**, w tym takie, które umożliwiają bezpieczne **kangurowanie** najmniejszych wcześniaków,',
                        '**karetki N** – specjalistyczne ambulanse do transportu noworodków między szpitalami,',
                        '**analizatory mleka kobiecego** – dla oddziałów i banków mleka.',
                    ],
                },
                {
                    title: 'Szukamy wolontariuszy – przez cały rok!',
                    p: [
                        'W Sztabie WOŚP Barcelona **szukamy wolontariuszy przez cały rok** – możesz zgłosić się w każdej chwili. Pomagać można na wiele sposobów: przy pracy w kuchni i na stoiskach z jedzeniem, przy organizacji wydarzeń, licytacjach, promocji czy zajęciach dla dzieci. Jeśli chcesz kwestować z puszką w dniu Finału, zajmiemy się Twoją rejestracją w Fundacji i identyfikatorem.',
                        'Nie musisz mieć doświadczenia. W naszym poradniku **„Jak zostać wolontariuszem WOŚP w Barcelonie?”** opisaliśmy krok po kroku, jak wygląda wolontariat i dzień Finału.',
                    ],
                    image: { src: cover, alt: 'Noworodek i sprzęt medyczny z serduszkiem WOŚP', caption: '35. Finał zagra dla zdrowia noworodków.' },
                },
                {
                    title: 'Szukamy nie tylko wolontariuszy z puszkami',
                    ul: [
                        '**Organizacja Finału** – logistyka, kontakt z partnerami, przygotowanie miejsca.',
                        '**Stoiska i licytacje** – ciasta, rękodzieło, przedmioty na aukcje.',
                        '**Artyści** – muzycy, tancerze, animatorzy dla dzieci.',
                        '**Promocja** – grafika, social media, tłumaczenia na hiszpański, kataloński i angielski.',
                        '**Sponsorzy i partnerzy** – lista sponsorów 35. Finału jest jeszcze pusta. To wyjątkowa okazja, by Twoja firma pokazała się polskiej społeczności w Barcelonie. Zajrzyj na stronę **Sponsorzy 35. Finału**!',
                    ],
                },
                {
                    p: [
                        'Wielu z nas to rodzice, a niektórzy wolontariusze naszego sztabu mają w rodzinie „wcześniacze” historie. Wiemy, jak ważny jest każdy respirator, każdy monitor i każda karetka. Zagrajmy razem – 31 stycznia 2027 roku, w Barcelonie!',
                    ],
                    image: { src: poster, alt: 'Plakat 35. Finału WOŚP w Barcelonie', caption: '35. Finał WOŚP w Barcelonie – 31 stycznia 2027.' },
                },
            ],
        },
        en: {
            title: '20,000 premature babies a year. We are looking for volunteers for the 35th Finale in Barcelona!',
            excerpt: 'Nearly 20,000 premature babies are born in Poland every year, and the number of neonatal wards has fallen from 400 to 266. The 35th WOŚP Finale will play for them on 31 January 2027 – and we need your help!',
            sections: [
                {
                    p: [
                        'In October 2026 the WOŚP Foundation announced the goal of the 35th Finale. The Orchestra will play on Sunday, **31 January 2027**, under the slogan **"Today?! A newborn\'s health comes first!"**. The money raised will buy modern equipment for neonatal wards – above all those caring for premature babies and newborns needing intensive care.',
                        'It is a return to a theme very close to the Orchestra. Neonatology has been the goal of Finales many times – according to Jerzy Owsiak, seven times by 2018. Equipment with the red heart stands in almost every delivery room in Poland. But needs keep growing.',
                    ],
                    image: withCaption(IMG.nicu, 'A neonatal intensive care unit – incubators and monitoring equipment.'),
                },
                {
                    title: 'Numbers that move us',
                    ul: [
                        'Nearly **20,000 premature babies** – born before the 37th week of pregnancy – are born in Poland every year. Some need weeks of treatment.',
                        'Ten years ago there were around **400 neonatal wards** in Poland. Today there are **266**.',
                        'Although the number of births is falling, the share of high-risk deliveries remains high.',
                    ],
                    quote: { text: 'We want to do everything so that these 20,000 can grow, develop and live.', author: 'Jerzy Owsiak (TVN24)' },
                },
                {
                    title: 'Why now?',
                    p: ['The Foundation points to several reasons. Women are becoming mothers later, multiple pregnancies and births after fertility treatment are more common – all situations with a higher risk of premature birth. At the same time small wards are closing and care for the most vulnerable newborns is concentrated in third-level referral centres. These centres must be superbly equipped – and need efficient transport to admit babies from the whole region.'],
                    quote: { text: 'More and more of these wards are closing.', author: 'Jerzy Owsiak' },
                },
                {
                    title: 'What equipment will the Foundation buy?',
                    p: ['According to the Foundation, the shopping list includes:'],
                    ul: [
                        '**newborn resuscitation tables** – the first minutes of life are crucial,',
                        '**neonatal ventilators** and **respiratory monitors**,',
                        '**video laryngoscopes** – for safer intubation of the smallest patients,',
                        '**electrical impedance tomography devices** – to monitor lung ventilation without radiation,',
                        '**NIRS monitors** – for non-invasive assessment of tissue oxygenation, including the brain,',
                        '**HeRO systems** – analysing heart rate variability to help detect infections early,',
                        '**incubators**, including ones that allow safe **kangaroo care** for the smallest preemies,',
                        '**N ambulances** – specialist ambulances for transporting newborns between hospitals,',
                        '**human milk analysers** – for wards and milk banks.',
                    ],
                },
                {
                    title: 'We are looking for volunteers – all year round!',
                    p: [
                        'At WOŚP Barcelona **we look for volunteers all year round** – you can sign up at any time. There are many ways to help: in the kitchen and at food stands, organising events, auctions, promotion or children\'s activities. If you want to collect with a box on Finale day, we will take care of your registration with the Foundation and your ID badge.',
                        'No experience needed. In our guide **"How to become a WOŚP volunteer in Barcelona"** we describe step by step what volunteering and Finale day look like.',
                    ],
                    image: { src: cover, alt: 'A newborn and medical equipment with the WOŚP heart', caption: 'The 35th Finale plays for newborns\' health.' },
                },
                {
                    title: 'Not only volunteers with boxes',
                    ul: [
                        '**Organising the Finale** – logistics, contact with partners, preparing the venue.',
                        '**Stands and auctions** – cakes, handicrafts, auction items.',
                        '**Artists** – musicians, dancers, children\'s entertainers.',
                        '**Promotion** – graphics, social media, translations into Spanish, Catalan and English.',
                        '**Sponsors and partners** – the 35th Finale sponsor list is still empty. A unique chance for your business to reach the Polish community in Barcelona. Visit the **Sponsors of the 35th Finale** page!',
                    ],
                },
                {
                    p: ['Many of us are parents, and some of our volunteers have premature-baby stories in their own families. We know how much every ventilator, every monitor and every ambulance matters. Let\'s play together – on 31 January 2027, in Barcelona!'],
                    image: { src: poster, alt: 'Poster of the 35th WOŚP Finale in Barcelona', caption: 'The 35th WOŚP Finale in Barcelona – 31 January 2027.' },
                },
            ],
        },
        es: {
            title: '20.000 bebés prematuros al año. ¡Buscamos voluntarios para el 35.º Final en Barcelona!',
            excerpt: 'Cada año nacen en Polonia casi 20.000 bebés prematuros, y el número de unidades neonatales ha bajado de 400 a 266. El 35.º Final de WOŚP tocará por ellos el 31 de enero de 2027, ¡y necesitamos tu ayuda!',
            sections: [
                {
                    p: [
                        'En octubre de 2026 la Fundación WOŚP anunció el objetivo del 35.º Final. La Orquesta tocará el domingo **31 de enero de 2027** con el lema **«¿¡Hoy?! La salud del recién nacido es lo primero»**. Lo recaudado se destinará a equipos modernos para unidades neonatales, sobre todo las que atienden a prematuros y recién nacidos que necesitan cuidados intensivos.',
                        'Es una vuelta a un tema muy cercano a la Orquesta. La neonatología ha sido objetivo de los Finales muchas veces: según Jerzy Owsiak, siete veces hasta 2018. Los equipos con el corazón rojo están hoy en casi todas las salas de partos de Polonia. Pero las necesidades siguen creciendo.',
                    ],
                    image: withCaption(IMG.nicu, 'Una unidad de cuidados intensivos neonatales: incubadoras y equipos de monitorización.'),
                },
                {
                    title: 'Cifras que conmueven',
                    ul: [
                        'En Polonia nacen cada año casi **20.000 bebés prematuros**, antes de la semana 37 de embarazo. Algunos necesitan semanas de tratamiento.',
                        'Hace diez años había en Polonia unas **400 unidades neonatales**. Hoy hay **266**.',
                        'Aunque los nacimientos bajan, la proporción de partos de alto riesgo sigue siendo elevada.',
                    ],
                    quote: { text: 'Queremos hacer todo lo posible para que esos 20.000 crezcan, se desarrollen y puedan vivir.', author: 'Jerzy Owsiak (TVN24)' },
                },
                {
                    title: '¿Por qué ahora?',
                    p: ['La Fundación señala varias razones. Las mujeres son madres cada vez más tarde, y son más frecuentes los embarazos múltiples y los nacimientos tras tratamientos de fertilidad, situaciones con más riesgo de parto prematuro. Al mismo tiempo, cierran unidades pequeñas y la atención a los recién nacidos más vulnerables se concentra en centros de tercer nivel. Esos centros deben estar muy bien equipados y necesitan un transporte eficaz para recibir bebés de toda la región.'],
                    quote: { text: 'Cada vez cierran más unidades.', author: 'Jerzy Owsiak' },
                },
                {
                    title: '¿Qué equipos comprará la Fundación?',
                    p: ['Según la Fundación, la lista de compras incluye:'],
                    ul: [
                        '**mesas de reanimación neonatal**: los primeros minutos de vida son clave,',
                        '**respiradores neonatales** y **monitores respiratorios**,',
                        '**videolaringoscopios**, para intubar con más seguridad a los pacientes más pequeños,',
                        '**equipos de tomografía por impedancia eléctrica**, para vigilar la ventilación pulmonar sin radiación,',
                        '**monitores NIRS**, para evaluar de forma no invasiva la oxigenación de los tejidos, incluido el cerebro,',
                        '**sistemas HeRO**, que analizan la variabilidad del ritmo cardíaco y ayudan a detectar infecciones a tiempo,',
                        '**incubadoras**, incluidas las que permiten el **método canguro** con los prematuros más pequeños,',
                        '**ambulancias N**, especializadas en el traslado de recién nacidos entre hospitales,',
                        '**analizadores de leche materna**, para unidades y bancos de leche.',
                    ],
                },
                {
                    title: 'Buscamos voluntarios ¡todo el año!',
                    p: [
                        'En WOŚP Barcelona **buscamos voluntarios todo el año**: puedes apuntarte en cualquier momento. Hay muchas formas de ayudar: en la cocina y en los puestos de comida, en la organización de eventos, las subastas, la difusión o las actividades infantiles. Si quieres recaudar con hucha el día del Final, nos encargamos de tu registro en la Fundación y de tu acreditación.',
                        'No necesitas experiencia. En nuestra guía **«¿Cómo ser voluntario de WOŚP en Barcelona?»** explicamos paso a paso cómo es el voluntariado y el día del Final.',
                    ],
                    image: { src: cover, alt: 'Un recién nacido y equipos médicos con el corazón de WOŚP', caption: 'El 35.º Final toca por la salud de los recién nacidos.' },
                },
                {
                    title: 'No solo buscamos voluntarios con hucha',
                    ul: [
                        '**Organización del Final**: logística, contacto con colaboradores, preparación del espacio.',
                        '**Puestos y subastas**: pasteles, artesanía, objetos para subastar.',
                        '**Artistas**: músicos, bailarines, animadores infantiles.',
                        '**Difusión**: diseño, redes sociales, traducciones al castellano, catalán e inglés.',
                        '**Patrocinadores y colaboradores**: la lista de patrocinadores del 35.º Final aún está vacía. Una oportunidad única para que tu empresa llegue a la comunidad polaca de Barcelona. ¡Visita la página **Patrocinadores del 35.º Final**!',
                    ],
                },
                {
                    p: ['Muchos de nosotros somos padres, y algunos voluntarios de nuestro equipo tienen historias de bebés prematuros en su propia familia. Sabemos lo que importa cada respirador, cada monitor y cada ambulancia. ¡Toquemos juntos el 31 de enero de 2027 en Barcelona!'],
                    image: { src: poster, alt: 'Cartel del 35.º Final de WOŚP en Barcelona', caption: '35.º Final de WOŚP en Barcelona: 31 de enero de 2027.' },
                },
            ],
        },
        ca: {
            title: '20.000 nadons prematurs l\'any. Busquem voluntaris per al 35è Final a Barcelona!',
            excerpt: 'Cada any neixen a Polònia gairebé 20.000 nadons prematurs, i el nombre d\'unitats neonatals ha baixat de 400 a 266. El 35è Final de WOŚP tocarà per ells el 31 de gener de 2027, i necessitem la teva ajuda!',
            sections: [
                {
                    p: [
                        'L\'octubre de 2026 la Fundació WOŚP va anunciar l\'objectiu del 35è Final. L\'Orquestra tocarà diumenge **31 de gener de 2027** amb el lema **«Avui?! La salut del nadó és el primer!»**. El que es recapti es destinarà a equips moderns per a unitats neonatals, sobretot les que atenen prematurs i nadons que necessiten cures intensives.',
                        'És un retorn a un tema molt proper a l\'Orquestra. La neonatologia ha estat objectiu dels Finals moltes vegades: segons Jerzy Owsiak, set vegades fins al 2018. Els equips amb el cor vermell són avui a gairebé totes les sales de parts de Polònia. Però les necessitats continuen creixent.',
                    ],
                    image: withCaption(IMG.nicu, 'Una unitat de cures intensives neonatals: incubadores i equips de monitoratge.'),
                },
                {
                    title: 'Xifres que commouen',
                    ul: [
                        'A Polònia neixen cada any gairebé **20.000 nadons prematurs**, abans de la setmana 37 d\'embaràs. Alguns necessiten setmanes de tractament.',
                        'Fa deu anys hi havia a Polònia unes **400 unitats neonatals**. Avui n\'hi ha **266**.',
                        'Tot i que els naixements baixen, la proporció de parts d\'alt risc continua sent elevada.',
                    ],
                    quote: { text: 'Volem fer tot el possible perquè aquests 20.000 creixin, es desenvolupin i puguin viure.', author: 'Jerzy Owsiak (TVN24)' },
                },
                {
                    title: 'Per què ara?',
                    p: ['La Fundació assenyala diverses raons. Les dones són mares cada vegada més tard, i són més freqüents els embarassos múltiples i els naixements després de tractaments de fertilitat, situacions amb més risc de part prematur. Alhora, tanquen unitats petites i l\'atenció als nadons més vulnerables es concentra en centres de tercer nivell. Aquests centres han d\'estar molt ben equipats i necessiten un transport eficaç per rebre nadons de tota la regió.'],
                    quote: { text: 'Cada vegada en tanquen més.', author: 'Jerzy Owsiak' },
                },
                {
                    title: 'Quins equips comprarà la Fundació?',
                    p: ['Segons la Fundació, la llista de compres inclou:'],
                    ul: [
                        '**taules de reanimació neonatal**: els primers minuts de vida són clau,',
                        '**respiradors neonatals** i **monitors respiratoris**,',
                        '**videolaringoscopis**, per intubar amb més seguretat els pacients més petits,',
                        '**equips de tomografia per impedància elèctrica**, per vigilar la ventilació pulmonar sense radiació,',
                        '**monitors NIRS**, per avaluar de manera no invasiva l\'oxigenació dels teixits, inclòs el cervell,',
                        '**sistemes HeRO**, que analitzen la variabilitat del ritme cardíac i ajuden a detectar infeccions a temps,',
                        '**incubadores**, incloses les que permeten el **mètode cangur** amb els prematurs més petits,',
                        '**ambulàncies N**, especialitzades en el trasllat de nadons entre hospitals,',
                        '**analitzadors de llet materna**, per a unitats i bancs de llet.',
                    ],
                },
                {
                    title: 'Busquem voluntaris tot l\'any!',
                    p: [
                        'A WOŚP Barcelona **busquem voluntaris tot l\'any**: et pots apuntar en qualsevol moment. Hi ha moltes maneres d\'ajudar: a la cuina i a les parades de menjar, en l\'organització d\'esdeveniments, les subhastes, la difusió o les activitats infantils. Si vols recaptar amb guardiola el dia del Final, ens encarreguem del teu registre a la Fundació i de l\'acreditació.',
                        'No cal experiència. A la nostra guia **«Com ser voluntari de WOŚP a Barcelona?»** expliquem pas a pas com és el voluntariat i el dia del Final.',
                    ],
                    image: { src: cover, alt: 'Un nadó i equips mèdics amb el cor de WOŚP', caption: 'El 35è Final toca per la salut dels nadons.' },
                },
                {
                    title: 'No només busquem voluntaris amb guardiola',
                    ul: [
                        '**Organització del Final**: logística, contacte amb col·laboradors, preparació de l\'espai.',
                        '**Parades i subhastes**: pastissos, artesania, objectes per subhastar.',
                        '**Artistes**: músics, ballarins, animadors infantils.',
                        '**Difusió**: disseny, xarxes socials, traduccions al castellà, català i anglès.',
                        '**Patrocinadors i col·laboradors**: la llista de patrocinadors del 35è Final encara és buida. Una oportunitat única perquè la teva empresa arribi a la comunitat polonesa de Barcelona. Visita la pàgina **Patrocinadors del 35è Final**!',
                    ],
                },
                {
                    p: ['Molts de nosaltres som pares, i alguns voluntaris del nostre equip tenen històries de nadons prematurs a la seva pròpia família. Sabem com importa cada respirador, cada monitor i cada ambulància. Toquem junts el 31 de gener de 2027 a Barcelona!'],
                    image: { src: poster, alt: 'Cartell del 35è Final de WOŚP a Barcelona', caption: '35è Final de WOŚP a Barcelona: 31 de gener de 2027.' },
                },
            ],
        },
    },
};
