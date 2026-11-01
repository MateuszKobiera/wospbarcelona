import type { NewsSource } from './_shared';

const logo = '/images/sponsors/delicias_by_bea_2.avif';
const stand = '/images/34-final/1839e07d-8956-4617-b3b5-02805c21b81d.jpg';
const finaleStand = '/images/34-final/IMG_7449.JPG';

const card = (kind: string, text: string, linkLabel: string) => [
    { name: 'Delicias by Bea', logo, kind, text, url: 'https://www.deliciasbybea.com', linkLabel },
];

export const deliciasCukiernia: NewsSource = {
    slug: 'delicias-by-bea-otwiera-cukiernie-w-les-corts',
    date: '2026-03-16',
    coverImage: stand,
    tags: ['Sponsorzy', 'DeliciasByBea', 'PolskieFirmy', 'Barcelona', 'LesCorts'],
    sources: [
        { label: 'deliciasbybea.com', url: 'https://www.deliciasbybea.com' },
        { label: 'Instagram @delicias_by_bea', url: 'https://instagram.com/delicias_by_bea' },
    ],
    content: {
        pl: {
            title: 'Delicias by Bea otwiera własną cukiernię! Polski sernik i szarlotka w Les Corts',
            excerpt: 'Nasza sponsorka Bea Michalak spełniła marzenie: od marca 2026 roku Delicias by Bea ma własną cukiernię przy Travessera de les Corts 303. Codziennie rano świeże wypieki, witryna pełna polskich klasyków i torty na zamówienie. Gratulujemy!',
            sections: [
                {
                    p: [
                        'Mamy wspaniałą wiadomość! **Delicias by Bea** – polska cukiernia i sponsorka 34. Finału WOŚP w Barcelonie – otworzyła **własny lokal**. Od **marca 2026 roku** pracownia i cukiernia Bei Michalak działają w dzielnicy **Les Corts**, przy **Travessera de les Corts 303**.',
                        'Wraz z otwarciem cukiernia ma też nową, odświeżoną stronę internetową – **deliciasbybea.com** – dostępną w czterech językach: po katalońsku, hiszpańsku, polsku i angielsku. Można tam zobaczyć ofertę, galerię i złożyć zamówienie.',
                    ],
                    cards: card('Cukiernia · sponsor WOŚP Barcelona', 'Travessera de les Corts 303, 08029 Barcelona. Tradycyjne polskie wypieki i współczesne desery, pieczone każdego ranka.', 'deliciasbybea.com'),
                },
                {
                    title: 'Od Namysłowa przez Berlin do Barcelony',
                    p: [
                        'Historia Bei zaczyna się w polskiej kuchni – w **Namysłowie**, gdzie jako dziewczynka piekła razem z mamą. Swoją technikę doskonaliła w **Berlinie**, u uznanych cukierników, a potem przeprowadziła się do Barcelony. Od **2023 roku** prowadzi markę Delicias by Bea.',
                        'Teraz, z własną pracownią w Les Corts, Bea podkreśla, że dzielnica stała się dla niej domem. Najważniejszy jest dla niej bliski kontakt z klientami – sąsiadami, którzy wpadają się przywitać, zapytać, na jaką okazję jest dzisiejsze ciasto, i wracają po więcej.',
                    ],
                },
                {
                    title: '„Każdy poranek zaczyna się tutaj”',
                    p: [
                        'Filozofia cukierni jest prosta: wszystko pieczone jest na miejscu, każdego ranka, **bez półproduktów**. Bea używa naturalnego masła i nabiału bez dodatków, sezonowych owoców od lokalnych dostawców, jaj z wolnego wybiegu i mąki dobrej jakości. Zamówienia są przygotowywane na konkretny dzień, a nie wyjmowane z zamrażarki – dlatego warto składać je z wyprzedzeniem.',
                    ],
                    image: { src: stand, alt: 'Polskie ciasta na stoisku podczas Finału WOŚP w Barcelonie', caption: 'Polskie wypieki na stoisku podczas 34. Finału WOŚP w Barcelonie.' },
                },
                {
                    title: 'Co znajdziesz w witrynie?',
                    ul: [
                        '**Polskie klasyki** – **sernik**, **szarlotka** i **drożdżówki**, czyli smaki, za którymi tęskni każdy Polak na emigracji.',
                        '**Torty** – sernik, szarlotka, sernik w stylu „La Viña” oraz torty okolicznościowe na wesela, komunie i urodziny.',
                        '**Słodycze i desserty z witryny** – od 4,50 €, zmieniające się z sezonem. Najlepiej zapytać, co jest dziś.',
                        '**Pudełka mieszane** – do zabrania albo na prezent.',
                        '**Specjały sezonowe** – np. coca de Sant Joan na katalońską noc świętojańską.',
                        '**Catering i słodkie stoły** – na wesela, urodziny, spotkania i wydarzenia firmowe, z ofertą przygotowaną indywidualnie.',
                    ],
                },
                {
                    title: 'Godziny otwarcia',
                    ul: [
                        'poniedziałek, wtorek, czwartek, piątek: **8:30–15:00**',
                        'środa: **zamknięte**',
                        'sobota: **10:00–14:00**',
                        'niedziela: **11:00–14:00**',
                    ],
                    p: [
                        'Zamówienia można złożyć przez formularz na stronie, WhatsApp (+34 722 117 695) lub e-mail. Cukiernia ma ocenę **4,9 ★** w Google. Ważna informacja dla przyszłych mam: Bea używa produktów pasteryzowanych, więc jej słodycze są bezpieczne w ciąży. W pracowni używa się glutenu i orzechów, więc ślady mogą pojawić się w każdym produkcie.',
                    ],
                },
                {
                    title: 'Słodko gramy razem',
                    p: [
                        'Delicias by Bea była sponsorem 34. Finału WOŚP w Barcelonie – i bardzo się cieszymy, że możemy teraz pogratulować Bei kolejnego sukcesu. Otwarcie własnej cukierni to ogromny krok i dowód, że polskie rzemiosło świetnie radzi sobie w Barcelonie – także wśród katalońskich sąsiadów.',
                        'Gratulujemy i życzymy pełnej witryny i kolejek przed drzwiami! A Was zachęcamy: wpadnijcie do Les Corts na sernik, zamówcie u Bei tort na najbliższą okazję i zostawcie jej opinię w internecie. Wspierając polskie firmy, wspieracie też Orkiestrę.',
                    ],
                    image: { src: finaleStand, alt: 'Wolontariusze przy stoisku na 34. Finale WOŚP w Barcelonie', caption: 'Stoisko z wypiekami podczas 34. Finału WOŚP w Barcelonie.' },
                    cta: { label: 'Zobacz wszystkich sponsorów 34. Finału', href: '/sponsors/34-final' },
                },
            ],
        },
        en: {
            title: 'Delicias by Bea opens its own patisserie! Polish cheesecake and apple cake in Les Corts',
            excerpt: 'Our sponsor Bea Michalak has made her dream come true: since March 2026 Delicias by Bea has its own patisserie at Travessera de les Corts 303. Fresh baking every morning, a display full of Polish classics and cakes to order. Congratulations!',
            sections: [
                {
                    p: [
                        'We have wonderful news! **Delicias by Bea** – the Polish patisserie and sponsor of the 34th WOŚP Finale in Barcelona – has opened **its own shop**. Since **March 2026**, Bea Michalak\'s workshop and patisserie has been in **Les Corts**, at **Travessera de les Corts 303**.',
                        'Along with the opening, the patisserie has a new, refreshed website – **deliciasbybea.com** – in four languages: Catalan, Spanish, Polish and English. You can see the range and gallery there and place orders.',
                    ],
                    cards: card('Patisserie · WOŚP Barcelona sponsor', 'Travessera de les Corts 303, 08029 Barcelona. Traditional Polish baking and modern desserts, baked every morning.', 'deliciasbybea.com'),
                },
                {
                    title: 'From Namysłów via Berlin to Barcelona',
                    p: [
                        'Bea\'s story begins in a Polish kitchen – in **Namysłów**, where as a girl she baked with her mother. She refined her technique in **Berlin** with well-known pastry chefs, then moved to Barcelona. She has run Delicias by Bea since **2023**.',
                        'Now, with her own workshop in Les Corts, Bea says the neighbourhood has become home. What matters most to her is close contact with customers – neighbours who drop by to say hello, ask what today\'s cake is for, and come back for more.',
                    ],
                },
                {
                    title: '"Every morning starts here"',
                    p: ['The philosophy is simple: everything is baked on site, every morning, **with no semi-finished products**. Bea uses natural butter and dairy without additives, seasonal fruit from local suppliers, free-range eggs and quality flour. Orders are made for a specific day rather than taken from a freezer – so it is worth ordering in advance.'],
                    image: { src: stand, alt: 'Polish cakes on a stand at the WOŚP Finale in Barcelona', caption: 'Polish baking at a stand during the 34th WOŚP Finale in Barcelona.' },
                },
                {
                    title: 'What\'s in the display?',
                    ul: [
                        '**Polish classics** – **sernik** cheesecake, **szarlotka** apple cake and **drożdżówki** sweet buns – the flavours every Pole abroad misses.',
                        '**Cakes** – sernik, szarlotka, a "La Viña"-style cheesecake and celebration cakes for weddings, communions and birthdays.',
                        '**Sweets and desserts** – from €4.50, changing with the season. Ask what\'s on today.',
                        '**Mixed boxes** – to take away or give as a gift.',
                        '**Seasonal specialities** – e.g. coca de Sant Joan for the Catalan Midsummer night.',
                        '**Catering and dessert tables** – for weddings, birthdays, meetings and corporate events, with a tailored offer.',
                    ],
                },
                {
                    title: 'Opening hours',
                    ul: [
                        'Monday, Tuesday, Thursday, Friday: **8:30–15:00**',
                        'Wednesday: **closed**',
                        'Saturday: **10:00–14:00**',
                        'Sunday: **11:00–14:00**',
                    ],
                    p: ['Orders can be placed via the website form, WhatsApp (+34 722 117 695) or email. The patisserie is rated **4.9 ★** on Google. Good to know for mums-to-be: Bea uses pasteurised products, so her sweets are safe during pregnancy. Gluten and nuts are handled in the workshop, so traces may be present in any product.'],
                },
                {
                    title: 'Playing sweetly together',
                    p: [
                        'Delicias by Bea was a sponsor of the 34th WOŚP Finale in Barcelona – and we are delighted to congratulate Bea on another success. Opening her own patisserie is a huge step and proof that Polish craft does great in Barcelona – including among Catalan neighbours.',
                        'Congratulations – we wish her a full display and queues at the door! And to you: pop into Les Corts for a slice of sernik, order a cake from Bea for your next celebration and leave her a review online. By supporting Polish businesses, you also support the Orchestra.',
                    ],
                    image: { src: finaleStand, alt: 'Volunteers at a stand at the 34th WOŚP Finale in Barcelona', caption: 'A baking stand at the 34th WOŚP Finale in Barcelona.' },
                    cta: { label: 'See all sponsors of the 34th Finale', href: '/sponsors/34-final' },
                },
            ],
        },
        es: {
            title: '¡Delicias by Bea abre su propia pastelería! Sernik y szarlotka polacos en Les Corts',
            excerpt: 'Nuestra patrocinadora Bea Michalak ha cumplido su sueño: desde marzo de 2026 Delicias by Bea tiene su propia pastelería en la Travessera de les Corts 303. Repostería recién hecha cada mañana, una vitrina llena de clásicos polacos y tartas por encargo. ¡Enhorabuena!',
            sections: [
                {
                    p: [
                        '¡Tenemos una noticia estupenda! **Delicias by Bea**, la pastelería polaca patrocinadora del 34.º Final de WOŚP en Barcelona, ha abierto **su propio local**. Desde **marzo de 2026**, el obrador y la pastelería de Bea Michalak están en **Les Corts**, en la **Travessera de les Corts 303**.',
                        'Con la apertura, la pastelería estrena también una web renovada, **deliciasbybea.com**, en cuatro idiomas: catalán, castellano, polaco e inglés. Allí se puede ver la oferta y la galería y hacer encargos.',
                    ],
                    cards: card('Pastelería · patrocinadora de WOŚP Barcelona', 'Travessera de les Corts 303, 08029 Barcelona. Repostería tradicional polaca y postres actuales, horneados cada mañana.', 'deliciasbybea.com'),
                },
                {
                    title: 'De Namysłów a Barcelona, pasando por Berlín',
                    p: [
                        'La historia de Bea empieza en una cocina polaca, en **Namysłów**, donde de niña horneaba con su madre. Perfeccionó su técnica en **Berlín** con reconocidos pasteleros y después se trasladó a Barcelona. Lleva Delicias by Bea desde **2023**.',
                        'Ahora, con su propio obrador en Les Corts, Bea dice que el barrio se ha convertido en su casa. Lo que más valora es el trato cercano con los clientes: vecinos que pasan a saludar, preguntan para qué es el dulce de hoy y vuelven.',
                    ],
                },
                {
                    title: '«Cada mañana empieza aquí»',
                    p: ['La filosofía es sencilla: todo se hornea allí mismo, cada mañana, **sin productos semielaborados**. Bea usa mantequilla y lácteos naturales sin aditivos, fruta de temporada de proveedores de proximidad, huevos camperos y harinas de calidad. Los encargos se preparan para un día concreto, no salen del congelador, así que conviene pedirlos con antelación.'],
                    image: { src: stand, alt: 'Pasteles polacos en un puesto del Final de WOŚP en Barcelona', caption: 'Repostería polaca en un puesto durante el 34.º Final de WOŚP en Barcelona.' },
                },
                {
                    title: '¿Qué hay en la vitrina?',
                    ul: [
                        '**Clásicos polacos**: **sernik** (tarta de queso), **szarlotka** (tarta de manzana) y **drożdżówki** (bollos dulces), los sabores que echa de menos cualquier polaco fuera de casa.',
                        '**Tartas**: sernik, szarlotka, tarta de queso estilo «La Viña» y tartas de ceremonia para bodas, comuniones y cumpleaños.',
                        '**Dulces y postres de vitrina**: desde 4,50 €, cambian con la temporada. Pregunta por los del día.',
                        '**Cajas variadas**: para llevar o regalar.',
                        '**Especialidades de temporada**, como la coca de Sant Joan.',
                        '**Catering y mesas dulces** para bodas, cumpleaños, reuniones y eventos de empresa, con presupuesto a medida.',
                    ],
                },
                {
                    title: 'Horario',
                    ul: [
                        'lunes, martes, jueves y viernes: **8:30-15:00**',
                        'miércoles: **cerrado**',
                        'sábado: **10:00-14:00**',
                        'domingo: **11:00-14:00**',
                    ],
                    p: ['Los encargos se hacen por el formulario de la web, WhatsApp (+34 722 117 695) o correo electrónico. La pastelería tiene una valoración de **4,9 ★** en Google. Dato útil para futuras mamás: Bea usa productos pasteurizados, así que sus dulces son aptos durante el embarazo. En el obrador se trabaja con gluten y frutos secos, por lo que puede haber trazas en cualquier producto.'],
                },
                {
                    title: 'Tocamos juntos, con dulzura',
                    p: [
                        'Delicias by Bea fue patrocinadora del 34.º Final de WOŚP en Barcelona, y nos alegra mucho poder felicitar a Bea por este nuevo éxito. Abrir su propia pastelería es un gran paso y una prueba de que la artesanía polaca funciona muy bien en Barcelona, también entre los vecinos catalanes.',
                        '¡Enhorabuena! Le deseamos una vitrina llena y colas en la puerta. Y a vosotros os animamos a pasar por Les Corts a por un trozo de sernik, encargarle a Bea la tarta de vuestra próxima celebración y dejarle una reseña en internet. Apoyando a los negocios polacos, apoyáis también a la Orquesta.',
                    ],
                    image: { src: finaleStand, alt: 'Voluntarios en un puesto del 34.º Final de WOŚP en Barcelona', caption: 'Un puesto de repostería en el 34.º Final de WOŚP en Barcelona.' },
                    cta: { label: 'Ver todos los patrocinadores del 34.º Final', href: '/sponsors/34-final' },
                },
            ],
        },
        ca: {
            title: 'Delicias by Bea obre la seva pròpia pastisseria! Sernik i szarlotka polonesos a Les Corts',
            excerpt: 'La nostra patrocinadora Bea Michalak ha complert el seu somni: des del març de 2026 Delicias by Bea té la seva pròpia pastisseria a la Travessera de les Corts 303. Rebosteria acabada de fer cada matí, un aparador ple de clàssics polonesos i pastissos per encàrrec. Felicitats!',
            sections: [
                {
                    p: [
                        'Tenim una notícia fantàstica! **Delicias by Bea**, la pastisseria polonesa patrocinadora del 34è Final de WOŚP a Barcelona, ha obert **el seu propi local**. Des del **març de 2026**, l\'obrador i la pastisseria de la Bea Michalak són a **Les Corts**, a la **Travessera de les Corts 303**.',
                        'Amb l\'obertura, la pastisseria estrena també un web renovat, **deliciasbybea.com**, en quatre idiomes: català, castellà, polonès i anglès. S\'hi pot veure l\'oferta i la galeria i fer encàrrecs.',
                    ],
                    cards: card('Pastisseria · patrocinadora de WOŚP Barcelona', 'Travessera de les Corts 303, 08029 Barcelona. Rebosteria tradicional polonesa i postres actuals, fets cada matí.', 'deliciasbybea.com'),
                },
                {
                    title: 'De Namysłów a Barcelona, passant per Berlín',
                    p: [
                        'La història de la Bea comença en una cuina polonesa, a **Namysłów**, on de petita fornejava amb la seva mare. Va perfeccionar la tècnica a **Berlín** amb pastissers reconeguts i després es va traslladar a Barcelona. Porta Delicias by Bea des del **2023**.',
                        'Ara, amb el seu propi obrador a Les Corts, la Bea diu que el barri s\'ha convertit en casa seva. El que més valora és el tracte proper amb els clients: veïns que passen a saludar, pregunten per a què és el dolç d\'avui i hi tornen.',
                    ],
                },
                {
                    title: '«Cada matí comença aquí»',
                    p: ['La filosofia és senzilla: tot es fa allà mateix, cada matí, **sense productes semielaborats**. La Bea fa servir mantega i làctics naturals sense additius, fruita de temporada de proveïdors de proximitat, ous de gallines en llibertat i farines de qualitat. Els encàrrecs es preparen per a un dia concret, no surten del congelador, així que convé demanar-los amb antelació.'],
                    image: { src: stand, alt: 'Pastissos polonesos en una parada del Final de WOŚP a Barcelona', caption: 'Rebosteria polonesa en una parada durant el 34è Final de WOŚP a Barcelona.' },
                },
                {
                    title: 'Què hi ha a l\'aparador?',
                    ul: [
                        '**Clàssics polonesos**: **sernik** (pastís de formatge), **szarlotka** (pastís de poma) i **drożdżówki** (brioixos), els sabors que troba a faltar qualsevol polonès lluny de casa.',
                        '**Pastissos**: sernik, szarlotka, pastís de formatge estil «La Viña» i pastissos de cerimònia per a casaments, comunions i aniversaris.',
                        '**Dolços i postres d\'aparador**: des de 4,50 €, canvien amb la temporada. Pregunta pels del dia.',
                        '**Capses variades**: per emportar o regalar.',
                        '**Especialitats de temporada**, com la coca de Sant Joan.',
                        '**Càtering i taules dolces** per a casaments, aniversaris, reunions i esdeveniments d\'empresa, amb pressupost a mida.',
                    ],
                },
                {
                    title: 'Horari',
                    ul: [
                        'dilluns, dimarts, dijous i divendres: **8:30-15:00**',
                        'dimecres: **tancat**',
                        'dissabte: **10:00-14:00**',
                        'diumenge: **11:00-14:00**',
                    ],
                    p: ['Els encàrrecs es fan pel formulari del web, WhatsApp (+34 722 117 695) o correu electrònic. La pastisseria té una valoració de **4,9 ★** a Google. Dada útil per a futures mares: la Bea fa servir productes pasteuritzats, així que els seus dolços són aptes durant l\'embaràs. A l\'obrador es treballa amb gluten i fruits secs, per la qual cosa hi pot haver traces en qualsevol producte.'],
                },
                {
                    title: 'Toquem junts, amb dolçor',
                    p: [
                        'Delicias by Bea va ser patrocinadora del 34è Final de WOŚP a Barcelona, i ens alegra molt poder felicitar la Bea per aquest nou èxit. Obrir la seva pròpia pastisseria és un gran pas i una prova que l\'artesania polonesa funciona molt bé a Barcelona, també entre els veïns catalans.',
                        'Felicitats! Li desitgem un aparador ple i cues a la porta. I a vosaltres us animem a passar per Les Corts a buscar un tros de sernik, encarregar a la Bea el pastís de la vostra propera celebració i deixar-li una ressenya a internet. Donant suport als negocis polonesos, doneu suport també a l\'Orquestra.',
                    ],
                    image: { src: finaleStand, alt: 'Voluntaris en una parada del 34è Final de WOŚP a Barcelona', caption: 'Una parada de rebosteria al 34è Final de WOŚP a Barcelona.' },
                    cta: { label: 'Veure tots els patrocinadors del 34è Final', href: '/sponsors/34-final' },
                },
            ],
        },
    },
};
