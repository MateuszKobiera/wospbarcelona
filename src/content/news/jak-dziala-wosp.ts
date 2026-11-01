import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

export const jakDzialaWosp: NewsSource = {
    slug: 'jak-dziala-wosp-skad-pieniadze-i-gdzie-trafia-sprzet',
    date: '2025-05-14',
    coverImage: '/images/blog/commons/rondo-wosp-warszawa-2016.jpg',
    tags: ['WOŚP', 'Przejrzystość', 'SprzętMedyczny', 'WOŚPBarcelona'],
    sources: [
        { label: 'Demagog', url: 'https://demagog.org.pl/fake_news/wosp-zarabia-dzierzawiac-sprzet-medyczny-szpitalom-wyjasniamy/' },
        { label: 'Wrocław.pl – historia Finałów', url: 'https://www.wroclaw.pl/dla-mieszkanca/ile-zebrala-wosp-2026-wszystki-finaly-rok-po-roku' },
        { label: 'TVN24 – sztaby zagraniczne', url: 'https://tvn24.pl/wosp-2024/wosp-2024-jak-wosp-gra-na-swiecie-zagladamy-do-sztabow-zagranicznych-st7743746' },
    ],
    content: {
        pl: {
            title: 'Jak działa WOŚP? Skąd są pieniądze i gdzie trafia sprzęt',
            excerpt: 'Puszka, e-skarbonka, aukcja – i co dalej? Wyjaśniamy krok po kroku, jak działa Fundacja WOŚP, jak liczone są pieniądze z Finału i jak zamieniają się w sprzęt medyczny z czerwonym serduszkiem w polskich szpitalach.',
            sections: [
                {
                    p: [
                        'Co roku podczas Finału w Barcelonie słyszymy te same pytania: „Gdzie właściwie trafiają pieniądze z puszki?”, „Czy euro z Barcelony też liczą się do wyniku?”, „Kto decyduje, na co zbieramy?”. To bardzo dobre pytania – i właśnie przejrzystość jest jednym z powodów, dla których WOŚP od ponad 30 lat cieszy się tak dużym zaufaniem. Postanowiliśmy zebrać najważniejsze informacje w jednym miejscu.',
                    ],
                },
                {
                    title: 'Krótka historia Orkiestry',
                    p: [
                        'Pierwszy Finał Wielkiej Orkiestry Świątecznej Pomocy odbył się **3 stycznia 1993 roku**. Zebrano wtedy 3 773 443,38 zł na ratowanie dzieci z chorobami serca. Kilka tygodni później, **2 marca 1993 roku**, zarejestrowano Fundację WOŚP. Wśród jej założycieli byli m.in. Jerzy Owsiak, Lidia Niedźwiedzka-Owsiak i kardiochirurg prof. Bohdan Maruszewski.',
                        'Od tamtej pory Finał gra co roku zimą. Przez 33 Finały Orkiestra zebrała łącznie blisko **2,6 miliarda złotych** i kupiła prawie **81 tysięcy urządzeń medycznych** dla polskich szpitali.',
                    ],
                    image: withCaption(IMG.rondoSerce, 'Serce WOŚP ułożone z podświetlonych okien wieżowca w Warszawie.'),
                },
                {
                    title: 'Krok 1: wybór celu',
                    p: [
                        'Każdy Finał ma jasno określony cel medyczny – np. onkologia dziecięca (33. Finał), gastroenterologia dziecięca (34. Finał) czy neonatologia (35. Finał). Cel ogłaszany jest zwykle jesienią, kilka miesięcy przed Finałem. Wybiera go zarząd Fundacji po konsultacjach z lekarzami i konsultantami krajowymi – tak, by pieniądze trafiły tam, gdzie brakuje sprzętu najbardziej.',
                    ],
                },
                {
                    title: 'Krok 2: zbiórka',
                    p: ['Pieniądze na Finał spływają kilkoma kanałami:'],
                    ul: [
                        '**Puszki** – wolontariusze z identyfikatorami zbierają pieniądze na ulicach i podczas wydarzeń sztabów. Puszki są zaplombowane, a po Finale liczone komisyjnie.',
                        '**E-skarbonki** – każdy wolontariusz, sztab czy firma może założyć internetową skarbonkę. Wpłacić można kartą z dowolnego miejsca na świecie.',
                        '**Aukcje** – na Allegro licytowane są przedmioty, usługi i spotkania podarowane przez darczyńców, w tym słynne **Złote Serduszka**.',
                        '**Wydarzenia sztabów** – koncerty, biegi, kiermasze, licytacje na żywo. W samej Polsce działa co roku ponad 1600 sztabów.',
                        '**Sztaby zagraniczne** – takie jak nasz w Barcelonie. W ostatnich latach za granicą grało od kilkudziesięciu do ponad stu sztabów.',
                    ],
                },
                {
                    title: 'Krok 3: liczenie i kwota ostateczna',
                    p: [
                        'Kwota, którą widzimy na liczniku w wieczór Finału, to tzw. **kwota deklarowana** – suma wstępnie zgłoszona przez sztaby. Wynik ostateczny Fundacja ogłasza zwykle po około dwóch miesiącach – gdy wszystkie puszki zostaną przeliczone, aukcje opłacone, a przelewy zaksięgowane.',
                        'Różnica bywa ogromna. W 2025 roku kwota deklarowana wynosiła ok. 178,5 mln zł, a wynik ostateczny – ponad **289 mln zł**. Dlatego warto pamiętać, że licytacje i e-skarbonki działają jeszcze długo po Finale.',
                    ],
                },
                {
                    title: 'Krok 4: zakup i przekazanie sprzętu',
                    p: [
                        'Za zebrane pieniądze Fundacja kupuje sprzęt medyczny i przekazuje go szpitalom w formie **darowizny**. Charakterystyczna naklejka z czerwonym serduszkiem na urządzeniu oznacza, że to sprzęt od WOŚP. W mediach społecznościowych pojawiały się twierdzenia, że Fundacja „dzierżawi” sprzęt szpitalom i na tym zarabia – zostały one zweryfikowane przez serwis Demagog i okazały się nieprawdziwe.',
                        'Zakupy są rozłożone w czasie. Część sprzętu trafia do szpitali już kilka tygodni po Finale (np. po 34. Finale Fundacja szybko kupiła cztery dziecięce ultrasonografy endoskopowe), a reszta – w kolejnych miesiącach, po przeprowadzeniu przetargów i rozmów z ośrodkami.',
                    ],
                },
                {
                    title: 'Krok 5: podziękowanie – Pol\'and\'Rock Festival',
                    p: [
                        'Latem Fundacja organizuje **Pol\'and\'Rock Festival** – darmowy festiwal muzyczny będący podziękowaniem dla wszystkich wolontariuszy i darczyńców. To też miejsce, gdzie można spotkać Jerzego Owsiaka, porozmawiać z lekarzami i zobaczyć, jak działa Fundacja od kuchni.',
                    ],
                },
                {
                    title: 'A jak to wygląda w Barcelonie?',
                    p: [
                        'Nasz sztab działa według tych samych zasad co sztaby w Polsce. Wolontariusze są rejestrowani w systemie Fundacji i otrzymują identyfikatory, a puszki są zaplombowane. Po Finale przeliczamy zebrane pieniądze i przekazujemy je na konto Fundacji. Wynik naszego sztabu (np. 13 881,91 € w 2025 i 12 408 € w 2026 roku) jest częścią ogólnopolskiego wyniku.',
                        'Każde czerwone serduszko w polskim szpitalu to więc także trochę Barcelony. Dziękujemy, że gracie z nami!',
                    ],
                    image: { src: '/images/33-final/DSCF7258.jpg', alt: 'Wolontariusze Sztabu WOŚP Barcelona', caption: 'Wolontariusze Sztabu WOŚP Barcelona podczas 33. Finału.' },
                },
            ],
        },
        en: {
            title: 'How does WOŚP work? Where the money comes from and where the equipment goes',
            excerpt: 'Collection box, online money box, auction – what happens next? We explain step by step how the WOŚP Foundation works, how Finale money is counted and how it turns into medical equipment with the red heart in Polish hospitals.',
            sections: [
                { p: ['Every year at our Barcelona Finale we hear the same questions: "Where does the money from the box actually go?", "Do euros from Barcelona count towards the result?", "Who decides what we collect for?". These are great questions – and transparency is one of the reasons WOŚP has enjoyed such trust for over 30 years. We decided to put the key information in one place.'] },
                {
                    title: 'A short history of the Orchestra',
                    p: [
                        'The first Great Orchestra of Christmas Charity Finale took place on **3 January 1993**. It raised 3,773,443.38 PLN to save children with heart disease. A few weeks later, on **2 March 1993**, the WOŚP Foundation was registered. Its founders included Jerzy Owsiak, Lidia Niedźwiedzka-Owsiak and cardiac surgeon Prof. Bohdan Maruszewski.',
                        'Since then the Finale has been held every winter. Over 33 Finales the Orchestra has raised almost **2.6 billion PLN** and bought almost **81,000 medical devices** for Polish hospitals.',
                    ],
                    image: withCaption(IMG.rondoSerce, 'A WOŚP heart formed by lit windows of a Warsaw skyscraper.'),
                },
                {
                    title: 'Step 1: choosing the goal',
                    p: ['Each Finale has a clearly defined medical goal – e.g. paediatric oncology (33rd Finale), paediatric gastroenterology (34th) or neonatology (35th). The goal is usually announced in autumn, a few months before the Finale. It is chosen by the Foundation\'s board after consulting doctors and national specialists, so that the money goes where equipment is needed most.'],
                },
                {
                    title: 'Step 2: fundraising',
                    p: ['Money for the Finale comes in through several channels:'],
                    ul: [
                        '**Collection boxes** – volunteers with ID badges collect money in the streets and at staff events. Boxes are sealed and counted by a committee after the Finale.',
                        '**Online money boxes** – every volunteer, staff or company can set up an online box. You can donate by card from anywhere in the world.',
                        '**Auctions** – items, services and meetings donated by supporters are auctioned on Allegro, including the famous **Golden Hearts**.',
                        '**Staff events** – concerts, runs, fairs, live auctions. In Poland alone over 1,600 staffs play every year.',
                        '**Foreign staffs** – like ours in Barcelona. In recent years between several dozen and over a hundred staffs have played abroad.',
                    ],
                },
                {
                    title: 'Step 3: counting and the final amount',
                    p: [
                        'The amount on the counter on Finale night is the so-called **declared amount** – the sum initially reported by staffs. The Foundation usually announces the final result about two months later, once all boxes are counted, auctions paid and transfers booked.',
                        'The difference can be huge. In 2025 the declared amount was about 178.5 million PLN, and the final result over **289 million PLN**. That is why auctions and online boxes keep working long after the Finale.',
                    ],
                },
                {
                    title: 'Step 4: buying and donating equipment',
                    p: [
                        'With the money raised, the Foundation buys medical equipment and gives it to hospitals as a **donation**. The characteristic red heart sticker on a device means it came from WOŚP. Claims circulating on social media that the Foundation "leases" equipment to hospitals for profit were checked by the fact-checking service Demagog and found to be false.',
                        'Purchases are spread over time. Some equipment reaches hospitals just weeks after the Finale (after the 34th Finale, for example, the Foundation quickly bought four paediatric endoscopic ultrasound devices), the rest in the following months, after tenders and talks with hospitals.',
                    ],
                },
                {
                    title: 'Step 5: a thank-you – Pol\'and\'Rock Festival',
                    p: ['In summer the Foundation organises the **Pol\'and\'Rock Festival** – a free music festival that thanks all volunteers and donors. It is also a place to meet Jerzy Owsiak, talk to doctors and see how the Foundation works behind the scenes.'],
                },
                {
                    title: 'And what about Barcelona?',
                    p: [
                        'Our staff follows the same rules as staffs in Poland. Volunteers are registered in the Foundation\'s system and receive ID badges, and the collection boxes are sealed. After the Finale we count the money and transfer it to the Foundation. Our staff\'s result (e.g. 13,881.91 € in 2025 and 12,408 € in 2026) is part of the national total.',
                        'So every red heart in a Polish hospital is also a little bit of Barcelona. Thank you for playing with us!',
                    ],
                    image: { src: '/images/33-final/DSCF7258.jpg', alt: 'WOŚP Barcelona volunteers', caption: 'WOŚP Barcelona volunteers at the 33rd Finale.' },
                },
            ],
        },
        es: {
            title: '¿Cómo funciona WOŚP? De dónde sale el dinero y adónde van los equipos',
            excerpt: 'Hucha, hucha online, subasta… ¿y después qué? Te explicamos paso a paso cómo funciona la Fundación WOŚP, cómo se cuenta el dinero del Final y cómo se convierte en equipos médicos con el corazón rojo en los hospitales polacos.',
            sections: [
                { p: ['Cada año, en nuestro Final de Barcelona, nos hacen las mismas preguntas: «¿Adónde va realmente el dinero de la hucha?», «¿Los euros de Barcelona también cuentan?», «¿Quién decide para qué recaudamos?». Son muy buenas preguntas, y la transparencia es una de las razones por las que WOŚP goza de tanta confianza desde hace más de 30 años. Por eso hemos reunido la información clave en un solo lugar.'] },
                {
                    title: 'Breve historia de la Orquesta',
                    p: [
                        'El primer Final de la Gran Orquesta de la Caridad Navideña se celebró el **3 de enero de 1993**. Se recaudaron 3.773.443,38 PLN para salvar a niños con enfermedades cardíacas. Unas semanas después, el **2 de marzo de 1993**, se registró la Fundación WOŚP. Entre sus fundadores estaban Jerzy Owsiak, Lidia Niedźwiedzka-Owsiak y el cirujano cardíaco Prof. Bohdan Maruszewski.',
                        'Desde entonces el Final se celebra cada invierno. En 33 Finales la Orquesta ha recaudado casi **2.600 millones de PLN** y ha comprado casi **81.000 equipos médicos** para hospitales polacos.',
                    ],
                    image: withCaption(IMG.rondoSerce, 'Un corazón de WOŚP formado con las ventanas iluminadas de un rascacielos de Varsovia.'),
                },
                {
                    title: 'Paso 1: elegir el objetivo',
                    p: ['Cada Final tiene un objetivo médico claro: por ejemplo, oncología pediátrica (33.º Final), gastroenterología pediátrica (34.º) o neonatología (35.º). El objetivo suele anunciarse en otoño, unos meses antes del Final. Lo elige la junta de la Fundación tras consultar a médicos y especialistas nacionales, para que el dinero llegue donde más faltan equipos.'],
                },
                {
                    title: 'Paso 2: la recaudación',
                    p: ['El dinero del Final llega por varios canales:'],
                    ul: [
                        '**Huchas**: los voluntarios acreditados recaudan en la calle y en los eventos de los equipos. Las huchas están precintadas y, tras el Final, se cuentan ante una comisión.',
                        '**Huchas online**: cada voluntario, equipo o empresa puede crear una hucha en internet. Se puede donar con tarjeta desde cualquier lugar del mundo.',
                        '**Subastas**: en Allegro se subastan objetos, servicios y encuentros donados, incluidos los famosos **Corazones de Oro**.',
                        '**Eventos de los equipos**: conciertos, carreras, mercadillos, subastas en directo. Solo en Polonia participan cada año más de 1600 equipos.',
                        '**Equipos en el extranjero**: como el nuestro en Barcelona. En los últimos años han tocado fuera de Polonia desde varias decenas hasta más de cien equipos.',
                    ],
                },
                {
                    title: 'Paso 3: recuento y cifra final',
                    p: [
                        'La cifra del contador la noche del Final es la llamada **cantidad declarada**, la suma comunicada provisionalmente por los equipos. La Fundación suele anunciar el resultado final unos dos meses después, cuando se han contado todas las huchas, pagado las subastas y registrado las transferencias.',
                        'La diferencia puede ser enorme. En 2025 la cantidad declarada fue de unos 178,5 millones de PLN, y el resultado final, de más de **289 millones de PLN**. Por eso las subastas y las huchas online siguen funcionando mucho después del Final.',
                    ],
                },
                {
                    title: 'Paso 4: compra y donación de equipos',
                    p: [
                        'Con lo recaudado, la Fundación compra equipos médicos y los entrega a los hospitales como **donación**. La característica pegatina con el corazón rojo en un aparato indica que procede de WOŚP. Las afirmaciones difundidas en redes de que la Fundación «alquila» los equipos a los hospitales para lucrarse fueron verificadas por el servicio Demagog y resultaron falsas.',
                        'Las compras se reparten en el tiempo. Parte de los equipos llega a los hospitales pocas semanas después del Final (tras el 34.º Final, por ejemplo, la Fundación compró enseguida cuatro ecoendoscopios pediátricos) y el resto en los meses siguientes, tras licitaciones y conversaciones con los centros.',
                    ],
                },
                {
                    title: 'Paso 5: un agradecimiento, el Pol\'and\'Rock Festival',
                    p: ['En verano la Fundación organiza el **Pol\'and\'Rock Festival**, un festival de música gratuito para dar las gracias a todos los voluntarios y donantes. También es un lugar para conocer a Jerzy Owsiak, hablar con médicos y ver cómo funciona la Fundación por dentro.'],
                },
                {
                    title: '¿Y cómo es en Barcelona?',
                    p: [
                        'Nuestro equipo sigue las mismas reglas que los equipos de Polonia. Los voluntarios se registran en el sistema de la Fundación y reciben su acreditación, y las huchas están precintadas. Tras el Final contamos el dinero y lo transferimos a la Fundación. El resultado de nuestro equipo (por ejemplo, 13.881,91 € en 2025 y 12.408 € en 2026) forma parte del total nacional.',
                        'Así que cada corazón rojo en un hospital polaco es también un poquito de Barcelona. ¡Gracias por tocar con nosotros!',
                    ],
                    image: { src: '/images/33-final/DSCF7258.jpg', alt: 'Voluntarios de WOŚP Barcelona', caption: 'Voluntarios de WOŚP Barcelona en el 33.º Final.' },
                },
            ],
        },
        ca: {
            title: 'Com funciona WOŚP? D\'on surten els diners i on van els equips',
            excerpt: 'Guardiola, guardiola en línia, subhasta… i després què? T\'expliquem pas a pas com funciona la Fundació WOŚP, com es compten els diners del Final i com es converteixen en equips mèdics amb el cor vermell als hospitals polonesos.',
            sections: [
                { p: ['Cada any, al nostre Final de Barcelona, ens fan les mateixes preguntes: «On van realment els diners de la guardiola?», «Els euros de Barcelona també compten?», «Qui decideix per a què recaptem?». Són molt bones preguntes, i la transparència és una de les raons per les quals WOŚP gaudeix de tanta confiança des de fa més de 30 anys. Per això hem reunit la informació clau en un sol lloc.'] },
                {
                    title: 'Breu història de l\'Orquestra',
                    p: [
                        'El primer Final de la Gran Orquestra de la Caritat Nadalenca es va celebrar el **3 de gener de 1993**. Es van recaptar 3.773.443,38 PLN per salvar infants amb malalties del cor. Unes setmanes després, el **2 de març de 1993**, es va registrar la Fundació WOŚP. Entre els fundadors hi havia Jerzy Owsiak, Lidia Niedźwiedzka-Owsiak i el cirurgià cardíac Prof. Bohdan Maruszewski.',
                        'Des d\'aleshores el Final se celebra cada hivern. En 33 Finals l\'Orquestra ha recaptat gairebé **2.600 milions de PLN** i ha comprat gairebé **81.000 equips mèdics** per a hospitals polonesos.',
                    ],
                    image: withCaption(IMG.rondoSerce, 'Un cor de WOŚP format amb les finestres il·luminades d\'un gratacel de Varsòvia.'),
                },
                {
                    title: 'Pas 1: triar l\'objectiu',
                    p: ['Cada Final té un objectiu mèdic clar: per exemple, oncologia pediàtrica (33è Final), gastroenterologia pediàtrica (34è) o neonatologia (35è). L\'objectiu se sol anunciar a la tardor, uns mesos abans del Final. El tria la junta de la Fundació després de consultar metges i especialistes nacionals, perquè els diners arribin on més falten equips.'],
                },
                {
                    title: 'Pas 2: la recaptació',
                    p: ['Els diners del Final arriben per diversos canals:'],
                    ul: [
                        '**Guardioles**: els voluntaris acreditats recapten al carrer i als esdeveniments dels equips. Les guardioles estan precintades i, després del Final, es compten davant d\'una comissió.',
                        '**Guardioles en línia**: cada voluntari, equip o empresa pot crear una guardiola a internet. Es pot donar amb targeta des de qualsevol lloc del món.',
                        '**Subhastes**: a Allegro se subhasten objectes, serveis i trobades donats, inclosos els famosos **Cors d\'Or**.',
                        '**Esdeveniments dels equips**: concerts, curses, mercats, subhastes en directe. Només a Polònia hi participen cada any més de 1600 equips.',
                        '**Equips a l\'estranger**: com el nostre a Barcelona. En els darrers anys han tocat fora de Polònia des de diverses desenes fins a més d\'un centenar d\'equips.',
                    ],
                },
                {
                    title: 'Pas 3: recompte i xifra final',
                    p: [
                        'La xifra del comptador la nit del Final és l\'anomenada **quantitat declarada**, la suma comunicada provisionalment pels equips. La Fundació sol anunciar el resultat final uns dos mesos després, quan s\'han comptat totes les guardioles, pagat les subhastes i registrat les transferències.',
                        'La diferència pot ser enorme. El 2025 la quantitat declarada va ser d\'uns 178,5 milions de PLN, i el resultat final, de més de **289 milions de PLN**. Per això les subhastes i les guardioles en línia continuen funcionant molt després del Final.',
                    ],
                },
                {
                    title: 'Pas 4: compra i donació d\'equips',
                    p: [
                        'Amb el que s\'ha recaptat, la Fundació compra equips mèdics i els lliura als hospitals com a **donació**. El característic adhesiu amb el cor vermell en un aparell indica que prové de WOŚP. Les afirmacions difoses a les xarxes que la Fundació «lloga» els equips als hospitals per lucrar-se van ser verificades pel servei Demagog i van resultar falses.',
                        'Les compres es reparteixen en el temps. Part dels equips arriba als hospitals poques setmanes després del Final (després del 34è Final, per exemple, la Fundació va comprar de seguida quatre ecoendoscopis pediàtrics) i la resta en els mesos següents, després de licitacions i converses amb els centres.',
                    ],
                },
                {
                    title: 'Pas 5: un agraïment, el Pol\'and\'Rock Festival',
                    p: ['A l\'estiu la Fundació organitza el **Pol\'and\'Rock Festival**, un festival de música gratuït per donar les gràcies a tots els voluntaris i donants. També és un lloc per conèixer Jerzy Owsiak, parlar amb metges i veure com funciona la Fundació per dins.'],
                },
                {
                    title: 'I com és a Barcelona?',
                    p: [
                        'El nostre equip segueix les mateixes regles que els equips de Polònia. Els voluntaris es registren al sistema de la Fundació i reben l\'acreditació, i les guardioles estan precintades. Després del Final comptem els diners i els transferim a la Fundació. El resultat del nostre equip (per exemple, 13.881,91 € el 2025 i 12.408 € el 2026) forma part del total nacional.',
                        'Així doncs, cada cor vermell en un hospital polonès és també un trosset de Barcelona. Gràcies per tocar amb nosaltres!',
                    ],
                    image: { src: '/images/33-final/DSCF7258.jpg', alt: 'Voluntaris de WOŚP Barcelona', caption: 'Voluntaris de WOŚP Barcelona al 33è Final.' },
                },
            ],
        },
    },
};
