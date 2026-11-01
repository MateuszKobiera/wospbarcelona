import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const g1 = '/images/grafiki/30_34FinalWOSP2026_grafika_podglad.jpg';
const g2 = '/images/grafiki/33A_34FinalWOSP2026_grafika_podglad.jpg';

export const cel34Finalu: NewsSource = {
    slug: 'znamy-cel-34-finalu-wosp-zdrowe-brzuszki-naszych-dzieci',
    date: '2025-10-22',
    coverImage: g1,
    tags: ['34FinałWOŚP', 'Gastroenterologia', 'ZdroweBrzuszki', 'WOŚPBarcelona'],
    sources: [
        { label: 'TVN24', url: 'https://tvn24.pl/polska/wosp-2026-jurek-owsiak-oglosil-cel-34-finalu-wosp-st8710730' },
        { label: 'PAP', url: 'https://www.pap.pl/aktualnosci/celem-34-finalu-wosp-leczenie-chorob-przewodu-pokarmowego-u-dzieci' },
        { label: 'OKO.press', url: 'https://oko.press/przed-nami-34-final-wosp-oko-gra' },
    ],
    content: {
        pl: {
            title: 'Znamy cel 34. Finału WOŚP: „Zdrowe brzuszki naszych dzieci”',
            excerpt: '21 października 2025 roku Jerzy Owsiak ogłosił cel 34. Finału: diagnostyka i leczenie chorób przewodu pokarmowego u dzieci. Wyjaśniamy, dlaczego to tak ważne, jaki sprzęt kupi Fundacja i jak przygotowujemy się do Finału w Barcelonie.',
            sections: [
                {
                    p: [
                        'We wtorek **21 października 2025 roku** Fundacja WOŚP ogłosiła cel 34. Finału. Tym razem Orkiestra – po raz pierwszy jako głównym celem Finału – zagra dla **gastroenterologii dziecięcej**, czyli diagnostyki i leczenia chorób przewodu pokarmowego u najmłodszych. Hasło Finału brzmi: **„Zdrowe brzuszki naszych dzieci”**.',
                        '34. Finał zagra w niedzielę **25 stycznia 2026 roku** – w całej Polsce i w dziesiątkach sztabów za granicą, w tym oczywiście w Barcelonie.',
                    ],
                    image: { src: g1, alt: 'Grafika 34. Finału WOŚP', caption: 'Oficjalna grafika 34. Finału WOŚP.' },
                },
                {
                    title: 'Dlaczego gastroenterologia?',
                    p: [
                        'Jak mówił Jerzy Owsiak, pomocy gastroenterologów może w Polsce potrzebować nawet **1,2–1,5 miliona dzieci**. To ogromna liczba – a w całym kraju działa tylko **16 klinik gastroenterologii dziecięcej**. Wiele dzieci czeka na diagnozę zbyt długo, a nowoczesny sprzęt endoskopowy jest drogi i szybko się zużywa.',
                        'Choroby układu pokarmowego u dzieci to bardzo szeroka grupa schorzeń. Należą do nich m.in.:',
                    ],
                    ul: [
                        '**nieswoiste zapalenia jelit** – choroba Leśniowskiego-Crohna i wrzodziejące zapalenie jelita grubego, które coraz częściej diagnozuje się u dzieci i nastolatków,',
                        '**celiakia** i inne choroby związane z nietolerancją pokarmów,',
                        '**choroby wątroby i trzustki**,',
                        '**krwawienia z przewodu pokarmowego**,',
                        '**połknięte ciała obce** – np. baterie guzikowe czy magnesy, które wymagają pilnego usunięcia endoskopem,',
                        '**wady wrodzone** przewodu pokarmowego.',
                    ],
                },
                {
                    title: 'Jaki sprzęt kupi Fundacja?',
                    p: [
                        'Wiceprezes Fundacji WOŚP, kardiochirurg **prof. Bohdan Maruszewski**, zapowiedział, że pieniądze z 34. Finału zostaną przeznaczone przede wszystkim na **sprzęt endoskopowy** do diagnostyki i małoinwazyjnego leczenia wewnątrz przewodu pokarmowego – w tym na urządzenia umożliwiające zabiegi, przy których mogą pomagać roboty.',
                        'Endoskopia pozwala lekarzom zajrzeć do wnętrza przełyku, żołądka czy jelit bez otwierania brzucha. U dzieci ma to ogromne znaczenie: badanie jest mniej obciążające, a wiele zabiegów (np. usunięcie polipa czy ciała obcego, zatamowanie krwawienia) można wykonać od razu, bez operacji. Sprzęt dla dzieci musi być jednak mniejszy i bardziej precyzyjny niż ten dla dorosłych.',
                        'Owsiak podkreślał, że sprzęt trafi nie tylko do klinik, ale też do kolejnych oddziałów, które leczą dzieci z tymi chorobami.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, prezes Fundacji WOŚP.'),
                },
                {
                    title: 'Co oznacza „Zdrowe brzuszki naszych dzieci”?',
                    p: [
                        'Ból brzucha to jedna z najczęstszych dolegliwości, z którymi rodzice przychodzą z dzieckiem do lekarza. W większości przypadków to nic poważnego – ale czasem za bólem kryje się choroba, która nieleczona może na lata odebrać dziecku normalne dzieciństwo: możliwość jedzenia z rówieśnikami, chodzenia do szkoły, uprawiania sportu.',
                        'Szybka i dokładna diagnoza to klucz. Dlatego tak ważne jest, by w polskich szpitalach było więcej nowoczesnego sprzętu i by trafił on także poza największe ośrodki.',
                    ],
                },
                {
                    title: 'Barcelona się przygotowuje!',
                    p: [
                        'Sztab WOŚP Barcelona już rozpoczął przygotowania do 34. Finału. Szukamy:',
                    ],
                    ul: [
                        '**wolontariuszy** – do kwestowania z puszkami, pomocy przy stoiskach, scenie i zajęciach dla dzieci,',
                        '**sponsorów i partnerów** – firm, które chcą wesprzeć organizację Finału i pokazać się polskiej społeczności w Barcelonie,',
                        '**artystów** – muzyków, tancerzy, animatorów,',
                        '**przedmiotów na licytację** – wszystko, od rękodzieła po vouchery i doświadczenia.',
                    ],
                    image: { src: g2, alt: 'Grafika 34. Finału WOŚP', caption: 'Materiały graficzne 34. Finału przygotowane przez Fundację WOŚP.' },
                },
                {
                    p: [
                        'Jeśli chcesz pomóc – napisz do nas przez stronę **Kontakt**. Szczegóły naszego Finału (miejsce, program, godziny) ogłosimy wkrótce na stronie i w mediach społecznościowych. Gramy razem dla zdrowych brzuszków!',
                    ],
                },
            ],
        },
        en: {
            title: 'The goal of the 34th WOŚP Finale is known: "Healthy tummies for our kids"',
            excerpt: 'On 21 October 2025 Jerzy Owsiak announced the goal of the 34th Finale: diagnosis and treatment of digestive diseases in children. We explain why it matters, what equipment the Foundation will buy and how we are preparing for the Finale in Barcelona.',
            sections: [
                {
                    p: [
                        'On Tuesday, **21 October 2025**, the WOŚP Foundation announced the goal of the 34th Finale. This time the Orchestra – for the first time as the main goal of a Finale – will play for **paediatric gastroenterology**, i.e. diagnosing and treating digestive diseases in children. The slogan is **"Healthy tummies for our kids"**.',
                        'The 34th Finale will take place on Sunday, **25 January 2026** – all over Poland and in dozens of staffs abroad, including, of course, Barcelona.',
                    ],
                    image: { src: g1, alt: '34th WOŚP Finale graphic', caption: 'Official graphic of the 34th WOŚP Finale.' },
                },
                {
                    title: 'Why gastroenterology?',
                    p: [
                        'According to Jerzy Owsiak, as many as **1.2–1.5 million children** in Poland may need the help of gastroenterologists. That is a huge number – and there are only **16 paediatric gastroenterology clinics** in the whole country. Many children wait too long for a diagnosis, and modern endoscopic equipment is expensive and wears out quickly.',
                        'Digestive diseases in children are a very broad group of conditions, including:',
                    ],
                    ul: [
                        '**inflammatory bowel disease** – Crohn\'s disease and ulcerative colitis, increasingly diagnosed in children and teenagers,',
                        '**coeliac disease** and other food intolerance conditions,',
                        '**liver and pancreatic diseases**,',
                        '**gastrointestinal bleeding**,',
                        '**swallowed foreign bodies** – e.g. button batteries or magnets that must be urgently removed with an endoscope,',
                        '**congenital defects** of the digestive tract.',
                    ],
                },
                {
                    title: 'What equipment will the Foundation buy?',
                    p: [
                        'The Foundation\'s vice-president, cardiac surgeon **Prof. Bohdan Maruszewski**, said the money from the 34th Finale will go mainly to **endoscopic equipment** for diagnosis and minimally invasive treatment inside the digestive tract – including devices for procedures that may be assisted by robots.',
                        'Endoscopy lets doctors look inside the oesophagus, stomach or intestines without opening the abdomen. For children this matters enormously: the examination is less burdensome, and many procedures (e.g. removing a polyp or a foreign body, stopping bleeding) can be done straight away, without surgery. But equipment for children must be smaller and more precise than for adults.',
                        'Owsiak stressed that the equipment will go not only to clinics but also to other wards treating children with these diseases.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, president of the WOŚP Foundation.'),
                },
                {
                    title: 'What does "Healthy tummies for our kids" mean?',
                    p: [
                        'Tummy ache is one of the most common complaints parents bring to the doctor. Usually it is nothing serious – but sometimes it hides a disease that, untreated, can take away a normal childhood for years: eating with friends, going to school, doing sport.',
                        'Quick and accurate diagnosis is key. That is why it matters so much that Polish hospitals have more modern equipment – and that it reaches beyond the biggest centres.',
                    ],
                },
                {
                    title: 'Barcelona is getting ready!',
                    p: ['WOŚP Barcelona has already started preparing for the 34th Finale. We are looking for:'],
                    ul: [
                        '**volunteers** – to collect with boxes and help at stands, on stage and with children\'s activities,',
                        '**sponsors and partners** – companies that want to support the Finale and reach the Polish community in Barcelona,',
                        '**artists** – musicians, dancers, entertainers,',
                        '**auction items** – anything from handicrafts to vouchers and experiences.',
                    ],
                    image: { src: g2, alt: '34th WOŚP Finale graphic', caption: '34th Finale graphics prepared by the WOŚP Foundation.' },
                },
                { p: ['If you want to help, write to us via the **Contact** page. We will announce the details of our Finale (venue, programme, times) soon on the website and social media. Let\'s play together for healthy tummies!'] },
            ],
        },
        es: {
            title: 'Ya conocemos el objetivo del 34.º Final de WOŚP: «Barriguitas sanas para nuestros niños»',
            excerpt: 'El 21 de octubre de 2025 Jerzy Owsiak anunció el objetivo del 34.º Final: el diagnóstico y tratamiento de enfermedades digestivas en niños. Te explicamos por qué es tan importante, qué equipos comprará la Fundación y cómo nos preparamos para el Final en Barcelona.',
            sections: [
                {
                    p: [
                        'El martes **21 de octubre de 2025**, la Fundación WOŚP anunció el objetivo del 34.º Final. Esta vez la Orquesta, por primera vez como objetivo principal de un Final, tocará para la **gastroenterología pediátrica**, es decir, el diagnóstico y tratamiento de enfermedades del aparato digestivo en niños. El lema es **«Barriguitas sanas para nuestros niños»**.',
                        'El 34.º Final se celebrará el domingo **25 de enero de 2026** en toda Polonia y en decenas de equipos en el extranjero, incluido, por supuesto, Barcelona.',
                    ],
                    image: { src: g1, alt: 'Gráfico del 34.º Final de WOŚP', caption: 'Gráfico oficial del 34.º Final de WOŚP.' },
                },
                {
                    title: '¿Por qué la gastroenterología?',
                    p: [
                        'Según Jerzy Owsiak, hasta **1,2-1,5 millones de niños** en Polonia pueden necesitar la ayuda de gastroenterólogos. Es una cifra enorme, y en todo el país solo hay **16 clínicas de gastroenterología pediátrica**. Muchos niños esperan demasiado un diagnóstico, y los equipos endoscópicos modernos son caros y se desgastan rápido.',
                        'Las enfermedades digestivas infantiles son un grupo muy amplio. Entre ellas:',
                    ],
                    ul: [
                        '**enfermedad inflamatoria intestinal**: enfermedad de Crohn y colitis ulcerosa, cada vez más diagnosticadas en niños y adolescentes,',
                        '**celiaquía** y otras intolerancias alimentarias,',
                        '**enfermedades del hígado y del páncreas**,',
                        '**hemorragias digestivas**,',
                        '**cuerpos extraños ingeridos**, como pilas de botón o imanes, que deben extraerse con urgencia mediante endoscopia,',
                        '**malformaciones congénitas** del aparato digestivo.',
                    ],
                },
                {
                    title: '¿Qué equipos comprará la Fundación?',
                    p: [
                        'El vicepresidente de la Fundación, el cirujano cardíaco **Prof. Bohdan Maruszewski**, anunció que el dinero del 34.º Final se destinará sobre todo a **equipos endoscópicos** para el diagnóstico y el tratamiento mínimamente invasivo dentro del aparato digestivo, incluidos aparatos para intervenciones que pueden contar con ayuda robótica.',
                        'La endoscopia permite a los médicos ver el interior del esófago, el estómago o los intestinos sin abrir el abdomen. En los niños esto es muy importante: la prueba es menos agresiva y muchas intervenciones (extirpar un pólipo o un cuerpo extraño, detener una hemorragia) pueden hacerse en el momento, sin cirugía. Pero los equipos para niños deben ser más pequeños y precisos que los de adultos.',
                        'Owsiak subrayó que los equipos no llegarán solo a las clínicas, sino también a otros servicios que tratan a niños con estas enfermedades.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, presidente de la Fundación WOŚP.'),
                },
                {
                    title: '¿Qué significa «Barriguitas sanas para nuestros niños»?',
                    p: [
                        'El dolor de barriga es una de las molestias más frecuentes por las que los padres llevan a sus hijos al médico. Casi siempre no es nada grave, pero a veces esconde una enfermedad que, sin tratamiento, puede quitarle a un niño una infancia normal durante años: comer con sus amigos, ir al colegio, hacer deporte.',
                        'Un diagnóstico rápido y preciso es clave. Por eso es tan importante que los hospitales polacos tengan más equipos modernos y que lleguen también más allá de los grandes centros.',
                    ],
                },
                {
                    title: '¡Barcelona se prepara!',
                    p: ['WOŚP Barcelona ya ha empezado a preparar el 34.º Final. Buscamos:'],
                    ul: [
                        '**voluntarios** para recaudar con huchas y ayudar en los puestos, el escenario y las actividades infantiles,',
                        '**patrocinadores y colaboradores**: empresas que quieran apoyar el Final y llegar a la comunidad polaca de Barcelona,',
                        '**artistas**: músicos, bailarines, animadores,',
                        '**objetos para subastar**: desde artesanía hasta vales y experiencias.',
                    ],
                    image: { src: g2, alt: 'Gráfico del 34.º Final de WOŚP', caption: 'Materiales gráficos del 34.º Final preparados por la Fundación WOŚP.' },
                },
                { p: ['Si quieres ayudar, escríbenos desde la página de **Contacto**. Pronto anunciaremos los detalles de nuestro Final (lugar, programa, horarios) en la web y en redes sociales. ¡Toquemos juntos por unas barriguitas sanas!'] },
            ],
        },
        ca: {
            title: 'Ja coneixem l\'objectiu del 34è Final de WOŚP: «Panxetes sanes per als nostres infants»',
            excerpt: 'El 21 d\'octubre de 2025 Jerzy Owsiak va anunciar l\'objectiu del 34è Final: el diagnòstic i tractament de malalties digestives en infants. T\'expliquem per què és tan important, quins equips comprarà la Fundació i com ens preparem per al Final a Barcelona.',
            sections: [
                {
                    p: [
                        'Dimarts **21 d\'octubre de 2025**, la Fundació WOŚP va anunciar l\'objectiu del 34è Final. Aquesta vegada l\'Orquestra, per primer cop com a objectiu principal d\'un Final, tocarà per a la **gastroenterologia pediàtrica**, és a dir, el diagnòstic i tractament de malalties de l\'aparell digestiu en infants. El lema és **«Panxetes sanes per als nostres infants»**.',
                        'El 34è Final se celebrarà diumenge **25 de gener de 2026** a tot Polònia i en desenes d\'equips a l\'estranger, inclosa, és clar, Barcelona.',
                    ],
                    image: { src: g1, alt: 'Gràfic del 34è Final de WOŚP', caption: 'Gràfic oficial del 34è Final de WOŚP.' },
                },
                {
                    title: 'Per què la gastroenterologia?',
                    p: [
                        'Segons Jerzy Owsiak, fins a **1,2-1,5 milions d\'infants** a Polònia poden necessitar l\'ajuda de gastroenteròlegs. És una xifra enorme, i a tot el país només hi ha **16 clíniques de gastroenterologia pediàtrica**. Molts infants esperen massa un diagnòstic, i els equips endoscòpics moderns són cars i es desgasten ràpidament.',
                        'Les malalties digestives infantils són un grup molt ampli. Entre elles:',
                    ],
                    ul: [
                        '**malaltia inflamatòria intestinal**: malaltia de Crohn i colitis ulcerosa, cada vegada més diagnosticades en infants i adolescents,',
                        '**celiaquia** i altres intoleràncies alimentàries,',
                        '**malalties del fetge i del pàncrees**,',
                        '**hemorràgies digestives**,',
                        '**cossos estranys empassats**, com piles de botó o imants, que s\'han d\'extreure amb urgència per endoscòpia,',
                        '**malformacions congènites** de l\'aparell digestiu.',
                    ],
                },
                {
                    title: 'Quins equips comprarà la Fundació?',
                    p: [
                        'El vicepresident de la Fundació, el cirurgià cardíac **Prof. Bohdan Maruszewski**, va anunciar que els diners del 34è Final es destinaran sobretot a **equips endoscòpics** per al diagnòstic i el tractament mínimament invasiu dins de l\'aparell digestiu, inclosos aparells per a intervencions que poden comptar amb ajuda robòtica.',
                        'L\'endoscòpia permet als metges veure l\'interior de l\'esòfag, l\'estómac o els intestins sense obrir l\'abdomen. En els infants això és molt important: la prova és menys agressiva i moltes intervencions (extirpar un pòlip o un cos estrany, aturar una hemorràgia) es poden fer al moment, sense cirurgia. Però els equips per a infants han de ser més petits i precisos que els d\'adults.',
                        'Owsiak va subratllar que els equips no arribaran només a les clíniques, sinó també a altres serveis que tracten infants amb aquestes malalties.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, president de la Fundació WOŚP.'),
                },
                {
                    title: 'Què vol dir «Panxetes sanes per als nostres infants»?',
                    p: [
                        'El mal de panxa és una de les molèsties més freqüents per les quals els pares porten els fills al metge. Gairebé sempre no és res greu, però de vegades amaga una malaltia que, sense tractament, pot prendre a un infant una infància normal durant anys: menjar amb els amics, anar a l\'escola, fer esport.',
                        'Un diagnòstic ràpid i precís és clau. Per això és tan important que els hospitals polonesos tinguin més equips moderns i que arribin també més enllà dels grans centres.',
                    ],
                },
                {
                    title: 'Barcelona es prepara!',
                    p: ['WOŚP Barcelona ja ha començat a preparar el 34è Final. Busquem:'],
                    ul: [
                        '**voluntaris** per recaptar amb guardioles i ajudar a les parades, l\'escenari i les activitats infantils,',
                        '**patrocinadors i col·laboradors**: empreses que vulguin donar suport al Final i arribar a la comunitat polonesa de Barcelona,',
                        '**artistes**: músics, ballarins, animadors,',
                        '**objectes per subhastar**: des d\'artesania fins a vals i experiències.',
                    ],
                    image: { src: g2, alt: 'Gràfic del 34è Final de WOŚP', caption: 'Materials gràfics del 34è Final preparats per la Fundació WOŚP.' },
                },
                { p: ['Si vols ajudar, escriu-nos des de la pàgina de **Contacte**. Aviat anunciarem els detalls del nostre Final (lloc, programa, horaris) al web i a les xarxes socials. Toquem junts per unes panxetes sanes!'] },
            ],
        },
    },
};
