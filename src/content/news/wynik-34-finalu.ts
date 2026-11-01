import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const cover = '/images/34-final/77c5b268-df3e-47b4-b29a-fc35982a8fba.jpg';
const vol = '/images/34-final/wybrane/IMG_7414.jpg';

export const wynik34Finalu: NewsSource = {
    slug: 'ostateczny-wynik-34-finalu-wosp-263-mln-zl',
    date: '2026-03-31',
    coverImage: cover,
    tags: ['34FinałWOŚP', 'Wynik', 'Gastroenterologia', 'WOŚPBarcelona'],
    sources: [
        { label: 'TVN24 (30.03.2026)', url: 'https://tvn24.pl/polska/ile-zebrano-na-wosp-w-2026-jerzy-owsiak-podal-kwote-st8973346' },
        { label: 'Wrocław.pl – finały rok po roku', url: 'https://www.wroclaw.pl/dla-mieszkanca/ile-zebrala-wosp-2026-wszystki-finaly-rok-po-roku' },
        { label: 'TVN24 – cel 34. Finału', url: 'https://tvn24.pl/polska/wosp-2026-jurek-owsiak-oglosil-cel-34-finalu-wosp-st8710730' },
    ],
    content: {
        pl: {
            title: 'Ostateczny wynik 34. Finału WOŚP: 263 477 929,83 zł dla zdrowych brzuszków',
            excerpt: '30 marca 2026 roku Jerzy Owsiak ogłosił ostateczny wynik 34. Finału: 263 477 929,83 zł. Pierwsze urządzenia do endoskopii dziecięcej zostały już kupione! Podsumowujemy Finał w liczbach i wyjaśniamy, co będzie dalej.',
            sections: [
                {
                    highlight: { value: '263 477 929,83 zł', label: 'ostateczny wynik 34. Finału WOŚP' },
                    p: [
                        'W poniedziałek **30 marca 2026 roku** Fundacja WOŚP podała ostateczny wynik 34. Finału: **263 477 929,83 zł**. To pieniądze na sprzęt do diagnostyki i leczenia chorób przewodu pokarmowego u dzieci – zgodnie z hasłem Finału „Zdrowe brzuszki naszych dzieci”.',
                        'Po Finale 25 stycznia licznik pokazywał kwotę deklarowaną 183 231 782 zł. Przez kolejne dwa miesiące rozliczano puszki ze wszystkich sztabów, opłacano aukcje Allegro, księgowano przelewy i e-skarbonki. W efekcie wynik ostateczny okazał się o ponad **80 milionów złotych** wyższy od tego z wieczoru finałowego.',
                    ],
                },
                {
                    title: '34. Finał w liczbach',
                    ul: [
                        '**263 477 929,83 zł** – wynik ostateczny,',
                        '**183 231 782 zł** – kwota deklarowana w dniu Finału (o 4,7 mln zł więcej niż rok wcześniej),',
                        '**1670 sztabów**, w tym **88 za granicą**,',
                        'około **120 000 wolontariuszy**,',
                        '**1 015 000 zł** – cena Złotego Serduszka,',
                        '**12 408 €** – wynik naszego sztabu w Barcelonie.',
                    ],
                },
                {
                    title: 'Pierwszy sprzęt już kupiony',
                    p: [
                        'Jerzy Owsiak poinformował, że Fundacja kupiła już **cztery dziecięce ultrasonografy endoskopowe** dla czterech klinik. To urządzenia łączące endoskopię z badaniem USG – głowica ultrasonograficzna wprowadzona do przewodu pokarmowego pozwala obejrzeć nie tylko jego wnętrze, ale też ściany jelit, trzustkę, drogi żółciowe czy węzły chłonne. Dla dzieci oznacza to dokładniejszą diagnozę bez konieczności operacji.',
                        'Kolejne zakupy – przede wszystkim sprzęt endoskopowy do diagnostyki i małoinwazyjnych zabiegów – będą realizowane w najbliższych miesiącach. Trafią do klinik gastroenterologii dziecięcej (w Polsce jest ich 16) i do kolejnych oddziałów pediatrycznych.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, prezes Fundacji WOŚP.'),
                },
                {
                    title: 'Mniej niż rekord – i co z tego?',
                    p: [
                        'Wynik 34. Finału jest niższy od rekordowego rezultatu z 2025 roku (289 068 047,77 zł). Ale warto spojrzeć na to szerzej: to wciąż **jeden z najwyższych wyników w historii Orkiestry** i ogromna kwota dla dziedziny medycyny, która nigdy wcześniej nie była głównym celem Finału.',
                    ],
                    ul: [
                        '**31. Finał (2023)** – 243 259 387,25 zł',
                        '**32. Finał (2024)** – 281 879 118,07 zł',
                        '**33. Finał (2025)** – 289 068 047,77 zł (rekord)',
                        '**34. Finał (2026)** – **263 477 929,83 zł**',
                    ],
                },
                {
                    p: [
                        'Kwota deklarowana w dniu Finału była przy tym **wyższa niż rok wcześniej** – co pokazuje, że w samym dniu Finału zagraliśmy z jeszcze większą energią. Dla porównania: pierwszy Finał w 1993 roku zebrał 3,77 mln zł.',
                    ],
                },
                {
                    title: 'Dziękujemy, Barcelono!',
                    p: [
                        'Nasze **12 408 €** to część tego wyniku. Każde euro wrzucone do puszki w Espacio 88, każda licytacja, każde ciasto kupione na stoisku i każda wpłata do e-skarbonki zamieni się w sprzęt, który pomoże polskim dzieciom.',
                        'Dziękujemy wszystkim wolontariuszom, którzy poświęcili swój czas, sponsorom i partnerom, którzy nas wsparli (pełną listę znajdziesz na stronie **Sponsorzy 34. Finału**), artystom, którzy wystąpili za darmo, i każdemu, kto przyszedł na nasz Finał. Jesteście wspaniali!',
                    ],
                    image: { src: vol, alt: 'Wolontariusze 34. Finału WOŚP w Barcelonie', caption: 'Wolontariusze Sztabu WOŚP Barcelona podczas 34. Finału.' },
                },
                {
                    title: 'Co dalej?',
                    p: [
                        'Przed nami lato i Pol\'and\'Rock Festival – podziękowanie dla wszystkich, którzy grają z Orkiestrą. Jesienią Fundacja ogłosi cel 35. Finału, a my zaczniemy przygotowania do kolejnego stycznia w Barcelonie. Jeśli chcesz dołączyć do sztabu jako wolontariusz, sponsor lub partner – napisz do nas już teraz!',
                    ],
                },
            ],
        },
        en: {
            title: 'Final result of the 34th WOŚP Finale: 263,477,929.83 PLN for healthy tummies',
            excerpt: 'On 30 March 2026 Jerzy Owsiak announced the final result of the 34th Finale: 263,477,929.83 PLN. The first paediatric endoscopy devices have already been bought! We sum up the Finale in numbers and explain what comes next.',
            sections: [
                {
                    highlight: { value: '263,477,929.83 PLN', label: 'final result of the 34th WOŚP Finale' },
                    p: [
                        'On Monday, **30 March 2026**, the WOŚP Foundation announced the final result of the 34th Finale: **263,477,929.83 PLN**. The money will buy equipment to diagnose and treat digestive diseases in children – in line with the Finale slogan "Healthy tummies for our kids".',
                        'After the Finale on 25 January the counter showed a declared amount of 183,231,782 PLN. Over the next two months boxes from all staffs were settled, Allegro auctions paid, transfers and online boxes booked. As a result, the final result was over **80 million PLN** higher than on Finale night.',
                    ],
                },
                {
                    title: 'The 34th Finale in numbers',
                    ul: [
                        '**263,477,929.83 PLN** – final result,',
                        '**183,231,782 PLN** – declared on Finale day (4.7 million PLN more than a year earlier),',
                        '**1,670 staffs**, including **88 abroad**,',
                        'around **120,000 volunteers**,',
                        '**1,015,000 PLN** – price of the Golden Heart,',
                        '**12,408 €** – the result of our Barcelona staff.',
                    ],
                },
                {
                    title: 'The first equipment has already been bought',
                    p: [
                        'Jerzy Owsiak said the Foundation has already bought **four paediatric endoscopic ultrasound devices** for four clinics. These devices combine endoscopy with ultrasound – a probe inserted into the digestive tract shows not only its interior but also the intestinal walls, pancreas, bile ducts and lymph nodes. For children this means a more accurate diagnosis without surgery.',
                        'Further purchases – mainly endoscopic equipment for diagnosis and minimally invasive procedures – will follow in the coming months. They will go to paediatric gastroenterology clinics (there are 16 in Poland) and other paediatric wards.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, president of the WOŚP Foundation.'),
                },
                {
                    title: 'Less than the record – so what?',
                    p: ['The 34th Finale result is lower than the 2025 record (289,068,047.77 PLN). But it is worth looking at the bigger picture: it is still **one of the highest results in the Orchestra\'s history** and a huge amount for a field of medicine that had never before been the main goal of a Finale.'],
                    ul: [
                        '**31st Finale (2023)** – 243,259,387.25 PLN',
                        '**32nd Finale (2024)** – 281,879,118.07 PLN',
                        '**33rd Finale (2025)** – 289,068,047.77 PLN (record)',
                        '**34th Finale (2026)** – **263,477,929.83 PLN**',
                    ],
                },
                { p: ['The amount declared on Finale day was also **higher than a year earlier** – showing that on the day itself we played with even more energy. For comparison: the first Finale in 1993 raised 3.77 million PLN.'] },
                {
                    title: 'Thank you, Barcelona!',
                    p: [
                        'Our **12,408 €** is part of this result. Every euro dropped into a box at Espacio 88, every auction, every cake bought at a stand and every online donation will become equipment that helps Polish children.',
                        'Thank you to all volunteers who gave their time, the sponsors and partners who supported us (see the full list on the **Sponsors of the 34th Finale** page), the artists who performed for free and everyone who came to our Finale. You are amazing!',
                    ],
                    image: { src: vol, alt: 'Volunteers of the 34th WOŚP Finale in Barcelona', caption: 'WOŚP Barcelona volunteers during the 34th Finale.' },
                },
                {
                    title: 'What next?',
                    p: ['Summer and the Pol\'and\'Rock Festival are ahead – a thank-you to everyone who plays with the Orchestra. In autumn the Foundation will announce the goal of the 35th Finale, and we will start preparing for another January in Barcelona. If you want to join our staff as a volunteer, sponsor or partner – write to us now!'],
                },
            ],
        },
        es: {
            title: 'Resultado final del 34.º Final de WOŚP: 263.477.929,83 PLN para barriguitas sanas',
            excerpt: 'El 30 de marzo de 2026 Jerzy Owsiak anunció el resultado final del 34.º Final: 263.477.929,83 PLN. ¡Ya se han comprado los primeros equipos de endoscopia pediátrica! Resumimos el Final en cifras y te contamos qué viene ahora.',
            sections: [
                {
                    highlight: { value: '263.477.929,83 PLN', label: 'resultado final del 34.º Final de WOŚP' },
                    p: [
                        'El lunes **30 de marzo de 2026**, la Fundación WOŚP anunció el resultado final del 34.º Final: **263.477.929,83 PLN**. El dinero se destinará a equipos para diagnosticar y tratar enfermedades digestivas en niños, de acuerdo con el lema del Final, «Barriguitas sanas para nuestros niños».',
                        'Tras el Final del 25 de enero, el contador marcaba una cantidad declarada de 183.231.782 PLN. Durante los dos meses siguientes se liquidaron las huchas de todos los equipos, se pagaron las subastas de Allegro y se registraron transferencias y huchas online. Así, el resultado final superó en más de **80 millones de PLN** al de la noche del Final.',
                    ],
                },
                {
                    title: 'El 34.º Final en cifras',
                    ul: [
                        '**263.477.929,83 PLN**: resultado final,',
                        '**183.231.782 PLN**: cantidad declarada el día del Final (4,7 millones de PLN más que el año anterior),',
                        '**1670 equipos**, **88 de ellos en el extranjero**,',
                        'unos **120.000 voluntarios**,',
                        '**1.015.000 PLN**: precio del Corazón de Oro,',
                        '**12.408 €**: resultado de nuestro equipo de Barcelona.',
                    ],
                },
                {
                    title: 'Los primeros equipos ya están comprados',
                    p: [
                        'Jerzy Owsiak informó de que la Fundación ya ha comprado **cuatro ecoendoscopios pediátricos** para cuatro clínicas. Estos aparatos combinan endoscopia y ecografía: una sonda introducida en el aparato digestivo permite ver no solo su interior, sino también las paredes intestinales, el páncreas, las vías biliares y los ganglios linfáticos. Para los niños supone un diagnóstico más preciso sin cirugía.',
                        'Las siguientes compras, sobre todo de equipos endoscópicos para diagnóstico e intervenciones mínimamente invasivas, se harán en los próximos meses. Irán a las clínicas de gastroenterología pediátrica (hay 16 en Polonia) y a otros servicios de pediatría.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, presidente de la Fundación WOŚP.'),
                },
                {
                    title: 'Menos que el récord, ¿y qué?',
                    p: ['El resultado del 34.º Final es inferior al récord de 2025 (289.068.047,77 PLN). Pero conviene mirar el conjunto: sigue siendo **uno de los mejores resultados de la historia de la Orquesta** y una cifra enorme para un área de la medicina que nunca antes había sido el objetivo principal de un Final.'],
                    ul: [
                        '**31.º Final (2023)**: 243.259.387,25 PLN',
                        '**32.º Final (2024)**: 281.879.118,07 PLN',
                        '**33.º Final (2025)**: 289.068.047,77 PLN (récord)',
                        '**34.º Final (2026)**: **263.477.929,83 PLN**',
                    ],
                },
                { p: ['Además, la cantidad declarada el día del Final fue **mayor que el año anterior**, lo que demuestra que ese día tocamos con aún más energía. Para comparar: el primer Final, en 1993, recaudó 3,77 millones de PLN.'] },
                {
                    title: '¡Gracias, Barcelona!',
                    p: [
                        'Nuestros **12.408 €** forman parte de este resultado. Cada euro de las huchas de Espacio 88, cada subasta, cada pastel comprado en un puesto y cada donativo online se convertirán en equipos que ayudarán a niños polacos.',
                        'Gracias a todos los voluntarios que dedicaron su tiempo, a los patrocinadores y colaboradores que nos apoyaron (lista completa en la página **Patrocinadores del 34.º Final**), a los artistas que actuaron gratis y a todos los que vinieron a nuestro Final. ¡Sois increíbles!',
                    ],
                    image: { src: vol, alt: 'Voluntarios del 34.º Final de WOŚP en Barcelona', caption: 'Voluntarios de WOŚP Barcelona durante el 34.º Final.' },
                },
                {
                    title: '¿Y ahora qué?',
                    p: ['Nos esperan el verano y el Pol\'and\'Rock Festival, un agradecimiento a todos los que tocan con la Orquesta. En otoño la Fundación anunciará el objetivo del 35.º Final y empezaremos a preparar otro enero en Barcelona. Si quieres unirte a nuestro equipo como voluntario, patrocinador o colaborador, ¡escríbenos ya!'],
                },
            ],
        },
        ca: {
            title: 'Resultat final del 34è Final de WOŚP: 263.477.929,83 PLN per a panxetes sanes',
            excerpt: 'El 30 de març de 2026 Jerzy Owsiak va anunciar el resultat final del 34è Final: 263.477.929,83 PLN. Ja s\'han comprat els primers equips d\'endoscòpia pediàtrica! Resumim el Final en xifres i t\'expliquem què ve ara.',
            sections: [
                {
                    highlight: { value: '263.477.929,83 PLN', label: 'resultat final del 34è Final de WOŚP' },
                    p: [
                        'Dilluns **30 de març de 2026**, la Fundació WOŚP va anunciar el resultat final del 34è Final: **263.477.929,83 PLN**. Els diners es destinaran a equips per diagnosticar i tractar malalties digestives en infants, d\'acord amb el lema del Final, «Panxetes sanes per als nostres infants».',
                        'Després del Final del 25 de gener, el comptador marcava una quantitat declarada de 183.231.782 PLN. Durant els dos mesos següents es van liquidar les guardioles de tots els equips, es van pagar les subhastes d\'Allegro i es van registrar transferències i guardioles en línia. Així, el resultat final va superar en més de **80 milions de PLN** el de la nit del Final.',
                    ],
                },
                {
                    title: 'El 34è Final en xifres',
                    ul: [
                        '**263.477.929,83 PLN**: resultat final,',
                        '**183.231.782 PLN**: quantitat declarada el dia del Final (4,7 milions de PLN més que l\'any anterior),',
                        '**1670 equips**, **88 d\'ells a l\'estranger**,',
                        'uns **120.000 voluntaris**,',
                        '**1.015.000 PLN**: preu del Cor d\'Or,',
                        '**12.408 €**: resultat del nostre equip de Barcelona.',
                    ],
                },
                {
                    title: 'Els primers equips ja s\'han comprat',
                    p: [
                        'Jerzy Owsiak va informar que la Fundació ja ha comprat **quatre ecoendoscopis pediàtrics** per a quatre clíniques. Aquests aparells combinen endoscòpia i ecografia: una sonda introduïda a l\'aparell digestiu permet veure no només el seu interior, sinó també les parets intestinals, el pàncrees, les vies biliars i els ganglis limfàtics. Per als infants suposa un diagnòstic més precís sense cirurgia.',
                        'Les compres següents, sobretot d\'equips endoscòpics per a diagnòstic i intervencions mínimament invasives, es faran en els propers mesos. Aniran a les clíniques de gastroenterologia pediàtrica (n\'hi ha 16 a Polònia) i a altres serveis de pediatria.',
                    ],
                    image: withCaption(IMG.owsiak2024, 'Jerzy Owsiak, president de la Fundació WOŚP.'),
                },
                {
                    title: 'Menys que el rècord, i què?',
                    p: ['El resultat del 34è Final és inferior al rècord del 2025 (289.068.047,77 PLN). Però val la pena mirar-ho en conjunt: continua sent **un dels millors resultats de la història de l\'Orquestra** i una xifra enorme per a una àrea de la medicina que mai abans havia estat l\'objectiu principal d\'un Final.'],
                    ul: [
                        '**31è Final (2023)**: 243.259.387,25 PLN',
                        '**32è Final (2024)**: 281.879.118,07 PLN',
                        '**33è Final (2025)**: 289.068.047,77 PLN (rècord)',
                        '**34è Final (2026)**: **263.477.929,83 PLN**',
                    ],
                },
                { p: ['A més, la quantitat declarada el dia del Final va ser **més alta que l\'any anterior**, cosa que demostra que aquell dia vam tocar amb encara més energia. Per comparar: el primer Final, el 1993, va recaptar 3,77 milions de PLN.'] },
                {
                    title: 'Gràcies, Barcelona!',
                    p: [
                        'Els nostres **12.408 €** formen part d\'aquest resultat. Cada euro de les guardioles de l\'Espacio 88, cada subhasta, cada pastís comprat en una parada i cada donatiu en línia es convertiran en equips que ajudaran infants polonesos.',
                        'Gràcies a tots els voluntaris que van dedicar-hi el seu temps, als patrocinadors i col·laboradors que ens van donar suport (llista completa a la pàgina **Patrocinadors del 34è Final**), als artistes que van actuar gratis i a tothom qui va venir al nostre Final. Sou increïbles!',
                    ],
                    image: { src: vol, alt: 'Voluntaris del 34è Final de WOŚP a Barcelona', caption: 'Voluntaris de WOŚP Barcelona durant el 34è Final.' },
                },
                {
                    title: 'I ara què?',
                    p: ['Ens esperen l\'estiu i el Pol\'and\'Rock Festival, un agraïment a tots els qui toquen amb l\'Orquestra. A la tardor la Fundació anunciarà l\'objectiu del 35è Final i començarem a preparar un altre gener a Barcelona. Si vols unir-te al nostre equip com a voluntari, patrocinador o col·laborador, escriu-nos ja!'],
                },
            ],
        },
    },
};
