import type { NewsImage, NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const FB = 'https://www.facebook.com/sztabWOSPBarcelona';
const POST = 'https://www.facebook.com/groups/90649210871/permalink/10163712977470872/';
const POLL = 'https://www.facebook.com/groups/90649210871/permalink/10163648815545872/';

const poster = (alt: string, caption: string): NewsImage => ({
    src: '/images/blog/lalka-plakat-barcelona.jpg',
    alt,
    caption,
    fit: 'contain',
});

const postCard = (kind: string, text: string, linkLabel: string) => [
    { name: 'Lalka · Kinépolis Barcelona Splau', kind, text, url: POST, linkLabel },
];

export const lalkaKino: NewsSource = {
    slug: 'lalka-pokaz-filmu-kinepolis-splau-barcelona',
    date: '2026-11-11',
    coverImage: '/images/blog/lalka-dorocinski-wokulski.avif',
    thumbnailImage: '/images/blog/lalka-dorocinski-wokulski.avif',
    tags: ['Polonia', 'Barcelona', 'Kino', 'Lalka', 'Wydarzenia'],
    sources: [
        { label: 'Facebook: zapowiedź pokazu 5 grudnia', url: POST },
        { label: 'Facebook: pierwsza zapowiedź i ankieta', url: POLL },
        { label: 'Facebook: Sztab WOŚP Barcelona', url: FB },
        { label: 'Wikipedia: Lalka (powieść)', url: 'https://pl.wikipedia.org/wiki/Lalka_(powie%C5%9B%C4%87)' },
    ],
    content: {
        pl: {
            title: 'Barcelona, zapiszcie datę! „Lalka” w Kinépolis Splau – sobota, 5 grudnia 2026, godz. 18:00',
            excerpt: 'Już w sobotę 5 grudnia 2026 roku o 18:00 Artystyczne Stowarzyszenie Polska zaprasza Polonię z Barcelony i całej Katalonii do Kinépolis Barcelona Splau na specjalny pokaz nowej ekranizacji „Lalki” Bolesława Prusa – w polskiej wersji językowej z angielskimi napisami.',
            sections: [
                {
                    p: [
                        '**Barcelona, zapiszcie datę!** Już w **sobotę, 5 grudnia 2026 roku, o godzinie 18:00** **Artystyczne Stowarzyszenie Polska** zaprasza Polonię z Barcelony i całej Katalonii na **specjalny pokaz filmu „Lalka”** – nowej, epickiej ekranizacji kultowej powieści **Bolesława Prusa**.',
                        'Na wielkim ekranie zobaczymy m.in. **Marcina Dorocińskiego**, **Kamilę Urzędowską** i **Marka Kondrata**. Film zostanie wyświetlony w **oryginalnej polskiej wersji językowej z angielskimi napisami** – śmiało zabierajcie ze sobą także hiszpańskich, katalońskich i zagranicznych znajomych.',
                        '**Ważne:** pokaz organizuje **Artystyczne Stowarzyszenie Polska** – Sztab WOŚP Barcelona nie jest organizatorem, tylko z radością podajemy informację dalej. Część naszych wolontariuszy na pewno będzie na sali, więc to też świetna okazja, żeby się z nami spotkać!',
                    ],
                    highlight: { value: '5.12.2026 · 18:00', label: 'Kinépolis Barcelona Splau · wersja polska z napisami angielskimi' },
                },
                {
                    title: 'Kiedy i gdzie?',
                    p: [
                        'Seans zaczyna się w **sobotę 5 grudnia o 18:00** w **Kinépolis Barcelona Splau** – to kino w centrum handlowym Splau przy Av. del Baix Llobregat (08940 Cornellà de Llobregat), tuż za granicą Barcelony. Na ekranie „Lalka” w reżyserii **Macieja Kawalskiego**, po polsku i z angielskimi napisami.',
                        'Całość organizuje **Artystyczne Stowarzyszenie Polska**. Informacji o biletach jeszcze nie ma – organizator poda je wkrótce, a my od razu przekażemy je dalej na Facebooku i tutaj, w Aktualnościach.',
                    ],
                    image: poster('Plakat filmu „Lalka” – premiera w Barcelonie 5 grudnia 2026 o 18:00', 'Plakat pokazu „Lalki” w Barcelonie: sobota, 5 grudnia 2026, godz. 18:00, Kinépolis Barcelona Splau.'),
                },
                {
                    title: 'Zarezerwujcie sobie ten wieczór',
                    p: [
                        'Sobotni wieczór na początku grudnia to idealny moment, żeby spotkać się w polskim gronie przed świętami. Przyjdźcie z rodziną, przyjaciółmi i znajomymi – to nie tylko seans, ale też okazja, by się poznać i porozmawiać.',
                        '**Przekażcie tę wiadomość znajomym** w Barcelonie i Katalonii – im nas więcej, tym lepiej!',
                    ],
                    cards: postCard('Wydarzenie · Facebook', 'Sobota, 5 grudnia 2026, godz. 18:00 – Kinépolis Barcelona Splau. Udostępnij post znajomym!', 'Zobacz post na Facebooku'),
                },
                {
                    title: '„Lalka” – powieść, którą zna każdy Polak',
                    p: [
                        '**„Lalka”** to jedna z najważniejszych powieści w historii polskiej literatury. Bolesław Prus (właśc. Aleksander Głowacki) publikował ją w odcinkach w warszawskim „Kurierze Codziennym” w latach **1887–1889**, a w formie książkowej ukazała się w **1890 roku**.',
                        'Akcja toczy się w **Warszawie** pod koniec lat 70. XIX wieku. Poznajemy w niej **Stanisława Wokulskiego** – kupca, który z ubogiego subiekta stał się majętnym człowiekiem – i jego obsesyjną miłość do arystokratki **Izabeli Łęckiej**. Ważnym głosem powieści jest też pamiętnik starego subiekta **Ignacego Rzeckiego**. To historia o miłości, ambicji, podziałach społecznych i zderzeniu romantyzmu z pozytywizmem.',
                    ],
                    image: withCaption(IMG.prus, 'Bolesław Prus, autor „Lalki” (fotografia z ok. 1905 roku).'),
                },
                {
                    title: 'Warszawa Wokulskiego na wielkim ekranie',
                    p: [
                        'Sklep Wokulskiego mieścił się przy **Krakowskim Przedmieściu** – a cała powieść jest niezwykle plastycznym portretem dziewiętnastowiecznej Warszawy: jej salonów, kamienic, ulic i Powiśla. Nic dziwnego, że po „Lalkę” wielokrotnie sięgało kino i telewizja – pamiętamy film **Wojciecha Jerzego Hasa** z 1968 roku i serial **Ryszarda Bera** z 1977 roku.',
                        'Nowa ekranizacja to okazja, by wrócić do tej historii – albo poznać ją po raz pierwszy. A obejrzenie jej razem, w polskim gronie, kilka tysięcy kilometrów od Warszawy, będzie miało zupełnie wyjątkowy smak.',
                    ],
                    image: withCaption(IMG.krakowskiePrzedmiescie, 'Krakowskie Przedmieście w Warszawie – ulica, przy której Prus umieścił sklep Wokulskiego.'),
                },
                {
                    title: 'Dlaczego warto przyjść?',
                    ul: [
                        '**Polskie kino w Barcelonie** – rzadka okazja, by zobaczyć nowy polski film na dużym ekranie, w oryginalnej wersji językowej.',
                        '**Spotkanie Polonii** – wspólny wieczór z rodakami z Barcelony i całej Katalonii.',
                        '**Dla całej rodziny i przyjaciół** – dzięki angielskim napisom film zrozumieją także osoby, które nie mówią po polsku.',
                        '**Klasyka w nowym wydaniu** – świetna obsada i znana z lekcji polskiego historia w nowej, kinowej odsłonie.',
                    ],
                    image: withCaption(IMG.lalkaWydanie, 'Strona tytułowa pierwszego wydania książkowego „Lalki” (1890).'),
                },
                {
                    title: 'Do zobaczenia w kinie!',
                    p: [
                        'Informacje o biletach organizator poda wkrótce – damy znać, gdy tylko się pojawią. Obserwujcie nasz profil na Facebooku i zaglądajcie do Aktualności. **Sobota, 5 grudnia, 18:00 – Kinépolis Barcelona Splau.** Część naszego sztabu też tam będzie – do zobaczenia!',
                    ],
                    cta: { label: 'Zobacz nasze wydarzenia', href: '/events' },
                },
            ],
        },
        en: {
            title: 'Barcelona, save the date! "Lalka" at Kinépolis Splau – Saturday 5 December 2026, 6 pm',
            excerpt: 'On Saturday 5 December 2026 at 6 pm the Artystyczne Stowarzyszenie Polska invites the Polish community of Barcelona and all of Catalonia to Kinépolis Barcelona Splau for a special screening of the new adaptation of Bolesław Prus\'s "Lalka" (The Doll) – in Polish with English subtitles.',
            sections: [
                {
                    p: [
                        '**Barcelona, save the date!** On **Saturday 5 December 2026 at 6 pm** the **Artystyczne Stowarzyszenie Polska** (Polska Artistic Association) invites the Polish community of Barcelona and all of Catalonia to a **special screening of "Lalka" (The Doll)** – the new, epic adaptation of **Bolesław Prus\'s** iconic novel.',
                        'On the big screen we will see, among others, **Marcin Dorociński**, **Kamila Urzędowska** and **Marek Kondrat**. The film will be shown **in the original Polish version with English subtitles** – so feel free to bring your Spanish, Catalan and international friends.',
                        '**Please note:** the screening is organised by the **Artystyczne Stowarzyszenie Polska** – WOŚP Barcelona is not the organiser, we are simply happy to pass the news on. Some of our volunteers will certainly be in the audience, so it is also a great chance to meet us!',
                    ],
                    highlight: { value: '5 Dec 2026 · 18:00', label: 'Kinépolis Barcelona Splau · Polish version with English subtitles' },
                },
                {
                    title: 'When and where?',
                    p: [
                        'The screening starts on **Saturday 5 December at 6 pm** at **Kinépolis Barcelona Splau** – the cinema in the Splau shopping centre on Av. del Baix Llobregat (08940 Cornellà de Llobregat), just outside Barcelona. We will see "Lalka", directed by **Maciej Kawalski**, in Polish with English subtitles.',
                        'The event is organised by the **Artystyczne Stowarzyszenie Polska**. There is no ticket information yet – the organiser will share it soon, and we will pass it on straight away on Facebook and here in News.',
                    ],
                    image: poster('Poster of the film "Lalka" – Barcelona premiere on 5 December 2026 at 6 pm', 'Poster for the "Lalka" screening in Barcelona: Saturday 5 December 2026, 6 pm, Kinépolis Barcelona Splau.'),
                },
                {
                    title: 'Keep the evening free',
                    p: [
                        'A Saturday evening in early December is the perfect moment to get together with fellow Poles before the holidays. Come with family, friends and colleagues – it is not just a screening but a chance to meet and talk.',
                        '**Pass the news on to your friends** in Barcelona and Catalonia – the more, the merrier!',
                    ],
                    cards: postCard('Event · Facebook', 'Saturday 5 December 2026, 6 pm – Kinépolis Barcelona Splau. Share the post with your friends!', 'See the post on Facebook'),
                },
                {
                    title: '"Lalka" – a novel every Pole knows',
                    p: [
                        '**"Lalka"** is one of the most important novels in the history of Polish literature. Bolesław Prus (real name Aleksander Głowacki) published it in instalments in the Warsaw daily "Kurier Codzienny" in **1887–1889**, and it appeared in book form in **1890**.',
                        'The story is set in **Warsaw** in the late 1870s. It follows **Stanisław Wokulski** – a merchant who rose from a poor shop assistant to a wealthy man – and his obsessive love for the aristocrat **Izabela Łęcka**. Another key voice is the diary of the old shop clerk **Ignacy Rzecki**. It is a story about love, ambition, social divides and the clash between Romanticism and Positivism.',
                    ],
                    image: withCaption(IMG.prus, 'Bolesław Prus, author of "Lalka" (photo from around 1905).'),
                },
                {
                    title: 'Wokulski\'s Warsaw on the big screen',
                    p: [
                        'Wokulski\'s shop was on **Krakowskie Przedmieście** – and the whole novel is a vivid portrait of 19th-century Warsaw: its salons, tenement houses, streets and riverside Powiśle. No wonder film and TV have returned to "Lalka" many times – including **Wojciech Jerzy Has\'s** 1968 film and **Ryszard Ber\'s** 1977 TV series.',
                        'The new adaptation is a chance to return to this story – or discover it for the first time. And watching it together, among fellow Poles, thousands of kilometres from Warsaw, will make it truly special.',
                    ],
                    image: withCaption(IMG.krakowskiePrzedmiescie, 'Krakowskie Przedmieście in Warsaw – the street where Prus placed Wokulski\'s shop.'),
                },
                {
                    title: 'Why come?',
                    ul: [
                        '**Polish cinema in Barcelona** – a rare chance to see a new Polish film on the big screen in its original language.',
                        '**A community get-together** – an evening with fellow Poles from Barcelona and all of Catalonia.',
                        '**For family and friends** – thanks to the English subtitles, people who don\'t speak Polish can enjoy it too.',
                        '**A classic, reimagined** – a great cast and a story many remember from school, in a new cinematic version.',
                    ],
                    image: withCaption(IMG.lalkaWydanie, 'Title page of the first book edition of "Lalka" (1890).'),
                },
                {
                    title: 'See you at the cinema!',
                    p: [
                        'The organiser will announce ticket information soon – we will let you know as soon as it is out. Follow our Facebook page and keep an eye on News. **Saturday 5 December, 6 pm – Kinépolis Barcelona Splau.** Some of our team will be there too – see you!',
                    ],
                    cta: { label: 'See our events', href: '/events' },
                },
            ],
        },
        es: {
            title: '¡Barcelona, apuntad la fecha! «Lalka» en Kinépolis Splau, sábado 5 de diciembre de 2026, a las 18:00',
            excerpt: 'El sábado 5 de diciembre de 2026 a las 18:00 la Artystyczne Stowarzyszenie Polska invita a la comunidad polaca de Barcelona y de toda Cataluña a Kinépolis Barcelona Splau a una proyección especial de la nueva adaptación de «Lalka» (La muñeca) de Bolesław Prus, en polaco con subtítulos en inglés.',
            sections: [
                {
                    p: [
                        '**¡Barcelona, apuntad la fecha!** El **sábado 5 de diciembre de 2026, a las 18:00**, la **Artystyczne Stowarzyszenie Polska** (Asociación Artística Polska) invita a la comunidad polaca de Barcelona y de toda Cataluña a una **proyección especial de «Lalka» (La muñeca)**, la nueva y épica adaptación de la novela de culto de **Bolesław Prus**.',
                        'En la gran pantalla veremos, entre otros, a **Marcin Dorociński**, **Kamila Urzędowska** y **Marek Kondrat**. La película se proyectará **en versión original polaca con subtítulos en inglés**, así que podéis traer también a vuestros amigos españoles, catalanes e internacionales.',
                        '**Importante:** la proyección la organiza la **Artystyczne Stowarzyszenie Polska**; WOŚP Barcelona no es la organizadora, simplemente compartimos la noticia con mucho gusto. Seguro que parte de nuestros voluntarios estará en la sala, así que también es una buena ocasión para conocernos.',
                    ],
                    highlight: { value: '5.12.2026 · 18:00', label: 'Kinépolis Barcelona Splau · versión polaca con subtítulos en inglés' },
                },
                {
                    title: '¿Cuándo y dónde?',
                    p: [
                        'La sesión empieza el **sábado 5 de diciembre a las 18:00** en **Kinépolis Barcelona Splau**, el cine del centro comercial Splau en la Av. del Baix Llobregat (08940 Cornellà de Llobregat), justo al lado de Barcelona. Veremos «Lalka», dirigida por **Maciej Kawalski**, en polaco con subtítulos en inglés.',
                        'Lo organiza la **Artystyczne Stowarzyszenie Polska**. Todavía no hay información sobre las entradas: el organizador la publicará pronto y nosotros la compartiremos enseguida en Facebook y aquí, en Noticias.',
                    ],
                    image: poster('Cartel de la película «Lalka»: estreno en Barcelona el 5 de diciembre de 2026 a las 18:00', 'Cartel de la proyección de «Lalka» en Barcelona: sábado 5 de diciembre de 2026, 18:00, Kinépolis Barcelona Splau.'),
                },
                {
                    title: 'Reservaos la tarde',
                    p: [
                        'Un sábado por la tarde a principios de diciembre es el momento ideal para reunirse entre polacos antes de las fiestas. Venid con familia, amigos y conocidos: no es solo una proyección, sino también una ocasión para conocerse y charlar.',
                        '**Pasad la noticia a vuestros amigos** de Barcelona y Cataluña: ¡cuantos más seamos, mejor!',
                    ],
                    cards: postCard('Evento · Facebook', 'Sábado 5 de diciembre de 2026, 18:00, Kinépolis Barcelona Splau. ¡Comparte la publicación!', 'Ver la publicación en Facebook'),
                },
                {
                    title: '«Lalka», la novela que conoce todo polaco',
                    p: [
                        '**«Lalka»** es una de las novelas más importantes de la literatura polaca. Bolesław Prus (seudónimo de Aleksander Głowacki) la publicó por entregas en el diario varsoviano «Kurier Codzienny» entre **1887 y 1889**, y en forma de libro apareció en **1890**.',
                        'La acción transcurre en **Varsovia** a finales de la década de 1870. Sigue a **Stanisław Wokulski**, un comerciante que pasó de humilde dependiente a hombre adinerado, y su amor obsesivo por la aristócrata **Izabela Łęcka**. Otra voz esencial es el diario del viejo dependiente **Ignacy Rzecki**. Es una historia sobre el amor, la ambición, las divisiones sociales y el choque entre romanticismo y positivismo.',
                    ],
                    image: withCaption(IMG.prus, 'Bolesław Prus, autor de «Lalka» (fotografía de hacia 1905).'),
                },
                {
                    title: 'La Varsovia de Wokulski en la gran pantalla',
                    p: [
                        'La tienda de Wokulski estaba en **Krakowskie Przedmieście**, y toda la novela es un retrato muy vivo de la Varsovia del siglo XIX: sus salones, edificios, calles y el barrio ribereño de Powiśle. No es de extrañar que el cine y la televisión hayan vuelto a «Lalka» muchas veces, como en la película de **Wojciech Jerzy Has** de 1968 y la serie de **Ryszard Ber** de 1977.',
                        'La nueva adaptación es una ocasión para volver a esta historia o descubrirla por primera vez. Y verla juntos, entre polacos, a miles de kilómetros de Varsovia, tendrá un sabor muy especial.',
                    ],
                    image: withCaption(IMG.krakowskiePrzedmiescie, 'Krakowskie Przedmieście en Varsovia, la calle donde Prus situó la tienda de Wokulski.'),
                },
                {
                    title: '¿Por qué venir?',
                    ul: [
                        '**Cine polaco en Barcelona**: una ocasión poco habitual de ver una nueva película polaca en pantalla grande y en versión original.',
                        '**Encuentro de la comunidad**: una velada con polacos de Barcelona y de toda Cataluña.',
                        '**Para familia y amigos**: gracias a los subtítulos en inglés, también la disfrutarán quienes no hablan polaco.',
                        '**Un clásico renovado**: un gran reparto y una historia que muchos recuerdan del colegio, en una nueva versión para el cine.',
                    ],
                    image: withCaption(IMG.lalkaWydanie, 'Portada de la primera edición en libro de «Lalka» (1890).'),
                },
                {
                    title: '¡Nos vemos en el cine!',
                    p: [
                        'El organizador publicará pronto la información sobre las entradas; os avisaremos en cuanto esté disponible. Seguid nuestra página de Facebook y visitad Noticias. **Sábado 5 de diciembre, 18:00, Kinépolis Barcelona Splau.** Parte de nuestro equipo también estará allí: ¡nos vemos!',
                    ],
                    cta: { label: 'Ver nuestros eventos', href: '/events' },
                },
            ],
        },
        ca: {
            title: 'Barcelona, apunteu la data! «Lalka» a Kinépolis Splau, dissabte 5 de desembre de 2026, a les 18:00',
            excerpt: 'Dissabte 5 de desembre de 2026 a les 18:00 l\'Artystyczne Stowarzyszenie Polska convida la comunitat polonesa de Barcelona i de tot Catalunya a Kinépolis Barcelona Splau a una projecció especial de la nova adaptació de «Lalka» (La nina) de Bolesław Prus, en polonès amb subtítols en anglès.',
            sections: [
                {
                    p: [
                        '**Barcelona, apunteu la data!** **Dissabte 5 de desembre de 2026, a les 18:00**, l\'**Artystyczne Stowarzyszenie Polska** (Associació Artística Polska) convida la comunitat polonesa de Barcelona i de tot Catalunya a una **projecció especial de «Lalka» (La nina)**, la nova i èpica adaptació de la novel·la de culte de **Bolesław Prus**.',
                        'A la gran pantalla hi veurem, entre d\'altres, **Marcin Dorociński**, **Kamila Urzędowska** i **Marek Kondrat**. La pel·lícula es projectarà **en versió original polonesa amb subtítols en anglès**, així que podeu portar també els vostres amics catalans, espanyols i internacionals.',
                        '**Important:** la projecció l\'organitza l\'**Artystyczne Stowarzyszenie Polska**; WOŚP Barcelona no n\'és l\'organitzadora, simplement compartim la notícia amb molt de gust. Segur que una part dels nostres voluntaris serà a la sala, així que també és una bona ocasió per conèixer-nos.',
                    ],
                    highlight: { value: '5.12.2026 · 18:00', label: 'Kinépolis Barcelona Splau · versió polonesa amb subtítols en anglès' },
                },
                {
                    title: 'Quan i on?',
                    p: [
                        'La sessió comença **dissabte 5 de desembre a les 18:00** a **Kinépolis Barcelona Splau**, el cinema del centre comercial Splau a l\'Av. del Baix Llobregat (08940 Cornellà de Llobregat), just al costat de Barcelona. Hi veurem «Lalka», dirigida per **Maciej Kawalski**, en polonès amb subtítols en anglès.',
                        'Ho organitza l\'**Artystyczne Stowarzyszenie Polska**. Encara no hi ha informació sobre les entrades: l\'organitzador la publicarà aviat i nosaltres la compartirem de seguida a Facebook i aquí, a Notícies.',
                    ],
                    image: poster('Cartell de la pel·lícula «Lalka»: estrena a Barcelona el 5 de desembre de 2026 a les 18:00', 'Cartell de la projecció de «Lalka» a Barcelona: dissabte 5 de desembre de 2026, 18:00, Kinépolis Barcelona Splau.'),
                },
                {
                    title: 'Reserveu-vos el vespre',
                    p: [
                        'Un dissabte al vespre a principis de desembre és el moment ideal per trobar-se entre polonesos abans de les festes. Veniu amb família, amics i coneguts: no és només una projecció, sinó també una ocasió per conèixer-se i xerrar.',
                        '**Passeu la notícia als vostres amics** de Barcelona i Catalunya: com més serem, millor!',
                    ],
                    cards: postCard('Esdeveniment · Facebook', 'Dissabte 5 de desembre de 2026, 18:00, Kinépolis Barcelona Splau. Comparteix la publicació!', 'Veure la publicació a Facebook'),
                },
                {
                    title: '«Lalka», la novel·la que coneix tot polonès',
                    p: [
                        '**«Lalka»** és una de les novel·les més importants de la literatura polonesa. Bolesław Prus (pseudònim d\'Aleksander Głowacki) la va publicar per entregues al diari de Varsòvia «Kurier Codzienny» entre **1887 i 1889**, i en format de llibre va aparèixer el **1890**.',
                        'L\'acció passa a **Varsòvia** a finals de la dècada de 1870. Segueix **Stanisław Wokulski**, un comerciant que va passar de modest dependent a home adinerat, i el seu amor obsessiu per l\'aristòcrata **Izabela Łęcka**. Una altra veu essencial és el diari del vell dependent **Ignacy Rzecki**. És una història sobre l\'amor, l\'ambició, les divisions socials i el xoc entre romanticisme i positivisme.',
                    ],
                    image: withCaption(IMG.prus, 'Bolesław Prus, autor de «Lalka» (fotografia de cap al 1905).'),
                },
                {
                    title: 'La Varsòvia de Wokulski a la gran pantalla',
                    p: [
                        'La botiga de Wokulski era a **Krakowskie Przedmieście**, i tota la novel·la és un retrat molt viu de la Varsòvia del segle XIX: els seus salons, edificis, carrers i el barri de ribera de Powiśle. No és estrany que el cinema i la televisió hagin tornat a «Lalka» moltes vegades, com la pel·lícula de **Wojciech Jerzy Has** del 1968 i la sèrie de **Ryszard Ber** del 1977.',
                        'La nova adaptació és una ocasió per tornar a aquesta història o descobrir-la per primera vegada. I veure-la junts, entre polonesos, a milers de quilòmetres de Varsòvia, tindrà un gust molt especial.',
                    ],
                    image: withCaption(IMG.krakowskiePrzedmiescie, 'Krakowskie Przedmieście a Varsòvia, el carrer on Prus va situar la botiga de Wokulski.'),
                },
                {
                    title: 'Per què venir?',
                    ul: [
                        '**Cinema polonès a Barcelona**: una ocasió poc habitual de veure una nova pel·lícula polonesa en pantalla gran i en versió original.',
                        '**Trobada de la comunitat**: un vespre amb polonesos de Barcelona i de tot Catalunya.',
                        '**Per a família i amics**: gràcies als subtítols en anglès, també la gaudiran els qui no parlen polonès.',
                        '**Un clàssic renovat**: un gran repartiment i una història que molts recorden de l\'escola, en una nova versió per al cinema.',
                    ],
                    image: withCaption(IMG.lalkaWydanie, 'Portada de la primera edició en llibre de «Lalka» (1890).'),
                },
                {
                    title: 'Ens veiem al cinema!',
                    p: [
                        'L\'organitzador publicarà aviat la informació sobre les entrades; us avisarem quan estigui disponible. Seguiu la nostra pàgina de Facebook i visiteu Notícies. **Dissabte 5 de desembre, 18:00, Kinépolis Barcelona Splau.** Una part del nostre equip també hi serà: ens hi veiem!',
                    ],
                    cta: { label: 'Veure els nostres esdeveniments', href: '/events' },
                },
            ],
        },
    },
};
