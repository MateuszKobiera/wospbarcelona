import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

export const tourDeFranceBarcelona: NewsSource = {
    slug: 'tour-de-france-2026-start-w-barcelonie',
    date: '2026-07-07',
    coverImage: '/images/blog/commons/estadi-olimpic.jpg',
    tags: ['Barcelona', 'TourDeFrance', 'Sport', 'Katalonia'],
    sources: [
        { label: 'Catalan News – prezentacja Grand Départ', url: 'https://www.catalannews.com/tour-de-france-2026/item/tour-de-france-2026-presentation-in-barcelona' },
        { label: 'Catalan News – hotele', url: 'https://www.catalannews.com/society-science/item/hotels-full-and-excitement-builds-for-tour-de-france-around-catalonia' },
        { label: 'The New Barcelona Post', url: 'https://www.thenewbarcelonapost.com/en/what-does-barcelona-gain-from-the-tour-de-france/' },
        { label: 'Diari de Tarragona', url: 'https://www.diaridetarragona.com/tarragona/223633/el-tour-de-francia-pasara-por-tarragona-en-2026-mi23097759.html' },
        { label: 'Barcelona Turisme (PDF)', url: 'https://download.barcelonaturisme.com/1006/Gran_Depart_Tour_France.pdf' },
    ],
    content: {
        pl: {
            title: 'Tour de France wystartował z Barcelony! Co Grand Départ 2026 oznaczał dla miasta – i dla nas',
            excerpt: 'Od 4 do 6 lipca 2026 roku najsłynniejszy wyścig kolarski świata ścigał się po ulicach Barcelony i Katalonii. Opowiadamy o trasie, historii, liczbach i o tym, co takie wydarzenie oznacza dla mieszkańców i lokalnych firm – także polskich.',
            sections: [
                {
                    p: [
                        'Barcelona po raz kolejny udowodniła, że jest jedną ze sportowych stolic świata. W lipcu 2026 roku miasto gościło **Grand Départ – uroczysty start Tour de France**, najważniejszego wyścigu kolarskiego na świecie. Pierwsze trzy etapy Wielkiej Pętli odbyły się w Katalonii, zanim kolarze przenieśli się do Francji.',
                        'Burmistrz Jaume Collboni podkreślał, że Barcelona jest pierwszym miastem na świecie, które gościło mundial, igrzyska olimpijskie, regaty o Puchar Ameryki i start Tour de France. Nazwał ją „prawdziwą światową stolicą sportu”.',
                    ],
                    image: withCaption(IMG.estadiOlimpic, 'Stadion Olimpijski na Montjuïc – meta pierwszego etapu Tour de France 2026.'),
                },
                {
                    title: 'Trasa katalońskich etapów',
                    ul: [
                        '**2 lipca** – prezentacja drużyn w Barcelonie.',
                        '**Etap 1 (sobota, 4 lipca)** – jazda drużynowa na czas na dystansie **19,7 km**, z Parc del Fòrum do Stadionu Olimpijskiego na Montjuïc.',
                        '**Etap 2 (niedziela, 5 lipca)** – ok. **178 km** z **Tarragony** wzdłuż wybrzeża przez **Sitges**, z podjazdami w okolicach **Begues**, i finałem na trzech rundach po wzgórzu **Montjuïc**.',
                        '**Etap 3 (poniedziałek, 6 lipca)** – start w **Granollers** i przejazd w stronę Francji.',
                    ],
                    p: ['Cały wyścig potrwa do **26 lipca** i tradycyjnie zakończy się w Paryżu.'],
                },
                {
                    title: 'Tour w Barcelonie – nie pierwszy raz',
                    p: [
                        'Barcelona gościła już Wielką Pętlę wcześniej: w **1957 roku** (trzy etapy), w **1965 roku** (dwa etapy) i w **2009 roku**, kiedy peleton jechał z Girony do Barcelony, a następnie z Barcelony do Andory. Ale nigdy wcześniej wyścig nie zaczynał się właśnie tutaj.',
                    ],
                    image: withCaption(IMG.peloton, 'Peleton Tour de France (zdjęcie z wyścigu w 2024 roku).'),
                },
                {
                    title: 'Liczby: miliony euro i pełne hotele',
                    ul: [
                        'Katalońska Agencja Turystyki szacowała wpływ ekonomiczny Grand Départ na **około 125 mln euro** dla całego regionu (inne szacunki mówiły o ok. 130 mln euro).',
                        'Koszt dla instytucji publicznych – miasta, Diputació i Generalitat – burmistrz szacował na **około 7 mln euro**.',
                        'Tarragona spodziewała się na trasie drugiego etapu **50–80 tysięcy kibiców**.',
                        'Media donosiły o bardzo wysokim obłożeniu hoteli w Barcelonie i okolicach w dniach wyścigu.',
                        'Transmisje telewizyjne pokazały Barcelonę, Montjuïc i katalońskie wybrzeże widzom na całym świecie.',
                    ],
                },
                {
                    title: 'Co to oznacza dla Polaków w Barcelonie?',
                    p: [
                        'Wielkie wydarzenia sportowe to dla mieszkańców zarówno szansa, jak i wyzwanie. Z jednej strony – zamknięte ulice, zmienione trasy autobusów, tłumy na Montjuïc. Z drugiej – niesamowita atmosfera, darmowe widowisko na wyciągnięcie ręki i miasto pełne gości.',
                        'Dla firm prowadzonych przez Polaków w Barcelonie takie wydarzenia to realne pieniądze. Na turystach zarabiają restauracje i kawiarnie, biura podróży i przewodnicy (jak nasi sponsorzy **Bona Barcelona** i **PolCat**), firmy przewozowe i wynajmujący noclegi. Tour de France, wizyta papieża i stulecie Gaudíego sprawiły, że 2026 rok był dla barcelońskiej turystyki wyjątkowo intensywny.',
                    ],
                },
                {
                    title: 'Sport i pomaganie',
                    p: [
                        'Kolarstwo i WOŚP mają zresztą coś wspólnego – Orkiestra od lat organizuje biegi i zawody sportowe, z których dochód trafia na sprzęt medyczny (najbardziej znany jest bieg „Policz się z cukrzycą”). Jeśli masz pomysł na sportowe wydarzenie charytatywne w Barcelonie przed 35. Finałem – napisz do nas!',
                    ],
                },
            ],
        },
        en: {
            title: 'The Tour de France started in Barcelona! What the 2026 Grand Départ meant for the city – and for us',
            excerpt: 'From 4 to 6 July 2026 the world\'s most famous cycling race raced through the streets of Barcelona and Catalonia. We look at the route, the history, the numbers and what such an event means for residents and local businesses – including Polish ones.',
            sections: [
                {
                    p: [
                        'Barcelona proved once again that it is one of the world\'s sporting capitals. In July 2026 the city hosted the **Grand Départ – the official start of the Tour de France**, the most important cycling race in the world. The first three stages took place in Catalonia before the riders moved to France.',
                        'Mayor Jaume Collboni stressed that Barcelona is the first city in the world to have hosted a FIFA World Cup, the Olympic Games, the America\'s Cup and a Tour de France start, calling it a "true world capital of sport".',
                    ],
                    image: withCaption(IMG.estadiOlimpic, 'The Olympic Stadium on Montjuïc – the finish of stage 1 of the 2026 Tour de France.'),
                },
                {
                    title: 'The Catalan stages',
                    ul: [
                        '**2 July** – team presentation in Barcelona.',
                        '**Stage 1 (Saturday, 4 July)** – a **19.7 km** team time trial from Parc del Fòrum to the Olympic Stadium on Montjuïc.',
                        '**Stage 2 (Sunday, 5 July)** – about **178 km** from **Tarragona** along the coast through **Sitges**, with climbs near **Begues**, finishing with three laps of **Montjuïc**.',
                        '**Stage 3 (Monday, 6 July)** – start in **Granollers**, heading towards France.',
                    ],
                    p: ['The race runs until **26 July** and traditionally finishes in Paris.'],
                },
                {
                    title: 'Not the Tour\'s first visit to Barcelona',
                    p: ['Barcelona has hosted the Tour before: in **1957** (three stages), **1965** (two stages) and **2009**, when the peloton rode from Girona to Barcelona and then from Barcelona to Andorra. But the race had never started here before.'],
                    image: withCaption(IMG.peloton, 'The Tour de France peloton (photo from the 2024 race).'),
                },
                {
                    title: 'Numbers: millions of euros and full hotels',
                    ul: [
                        'The Catalan Tourism Agency estimated the Grand Départ\'s economic impact at **around €125 million** for the whole region (other estimates spoke of about €130 million).',
                        'The mayor put the cost for public institutions – the city, the Diputació and the Generalitat – at **around €7 million**.',
                        'Tarragona expected **50,000–80,000 spectators** along stage 2.',
                        'Media reported very high hotel occupancy in and around Barcelona during the race.',
                        'TV coverage showed Barcelona, Montjuïc and the Catalan coast to viewers around the world.',
                    ],
                },
                {
                    title: 'What does it mean for Poles in Barcelona?',
                    p: [
                        'Big sporting events are both an opportunity and a challenge for residents. On the one hand – closed streets, diverted buses, crowds on Montjuïc. On the other – an amazing atmosphere, a free world-class spectacle on your doorstep and a city full of visitors.',
                        'For Polish-run businesses in Barcelona, such events mean real money. Restaurants and cafés, travel agencies and guides (like our sponsors **Bona Barcelona** and **PolCat**), transport companies and accommodation providers all benefit from visitors. The Tour de France, the Pope\'s visit and the Gaudí centenary made 2026 an exceptionally busy year for Barcelona tourism.',
                    ],
                },
                {
                    title: 'Sport and helping others',
                    p: ['Cycling and WOŚP have something in common – for years the Orchestra has organised runs and sports events whose proceeds go to medical equipment (the best known is the "Policz się z cukrzycą" run). If you have an idea for a charity sports event in Barcelona before the 35th Finale – write to us!'],
                },
            ],
        },
        es: {
            title: '¡El Tour de Francia salió de Barcelona! Lo que supuso el Grand Départ 2026 para la ciudad y para nosotros',
            excerpt: 'Del 4 al 6 de julio de 2026 la carrera ciclista más famosa del mundo recorrió las calles de Barcelona y Cataluña. Repasamos el recorrido, la historia, las cifras y lo que un evento así supone para los vecinos y los negocios locales, también los polacos.',
            sections: [
                {
                    p: [
                        'Barcelona demostró una vez más que es una de las capitales deportivas del mundo. En julio de 2026 la ciudad acogió el **Grand Départ, la salida oficial del Tour de Francia**, la carrera ciclista más importante del mundo. Las tres primeras etapas se disputaron en Cataluña antes de que los corredores pasaran a Francia.',
                        'El alcalde Jaume Collboni subrayó que Barcelona es la primera ciudad del mundo que ha acogido un Mundial, unos Juegos Olímpicos, la Copa América y una salida del Tour, y la llamó «verdadera capital mundial del deporte».',
                    ],
                    image: withCaption(IMG.estadiOlimpic, 'El Estadi Olímpic de Montjuïc, meta de la primera etapa del Tour de Francia 2026.'),
                },
                {
                    title: 'Las etapas catalanas',
                    ul: [
                        '**2 de julio**: presentación de los equipos en Barcelona.',
                        '**Etapa 1 (sábado, 4 de julio)**: contrarreloj por equipos de **19,7 km** del Parc del Fòrum al Estadi Olímpic de Montjuïc.',
                        '**Etapa 2 (domingo, 5 de julio)**: unos **178 km** desde **Tarragona** por la costa, pasando por **Sitges**, con subidas cerca de **Begues** y final con tres vueltas a **Montjuïc**.',
                        '**Etapa 3 (lunes, 6 de julio)**: salida de **Granollers** rumbo a Francia.',
                    ],
                    p: ['La carrera dura hasta el **26 de julio** y, como manda la tradición, termina en París.'],
                },
                {
                    title: 'No es la primera visita del Tour a Barcelona',
                    p: ['Barcelona ya había recibido el Tour en **1957** (tres etapas), **1965** (dos etapas) y **2009**, cuando el pelotón fue de Girona a Barcelona y luego de Barcelona a Andorra. Pero nunca antes la carrera había empezado aquí.'],
                    image: withCaption(IMG.peloton, 'El pelotón del Tour de Francia (foto de la edición de 2024).'),
                },
                {
                    title: 'Cifras: millones de euros y hoteles llenos',
                    ul: [
                        'La Agència Catalana de Turisme estimó el impacto económico del Grand Départ en **unos 125 millones de euros** para toda la región (otras estimaciones hablaban de unos 130 millones).',
                        'El alcalde cifró el coste para las instituciones (Ayuntamiento, Diputació y Generalitat) en **unos 7 millones de euros**.',
                        'Tarragona esperaba entre **50.000 y 80.000 espectadores** en la segunda etapa.',
                        'Los medios informaron de una ocupación hotelera muy alta en Barcelona y alrededores durante la carrera.',
                        'Las retransmisiones mostraron Barcelona, Montjuïc y la costa catalana a espectadores de todo el mundo.',
                    ],
                },
                {
                    title: '¿Qué supone para los polacos de Barcelona?',
                    p: [
                        'Los grandes eventos deportivos son a la vez una oportunidad y un reto para los vecinos. Por un lado, calles cortadas, autobuses desviados y multitudes en Montjuïc. Por otro, un ambiente increíble, un espectáculo gratuito de primer nivel a la vuelta de la esquina y una ciudad llena de visitantes.',
                        'Para los negocios gestionados por polacos en Barcelona, estos eventos significan dinero real. Se benefician restaurantes y cafeterías, agencias de viajes y guías (como nuestros patrocinadores **Bona Barcelona** y **PolCat**), empresas de transporte y alojamientos. El Tour, la visita del Papa y el centenario de Gaudí hicieron de 2026 un año excepcionalmente intenso para el turismo en Barcelona.',
                    ],
                },
                {
                    title: 'Deporte y solidaridad',
                    p: ['El ciclismo y WOŚP tienen algo en común: desde hace años la Orquesta organiza carreras y competiciones cuya recaudación va a equipos médicos (la más conocida es la carrera «Policz się z cukrzycą»). Si tienes una idea para un evento deportivo solidario en Barcelona antes del 35.º Final, ¡escríbenos!'],
                },
            ],
        },
        ca: {
            title: 'El Tour de França va sortir de Barcelona! Què va suposar el Grand Départ 2026 per a la ciutat i per a nosaltres',
            excerpt: 'Del 4 al 6 de juliol de 2026 la cursa ciclista més famosa del món va recórrer els carrers de Barcelona i Catalunya. Repassem el recorregut, la història, les xifres i què suposa un esdeveniment així per als veïns i els negocis locals, també els polonesos.',
            sections: [
                {
                    p: [
                        'Barcelona va demostrar una vegada més que és una de les capitals esportives del món. El juliol de 2026 la ciutat va acollir el **Grand Départ, la sortida oficial del Tour de França**, la cursa ciclista més important del món. Les tres primeres etapes es van disputar a Catalunya abans que els corredors passessin a França.',
                        'L\'alcalde Jaume Collboni va remarcar que Barcelona és la primera ciutat del món que ha acollit un Mundial, uns Jocs Olímpics, la Copa Amèrica i una sortida del Tour, i la va anomenar «veritable capital mundial de l\'esport».',
                    ],
                    image: withCaption(IMG.estadiOlimpic, 'L\'Estadi Olímpic de Montjuïc, meta de la primera etapa del Tour de França 2026.'),
                },
                {
                    title: 'Les etapes catalanes',
                    ul: [
                        '**2 de juliol**: presentació dels equips a Barcelona.',
                        '**Etapa 1 (dissabte, 4 de juliol)**: contrarellotge per equips de **19,7 km** del Parc del Fòrum a l\'Estadi Olímpic de Montjuïc.',
                        '**Etapa 2 (diumenge, 5 de juliol)**: uns **178 km** des de **Tarragona** per la costa, passant per **Sitges**, amb pujades a prop de **Begues** i final amb tres voltes a **Montjuïc**.',
                        '**Etapa 3 (dilluns, 6 de juliol)**: sortida de **Granollers** cap a França.',
                    ],
                    p: ['La cursa dura fins al **26 de juliol** i, com mana la tradició, acaba a París.'],
                },
                {
                    title: 'No és la primera visita del Tour a Barcelona',
                    p: ['Barcelona ja havia rebut el Tour el **1957** (tres etapes), el **1965** (dues etapes) i el **2009**, quan el pilot va anar de Girona a Barcelona i després de Barcelona a Andorra. Però mai abans la cursa havia començat aquí.'],
                    image: withCaption(IMG.peloton, 'El pilot del Tour de França (foto de l\'edició del 2024).'),
                },
                {
                    title: 'Xifres: milions d\'euros i hotels plens',
                    ul: [
                        'L\'Agència Catalana de Turisme va estimar l\'impacte econòmic del Grand Départ en **uns 125 milions d\'euros** per a tota la regió (altres estimacions parlaven d\'uns 130 milions).',
                        'L\'alcalde va xifrar el cost per a les institucions (Ajuntament, Diputació i Generalitat) en **uns 7 milions d\'euros**.',
                        'Tarragona esperava entre **50.000 i 80.000 espectadors** a la segona etapa.',
                        'Els mitjans van informar d\'una ocupació hotelera molt alta a Barcelona i rodalies durant la cursa.',
                        'Les retransmissions van mostrar Barcelona, Montjuïc i la costa catalana a espectadors de tot el món.',
                    ],
                },
                {
                    title: 'Què suposa per als polonesos de Barcelona?',
                    p: [
                        'Els grans esdeveniments esportius són alhora una oportunitat i un repte per als veïns. D\'una banda, carrers tallats, autobusos desviats i multituds a Montjuïc. De l\'altra, un ambient increïble, un espectacle gratuït de primer nivell a tocar de casa i una ciutat plena de visitants.',
                        'Per als negocis gestionats per polonesos a Barcelona, aquests esdeveniments signifiquen diners reals. Se\'n beneficien restaurants i cafeteries, agències de viatges i guies (com els nostres patrocinadors **Bona Barcelona** i **PolCat**), empreses de transport i allotjaments. El Tour, la visita del Papa i el centenari de Gaudí van fer del 2026 un any excepcionalment intens per al turisme a Barcelona.',
                    ],
                },
                {
                    title: 'Esport i solidaritat',
                    p: ['El ciclisme i WOŚP tenen alguna cosa en comú: des de fa anys l\'Orquestra organitza curses i competicions la recaptació de les quals va a equips mèdics (la més coneguda és la cursa «Policz się z cukrzycą»). Si tens una idea per a un esdeveniment esportiu solidari a Barcelona abans del 35è Final, escriu-nos!'],
                },
            ],
        },
    },
};
