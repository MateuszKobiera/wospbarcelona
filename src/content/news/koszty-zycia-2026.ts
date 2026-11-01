import type { NewsSource } from './_shared';
import { IMG, withCaption } from './_images';

const skyline = '/images/pictures/pexels-frederic-bartl-256900-786126.jpg';
const beach = '/images/pictures/pexels-valdemaras-d-784301-1874675.jpg';

export const kosztyZycia2026: NewsSource = {
    slug: 'barcelona-2026-czynsze-placa-minimalna-podatek-turystyczny',
    date: '2026-04-02',
    coverImage: '/images/blog/commons/eixample-aerial.jpg',
    tags: ['Barcelona', 'Mieszkania', 'Praca', 'Polonia', 'Ekonomia'],
    sources: [
        { label: 'BOE – RD 126/2026 (SMI)', url: 'https://www.garrigues.com/es_ES/noticia/publica-salario-minimo-interprofesional-smi-espana-2026' },
        { label: 'Catalan News – czynsze (23.02.2026)', url: 'https://www.catalannews.com/business/item/catalonia-rents-rise-25-in-third-quarter-2025-amid-rent-caps' },
        { label: 'El Debate – mieszkania turystyczne', url: 'https://www.eldebate.com/espana/cataluna/barcelona/20260309/prohibicion-pisos-turisticos-impulsada-barcelona-extiende-toda-area-metropolitana_392923.html' },
        { label: 'Hostaway – podatek turystyczny', url: 'https://www.hostaway.com/es-ES/vacation-rental-guide/tourist-tax/spain/barcelona/' },
        { label: 'Fiscal-impuestos – Ley 2/2026', url: 'https://www.fiscal-impuestos.com/node/41153' },
    ],
    content: {
        pl: {
            title: 'Barcelona 2026: czynsze, płaca minimalna i podwyższony podatek turystyczny. Co to oznacza dla Polaków?',
            excerpt: 'Nowa płaca minimalna 1221 €, średni czynsz w Barcelonie ponad 1150 €, podatek turystyczny do 9,50 € za noc i koniec mieszkań turystycznych w 2028 roku. Zebraliśmy najważniejsze dane i wyjaśniamy, jak wpływają na Polaków mieszkających i prowadzących firmy w Barcelonie.',
            sections: [
                {
                    p: [
                        'Życie w Barcelonie to słońce, morze i wspaniała atmosfera – ale też koszty, o których rozmawia się przy każdym polskim stole w mieście. Pierwsze miesiące 2026 roku przyniosły kilka ważnych zmian: wyższą płacę minimalną, nowe dane o czynszach, podwyżkę podatku turystycznego i kolejne kroki w walce z mieszkaniami turystycznymi.',
                        'Zebraliśmy najważniejsze informacje w jednym miejscu – dla tych, którzy tu mieszkają, pracują, prowadzą firmy albo dopiero planują przeprowadzkę.',
                    ],
                },
                {
                    title: 'Płaca minimalna: 1221 € miesięcznie',
                    highlight: { value: '1221 €', label: 'płaca minimalna (SMI) w Hiszpanii w 2026 r. – brutto miesięcznie, 14 wypłat w roku' },
                    p: [
                        'Rząd Hiszpanii zatwierdził podwyżkę płacy minimalnej (Salario Mínimo Interprofesional) o **3,1%** – z 1184 € do **1221 € brutto miesięcznie** w 14 wypłatach, czyli **17 094 € rocznie**. Rozporządzenie (Real Decreto 126/2026 z 18 lutego) opublikowano w dzienniku urzędowym BOE 19 lutego, a podwyżka obowiązuje **wstecznie od 1 stycznia 2026 roku**.',
                        'Warto pamiętać, że w Hiszpanii standardem jest 14 wypłat rocznie – dwie dodatkowe („pagas extra”) wypłacane są zwykle latem i przed świętami, choć mogą być też rozłożone na 12 miesięcy.',
                    ],
                },
                {
                    title: 'Dla kogo to ważne?',
                    ul: [
                        '**Dla pracowników** – jeśli pracujesz na pełen etat, Twoja pensja nie może być niższa niż SMI. Sprawdź, czy pracodawca wyrównał wynagrodzenie od stycznia.',
                        '**Dla polskich przedsiębiorców** – właściciele restauracji, sklepów czy firm usługowych, którzy zatrudniają pracowników, muszą uwzględnić wyższe koszty pracy (także składki na ubezpieczenie społeczne).',
                    ],
                },
                {
                    title: 'Czynsze: średnio 1153 € w Barcelonie',
                    p: [
                        'Według danych katalońskiego instytutu Incasòl (umowy zarejestrowane w III kwartale 2025 r., opublikowane w lutym 2026 r.):',
                    ],
                    ul: [
                        'średni czynsz w **mieście Barcelona** wyniósł **1153,11 € miesięcznie** – o 1,5% więcej niż kwartał wcześniej, ale wciąż **o 3,3% mniej** niż przed wprowadzeniem limitów czynszów (1193,50 €),',
                        'średnia dla **całej Katalonii** to **876,83 €** (+2,5% kwartał do kwartału),',
                        'w gminach uznanych za „obszary napięte” (zonas tensionadas), gdzie obowiązują limity, średnia wynosi **894,78 €**, a w gminach bez limitów – **617,41 €**,',
                        'w III kwartale 2025 r. podpisano **26 962** umowy najmu – wyraźnie mniej niż **34 495** w I kwartale 2024 r., tuż przed wprowadzeniem limitów.',
                    ],
                    image: withCaption(IMG.eixample, 'Kamienica w barcelońskiej dzielnicy Eixample.'),
                },
                {
                    p: [
                        'Jak działają limity? W obszarach napiętych czynsz w nowej umowie najmu jest powiązany z czynszem z poprzedniej umowy dla tego samego mieszkania, powiększonym o inflację. Uwaga: średnie z zarejestrowanych umów to co innego niż ceny w ogłoszeniach na portalach – te są często znacznie wyższe, bo nowe, droższe oferty nie odzwierciedlają tego, ile realnie płacą najemcy.',
                    ],
                },
                {
                    title: 'Praktyczne wskazówki dla najemców',
                    ul: [
                        'W Katalonii kaucja (fianza) wpłacona właścicielowi powinna zostać przez niego zdeponowana w **Incasòl**. Warto o to zapytać.',
                        'Jeśli mieszkasz w Barcelonie, sprawdź, czy Twoje mieszkanie podlega limitom – informacje znajdziesz w miejskich biurach mieszkaniowych (Oficines d\'Habitatge).',
                        'Przed podpisaniem umowy poproś o informację o czynszu z poprzedniej umowy – w obszarach napiętych ma to znaczenie.',
                    ],
                },
                {
                    title: 'Podatek turystyczny: do 9,50 € za noc',
                    p: [
                        'Parlament Katalonii przyjął reformę podatku od pobytów turystycznych (ustawa 2/2026 z 6 marca, opublikowana w dzienniku DOGC 10 marca). Nowe stawki obowiązują od **1 kwietnia 2026 roku**. Według zestawień branżowych w Barcelonie za nocleg w licencjonowanym mieszkaniu turystycznym płaci się obecnie łącznie **9,50 € od osoby za noc** (4,50 € stawki regionalnej i 5 € dopłaty miejskiej), a w hotelach najwyższych kategorii jeszcze więcej.',
                        'Źródła różnią się w szczegółach, dlatego aktualne stawki warto sprawdzić na stronie katalońskiej agencji podatkowej (Agència Tributària de Catalunya).',
                    ],
                    image: { src: beach, alt: 'Plaża Barceloneta z hotelem W', caption: 'Turystyka to jedna z najważniejszych gałęzi gospodarki Barcelony.' },
                },
                {
                    title: 'Koniec mieszkań turystycznych w 2028 roku',
                    p: [
                        'Ratusz Barcelony zapowiedział, że do **listopada 2028 roku** wygasi licencje około **10 tysięcy** mieszkań turystycznych, by zwiększyć liczbę mieszkań dla stałych mieszkańców. W marcu 2026 roku media informowały, że podobne podejście ma objąć cały obszar metropolitalny. Branża (stowarzyszenie Apartur) krytykuje plan i ostrzega przed wzrostem nielegalnego najmu.',
                    ],
                },
                {
                    title: 'Co to oznacza dla Polaków w Barcelonie?',
                    ul: [
                        '**Rodzina i znajomi z Polski** – odwiedziny stają się droższe: za tygodniowy pobyt dwóch osób w mieszkaniu turystycznym sam podatek wyniesie ok. 133 €. Warto to uwzględnić w planach.',
                        '**Polskie biura podróży i przewodnicy** – wyższe koszty noclegów mogą wpływać na ceny wycieczek. Z drugiej strony rok 2026 zapowiada się na wyjątkowo turystyczny – przed nami start Tour de France, zapowiadana wizyta papieża i stulecie śmierci Gaudíego.',
                        '**Właściciele mieszkań turystycznych** – trzeba przygotować się na koniec licencji w 2028 r. i ewentualne przejście na najem długoterminowy.',
                        '**Najemcy** – dane pokazują pewną stabilizację czynszów w zarejestrowanych umowach, ale mniej dostępnych mieszkań. Warto znać swoje prawa.',
                    ],
                },
                {
                    p: [
                        'Mimo kosztów Barcelona wciąż przyciąga tysiące Polaków. A im więcej nas tu jest, tym więcej możemy zrobić razem – także podczas Finału WOŚP. Jeśli szukasz polskiej społeczności, zajrzyj do naszego artykułu o Polonii w Katalonii albo po prostu napisz do nas!',
                    ],
                    image: { src: skyline, alt: 'Panorama Barcelony z Collserolą', caption: 'Barcelona – drogie, ale wciąż wyjątkowe miejsce do życia.' },
                },
            ],
        },
        en: {
            title: 'Barcelona 2026: rents, the minimum wage and a higher tourist tax. What does it mean for Poles?',
            excerpt: 'A new €1,221 minimum wage, average rent in Barcelona above €1,150, a tourist tax of up to €9.50 a night and the end of tourist flats in 2028. We gathered the key figures and explain how they affect Poles living and running businesses in Barcelona.',
            sections: [
                {
                    p: [
                        'Life in Barcelona means sun, sea and a great atmosphere – but also costs that come up at every Polish dinner table in the city. The first months of 2026 brought several important changes: a higher minimum wage, new rent data, a higher tourist tax and further steps against tourist flats.',
                        'We have gathered the key information in one place – for those who live, work or run businesses here, or are planning to move.',
                    ],
                },
                {
                    title: 'Minimum wage: €1,221 a month',
                    highlight: { value: '€1,221', label: 'minimum wage (SMI) in Spain in 2026 – gross per month, 14 payments a year' },
                    p: [
                        'The Spanish government approved a **3.1%** rise in the minimum wage (Salario Mínimo Interprofesional) – from €1,184 to **€1,221 gross per month** in 14 payments, i.e. **€17,094 a year**. Royal Decree 126/2026 of 18 February was published in the BOE on 19 February, and the rise applies **retroactively from 1 January 2026**.',
                        'Remember that 14 payments a year is the norm in Spain – the two extra payments ("pagas extra") are usually paid in summer and before Christmas, though they can also be spread over 12 months.',
                    ],
                },
                {
                    title: 'Who is affected?',
                    ul: [
                        '**Employees** – if you work full time, your salary cannot be below the SMI. Check that your employer has backdated the increase to January.',
                        '**Polish entrepreneurs** – owners of restaurants, shops or service businesses who employ staff must factor in higher labour costs (including social security contributions).',
                    ],
                },
                {
                    title: 'Rents: €1,153 on average in Barcelona',
                    p: ['According to data from the Catalan institute Incasòl (contracts registered in Q3 2025, published in February 2026):'],
                    ul: [
                        'the average rent in **Barcelona city** was **€1,153.11 a month** – 1.5% more than the previous quarter, but still **3.3% less** than before rent caps were introduced (€1,193.50),',
                        'the average for **all of Catalonia** was **€876.83** (+2.5% quarter on quarter),',
                        'in municipalities designated as "stressed areas" (zonas tensionadas), where caps apply, the average is **€894.78**, and in municipalities without caps **€617.41**,',
                        '**26,962** rental contracts were signed in Q3 2025 – clearly fewer than **34,495** in Q1 2024, just before the caps.',
                    ],
                    image: withCaption(IMG.eixample, 'A building in Barcelona\'s Eixample district.'),
                },
                { p: ['How do the caps work? In stressed areas, the rent in a new lease is linked to the previous contract for the same flat, plus inflation. Note: averages from registered contracts are not the same as prices in online listings – those are often much higher, because new, pricier offers don\'t reflect what tenants actually pay.'] },
                {
                    title: 'Practical tips for tenants',
                    ul: [
                        'In Catalonia, the deposit (fianza) you pay your landlord should be lodged by them with **Incasòl**. It is worth asking about it.',
                        'If you live in Barcelona, check whether your flat is subject to the caps – the city\'s housing offices (Oficines d\'Habitatge) can help.',
                        'Before signing a contract, ask about the rent in the previous contract – in stressed areas it matters.',
                    ],
                },
                {
                    title: 'Tourist tax: up to €9.50 a night',
                    p: [
                        'The Catalan Parliament passed a reform of the tourist stay tax (Law 2/2026 of 6 March, published in the DOGC on 10 March). The new rates apply from **1 April 2026**. According to industry guides, a night in a licensed tourist flat in Barcelona now costs a total of **€9.50 per person per night** in tax (€4.50 regional rate plus a €5 municipal surcharge), and even more in top-category hotels.',
                        'Sources differ in the details, so check current rates with the Catalan Tax Agency (Agència Tributària de Catalunya).',
                    ],
                    image: { src: beach, alt: 'Barceloneta beach with the W hotel', caption: 'Tourism is one of the most important sectors of Barcelona\'s economy.' },
                },
                {
                    title: 'The end of tourist flats in 2028',
                    p: ['Barcelona City Council has announced that by **November 2028** it will let the licences of around **10,000** tourist flats expire, to increase housing for permanent residents. In March 2026 media reported that a similar approach would cover the whole metropolitan area. The industry (the Apartur association) criticises the plan and warns of a rise in illegal rentals.'],
                },
                {
                    title: 'What does it mean for Poles in Barcelona?',
                    ul: [
                        '**Family and friends from Poland** – visits are getting pricier: for a week\'s stay for two in a tourist flat, the tax alone comes to about €133. Worth planning for.',
                        '**Polish travel agencies and guides** – higher accommodation costs may affect tour prices. On the other hand, 2026 promises to be an exceptional year for tourism – with the Tour de France start, the announced papal visit and the Gaudí centenary ahead.',
                        '**Tourist-flat owners** – need to prepare for licences ending in 2028 and a possible switch to long-term rentals.',
                        '**Tenants** – data show some stabilisation of rents in registered contracts, but fewer available flats. Know your rights.',
                    ],
                },
                {
                    p: ['Despite the costs, Barcelona still attracts thousands of Poles. And the more of us there are, the more we can do together – including at the WOŚP Finale. If you are looking for the Polish community, read our article about the Polish diaspora in Catalonia or simply write to us!'],
                    image: { src: skyline, alt: 'Barcelona skyline with Collserola', caption: 'Barcelona – expensive, but still a special place to live.' },
                },
            ],
        },
        es: {
            title: 'Barcelona 2026: alquileres, salario mínimo y una tasa turística más alta. ¿Qué supone para los polacos?',
            excerpt: 'Nuevo salario mínimo de 1221 €, alquiler medio en Barcelona por encima de 1150 €, tasa turística de hasta 9,50 € por noche y el fin de los pisos turísticos en 2028. Reunimos los datos clave y explicamos cómo afectan a los polacos que viven y tienen negocios en Barcelona.',
            sections: [
                {
                    p: [
                        'Vivir en Barcelona es sol, mar y un ambiente estupendo, pero también unos costes de los que se habla en cada mesa polaca de la ciudad. Los primeros meses de 2026 trajeron varios cambios importantes: un salario mínimo más alto, nuevos datos de alquiler, la subida de la tasa turística y nuevos pasos contra los pisos turísticos.',
                        'Hemos reunido la información clave en un solo lugar, para quienes viven, trabajan o tienen negocios aquí, o piensan mudarse.',
                    ],
                },
                {
                    title: 'Salario mínimo: 1221 € al mes',
                    highlight: { value: '1221 €', label: 'salario mínimo interprofesional (SMI) en España en 2026, bruto mensual en 14 pagas' },
                    p: [
                        'El Gobierno aprobó una subida del SMI del **3,1 %**, de 1184 € a **1221 € brutos al mes** en 14 pagas, es decir, **17.094 € al año**. El Real Decreto 126/2026, de 18 de febrero, se publicó en el BOE el 19 de febrero, y la subida se aplica **con efectos desde el 1 de enero de 2026**.',
                        'Recuerda que en España lo habitual son 14 pagas: las dos extra suelen cobrarse en verano y antes de Navidad, aunque también pueden prorratearse en 12 meses.',
                    ],
                },
                {
                    title: '¿A quién afecta?',
                    ul: [
                        '**A los trabajadores**: si trabajas a jornada completa, tu sueldo no puede ser inferior al SMI. Comprueba que tu empresa te ha regularizado desde enero.',
                        '**A los empresarios polacos**: los dueños de restaurantes, tiendas o empresas de servicios con empleados deben tener en cuenta el aumento del coste laboral (incluidas las cotizaciones).',
                    ],
                },
                {
                    title: 'Alquileres: 1153 € de media en Barcelona',
                    p: ['Según los datos del Incasòl (contratos registrados en el tercer trimestre de 2025, publicados en febrero de 2026):'],
                    ul: [
                        'el alquiler medio en la **ciudad de Barcelona** fue de **1153,11 € al mes**, un 1,5 % más que el trimestre anterior, pero todavía **un 3,3 % menos** que antes de los topes (1193,50 €),',
                        'la media de **toda Cataluña** fue de **876,83 €** (+2,5 % trimestral),',
                        'en los municipios declarados **zonas tensionadas**, donde se aplican topes, la media es de **894,78 €**, y en los municipios sin topes, de **617,41 €**,',
                        'en el tercer trimestre de 2025 se firmaron **26.962** contratos, claramente menos que los **34.495** del primer trimestre de 2024, justo antes de los topes.',
                    ],
                    image: withCaption(IMG.eixample, 'Un edificio del Eixample de Barcelona.'),
                },
                { p: ['¿Cómo funcionan los topes? En las zonas tensionadas, la renta de un nuevo contrato se vincula al contrato anterior de la misma vivienda más la inflación. Ojo: las medias de los contratos registrados no son lo mismo que los precios de los anuncios en portales, que suelen ser mucho más altos, porque las ofertas nuevas y más caras no reflejan lo que pagan realmente los inquilinos.'] },
                {
                    title: 'Consejos prácticos para inquilinos',
                    ul: [
                        'En Cataluña, la fianza que pagas al propietario debe depositarla él en el **Incasòl**. Vale la pena preguntarlo.',
                        'Si vives en Barcelona, comprueba si tu vivienda está sujeta a los topes: las Oficinas de Vivienda (Oficines d\'Habitatge) del Ayuntamiento pueden ayudarte.',
                        'Antes de firmar, pregunta por la renta del contrato anterior: en las zonas tensionadas es importante.',
                    ],
                },
                {
                    title: 'Tasa turística: hasta 9,50 € por noche',
                    p: [
                        'El Parlament aprobó la reforma del impuesto sobre estancias turísticas (Ley 2/2026, de 6 de marzo, publicada en el DOGC el 10 de marzo). Las nuevas tarifas se aplican desde el **1 de abril de 2026**. Según guías del sector, una noche en un piso turístico con licencia en Barcelona supone ya en total **9,50 € por persona y noche** de impuesto (4,50 € de tarifa autonómica más 5 € de recargo municipal), y aún más en los hoteles de categoría superior.',
                        'Las fuentes difieren en los detalles, así que conviene consultar las tarifas vigentes en la Agència Tributària de Catalunya.',
                    ],
                    image: { src: beach, alt: 'Playa de la Barceloneta con el hotel W', caption: 'El turismo es uno de los sectores clave de la economía de Barcelona.' },
                },
                {
                    title: 'El fin de los pisos turísticos en 2028',
                    p: ['El Ayuntamiento de Barcelona ha anunciado que en **noviembre de 2028** dejará extinguir las licencias de unos **10.000** pisos turísticos para aumentar la vivienda para residentes. En marzo de 2026 los medios informaron de que un enfoque similar abarcaría toda el área metropolitana. El sector (la asociación Apartur) critica el plan y advierte del aumento del alquiler ilegal.'],
                },
                {
                    title: '¿Qué supone para los polacos de Barcelona?',
                    ul: [
                        '**Familia y amigos de Polonia**: las visitas salen más caras; por una semana de dos personas en un piso turístico, solo el impuesto supone unos 133 €. Conviene tenerlo en cuenta.',
                        '**Agencias de viajes y guías polacos**: el aumento del coste del alojamiento puede afectar al precio de las excursiones. Por otro lado, 2026 promete ser un año excepcional para el turismo: llegan la salida del Tour de Francia, la anunciada visita del Papa y el centenario de Gaudí.',
                        '**Propietarios de pisos turísticos**: hay que prepararse para el fin de las licencias en 2028 y un posible paso al alquiler de larga duración.',
                        '**Inquilinos**: los datos muestran cierta estabilización de las rentas registradas, pero menos viviendas disponibles. Conoce tus derechos.',
                    ],
                },
                {
                    p: ['Pese a los costes, Barcelona sigue atrayendo a miles de polacos. Y cuantos más seamos, más podremos hacer juntos, también en el Final de WOŚP. Si buscas la comunidad polaca, lee nuestro artículo sobre los polacos en Cataluña o simplemente escríbenos.'],
                    image: { src: skyline, alt: 'Panorámica de Barcelona con Collserola', caption: 'Barcelona: cara, pero sigue siendo un lugar especial para vivir.' },
                },
            ],
        },
        ca: {
            title: 'Barcelona 2026: lloguers, salari mínim i una taxa turística més alta. Què suposa per als polonesos?',
            excerpt: 'Nou salari mínim de 1221 €, lloguer mitjà a Barcelona per sobre de 1150 €, taxa turística de fins a 9,50 € per nit i la fi dels pisos turístics el 2028. Recollim les dades clau i expliquem com afecten els polonesos que viuen i tenen negocis a Barcelona.',
            sections: [
                {
                    p: [
                        'Viure a Barcelona és sol, mar i un ambient fantàstic, però també uns costos dels quals es parla a cada taula polonesa de la ciutat. Els primers mesos del 2026 han portat diversos canvis importants: un salari mínim més alt, noves dades de lloguer, la pujada de la taxa turística i nous passos contra els pisos turístics.',
                        'Hem recollit la informació clau en un sol lloc, per a qui viu, treballa o té un negoci aquí, o pensa traslladar-s\'hi.',
                    ],
                },
                {
                    title: 'Salari mínim: 1221 € al mes',
                    highlight: { value: '1221 €', label: 'salari mínim interprofessional (SMI) a Espanya el 2026, brut mensual en 14 pagues' },
                    p: [
                        'El Govern espanyol va aprovar una pujada de l\'SMI del **3,1 %**, de 1184 € a **1221 € bruts al mes** en 14 pagues, és a dir, **17.094 € l\'any**. El Reial decret 126/2026, de 18 de febrer, es va publicar al BOE el 19 de febrer, i la pujada s\'aplica **amb efectes des de l\'1 de gener de 2026**.',
                        'Recorda que a Espanya el més habitual són 14 pagues: les dues extres se solen cobrar a l\'estiu i abans de Nadal, tot i que també es poden prorratejar en 12 mesos.',
                    ],
                },
                {
                    title: 'A qui afecta?',
                    ul: [
                        '**Als treballadors**: si treballes a jornada completa, el teu sou no pot ser inferior a l\'SMI. Comprova que l\'empresa t\'ha regularitzat des del gener.',
                        '**Als empresaris polonesos**: els propietaris de restaurants, botigues o empreses de serveis amb treballadors han de tenir en compte l\'augment del cost laboral (incloses les cotitzacions).',
                    ],
                },
                {
                    title: 'Lloguers: 1153 € de mitjana a Barcelona',
                    p: ['Segons les dades de l\'Incasòl (contractes registrats al tercer trimestre de 2025, publicats el febrer de 2026):'],
                    ul: [
                        'el lloguer mitjà a la **ciutat de Barcelona** va ser de **1153,11 € al mes**, un 1,5 % més que el trimestre anterior, però encara **un 3,3 % menys** que abans de la limitació (1193,50 €),',
                        'la mitjana de **tota Catalunya** va ser de **876,83 €** (+2,5 % trimestral),',
                        'als municipis declarats **zones tensionades**, on s\'apliquen límits, la mitjana és de **894,78 €**, i als municipis sense límits, de **617,41 €**,',
                        'al tercer trimestre de 2025 es van signar **26.962** contractes, clarament menys que els **34.495** del primer trimestre de 2024, just abans dels límits.',
                    ],
                    image: withCaption(IMG.eixample, 'Un edifici de l\'Eixample de Barcelona.'),
                },
                { p: ['Com funcionen els límits? A les zones tensionades, la renda d\'un nou contracte es vincula al contracte anterior del mateix habitatge més la inflació. Compte: les mitjanes dels contractes registrats no són el mateix que els preus dels anuncis als portals, que solen ser molt més alts, perquè les ofertes noves i més cares no reflecteixen el que paguen realment els llogaters.'] },
                {
                    title: 'Consells pràctics per a llogaters',
                    ul: [
                        'A Catalunya, la fiança que pagues al propietari l\'ha de dipositar ell a l\'**Incasòl**. Val la pena preguntar-ho.',
                        'Si vius a Barcelona, comprova si el teu habitatge està subjecte als límits: les Oficines d\'Habitatge de l\'Ajuntament et poden ajudar.',
                        'Abans de signar, pregunta per la renda del contracte anterior: a les zones tensionades és important.',
                    ],
                },
                {
                    title: 'Taxa turística: fins a 9,50 € per nit',
                    p: [
                        'El Parlament va aprovar la reforma de l\'impost sobre les estades en establiments turístics (Llei 2/2026, de 6 de març, publicada al DOGC el 10 de març). Les noves tarifes s\'apliquen des de l\'**1 d\'abril de 2026**. Segons guies del sector, una nit en un habitatge d\'ús turístic amb llicència a Barcelona suposa ja en total **9,50 € per persona i nit** d\'impost (4,50 € de tarifa autonòmica més 5 € de recàrrec municipal), i encara més als hotels de categoria superior.',
                        'Les fonts difereixen en els detalls, així que convé consultar les tarifes vigents a l\'Agència Tributària de Catalunya.',
                    ],
                    image: { src: beach, alt: 'Platja de la Barceloneta amb l\'hotel W', caption: 'El turisme és un dels sectors clau de l\'economia de Barcelona.' },
                },
                {
                    title: 'La fi dels pisos turístics el 2028',
                    p: ['L\'Ajuntament de Barcelona ha anunciat que el **novembre de 2028** deixarà extingir les llicències d\'uns **10.000** pisos turístics per augmentar l\'habitatge per a residents. El març de 2026 els mitjans van informar que un enfocament similar abastaria tota l\'àrea metropolitana. El sector (l\'associació Apartur) critica el pla i alerta d\'un augment del lloguer il·legal.'],
                },
                {
                    title: 'Què suposa per als polonesos de Barcelona?',
                    ul: [
                        '**Família i amics de Polònia**: les visites surten més cares; per una setmana de dues persones en un pis turístic, només l\'impost suposa uns 133 €. Convé tenir-ho en compte.',
                        '**Agències de viatges i guies polonesos**: l\'augment del cost de l\'allotjament pot afectar el preu de les excursions. D\'altra banda, el 2026 promet ser un any excepcional per al turisme: arriben la sortida del Tour de França, l\'anunciada visita del Papa i el centenari de Gaudí.',
                        '**Propietaris de pisos turístics**: cal preparar-se per a la fi de les llicències el 2028 i un possible pas al lloguer de llarga durada.',
                        '**Llogaters**: les dades mostren una certa estabilització de les rendes registrades, però menys habitatges disponibles. Coneix els teus drets.',
                    ],
                },
                {
                    p: ['Malgrat els costos, Barcelona continua atraient milers de polonesos. I com més siguem, més podrem fer junts, també al Final de WOŚP. Si busques la comunitat polonesa, llegeix el nostre article sobre els polonesos a Catalunya o simplement escriu-nos.'],
                    image: { src: skyline, alt: 'Panoràmica de Barcelona amb Collserola', caption: 'Barcelona: cara, però continua sent un lloc especial per viure.' },
                },
            ],
        },
    },
};
