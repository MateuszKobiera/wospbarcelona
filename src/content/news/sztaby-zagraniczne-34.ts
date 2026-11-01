import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const group = '/images/34-final/IMG_7448.JPG';
const hearts = '/images/34-final/IMG_7449.JPG';

export const sztabyZagraniczne34: NewsSource = {
    slug: 'wosp-gra-na-calym-swiecie-sztaby-zagraniczne-34-finalu',
    date: '2026-02-10',
    coverImage: group,
    tags: ['34FinałWOŚP', 'SztabyZagraniczne', 'Polonia', 'WOŚPBarcelona'],
    sources: [
        { label: 'TVN24 – kwota deklarowana', url: 'https://tvn24.pl/wosp2026/wosp-2026-ile-juz-zebrano-czy-padnie-rekord-zbiorek-st8861887' },
        { label: 'TVN24 – sztaby zagraniczne (2024)', url: 'https://tvn24.pl/wosp-2024/wosp-2024-jak-wosp-gra-na-swiecie-zagladamy-do-sztabow-zagranicznych-st7743746' },
        { label: 'TVN24 – wynik 34. Finału', url: 'https://tvn24.pl/polska/ile-zebrano-na-wosp-w-2026-jerzy-owsiak-podal-kwote-st8973346' },
        { label: 'Wakacje.pl – WOŚP za granicą', url: 'https://www.wakacje.pl/magazyn/wosp-za-granica-6984966400739840a/' },
    ],
    content: {
        pl: {
            title: 'Od Bali po Svalbard – WOŚP gra na całym świecie. Barcelona wśród 88 sztabów zagranicznych',
            excerpt: 'Podczas 34. Finału zagrało blisko 1700 sztabów, w tym 88 za granicą. Kwota deklarowana z dnia Finału wyniosła 183 231 782 zł – więcej niż rok wcześniej. Opowiadamy, jak Orkiestra gra poza Polską i jak poszło nam w Barcelonie.',
            sections: [
                {
                    highlight: { value: '183 231 782 zł', label: 'kwota deklarowana w dniu 34. Finału (25 stycznia 2026)' },
                    p: [
                        'Wieczorem 25 stycznia 2026 roku licznik 34. Finału Wielkiej Orkiestry Świątecznej Pomocy pokazał **183 231 782 zł**. To o **4 700 157 zł więcej** niż kwota deklarowana rok wcześniej (178 531 625 zł). Jak co roku, to dopiero początek – wynik ostateczny poznamy po przeliczeniu wszystkich puszek, rozliczeniu aukcji i zaksięgowaniu przelewów, czyli zwykle pod koniec marca.',
                        'Najdroższym przedmiotem Finału było, jak zawsze, **Złote Serduszko** – tym razem wylicytowane za **1 015 000 zł**.',
                    ],
                },
                {
                    title: '88 sztabów poza Polską',
                    p: [
                        'W 34. Finale zagrało blisko **1700 sztabów** i około **120 tysięcy wolontariuszy**. Aż **88 sztabów działało za granicą** – na wszystkich kontynentach. Orkiestra grała m.in. na **Bali**, w **Tokio**, **Toronto**, a nawet na arktycznym **Svalbardzie**. Grała też w kilku miastach Hiszpanii – w tym w Madrycie i oczywiście w Barcelonie.',
                        'Sztaby zagraniczne to zjawisko, które rośnie od lat. Rok wcześniej, podczas 32. Finału w 2024 roku, za granicą zarejestrowanych było aż **101 sztabów** – od Australii i Azji Południowo-Wschodniej, przez USA, po oba bieguny.',
                    ],
                    image: withCaption(IMG.dublin2007, 'Koncert WOŚP w Dublinie w 2007 roku – Polonia gra z Orkiestrą od wielu lat.'),
                },
                {
                    title: 'Jak gra Orkiestra za granicą?',
                    p: [
                        'Sztaby zagraniczne działają na tych samych zasadach co sztaby w Polsce: rejestrują się w Fundacji, ich wolontariusze dostają identyfikatory i zaplombowane puszki, a po Finale rozliczają zebrane pieniądze i przekazują je na konto Fundacji. Różni je jedno – zbierają w euro, dolarach, funtach, koronach czy jenach.',
                        'Każdy sztab ma swój charakter. Jedne organizują wielkie koncerty w wynajętych salach, inne – kameralne spotkania w polskich restauracjach. Są sztaby, które grają na stokach narciarskich, na plażach, w szkołach polonijnych czy w ambasadach. Podczas Finału w 2024 roku telewizja łączyła się na żywo jednocześnie z Norwegią (minus 5 stopni) i z Bali (plus 30) – i wszędzie atmosfera była tak samo gorąca.',
                    ],
                    quote: { text: 'Jak w Polsce się mówi, że w Polsce gra cała Polska. Nie, w Chicago gra cała Polska.', author: 'głos ze sztabu WOŚP w Chicago (TVN24, 2024)' },
                },
                {
                    title: 'Po co grać za granicą?',
                    p: [
                        'Wielu z nas zadaje sobie to pytanie na początku. Odpowiedzi jest kilka:',
                    ],
                    ul: [
                        '**Pomagamy polskim szpitalom** – często tym, w których urodziliśmy się my, nasze dzieci albo leczą się nasi rodzice.',
                        '**Budujemy społeczność** – Finał to najlepsza okazja, by Polacy mieszkający w jednym mieście spotkali się i poznali.',
                        '**Pokazujemy Polskę** – dla wielu Katalończyków, Hiszpanów czy turystów nasz Finał to pierwsze spotkanie z polską kulturą i z ideą masowej, oddolnej dobroczynności.',
                        '**Uczymy dzieci** – nasze dzieci, wychowujące się za granicą, widzą, że bycie Polakiem to także pomaganie.',
                    ],
                },
                {
                    title: 'Barcelona: 12 408 € dla zdrowych brzuszków',
                    p: [
                        'Nasz sztab zagrał w **Espacio 88** – i zebrał **12 408 €** na diagnostykę i leczenie chorób przewodu pokarmowego u dzieci. Na Finale były koncerty, licytacje, stoiska z jedzeniem, zajęcia dla dzieci i dziesiątki wolontariuszy. Wieczorem wspólnie zapaliliśmy Światełko do nieba.',
                        'Ogromne podziękowania należą się wszystkim wolontariuszom, sponsorom i partnerom, artystom i każdemu, kto do nas przyszedł. Pełną relację i galerię zdjęć znajdziesz w artykule **„Dziękujemy! 34. Finał WOŚP w Barcelonie za nami”**, a listę naszych sponsorów – na stronie **Sponsorzy 34. Finału**.',
                    ],
                    image: { src: group, alt: 'Wspólne zdjęcie uczestników 34. Finału WOŚP w Barcelonie', caption: 'Wspólne zdjęcie z 34. Finału WOŚP w Barcelonie.' },
                },
                {
                    title: 'Co dalej?',
                    p: [
                        'Licytacje 34. Finału na Allegro trwają jeszcze do 26 lutego, a e-skarbonki przyjmują wpłaty. Wynik ostateczny Fundacja ogłosi zwykle pod koniec marca – damy znać! A już teraz zapraszamy wszystkich, którzy chcą dołączyć do sztabu przy kolejnym Finale.',
                    ],
                    image: { src: hearts, alt: 'Wolontariusze przy stoisku na 34. Finale w Barcelonie', caption: 'Wolontariusze przy pracy podczas 34. Finału.' },
                },
            ],
        },
        en: {
            title: 'From Bali to Svalbard – WOŚP plays all over the world. Barcelona among 88 foreign staffs',
            excerpt: 'Almost 1,700 staffs played in the 34th Finale, 88 of them abroad. The amount declared on Finale day was 183,231,782 PLN – more than the year before. We tell you how the Orchestra plays outside Poland and how we did in Barcelona.',
            sections: [
                {
                    highlight: { value: '183,231,782 PLN', label: 'amount declared on the day of the 34th Finale (25 January 2026)' },
                    p: [
                        'On the evening of 25 January 2026, the 34th Great Orchestra of Christmas Charity Finale counter showed **183,231,782 PLN** – **4,700,157 PLN more** than the amount declared a year earlier (178,531,625 PLN). As every year, that is only the beginning – the final result comes after all boxes are counted, auctions settled and transfers booked, usually at the end of March.',
                        'As always, the most expensive item of the Finale was the **Golden Heart** – this time auctioned for **1,015,000 PLN**.',
                    ],
                },
                {
                    title: '88 staffs outside Poland',
                    p: [
                        'The 34th Finale involved almost **1,700 staffs** and around **120,000 volunteers**. As many as **88 staffs operated abroad** – on every continent. The Orchestra played in **Bali**, **Tokyo**, **Toronto** and even on Arctic **Svalbard**. It also played in several Spanish cities – including Madrid and, of course, Barcelona.',
                        'Foreign staffs have been growing for years. During the 32nd Finale in 2024, as many as **101 staffs** were registered abroad – from Australia and Southeast Asia, through the USA, to both poles.',
                    ],
                    image: withCaption(IMG.dublin2007, 'A WOŚP concert in Dublin in 2007 – the Polish diaspora has played with the Orchestra for many years.'),
                },
                {
                    title: 'How does the Orchestra play abroad?',
                    p: [
                        'Foreign staffs follow the same rules as staffs in Poland: they register with the Foundation, their volunteers get ID badges and sealed boxes, and after the Finale they settle the money and transfer it to the Foundation. The only difference is that they collect in euros, dollars, pounds, crowns or yen.',
                        'Every staff has its own character. Some organise big concerts in rented halls, others intimate gatherings in Polish restaurants. Some staffs play on ski slopes, beaches, in Polish schools or in embassies. During the 2024 Finale, TV linked up live with Norway (minus 5 degrees) and Bali (plus 30) at the same time – and the atmosphere was equally hot everywhere.',
                    ],
                    quote: { text: 'In Poland they say all of Poland is playing. No – in Chicago all of Poland is playing.', author: 'a volunteer of the Chicago staff (TVN24, 2024)' },
                },
                {
                    title: 'Why play abroad?',
                    p: ['Many of us asked ourselves this at the beginning. There are several answers:'],
                    ul: [
                        '**We help Polish hospitals** – often the ones where we, our children were born or where our parents are treated.',
                        '**We build community** – the Finale is the best chance for Poles living in one city to meet each other.',
                        '**We show Poland** – for many Catalans, Spaniards and tourists our Finale is their first encounter with Polish culture and with mass, grassroots charity.',
                        '**We teach our children** – kids growing up abroad see that being Polish also means helping.',
                    ],
                },
                {
                    title: 'Barcelona: 12,408 € for healthy tummies',
                    p: [
                        'Our staff played at **Espacio 88** – and raised **12,408 €** for diagnosing and treating digestive diseases in children. There were concerts, auctions, food stands, activities for children and dozens of volunteers. In the evening we lit the Light to Heaven together.',
                        'Huge thanks to all volunteers, sponsors and partners, artists and everyone who came. You will find the full report and photo gallery in the article **"Thank you! The 34th WOŚP Finale in Barcelona is behind us"**, and the list of our sponsors on the **Sponsors of the 34th Finale** page.',
                    ],
                    image: { src: group, alt: 'Group photo of the 34th WOŚP Finale in Barcelona', caption: 'Group photo from the 34th WOŚP Finale in Barcelona.' },
                },
                {
                    title: 'What next?',
                    p: ['34th Finale auctions on Allegro run until 26 February, and online boxes are still accepting donations. The Foundation usually announces the final result at the end of March – we will let you know! And we already invite everyone who wants to join our staff for the next Finale.'],
                    image: { src: hearts, alt: 'Volunteers at a stand at the 34th Finale in Barcelona', caption: 'Volunteers at work during the 34th Finale.' },
                },
            ],
        },
        es: {
            title: 'De Bali a Svalbard: WOŚP toca en todo el mundo. Barcelona, entre los 88 equipos en el extranjero',
            excerpt: 'En el 34.º Final participaron casi 1700 equipos, 88 de ellos en el extranjero. La cantidad declarada el día del Final fue de 183.231.782 PLN, más que el año anterior. Te contamos cómo toca la Orquesta fuera de Polonia y cómo nos fue en Barcelona.',
            sections: [
                {
                    highlight: { value: '183.231.782 PLN', label: 'cantidad declarada el día del 34.º Final (25 de enero de 2026)' },
                    p: [
                        'La noche del 25 de enero de 2026, el contador del 34.º Final de la Gran Orquesta de la Caridad Navideña marcó **183.231.782 PLN**, **4.700.157 PLN más** que la cantidad declarada un año antes (178.531.625 PLN). Como cada año, es solo el principio: el resultado final llega cuando se cuentan todas las huchas, se liquidan las subastas y se registran las transferencias, normalmente a finales de marzo.',
                        'Como siempre, el objeto más caro del Final fue el **Corazón de Oro**, subastado esta vez por **1.015.000 PLN**.',
                    ],
                },
                {
                    title: '88 equipos fuera de Polonia',
                    p: [
                        'En el 34.º Final participaron casi **1700 equipos** y unos **120.000 voluntarios**. Nada menos que **88 equipos actuaron en el extranjero**, en todos los continentes. La Orquesta tocó en **Bali**, **Tokio**, **Toronto** e incluso en el ártico **Svalbard**. También tocó en varias ciudades españolas, entre ellas Madrid y, por supuesto, Barcelona.',
                        'Los equipos en el extranjero no paran de crecer. En el 32.º Final, en 2024, llegaron a registrarse **101 equipos** fuera de Polonia: de Australia y el Sudeste Asiático a Estados Unidos y ambos polos.',
                    ],
                    image: withCaption(IMG.dublin2007, 'Concierto de WOŚP en Dublín en 2007: la diáspora polaca toca con la Orquesta desde hace muchos años.'),
                },
                {
                    title: '¿Cómo toca la Orquesta en el extranjero?',
                    p: [
                        'Los equipos en el extranjero siguen las mismas reglas que en Polonia: se registran en la Fundación, sus voluntarios reciben acreditaciones y huchas precintadas y, tras el Final, liquidan lo recaudado y lo transfieren a la Fundación. La única diferencia es que recaudan en euros, dólares, libras, coronas o yenes.',
                        'Cada equipo tiene su carácter. Algunos organizan grandes conciertos en salas alquiladas; otros, encuentros íntimos en restaurantes polacos. Hay equipos que tocan en pistas de esquí, playas, escuelas polacas o embajadas. Durante el Final de 2024, la televisión conectó en directo a la vez con Noruega (5 grados bajo cero) y Bali (30 grados), y en todas partes el ambiente estaba igual de caliente.',
                    ],
                    quote: { text: 'En Polonia se dice que toca toda Polonia. No: en Chicago toca toda Polonia.', author: 'desde el equipo de Chicago (TVN24, 2024)' },
                },
                {
                    title: '¿Por qué tocar en el extranjero?',
                    p: ['Muchos nos lo preguntamos al principio. Hay varias respuestas:'],
                    ul: [
                        '**Ayudamos a hospitales polacos**, a menudo aquellos donde nacimos nosotros o nuestros hijos, o donde se tratan nuestros padres.',
                        '**Creamos comunidad**: el Final es la mejor ocasión para que los polacos de una misma ciudad se conozcan.',
                        '**Mostramos Polonia**: para muchos catalanes, españoles y turistas nuestro Final es su primer contacto con la cultura polaca y con la solidaridad masiva y de base.',
                        '**Educamos a nuestros hijos**: los niños que crecen fuera ven que ser polaco también significa ayudar.',
                    ],
                },
                {
                    title: 'Barcelona: 12.408 € para barriguitas sanas',
                    p: [
                        'Nuestro equipo tocó en **Espacio 88** y recaudó **12.408 €** para el diagnóstico y tratamiento de enfermedades digestivas infantiles. Hubo conciertos, subastas, puestos de comida, actividades para niños y decenas de voluntarios. Por la noche encendimos juntos la Luz al cielo.',
                        'Un enorme agradecimiento a todos los voluntarios, patrocinadores y colaboradores, artistas y a todos los que vinieron. Encontrarás la crónica completa y la galería de fotos en el artículo **«¡Gracias! El 34.º Final de WOŚP en Barcelona ya es historia»**, y la lista de patrocinadores en la página **Patrocinadores del 34.º Final**.',
                    ],
                    image: { src: group, alt: 'Foto de grupo del 34.º Final de WOŚP en Barcelona', caption: 'Foto de grupo del 34.º Final de WOŚP en Barcelona.' },
                },
                {
                    title: '¿Y ahora qué?',
                    p: ['Las subastas del 34.º Final en Allegro siguen hasta el 26 de febrero, y las huchas online aún aceptan donativos. La Fundación suele anunciar el resultado final a finales de marzo: ¡te lo contaremos! Y ya invitamos a todos los que quieran unirse a nuestro equipo para el próximo Final.'],
                    image: { src: hearts, alt: 'Voluntarios en un puesto del 34.º Final en Barcelona', caption: 'Voluntarios trabajando durante el 34.º Final.' },
                },
            ],
        },
        ca: {
            title: 'De Bali a Svalbard: WOŚP toca a tot el món. Barcelona, entre els 88 equips a l\'estranger',
            excerpt: 'Al 34è Final hi van participar gairebé 1700 equips, 88 d\'ells a l\'estranger. La quantitat declarada el dia del Final va ser de 183.231.782 PLN, més que l\'any anterior. T\'expliquem com toca l\'Orquestra fora de Polònia i com ens va anar a Barcelona.',
            sections: [
                {
                    highlight: { value: '183.231.782 PLN', label: 'quantitat declarada el dia del 34è Final (25 de gener de 2026)' },
                    p: [
                        'La nit del 25 de gener de 2026, el comptador del 34è Final de la Gran Orquestra de la Caritat Nadalenca va marcar **183.231.782 PLN**, **4.700.157 PLN més** que la quantitat declarada un any abans (178.531.625 PLN). Com cada any, és només el principi: el resultat final arriba quan es compten totes les guardioles, es liquiden les subhastes i es registren les transferències, normalment a finals de març.',
                        'Com sempre, l\'objecte més car del Final va ser el **Cor d\'Or**, subhastat aquesta vegada per **1.015.000 PLN**.',
                    ],
                },
                {
                    title: '88 equips fora de Polònia',
                    p: [
                        'Al 34è Final hi van participar gairebé **1700 equips** i uns **120.000 voluntaris**. Ni més ni menys que **88 equips van actuar a l\'estranger**, a tots els continents. L\'Orquestra va tocar a **Bali**, **Tòquio**, **Toronto** i fins i tot a l\'àrtic **Svalbard**. També va tocar en diverses ciutats espanyoles, entre elles Madrid i, és clar, Barcelona.',
                        'Els equips a l\'estranger no paren de créixer. Al 32è Final, el 2024, se\'n van arribar a registrar **101** fora de Polònia: d\'Austràlia i el Sud-est Asiàtic als Estats Units i tots dos pols.',
                    ],
                    image: withCaption(IMG.dublin2007, 'Concert de WOŚP a Dublín el 2007: la diàspora polonesa toca amb l\'Orquestra des de fa molts anys.'),
                },
                {
                    title: 'Com toca l\'Orquestra a l\'estranger?',
                    p: [
                        'Els equips a l\'estranger segueixen les mateixes regles que a Polònia: es registren a la Fundació, els seus voluntaris reben acreditacions i guardioles precintades i, després del Final, liquiden el que han recaptat i ho transfereixen a la Fundació. L\'única diferència és que recapten en euros, dòlars, lliures, corones o iens.',
                        'Cada equip té el seu caràcter. Alguns organitzen grans concerts en sales llogades; altres, trobades íntimes en restaurants polonesos. Hi ha equips que toquen a pistes d\'esquí, platges, escoles poloneses o ambaixades. Durant el Final del 2024, la televisió va connectar en directe alhora amb Noruega (5 graus sota zero) i Bali (30 graus), i a tot arreu l\'ambient era igual de calent.',
                    ],
                    quote: { text: 'A Polònia es diu que toca tot Polònia. No: a Chicago toca tot Polònia.', author: 'des de l\'equip de Chicago (TVN24, 2024)' },
                },
                {
                    title: 'Per què tocar a l\'estranger?',
                    p: ['Molts ens ho vam preguntar al principi. Hi ha diverses respostes:'],
                    ul: [
                        '**Ajudem hospitals polonesos**, sovint aquells on vam néixer nosaltres o els nostres fills, o on es tracten els nostres pares.',
                        '**Creem comunitat**: el Final és la millor ocasió perquè els polonesos d\'una mateixa ciutat es coneguin.',
                        '**Mostrem Polònia**: per a molts catalans, espanyols i turistes el nostre Final és el primer contacte amb la cultura polonesa i amb la solidaritat massiva i de base.',
                        '**Eduquem els nostres fills**: els infants que creixen fora veuen que ser polonès també vol dir ajudar.',
                    ],
                },
                {
                    title: 'Barcelona: 12.408 € per a panxetes sanes',
                    p: [
                        'El nostre equip va tocar a l\'**Espacio 88** i va recaptar **12.408 €** per al diagnòstic i tractament de malalties digestives infantils. Hi va haver concerts, subhastes, parades de menjar, activitats per a infants i desenes de voluntaris. Al vespre vam encendre junts la Llum al cel.',
                        'Un agraïment enorme a tots els voluntaris, patrocinadors i col·laboradors, artistes i a tothom qui va venir. Trobaràs la crònica completa i la galeria de fotos a l\'article **«Gràcies! El 34è Final de WOŚP a Barcelona ja és història»**, i la llista de patrocinadors a la pàgina **Patrocinadors del 34è Final**.',
                    ],
                    image: { src: group, alt: 'Foto de grup del 34è Final de WOŚP a Barcelona', caption: 'Foto de grup del 34è Final de WOŚP a Barcelona.' },
                },
                {
                    title: 'I ara què?',
                    p: ['Les subhastes del 34è Final a Allegro continuen fins al 26 de febrer, i les guardioles en línia encara accepten donatius. La Fundació sol anunciar el resultat final a finals de març: t\'ho explicarem! I ja convidem tothom qui vulgui unir-se al nostre equip per al proper Final.'],
                    image: { src: hearts, alt: 'Voluntaris en una parada del 34è Final a Barcelona', caption: 'Voluntaris treballant durant el 34è Final.' },
                },
            ],
        },
    },
};
