import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const team = '/images/34-final/5fe11b00-9140-49cb-9fea-4a179aea23c9.jpg';
const work = '/images/34-final/wybrane/IMG_7392.jpg';
const stage = '/images/34-final/4673101d-8fb9-4c96-acbb-aa66e6f7a73a.jpg';

export const praktykiStudenckie: NewsSource = {
    slug: 'praktyki-studenckie-w-barcelonie-wosp',
    date: '2026-10-29',
    coverImage: team,
    tags: ['Praktyki', 'Studenci', 'Erasmus', 'Wolontariat', 'WOŚPBarcelona'],
    content: {
        pl: {
            title: 'Studiujesz w Barcelonie? Zrób u nas praktyki i pomagaj razem z WOŚP!',
            excerpt: 'Szukasz praktyk w Barcelonie lub okolicach? W Sztabie WOŚP Barcelona zdobędziesz prawdziwe doświadczenie przy organizacji dużego wydarzenia charytatywnego – w międzynarodowym zespole Polaków, Katalończyków, Hiszpanów i expatów, po polsku, angielsku i hiszpańsku.',
            sections: [
                {
                    p: [
                        'Jesteś studentem w Barcelonie lub okolicy – na stałe, na Erasmusie albo na wymianie? Twój program studiów wymaga praktyk, a Ty wolisz zrobić coś, co ma sens, niż parzyć kawę w biurze? Mamy dla Ciebie propozycję: **zrób praktyki w Sztabie WOŚP Barcelona**.',
                        'Co roku organizujemy w Barcelonie Finał Wielkiej Orkiestry Świątecznej Pomocy – wydarzenie, które przyciąga setki gości, dziesiątki wolontariuszy, sponsorów i artystów. Do tego przez cały rok przygotowujemy mniejsze wydarzenia, akcje i licytacje. To projekt, przy którym naprawdę jest co robić – i gdzie Twoja praca będzie widoczna.',
                    ],
                },
                {
                    title: 'Międzynarodowy zespół, trzy języki',
                    p: [
                        'Nasz sztab to mieszanka ludzi z różnych krajów i środowisk: **Polacy, Katalończycy, Hiszpanie i expaci** z całego świata. Pracujemy i rozmawiamy **po polsku, angielsku i hiszpańsku** – nie musisz znać wszystkich trzech języków, wystarczy jeden, a pozostałe będziesz mieć okazję ćwiczyć na co dzień.',
                        'To świetne środowisko, jeśli chcesz rozwijać kompetencje międzykulturowe, poznać ludzi spoza swojej uczelni i zobaczyć, jak działa organizacja oparta na wolontariacie.',
                    ],
                    image: { src: team, alt: 'Zespół i goście 34. Finału WOŚP w Barcelonie', caption: 'Zespół i goście 34. Finału WOŚP w Barcelonie.' },
                },
                {
                    title: 'W czym możesz się sprawdzić?',
                    p: ['Zakres praktyk dopasujemy do Twojego kierunku studiów i zainteresowań. Przykładowe obszary:'],
                    ul: [
                        '**Organizacja wydarzeń** – planowanie Finału i mniejszych akcji, harmonogramy, logistyka, kontakt z miejscami i dostawcami.',
                        '**Marketing i social media** – prowadzenie naszego Facebooka i Instagrama, kampanie promocyjne, materiały w kilku językach.',
                        '**Grafika, foto i wideo** – plakaty, posty, relacje i filmy z wydarzeń.',
                        '**Fundraising i współpraca ze sponsorami** – pozyskiwanie partnerów, przygotowanie ofert współpracy, relacje z firmami.',
                        '**Komunikacja i tłumaczenia** – teksty po polsku, angielsku i hiszpańsku, kontakt z mediami i partnerami.',
                        '**Gastronomia** – planowanie i przygotowanie jedzenia na wydarzenia, organizacja pracy w kuchni i na stoiskach.',
                        '**IT i strona internetowa** – rozwój tej strony, którą właśnie czytasz.',
                        '**Zarządzanie projektem** – koordynacja zespołu wolontariuszy i pilnowanie, żeby wszystko zagrało w dniu Finału.',
                    ],
                },
                {
                    title: 'Co zyskasz?',
                    ul: [
                        '**Prawdziwe doświadczenie** przy dużym wydarzeniu – od planowania po realizację – które możesz wpisać do CV.',
                        '**Odpowiedzialność za konkretny obszar**, a nie tylko „pomoc przy wszystkim”.',
                        '**Praktykę językową** w polskim, angielskim i hiszpańskim.',
                        '**Kontakty** z przedsiębiorcami, artystami i aktywistami z polskiej i międzynarodowej społeczności w Barcelonie.',
                        '**Satysfakcję** – efekt Twojej pracy to sprzęt medyczny dla dzieci w polskich szpitalach.',
                    ],
                    image: { src: work, alt: 'Wolontariusze przygotowujący Finał WOŚP w Barcelonie', caption: 'Przygotowania do 34. Finału WOŚP w Barcelonie.' },
                },
                {
                    title: 'Jak to wygląda w praktyce?',
                    p: [
                        'Najwięcej dzieje się w miesiącach przed Finałem, czyli jesienią i zimą – ale pracy przy wydarzeniach, promocji i współpracy ze sponsorami jest u nas przez cały rok. Czas i zakres praktyk ustalamy indywidualnie, tak żeby dało się je pogodzić z zajęciami na uczelni.',
                        'Jeśli Twoja uczelnia wymaga konkretnych dokumentów (np. porozumienia o praktykach albo potwierdzenia ich odbycia), napisz o tym od razu – omówimy formalności i sprawdzimy, co jest możliwe w Twoim przypadku.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona – miasto, w którym gramy z Orkiestrą.'),
                },
                {
                    title: 'Jak się zgłosić?',
                    ol: [
                        'Napisz do nas przez stronę **Kontakt** lub na Facebooku/Instagramie.',
                        'Napisz, **co studiujesz i na jakiej uczelni**, w jakim obszarze chcesz się sprawdzić i jakimi językami się posługujesz.',
                        'Podaj **termin i liczbę godzin**, których wymagają Twoje praktyki.',
                        'Umówimy się na krótką rozmowę i wspólnie ustalimy plan.',
                    ],
                },
                {
                    p: [
                        'Nie studiujesz, ale chcesz pomóc? Też zapraszamy! Wolontariuszy szukamy **przez cały rok** – przy kuchni, organizacji wydarzeń, licytacjach i wielu innych zadaniach. Więcej przeczytasz w poradniku **„Jak zostać wolontariuszem WOŚP w Barcelonie?”**.',
                    ],
                    image: { src: stage, alt: 'Scena podczas 34. Finału WOŚP w Barcelonie', caption: 'Na scenie 34. Finału WOŚP w Barcelonie.' },
                },
            ],
        },
        en: {
            title: 'Studying in Barcelona? Do your internship with us and help with WOŚP!',
            excerpt: 'Looking for an internship in or around Barcelona? At WOŚP Barcelona you will gain real experience organising a big charity event – in an international team of Poles, Catalans, Spaniards and expats, working in Polish, English and Spanish.',
            sections: [
                {
                    p: [
                        'Are you a student in or around Barcelona – permanently, on Erasmus or on an exchange? Does your degree require an internship, and would you rather do something meaningful than make coffee in an office? We have an offer for you: **do your internship with WOŚP Barcelona**.',
                        'Every year we organise the Great Orchestra of Christmas Charity Finale in Barcelona – an event that attracts hundreds of guests and dozens of volunteers, sponsors and artists. On top of that, we prepare smaller events, campaigns and auctions throughout the year. It is a project with plenty to do – where your work will really be visible.',
                    ],
                },
                {
                    title: 'An international team, three languages',
                    p: [
                        'Our staff is a mix of people from different countries and backgrounds: **Poles, Catalans, Spaniards and expats** from all over the world. We work and talk **in Polish, English and Spanish** – you don\'t need all three, one is enough, and you will get to practise the others every day.',
                        'It is a great environment if you want to develop intercultural skills, meet people outside your university and see how a volunteer-based organisation works.',
                    ],
                    image: { src: team, alt: 'Team and guests of the 34th WOŚP Finale in Barcelona', caption: 'Team and guests of the 34th WOŚP Finale in Barcelona.' },
                },
                {
                    title: 'Where can you get involved?',
                    p: ['We will tailor the internship to your field of study and interests. Example areas:'],
                    ul: [
                        '**Event management** – planning the Finale and smaller events, schedules, logistics, contact with venues and suppliers.',
                        '**Marketing and social media** – running our Facebook and Instagram, promotional campaigns, materials in several languages.',
                        '**Graphic design, photo and video** – posters, posts, event coverage and films.',
                        '**Fundraising and sponsorship** – finding partners, preparing partnership proposals, building relationships with companies.',
                        '**Communication and translation** – texts in Polish, English and Spanish, contact with media and partners.',
                        '**Catering** – planning and preparing food for events, organising work in the kitchen and at stands.',
                        '**IT and website** – developing this very website you are reading.',
                        '**Project management** – coordinating the volunteer team and making sure everything comes together on Finale day.',
                    ],
                },
                {
                    title: 'What will you gain?',
                    ul: [
                        '**Real experience** of a big event – from planning to delivery – that you can put on your CV.',
                        '**Responsibility for a specific area**, not just "helping with everything".',
                        '**Language practice** in Polish, English and Spanish.',
                        '**Contacts** with entrepreneurs, artists and activists from the Polish and international community in Barcelona.',
                        '**Satisfaction** – the result of your work is medical equipment for children in Polish hospitals.',
                    ],
                    image: { src: work, alt: 'Volunteers preparing the WOŚP Finale in Barcelona', caption: 'Preparations for the 34th WOŚP Finale in Barcelona.' },
                },
                {
                    title: 'What does it look like in practice?',
                    p: [
                        'Most happens in the months before the Finale, i.e. in autumn and winter – but there is work on events, promotion and sponsorship all year round. We agree the timing and scope of the internship individually, so that it fits around your classes.',
                        'If your university requires specific documents (e.g. an internship agreement or a confirmation of completion), tell us straight away – we will discuss the formalities and check what is possible in your case.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona – the city where we play with the Orchestra.'),
                },
                {
                    title: 'How to apply?',
                    ol: [
                        'Write to us via the **Contact** page or on Facebook/Instagram.',
                        'Tell us **what and where you study**, which area you would like to work in and which languages you speak.',
                        'Let us know the **dates and number of hours** your internship requires.',
                        'We will arrange a short chat and agree a plan together.',
                    ],
                },
                {
                    p: ['Not a student but want to help? You are welcome too! We look for volunteers **all year round** – in the kitchen, organising events, at auctions and with many other tasks. Read more in our guide **"How to become a WOŚP volunteer in Barcelona"**.'],
                    image: { src: stage, alt: 'The stage during the 34th WOŚP Finale in Barcelona', caption: 'On stage at the 34th WOŚP Finale in Barcelona.' },
                },
            ],
        },
        es: {
            title: '¿Estudias en Barcelona? ¡Haz tus prácticas con nosotros y ayuda con WOŚP!',
            excerpt: '¿Buscas prácticas en Barcelona o alrededores? En WOŚP Barcelona ganarás experiencia real organizando un gran evento solidario, en un equipo internacional de polacos, catalanes, españoles y expats, trabajando en polaco, inglés y castellano.',
            sections: [
                {
                    p: [
                        '¿Estudias en Barcelona o alrededores, de forma permanente, de Erasmus o de intercambio? ¿Tu carrera exige prácticas y prefieres hacer algo con sentido en lugar de servir cafés en una oficina? Tenemos una propuesta para ti: **haz tus prácticas en WOŚP Barcelona**.',
                        'Cada año organizamos en Barcelona el Final de la Gran Orquesta de la Caridad Navideña, un evento que reúne a cientos de invitados y a decenas de voluntarios, patrocinadores y artistas. Además, durante todo el año preparamos eventos más pequeños, campañas y subastas. Es un proyecto con mucho por hacer, donde tu trabajo se notará de verdad.',
                    ],
                },
                {
                    title: 'Un equipo internacional, tres idiomas',
                    p: [
                        'Nuestro equipo es una mezcla de personas de distintos países y orígenes: **polacos, catalanes, españoles y expats** de todo el mundo. Trabajamos y hablamos **en polaco, inglés y castellano**: no necesitas los tres, basta con uno, y tendrás ocasión de practicar los demás a diario.',
                        'Es un entorno ideal si quieres desarrollar competencias interculturales, conocer gente de fuera de tu universidad y ver cómo funciona una organización basada en el voluntariado.',
                    ],
                    image: { src: team, alt: 'Equipo e invitados del 34.º Final de WOŚP en Barcelona', caption: 'Equipo e invitados del 34.º Final de WOŚP en Barcelona.' },
                },
                {
                    title: '¿En qué puedes participar?',
                    p: ['Adaptaremos las prácticas a tus estudios e intereses. Algunas áreas posibles:'],
                    ul: [
                        '**Organización de eventos**: planificación del Final y de eventos más pequeños, calendarios, logística, contacto con espacios y proveedores.',
                        '**Marketing y redes sociales**: gestión de nuestro Facebook e Instagram, campañas, materiales en varios idiomas.',
                        '**Diseño gráfico, foto y vídeo**: carteles, publicaciones, crónicas y vídeos de los eventos.',
                        '**Captación de fondos y patrocinio**: búsqueda de colaboradores, propuestas de patrocinio, relación con empresas.',
                        '**Comunicación y traducción**: textos en polaco, inglés y castellano, contacto con medios y colaboradores.',
                        '**Gastronomía**: planificar y preparar la comida de los eventos, organizar el trabajo en la cocina y en los puestos.',
                        '**Informática y web**: desarrollo de esta misma web que estás leyendo.',
                        '**Gestión de proyectos**: coordinar al equipo de voluntarios y asegurarse de que todo salga bien el día del Final.',
                    ],
                },
                {
                    title: '¿Qué ganarás?',
                    ul: [
                        '**Experiencia real** en un gran evento, desde la planificación hasta la ejecución, que podrás incluir en tu CV.',
                        '**Responsabilidad sobre un área concreta**, no solo «ayudar en todo».',
                        '**Práctica de idiomas** en polaco, inglés y castellano.',
                        '**Contactos** con emprendedores, artistas y activistas de la comunidad polaca e internacional de Barcelona.',
                        '**Satisfacción**: el resultado de tu trabajo son equipos médicos para niños en hospitales polacos.',
                    ],
                    image: { src: work, alt: 'Voluntarios preparando el Final de WOŚP en Barcelona', caption: 'Preparativos del 34.º Final de WOŚP en Barcelona.' },
                },
                {
                    title: '¿Cómo funciona en la práctica?',
                    p: [
                        'Lo más intenso llega en los meses previos al Final, en otoño e invierno, pero hay trabajo en eventos, difusión y patrocinio todo el año. Acordamos el calendario y el alcance de las prácticas de forma individual, para que puedas compaginarlas con las clases.',
                        'Si tu universidad pide documentos concretos (por ejemplo, un convenio de prácticas o un certificado de realización), dínoslo desde el principio: hablaremos de los trámites y veremos qué es posible en tu caso.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona, la ciudad donde tocamos con la Orquesta.'),
                },
                {
                    title: '¿Cómo apuntarse?',
                    ol: [
                        'Escríbenos desde la página de **Contacto** o por Facebook/Instagram.',
                        'Cuéntanos **qué estudias y dónde**, en qué área te gustaría trabajar y qué idiomas hablas.',
                        'Indícanos las **fechas y el número de horas** que exigen tus prácticas.',
                        'Haremos una breve entrevista y acordaremos juntos un plan.',
                    ],
                },
                {
                    p: ['¿No estudias pero quieres ayudar? ¡También eres bienvenido! Buscamos voluntarios **todo el año**: en la cocina, en la organización de eventos, en las subastas y en muchas otras tareas. Lee más en nuestra guía **«¿Cómo ser voluntario de WOŚP en Barcelona?»**.'],
                    image: { src: stage, alt: 'El escenario durante el 34.º Final de WOŚP en Barcelona', caption: 'En el escenario del 34.º Final de WOŚP en Barcelona.' },
                },
            ],
        },
        ca: {
            title: 'Estudies a Barcelona? Fes les pràctiques amb nosaltres i ajuda amb WOŚP!',
            excerpt: 'Busques pràctiques a Barcelona o rodalies? A WOŚP Barcelona guanyaràs experiència real organitzant un gran esdeveniment solidari, en un equip internacional de polonesos, catalans, espanyols i expats, treballant en polonès, anglès i castellà.',
            sections: [
                {
                    p: [
                        'Estudies a Barcelona o rodalies, de manera permanent, d\'Erasmus o d\'intercanvi? La teva carrera demana pràctiques i prefereixes fer alguna cosa amb sentit en lloc de servir cafès en una oficina? Tenim una proposta per a tu: **fes les pràctiques a WOŚP Barcelona**.',
                        'Cada any organitzem a Barcelona el Final de la Gran Orquestra de la Caritat Nadalenca, un esdeveniment que reuneix centenars de convidats i desenes de voluntaris, patrocinadors i artistes. A més, durant tot l\'any preparem esdeveniments més petits, campanyes i subhastes. És un projecte amb molta feina, on el teu treball es notarà de debò.',
                    ],
                },
                {
                    title: 'Un equip internacional, tres idiomes',
                    p: [
                        'El nostre equip és una barreja de persones de diferents països i orígens: **polonesos, catalans, espanyols i expats** de tot el món. Treballem i parlem **en polonès, anglès i castellà**: no cal que en sàpigues els tres, n\'hi ha prou amb un, i tindràs ocasió de practicar els altres cada dia.',
                        'És un entorn ideal si vols desenvolupar competències interculturals, conèixer gent de fora de la teva universitat i veure com funciona una organització basada en el voluntariat.',
                    ],
                    image: { src: team, alt: 'Equip i convidats del 34è Final de WOŚP a Barcelona', caption: 'Equip i convidats del 34è Final de WOŚP a Barcelona.' },
                },
                {
                    title: 'En què pots participar?',
                    p: ['Adaptarem les pràctiques als teus estudis i interessos. Algunes àrees possibles:'],
                    ul: [
                        '**Organització d\'esdeveniments**: planificació del Final i d\'esdeveniments més petits, calendaris, logística, contacte amb espais i proveïdors.',
                        '**Màrqueting i xarxes socials**: gestió del nostre Facebook i Instagram, campanyes, materials en diversos idiomes.',
                        '**Disseny gràfic, foto i vídeo**: cartells, publicacions, cròniques i vídeos dels esdeveniments.',
                        '**Captació de fons i patrocini**: cerca de col·laboradors, propostes de patrocini, relació amb empreses.',
                        '**Comunicació i traducció**: textos en polonès, anglès i castellà, contacte amb mitjans i col·laboradors.',
                        '**Gastronomia**: planificar i preparar el menjar dels esdeveniments, organitzar la feina a la cuina i a les parades.',
                        '**Informàtica i web**: desenvolupament d\'aquest mateix web que estàs llegint.',
                        '**Gestió de projectes**: coordinar l\'equip de voluntaris i assegurar-se que tot surti bé el dia del Final.',
                    ],
                },
                {
                    title: 'Què hi guanyaràs?',
                    ul: [
                        '**Experiència real** en un gran esdeveniment, des de la planificació fins a l\'execució, que podràs incloure al teu CV.',
                        '**Responsabilitat sobre una àrea concreta**, no només «ajudar en tot».',
                        '**Pràctica d\'idiomes** en polonès, anglès i castellà.',
                        '**Contactes** amb emprenedors, artistes i activistes de la comunitat polonesa i internacional de Barcelona.',
                        '**Satisfacció**: el resultat de la teva feina són equips mèdics per a infants en hospitals polonesos.',
                    ],
                    image: { src: work, alt: 'Voluntaris preparant el Final de WOŚP a Barcelona', caption: 'Preparatius del 34è Final de WOŚP a Barcelona.' },
                },
                {
                    title: 'Com funciona a la pràctica?',
                    p: [
                        'El més intens arriba els mesos previs al Final, a la tardor i l\'hivern, però hi ha feina en esdeveniments, difusió i patrocini tot l\'any. Acordem el calendari i l\'abast de les pràctiques de manera individual, perquè les puguis compaginar amb les classes.',
                        'Si la teva universitat demana documents concrets (per exemple, un conveni de pràctiques o un certificat de realització), digues-nos-ho des del principi: parlarem dels tràmits i veurem què és possible en el teu cas.',
                    ],
                    image: withCaption(IMG.barcelonaSkyline, 'Barcelona, la ciutat on toquem amb l\'Orquestra.'),
                },
                {
                    title: 'Com apuntar-s\'hi?',
                    ol: [
                        'Escriu-nos des de la pàgina de **Contacte** o per Facebook/Instagram.',
                        'Explica\'ns **què estudies i on**, en quina àrea t\'agradaria treballar i quins idiomes parles.',
                        'Indica\'ns les **dates i el nombre d\'hores** que demanen les teves pràctiques.',
                        'Farem una breu entrevista i acordarem junts un pla.',
                    ],
                },
                {
                    p: ['No estudies però vols ajudar? També ets benvingut! Busquem voluntaris **tot l\'any**: a la cuina, en l\'organització d\'esdeveniments, a les subhastes i en moltes altres tasques. Llegeix-ne més a la nostra guia **«Com ser voluntari de WOŚP a Barcelona?»**.'],
                    image: { src: stage, alt: 'L\'escenari durant el 34è Final de WOŚP a Barcelona', caption: 'A l\'escenari del 34è Final de WOŚP a Barcelona.' },
                },
            ],
        },
    },
};
