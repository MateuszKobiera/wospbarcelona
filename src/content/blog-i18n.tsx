import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPhotoGallery } from '@/components/BlogPhotoGallery';
import { final34GalleryPhotos } from '@/content/final34Gallery';


function Final35InfoBox({ heading, items }: { heading: string; items: Array<[string, string]> }) {
    return (
        <div className="rounded-lg p-4 md:p-6 shadow-lg bg-gradient-to-br from-red-600 via-pink-600 to-red-700">
            <h3 className="text-xl font-bold mb-3 text-white">👶 {heading}</h3>
            <ul className="list-disc pl-6 space-y-2 text-white">
                {items.map(([label, value]) => (
                    <li key={label} style={{ color: '#ffffff' }}>
                        <strong className="text-white" style={{ color: '#ffffff' }}>{label}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const final35SourceLinks: Array<[string, string]> = [
    ['Fundacja WOŚP – 35. Finał', 'https://www.wosp.org.pl/final/final'],
    ['TVN24 – Jerzy Owsiak o 35. Finale WOŚP', 'https://tvn24.pl/polska/jerzy-owsiak-o-35-finale-wosp-rocznie-rodzi-sie-okolo-20-tysiecy-wczesniakow-st9293840'],
    ['Rzeczpospolita – Owsiak ogłosił cel nowego finału WOŚP', 'https://www.rp.pl/kraj/art45347071-jurek-owsiak-ujawnil-plany-wosp-tym-razem-orkiestra-zagra-dla-noworodkow'],
    ['Alert Medyczny – WOŚP ogłosiła temat 35. Finału', 'https://alertmedyczny.pl/wosp-oglosila-temat-35-finalu-pieniadze-trafia-na-opieke-nad-noworodkami/'],
    ['Fundacja WOŚP – Historia', 'https://www.wosp.org.pl/fundacja/historia'],
    ['ngo.pl – 26. Finał WOŚP. Dla wyrównania szans w leczeniu noworodków', 'https://publicystyka.ngo.pl/26-final-wosp-dla-wyrownania-szans-w-leczeniu-noworodkow'],
    ['NIK – Za drzwiami porodówki (opieka okołoporodowa w Polsce)', 'https://www.nik.gov.pl/aktualnosci/za-drzwiami-porodowki-nik-o-opiece-okoloporodowej-w-polsce.html'],
];

function Final35Sources() {
    return (
        <ul className="text-sm space-y-1">
            {final35SourceLinks.map(([label, href]) => (
                <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                </li>
            ))}
        </ul>
    );
}

export type LocalizedContent = {
    title: string;
    excerpt?: string;
    sections: Array<{
        title?: string;
        body: React.ReactNode;
    }>;
};

export type BlogPostI18n = {
    slug: string;
    date: string;
    coverImage?: string;
    /** Optional image used for listing thumbnails (blog list, home page); falls back to coverImage. */
    thumbnailImage?: string;
    tags?: string[];
    social?: {
        facebook?: string;
        instagram?: string;
    };
    sourceUrl?: string;
    content: {
        pl: LocalizedContent;
        en: LocalizedContent;
        es: LocalizedContent;
        ca: LocalizedContent;
    };
};

export const blogPostsI18n: BlogPostI18n[] = [
    {
        slug: '35-final-wosp-zagramy-dla-noworodkow',
        date: '2026-11-01',
        coverImage: '/images/35-final/35FinalBarcelona.png',
        thumbnailImage: '/images/35-final/35FinalBarcelona-miniatura.png',
        tags: ['35FinałWOŚP', 'Neonatologia', 'Noworodki', 'WOŚPBarcelona', 'Finał2027'],
        social: {
            facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
            instagram: 'https://www.instagram.com/wospbarcelona/',
        },
        content: {
            pl: {
                title: '35. Finał WOŚP – 31 stycznia 2027 gramy dla zdrowia noworodków!',
                excerpt: '35. Finał Wielkiej Orkiestry Świątecznej Pomocy zagra 31 stycznia 2027 roku pod hasłem „Dzisiaj?! Zdrowie noworodka najważniejsze!”. Wyjaśniamy, czym jest neonatologia, jak WOŚP pomagał jej przez ponad 30 lat i z jakimi problemami mierzą się dziś oddziały noworodkowe.',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <Final35InfoBox
                                    heading="35. Finał WOŚP – Dzisiaj?! Zdrowie noworodka najważniejsze!"
                                    items={[
                                        ['Data', '31 stycznia 2027 (niedziela)'],
                                        ['Cel', 'Neonatologia – sprzęt dla oddziałów noworodkowych, od sali porodowej po intensywną terapię'],
                                        ['Barcelona', 'Oczywiście gramy razem z Wami – szczegóły naszego Finału wkrótce!'],
                                    ]}
                                />
                                <p>Fundacja WOŚP ogłosiła cel 35. Finału: tym razem Orkiestra zagra dla <strong>najmłodszych pacjentów – noworodków</strong>, ze szczególnym uwzględnieniem wcześniaków i dzieci wymagających intensywnej terapii. Zebrane pieniądze trafią na nowoczesny sprzęt dla sal porodowych, oddziałów intensywnej terapii noworodka oraz na specjalistyczny transport między szpitalami.</p>
                                <p>To dla nas wyjątkowy temat – wielu z nas to rodzice, a wielu wolontariuszy Sztabu WOŚP Barcelona samo ma w rodzinie „wcześniacze” historie. Poniżej opowiadamy, o co dokładnie gramy i dlaczego to tak ważne.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Czym jest neonatologia?',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Neonatologia</strong> (od łac. <em>neonatus</em> – noworodek) to dziedzina medycyny zajmująca się zdrowiem dzieci w pierwszych <strong>28 dniach życia</strong>. Neonatolodzy opiekują się zarówno zdrowymi noworodkami, jak i tymi, które od pierwszych minut walczą o życie.</p>
                                <p>Najważniejszą grupą pacjentów są <strong>wcześniaki</strong>, czyli dzieci urodzone przed ukończeniem 37. tygodnia ciąży. Dzięki postępowi medycyny dziś ratuje się dzieci urodzone nawet w 23.–24. tygodniu, ważące niekiedy poniżej 500 gramów. Takie maluchy mają niedojrzałe płuca, mózg, jelita i oczy – potrzebują inkubatora, wsparcia oddychania, precyzyjnie dawkowanych leków i żywienia, a często wielu tygodni na oddziale intensywnej terapii.</p>
                                <p>Neonatologia zajmuje się też m.in.:</p>
                                <ul>
                                    <li>zaburzeniami oddychania i niewydolnością oddechową,</li>
                                    <li>zakażeniami i sepsą noworodkową,</li>
                                    <li>żółtaczką noworodków,</li>
                                    <li>wadami wrodzonymi (np. serca czy przewodu pokarmowego),</li>
                                    <li>niedotlenieniem okołoporodowym,</li>
                                    <li>badaniami przesiewowymi, które pozwalają wcześnie wykryć choroby (np. słuchu, wzroku, chorób metabolicznych).</li>
                                </ul>
                                <p>W Polsce opieka nad noworodkami jest zorganizowana w <strong>trzech poziomach referencyjnych</strong>. Oddziały I poziomu przyjmują porody fizjologiczne, II poziomu – ciąże o umiarkowanym ryzyku, a ośrodki III poziomu (najwyższego) zajmują się ciążami wysokiego ryzyka, skrajnymi wcześniakami i dziećmi z ciężkimi wadami wrodzonymi.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Jak WOŚP pomagał neonatologii przez ponad 30 lat',
                        body: (
                            <div className="space-y-3">
                                <p>Neonatologia to jedna z dziedzin najbliższych sercu Orkiestry – według danych Fundacji była już celem Finałów <strong>siedmiokrotnie</strong>. Łącznie na sprzęt dla noworodków WOŚP przeznaczył <strong>ponad 224 mln zł</strong>, kupując <strong>ponad 8 500 urządzeń</strong>.</p>
                                <ul>
                                    <li><strong>2. Finał (1994)</strong> – pomoc szpitalom noworodkowym. Zebrano ok. 4,7 mln zł, za które kupiono m.in. <strong>160 inkubatorów</strong>, stanowiska do resuscytacji i pompy strzykawkowe. Wielu lekarzy uważa, że to właśnie wtedy zaczęła się nowoczesna polska neonatologia.</li>
                                    <li><strong>Program Powszechnych Przesiewowych Badań Słuchu u Noworodków</strong> – od 2002 roku dzięki sprzętowi WOŚP słuch bada się u praktycznie każdego dziecka urodzonego w Polsce, co pozwala wcześnie wykryć niedosłuch i szybko rozpocząć leczenie.</li>
                                    <li><strong>Program Leczenia Retinopatii Wcześniaków</strong> – Orkiestra wyposażyła ośrodki w sprzęt do diagnostyki i leczenia retinopatii, choroby oczu, która nieleczona może prowadzić u wcześniaków do ślepoty.</li>
                                    <li><strong>26. Finał (2018)</strong> – „Dla wyrównania szans w leczeniu noworodków”. Do oddziałów noworodkowych – w tym tych mniejszych, I i II poziomu – trafiło <strong>3 844 urządzenia o wartości blisko 122 mln zł</strong>: inkubatory, bilirubinometry, aparaty KTG, pulsoksymetry i wiele innych.</li>
                                </ul>
                                <figure className="my-4">
                                    <Image src="/images/35-final/26-final.webp" alt="Jurek Owsiak z wolontariuszem podczas 26. Finału WOŚP (2018)" width={750} height={500} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">26. Finał WOŚP (14 stycznia 2018) – „Dla wyrównania szans w leczeniu noworodków”. Jurek Owsiak z wolontariuszem i jego puszką.</figcaption>
                                </figure>
                                <p>Serduszko WOŚP można dziś znaleźć w praktycznie każdym oddziale noworodkowym w Polsce. Dla wielu rodziców to pierwszy symbol nadziei, który widzą obok inkubatora swojego dziecka.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Największe wyzwania: z czym mierzy się dziś opieka nad noworodkami?',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Rodzi się mniej dzieci, ale porody są coraz trudniejsze.</strong> Liczba urodzeń w Polsce jest najniższa od dziesięcioleci, a jednocześnie rośnie odsetek porodów obarczonych ryzykiem powikłań. Kobiety później decydują się na macierzyństwo, częściej rodzą się bliźnięta i dzieci poczęte po leczeniu niepłodności.</p>
                                <p><strong>Około 20 tysięcy wcześniaków rocznie.</strong> Tyle dzieci co roku rodzi się w Polsce przed czasem. Część z nich wymaga wielotygodniowej, specjalistycznej opieki – a po wyjściu ze szpitala często także wieloletniej rehabilitacji.</p>
                                <p><strong>Ubywa oddziałów.</strong> Jak przypomniał Jurek Owsiak, jeszcze dekadę temu w Polsce działało ok. 400 oddziałów neonatologicznych, dziś jest ich 266. Według Najwyższej Izby Kontroli w latach 2022–2025 zamknięto ponad 50 oddziałów ginekologiczno-położniczych, a w 136 powiatach nie ma już ani jednej porodówki. Opieka koncentruje się w dużych ośrodkach III poziomu, które muszą przyjmować coraz więcej pacjentów.</p>
                                <p><strong>Brakuje ludzi.</strong> Kontrola NIK opublikowana w czerwcu 2026 roku wykazała, że w części szpitali brakuje neonatologów i pediatrów – zdarza się, że jeden lekarz obsługuje kilka oddziałów naraz, a dyżury trwają nawet po kilka dób.</p>
                                <p><strong>Rośnie znaczenie transportu.</strong> Skoro mniejszych oddziałów jest coraz mniej, wiele dzieci trzeba po urodzeniu szybko przewieźć do ośrodka referencyjnego, nierzadko oddalonego o dziesiątki kilometrów. Do tego potrzebne są specjalistyczne karetki z inkubatorem transportowym i respiratorem.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Czy szpitale mają potrzebny sprzęt?',
                        body: (
                            <div className="space-y-3">
                                <p>Podstawowe wyposażenie – w dużej mierze właśnie dzięki wcześniejszym Finałom WOŚP – większość oddziałów posiada. Problem polega na tym, że sprzęt medyczny się starzeje: urządzenia kupione kilka czy kilkanaście lat temu wymagają wymiany, a medycyna w tym czasie zrobiła ogromny krok naprzód.</p>
                                <figure className="my-4">
                                    <Image src="/images/35-final/noworodek-sprzet-wosp.webp" alt="Noworodek w inkubatorze otoczony sprzętem medycznym z naklejkami serduszka WOŚP" width={1000} height={666} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">Noworodek na oddziale intensywnej terapii – niemal każde urządzenie wokół niego oznaczone jest serduszkiem WOŚP.</figcaption>
                                </figure>
                                <p>Wiele nowoczesnych rozwiązań, które pozwalają dziś skuteczniej i łagodniej leczyć wcześniaki – takich jak monitory NIRS, tomografia impedancyjna płuc czy systemy HeRO – wciąż nie jest standardem w każdym oddziale. Do tego ośrodki III poziomu, do których trafia coraz więcej najciężej chorych dzieci, potrzebują więcej stanowisk intensywnej terapii niż jeszcze kilka lat temu. Właśnie tę lukę ma wypełnić 35. Finał.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Co kupi Orkiestra?',
                        body: (
                            <div className="space-y-3">
                                <p>Fundacja WOŚP zapowiedziała zakup m.in.:</p>
                                <ul>
                                    <li><strong>stanowisk do resuscytacji noworodka</strong> – pierwsza pomoc dla dziecka tuż po porodzie,</li>
                                    <li><strong>nowoczesnych respiratorów noworodkowych</strong> i <strong>monitorów funkcji oddechowych</strong>,</li>
                                    <li><strong>wideolaryngoskopów</strong> – ułatwiających bezpieczną intubację maleńkich pacjentów,</li>
                                    <li><strong>tomografów impedancyjnych</strong> – do monitorowania wentylacji płuc bez promieniowania,</li>
                                    <li><strong>monitorów NIRS</strong> – do nieinwazyjnej oceny utlenowania tkanek, m.in. mózgu,</li>
                                    <li><strong>systemów HeRO</strong> – analizujących zmienność rytmu serca, by wcześnie wychwycić zagrożenia, np. infekcję,</li>
                                    <li><strong>inkubatorów</strong> umożliwiających bezpieczne kangurowanie nawet najmniejszych wcześniaków,</li>
                                    <li><strong>karetek typu N</strong> do specjalistycznego transportu noworodków,</li>
                                    <li><strong>analizatorów mleka kobiecego</strong> dla oddziałów i banków mleka.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Gramy razem – także w Barcelonie!',
                        body: (
                            <div className="space-y-3">
                                <p>31 stycznia 2027 roku Sztab WOŚP Barcelona po raz kolejny zagra razem z całą Polską i Polonią na świecie. Już teraz pracujemy nad programem naszego Finału – szczegóły dotyczące miejsca, koncertów, licytacji i atrakcji dla dzieci ogłosimy wkrótce.</p>
                                <p>Chcesz zostać wolontariuszem, zaproponować przedmiot na licytację albo wesprzeć nas jako sponsor? <Link href="/pl/contact">Napisz do nas</Link> i śledź nas na <a href="https://www.facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer">Facebooku</a> oraz <a href="https://www.instagram.com/wospbarcelona/" target="_blank" rel="noopener noreferrer">Instagramie</a>. Dzisiaj?! Zdrowie noworodka najważniejsze! ❤️</p>
                            </div>
                        ),
                    },
                    { title: 'Źródła', body: <Final35Sources /> },
                ],
            },
            en: {
                title: '35th WOŚP Finale – on 31 January 2027 we play for the health of newborns!',
                excerpt: 'The 35th Finale of the Great Orchestra of Christmas Charity will take place on 31 January 2027 under the motto "Today?! Newborn health comes first!". We explain what neonatology is, how WOŚP has supported it for over 30 years, and what challenges neonatal wards face today.',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <Final35InfoBox
                                    heading="35th WOŚP Finale – Today?! Newborn health comes first!"
                                    items={[
                                        ['Date', '31 January 2027 (Sunday)'],
                                        ['Goal', 'Neonatology – equipment for neonatal wards, from the delivery room to intensive care'],
                                        ['Barcelona', 'Of course we are playing with you – details of our Finale coming soon!'],
                                    ]}
                                />
                                <p>The WOŚP Foundation has announced the goal of the 35th Finale: this time the Orchestra will play for the <strong>youngest patients of all – newborns</strong>, with a special focus on premature babies and children who need intensive care. The money raised will go to modern equipment for delivery rooms, neonatal intensive care units and specialised transport between hospitals.</p>
                                <p>This is a very special cause for us – many of us are parents, and quite a few volunteers of WOŚP Barcelona have their own “preemie” stories in the family. Below we explain exactly what we are playing for and why it matters so much.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'What is neonatology?',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Neonatology</strong> (from Latin <em>neonatus</em> – newborn) is the branch of medicine focused on the health of babies during their first <strong>28 days of life</strong>. Neonatologists care both for healthy newborns and for those who fight for their lives from the very first minutes.</p>
                                <p>The most important group of patients are <strong>premature babies</strong> – children born before the 37th week of pregnancy. Thanks to medical progress, babies born as early as the 23rd–24th week, sometimes weighing less than 500 grams, can now be saved. These little ones have immature lungs, brains, intestines and eyes – they need an incubator, breathing support, precisely dosed medication and nutrition, and often many weeks in intensive care.</p>
                                <p>Neonatology also deals with, among other things:</p>
                                <ul>
                                    <li>breathing disorders and respiratory failure,</li>
                                    <li>infections and neonatal sepsis,</li>
                                    <li>newborn jaundice,</li>
                                    <li>congenital defects (e.g. of the heart or digestive tract),</li>
                                    <li>perinatal oxygen deprivation,</li>
                                    <li>screening tests that detect diseases early (e.g. hearing, vision, metabolic disorders).</li>
                                </ul>
                                <p>In Poland, newborn care is organised in <strong>three referral levels</strong>. Level I units handle normal births, level II – moderately risky pregnancies, while level III centres (the highest) take care of high-risk pregnancies, extremely premature babies and children with serious congenital defects.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'How WOŚP has supported neonatology for over 30 years',
                        body: (
                            <div className="space-y-3">
                                <p>Neonatology is one of the causes closest to the Orchestra&apos;s heart – according to the Foundation, it has already been the goal of a Finale <strong>seven times</strong>. In total, WOŚP has spent <strong>over 224 million PLN</strong> on equipment for newborns, buying <strong>more than 8,500 devices</strong>.</p>
                                <ul>
                                    <li><strong>2nd Finale (1994)</strong> – support for neonatal hospitals. About 4.7 million PLN was raised and used to buy, among other things, <strong>160 incubators</strong>, resuscitation stations and syringe pumps. Many doctors consider this the moment modern Polish neonatology was born.</li>
                                    <li><strong>Universal Newborn Hearing Screening Programme</strong> – since 2002, thanks to WOŚP equipment, practically every child born in Poland has their hearing tested, so hearing loss can be detected early and treated quickly.</li>
                                    <li><strong>Retinopathy of Prematurity Treatment Programme</strong> – the Orchestra equipped centres with devices to diagnose and treat retinopathy, an eye disease that can lead to blindness in premature babies if left untreated.</li>
                                    <li><strong>26th Finale (2018)</strong> – “To equalise chances in the treatment of newborns”. Neonatal wards – including smaller level I and II units – received <strong>3,844 devices worth almost 122 million PLN</strong>: incubators, bilirubinometers, CTG machines, pulse oximeters and much more.</li>
                                </ul>
                                <figure className="my-4">
                                    <Image src="/images/35-final/26-final.webp" alt="Jurek Owsiak with a volunteer during the 26th WOŚP Finale (2018)" width={750} height={500} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">26th WOŚP Finale (14 January 2018) – “To equalise chances in the treatment of newborns”. Jurek Owsiak with a volunteer and his collection box.</figcaption>
                                </figure>
                                <p>Today the WOŚP heart can be found in practically every neonatal ward in Poland. For many parents it is the first symbol of hope they see next to their baby&apos;s incubator.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'The biggest challenges in newborn care today',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Fewer babies are born, but births are becoming more complicated.</strong> The number of births in Poland is the lowest in decades, while the share of births with a higher risk of complications is growing. Women are deciding to have children later, and twins and babies conceived after fertility treatment are more common.</p>
                                <p><strong>Around 20,000 premature babies a year.</strong> That is how many children are born too early in Poland every year. Some of them need weeks of specialised care – and, after leaving hospital, often years of rehabilitation.</p>
                                <p><strong>Wards are disappearing.</strong> As Jurek Owsiak pointed out, a decade ago there were about 400 neonatal wards in Poland – today there are 266. According to Poland&apos;s Supreme Audit Office (NIK), more than 50 obstetric wards were closed in 2022–2025, and 136 counties no longer have a single maternity ward. Care is being concentrated in large level III centres, which have to admit more and more patients.</p>
                                <p><strong>Staff shortages.</strong> An NIK audit published in June 2026 showed that some hospitals lack neonatologists and paediatricians – sometimes a single doctor covers several wards at once, and shifts can last several days.</p>
                                <p><strong>Transport is becoming crucial.</strong> With fewer small wards, many babies have to be moved quickly after birth to a referral centre, often tens of kilometres away. This requires specialised ambulances with a transport incubator and a ventilator.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Do hospitals have the equipment they need?',
                        body: (
                            <div className="space-y-3">
                                <p>Most wards have the basic equipment – largely thanks to previous WOŚP Finales. The problem is that medical equipment ages: devices bought several or more than ten years ago need replacing, and medicine has taken a huge leap forward in the meantime.</p>
                                <figure className="my-4">
                                    <Image src="/images/35-final/noworodek-sprzet-wosp.webp" alt="A newborn in an incubator surrounded by medical equipment with WOŚP heart stickers" width={1000} height={666} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">A newborn in an intensive care unit – almost every device around the baby bears the WOŚP heart.</figcaption>
                                </figure>
                                <p>Many modern solutions that make it possible to treat premature babies more effectively and more gently – such as NIRS monitors, lung impedance tomography or HeRO systems – are still not standard in every ward. On top of that, level III centres, which receive more and more of the sickest babies, need more intensive care beds than just a few years ago. This is exactly the gap the 35th Finale aims to fill.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'What will the Orchestra buy?',
                        body: (
                            <div className="space-y-3">
                                <p>The WOŚP Foundation has announced plans to purchase, among others:</p>
                                <ul>
                                    <li><strong>neonatal resuscitation stations</strong> – first aid for a baby right after birth,</li>
                                    <li><strong>modern neonatal ventilators</strong> and <strong>respiratory function monitors</strong>,</li>
                                    <li><strong>video laryngoscopes</strong> – making intubation of tiny patients safer,</li>
                                    <li><strong>electrical impedance tomographs</strong> – to monitor lung ventilation without radiation,</li>
                                    <li><strong>NIRS monitors</strong> – for non-invasive assessment of tissue oxygenation, including the brain,</li>
                                    <li><strong>HeRO systems</strong> – analysing heart rate variability to detect threats such as infection early,</li>
                                    <li><strong>incubators</strong> that allow safe kangaroo care even for the smallest preemies,</li>
                                    <li><strong>type N ambulances</strong> for specialised newborn transport,</li>
                                    <li><strong>human milk analysers</strong> for wards and milk banks.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Playing together – in Barcelona too!',
                        body: (
                            <div className="space-y-3">
                                <p>On 31 January 2027, WOŚP Barcelona will once again play together with all of Poland and the Polish diaspora around the world. We are already working on the programme of our Finale – details about the venue, concerts, auctions and activities for children will be announced soon.</p>
                                <p>Would you like to volunteer, donate an item for auction or support us as a sponsor? <Link href="/en/contact">Write to us</Link> and follow us on <a href="https://www.facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://www.instagram.com/wospbarcelona/" target="_blank" rel="noopener noreferrer">Instagram</a>. Today?! Newborn health comes first! ❤️</p>
                            </div>
                        ),
                    },
                    { title: 'Sources', body: <Final35Sources /> },
                ],
            },
            es: {
                title: '35ª Final de WOŚP: ¡el 31 de enero de 2027 tocamos por la salud de los recién nacidos!',
                excerpt: 'La 35ª Final de la Gran Orquesta de la Ayuda Navideña se celebrará el 31 de enero de 2027 con el lema «¿¡Hoy?! La salud del recién nacido es lo primero». Te explicamos qué es la neonatología, cómo WOŚP la ha apoyado durante más de 30 años y a qué retos se enfrentan hoy las unidades neonatales.',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <Final35InfoBox
                                    heading="35ª Final de WOŚP – ¿¡Hoy?! La salud del recién nacido es lo primero"
                                    items={[
                                        ['Fecha', '31 de enero de 2027 (domingo)'],
                                        ['Objetivo', 'Neonatología – equipamiento para unidades neonatales, desde la sala de partos hasta los cuidados intensivos'],
                                        ['Barcelona', '¡Por supuesto, tocamos con vosotros! Pronto daremos los detalles de nuestra Final.'],
                                    ]}
                                />
                                <p>La Fundación WOŚP ha anunciado el objetivo de la 35ª Final: esta vez la Orquesta tocará por los <strong>pacientes más pequeños – los recién nacidos</strong>, con especial atención a los bebés prematuros y a los niños que necesitan cuidados intensivos. El dinero recaudado se destinará a equipos modernos para salas de partos, unidades de cuidados intensivos neonatales y transporte especializado entre hospitales.</p>
                                <p>Es una causa muy especial para nosotros: muchos somos padres y varios voluntarios de WOŚP Barcelona tienen en su familia historias de bebés prematuros. A continuación te contamos por qué tocamos exactamente y por qué es tan importante.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Qué es la neonatología?',
                        body: (
                            <div className="space-y-3">
                                <p>La <strong>neonatología</strong> (del latín <em>neonatus</em>, recién nacido) es la rama de la medicina que se ocupa de la salud de los bebés durante sus primeros <strong>28 días de vida</strong>. Los neonatólogos atienden tanto a recién nacidos sanos como a aquellos que luchan por su vida desde los primeros minutos.</p>
                                <p>El grupo de pacientes más importante son los <strong>bebés prematuros</strong>, es decir, los nacidos antes de la semana 37 de embarazo. Gracias a los avances médicos, hoy se puede salvar a bebés nacidos incluso en la semana 23–24, que a veces pesan menos de 500 gramos. Estos pequeños tienen los pulmones, el cerebro, el intestino y los ojos inmaduros: necesitan incubadora, apoyo respiratorio, medicación y nutrición dosificadas con precisión y, a menudo, muchas semanas en cuidados intensivos.</p>
                                <p>La neonatología también se ocupa, entre otras cosas, de:</p>
                                <ul>
                                    <li>trastornos respiratorios e insuficiencia respiratoria,</li>
                                    <li>infecciones y sepsis neonatal,</li>
                                    <li>ictericia del recién nacido,</li>
                                    <li>malformaciones congénitas (p. ej. del corazón o del aparato digestivo),</li>
                                    <li>falta de oxígeno durante el parto,</li>
                                    <li>pruebas de cribado que detectan enfermedades a tiempo (p. ej. de audición, visión o metabólicas).</li>
                                </ul>
                                <p>En Polonia, la atención neonatal se organiza en <strong>tres niveles de referencia</strong>. Las unidades de nivel I atienden partos normales; las de nivel II, embarazos de riesgo moderado; y los centros de nivel III (el más alto) se ocupan de embarazos de alto riesgo, grandes prematuros y niños con malformaciones congénitas graves.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Cómo WOŚP ha apoyado la neonatología durante más de 30 años',
                        body: (
                            <div className="space-y-3">
                                <p>La neonatología es una de las causas más cercanas al corazón de la Orquesta: según la Fundación, ya ha sido el objetivo de una Final <strong>siete veces</strong>. En total, WOŚP ha destinado <strong>más de 224 millones de zlotys</strong> a equipamiento para recién nacidos, adquiriendo <strong>más de 8.500 aparatos</strong>.</p>
                                <ul>
                                    <li><strong>2ª Final (1994)</strong> – ayuda a los hospitales neonatales. Se recaudaron unos 4,7 millones de zlotys, con los que se compraron, entre otras cosas, <strong>160 incubadoras</strong>, puestos de reanimación y bombas de jeringa. Muchos médicos consideran que ahí nació la neonatología moderna en Polonia.</li>
                                    <li><strong>Programa de Cribado Auditivo Universal de Recién Nacidos</strong> – desde 2002, gracias a los equipos de WOŚP, se examina la audición de prácticamente todos los niños nacidos en Polonia, lo que permite detectar la sordera a tiempo y tratarla rápidamente.</li>
                                    <li><strong>Programa de Tratamiento de la Retinopatía del Prematuro</strong> – la Orquesta equipó centros con aparatos para diagnosticar y tratar la retinopatía, una enfermedad ocular que, sin tratamiento, puede causar ceguera en los prematuros.</li>
                                    <li><strong>26ª Final (2018)</strong> – «Para igualar las oportunidades en el tratamiento de los recién nacidos». Las unidades neonatales, incluidas las más pequeñas de nivel I y II, recibieron <strong>3.844 aparatos por valor de casi 122 millones de zlotys</strong>: incubadoras, bilirrubinómetros, cardiotocógrafos, pulsioxímetros y mucho más.</li>
                                </ul>
                                <figure className="my-4">
                                    <Image src="/images/35-final/26-final.webp" alt="Jurek Owsiak con un voluntario durante la 26ª Final de WOŚP (2018)" width={750} height={500} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">26ª Final de WOŚP (14 de enero de 2018) – «Para igualar las oportunidades en el tratamiento de los recién nacidos». Jurek Owsiak con un voluntario y su hucha.</figcaption>
                                </figure>
                                <p>Hoy el corazón de WOŚP se encuentra en prácticamente todas las unidades neonatales de Polonia. Para muchos padres es el primer símbolo de esperanza que ven junto a la incubadora de su bebé.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Los mayores retos actuales en la atención al recién nacido',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Nacen menos niños, pero los partos son cada vez más complicados.</strong> El número de nacimientos en Polonia es el más bajo en décadas y, al mismo tiempo, crece la proporción de partos con mayor riesgo de complicaciones. Las mujeres son madres más tarde y son más frecuentes los gemelos y los bebés concebidos tras tratamientos de fertilidad.</p>
                                <p><strong>Unos 20.000 prematuros al año.</strong> Son los niños que nacen antes de tiempo en Polonia cada año. Algunos necesitan semanas de atención especializada y, tras salir del hospital, a menudo años de rehabilitación.</p>
                                <p><strong>Desaparecen unidades.</strong> Como recordó Jurek Owsiak, hace una década había en Polonia unas 400 unidades neonatales; hoy hay 266. Según el Tribunal Supremo de Cuentas polaco (NIK), entre 2022 y 2025 se cerraron más de 50 unidades de obstetricia, y en 136 distritos ya no queda ni una sola maternidad. La atención se concentra en grandes centros de nivel III, que deben recibir cada vez más pacientes.</p>
                                <p><strong>Falta personal.</strong> Una auditoría de la NIK publicada en junio de 2026 mostró que en algunos hospitales faltan neonatólogos y pediatras: a veces un solo médico atiende varias unidades a la vez y las guardias duran incluso varios días.</p>
                                <p><strong>El transporte es cada vez más importante.</strong> Al haber menos unidades pequeñas, muchos bebés deben ser trasladados rápidamente tras el parto a un centro de referencia, a menudo a decenas de kilómetros. Para ello se necesitan ambulancias especializadas con incubadora de transporte y respirador.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Tienen los hospitales el equipamiento necesario?',
                        body: (
                            <div className="space-y-3">
                                <p>La mayoría de las unidades cuenta con el equipamiento básico, en gran parte gracias a anteriores Finales de WOŚP. El problema es que los equipos médicos envejecen: los aparatos comprados hace varios o más de diez años necesitan ser sustituidos, y la medicina ha dado entretanto un enorme salto adelante.</p>
                                <figure className="my-4">
                                    <Image src="/images/35-final/noworodek-sprzet-wosp.webp" alt="Un recién nacido en una incubadora rodeado de equipos médicos con el corazón de WOŚP" width={1000} height={666} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">Un recién nacido en cuidados intensivos: casi todos los aparatos a su alrededor llevan el corazón de WOŚP.</figcaption>
                                </figure>
                                <p>Muchas soluciones modernas que permiten tratar a los prematuros de forma más eficaz y suave –como los monitores NIRS, la tomografía de impedancia pulmonar o los sistemas HeRO– todavía no son estándar en todas las unidades. Además, los centros de nivel III, que reciben cada vez más bebés en estado grave, necesitan más puestos de cuidados intensivos que hace unos años. Precisamente ese vacío es el que quiere llenar la 35ª Final.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Qué comprará la Orquesta?',
                        body: (
                            <div className="space-y-3">
                                <p>La Fundación WOŚP ha anunciado la compra, entre otros, de:</p>
                                <ul>
                                    <li><strong>puestos de reanimación neonatal</strong> – primeros auxilios para el bebé justo después del parto,</li>
                                    <li><strong>respiradores neonatales modernos</strong> y <strong>monitores de función respiratoria</strong>,</li>
                                    <li><strong>videolaringoscopios</strong> – que hacen más segura la intubación de pacientes diminutos,</li>
                                    <li><strong>tomógrafos de impedancia eléctrica</strong> – para controlar la ventilación pulmonar sin radiación,</li>
                                    <li><strong>monitores NIRS</strong> – para evaluar de forma no invasiva la oxigenación de los tejidos, incluido el cerebro,</li>
                                    <li><strong>sistemas HeRO</strong> – que analizan la variabilidad de la frecuencia cardiaca para detectar a tiempo amenazas como una infección,</li>
                                    <li><strong>incubadoras</strong> que permiten el método canguro de forma segura incluso con los prematuros más pequeños,</li>
                                    <li><strong>ambulancias de tipo N</strong> para el transporte neonatal especializado,</li>
                                    <li><strong>analizadores de leche materna</strong> para unidades y bancos de leche.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Tocamos juntos, ¡también en Barcelona!',
                        body: (
                            <div className="space-y-3">
                                <p>El 31 de enero de 2027, WOŚP Barcelona volverá a tocar junto con toda Polonia y la diáspora polaca de todo el mundo. Ya estamos trabajando en el programa de nuestra Final: muy pronto anunciaremos el lugar, los conciertos, las subastas y las actividades para niños.</p>
                                <p>¿Quieres ser voluntario, donar un objeto para subasta o apoyarnos como patrocinador? <Link href="/es/contact">Escríbenos</Link> y síguenos en <a href="https://www.facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.instagram.com/wospbarcelona/" target="_blank" rel="noopener noreferrer">Instagram</a>. ¿¡Hoy?! ¡La salud del recién nacido es lo primero! ❤️</p>
                            </div>
                        ),
                    },
                    { title: 'Fuentes', body: <Final35Sources /> },
                ],
            },
            ca: {
                title: '35a Final de WOŚP: el 31 de gener de 2027 toquem per la salut dels nadons!',
                excerpt: 'La 35a Final de la Gran Orquestra de l\'Ajuda de Nadal se celebrarà el 31 de gener de 2027 amb el lema «Avui?! La salut del nadó és el més important». T\'expliquem què és la neonatologia, com WOŚP l\'ha donat suport durant més de 30 anys i a quins reptes s\'enfronten avui les unitats neonatals.',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <Final35InfoBox
                                    heading="35a Final de WOŚP – Avui?! La salut del nadó és el més important"
                                    items={[
                                        ['Data', '31 de gener de 2027 (diumenge)'],
                                        ['Objectiu', 'Neonatologia – equipament per a unitats neonatals, des de la sala de parts fins a les cures intensives'],
                                        ['Barcelona', 'És clar que toquem amb vosaltres! Aviat donarem els detalls de la nostra Final.'],
                                    ]}
                                />
                                <p>La Fundació WOŚP ha anunciat l&apos;objectiu de la 35a Final: aquesta vegada l&apos;Orquestra tocarà pels <strong>pacients més petits – els nadons</strong>, amb una atenció especial als prematurs i als infants que necessiten cures intensives. Els diners recaptats es destinaran a equips moderns per a sales de parts, unitats de cures intensives neonatals i transport especialitzat entre hospitals.</p>
                                <p>És una causa molt especial per a nosaltres: molts som pares i mares, i diversos voluntaris de WOŚP Barcelona tenen a la família històries de nadons prematurs. A continuació t&apos;expliquem per què toquem exactament i per què és tan important.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Què és la neonatologia?',
                        body: (
                            <div className="space-y-3">
                                <p>La <strong>neonatologia</strong> (del llatí <em>neonatus</em>, nounat) és la branca de la medicina que s&apos;ocupa de la salut dels nadons durant els seus primers <strong>28 dies de vida</strong>. Els neonatòlegs atenen tant nadons sans com aquells que lluiten per la seva vida des dels primers minuts.</p>
                                <p>El grup de pacients més important són els <strong>prematurs</strong>, és a dir, els nascuts abans de la setmana 37 d&apos;embaràs. Gràcies als avenços mèdics, avui es poden salvar nadons nascuts fins i tot a la setmana 23–24, que de vegades pesen menys de 500 grams. Aquests petits tenen els pulmons, el cervell, l&apos;intestí i els ulls immadurs: necessiten incubadora, suport respiratori, medicació i nutrició dosificades amb precisió i, sovint, moltes setmanes a cures intensives.</p>
                                <p>La neonatologia també s&apos;ocupa, entre altres coses, de:</p>
                                <ul>
                                    <li>trastorns respiratoris i insuficiència respiratòria,</li>
                                    <li>infeccions i sèpsia neonatal,</li>
                                    <li>icterícia del nadó,</li>
                                    <li>malformacions congènites (p. ex. del cor o de l&apos;aparell digestiu),</li>
                                    <li>manca d&apos;oxigen durant el part,</li>
                                    <li>proves de cribratge que detecten malalties a temps (p. ex. d&apos;audició, visió o metabòliques).</li>
                                </ul>
                                <p>A Polònia, l&apos;atenció neonatal s&apos;organitza en <strong>tres nivells de referència</strong>. Les unitats de nivell I atenen parts normals; les de nivell II, embarassos de risc moderat; i els centres de nivell III (el més alt) s&apos;ocupen d&apos;embarassos d&apos;alt risc, grans prematurs i infants amb malformacions congènites greus.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Com WOŚP ha donat suport a la neonatologia durant més de 30 anys',
                        body: (
                            <div className="space-y-3">
                                <p>La neonatologia és una de les causes més properes al cor de l&apos;Orquestra: segons la Fundació, ja ha estat l&apos;objectiu d&apos;una Final <strong>set vegades</strong>. En total, WOŚP ha destinat <strong>més de 224 milions de zlotys</strong> a equipament per a nadons, adquirint <strong>més de 8.500 aparells</strong>.</p>
                                <ul>
                                    <li><strong>2a Final (1994)</strong> – ajuda als hospitals neonatals. Es van recaptar uns 4,7 milions de zlotys, amb els quals es van comprar, entre altres coses, <strong>160 incubadores</strong>, llocs de reanimació i bombes de xeringa. Molts metges consideren que llavors va néixer la neonatologia moderna a Polònia.</li>
                                    <li><strong>Programa de Cribratge Auditiu Universal de Nadons</strong> – des del 2002, gràcies als equips de WOŚP, s&apos;examina l&apos;audició de pràcticament tots els infants nascuts a Polònia, cosa que permet detectar la sordesa a temps i tractar-la ràpidament.</li>
                                    <li><strong>Programa de Tractament de la Retinopatia del Prematur</strong> – l&apos;Orquestra va equipar centres amb aparells per diagnosticar i tractar la retinopatia, una malaltia ocular que, sense tractament, pot causar ceguesa als prematurs.</li>
                                    <li><strong>26a Final (2018)</strong> – «Per igualar les oportunitats en el tractament dels nadons». Les unitats neonatals, incloses les més petites de nivell I i II, van rebre <strong>3.844 aparells per valor de gairebé 122 milions de zlotys</strong>: incubadores, bilirubinòmetres, cardiotocògrafs, pulsioxímetres i molt més.</li>
                                </ul>
                                <figure className="my-4">
                                    <Image src="/images/35-final/26-final.webp" alt="Jurek Owsiak amb un voluntari durant la 26a Final de WOŚP (2018)" width={750} height={500} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">26a Final de WOŚP (14 de gener de 2018) – «Per igualar les oportunitats en el tractament dels nadons». Jurek Owsiak amb un voluntari i la seva guardiola.</figcaption>
                                </figure>
                                <p>Avui el cor de WOŚP es troba a pràcticament totes les unitats neonatals de Polònia. Per a molts pares és el primer símbol d&apos;esperança que veuen al costat de la incubadora del seu nadó.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Els reptes més grans actuals en l\'atenció al nadó',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Neixen menys infants, però els parts són cada cop més complicats.</strong> El nombre de naixements a Polònia és el més baix en dècades i, alhora, creix la proporció de parts amb més risc de complicacions. Les dones són mares més tard i són més freqüents els bessons i els nadons concebuts després de tractaments de fertilitat.</p>
                                <p><strong>Uns 20.000 prematurs l&apos;any.</strong> Són els infants que neixen abans d&apos;hora a Polònia cada any. Alguns necessiten setmanes d&apos;atenció especialitzada i, després de sortir de l&apos;hospital, sovint anys de rehabilitació.</p>
                                <p><strong>Desapareixen unitats.</strong> Com va recordar Jurek Owsiak, fa una dècada hi havia a Polònia unes 400 unitats neonatals; avui n&apos;hi ha 266. Segons la Sindicatura Suprema de Comptes polonesa (NIK), entre el 2022 i el 2025 es van tancar més de 50 unitats d&apos;obstetrícia, i en 136 comarques ja no hi queda ni una sola maternitat. L&apos;atenció es concentra en grans centres de nivell III, que han de rebre cada cop més pacients.</p>
                                <p><strong>Manca personal.</strong> Una auditoria de la NIK publicada el juny del 2026 va mostrar que en alguns hospitals falten neonatòlegs i pediatres: de vegades un sol metge atén diverses unitats alhora i les guàrdies duren fins i tot uns quants dies.</p>
                                <p><strong>El transport és cada cop més important.</strong> Com que hi ha menys unitats petites, molts nadons han de ser traslladats ràpidament després del part a un centre de referència, sovint a desenes de quilòmetres. Per això calen ambulàncies especialitzades amb incubadora de transport i respirador.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Tenen els hospitals l\'equipament necessari?',
                        body: (
                            <div className="space-y-3">
                                <p>La majoria de les unitats disposen de l&apos;equipament bàsic, en gran part gràcies a Finals anteriors de WOŚP. El problema és que els equips mèdics envelleixen: els aparells comprats fa uns quants anys o més de deu necessiten ser substituïts, i la medicina ha fet mentrestant un salt enorme endavant.</p>
                                <figure className="my-4">
                                    <Image src="/images/35-final/noworodek-sprzet-wosp.webp" alt="Un nadó en una incubadora envoltat d'equips mèdics amb el cor de WOŚP" width={1000} height={666} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
                                    <figcaption className="mt-2 text-sm text-gray-600 italic text-center">Un nadó a cures intensives: gairebé tots els aparells que l&apos;envolten porten el cor de WOŚP.</figcaption>
                                </figure>
                                <p>Moltes solucions modernes que permeten tractar els prematurs de manera més eficaç i suau –com els monitors NIRS, la tomografia d&apos;impedància pulmonar o els sistemes HeRO– encara no són estàndard a totes les unitats. A més, els centres de nivell III, que reben cada cop més nadons en estat greu, necessiten més llocs de cures intensives que fa uns anys. Precisament aquest buit és el que vol omplir la 35a Final.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Què comprarà l\'Orquestra?',
                        body: (
                            <div className="space-y-3">
                                <p>La Fundació WOŚP ha anunciat la compra, entre d&apos;altres, de:</p>
                                <ul>
                                    <li><strong>llocs de reanimació neonatal</strong> – primers auxilis per al nadó just després del part,</li>
                                    <li><strong>respiradors neonatals moderns</strong> i <strong>monitors de funció respiratòria</strong>,</li>
                                    <li><strong>videolaringoscopis</strong> – que fan més segura la intubació de pacients diminuts,</li>
                                    <li><strong>tomògrafs d&apos;impedància elèctrica</strong> – per controlar la ventilació pulmonar sense radiació,</li>
                                    <li><strong>monitors NIRS</strong> – per avaluar de manera no invasiva l&apos;oxigenació dels teixits, inclòs el cervell,</li>
                                    <li><strong>sistemes HeRO</strong> – que analitzen la variabilitat de la freqüència cardíaca per detectar a temps amenaces com una infecció,</li>
                                    <li><strong>incubadores</strong> que permeten el mètode cangur de manera segura fins i tot amb els prematurs més petits,</li>
                                    <li><strong>ambulàncies de tipus N</strong> per al transport neonatal especialitzat,</li>
                                    <li><strong>analitzadors de llet materna</strong> per a unitats i bancs de llet.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Toquem junts, també a Barcelona!',
                        body: (
                            <div className="space-y-3">
                                <p>El 31 de gener de 2027, WOŚP Barcelona tornarà a tocar juntament amb tota Polònia i la diàspora polonesa arreu del món. Ja estem treballant en el programa de la nostra Final: molt aviat anunciarem el lloc, els concerts, les subhastes i les activitats per als infants.</p>
                                <p>Vols ser voluntari, donar un objecte per a la subhasta o donar-nos suport com a patrocinador? <Link href="/ca/contact">Escriu-nos</Link> i segueix-nos a <a href="https://www.facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/wospbarcelona/" target="_blank" rel="noopener noreferrer">Instagram</a>. Avui?! La salut del nadó és el més important! ❤️</p>
                            </div>
                        ),
                    },
                    { title: 'Fonts', body: <Final35Sources /> },
                ],
            },
        },
    },
    {
        slug: 'dziekujemy-za-34-final-wosp-w-barcelonie',
        date: '2026-01-26',
        coverImage: '/images/34-final/ZDJECIE_W_TLE (1).jpg',
        tags: ['34FinałWOŚP', 'Barcelona', 'Dziękujemy', 'WOŚPBarcelona', 'Finał2026'],
        social: {
            facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
            instagram: 'https://www.instagram.com/wospbarcelona/',
        },
        content: {
            pl: {
                title: 'Dziękujemy! 34. Finał WOŚP w Barcelonie za nami ❤️',
                excerpt: 'Serdecznie dziękujemy wszystkim uczestnikom, wolontariuszom, sponsorom i darczyńcom! Razem podczas 34. Finału w Barcelonie zebraliśmy aż 12 408 € na zdrowe brzuszki naszych dzieci!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-white shadow-xl text-center"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.92) 0%, rgba(239, 68, 68, 0.88) 50%, rgba(251, 146, 60, 0.85) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="text-6xl mb-4">❤️</div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-lg">Dziękujemy Wam z całego serca!</h3>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                        34. Finał WOŚP w Barcelonie za nami — i był to dzień pełen ciepła, radości i bezinteresownej pomocy. Dziękujemy każdemu, kto był z nami tego wyjątkowego dnia!
                                    </p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: '🙌 Dziękujemy wolontariuszom',
                        body: (
                            <div className="space-y-3">
                                <p>
                                    Ten finał nie byłby możliwy bez naszych niesamowitych <strong>wolontariuszy</strong>. Od wczesnych godzin porannych do późnego wieczoru daliście z siebie wszystko — organizowaliście stoiska, pilnowaliście zbiórek, pomagaliście uczestnikom i dbaliście o to, by każdy poczuł się mile widziany. Jesteście sercem naszego sztabu!
                                </p>
                                <p>
                                    Wasza praca, poświęcony czas i entuzjazm tworzą prawdziwą magię Orkiestry. <strong>Dziękujemy!</strong>
                                </p>
                                {/* Photo grid — add volunteer photos below */}
                                {(() => {
                                    const photos: string[] = [
                                        // Dodaj ścieżki do zdjęć wolontariuszy:
                                        // '/images/34-final/gallery/wolontariusze-01.jpg',
                                    ];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Wolontariusze ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '💛 Dziękujemy sponsorom i partnerom',
                        body: (
                            <div className="space-y-3">
                                <p>
                                    Ogromne podziękowania kierujemy do naszych <strong>sponsorów i partnerów</strong>, bez których organizacja finału byłaby niemożliwa. Wasze wsparcie — czy to finansowe, rzeczowe, czy w postaci usług — sprawiło, że mogliśmy zapewnić uczestnikom wyjątkowe doświadczenia i zebrać jeszcze więcej dla dzieci.
                                </p>
                                <p>
                                    Jesteście częścią tej wyjątkowej misji — <strong>dziękujemy!</strong>
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: '🎉 Dziękujemy uczestnikom',
                        body: (
                            <div className="space-y-3">
                                <p>
                                    Dziękujemy każdemu, kto przyszedł do <strong>Espacio 88</strong> 25 stycznia 2026 roku. To Wy tworzycie atmosferę Finału — Wasze uśmiechy, zaangażowanie w licytacje, chęć zabawy i wspólne "Światełko do nieba" sprawiają, że WOŚP ma sens.
                                </p>
                                <p>
                                    Dziękujemy za każdą wpłatę do puszki, każdy wylicytowany przedmiot i każdą chwilę spędzoną razem dla zdrowia polskich dzieci.
                                </p>
                                {/* Photo grid — add event photos below */}
                                {(() => {
                                    const photos: string[] = [
                                        // Dodaj ścieżki do zdjęć z wydarzenia:
                                        // '/images/34-final/gallery/wydarzenie-01.jpg',
                                    ];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Wydarzenie ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '📸 Galeria zdjęć',
                        body: (
                            <div className="space-y-4">
                                <BlogPhotoGallery photos={final34GalleryPhotos} altPrefix="Zdjęcie z 34. Finału WOŚP Barcelona" />
                            </div>
                        ),
                    },
                    {
                        title: '💰 Zebrany wynik — 12 408 €!',
                        body: (
                            <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 md:p-8 border border-red-200 text-center shadow-sm">
                                <div className="text-5xl mb-3">🎉</div>
                                <h4 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-2">12 408 €</h4>
                                <p className="text-lg font-semibold text-gray-900 mb-2">
                                    Tyle wspólnie zebraliśmy podczas 34. Finału WOŚP w Barcelonie!
                                </p>
                                <p className="text-gray-700 max-w-lg mx-auto">
                                    Dzięki Waszym gorącym sercom, datkom do puszek, wylicytowanym przedmiotom oraz wpłatom do e-skarbonki, zebrana kwota wesprze zakup nowoczesnego sprzętu do diagnostyki i leczenia chorób przewodu pokarmowego u dzieci w Polsce.
                                </p>
                                <p className="text-sm font-semibold text-red-500 mt-4">Dziękujemy, że gracie z nami do końca świata i jeden dzień dłużej! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'Thank you! The 34th WOŚP Finale in Barcelona is behind us ❤️',
                excerpt: 'A heartfelt thank you to all participants, volunteers, sponsors and donors! Together during the 34th Finale in Barcelona we raised 12,408 € for the healthy tummies of our kids!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-white shadow-xl text-center"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.92) 0%, rgba(239, 68, 68, 0.88) 50%, rgba(251, 146, 60, 0.85) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="text-6xl mb-4">❤️</div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-lg">Thank you from the bottom of our hearts!</h3>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                        The 34th WOŚP Finale in Barcelona is behind us — and it was a day filled with warmth, joy and selfless giving. Thank you to everyone who was with us on this special day!
                                    </p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: '🙌 Thank you to our volunteers',
                        body: (
                            <div className="space-y-3">
                                <p>This finale would not have been possible without our amazing <strong>volunteers</strong>. From early in the morning until late in the evening, you gave your all — organizing stands, managing collections, helping participants, and making sure everyone felt welcome. You are the heart of our team!</p>
                                <p>Your hard work, time and enthusiasm create the true magic of the Orchestra. <strong>Thank you!</strong></p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Volunteers ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '💛 Thank you to our sponsors and partners',
                        body: (
                            <div className="space-y-3">
                                <p>Huge thanks to our <strong>sponsors and partners</strong>, without whom organizing the finale would be impossible. Your support — financial, in-kind, or through services — made it possible for us to provide participants with exceptional experiences and raise even more for the children.</p>
                                <p>You are part of this special mission — <strong>thank you!</strong></p>
                            </div>
                        ),
                    },
                    {
                        title: '🎉 Thank you to all participants',
                        body: (
                            <div className="space-y-3">
                                <p>Thank you to everyone who came to <strong>Espacio 88</strong> on January 25, 2026. You create the atmosphere of the Finale — your smiles, enthusiasm for the auctions, willingness to have fun and the shared "Light to Heaven" moment make WOŚP meaningful.</p>
                                <p>Thank you for every donation, every auctioned item and every moment spent together for the health of Polish children.</p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Event ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '📸 Photo gallery',
                        body: (
                            <div className="space-y-4">
                                <BlogPhotoGallery photos={final34GalleryPhotos} altPrefix="Photo from the 34th WOŚP Finale Barcelona" />
                            </div>
                        ),
                    },
                    {
                        title: '💰 Total raised — 12,408 €!',
                        body: (
                            <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 md:p-8 border border-red-200 text-center shadow-sm">
                                <div className="text-5xl mb-3">🎉</div>
                                <h4 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-2">12,408 €</h4>
                                <p className="text-lg font-semibold text-gray-900 mb-2">
                                    That is how much we raised together during the 34th WOŚP Finale in Barcelona!
                                </p>
                                <p className="text-gray-700 max-w-lg mx-auto">
                                    Thanks to your warm hearts, donations into collection boxes, charity auctions, and online e-collection contributions, these funds will support modern equipment for diagnosing and treating gastrointestinal diseases in children in Poland.
                                </p>
                                <p className="text-sm font-semibold text-red-500 mt-4">Thank you for playing with us till the end of the world and one day longer! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: '¡Gracias! El 34.º Final WOŚP en Barcelona ya es historia ❤️',
                excerpt: '¡Gracias de corazón a todos los participantes, voluntarios, patrocinadores y donantes! Juntos durante el 34.º Final en Barcelona hemos recaudado 12.408 € para las barrigas sanas de nuestros niños.',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-white shadow-xl text-center"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.92) 0%, rgba(239, 68, 68, 0.88) 50%, rgba(251, 146, 60, 0.85) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="text-6xl mb-4">❤️</div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-lg">¡Gracias de todo corazón!</h3>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                        El 34.º Final WOŚP en Barcelona ya es historia — y fue un día lleno de calidez, alegría y generosidad. ¡Gracias a todos los que estuvieron con nosotros en este día tan especial!
                                    </p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: '🙌 Gracias a nuestros voluntarios',
                        body: (
                            <div className="space-y-3">
                                <p>Este final no habría sido posible sin nuestros increíbles <strong>voluntarios</strong>. Desde primera hora de la mañana hasta bien entrada la noche, lo dieron todo — organizando stands, gestionando colectas, ayudando a los participantes y asegurándose de que todos se sintieran bienvenidos. ¡Sois el corazón de nuestro equipo!</p>
                                <p>Vuestro trabajo, tiempo y entusiasmo crean la verdadera magia de la Orquesta. <strong>¡Gracias!</strong></p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Voluntarios ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '💛 Gracias a nuestros patrocinadores y socios',
                        body: (
                            <div className="space-y-3">
                                <p>Un enorme agradecimiento a nuestros <strong>patrocinadores y socios</strong>, sin los cuales organizar el final sería imposible. Vuestro apoyo — económico, en especie o mediante servicios — hizo posible que ofreciéramos a los participantes experiencias excepcionales y recaudáramos aún más para los niños.</p>
                                <p>Formáis parte de esta misión tan especial — <strong>¡gracias!</strong></p>
                            </div>
                        ),
                    },
                    {
                        title: '🎉 Gracias a todos los participantes',
                        body: (
                            <div className="space-y-3">
                                <p>Gracias a todos los que vinieron al <strong>Espacio 88</strong> el 25 de enero de 2026. Vosotros creáis la atmósfera del Final — vuestras sonrisas, el entusiasmo en las subastas, las ganas de pasarlo bien y el emotivo momento de la &quot;Luz al cielo&quot; hacen que WOŚP tenga sentido.</p>
                                <p>Gracias por cada donación, cada artículo subastado y cada momento compartido por la salud de los niños polacos.</p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Evento ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '📸 Galería de fotos',
                        body: (
                            <div className="space-y-4">
                                <BlogPhotoGallery photos={final34GalleryPhotos} altPrefix="Foto del 34.º Final WOŚP Barcelona" />
                            </div>
                        ),
                    },
                    {
                        title: '💰 Total recaudado — ¡12.408 €!',
                        body: (
                            <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 md:p-8 border border-red-200 text-center shadow-sm">
                                <div className="text-5xl mb-3">🎉</div>
                                <h4 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-2">12.408 €</h4>
                                <p className="text-lg font-semibold text-gray-900 mb-2">
                                    ¡Esto es lo que recaudamos juntos durante el 34.º Final WOŚP en Barcelona!
                                </p>
                                <p className="text-gray-700 max-w-lg mx-auto">
                                    Gracias a vuestros corazones solidarios, donaciones a las huchas, subastas benéficas y aportaciones online, estos fondos apoyarán la compra de equipamiento moderno para el diagnóstico y tratamiento de enfermedades gastrointestinales en niños en Polonia.
                                </p>
                                <p className="text-sm font-semibold text-red-500 mt-4">¡Gracias por jugar con nosotros hasta el fin del mundo y un día más! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Gràcies! El 34è Final WOŚP a Barcelona ja és història ❤️',
                excerpt: 'Moltes gràcies a tots els participants, voluntaris, patrocinadors i donants! Junts durant el 34è Final a Barcelona hem recaptat 12.408 € per a les barriguetes sanes dels nostres nens!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-white shadow-xl text-center"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.92) 0%, rgba(239, 68, 68, 0.88) 50%, rgba(251, 146, 60, 0.85) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="text-6xl mb-4">❤️</div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-lg">Gràcies de tot cor!</h3>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                        El 34è Final WOŚP a Barcelona ja és història — i va ser un dia ple de calor, alegria i generositat. Gràcies a tothom qui va estar amb nosaltres en aquest dia tan especial!
                                    </p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: '🙌 Gràcies als nostres voluntaris',
                        body: (
                            <div className="space-y-3">
                                <p>Aquest final no hauria estat possible sense els nostres increïbles <strong>voluntaris</strong>. Des de primera hora del matí fins ben entrada la nit, ho van donar tot — organitzant parades, gestionant col·lectes, ajudant els participants i assegurant-se que tothom se sentís benvingut. Sou el cor del nostre equip!</p>
                                <p>La vostra feina, temps i entusiasme creen la veritable màgia de l&apos;Orquestra. <strong>Gràcies!</strong></p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Voluntaris ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '💛 Gràcies als nostres patrocinadors i socis',
                        body: (
                            <div className="space-y-3">
                                <p>Un enorme agraïment als nostres <strong>patrocinadors i socis</strong>, sense els quals organitzar el final seria impossible. El vostre suport — econòmic, en espècie o mitjançant serveis — va fer possible que oferíssim als participants experiències excepcionals i recaptéssim encara més per als nens.</p>
                                <p>Formeu part d&apos;aquesta missió tan especial — <strong>gràcies!</strong></p>
                            </div>
                        ),
                    },
                    {
                        title: '🎉 Gràcies a tots els participants',
                        body: (
                            <div className="space-y-3">
                                <p>Gràcies a tothom qui va venir a l&apos;<strong>Espacio 88</strong> el 25 de gener de 2026. Vosaltres creeu l&apos;atmosfera del Final — els vostres somriures, l&apos;entusiasme a les subhastes, les ganes de passar-ho bé i l&apos;emotiu moment de la &quot;Llum al cel&quot; fan que WOŚP tingui sentit.</p>
                                <p>Gràcies per cada donació, cada article subhastat i cada moment compartit per la salut dels nens polonesos.</p>
                                {(() => {
                                    const photos: string[] = [];
                                    return photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                            {photos.map((src, i) => (
                                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                                    <Image src={src} alt={`Esdeveniment ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        ),
                    },
                    {
                        title: '📸 Galeria de fotos',
                        body: (
                            <div className="space-y-4">
                                <BlogPhotoGallery photos={final34GalleryPhotos} altPrefix="Foto del 34è Final WOŚP Barcelona" />
                            </div>
                        ),
                    },
                    {
                        title: '💰 Total recaptat — 12.408 €!',
                        body: (
                            <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 md:p-8 border border-red-200 text-center shadow-sm">
                                <div className="text-5xl mb-3">🎉</div>
                                <h4 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-2">12.408 €</h4>
                                <p className="text-lg font-semibold text-gray-900 mb-2">
                                    Això és el que hem recaptat junts durant el 34è Final WOŚP a Barcelona!
                                </p>
                                <p className="text-gray-700 max-w-lg mx-auto">
                                    Gràcies als vostres cors solidaris, donacions a les guardioles, subhastes benèfiques i aportacions en línia, aquests fons donaran suport a la compra d&apos;equipament modern per al diagnòstic i tractament de malalties gastrointestinals en infants a Polònia.
                                </p>
                                <p className="text-sm font-semibold text-red-500 mt-4">Gràcies per jugar amb nosaltres fins a la fi del món i un dia més! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'zapraszamy-na-34-final-wosp-w-barcelonie',
        date: '2026-01-21',
        coverImage: '/images/34-final/ZDJECIE_W_TLE (1).jpg',
        tags: ['34FinałWOŚP', 'Barcelona', 'Espacio88', 'WOŚPBarcelona', 'Finał2026'],
        social: {
            facebook: 'https://www.facebook.com/events/722563890373111',
        },
        content: {
            pl: {
                title: 'Zapraszamy na 34. Finał WOŚP w Barcelonie – 25 stycznia 2026!',
                excerpt: 'Już 25 stycznia 2026 roku zapraszamy na 34. Finał WOŚP w Barcelonie! Dzień pełen warsztatów, koncertów, quizów, licytacji i dobrej zabawy. Gramy dla zdrowych brzuszków polskich dzieci!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-lg overflow-hidden p-4 md:p-6 shadow-lg"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.88) 0%, rgba(239, 68, 68, 0.85) 50%, rgba(251, 146, 60, 0.82) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)' }}>🎉 A MY, POLACY! – 34. Finał WOŚP w Barcelonie</h3>
                                    <ul className="list-disc pl-6 space-y-2" style={{ color: '#ffffff', textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Data:</strong> 25 stycznia 2026 (sobota)</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Godziny:</strong> 11:00 - 20:00</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Miejsce:</strong> Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Cel:</strong> Choroby przewodu pokarmowego u dzieci – "Zdrowe brzuszki naszych dzieci"</li>
                                    </ul>
                                </div>
                                <p>Serdecznie zapraszamy na 34. Finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie! To będzie wyjątkowy dzień pełen muzyki, warsztatów, licytacji, quizów i wspólnej zabawy. Razem zagramy dla zdrowych brzuszków polskich dzieci!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Co nas czeka?',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/PL-Ogolny-2026.png" alt="Plakat 34. Finału WOŚP w Barcelonie" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />

                                <div className="prose max-w-none">
                                    <h4 className="font-bold text-lg mb-3">🎨 Warsztaty dla dzieci</h4>
                                    <p>W Kosmo HisPLano (Carrer d'Àlaba 52) od 11:00 do 16:00 czekają na najmłodszych kreatywne warsztaty! Dzieci będą mogły wziąć udział w zajęciach plastycznych, grach edukacyjnych i zabawach integracyjnych. To doskonała okazja, by połączyć naukę z rozrywką!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🎭 Atrakcje w Espacio 88</h4>
                                    <p>W głównej lokalizacji (Espacio 88) przygotowaliśmy mnóstwo atrakcji:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Licytacje charytatywne</strong> – wyjątkowe przedmioty i doświadczenia czekają na nowych właścicieli! Wszystkie zebrane środki przeznaczone zostaną na cel tegorocznego Finału.</li>
                                        <li><strong>Quiz "Polacy vs Hiszpanie"</strong> – sprawdźcie swoją wiedzę w przyjaznej rywalizacji! Będzie zabawnie i edukacyjnie.</li>
                                        <li><strong>Panel literacki</strong> – spotkanie z polskimi autorami mieszkającymi w Barcelonie, połączone z licytacją książek z autografami.</li>
                                        <li><strong>WOŚP-oliada</strong> – tradycyjne już konkursy i zabawy, które rozgrzeją atmosferę!</li>
                                        <li><strong>Bingo Muzyczne</strong> – zaśpiewajcie razem z nami! Dwa sety muzycznego bingo, gdzie zamiast liczb gramy hity!</li>
                                        <li><strong>Tort urodzinowy</strong> – wspólnie świętujemy 34. urodziny WOŚP!</li>
                                    </ul>

                                    <h4 className="font-bold text-lg mb-3 mt-4">💫 Światełko do nieba</h4>
                                    <p>O 20:00 zakończymy dzień tradycyjnym Światełkiem do Nieba – magicznym momentem, gdy wszyscy razem zapalimy światła, by pokazać, że dobro zawsze wygrywa!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🍕 Jedzenie i napoje</h4>
                                    <p>Przez cały dzień dostępne będą przekąski, napoje i ciepłe posiłki. Zadbamy o to, żeby nikt nie był głodny!</p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Harmonogram dnia',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/PL-Harmonogram-2026.png" alt="Harmonogram 34. Finału WOŚP w Barcelonie" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-bold text-lg mb-3">📋 Program wydarzenia:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>11:00-16:00</strong> | Warsztaty dla dzieci (Kosmo HisPLano - Carrer d'Àlaba 52)</li>
                                        <li><strong>12:00</strong> | Otwarcie sali (Espacio 88)</li>
                                        <li><strong>12:30</strong> | Uroczyste rozpoczęcie</li>
                                        <li><strong>13:00</strong> | Licytacje</li>
                                        <li><strong>13:30</strong> | Quiz - Polacy vs Hiszpanie</li>
                                        <li><strong>14:00</strong> | Panel literacki z licytacją</li>
                                        <li><strong>15:00</strong> | WOŚP-oliada</li>
                                        <li><strong>15:45</strong> | Tort</li>
                                        <li><strong>16:00</strong> | Bingo Muzyczne</li>
                                        <li><strong>16:30</strong> | Licytacje</li>
                                        <li><strong>17:00</strong> | Quiz - Polacy vs Hiszpanie</li>
                                        <li><strong>18:00</strong> | Bingo Muzyczne</li>
                                        <li><strong>19:00</strong> | Licytacje</li>
                                        <li><strong>19:30</strong> | Uroczyste zakończenie</li>
                                        <li><strong>20:00</strong> | Światełko do nieba</li>
                                    </ul>
                                </div>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'Join us for the 34th WOŚP Finale in Barcelona – January 25, 2026!',
                excerpt: 'Join us on January 25, 2026 for the 34th WOŚP Finale in Barcelona! A day full of workshops, concerts, quizzes, auctions and fun. We play for healthy tummies of Polish children!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-lg overflow-hidden p-4 md:p-6 shadow-lg"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.88) 0%, rgba(239, 68, 68, 0.85) 50%, rgba(251, 146, 60, 0.82) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)' }}>🎉 AND WE, POLES! – 34th WOŚP Finale in Barcelona</h3>
                                    <ul className="list-disc pl-6 space-y-2" style={{ color: '#ffffff', textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Date:</strong> January 25, 2026 (Saturday)</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Time:</strong> 11:00 - 20:00</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Location:</strong> Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Goal:</strong> Digestive tract diseases in children – "Healthy tummies for our children"</li>
                                    </ul>
                                </div>
                                <p>We cordially invite you to the 34th Finale of the Great Orchestra of Christmas Charity in Barcelona! It will be a special day full of music, workshops, auctions, quizzes and fun together. Together we will play for healthy tummies of Polish children!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'What awaits us?',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/EN-Ogolny-2026.png" alt="Poster of the 34th WOŚP Finale in Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />

                                <div className="prose max-w-none">
                                    <h4 className="font-bold text-lg mb-3">🎨 Children's Workshops</h4>
                                    <p>At Kosmo HisPLano (Carrer d'Àlaba 52) from 11:00 to 16:00, creative workshops await the youngest! Children will be able to participate in art activities, educational games and integration activities. It's a perfect opportunity to combine learning with fun!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🎭 Attractions at Espacio 88</h4>
                                    <p>At the main location (Espacio 88) we have prepared plenty of attractions:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Charity auctions</strong> – unique items and experiences are waiting for new owners! All collected funds will be allocated to this year's Finale goal.</li>
                                        <li><strong>Quiz "Poles vs Spaniards"</strong> – test your knowledge in a friendly competition! It will be fun and educational.</li>
                                        <li><strong>Literary panel</strong> – meeting with Polish authors living in Barcelona, combined with an auction of autographed books.</li>
                                        <li><strong>WOŚP-oliada</strong> – traditional competitions and games that will heat up the atmosphere!</li>
                                        <li><strong>Music Bingo</strong> – sing along with us! Two sets of music bingo, where instead of numbers we play hits!</li>
                                        <li><strong>Birthday cake</strong> – together we celebrate WOŚP's 34th birthday!</li>
                                    </ul>

                                    <h4 className="font-bold text-lg mb-3 mt-4">💫 Light to the Sky</h4>
                                    <p>At 20:00 we will end the day with the traditional Light to the Sky – a magical moment when we all light up together to show that good always wins!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🍕 Food and Drinks</h4>
                                    <p>Throughout the day, snacks, drinks and hot meals will be available. We'll make sure no one goes hungry!</p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Schedule',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/EN-Harmonogram-2026.png" alt="Schedule of the 34th WOŚP Finale in Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-bold text-lg mb-3">📋 Event program:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>11:00-16:00</strong> | Children's workshops (Kosmo HisPLano - Carrer d'Àlaba 52)</li>
                                        <li><strong>12:00</strong> | Hall opening (Espacio 88)</li>
                                        <li><strong>12:30</strong> | Grand opening</li>
                                        <li><strong>13:00</strong> | Auctions</li>
                                        <li><strong>13:30</strong> | Quiz - Poles vs Spaniards</li>
                                        <li><strong>14:00</strong> | Literary panel with auction</li>
                                        <li><strong>15:00</strong> | WOŚP-oliada</li>
                                        <li><strong>15:45</strong> | Cake</li>
                                        <li><strong>16:00</strong> | Music Bingo</li>
                                        <li><strong>16:30</strong> | Auctions</li>
                                        <li><strong>17:00</strong> | Quiz - Poles vs Spaniards</li>
                                        <li><strong>18:00</strong> | Music Bingo</li>
                                        <li><strong>19:00</strong> | Auctions</li>
                                        <li><strong>19:30</strong> | Grand closing</li>
                                        <li><strong>20:00</strong> | Light to the Sky</li>
                                    </ul>
                                </div>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: '¡Te invitamos al 34º Final de WOŚP en Barcelona – 25 de enero de 2026!',
                excerpt: '¡El 25 de enero de 2026 te invitamos al 34º Final de WOŚP en Barcelona! Un día lleno de talleres, conciertos, quizzes, subastas y diversión. ¡Jugamos por las barrigas sanas de los niños polacos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-lg overflow-hidden p-4 md:p-6 shadow-lg"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.88) 0%, rgba(239, 68, 68, 0.85) 50%, rgba(251, 146, 60, 0.82) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)' }}>🎉 ¡Y NOSOTROS, POLACOS! – 34º Final de WOŚP en Barcelona</h3>
                                    <ul className="list-disc pl-6 space-y-2" style={{ color: '#ffffff', textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Fecha:</strong> 25 de enero de 2026 (sábado)</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Horario:</strong> 11:00 - 20:00</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Lugar:</strong> Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Objetivo:</strong> Enfermedades del tracto digestivo en niños – "Barrigas sanas para nuestros niños"</li>
                                    </ul>
                                </div>
                                <p>¡Te invitamos cordialmente al 34º Final de la Gran Orquesta de la Caridad Navideña en Barcelona! Será un día especial lleno de música, talleres, subastas, quizzes y diversión juntos. ¡Juntos jugaremos por las barrigas sanas de los niños polacos!</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Qué nos espera?',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/ES-Ogolny-2026.png" alt="Cartel del 34º Final de WOŚP en Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />

                                <div className="prose max-w-none">
                                    <h4 className="font-bold text-lg mb-3">🎨 Talleres para niños</h4>
                                    <p>En Kosmo HisPLano (Carrer d'Àlaba 52) de 11:00 a 16:00, ¡talleres creativos esperan a los más pequeños! Los niños podrán participar en actividades artísticas, juegos educativos y actividades de integración. ¡Es una oportunidad perfecta para combinar el aprendizaje con la diversión!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🎭 Atracciones en Espacio 88</h4>
                                    <p>En la ubicación principal (Espacio 88) hemos preparado muchas atracciones:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Subastas benéficas</strong> – ¡artículos y experiencias únicas esperan nuevos dueños! Todos los fondos recaudados se destinarán al objetivo del Final de este año.</li>
                                        <li><strong>Quiz "Polacos vs Españoles"</strong> – ¡pon a prueba tus conocimientos en una competencia amistosa! Será divertido y educativo.</li>
                                        <li><strong>Panel literario</strong> – encuentro con autores polacos que viven en Barcelona, combinado con una subasta de libros autografiados.</li>
                                        <li><strong>WOŚP-oliada</strong> – ¡competiciones y juegos tradicionales que calentarán el ambiente!</li>
                                        <li><strong>Bingo Musical</strong> – ¡canta con nosotros! Dos sets de bingo musical, donde en lugar de números jugamos con éxitos musicales.</li>
                                        <li><strong>Tarta de cumpleaños</strong> – ¡juntos celebramos el 34º cumpleaños de WOŚP!</li>
                                    </ul>

                                    <h4 className="font-bold text-lg mb-3 mt-4">💫 Luz al Cielo</h4>
                                    <p>A las 20:00 terminaremos el día con la tradicional Luz al Cielo – un momento mágico cuando todos encendemos las luces juntos para mostrar que el bien siempre gana.</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🍕 Comida y bebidas</h4>
                                    <p>Durante todo el día estarán disponibles aperitivos, bebidas y comidas calientes. ¡Nos aseguraremos de que nadie pase hambre!</p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Programa',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/ES-Harmonogram-2026.png" alt="Programa del 34º Final de WOŚP en Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-bold text-lg mb-3">📋 Programa del evento:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>11:00-16:00</strong> | Talleres para niños (Kosmo HisPLano - Carrer d'Àlaba 52)</li>
                                        <li><strong>12:00</strong> | Apertura de sala (Espacio 88)</li>
                                        <li><strong>12:30</strong> | Inauguración solemne</li>
                                        <li><strong>13:00</strong> | Subastas</li>
                                        <li><strong>13:30</strong> | Quiz - Polacos vs Españoles</li>
                                        <li><strong>14:00</strong> | Panel literario con subasta</li>
                                        <li><strong>15:00</strong> | WOŚP-oliada</li>
                                        <li><strong>15:45</strong> | Tarta</li>
                                        <li><strong>16:00</strong> | Bingo Musical</li>
                                        <li><strong>16:30</strong> | Subastas</li>
                                        <li><strong>17:00</strong> | Quiz - Polacos vs Españoles</li>
                                        <li><strong>18:00</strong> | Bingo Musical</li>
                                        <li><strong>19:00</strong> | Subastas</li>
                                        <li><strong>19:30</strong> | Cierre solemne</li>
                                        <li><strong>20:00</strong> | Luz al Cielo</li>
                                    </ul>
                                </div>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Us convidem al 34è Final de WOŚP a Barcelona – 25 de gener de 2026!',
                excerpt: 'El 25 de gener de 2026 us convidem al 34è Final de WOŚP a Barcelona! Un dia ple de tallers, concerts, quizzes, subhastes i diversió. Juguem per les panxes sanes dels nens polonesos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div
                                    className="relative rounded-lg overflow-hidden p-4 md:p-6 shadow-lg"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.88) 0%, rgba(239, 68, 68, 0.85) 50%, rgba(251, 146, 60, 0.82) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)' }}>🎉 I NOSALTRES, POLONESOS! – 34è Final de WOŚP a Barcelona</h3>
                                    <ul className="list-disc pl-6 space-y-2" style={{ color: '#ffffff', textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Data:</strong> 25 de gener de 2026 (dissabte)</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Horari:</strong> 11:00 - 20:00</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Lloc:</strong> Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona</li>
                                        <li style={{ color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Objectiu:</strong> Malalties del tracte digestiu en nens – "Panxes sanes per als nostres nens"</li>
                                    </ul>
                                </div>
                                <p>Us convidem cordialment al 34è Final de la Gran Orquestra de la Caritat Nadalenca a Barcelona! Serà un dia especial ple de música, tallers, subhastes, quizzes i diversió junts. Junts jugarem per les panxes sanes dels nens polonesos!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Què ens espera?',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/CAT-Ogolny-2026.png" alt="Cartell del 34è Final de WOŚP a Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />

                                <div className="prose max-w-none">
                                    <h4 className="font-bold text-lg mb-3">🎨 Tallers per a nens</h4>
                                    <p>A Kosmo HisPLano (Carrer d'Àlaba 52) d'11:00 a 16:00, tallers creatius esperen els més petits! Els nens podran participar en activitats artístiques, jocs educatius i activitats d'integració. És una oportunitat perfecta per combinar l'aprenentatge amb la diversió!</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🎭 Atraccions a Espacio 88</h4>
                                    <p>A la ubicació principal (Espacio 88) hem preparat moltes atraccions:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Subhastes benèfiques</strong> – articles i experiències úniques esperen nous propietaris! Tots els fons recaptats es destinaran a l'objectiu del Final d'aquest any.</li>
                                        <li><strong>Quiz "Polonesos vs Espanyols"</strong> – posa a prova els teus coneixements en una competència amistosa! Serà divertit i educatiu.</li>
                                        <li><strong>Panell literari</strong> – trobada amb autors polonesos que viuen a Barcelona, combinada amb una subhasta de llibres autografiats.</li>
                                        <li><strong>WOŚP-oliada</strong> – competicions i jocs tradicionals que escalfaran l'ambient!</li>
                                        <li><strong>Bingo Musical</strong> – canta amb nosaltres! Dos sets de bingo musical, on en lloc de números juguem amb èxits musicals.</li>
                                        <li><strong>Pastís d'aniversari</strong> – junts celebrem el 34è aniversari de WOŚP!</li>
                                    </ul>

                                    <h4 className="font-bold text-lg mb-3 mt-4">💫 Llum al Cel</h4>
                                    <p>A les 20:00 acabarem el dia amb el tradicional Llum al Cel – un moment màgic quan tots encendrem les llums junts per mostrar que el bé sempre guanya.</p>

                                    <h4 className="font-bold text-lg mb-3 mt-4">🍕 Menjar i begudes</h4>
                                    <p>Durant tot el dia estaran disponibles aperitius, begudes i menjars calents. Ens assegurarem que ningú passi gana!</p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Programa',
                        body: (
                            <div className="space-y-4">
                                <Image src="/images/plakaty/CAT-Harmonogram-2026.png" alt="Programa del 34è Final de WOŚP a Barcelona" width={1200} height={1600} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" priority={false} />
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-bold text-lg mb-3">📋 Programa de l'esdeveniment:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>11:00-16:00</strong> | Tallers per a nens (Kosmo HisPLano - Carrer d'Àlaba 52)</li>
                                        <li><strong>12:00</strong> | Obertura de sala (Espacio 88)</li>
                                        <li><strong>12:30</strong> | Inauguració solemne</li>
                                        <li><strong>13:00</strong> | Subhastes</li>
                                        <li><strong>13:30</strong> | Quiz - Polonesos vs Espanyols</li>
                                        <li><strong>14:00</strong> | Panell literari amb subhasta</li>
                                        <li><strong>15:00</strong> | WOŚP-oliada</li>
                                        <li><strong>15:45</strong> | Pastís</li>
                                        <li><strong>16:00</strong> | Bingo Musical</li>
                                        <li><strong>16:30</strong> | Subhastes</li>
                                        <li><strong>17:00</strong> | Quiz - Polonesos vs Espanyols</li>
                                        <li><strong>18:00</strong> | Bingo Musical</li>
                                        <li><strong>19:00</strong> | Subhastes</li>
                                        <li><strong>19:30</strong> | Tancament solemne</li>
                                        <li><strong>20:00</strong> | Llum al Cel</li>
                                    </ul>
                                </div>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'tak-wygladal-33-final-wosp-w-barcelonie',
        date: '2025-02-04',
        coverImage: '/images/blog/33-final/33-Final.png',
        tags: ['33FinałWOŚP', 'Barcelona', 'Licytacje', 'WOŚPBarcelona'],
        social: {
            facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
            instagram: 'https://www.instagram.com/wospbarcelona/',
        },
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/02/04/tak-wygladal-33-final-wosp-w-barcelonie/',
        content: {
            pl: {
                title: 'Tak wyglądał 33. Finał WOŚP w Barcelonie [Zdjęcia]',
                excerpt: '33. Finał WOŚP w Barcelonie pełen emocji! Zebrano 9516,91€, a aukcje Allegro nadal trwają. Muzyka, licytacje, pyszne jedzenie – zobacz relację i zdjęcia!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div className="rounded-lg bg-red-50 border border-red-100 p-4 md:p-6 text-gray-900">
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>33. Finał WOŚP w Barcelonie</strong> był niezwykle udanym wydarzeniem, pełnym muzyki, emocji i wspólnej chęci niesienia pomocy.</li>
                                        <li>Do tej pory udało się zebrać <strong>9516,91 euro</strong> ze sprzedaży produktów podczas finału, z wydarzeń towarzyszących oraz z zakończonych już licytacji, ale to jeszcze nie koniec.</li>
                                        <li>Wciąż trwają <a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">aukcje na Allegro</a>, które potrwają do <strong>10 lutego</strong>, a ich dotychczasowy wynik to już ponad <strong>3000 euro</strong>.</li>
                                        <li>Dziękujemy wszystkim za wsparcie i zapraszamy do dalszego udziału w licytacjach, aby jeszcze bardziej zwiększyć tę niesamowitą kwotę!</li>
                                    </ul>
                                </div>
                                <p>26 stycznia 2025 roku w Barcelonie odbył się 33. Finał Wielkiej Orkiestry Świątecznej Pomocy. W przestrzeni Nau Bostik, od rana do wieczora, tętniła pozytywna energia, muzyka i wspólna chęć pomocy. Był to dzień pełen emocji, niesamowitych atrakcji i niezapomnianych chwil, które z pewnością zostaną na długo w naszej pamięci.</p>
                                <Image src="/images/blog/33-final/DSCF7250.jpg" alt="Puszka WOŚP i hiszpański znak WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Puszka 33. Finału WOŚP i hiszpański znak WOŚP. Zdjęcia: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Rozpoczęcie Finału',
                        body: (
                            <div className="space-y-3">
                                <p>Już o godzinie 10:30 pierwsi uczestnicy zaczęli gromadzić się w Nau Bostik, gdzie czekała na nich moc atrakcji. Oficjalne otwarcie wydarzenia przywitało licznych wolontariuszy, sponsorów i wszystkich tych, którzy przybyli, by wesprzeć szczytny cel.</p>
                                <Image src="/images/blog/33-final/DSCF7186.jpg" alt="Marcin Bury na scenie w Nau Bostik" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Marcin Bury. Zdjęcia: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Muzyczne emocje na scenie',
                        body: (
                            <div className="space-y-3">
                                <p>Koncerty, które odbywały się w ciemnej sali, przyciągały tłumy. Na scenie pojawili się:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>ANULKA & DIRTY SPOONS (11:00) – energiczne brzmienia na początek dnia,</li>
                                    <li>MARCIN BURY (12:30) – nastrojowe dźwięki i akustyczne brzmienia,</li>
                                    <li>GUIMERA BLUES & THE SUGAR BOYS (14:00) – bluesowe rytmy wprowadziły uczestników w znakomity nastrój,</li>
                                    <li>JUSTYNA & JAIME (16:30) – duet zachwycił swoimi interpretacjami znanych utworów,</li>
                                    <li>EYE OF THE STORM (18:15) – rockowe brzmienia zakończyły muzyczną część wydarzenia z ogromnym entuzjazmem publiczności.</li>
                                </ul>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Scena i publiczność podczas koncertów WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                            </div>
                        ),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7189.jpg" alt="Licytacja obrazu Darii Stróżyk" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Licytacja obrazu Darii Stróżyk. Krzysztof Monastyrski po lewej. Aneta Grabowska po prawej. Wolontariuszka Dominika w środku. Zdjęcia Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Licytacje i wielkie emocje',
                        body: (<p>Podczas Finału odbyły się cztery sesje licytacji, które cieszyły się ogromnym zainteresowaniem. Na aukcjach można było zdobyć m.in. unikalne dzieła sztuki, gadżety WOŚP, vouchery na usługi oraz pamiątki z autografami znanych osobistości. Największe emocje wzbudziła licytacja złotego serduszka Jakuba Rajchelta, które zostało wylicytowane za rekordową sumę! Równie ekscytująca była licytacja książki oraz jednocześnie prowadzącego licytację Krzysztofa Monastyrskiego, która dostarczyła mnóstwo emocji i wywołała zaciekłą walkę o najwyższą ofertę!</p>),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7368.jpg" alt="Animacje dla dzieci MiniPL" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Animacje dla dzieci MiniPL. Zdjęcia: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Atrakcje dla każdego',
                        body: (
                            <div className="space-y-3">
                                <p>W jasnej sali można było podziwiać wystawę sztuki, z której dzieła trafiły na licytację. Nie zabrakło również strefy kulinarnej, gdzie można było spróbować domowych pierogów, grillowanej kiełbasy, pajdy ze smalcem oraz pysznych polskich ciast. W tym roku pierogi się nie skończyły i dzięki ciężkiej pracy naszych wolontariuszy jedzenia było do samego końca!</p>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Stoisko Delicious by Bea" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Stoisko Delicious by Bea. Zdjęcia: Hela Staniszewska</div>
                                <p>Dodatkowo, nasza wspaniała sponsorka <strong>Delicious by Bea</strong> wyprzedała wszystkie swoje wypieki! Jesteśmy ogromnie wdzięczni za jej wsparcie oraz za wkład wszystkich sponsorów, dzięki którym to wydarzenie mogło się odbyć.</p>
                                <p>Dla najmłodszych przygotowano malowanie twarzy, robienie tatuaży z logiem WOŚP, a nawet robienie bransoletek i bardzo się cieszymy jak stoisko naszych wolontariuszek cieszyło się ogromnym zainteresowaniem!</p>
                                <Image src="/images/blog/33-final/DSCF7205.jpg" alt="Wolontariusze Marcin, Mateusz, Patrycja" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Wolontariusze Marcin, Mateusz, Patrycja. Zdjęcia: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Klimatyczny bar i polskie smaki',
                        body: (<p>W strefie barowej można było spróbować polskich piw kraftowych, grzańca, win oraz soków. Dostępne były również kolekcjonerskie kubki WOŚP, które wielu uczestników zabrało na pamiątkę.</p>),
                    },
                    {
                        title: 'Światełko do nieba',
                        body: (<p>Kulminacyjnym momentem wydarzenia było tradycyjne <strong>Światełko do nieba</strong> o godzinie 19:30. Setki uczestników zgromadziło się, by wspólnie wysłać w niebo symboliczne światełka, które rozświetliły barcelońskie niebo. Był to moment pełen wzruszenia i radości.</p>),
                    },
                    {
                        body: (<p>Finał zakończył się o godzinie 20:00, ale emocje i pozytywna energia pozostały na długo. Cały dochód z wydarzenia został przeznaczony na wsparcie <strong>onkologii i hematologii dziecięcej</strong>.</p>),
                    },
                    {
                        title: 'Zebrana kwota',
                        body: (<p>Do tej pory, podczas 33. Finału WOŚP w Barcelonie oraz wydarzeń towarzyszących i licytacji, udało się zebrać <strong>9516,91 euro</strong>, ale to jeszcze nie koniec! Nadal trwają licytacje na Allegro, które potrwają do <strong>10 lutego</strong>. Już teraz, dzięki aukcjom internetowym, zebrano ponad <strong>3000 euro</strong>, a kwota wciąż rośnie!</p>),
                    },
                    {
                        title: 'Aukcje Allegro',
                        body: (
                            <div className="space-y-3">
                                <p>Na licytacjach można znaleźć wiele ciekawych przedmiotów, takich jak <strong>gadżety WOŚP</strong>, kurs językowy, sesja zdjęciowa, a nawet wycieczka do Montserrat i po Barcelonie.</p>
                            </div>
                        ),
                    },
                    {
                        body: (<><p>Dziękujemy wszystkim uczestnikom, wolontariuszom, artystom oraz sponsorom, którzy wsparli to wspaniałe wydarzenie. Razem pokazaliśmy, że siła dobra nie zna granic!</p><p>Do zobaczenia za rok na 34. Finale WOŚP w Barcelonie! ❤️</p></>),
                    },
                ],
            },
            en: {
                title: 'This is how the 33rd WOŚP Finale in Barcelona looked [Photos]',
                excerpt: 'The 33rd WOŚP Finale in Barcelona was full of emotions! €9,516.91 was raised, and Allegro auctions are still ongoing. Music, auctions, delicious food – see the report and photos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div className="rounded-lg bg-red-50 border border-red-100 p-4 md:p-6 text-gray-900">
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>The 33rd WOŚP Finale in Barcelona</strong> was an extremely successful event, full of music, emotions and a shared desire to help.</li>
                                        <li>So far, <strong>€9,516.91</strong> has been raised from product sales during the finale, accompanying events and completed auctions, but it's not over yet.</li>
                                        <li><a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">Allegro auctions</a> are still ongoing until <strong>February 10</strong>, and their current result is already over <strong>€3,000</strong>.</li>
                                        <li>Thank you all for your support and we invite you to continue participating in the auctions to increase this amazing amount even more!</li>
                                    </ul>
                                </div>
                                <p>On January 26, 2025, the 33rd Finale of the Great Orchestra of Christmas Charity took place in Barcelona. At Nau Bostik, from morning to evening, positive energy, music and a shared desire to help pulsated. It was a day full of emotions, amazing attractions and unforgettable moments that will certainly stay in our memory for a long time.</p>
                                <Image src="/images/blog/33-final/DSCF7250.jpg" alt="WOŚP collection box and Spanish WOŚP sign" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">33rd WOŚP Finale collection box and Spanish WOŚP sign. Photos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Start of the Finale',
                        body: (
                            <div className="space-y-3">
                                <p>Already at 10:30, the first participants began gathering at Nau Bostik, where a host of attractions awaited them. The official opening of the event welcomed numerous volunteers, sponsors and all those who came to support the noble cause.</p>
                                <Image src="/images/blog/33-final/DSCF7186.jpg" alt="Marcin Bury on stage at Nau Bostik" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Marcin Bury. Photos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Musical emotions on stage',
                        body: (
                            <div className="space-y-3">
                                <p>The concerts held in the dark hall attracted crowds. On stage appeared:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>ANULKA & DIRTY SPOONS (11:00) – energetic sounds to start the day,</li>
                                    <li>MARCIN BURY (12:30) – atmospheric sounds and acoustic vibes,</li>
                                    <li>GUIMERA BLUES & THE SUGAR BOYS (14:00) – blues rhythms put participants in a great mood,</li>
                                    <li>JUSTYNA & JAIME (16:30) – the duo delighted with their interpretations of well-known songs,</li>
                                    <li>EYE OF THE STORM (18:15) – rock sounds ended the musical part of the event with great enthusiasm from the audience.</li>
                                </ul>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Stage and audience during WOŚP concerts" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                            </div>
                        ),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7189.jpg" alt="Auction of Daria Stróżyk's painting" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Auction of Daria Stróżyk's painting. Krzysztof Monastyrski on the left. Aneta Grabowska on the right. Volunteer Dominika in the middle. Photos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Auctions and great emotions',
                        body: (<p>During the Finale, four auction sessions took place, which enjoyed great interest. At the auctions, you could win unique works of art, WOŚP gadgets, service vouchers and souvenirs with autographs of famous personalities. The auction of Jakub Rajchelt's golden heart, which was auctioned for a record sum, aroused the greatest emotions! Equally exciting was the auction of the book and simultaneously the auction host Krzysztof Monastyrski, which provided a lot of emotions and sparked a fierce battle for the highest bid!</p>),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7368.jpg" alt="MiniPL children's animations" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">MiniPL children's animations. Photos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Attractions for everyone',
                        body: (
                            <div className="space-y-3">
                                <p>In the bright hall, you could admire an art exhibition, from which works went to auction. There was also a culinary zone where you could try homemade pierogi, grilled sausage, bread with lard and delicious Polish cakes. This year the pierogi didn't run out and thanks to the hard work of our volunteers, there was food until the very end!</p>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Delicious by Bea stand" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Delicious by Bea stand. Photos: Hela Staniszewska</div>
                                <p>Additionally, our wonderful sponsor <strong>Delicious by Bea</strong> sold out all her baked goods! We are extremely grateful for her support and for the contribution of all sponsors, thanks to whom this event could take place.</p>
                                <p>For the youngest, face painting, WOŚP logo tattoos, and even bracelet making were prepared, and we are very happy that our volunteers' stand enjoyed great interest!</p>
                                <Image src="/images/blog/33-final/DSCF7205.jpg" alt="Volunteers Marcin, Mateusz, Patrycja" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Volunteers Marcin, Mateusz, Patrycja. Photos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Atmospheric bar and Polish flavors',
                        body: (<p>In the bar area, you could try Polish craft beers, mulled wine, wines and juices. Collector's WOŚP mugs were also available, which many participants took as souvenirs.</p>),
                    },
                    {
                        title: 'Light to the sky',
                        body: (<p>The culminating moment of the event was the traditional <strong>Light to the Sky</strong> at 7:30 PM. Hundreds of participants gathered to send symbolic lights into the sky together, which illuminated the Barcelona sky. It was a moment full of emotion and joy.</p>),
                    },
                    {
                        body: (<p>The Finale ended at 8:00 PM, but the emotions and positive energy remained for a long time. All proceeds from the event were donated to support <strong>pediatric oncology and hematology</strong>.</p>),
                    },
                    {
                        title: 'Amount raised',
                        body: (<p>So far, during the 33rd WOŚP Finale in Barcelona and accompanying events and auctions, <strong>€9,516.91</strong> has been raised, but it's not over yet! Allegro auctions are still ongoing until <strong>February 10</strong>. Already, thanks to online auctions, over <strong>€3,000</strong> has been raised, and the amount keeps growing!</p>),
                    },
                    {
                        title: 'Allegro Auctions',
                        body: (
                            <div className="space-y-3">
                                <p>At the auctions, you can find many interesting items, such as <strong>WOŚP gadgets</strong>, language courses, photo sessions, and even a trip to Montserrat and around Barcelona.</p>
                            </div>
                        ),
                    },
                    {
                        body: (<><p>Thank you to all participants, volunteers, artists and sponsors who supported this wonderful event. Together we showed that the power of good knows no borders!</p><p>See you next year at the 34th WOŚP Finale in Barcelona! ❤️</p></>),
                    },
                ],
            },
            es: {
                title: 'Así fue la 33ª Final de WOŚP en Barcelona [Fotos]',
                excerpt: '¡La 33ª Final de WOŚP en Barcelona llena de emociones! Se recaudaron 9.516,91€ y las subastas de Allegro continúan. Música, subastas, comida deliciosa – ¡mira el reportaje y las fotos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div className="rounded-lg bg-red-50 border border-red-100 p-4 md:p-6 text-gray-900">
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>La 33ª Final de WOŚP en Barcelona</strong> fue un evento extremadamente exitoso, lleno de música, emociones y un deseo compartido de ayudar.</li>
                                        <li>Hasta ahora se han recaudado <strong>9.516,91 euros</strong> de la venta de productos durante la final, eventos acompañantes y subastas completadas, pero esto aún no ha terminado.</li>
                                        <li>Las <a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">subastas en Allegro</a> continúan hasta el <strong>10 de febrero</strong>, y su resultado actual ya supera los <strong>3.000 euros</strong>.</li>
                                        <li>¡Gracias a todos por su apoyo y les invitamos a seguir participando en las subastas para aumentar aún más esta increíble cantidad!</li>
                                    </ul>
                                </div>
                                <p>El 26 de enero de 2025 se celebró en Barcelona la 33ª Final de la Gran Orquesta de la Caridad Navideña. En Nau Bostik, desde la mañana hasta la noche, palpitaba energía positiva, música y un deseo compartido de ayudar. Fue un día lleno de emociones, atracciones increíbles y momentos inolvidables que sin duda permanecerán en nuestra memoria durante mucho tiempo.</p>
                                <Image src="/images/blog/33-final/DSCF7250.jpg" alt="Hucha WOŚP y cartel español de WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Hucha de la 33ª Final de WOŚP y cartel español de WOŚP. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Inicio de la Final',
                        body: (
                            <div className="space-y-3">
                                <p>Ya a las 10:30, los primeros participantes comenzaron a reunirse en Nau Bostik, donde les esperaba una gran cantidad de atracciones. La apertura oficial del evento dio la bienvenida a numerosos voluntarios, patrocinadores y todos aquellos que vinieron a apoyar la noble causa.</p>
                                <Image src="/images/blog/33-final/DSCF7186.jpg" alt="Marcin Bury en el escenario de Nau Bostik" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Marcin Bury. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Emociones musicales en el escenario',
                        body: (
                            <div className="space-y-3">
                                <p>Los conciertos celebrados en la sala oscura atrajeron multitudes. En el escenario aparecieron:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>ANULKA & DIRTY SPOONS (11:00) – sonidos energéticos para empezar el día,</li>
                                    <li>MARCIN BURY (12:30) – sonidos atmosféricos y vibraciones acústicas,</li>
                                    <li>GUIMERA BLUES & THE SUGAR BOYS (14:00) – ritmos de blues que pusieron a los participantes de muy buen humor,</li>
                                    <li>JUSTYNA & JAIME (16:30) – el dúo deleitó con sus interpretaciones de canciones conocidas,</li>
                                    <li>EYE OF THE STORM (18:15) – sonidos de rock cerraron la parte musical del evento con gran entusiasmo del público.</li>
                                </ul>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Escenario y público durante los conciertos de WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                            </div>
                        ),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7189.jpg" alt="Subasta del cuadro de Daria Stróżyk" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Subasta del cuadro de Daria Stróżyk. Krzysztof Monastyrski a la izquierda. Aneta Grabowska a la derecha. Voluntaria Dominika en el centro. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Subastas y grandes emociones',
                        body: (<p>Durante la Final se celebraron cuatro sesiones de subastas que gozaron de gran interés. En las subastas se podían conseguir obras de arte únicas, artículos de WOŚP, vales de servicios y recuerdos con autógrafos de personalidades famosas. ¡La subasta del corazón dorado de Jakub Rajchelt, que se subastó por una suma récord, despertó las mayores emociones! Igualmente emocionante fue la subasta del libro y simultáneamente del presentador de la subasta Krzysztof Monastyrski, que proporcionó muchas emociones y provocó una feroz batalla por la oferta más alta.</p>),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7368.jpg" alt="Animaciones infantiles MiniPL" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Animaciones infantiles MiniPL. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Atracciones para todos',
                        body: (
                            <div className="space-y-3">
                                <p>En la sala luminosa se podía admirar una exposición de arte, cuyas obras fueron a subasta. También había una zona culinaria donde se podían probar pierogi caseros, salchichas a la parrilla, pan con manteca y deliciosos pasteles polacos. ¡Este año los pierogi no se acabaron y gracias al duro trabajo de nuestros voluntarios, hubo comida hasta el final!</p>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Stand de Delicious by Bea" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Stand de Delicious by Bea. Fotos: Hela Staniszewska</div>
                                <p>Además, nuestra maravillosa patrocinadora <strong>Delicious by Bea</strong> vendió todos sus productos horneados. Estamos muy agradecidos por su apoyo y por la contribución de todos los patrocinadores, gracias a los cuales este evento pudo realizarse.</p>
                                <p>Para los más pequeños se preparó pintura facial, tatuajes con el logo de WOŚP e incluso fabricación de pulseras, ¡y estamos muy contentos de que el stand de nuestras voluntarias disfrutara de gran interés!</p>
                                <Image src="/images/blog/33-final/DSCF7205.jpg" alt="Voluntarios Marcin, Mateusz, Patrycja" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Voluntarios Marcin, Mateusz, Patrycja. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Bar atmosférico y sabores polacos',
                        body: (<p>En la zona del bar se podían probar cervezas artesanales polacas, vino caliente, vinos y zumos. También había tazas coleccionables de WOŚP disponibles, que muchos participantes se llevaron como recuerdo.</p>),
                    },
                    {
                        title: 'Luz al cielo',
                        body: (<p>El momento culminante del evento fue la tradicional <strong>Luz al Cielo</strong> a las 19:30. Cientos de participantes se reunieron para enviar juntos luces simbólicas al cielo, que iluminaron el cielo de Barcelona. Fue un momento lleno de emoción y alegría.</p>),
                    },
                    {
                        body: (<p>La Final terminó a las 20:00, pero las emociones y la energía positiva permanecieron durante mucho tiempo. Todos los ingresos del evento se destinaron a apoyar la <strong>oncología y hematología pediátrica</strong>.</p>),
                    },
                    {
                        title: 'Cantidad recaudada',
                        body: (<p>Hasta ahora, durante la 33ª Final de WOŚP en Barcelona y los eventos y subastas acompañantes, se han recaudado <strong>9.516,91 euros</strong>, ¡pero esto aún no ha terminado! Las subastas de Allegro continúan hasta el <strong>10 de febrero</strong>. Ya, gracias a las subastas online, se han recaudado más de <strong>3.000 euros</strong>, ¡y la cantidad sigue creciendo!</p>),
                    },
                    {
                        title: 'Subastas Allegro',
                        body: (
                            <div className="space-y-3">
                                <p>En las subastas puedes encontrar muchos artículos interesantes, como <strong>artículos de WOŚP</strong>, cursos de idiomas, sesiones de fotos e incluso un viaje a Montserrat y por Barcelona.</p>
                            </div>
                        ),
                    },
                    {
                        body: (<><p>Gracias a todos los participantes, voluntarios, artistas y patrocinadores que apoyaron este maravilloso evento. ¡Juntos demostramos que el poder del bien no conoce fronteras!</p><p>¡Nos vemos el próximo año en la 34ª Final de WOŚP en Barcelona! ❤️</p></>),
                    },
                ],
            },
            ca: {
                title: 'Així va ser la 33a Final de WOŚP a Barcelona [Fotos]',
                excerpt: 'La 33a Final de WOŚP a Barcelona plena d\'emocions! Es van recaptar 9.516,91€ i les subhastes d\'Allegro continuen. Música, subhastes, menjar deliciós – mira el reportatge i les fotos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-4">
                                <div className="rounded-lg bg-red-50 border border-red-100 p-4 md:p-6 text-gray-900">
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>La 33a Final de WOŚP a Barcelona</strong> va ser un esdeveniment extremadament reeixit, ple de música, emocions i un desig compartit d'ajudar.</li>
                                        <li>Fins ara s'han recaptat <strong>9.516,91 euros</strong> de la venda de productes durant la final, esdeveniments acompanyants i subhastes completades, però això encara no ha acabat.</li>
                                        <li>Les <a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">subhastes a Allegro</a> continuen fins al <strong>10 de febrer</strong>, i el seu resultat actual ja supera els <strong>3.000 euros</strong>.</li>
                                        <li>Gràcies a tots pel vostre suport i us convidem a continuar participant a les subhastes per augmentar encara més aquesta quantitat increïble!</li>
                                    </ul>
                                </div>
                                <p>El 26 de gener de 2025 es va celebrar a Barcelona la 33a Final de la Gran Orquestra de la Caritat Nadalenca. A Nau Bostik, des del matí fins a la nit, palpitava energia positiva, música i un desig compartit d'ajudar. Va ser un dia ple d'emocions, atraccions increïbles i moments inoblidables que sens dubte romandran a la nostra memòria durant molt de temps.</p>
                                <Image src="/images/blog/33-final/DSCF7250.jpg" alt="Guardiola WOŚP i cartell espanyol de WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Guardiola de la 33a Final de WOŚP i cartell espanyol de WOŚP. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Inici de la Final',
                        body: (
                            <div className="space-y-3">
                                <p>Ja a les 10:30, els primers participants van començar a reunir-se a Nau Bostik, on els esperava una gran quantitat d'atraccions. L'obertura oficial de l'esdeveniment va donar la benvinguda a nombrosos voluntaris, patrocinadors i tots aquells que van venir a donar suport a la noble causa.</p>
                                <Image src="/images/blog/33-final/DSCF7186.jpg" alt="Marcin Bury a l'escenari de Nau Bostik" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Marcin Bury. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Emocions musicals a l\'escenari',
                        body: (
                            <div className="space-y-3">
                                <p>Els concerts celebrats a la sala fosca van atreure multituds. A l'escenari van aparèixer:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>ANULKA & DIRTY SPOONS (11:00) – sons energètics per començar el dia,</li>
                                    <li>MARCIN BURY (12:30) – sons atmosfèrics i vibracions acústiques,</li>
                                    <li>GUIMERA BLUES & THE SUGAR BOYS (14:00) – ritmes de blues que van posar els participants de molt bon humor,</li>
                                    <li>JUSTYNA & JAIME (16:30) – el duo va delectar amb les seves interpretacions de cançons conegudes,</li>
                                    <li>EYE OF THE STORM (18:15) – sons de rock van tancar la part musical de l'esdeveniment amb gran entusiasme del públic.</li>
                                </ul>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Escenari i públic durant els concerts de WOŚP" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                            </div>
                        ),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7189.jpg" alt="Subhasta del quadre de Daria Stróżyk" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Subhasta del quadre de Daria Stróżyk. Krzysztof Monastyrski a l'esquerra. Aneta Grabowska a la dreta. Voluntària Dominika al centre. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Subhastes i grans emocions',
                        body: (<p>Durant la Final es van celebrar quatre sessions de subhastes que van gaudir de gran interès. A les subhastes es podien aconseguir obres d'art úniques, articles de WOŚP, vals de serveis i records amb autògrafs de personalitats famoses. La subhasta del cor daurat de Jakub Rajchelt, que es va subhastar per una suma rècord, va despertar les majors emocions! Igualment emocionant va ser la subhasta del llibre i simultàniament del presentador de la subhasta Krzysztof Monastyrski, que va proporcionar moltes emocions i va provocar una ferotge batalla per l'oferta més alta.</p>),
                    },
                    {
                        body: (
                            <div className="space-y-2">
                                <Image src="/images/blog/33-final/DSCF7368.jpg" alt="Animacions infantils MiniPL" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Animacions infantils MiniPL. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Atraccions per a tothom',
                        body: (
                            <div className="space-y-3">
                                <p>A la sala lluminosa es podia admirar una exposició d'art, les obres de la qual van anar a subhasta. També hi havia una zona culinària on es podien provar pierogi casolans, salsitxes a la graella, pa amb llard i deliciosos pastissos polonesos. Aquest any els pierogi no es van acabar i gràcies al dur treball dels nostres voluntaris, hi va haver menjar fins al final!</p>
                                <Image src="/images/blog/33-final/DSCF7339.jpg" alt="Stand de Delicious by Bea" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Stand de Delicious by Bea. Fotos: Hela Staniszewska</div>
                                <p>A més, la nostra meravellosa patrocinadora <strong>Delicious by Bea</strong> va vendre tots els seus productes de forn. Estem molt agraïts pel seu suport i per la contribució de tots els patrocinadors, gràcies als quals aquest esdeveniment va poder realitzar-se.</p>
                                <p>Per als més petits es va preparar pintura facial, tatuatges amb el logo de WOŚP i fins i tot fabricació de polseres, i estem molt contents que l'stand de les nostres voluntàries gaudís de gran interès!</p>
                                <Image src="/images/blog/33-final/DSCF7205.jpg" alt="Voluntaris Marcin, Mateusz, Patrycja" width={1600} height={1067} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto" priority={false} />
                                <div className="text-xs text-gray-500">Voluntaris Marcin, Mateusz, Patrycja. Fotos: Hela Staniszewska</div>
                            </div>
                        ),
                    },
                    {
                        title: 'Bar atmosfèric i sabors polonesos',
                        body: (<p>A la zona del bar es podien provar cerveses artesanals poloneses, vi calent, vins i sucs. També hi havia tasses col·leccionables de WOŚP disponibles, que molts participants es van emportar com a record.</p>),
                    },
                    {
                        title: 'Llum al cel',
                        body: (<p>El moment culminant de l'esdeveniment va ser la tradicional <strong>Llum al Cel</strong> a les 19:30. Centenars de participants es van reunir per enviar junts llums simbòliques al cel, que van il·luminar el cel de Barcelona. Va ser un moment ple d'emoció i alegria.</p>),
                    },
                    {
                        body: (<p>La Final va acabar a les 20:00, però les emocions i l'energia positiva van romandre durant molt de temps. Tots els ingressos de l'esdeveniment es van destinar a donar suport a l'<strong>oncologia i hematologia pediàtrica</strong>.</p>),
                    },
                    {
                        title: 'Quantitat recaptada',
                        body: (<p>Fins ara, durant la 33a Final de WOŚP a Barcelona i els esdeveniments i subhastes acompanyants, s'han recaptat <strong>9.516,91 euros</strong>, però això encara no ha acabat! Les subhastes d'Allegro continuen fins al <strong>10 de febrer</strong>. Ja, gràcies a les subhastes online, s'han recaptat més de <strong>3.000 euros</strong>, i la quantitat segueix creixent!</p>),
                    },
                    {
                        title: 'Subhastes Allegro',
                        body: (
                            <div className="space-y-3">
                                <p>A les subhastes pots trobar molts articles interessants, com <strong>articles de WOŚP</strong>, cursos d'idiomes, sessions de fotos i fins i tot un viatge a Montserrat i per Barcelona.</p>
                            </div>
                        ),
                    },
                    {
                        body: (<><p>Gràcies a tots els participants, voluntaris, artistes i patrocinadors que van donar suport a aquest meravellós esdeveniment. Junts vam demostrar que el poder del bé no coneix fronteres!</p><p>Ens veiem l'any que ve a la 34a Final de WOŚP a Barcelona! ❤️</p></>),
                    },
                ],
            },
        },
    },
    {
        slug: '33-final-wosp-w-barcelonie-muzyka-licytacje-i-pomoc',
        date: '2025-01-26',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/26/33-final-wosp-w-barcelonie-muzyka-licytacje-i-pomoc-w-jednym-miejscu/',
        content: {
            pl: {
                title: '33. Finał WOŚP w Barcelonie – Muzyka, Licytacje i Pomoc w Jednym Miejscu!',
                sections: [
                    { title: 'Co dla Was przygotowaliśmy?', body: (<><p>Pierwsza, jasna sala:</p><ul className="list-disc pl-6 space-y-1"><li>Wystawa sztuki na licytację</li><li>Kulinaria: domowe ciasta, pierogi, grill, sałatki, kawa</li><li>Loteria – każdy los wygrywa</li><li>Malowanie twarzy</li></ul><p>Druga, ciemna sala:</p><ul className="list-disc pl-6 space-y-1"><li>Koncerty i licytacje</li><li>Bar: polskie piwa kraftowe, wina, grzaniec i inne</li></ul></>) },
                    { title: 'Informacje o płatnościach', body: (<ul className="list-disc pl-6 space-y-1"><li>Kupony płatne kartą lub gotówką do puszki</li><li>Stoisko Delicious by Bea: płatność u sprzedawcy</li><li>Bar: część asortymentu tylko za gotówkę, reszta za kupony</li><li>Kubki: darmowy, kolekcjonerski Wawel/Sol De Gracia (kaucja 1 €), kolekcjonerski WOŚP Barcelona (2 €)</li></ul>) },
                    { title: 'Licytacje', body: (<p>Na aukcjach do zdobycia m.in. unikatowe dzieła sztuki, vouchery i rękodzieło. Szczegóły: „Licytacje podczas 33. Finału WOŚP w Barcelonie".</p>) },
                ],
            },
            en: {
                title: '33rd WOŚP Finale in Barcelona – Music, Auctions and Help in One Place!',
                sections: [
                    { title: 'What have we prepared for you?', body: (<><p>First, bright hall:</p><ul className="list-disc pl-6 space-y-1"><li>Art exhibition for auction</li><li>Culinary: homemade cakes, pierogi, grill, salads, coffee</li><li>Lottery – every ticket wins</li><li>Face painting</li></ul><p>Second, dark hall:</p><ul className="list-disc pl-6 space-y-1"><li>Concerts and auctions</li><li>Bar: Polish craft beers, wines, mulled wine and more</li></ul></>) },
                    { title: 'Payment information', body: (<ul className="list-disc pl-6 space-y-1"><li>Coupons payable by card or cash to the collection box</li><li>Delicious by Bea stand: payment at the seller</li><li>Bar: some items cash only, rest for coupons</li><li>Mugs: free, collector's Wawel/Sol De Gracia (€1 deposit), collector's WOŚP Barcelona (€2)</li></ul>) },
                    { title: 'Auctions', body: (<p>At the auctions you can win unique works of art, vouchers and handicrafts. Details: "Auctions during the 33rd WOŚP Finale in Barcelona".</p>) },
                ],
            },
            es: {
                title: '33ª Final de WOŚP en Barcelona – ¡Música, Subastas y Ayuda en Un Solo Lugar!',
                sections: [
                    { title: '¿Qué hemos preparado para vosotros?', body: (<><p>Primera sala, luminosa:</p><ul className="list-disc pl-6 space-y-1"><li>Exposición de arte para subasta</li><li>Culinaria: pasteles caseros, pierogi, parrilla, ensaladas, café</li><li>Lotería – cada boleto gana</li><li>Pintura facial</li></ul><p>Segunda sala, oscura:</p><ul className="list-disc pl-6 space-y-1"><li>Conciertos y subastas</li><li>Bar: cervezas artesanales polacas, vinos, vino caliente y más</li></ul></>) },
                    { title: 'Información de pago', body: (<ul className="list-disc pl-6 space-y-1"><li>Cupones pagables con tarjeta o efectivo a la hucha</li><li>Stand Delicious by Bea: pago al vendedor</li><li>Bar: algunos artículos solo en efectivo, el resto con cupones</li><li>Tazas: gratis, coleccionable Wawel/Sol De Gracia (depósito 1€), coleccionable WOŚP Barcelona (2€)</li></ul>) },
                    { title: 'Subastas', body: (<p>En las subastas puedes ganar obras de arte únicas, vales y artesanías. Detalles: "Subastas durante la 33ª Final de WOŚP en Barcelona".</p>) },
                ],
            },
            ca: {
                title: '33a Final de WOŚP a Barcelona – Música, Subhastes i Ajuda en Un Sol Lloc!',
                sections: [
                    { title: 'Què hem preparat per a vosaltres?', body: (<><p>Primera sala, lluminosa:</p><ul className="list-disc pl-6 space-y-1"><li>Exposició d'art per a subhasta</li><li>Culinària: pastissos casolans, pierogi, graella, amanides, cafè</li><li>Loteria – cada bitllet guanya</li><li>Pintura facial</li></ul><p>Segona sala, fosca:</p><ul className="list-disc pl-6 space-y-1"><li>Concerts i subhastes</li><li>Bar: cerveses artesanals poloneses, vins, vi calent i més</li></ul></>) },
                    { title: 'Informació de pagament', body: (<ul className="list-disc pl-6 space-y-1"><li>Cupons pagables amb targeta o efectiu a la guardiola</li><li>Stand Delicious by Bea: pagament al venedor</li><li>Bar: alguns articles només en efectiu, la resta amb cupons</li><li>Tasses: gratis, col·leccionable Wawel/Sol De Gracia (dipòsit 1€), col·leccionable WOŚP Barcelona (2€)</li></ul>) },
                    { title: 'Subhastes', body: (<p>A les subhastes pots guanyar obres d'art úniques, vals i artesanies. Detalls: "Subhastes durant la 33a Final de WOŚP a Barcelona".</p>) },
                ],
            },
        },
    },
    {
        slug: 'licytacje-podczas-33-finalu-wosp-w-barcelonie',
        date: '2025-01-25',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/25/licytacje-podczas-33-finalu-wosp-w-barcelonie/',
        content: {
            pl: {
                title: 'Licytacje podczas 33. Finału WOŚP w Barcelonie',
                sections: [
                    { title: 'Licytacje na Finale WOŚP Barcelona', body: (<><p>Przygotowano cztery panele licytacji z wyjątkowymi pozycjami:</p><ul className="list-disc pl-6 space-y-1"><li>Panel 11:45–12:30: zegar WOŚP, kalendarz, obrazy, płyta z podpisem Krzysztofa Cugowskiego, handmade poduszka, koszulka biegu</li><li>Panel 13:14–14:00: obrazy, liczne książki z dedykacjami, oprowadzanie po Barcelonie, lekcje hiszpańskiego, złote serduszko, płyta A. Piasecznego</li><li>Panel 15:00–16:30: obrazy, gadżety WOŚP, książka z autografem, sesja coachingowa</li><li>Panel 17:30–18:15: obraz, książka „Mecz to pretekst", gadżety WOŚP</li></ul></>) },
                    { title: 'Licytacja złotego serduszka', body: (<p>Złote serduszko wykonane przez Jakuba Rajchelta – złoto próby 585, ok. 2.2 g, z logo sztabu WOŚP Barcelona – do wylicytowania o 15:00.</p>) },
                    { title: 'Licytacja obrazów', body: (<p>Na licytacji 10 obrazów z wernisażu „Sztuka dla WOŚP" – m.in. Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz, Katarzyna Rzędzian.</p>) },
                ],
            },
            en: {
                title: 'Auctions during the 33rd WOŚP Finale in Barcelona',
                sections: [
                    { title: 'Auctions at the WOŚP Barcelona Finale', body: (<><p>Four auction panels with exceptional items were prepared:</p><ul className="list-disc pl-6 space-y-1"><li>Panel 11:45–12:30: WOŚP clock, calendar, paintings, CD signed by Krzysztof Cugowski, handmade pillow, run t-shirt</li><li>Panel 13:14–14:00: paintings, numerous books with dedications, Barcelona tour, Spanish lessons, golden heart, A. Piaseczny CD</li><li>Panel 15:00–16:30: paintings, WOŚP gadgets, autographed book, coaching session</li><li>Panel 17:30–18:15: painting, book "The Match is a Pretext", WOŚP gadgets</li></ul></>) },
                    { title: 'Golden heart auction', body: (<p>Golden heart made by Jakub Rajchelt – 585 gold, approx. 2.2 g, with WOŚP Barcelona staff logo – to be auctioned at 15:00.</p>) },
                    { title: 'Painting auction', body: (<p>10 paintings from the "Art for WOŚP" vernissage on auction – including Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz, Katarzyna Rzędzian.</p>) },
                ],
            },
            es: {
                title: 'Subastas durante la 33ª Final de WOŚP en Barcelona',
                sections: [
                    { title: 'Subastas en la Final de WOŚP Barcelona', body: (<><p>Se prepararon cuatro paneles de subastas con artículos excepcionales:</p><ul className="list-disc pl-6 space-y-1"><li>Panel 11:45–12:30: reloj WOŚP, calendario, cuadros, CD firmado por Krzysztof Cugowski, almohada hecha a mano, camiseta de carrera</li><li>Panel 13:14–14:00: cuadros, numerosos libros con dedicatorias, tour por Barcelona, clases de español, corazón dorado, CD de A. Piaseczny</li><li>Panel 15:00–16:30: cuadros, artículos WOŚP, libro autografiado, sesión de coaching</li><li>Panel 17:30–18:15: cuadro, libro "El partido es un pretexto", artículos WOŚP</li></ul></>) },
                    { title: 'Subasta del corazón dorado', body: (<p>Corazón dorado hecho por Jakub Rajchelt – oro 585, aprox. 2.2 g, con logo del equipo WOŚP Barcelona – a subastar a las 15:00.</p>) },
                    { title: 'Subasta de cuadros', body: (<p>10 cuadros del vernissage "Arte para WOŚP" en subasta – incluyendo Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz, Katarzyna Rzędzian.</p>) },
                ],
            },
            ca: {
                title: 'Subhastes durant la 33a Final de WOŚP a Barcelona',
                sections: [
                    { title: 'Subhastes a la Final de WOŚP Barcelona', body: (<><p>Es van preparar quatre panells de subhastes amb articles excepcionals:</p><ul className="list-disc pl-6 space-y-1"><li>Panell 11:45–12:30: rellotge WOŚP, calendari, quadres, CD signat per Krzysztof Cugowski, coixí fet a mà, samarreta de cursa</li><li>Panell 13:14–14:00: quadres, nombrosos llibres amb dedicatòries, tour per Barcelona, classes d'espanyol, cor daurat, CD d'A. Piaseczny</li><li>Panell 15:00–16:30: quadres, articles WOŚP, llibre autografiat, sessió de coaching</li><li>Panell 17:30–18:15: quadre, llibre "El partit és un pretext", articles WOŚP</li></ul></>) },
                    { title: 'Subhasta del cor daurat', body: (<p>Cor daurat fet per Jakub Rajchelt – or 585, aprox. 2.2 g, amb logo de l'equip WOŚP Barcelona – a subhastar a les 15:00.</p>) },
                    { title: 'Subhasta de quadres', body: (<p>10 quadres del vernissatge "Art per a WOŚP" en subhasta – incloent Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz, Katarzyna Rzędzian.</p>) },
                ],
            },
        },
    },
    {
        slug: 'sie-gotuje-sie-pomaga-smaki-swiata-z-wosp',
        date: '2025-01-22',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/22/elementor-1959/',
        content: {
            pl: {
                title: 'Się gotuje, się pomaga! Smaki świata z WOŚP',
                sections: [
                    { title: 'Przepisy od sztabu Barcelona', body: (<p>Sztab WOŚP w Barcelonie przygotował dwa wyjątkowe katalońskie przepisy, które znalazły się w książce.</p>) },
                    { title: 'Panellets (Marcepanowe ciasteczka)', body: (<p>Tradycyjne katalońskie ciasteczka marcepanowe spożywane na święto Castañada. Zachęcamy do spróbowania przepisu!</p>) },
                    { title: 'Trinxat de la Cerdanya con setas', body: (<p>Danie z katalońskich regionów górskich z kapusty i ziemniaków. Nazwa pochodzi od „trinxar" – siekać.</p>) },
                    { title: 'Dołącz do naszych działań!', body: (<><p>Zapraszamy do odkrycia smaków z różnych zakątków świata i spróbowania katalońskich przysmaków, które przygotował sztab WOŚP Barcelona!</p><p>Do zobaczenia na naszych wydarzeniach kulinarnych!</p></>) },
                ],
            },
            en: {
                title: 'Cooking and helping! Flavors of the world with WOŚP',
                sections: [
                    { title: 'Recipes from the Barcelona team', body: (<p>The WOŚP team in Barcelona prepared two unique Catalan recipes that were included in the book.</p>) },
                    { title: 'Panellets (Marzipan cookies)', body: (<p>Traditional Catalan marzipan cookies eaten during the Castañada festival. We encourage you to try the recipe!</p>) },
                    { title: 'Trinxat de la Cerdanya con setas', body: (<p>A dish from the Catalan mountain regions made of cabbage and potatoes. The name comes from "trinxar" – to chop.</p>) },
                    { title: 'Join our activities!', body: (<><p>We invite you to discover flavors from different corners of the world and try the Catalan delicacies prepared by the WOŚP Barcelona team!</p><p>See you at our culinary events!</p></>) },
                ],
            },
            es: {
                title: '¡Se cocina, se ayuda! Sabores del mundo con WOŚP',
                sections: [
                    { title: 'Recetas del equipo de Barcelona', body: (<p>El equipo de WOŚP en Barcelona preparó dos recetas catalanas únicas que se incluyeron en el libro.</p>) },
                    { title: 'Panellets (Galletas de mazapán)', body: (<p>Galletas de mazapán catalanas tradicionales que se comen durante la fiesta de la Castañada. ¡Te animamos a probar la receta!</p>) },
                    { title: 'Trinxat de la Cerdanya con setas', body: (<p>Un plato de las regiones montañosas catalanas hecho de col y patatas. El nombre viene de "trinxar" – picar.</p>) },
                    { title: '¡Únete a nuestras actividades!', body: (<><p>¡Te invitamos a descubrir sabores de diferentes rincones del mundo y probar las delicias catalanas preparadas por el equipo de WOŚP Barcelona!</p><p>¡Nos vemos en nuestros eventos culinarios!</p></>) },
                ],
            },
            ca: {
                title: 'Es cuina, s\'ajuda! Sabors del món amb WOŚP',
                sections: [
                    { title: 'Receptes de l\'equip de Barcelona', body: (<p>L'equip de WOŚP a Barcelona va preparar dues receptes catalanes úniques que es van incloure al llibre.</p>) },
                    { title: 'Panellets (Galetes de massapà)', body: (<p>Galetes de massapà catalanes tradicionals que es mengen durant la festa de la Castanyada. T'animem a provar la recepta!</p>) },
                    { title: 'Trinxat de la Cerdanya amb bolets', body: (<p>Un plat de les regions muntanyoses catalanes fet de col i patates. El nom ve de "trinxar" – tallar.</p>) },
                    { title: 'Uneix-te a les nostres activitats!', body: (<><p>T'invitem a descobrir sabors de diferents racons del món i provar les delícies catalanes preparades per l'equip de WOŚP Barcelona!</p><p>Ens veiem als nostres esdeveniments culinaris!</p></>) },
                ],
            },
        },
    },
    {
        slug: 'aukcje-wosp-licytuj-i-pomagaj',
        date: '2025-01-19',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/19/aukcje-wosp-licytuj-i-pomagaj/',
        content: {
            pl: {
                title: 'Aukcje WOŚP – licytuj i pomagaj!',
                sections: [
                    { title: '4Fund: Aukcje dla Polonii w Barcelonie', body: (<p>Aukcje z unikalnymi propozycjami dla Polonii – m.in. książki z dedykacjami, kurs języka polskiego.</p>) },
                    { title: 'Allegro: Unikalne Skarby', body: (<p>Na Allegro m.in. sesja zdjęciowa, kurs hiszpańskiego, magnesy, winyle, książki z dedykacjami, kalendarze z podpisem Jurka.</p>) },
                ],
            },
            en: {
                title: 'WOŚP Auctions – bid and help!',
                sections: [
                    { title: '4Fund: Auctions for the Polish community in Barcelona', body: (<p>Auctions with unique offers for the Polish community – including books with dedications, Polish language course.</p>) },
                    { title: 'Allegro: Unique Treasures', body: (<p>On Allegro: photo session, Spanish course, magnets, vinyl records, books with dedications, calendars signed by Jurek.</p>) },
                ],
            },
            es: {
                title: 'Subastas WOŚP – ¡puja y ayuda!',
                sections: [
                    { title: '4Fund: Subastas para la comunidad polaca en Barcelona', body: (<p>Subastas con ofertas únicas para la comunidad polaca – incluyendo libros con dedicatorias, curso de polaco.</p>) },
                    { title: 'Allegro: Tesoros Únicos', body: (<p>En Allegro: sesión de fotos, curso de español, imanes, vinilos, libros con dedicatorias, calendarios firmados por Jurek.</p>) },
                ],
            },
            ca: {
                title: 'Subhastes WOŚP – licita i ajuda!',
                sections: [
                    { title: '4Fund: Subhastes per a la comunitat polonesa a Barcelona', body: (<p>Subhastes amb ofertes úniques per a la comunitat polonesa – incloent llibres amb dedicatòries, curs de polonès.</p>) },
                    { title: 'Allegro: Tresors Únics', body: (<p>A Allegro: sessió de fotos, curs d'espanyol, imants, vinils, llibres amb dedicatòries, calendaris signats per Jurek.</p>) },
                ],
            },
        },
    },
    {
        slug: 'o-nas-nasza-druzyna-wosp-w-barcelonie',
        date: '2025-01-17',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/17/o-nas-nasza-druzyna-wosp-w-barcelonie/',
        content: {
            pl: {
                title: 'O Nas – Nasza Drużyna WOŚP w Barcelonie',
                sections: [
                    { title: 'Kto Tworzy Naszą Drużynę?', body: (<p>Nasza drużyna to wyjątkowi wolontariusze – różne role, wspólny cel i pasja do Orkiestry.</p>) },
                    { title: 'Wspólne wspomnienia i współpraca', body: (<p>Pamiętne chwile z finałów, spotkania i siła współpracy budują naszą społeczność.</p>) },
                ],
            },
            en: {
                title: 'About Us – Our WOŚP Team in Barcelona',
                sections: [
                    { title: 'Who Makes Up Our Team?', body: (<p>Our team consists of exceptional volunteers – different roles, common goal and passion for the Orchestra.</p>) },
                    { title: 'Shared memories and cooperation', body: (<p>Memorable moments from finales, meetings and the power of cooperation build our community.</p>) },
                ],
            },
            es: {
                title: 'Sobre Nosotros – Nuestro Equipo WOŚP en Barcelona',
                sections: [
                    { title: '¿Quién forma nuestro equipo?', body: (<p>Nuestro equipo está formado por voluntarios excepcionales – diferentes roles, objetivo común y pasión por la Orquesta.</p>) },
                    { title: 'Recuerdos compartidos y cooperación', body: (<p>Momentos memorables de las finales, encuentros y el poder de la cooperación construyen nuestra comunidad.</p>) },
                ],
            },
            ca: {
                title: 'Sobre Nosaltres – El Nostre Equip WOŚP a Barcelona',
                sections: [
                    { title: 'Qui forma el nostre equip?', body: (<p>El nostre equip està format per voluntaris excepcionals – diferents rols, objectiu comú i passió per l'Orquestra.</p>) },
                    { title: 'Records compartits i cooperació', body: (<p>Moments memorables de les finals, trobades i el poder de la cooperació construeixen la nostra comunitat.</p>) },
                ],
            },
        },
    },
    {
        slug: 'o-naszych-wspanialych-sponsorach',
        date: '2025-01-15',
        sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/15/o-naszych-wspanialych-sponsorach/',
        content: {
            pl: {
                title: 'O Naszych Wspaniałych Sponsorach',
                sections: [
                    { title: 'Sponsorzy WOŚP 2025', body: (<><p>Poznaj naszych sponsorów, partnerów i współorganizatorów, dzięki którym dzieje się magia!</p><ul className="list-disc pl-6 space-y-1"><li>Moja Katalonia</li><li>Wawel RestoBar</li><li>PolCat</li><li>Delicias by Bea</li><li>Alira Health</li><li>Tomex Car-Bus</li><li>World Class Barcelona</li><li>ART-TUR</li><li>Templo Beauty</li></ul></>) },
                ],
            },
            en: {
                title: 'About Our Wonderful Sponsors',
                sections: [
                    { title: 'WOŚP 2025 Sponsors', body: (<><p>Meet our sponsors, partners and co-organizers who make the magic happen!</p><ul className="list-disc pl-6 space-y-1"><li>Moja Katalonia</li><li>Wawel RestoBar</li><li>PolCat</li><li>Delicias by Bea</li><li>Alira Health</li><li>Tomex Car-Bus</li><li>World Class Barcelona</li><li>ART-TUR</li><li>Templo Beauty</li></ul></>) },
                ],
            },
            es: {
                title: 'Sobre Nuestros Maravillosos Patrocinadores',
                sections: [
                    { title: 'Patrocinadores WOŚP 2025', body: (<><p>¡Conoce a nuestros patrocinadores, socios y coorganizadores que hacen posible la magia!</p><ul className="list-disc pl-6 space-y-1"><li>Moja Katalonia</li><li>Wawel RestoBar</li><li>PolCat</li><li>Delicias by Bea</li><li>Alira Health</li><li>Tomex Car-Bus</li><li>World Class Barcelona</li><li>ART-TUR</li><li>Templo Beauty</li></ul></>) },
                ],
            },
            ca: {
                title: 'Sobre els Nostres Meravellosos Patrocinadors',
                sections: [
                    { title: 'Patrocinadors WOŚP 2025', body: (<><p>Coneix els nostres patrocinadors, socis i coorganitzadors que fan possible la màgia!</p><ul className="list-disc pl-6 space-y-1"><li>Moja Katalonia</li><li>Wawel RestoBar</li><li>PolCat</li><li>Delicias by Bea</li><li>Alira Health</li><li>Tomex Car-Bus</li><li>World Class Barcelona</li><li>ART-TUR</li><li>Templo Beauty</li></ul></>) },
                ],
            },
        },
    },
    {
        slug: 'bieg-policz-sie-z-cukrzyca-dolacz-do-nas',
        date: '2024-12-30',
        sourceUrl: 'https://wospbarcelona.org/index.php/2024/12/30/bieg-policz-sie-z-cukrzyca-dolacz-do-nas/',
        content: {
            pl: {
                title: 'Bieg „Policz się z cukrzycą" – dołącz do nas!',
                sections: [
                    { title: 'Jak to się zaczęło?', body: (<p>Barcelońska edycja rozpoczęła się w 2021 roku podczas 29. Finału WOŚP. Z roku na rok rośniemy!</p>) },
                    { title: 'Jak do nas dołączyć?', body: (<p>Dołącz w dowolnej formie aktywności. Szczegóły rejestracji na Slotmarket i mail kontaktowy w artykule źródłowym.</p>) },
                ],
            },
            en: {
                title: '"Count on Diabetes" Run – join us!',
                sections: [
                    { title: 'How did it start?', body: (<p>The Barcelona edition started in 2021 during the 29th WOŚP Finale. We grow every year!</p>) },
                    { title: 'How to join us?', body: (<p>Join in any form of activity. Registration details on Slotmarket and contact email in the source article.</p>) },
                ],
            },
            es: {
                title: 'Carrera "Cuenta con la Diabetes" – ¡únete a nosotros!',
                sections: [
                    { title: '¿Cómo empezó?', body: (<p>La edición de Barcelona comenzó en 2021 durante la 29ª Final de WOŚP. ¡Crecemos cada año!</p>) },
                    { title: '¿Cómo unirse?', body: (<p>Únete en cualquier forma de actividad. Detalles de registro en Slotmarket y email de contacto en el artículo fuente.</p>) },
                ],
            },
            ca: {
                title: 'Cursa "Compta amb la Diabetis" – uneix-te a nosaltres!',
                sections: [
                    { title: 'Com va començar?', body: (<p>L'edició de Barcelona va començar el 2021 durant la 29a Final de WOŚP. Creixem cada any!</p>) },
                    { title: 'Com unir-se?', body: (<p>Uneix-te en qualsevol forma d'activitat. Detalls de registre a Slotmarket i email de contacte a l'article font.</p>) },
                ],
            },
        },
    },
];

// Helper function to get post by slug and locale
export function getPostBySlugAndLocale(slug: string, locale: string) {
    const post = blogPostsI18n.find((p) => p.slug === slug);
    if (!post) return null;

    const localeKey = locale as keyof typeof post.content;
    const content = post.content[localeKey] || post.content.pl;

    return {
        slug: post.slug,
        date: post.date,
        coverImage: post.coverImage,
        tags: post.tags,
        social: post.social,
        sourceUrl: post.sourceUrl,
        title: content.title,
        excerpt: content.excerpt,
        sections: content.sections,
    };
}

// Get all posts for a locale
export function getAllPostsForLocale(locale: string) {
    return blogPostsI18n.map((post) => {
        const localeKey = locale as keyof typeof post.content;
        const content = post.content[localeKey] || post.content.pl;

        return {
            slug: post.slug,
            date: post.date,
            coverImage: post.coverImage,
            thumbnailImage: post.thumbnailImage ?? post.coverImage,
            tags: post.tags,
            social: post.social,
            sourceUrl: post.sourceUrl,
            title: content.title,
            excerpt: content.excerpt,
        };
    });
}
