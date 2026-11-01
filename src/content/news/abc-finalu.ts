import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const slide = '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg';
const auctions = '/images/allegro/11_34FinalWOSP2026_grafika_AUKCJE_podglad.png';
const stand = '/images/34-final/1839e07d-8956-4617-b3b5-02805c21b81d.jpg';

export const abcFinalu: NewsSource = {
    slug: 'czym-jest-swiatelko-do-nieba-jak-wyglada-dzien-finalu',
    date: '2026-01-08',
    coverImage: slide,
    tags: ['ŚwiatełkoDoNieba', 'FinałWOŚP', 'Poradnik', 'WOŚPBarcelona'],
    sources: [
        { label: 'Super Express – aukcje Allegro', url: 'https://www.se.pl/styl-zycia/psychologia/70-aukcji-wosp-na-allegro-to-oferty-do-200-zl-trwaja-licytacje-34-finalu-i-kazdy-moze-dolozyc-sie-do-jego-sukcesu-aa-u9Um-XqKd-x3W2.html' },
        { label: 'WOŚP – Bieg Policz się z cukrzycą', url: 'https://wosp.org.pl/aktualnosci/pobiegnij-dla-siebie-i-dla-innych' },
    ],
    content: {
        pl: {
            title: 'Złote Serduszko, Światełko do nieba i puszki – ABC dnia Finału WOŚP',
            excerpt: 'Pierwszy raz na Finale WOŚP? Wyjaśniamy najważniejsze tradycje Orkiestry – od czerwonego serduszka, przez Złote Serduszko i licytacje, po „Światełko do nieba” o 20:00 – i podpowiadamy, jak najlepiej przeżyć Finał w Barcelonie.',
            sections: [
                {
                    p: [
                        'Finał Wielkiej Orkiestry Świątecznej Pomocy to od ponad 30 lat jeden dzień w roku, w którym Polacy w kraju i na całym świecie wspólnie zbierają pieniądze na sprzęt medyczny dla szpitali. Dla wielu osób to rodzinna tradycja, porównywalna ze świętami. Ale jeśli dopiero przeprowadziłeś się do Barcelony, przyprowadzasz na Finał hiszpańskich czy katalońskich znajomych albo po prostu chcesz lepiej zrozumieć, o co w tym wszystkim chodzi – ten poradnik jest dla Ciebie.',
                        '34. Finał zagra w niedzielę **25 stycznia 2026 roku**. Oto mały słowniczek Orkiestry.',
                    ],
                    image: { src: slide, alt: 'Grafika: 34. Finał WOŚP zagra 25 stycznia 2026', caption: '34. Finał WOŚP gra 25 stycznia 2026 roku.' },
                },
                {
                    title: 'Czerwone serduszko',
                    p: [
                        'Najbardziej rozpoznawalny symbol Orkiestry. Kiedy wrzucisz datek do puszki, wolontariusz naklei Ci na kurtkę czerwone serduszko z napisem „Wielka Orkiestra Świątecznej Pomocy”. W dniu Finału w Polsce trudno spotkać kogoś bez serduszka – to znak, że „już zagrał”.',
                        'To samo serduszko znajdziesz na sprzęcie medycznym w polskich szpitalach – inkubatorach, respiratorach, aparatach USG. Przez ponad 30 lat Fundacja kupiła prawie 81 tysięcy urządzeń.',
                    ],
                },
                {
                    title: 'Puszka i identyfikator',
                    p: [
                        'Wolontariusze zbierają pieniądze do charakterystycznych, **zaplombowanych puszek**. Każdy wolontariusz ma przy sobie **identyfikator ze zdjęciem** i numerem – jeśli ktoś zbiera „na WOŚP” bez identyfikatora, to nie jest wolontariusz Orkiestry. Puszki otwierane są dopiero po Finale, komisyjnie.',
                    ],
                },
                {
                    title: 'E-skarbonka',
                    p: [
                        'Internetowa wersja puszki. Każdy wolontariusz, sztab, firma czy osoba prywatna może założyć własną e-skarbonkę i zbierać na Finał przez internet. Wpłacić można kartą z dowolnego miejsca na świecie – to idealne rozwiązanie dla rodziny i znajomych, którzy nie mogą przyjść na nasz Finał w Barcelonie.',
                    ],
                },
                {
                    title: 'Złote Serduszko',
                    p: [
                        'Co roku Fundacja licytuje wyjątkowe serduszko ze złota. To tradycyjnie najdroższy przedmiot każdego Finału. Podczas 33. Finału w 2025 roku Złote Serduszko sprzedano za ok. **1,3 mln zł**. Ciekawe, ile osiągnie w tym roku! Obok niego licytowana jest m.in. **Złota Karta Telefoniczna**.',
                    ],
                },
                {
                    title: 'Licytacje i aukcje Allegro',
                    p: [
                        'Licytacje to serce każdego Finału. Na Allegro co roku wystawianych są tysiące przedmiotów, usług i spotkań: od koszulek z autografami sportowców, przez obrazy i rękodzieło, po kolacje z gwiazdami. Co ważne, **około 70% aukcji WOŚP na Allegro to oferty do 200 zł** – więc naprawdę każdy może dołożyć swoją cegiełkę. Aukcje trwają jeszcze kilka tygodni po Finale (w tym roku – do 26 lutego).',
                        'Na naszym Finale w Barcelonie organizujemy też licytacje na żywo: od tortów i obrazów, przez vouchery od lokalnych firm, po przedmioty przekazane przez naszych sponsorów.',
                    ],
                    image: { src: auctions, alt: 'Grafika aukcji 34. Finału WOŚP', caption: 'Aukcje 34. Finału WOŚP na Allegro.' },
                },
                {
                    title: 'Światełko do nieba',
                    p: [
                        'Kulminacja dnia, zwykle **o godzinie 20:00**. Sztaby w całej Polsce i na świecie wysyłają w niebo światło – fajerwerki, lasery, latarki, światła telefonów. To symboliczny moment, w którym miliony ludzi w tym samym czasie łączą się w jednym geście: „gramy razem”.',
                        'W dużych miastach Polski Światełko do nieba to wielkie pokazy fajerwerków. W Barcelonie robimy to po swojemu – wspólnie, z latarkami telefonów, w gronie wolontariuszy, gości i przyjaciół.',
                    ],
                    image: withCaption(IMG.swiatelko, 'Światełko do nieba nad Pałacem Kultury i Nauki w Warszawie.'),
                },
                {
                    title: 'Bieg „Policz się z cukrzycą”',
                    p: [
                        'Tradycją Finału jest też bieg „Policz się z cukrzycą”, organizowany w wielu miastach w dniu Finału. Biegacze dostają specjalne numery startowe, a wpisowe zasila konto Orkiestry. Bieg ma też cel edukacyjny – przypomina, jak ważne jest badanie poziomu cukru we krwi. Można w nim wziąć udział także wirtualnie, z dowolnego miejsca na świecie.',
                    ],
                },
                {
                    title: 'Jak wygląda Finał w Barcelonie?',
                    p: [
                        'Nasz Finał to cały dzień atrakcji dla dużych i małych:',
                    ],
                    ul: [
                        '**koncerty** polskich i lokalnych artystów,',
                        '**stoiska** z polskim jedzeniem i domowymi ciastami,',
                        '**zajęcia dla dzieci** – malowanie twarzy, gry, warsztaty,',
                        '**licytacje na żywo** i kiermasz,',
                        '**wolontariusze z puszkami** na miejscu i w okolicy,',
                        '**wspólne Światełko do nieba** wieczorem.',
                    ],
                    image: { src: stand, alt: 'Stoisko z jedzeniem na Finale WOŚP w Barcelonie', caption: 'Stoisko z polskimi przysmakami na 34. Finale w Barcelonie.' },
                },
                {
                    title: 'Kilka rad dla nowych gości',
                    ul: [
                        'Weź gotówkę w euro – do puszek i na stoiska.',
                        'Przyprowadź znajomych z Katalonii czy Hiszpanii – nasze materiały są w czterech językach, a wolontariusze chętnie opowiedzą o Orkiestrze.',
                        'Przyjdź z dziećmi – dla nich przygotowujemy osobne atrakcje.',
                        'Sprawdź program na naszej stronie i w mediach społecznościowych – szczegóły publikujemy kilka tygodni przed Finałem.',
                    ],
                },
                {
                    p: ['Nie trzeba znać polskiego, żeby grać z nami – wystarczy dobre serce. Do zobaczenia na Finale!'],
                },
            ],
        },
        en: {
            title: 'Golden Heart, Light to Heaven and collection boxes – the ABC of WOŚP Finale day',
            excerpt: 'First time at a WOŚP Finale? We explain the Orchestra\'s key traditions – from the red heart sticker, the Golden Heart and auctions to the "Light to Heaven" at 8 pm – and share tips on how to enjoy the Finale in Barcelona.',
            sections: [
                {
                    p: [
                        'For over 30 years, the Great Orchestra of Christmas Charity Finale has been the one day a year when Poles at home and all over the world raise money together for hospital equipment. For many it is a family tradition, as important as the holidays. But if you have just moved to Barcelona, are bringing Spanish or Catalan friends to the Finale, or simply want to understand what it is all about – this guide is for you.',
                        'The 34th Finale takes place on Sunday, **25 January 2026**. Here is a small Orchestra glossary.',
                    ],
                    image: { src: slide, alt: 'Graphic: the 34th WOŚP Finale plays on 25 January 2026', caption: 'The 34th WOŚP Finale plays on 25 January 2026.' },
                },
                {
                    title: 'The red heart',
                    p: [
                        'The Orchestra\'s most recognisable symbol. When you drop a donation into a box, the volunteer sticks a red heart saying "Wielka Orkiestra Świątecznej Pomocy" on your jacket. On Finale day in Poland it is hard to meet anyone without a heart – it means they have "already played".',
                        'You will find the same heart on medical equipment in Polish hospitals – incubators, ventilators, ultrasound machines. Over 30+ years the Foundation has bought almost 81,000 devices.',
                    ],
                },
                {
                    title: 'Collection box and ID badge',
                    p: ['Volunteers collect money in distinctive **sealed boxes**. Every volunteer carries an **ID badge with a photo** and number – if someone collects "for WOŚP" without a badge, they are not an Orchestra volunteer. Boxes are only opened after the Finale, by a committee.'],
                },
                {
                    title: 'Online money box',
                    p: ['The internet version of the box. Any volunteer, staff, company or individual can set up their own online box and collect for the Finale online. You can donate by card from anywhere in the world – ideal for family and friends who can\'t come to our Finale in Barcelona.'],
                },
                {
                    title: 'Golden Heart',
                    p: ['Every year the Foundation auctions a unique heart made of gold – traditionally the most expensive item of each Finale. At the 33rd Finale in 2025 the Golden Heart sold for about **1.3 million PLN**. We are curious how much it will reach this year! Alongside it, the **Golden Phone Card** is also auctioned.'],
                },
                {
                    title: 'Auctions on Allegro',
                    p: [
                        'Auctions are the heart of every Finale. Thousands of items, services and meetings are listed on Allegro each year: from shirts signed by athletes, through paintings and handicrafts, to dinners with celebrities. Importantly, **about 70% of WOŚP auctions on Allegro are offers up to 200 PLN** – so truly everyone can contribute. Auctions continue for several weeks after the Finale (this year – until 26 February).',
                        'At our Barcelona Finale we also hold live auctions: from cakes and paintings, through vouchers from local businesses, to items donated by our sponsors.',
                    ],
                    image: { src: auctions, alt: '34th WOŚP Finale auctions graphic', caption: '34th WOŚP Finale auctions on Allegro.' },
                },
                {
                    title: 'Light to Heaven',
                    p: [
                        'The highlight of the day, usually **at 8 pm**. Staffs all over Poland and the world send light into the sky – fireworks, lasers, torches, phone lights. A symbolic moment when millions of people make the same gesture at the same time: "we play together".',
                        'In big Polish cities the Light to Heaven means huge firework shows. In Barcelona we do it our way – together, with phone lights, among volunteers, guests and friends.',
                    ],
                    image: withCaption(IMG.swiatelko, 'Light to Heaven above the Palace of Culture and Science in Warsaw.'),
                },
                {
                    title: 'The "Count yourself with diabetes" run',
                    p: ['Another Finale tradition is the "Policz się z cukrzycą" run, held in many cities on Finale day. Runners get special bib numbers and the entry fee goes to the Orchestra. The run also has an educational goal – reminding people how important it is to check blood sugar. You can also take part virtually, from anywhere in the world.'],
                },
                {
                    title: 'What is the Finale like in Barcelona?',
                    p: ['Our Finale is a full day of attractions for all ages:'],
                    ul: [
                        '**concerts** by Polish and local artists,',
                        '**stands** with Polish food and homemade cakes,',
                        '**activities for children** – face painting, games, workshops,',
                        '**live auctions** and a fair,',
                        '**volunteers with boxes** at the venue and around,',
                        '**a shared Light to Heaven** in the evening.',
                    ],
                    image: { src: stand, alt: 'Food stand at the WOŚP Finale in Barcelona', caption: 'A stand with Polish treats at the 34th Finale in Barcelona.' },
                },
                {
                    title: 'Tips for first-time guests',
                    ul: [
                        'Bring cash in euros – for boxes and stands.',
                        'Bring Catalan or Spanish friends – our materials are in four languages and volunteers love explaining the Orchestra.',
                        'Come with children – we prepare special attractions for them.',
                        'Check the programme on our website and social media – we publish details a few weeks before the Finale.',
                    ],
                },
                { p: ['You don\'t need to speak Polish to play with us – a good heart is enough. See you at the Finale!'] },
            ],
        },
        es: {
            title: 'Corazón de Oro, Luz al cielo y huchas: el ABC del día del Final de WOŚP',
            excerpt: '¿Es tu primer Final de WOŚP? Te explicamos las tradiciones más importantes de la Orquesta, desde el corazón rojo, el Corazón de Oro y las subastas hasta la «Luz al cielo» de las 20:00, y te damos consejos para disfrutar del Final en Barcelona.',
            sections: [
                {
                    p: [
                        'Desde hace más de 30 años, el Final de la Gran Orquesta de la Caridad Navideña es el día del año en que los polacos, en Polonia y en todo el mundo, recaudan juntos dinero para equipos hospitalarios. Para muchos es una tradición familiar tan importante como las fiestas. Pero si acabas de llegar a Barcelona, vienes al Final con amigos catalanes o españoles o simplemente quieres entender de qué va todo esto, esta guía es para ti.',
                        'El 34.º Final se celebra el domingo **25 de enero de 2026**. Aquí tienes un pequeño glosario de la Orquesta.',
                    ],
                    image: { src: slide, alt: 'Gráfico: el 34.º Final de WOŚP se celebra el 25 de enero de 2026', caption: 'El 34.º Final de WOŚP se celebra el 25 de enero de 2026.' },
                },
                {
                    title: 'El corazón rojo',
                    p: [
                        'El símbolo más reconocible de la Orquesta. Cuando echas un donativo en la hucha, el voluntario te pega en la chaqueta un corazón rojo con el lema «Wielka Orkiestra Świątecznej Pomocy». El día del Final en Polonia es difícil ver a alguien sin corazón: significa que ya ha colaborado.',
                        'El mismo corazón aparece en los equipos médicos de los hospitales polacos: incubadoras, respiradores, ecógrafos. En más de 30 años la Fundación ha comprado casi 81.000 aparatos.',
                    ],
                },
                {
                    title: 'Hucha y acreditación',
                    p: ['Los voluntarios recaudan en sus características **huchas precintadas**. Cada voluntario lleva una **acreditación con foto** y número: si alguien recauda «para WOŚP» sin acreditación, no es voluntario de la Orquesta. Las huchas solo se abren después del Final, ante una comisión.'],
                },
                {
                    title: 'Hucha online',
                    p: ['La versión en internet de la hucha. Cualquier voluntario, equipo, empresa o particular puede crear su propia hucha online y recaudar para el Final. Se puede donar con tarjeta desde cualquier lugar del mundo: ideal para familiares y amigos que no pueden venir a nuestro Final en Barcelona.'],
                },
                {
                    title: 'El Corazón de Oro',
                    p: ['Cada año la Fundación subasta un corazón único de oro, tradicionalmente el objeto más caro de cada Final. En el 33.º Final, en 2025, el Corazón de Oro se vendió por unos **1,3 millones de PLN**. ¡Veremos cuánto alcanza este año! Junto a él se subasta también la **Tarjeta Telefónica de Oro**.'],
                },
                {
                    title: 'Subastas en Allegro',
                    p: [
                        'Las subastas son el corazón de cada Final. Cada año se publican en Allegro miles de objetos, servicios y encuentros: desde camisetas firmadas por deportistas, cuadros y artesanía hasta cenas con famosos. Y algo importante: **cerca del 70 % de las subastas de WOŚP en Allegro son ofertas de hasta 200 PLN**, así que de verdad cualquiera puede aportar. Las subastas siguen varias semanas después del Final (este año, hasta el 26 de febrero).',
                        'En nuestro Final de Barcelona también hacemos subastas en directo: tartas, cuadros, vales de negocios locales y objetos donados por nuestros patrocinadores.',
                    ],
                    image: { src: auctions, alt: 'Gráfico de las subastas del 34.º Final de WOŚP', caption: 'Subastas del 34.º Final de WOŚP en Allegro.' },
                },
                {
                    title: 'La Luz al cielo',
                    p: [
                        'El momento culminante del día, normalmente **a las 20:00**. Los equipos de toda Polonia y del mundo lanzan luz al cielo: fuegos artificiales, láseres, linternas, luces de móviles. Un momento simbólico en el que millones de personas hacen el mismo gesto a la vez: «tocamos juntos».',
                        'En las grandes ciudades polacas, la Luz al cielo son grandes espectáculos pirotécnicos. En Barcelona lo hacemos a nuestra manera: juntos, con las luces de los móviles, entre voluntarios, invitados y amigos.',
                    ],
                    image: withCaption(IMG.swiatelko, 'Luz al cielo sobre el Palacio de la Cultura y la Ciencia de Varsovia.'),
                },
                {
                    title: 'La carrera «Cuéntate con la diabetes»',
                    p: ['Otra tradición del Final es la carrera «Policz się z cukrzycą», que se celebra en muchas ciudades el día del Final. Los corredores reciben dorsales especiales y la inscripción va a la Orquesta. La carrera también tiene un fin educativo: recordar lo importante que es controlar el azúcar en sangre. Se puede participar de forma virtual desde cualquier lugar del mundo.'],
                },
                {
                    title: '¿Cómo es el Final en Barcelona?',
                    p: ['Nuestro Final es un día entero de actividades para todas las edades:'],
                    ul: [
                        '**conciertos** de artistas polacos y locales,',
                        '**puestos** de comida polaca y pasteles caseros,',
                        '**actividades para niños**: pintacaras, juegos, talleres,',
                        '**subastas en directo** y mercadillo,',
                        '**voluntarios con huchas** en el lugar y por los alrededores,',
                        '**una Luz al cielo compartida** por la noche.',
                    ],
                    image: { src: stand, alt: 'Puesto de comida en el Final de WOŚP en Barcelona', caption: 'Un puesto de delicias polacas en el 34.º Final en Barcelona.' },
                },
                {
                    title: 'Consejos para quien viene por primera vez',
                    ul: [
                        'Trae efectivo en euros para las huchas y los puestos.',
                        'Ven con amigos catalanes o españoles: nuestros materiales están en cuatro idiomas y a los voluntarios les encanta explicar qué es la Orquesta.',
                        'Ven con niños: preparamos actividades especiales para ellos.',
                        'Consulta el programa en nuestra web y redes sociales: publicamos los detalles unas semanas antes del Final.',
                    ],
                },
                { p: ['No hace falta saber polaco para tocar con nosotros: basta con buen corazón. ¡Nos vemos en el Final!'] },
            ],
        },
        ca: {
            title: 'Cor d\'Or, Llum al cel i guardioles: l\'ABC del dia del Final de WOŚP',
            excerpt: 'És el teu primer Final de WOŚP? T\'expliquem les tradicions més importants de l\'Orquestra, des del cor vermell, el Cor d\'Or i les subhastes fins a la «Llum al cel» de les 20:00, i et donem consells per gaudir del Final a Barcelona.',
            sections: [
                {
                    p: [
                        'Des de fa més de 30 anys, el Final de la Gran Orquestra de la Caritat Nadalenca és el dia de l\'any en què els polonesos, a Polònia i a tot el món, recapten junts diners per a equips hospitalaris. Per a molts és una tradició familiar tan important com les festes. Però si t\'acabes d\'instal·lar a Barcelona, véns al Final amb amics catalans o espanyols o simplement vols entendre de què va tot plegat, aquesta guia és per a tu.',
                        'El 34è Final se celebra diumenge **25 de gener de 2026**. Aquí tens un petit glossari de l\'Orquestra.',
                    ],
                    image: { src: slide, alt: 'Gràfic: el 34è Final de WOŚP se celebra el 25 de gener de 2026', caption: 'El 34è Final de WOŚP se celebra el 25 de gener de 2026.' },
                },
                {
                    title: 'El cor vermell',
                    p: [
                        'El símbol més reconegut de l\'Orquestra. Quan poses un donatiu a la guardiola, el voluntari t\'enganxa a la jaqueta un cor vermell amb el lema «Wielka Orkiestra Świątecznej Pomocy». El dia del Final a Polònia és difícil veure algú sense cor: vol dir que ja hi ha col·laborat.',
                        'El mateix cor apareix als equips mèdics dels hospitals polonesos: incubadores, respiradors, ecògrafs. En més de 30 anys la Fundació ha comprat gairebé 81.000 aparells.',
                    ],
                },
                {
                    title: 'Guardiola i acreditació',
                    p: ['Els voluntaris recapten amb les seves característiques **guardioles precintades**. Cada voluntari porta una **acreditació amb foto** i número: si algú recapta «per a WOŚP» sense acreditació, no és voluntari de l\'Orquestra. Les guardioles només s\'obren després del Final, davant d\'una comissió.'],
                },
                {
                    title: 'Guardiola en línia',
                    p: ['La versió a internet de la guardiola. Qualsevol voluntari, equip, empresa o particular pot crear la seva pròpia guardiola en línia i recaptar per al Final. Es pot donar amb targeta des de qualsevol lloc del món: ideal per a familiars i amics que no poden venir al nostre Final a Barcelona.'],
                },
                {
                    title: 'El Cor d\'Or',
                    p: ['Cada any la Fundació subhasta un cor únic d\'or, tradicionalment l\'objecte més car de cada Final. Al 33è Final, el 2025, el Cor d\'Or es va vendre per uns **1,3 milions de PLN**. Veurem quant arriba aquest any! Al seu costat també se subhasta la **Targeta Telefònica d\'Or**.'],
                },
                {
                    title: 'Subhastes a Allegro',
                    p: [
                        'Les subhastes són el cor de cada Final. Cada any es publiquen a Allegro milers d\'objectes, serveis i trobades: des de samarretes signades per esportistes, quadres i artesania fins a sopars amb famosos. I una cosa important: **prop del 70 % de les subhastes de WOŚP a Allegro són ofertes de fins a 200 PLN**, així que de debò qualsevol pot aportar-hi. Les subhastes continuen unes setmanes després del Final (aquest any, fins al 26 de febrer).',
                        'Al nostre Final de Barcelona també fem subhastes en directe: pastissos, quadres, vals de negocis locals i objectes donats pels nostres patrocinadors.',
                    ],
                    image: { src: auctions, alt: 'Gràfic de les subhastes del 34è Final de WOŚP', caption: 'Subhastes del 34è Final de WOŚP a Allegro.' },
                },
                {
                    title: 'La Llum al cel',
                    p: [
                        'El moment culminant del dia, normalment **a les 20:00**. Els equips de tot Polònia i del món llancen llum al cel: focs artificials, làsers, llanternes, llums de mòbils. Un moment simbòlic en què milions de persones fan el mateix gest alhora: «toquem junts».',
                        'A les grans ciutats poloneses, la Llum al cel són grans espectacles pirotècnics. A Barcelona ho fem a la nostra manera: junts, amb les llums dels mòbils, entre voluntaris, convidats i amics.',
                    ],
                    image: withCaption(IMG.swiatelko, 'Llum al cel sobre el Palau de la Cultura i la Ciència de Varsòvia.'),
                },
                {
                    title: 'La cursa «Compta\'t amb la diabetis»',
                    p: ['Una altra tradició del Final és la cursa «Policz się z cukrzycą», que se celebra a moltes ciutats el dia del Final. Els corredors reben dorsals especials i la inscripció va a l\'Orquestra. La cursa també té una finalitat educativa: recordar com és d\'important controlar el sucre a la sang. S\'hi pot participar de manera virtual des de qualsevol lloc del món.'],
                },
                {
                    title: 'Com és el Final a Barcelona?',
                    p: ['El nostre Final és un dia sencer d\'activitats per a totes les edats:'],
                    ul: [
                        '**concerts** d\'artistes polonesos i locals,',
                        '**parades** de menjar polonès i pastissos casolans,',
                        '**activitats per a infants**: pintar cares, jocs, tallers,',
                        '**subhastes en directe** i mercat,',
                        '**voluntaris amb guardioles** al recinte i pels voltants,',
                        '**una Llum al cel compartida** al vespre.',
                    ],
                    image: { src: stand, alt: 'Parada de menjar al Final de WOŚP a Barcelona', caption: 'Una parada de delícies poloneses al 34è Final a Barcelona.' },
                },
                {
                    title: 'Consells per a qui ve per primera vegada',
                    ul: [
                        'Porta efectiu en euros per a les guardioles i les parades.',
                        'Vine amb amics catalans o espanyols: els nostres materials són en quatre idiomes i als voluntaris els encanta explicar què és l\'Orquestra.',
                        'Vine amb infants: preparem activitats especials per a ells.',
                        'Consulta el programa al nostre web i a les xarxes socials: publiquem els detalls unes setmanes abans del Final.',
                    ],
                },
                { p: ['No cal saber polonès per tocar amb nosaltres: n\'hi ha prou amb un bon cor. Ens veiem al Final!'] },
            ],
        },
    },
};
