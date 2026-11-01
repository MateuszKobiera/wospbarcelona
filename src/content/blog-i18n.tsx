import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPhotoGallery } from '@/components/BlogPhotoGallery';
import { final34GalleryPhotos } from '@/content/final34Gallery';
import { newsPostsI18n } from '@/content/blog-news';


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

function PostFigure({ src, alt, caption, width, height, className }: { src: string; alt: string; caption?: string; width: number; height: number; className?: string }) {
    return (
        <figure className={`my-4 ${className ?? ''}`}>
            <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw, 768px" className="w-full h-auto rounded-lg shadow-md" />
            {caption && <figcaption className="mt-2 text-sm text-gray-600 italic text-center">{caption}</figcaption>}
        </figure>
    );
}

function SocialPills() {
    const links: Array<[string, string]> = [
        ['Facebook', 'https://www.facebook.com/sztabWOSPBarcelona/'],
        ['Instagram', 'https://www.instagram.com/wospbarcelona/'],
        ['TikTok', 'https://www.tiktok.com/@wospbarcelona'],
    ];
    return (
        <div className="flex flex-wrap gap-3">
            {links.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5">
                    {label}
                </a>
            ))}
        </div>
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

const basePostsI18n: BlogPostI18n[] = [
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
        coverImage: '/images/33-final/DSCF7321.jpg',
        tags: ['33FinałWOŚP', 'Barcelona', 'NauBostik', 'Koncerty', 'Licytacje'],
        content: {
            pl: {
                title: '33. Finał WOŚP w Barcelonie – Muzyka, Licytacje i Pomoc w Jednym Miejscu!',
                excerpt: '26 stycznia 2025 w Nau Bostik gramy w 33. Finale WOŚP dla onkologii i hematologii dziecięcej! Pięć koncertów, cztery sesje licytacji, polska kuchnia, atrakcje dla dzieci i Światełko do nieba – sprawdź, co na Was czeka.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Wielki dzień nadszedł! <strong>26 stycznia 2025 roku</strong> Sztab WOŚP Barcelona zaprasza na <strong>33. Finał Wielkiej Orkiestry Świątecznej Pomocy</strong>. Tegoroczny cel to <strong>onkologia i hematologia dziecięca</strong> – zebrane pieniądze pomogą w diagnostyce i leczeniu dzieci chorych na nowotwory.</p>
                                <ul>
                                    <li><strong>Miejsce:</strong> Nau Bostik – Carrer Ferran Turné 1-11, Sant Andreu, Barcelona</li>
                                    <li><strong>Start:</strong> 10:30</li>
                                    <li><strong>Zakończenie:</strong> ok. 20:00, po Światełku do nieba</li>
                                    <li><strong>Wstęp:</strong> wolny – zapraszamy całe rodziny, znajomych i sąsiadów!</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Harmonogram koncertów',
                        body: (
                            <div className="space-y-3">
                                <p>Przez cały dzień na scenie w ciemnej sali zagrają artyści, którzy wspierają Orkiestrę za darmo:</p>
                                <ul>
                                    <li><strong>11:00</strong> – Anulka &amp; Dirty Spoons</li>
                                    <li><strong>12:30</strong> – Marcin Bury</li>
                                    <li><strong>14:00</strong> – Guimera Blues &amp; The Sugar Boys</li>
                                    <li><strong>16:30</strong> – Justyna &amp; Jaime</li>
                                    <li><strong>18:15</strong> – Eye of the Storm</li>
                                    <li><strong>19:30</strong> – Światełko do nieba</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Koncert na scenie 33. Finału WOŚP w Nau Bostik" caption="Scena w Nau Bostik podczas 33. Finału. Zdjęcie: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Co dla Was przygotowaliśmy?',
                        body: (
                            <div className="space-y-3">
                                <p>Nau Bostik podzieliliśmy na dwie strefy, żeby każdy znalazł coś dla siebie.</p>
                                <p><strong>Pierwsza, jasna sala:</strong></p>
                                <ul>
                                    <li>wystawa sztuki – obrazy, które trafią na licytację,</li>
                                    <li>kulinaria: domowe ciasta, pierogi, grill, sałatki, kawa,</li>
                                    <li>loteria – każdy los wygrywa,</li>
                                    <li>malowanie twarzy, tatuaże z serduszkiem WOŚP i animacje dla dzieci.</li>
                                </ul>
                                <p><strong>Druga, ciemna sala:</strong></p>
                                <ul>
                                    <li>koncerty i licytacje,</li>
                                    <li>bar: polskie piwa kraftowe, wina, grzaniec i inne napoje.</li>
                                </ul>
                                <p>Wszystkie potrawy przygotowują nasi wolontariusze – a cały dochód z ich sprzedaży trafia na konto Fundacji WOŚP.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Informacje o płatnościach',
                        body: (
                            <div className="space-y-3">
                                <p>Żeby wszystko szło sprawnie, na Finale działa system kuponów:</p>
                                <ul>
                                    <li>kupony kupisz kartą lub gotówką wrzuconą do puszki,</li>
                                    <li>stoisko Delicias by Bea – płatność bezpośrednio u sprzedawcy,</li>
                                    <li>bar – część asortymentu tylko za gotówkę, reszta za kupony,</li>
                                    <li>kubki: zwykły – za darmo, kolekcjonerski Wawel/Sol de Gràcia – kaucja 1 €, kolekcjonerski WOŚP Barcelona – 2 €.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Licytacje',
                        body: (
                            <div className="space-y-3">
                                <p>Przygotowaliśmy cztery sesje licytacji. Do zdobycia będą m.in. unikatowe dzieła sztuki z wernisażu „Sztuka dla WOŚP”, vouchery, rękodzieło, książki z dedykacjami i gadżety WOŚP. O 15:00 odbędzie się licytacja <strong>złotego serduszka</strong> wykonanego przez Jakuba Rajchelta z logo naszego sztabu.</p>
                                <p>Pełną listę przedmiotów znajdziesz w artykule <Link href="/pl/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">„Licytacje podczas 33. Finału WOŚP w Barcelonie”</Link>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Światełko do nieba',
                        body: (
                            <div className="space-y-3">
                                <p>Tradycyjnie zakończymy dzień <strong>Światełkiem do nieba o 19:30</strong> – to moment, w którym wszyscy uczestnicy Finałów w Polsce i na świecie wysyłają w niebo symboliczny znak, że gramy razem. Bądźcie z nami do końca!</p>
                                <p><em>Aktualizacja:</em> zobacz, jak było – przeczytaj <Link href="/pl/news/tak-wygladal-33-final-wosp-w-barcelonie">relację ze zdjęciami z 33. Finału</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: '33rd WOŚP Finale in Barcelona – Music, Auctions and Help in One Place!',
                excerpt: 'On 26 January 2025 at Nau Bostik we play in the 33rd WOŚP Finale for paediatric oncology and haematology! Five concerts, four auction sessions, Polish food, activities for kids and the Light to Heaven – see what awaits you.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>The big day is here! On <strong>26 January 2025</strong> WOŚP Barcelona invites you to the <strong>33rd Finale of the Great Orchestra of Christmas Charity</strong>. This year&apos;s goal is <strong>paediatric oncology and haematology</strong> – the money raised will help diagnose and treat children with cancer.</p>
                                <ul>
                                    <li><strong>Venue:</strong> Nau Bostik – Carrer Ferran Turné 1-11, Sant Andreu, Barcelona</li>
                                    <li><strong>Start:</strong> 10:30</li>
                                    <li><strong>End:</strong> around 20:00, after the Light to Heaven</li>
                                    <li><strong>Entry:</strong> free – bring your family, friends and neighbours!</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Concert schedule',
                        body: (
                            <div className="space-y-3">
                                <p>All day long, artists who support the Orchestra for free will play on the stage in the dark hall:</p>
                                <ul>
                                    <li><strong>11:00</strong> – Anulka &amp; Dirty Spoons</li>
                                    <li><strong>12:30</strong> – Marcin Bury</li>
                                    <li><strong>14:00</strong> – Guimera Blues &amp; The Sugar Boys</li>
                                    <li><strong>16:30</strong> – Justyna &amp; Jaime</li>
                                    <li><strong>18:15</strong> – Eye of the Storm</li>
                                    <li><strong>19:30</strong> – Light to Heaven</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Concert on the stage of the 33rd WOŚP Finale at Nau Bostik" caption="The stage at Nau Bostik during the 33rd Finale. Photo: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'What have we prepared for you?',
                        body: (
                            <div className="space-y-3">
                                <p>We have split Nau Bostik into two zones so that everyone finds something for themselves.</p>
                                <p><strong>First, bright hall:</strong></p>
                                <ul>
                                    <li>art exhibition – paintings that will go up for auction,</li>
                                    <li>food: homemade cakes, pierogi, grill, salads, coffee,</li>
                                    <li>lottery – every ticket wins,</li>
                                    <li>face painting, WOŚP heart tattoos and activities for children.</li>
                                </ul>
                                <p><strong>Second, dark hall:</strong></p>
                                <ul>
                                    <li>concerts and auctions,</li>
                                    <li>bar: Polish craft beers, wines, mulled wine and other drinks.</li>
                                </ul>
                                <p>All the food is prepared by our volunteers – and all the proceeds go to the WOŚP Foundation.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Payment information',
                        body: (
                            <div className="space-y-3">
                                <p>To keep things running smoothly, the Finale uses a coupon system:</p>
                                <ul>
                                    <li>buy coupons by card or with cash dropped into a collection box,</li>
                                    <li>Delicias by Bea stand – pay the seller directly,</li>
                                    <li>bar – some items cash only, the rest for coupons,</li>
                                    <li>mugs: regular – free, Wawel/Sol de Gràcia collector&apos;s mug – €1 deposit, WOŚP Barcelona collector&apos;s mug – €2.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Auctions',
                        body: (
                            <div className="space-y-3">
                                <p>We have prepared four auction sessions. Up for grabs: unique artworks from the “Art for WOŚP” vernissage, vouchers, handicrafts, dedicated books and WOŚP gadgets. At 15:00 we will auction a <strong>golden heart</strong> made by Jakub Rajchelt with our team&apos;s logo.</p>
                                <p>See the full list of items in the article <Link href="/en/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">“Auctions during the 33rd WOŚP Finale in Barcelona”</Link>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Light to Heaven',
                        body: (
                            <div className="space-y-3">
                                <p>As always, we will end the day with the <strong>Light to Heaven at 19:30</strong> – the moment when everyone taking part in Finales in Poland and around the world sends a symbolic light into the sky to show that we play together. Stay with us until the end!</p>
                                <p><em>Update:</em> see how it went – read the <Link href="/en/news/tak-wygladal-33-final-wosp-w-barcelonie">photo report from the 33rd Finale</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: '33ª Final de WOŚP en Barcelona: ¡música, subastas y ayuda en un solo lugar!',
                excerpt: 'El 26 de enero de 2025 en Nau Bostik tocamos en la 33ª Final de WOŚP por la oncología y hematología infantil. Cinco conciertos, cuatro sesiones de subastas, comida polaca, actividades para niños y la Luz al Cielo: descubre lo que te espera.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>¡Ha llegado el gran día! El <strong>26 de enero de 2025</strong> WOŚP Barcelona te invita a la <strong>33ª Final de la Gran Orquesta de la Ayuda Navideña</strong>. El objetivo de este año es la <strong>oncología y hematología infantil</strong>: lo recaudado ayudará a diagnosticar y tratar a niños con cáncer.</p>
                                <ul>
                                    <li><strong>Lugar:</strong> Nau Bostik – Carrer Ferran Turné 1-11, Sant Andreu, Barcelona</li>
                                    <li><strong>Inicio:</strong> 10:30</li>
                                    <li><strong>Fin:</strong> hacia las 20:00, después de la Luz al Cielo</li>
                                    <li><strong>Entrada:</strong> libre. ¡Ven con tu familia, amigos y vecinos!</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Horario de conciertos',
                        body: (
                            <div className="space-y-3">
                                <p>Durante todo el día, en el escenario de la sala oscura tocarán artistas que apoyan a la Orquesta de forma gratuita:</p>
                                <ul>
                                    <li><strong>11:00</strong> – Anulka &amp; Dirty Spoons</li>
                                    <li><strong>12:30</strong> – Marcin Bury</li>
                                    <li><strong>14:00</strong> – Guimera Blues &amp; The Sugar Boys</li>
                                    <li><strong>16:30</strong> – Justyna &amp; Jaime</li>
                                    <li><strong>18:15</strong> – Eye of the Storm</li>
                                    <li><strong>19:30</strong> – Luz al Cielo</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Concierto en el escenario de la 33ª Final de WOŚP en Nau Bostik" caption="El escenario de Nau Bostik durante la 33ª Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: '¿Qué hemos preparado para vosotros?',
                        body: (
                            <div className="space-y-3">
                                <p>Hemos dividido Nau Bostik en dos zonas para que cada uno encuentre algo para sí.</p>
                                <p><strong>Primera sala, luminosa:</strong></p>
                                <ul>
                                    <li>exposición de arte: cuadros que saldrán a subasta,</li>
                                    <li>gastronomía: pasteles caseros, pierogi, barbacoa, ensaladas, café,</li>
                                    <li>lotería: ¡todos los boletos tienen premio!,</li>
                                    <li>pintacaras, tatuajes con el corazón de WOŚP y animación infantil.</li>
                                </ul>
                                <p><strong>Segunda sala, oscura:</strong></p>
                                <ul>
                                    <li>conciertos y subastas,</li>
                                    <li>bar: cervezas artesanas polacas, vinos, vino caliente y otras bebidas.</li>
                                </ul>
                                <p>Toda la comida la preparan nuestros voluntarios, y todo lo recaudado va a la Fundación WOŚP.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Información sobre pagos',
                        body: (
                            <div className="space-y-3">
                                <p>Para que todo funcione con fluidez, en la Final usamos un sistema de cupones:</p>
                                <ul>
                                    <li>compra cupones con tarjeta o en efectivo en la hucha,</li>
                                    <li>puesto de Delicias by Bea: se paga directamente a la vendedora,</li>
                                    <li>bar: algunos productos solo en efectivo, el resto con cupones,</li>
                                    <li>vasos: normal – gratis; de colección Wawel/Sol de Gràcia – depósito de 1 €; de colección WOŚP Barcelona – 2 €.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Subastas',
                        body: (
                            <div className="space-y-3">
                                <p>Hemos preparado cuatro sesiones de subastas. Podrás conseguir obras de arte únicas de la exposición «Arte para WOŚP», vales, artesanía, libros dedicados y artículos de WOŚP. A las 15:00 subastaremos un <strong>corazón de oro</strong> realizado por Jakub Rajchelt con el logo de nuestro equipo.</p>
                                <p>Consulta la lista completa en el artículo <Link href="/es/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">«Subastas durante la 33ª Final de WOŚP en Barcelona»</Link>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Luz al Cielo',
                        body: (
                            <div className="space-y-3">
                                <p>Como siempre, terminaremos el día con la <strong>Luz al Cielo a las 19:30</strong>: el momento en que todos los participantes de las Finales en Polonia y en el mundo envían al cielo una señal simbólica de que tocamos juntos. ¡Quédate con nosotros hasta el final!</p>
                                <p><em>Actualización:</em> mira cómo fue en la <Link href="/es/news/tak-wygladal-33-final-wosp-w-barcelonie">crónica con fotos de la 33ª Final</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: '33a Final de WOŚP a Barcelona: música, subhastes i ajuda en un sol lloc!',
                excerpt: 'El 26 de gener de 2025 a Nau Bostik toquem a la 33a Final de WOŚP per l’oncologia i l’hematologia infantil. Cinc concerts, quatre sessions de subhastes, menjar polonès, activitats per als infants i la Llum al Cel: descobreix què t’espera.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Ha arribat el gran dia! El <strong>26 de gener de 2025</strong> WOŚP Barcelona et convida a la <strong>33a Final de la Gran Orquestra de l’Ajuda de Nadal</strong>. L’objectiu d’enguany és l’<strong>oncologia i l’hematologia infantil</strong>: el que es recapti ajudarà a diagnosticar i tractar infants amb càncer.</p>
                                <ul>
                                    <li><strong>Lloc:</strong> Nau Bostik – Carrer Ferran Turné 1-11, Sant Andreu, Barcelona</li>
                                    <li><strong>Inici:</strong> 10:30</li>
                                    <li><strong>Final:</strong> cap a les 20:00, després de la Llum al Cel</li>
                                    <li><strong>Entrada:</strong> lliure. Vine amb la família, els amics i els veïns!</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Horari dels concerts',
                        body: (
                            <div className="space-y-3">
                                <p>Durant tot el dia, a l’escenari de la sala fosca tocaran artistes que donen suport a l’Orquestra de manera gratuïta:</p>
                                <ul>
                                    <li><strong>11:00</strong> – Anulka &amp; Dirty Spoons</li>
                                    <li><strong>12:30</strong> – Marcin Bury</li>
                                    <li><strong>14:00</strong> – Guimera Blues &amp; The Sugar Boys</li>
                                    <li><strong>16:30</strong> – Justyna &amp; Jaime</li>
                                    <li><strong>18:15</strong> – Eye of the Storm</li>
                                    <li><strong>19:30</strong> – Llum al Cel</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Concert a l’escenari de la 33a Final de WOŚP a Nau Bostik" caption="L’escenari de Nau Bostik durant la 33a Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Què us hem preparat?',
                        body: (
                            <div className="space-y-3">
                                <p>Hem dividit Nau Bostik en dues zones perquè tothom hi trobi alguna cosa.</p>
                                <p><strong>Primera sala, lluminosa:</strong></p>
                                <ul>
                                    <li>exposició d’art: quadres que sortiran a subhasta,</li>
                                    <li>gastronomia: pastissos casolans, pierogi, brasa, amanides, cafè,</li>
                                    <li>loteria: tots els bitllets tenen premi!,</li>
                                    <li>pintacares, tatuatges amb el cor de WOŚP i animació infantil.</li>
                                </ul>
                                <p><strong>Segona sala, fosca:</strong></p>
                                <ul>
                                    <li>concerts i subhastes,</li>
                                    <li>bar: cerveses artesanes poloneses, vins, vi calent i altres begudes.</li>
                                </ul>
                                <p>Tot el menjar el preparen els nostres voluntaris, i tot el que es recapta va a la Fundació WOŚP.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Informació sobre els pagaments',
                        body: (
                            <div className="space-y-3">
                                <p>Perquè tot funcioni bé, a la Final fem servir un sistema de cupons:</p>
                                <ul>
                                    <li>compra cupons amb targeta o en efectiu a la guardiola,</li>
                                    <li>parada de Delicias by Bea: es paga directament a la venedora,</li>
                                    <li>bar: alguns productes només en efectiu, la resta amb cupons,</li>
                                    <li>gots: normal – gratuït; de col·lecció Wawel/Sol de Gràcia – dipòsit d’1 €; de col·lecció WOŚP Barcelona – 2 €.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Subhastes',
                        body: (
                            <div className="space-y-3">
                                <p>Hem preparat quatre sessions de subhastes. Podràs aconseguir obres d’art úniques de l’exposició «Art per WOŚP», vals, artesania, llibres dedicats i articles de WOŚP. A les 15:00 subhastarem un <strong>cor d’or</strong> fet per Jakub Rajchelt amb el logotip del nostre equip.</p>
                                <p>Consulta la llista completa a l’article <Link href="/ca/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">«Subhastes durant la 33a Final de WOŚP a Barcelona»</Link>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Llum al Cel',
                        body: (
                            <div className="space-y-3">
                                <p>Com sempre, acabarem el dia amb la <strong>Llum al Cel a les 19:30</strong>: el moment en què tots els participants de les Finals a Polònia i arreu del món envien al cel un senyal simbòlic que toquem junts. Queda’t amb nosaltres fins al final!</p>
                                <p><em>Actualització:</em> mira com va anar a la <Link href="/ca/news/tak-wygladal-33-final-wosp-w-barcelonie">crònica amb fotos de la 33a Final</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'licytacje-podczas-33-finalu-wosp-w-barcelonie',
        date: '2025-01-25',
        coverImage: '/images/blog/33-final/Aukcje-16.png',
        tags: ['33FinałWOŚP', 'Licytacje', 'ZłoteSerduszko', 'Barcelona'],
        content: {
            pl: {
                title: 'Licytacje podczas 33. Finału WOŚP w Barcelonie',
                excerpt: 'Cztery sesje licytacji, złote serduszko Jakuba Rajchelta i obrazy z wernisażu „Sztuka dla WOŚP” – zobacz, co będzie można wylicytować podczas 33. Finału WOŚP w Barcelonie i jak wziąć udział.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Licytacje to jeden z najbardziej emocjonujących punktów każdego Finału – i jeden z najważniejszych, jeśli chodzi o zebraną kwotę. Podczas 33. Finału WOŚP w Barcelonie, <strong>26 stycznia 2025 w Nau Bostik</strong>, przygotowaliśmy aż cztery sesje licytacji. Cały dochód trafi na cel Finału: <strong>onkologię i hematologię dziecięcą</strong>.</p>
                                <p>Wszystkie przedmioty i usługi przekazali nam za darmo artyści, autorzy, firmy i przyjaciele sztabu – dziękujemy!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Harmonogram i przedmioty',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Sesja 11:45–12:30:</strong> zegar WOŚP, kalendarz, obrazy, płyta z podpisem Krzysztofa Cugowskiego, ręcznie szyta poduszka, koszulka z biegu.</li>
                                    <li><strong>Sesja 13:15–14:00:</strong> obrazy, liczne książki z dedykacjami, oprowadzanie po Barcelonie, lekcje hiszpańskiego, złote serduszko, płyta Andrzeja Piasecznego.</li>
                                    <li><strong>Sesja 15:00–16:30:</strong> obrazy, gadżety WOŚP, książka z autografem, sesja coachingowa.</li>
                                    <li><strong>Sesja 17:30–18:15:</strong> obraz, książka „Mecz to pretekst”, gadżety WOŚP.</li>
                                </ul>
                                <p>Godziny mogą się nieznacznie przesunąć – śledźcie komunikaty ze sceny.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Licytacja złotego serduszka',
                        body: (
                            <div className="space-y-3">
                                <p>Perełką tegorocznych licytacji jest <strong>złote serduszko wykonane przez Jakuba Rajchelta</strong> – ze złota próby 585, o wadze ok. 2,2 g, z logo sztabu WOŚP Barcelona. To jedyny taki egzemplarz na świecie i wyjątkowa pamiątka z barcelońskiego Finału. Licytacja odbędzie się <strong>o 15:00</strong>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Licytacja obrazów',
                        body: (
                            <div className="space-y-3">
                                <p>Na licytację trafi <strong>10 obrazów z wernisażu „Sztuka dla WOŚP”</strong>, który odbył się 18 stycznia 2025 w Templo Beauty. Swoje prace przekazali m.in. Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz i Katarzyna Rzędzian.</p>
                                <p>Obrazy będzie można obejrzeć przez cały dzień na wystawie w jasnej sali – warto przyjść wcześniej i wybrać swojego faworyta!</p>
                                <PostFigure src="/images/33-final/DSCF7189.jpg" width={1024} height={683} alt="Obraz prezentowany na scenie podczas licytacji 33. Finału WOŚP w Barcelonie" caption="Licytacja obrazów podczas 33. Finału. Zdjęcie: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Jak wziąć udział w licytacji?',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li>Przyjdź do ciemnej sali, gdzie przy scenie prowadzone są licytacje.</li>
                                    <li>Prowadzący przedstawia przedmiot i cenę wywoławczą – podbijasz, podnosząc rękę.</li>
                                    <li>Wygrywa najwyższa oferta. Szczegóły płatności i odbioru poda prowadzący.</li>
                                </ul>
                                <p>Nie możesz być z nami w Nau Bostik? Część przedmiotów wystawiliśmy także online – zajrzyj do artykułu <Link href="/pl/news/aukcje-wosp-licytuj-i-pomagaj">„Aukcje WOŚP – licytuj i pomagaj!”</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'Auctions during the 33rd WOŚP Finale in Barcelona',
                excerpt: 'Four auction sessions, a golden heart by Jakub Rajchelt and paintings from the “Art for WOŚP” vernissage – see what you can bid on at the 33rd WOŚP Finale in Barcelona and how to take part.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Auctions are one of the most exciting parts of every Finale – and one of the most important when it comes to the amount raised. At the 33rd WOŚP Finale in Barcelona, <strong>on 26 January 2025 at Nau Bostik</strong>, we have prepared four auction sessions. All proceeds go to the Finale&apos;s goal: <strong>paediatric oncology and haematology</strong>.</p>
                                <p>All items and services were donated free of charge by artists, authors, companies and friends of our team – thank you!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Schedule and items',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Session 11:45–12:30:</strong> WOŚP clock, calendar, paintings, CD signed by Krzysztof Cugowski, handmade pillow, run T-shirt.</li>
                                    <li><strong>Session 13:15–14:00:</strong> paintings, many dedicated books, a guided tour of Barcelona, Spanish lessons, the golden heart, CD by Andrzej Piaseczny.</li>
                                    <li><strong>Session 15:00–16:30:</strong> paintings, WOŚP gadgets, autographed book, coaching session.</li>
                                    <li><strong>Session 17:30–18:15:</strong> painting, the book “Mecz to pretekst”, WOŚP gadgets.</li>
                                </ul>
                                <p>Times may shift slightly – listen for announcements from the stage.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Golden heart auction',
                        body: (
                            <div className="space-y-3">
                                <p>The highlight of this year&apos;s auctions is a <strong>golden heart made by Jakub Rajchelt</strong> – 585 gold, about 2.2 g, featuring the WOŚP Barcelona logo. It is one of a kind and a unique keepsake from the Barcelona Finale. The auction takes place <strong>at 15:00</strong>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Painting auction',
                        body: (
                            <div className="space-y-3">
                                <p><strong>10 paintings from the “Art for WOŚP” vernissage</strong>, held on 18 January 2025 at Templo Beauty, will be auctioned. Works were donated by, among others, Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz and Katarzyna Rzędzian.</p>
                                <p>You can see the paintings all day at the exhibition in the bright hall – come early and pick your favourite!</p>
                                <PostFigure src="/images/33-final/DSCF7189.jpg" width={1024} height={683} alt="A painting presented on stage during the 33rd WOŚP Finale auction in Barcelona" caption="Painting auction during the 33rd Finale. Photo: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'How to take part in an auction?',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li>Come to the dark hall, where the auctions are held by the stage.</li>
                                    <li>The host presents the item and the starting price – raise your hand to bid.</li>
                                    <li>The highest bid wins. The host will give details on payment and collection.</li>
                                </ul>
                                <p>Can&apos;t make it to Nau Bostik? Some items are also available online – see the article <Link href="/en/news/aukcje-wosp-licytuj-i-pomagaj">“WOŚP Auctions – bid and help!”</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: 'Subastas durante la 33ª Final de WOŚP en Barcelona',
                excerpt: 'Cuatro sesiones de subastas, un corazón de oro de Jakub Rajchelt y cuadros de la exposición «Arte para WOŚP»: descubre qué podrás pujar en la 33ª Final de WOŚP en Barcelona y cómo participar.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Las subastas son uno de los momentos más emocionantes de cada Final, y de los más importantes en cuanto a la cantidad recaudada. En la 33ª Final de WOŚP en Barcelona, <strong>el 26 de enero de 2025 en Nau Bostik</strong>, hemos preparado cuatro sesiones de subastas. Todo lo recaudado se destinará al objetivo de la Final: <strong>la oncología y hematología infantil</strong>.</p>
                                <p>Todos los objetos y servicios han sido donados de forma gratuita por artistas, autores, empresas y amigos del equipo. ¡Gracias!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Horario y objetos',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Sesión 11:45–12:30:</strong> reloj de WOŚP, calendario, cuadros, CD firmado por Krzysztof Cugowski, cojín hecho a mano, camiseta de la carrera.</li>
                                    <li><strong>Sesión 13:15–14:00:</strong> cuadros, muchos libros dedicados, visita guiada por Barcelona, clases de español, el corazón de oro, CD de Andrzej Piaseczny.</li>
                                    <li><strong>Sesión 15:00–16:30:</strong> cuadros, artículos de WOŚP, libro autografiado, sesión de coaching.</li>
                                    <li><strong>Sesión 17:30–18:15:</strong> cuadro, el libro «Mecz to pretekst», artículos de WOŚP.</li>
                                </ul>
                                <p>Los horarios pueden variar ligeramente: atentos a los avisos desde el escenario.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Subasta del corazón de oro',
                        body: (
                            <div className="space-y-3">
                                <p>La joya de las subastas de este año es un <strong>corazón de oro realizado por Jakub Rajchelt</strong>: oro de 585 milésimas, unos 2,2 g, con el logo de WOŚP Barcelona. Es una pieza única y un recuerdo especial de la Final de Barcelona. La subasta será <strong>a las 15:00</strong>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Subasta de cuadros',
                        body: (
                            <div className="space-y-3">
                                <p>Saldrán a subasta <strong>10 cuadros de la exposición «Arte para WOŚP»</strong>, celebrada el 18 de enero de 2025 en Templo Beauty. Han donado sus obras, entre otras, Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz y Katarzyna Rzędzian.</p>
                                <p>Podrás ver los cuadros todo el día en la exposición de la sala luminosa. ¡Ven pronto y elige tu favorito!</p>
                                <PostFigure src="/images/33-final/DSCF7189.jpg" width={1024} height={683} alt="Un cuadro presentado en el escenario durante la subasta de la 33ª Final de WOŚP en Barcelona" caption="Subasta de cuadros durante la 33ª Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: '¿Cómo participar en una subasta?',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li>Ven a la sala oscura, donde se celebran las subastas junto al escenario.</li>
                                    <li>El presentador muestra el objeto y el precio de salida: para pujar, levanta la mano.</li>
                                    <li>Gana la puja más alta. El presentador indicará cómo pagar y recoger el objeto.</li>
                                </ul>
                                <p>¿No puedes venir a Nau Bostik? Algunos objetos también están en internet: consulta el artículo <Link href="/es/news/aukcje-wosp-licytuj-i-pomagaj">«Subastas de WOŚP: ¡puja y ayuda!»</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Subhastes durant la 33a Final de WOŚP a Barcelona',
                excerpt: 'Quatre sessions de subhastes, un cor d’or de Jakub Rajchelt i quadres de l’exposició «Art per WOŚP»: descobreix per què podràs licitar a la 33a Final de WOŚP a Barcelona i com participar-hi.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Les subhastes són un dels moments més emocionants de cada Final, i dels més importants pel que fa a la quantitat recaptada. A la 33a Final de WOŚP a Barcelona, <strong>el 26 de gener de 2025 a Nau Bostik</strong>, hem preparat quatre sessions de subhastes. Tot el que es recapti es destinarà a l’objectiu de la Final: <strong>l’oncologia i l’hematologia infantil</strong>.</p>
                                <p>Tots els objectes i serveis els han donat gratuïtament artistes, autors, empreses i amics de l’equip. Gràcies!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Horari i objectes',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Sessió 11:45–12:30:</strong> rellotge de WOŚP, calendari, quadres, CD signat per Krzysztof Cugowski, coixí fet a mà, samarreta de la cursa.</li>
                                    <li><strong>Sessió 13:15–14:00:</strong> quadres, molts llibres dedicats, visita guiada per Barcelona, classes d’espanyol, el cor d’or, CD d’Andrzej Piaseczny.</li>
                                    <li><strong>Sessió 15:00–16:30:</strong> quadres, articles de WOŚP, llibre autografiat, sessió de coaching.</li>
                                    <li><strong>Sessió 17:30–18:15:</strong> quadre, el llibre «Mecz to pretekst», articles de WOŚP.</li>
                                </ul>
                                <p>Els horaris poden variar lleugerament: estigueu atents als avisos des de l’escenari.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Subhasta del cor d’or',
                        body: (
                            <div className="space-y-3">
                                <p>La joia de les subhastes d’enguany és un <strong>cor d’or fet per Jakub Rajchelt</strong>: or de 585 mil·lèsimes, uns 2,2 g, amb el logotip de WOŚP Barcelona. És una peça única i un record especial de la Final de Barcelona. La subhasta serà <strong>a les 15:00</strong>.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Subhasta de quadres',
                        body: (
                            <div className="space-y-3">
                                <p>Sortiran a subhasta <strong>10 quadres de l’exposició «Art per WOŚP»</strong>, celebrada el 18 de gener de 2025 a Templo Beauty. Han donat les seves obres, entre d’altres, Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz i Katarzyna Rzędzian.</p>
                                <p>Podràs veure els quadres tot el dia a l’exposició de la sala lluminosa. Vine aviat i tria el teu preferit!</p>
                                <PostFigure src="/images/33-final/DSCF7189.jpg" width={1024} height={683} alt="Un quadre presentat a l’escenari durant la subhasta de la 33a Final de WOŚP a Barcelona" caption="Subhasta de quadres durant la 33a Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Com participar en una subhasta?',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li>Vine a la sala fosca, on se celebren les subhastes al costat de l’escenari.</li>
                                    <li>El presentador mostra l’objecte i el preu de sortida: per licitar, aixeca la mà.</li>
                                    <li>Guanya l’oferta més alta. El presentador indicarà com pagar i recollir l’objecte.</li>
                                </ul>
                                <p>No pots venir a Nau Bostik? Alguns objectes també són a internet: consulta l’article <Link href="/ca/news/aukcje-wosp-licytuj-i-pomagaj">«Subhastes de WOŚP: licita i ajuda!»</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'sie-gotuje-sie-pomaga-smaki-swiata-z-wosp',
        date: '2025-01-22',
        coverImage: '/images/allegro/Sie gotuje...4.jpg',
        tags: ['WOŚPBarcelona', 'Kuchnia', 'Katalonia', 'Przepisy'],
        content: {
            pl: {
                title: 'Się gotuje, się pomaga! Smaki świata z WOŚP',
                excerpt: 'Sztab WOŚP Barcelona dołożył dwa katalońskie przepisy do charytatywnej książki kucharskiej ze smakami z całego świata: marcepanowe panellets i góralski trinxat z Cerdanyi. Poznaj historię tych potraw!',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Orkiestra gra nie tylko na scenie – czasem gra też w kuchni! Sztaby WOŚP z całego świata podzieliły się swoimi ulubionymi przepisami, które trafiły do wspólnej, charytatywnej książki kucharskiej. To kulinarna podróż przez kraje, w których mieszkają Polacy grający z Orkiestrą.</p>
                                <p>Nie mogło w niej zabraknąć Katalonii! <strong>Sztab WOŚP Barcelona przygotował dwa przepisy</strong>, które dobrze pokazują, jak smakuje nasz drugi dom: jeden słodki, świąteczny, i jeden sycący, prosto z Pirenejów.</p>
                                <PostFigure src="/images/allegro/Sie gotuje...4.jpg" width={3024} height={4032} alt="Charytatywna książka kucharska WOŚP z przepisami z całego świata" caption="Książka z przepisami sztabów WOŚP – trafiła także na nasze licytacje." className="max-w-sm mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'Panellets – marcepanowe ciasteczka na Castanyadę',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Panellets</strong> to małe ciasteczka z masy marcepanowej – z mielonych migdałów i cukru, często z dodatkiem gotowanego ziemniaka lub batata, dzięki czemu są wilgotne i delikatne. Najbardziej znane są te obtoczone w <strong>orzeszkach piniowych</strong>, ale spotkać można też wersje kokosowe, kakaowe, kawowe czy z kandyzowaną wiśnią.</p>
                                <p>Katalończycy jedzą je przede wszystkim podczas <strong>La Castanyada</strong>, czyli święta obchodzonego w wigilię Wszystkich Świętych (31 października). Na stołach pojawiają się wtedy także pieczone kasztany i słodkie ziemniaki, a do panellets tradycyjnie podaje się słodkie wino muszkatowe. Dla nas, Polaków, to ciekawy kontrast – podczas gdy w Polsce 1 listopada kojarzy się ze zniczami i zadumą, w Katalonii to także czas rodzinnych spotkań przy słodkościach.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Trinxat de la Cerdanya con setas',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Trinxat</strong> pochodzi z Cerdanyi – górskiej doliny w katalońskich Pirenejach, gdzie zimy są długie i mroźne. To proste, chłopskie danie z <strong>kapusty zimowej i ziemniaków</strong>, które gotuje się, ugniata, a potem smaży na złoty placek, zwykle z czosnkiem i boczkiem. Nazwa pochodzi od katalońskiego czasownika „trinxar” – siekać.</p>
                                <p>W naszej wersji trinxat podajemy z <strong>grzybami</strong> (setas), które w Katalonii są prawdziwą jesienną pasją – grzybobranie jest tu równie popularne jak w Polsce! Danie przypomina trochę nasze swojskie potrawy z kapusty i ziemniaków, więc każdy Polak poczuje się przy nim jak w domu.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Polsko-katalońska kuchnia na Finałach',
                        body: (
                            <div className="space-y-3">
                                <p>Jedzenie to ważna część naszych Finałów. Co roku nasi wolontariusze lepią setki pierogów, pieką ciasta i przygotowują polskie specjały – a goście z Katalonii i całego świata mogą spróbować „Cultura Polaca” od kuchni. Cały dochód ze sprzedaży trafia na konto Fundacji WOŚP.</p>
                                <p>Zachęcamy do wypróbowania katalońskich przepisów w domu – i do odwiedzenia naszego stoiska z jedzeniem podczas najbliższego Finału!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Dołącz do naszych działań!',
                        body: (
                            <div className="space-y-3">
                                <p>Aby być na bieżąco z naszymi wydarzeniami kulinarnymi i nie tylko, śledź nas w mediach społecznościowych:</p>
                                <SocialPills />
                                <p>Do zobaczenia na naszych wydarzeniach kulinarnych!</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'Cooking and helping! Flavours of the world with WOŚP',
                excerpt: 'WOŚP Barcelona contributed two Catalan recipes to a charity cookbook full of flavours from around the world: marzipan panellets and hearty trinxat from Cerdanya. Discover the story behind these dishes!',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>The Orchestra doesn&apos;t only play on stage – sometimes it plays in the kitchen too! WOŚP teams from all over the world shared their favourite recipes, which ended up in a joint charity cookbook. It is a culinary journey through the countries where Poles playing with the Orchestra live.</p>
                                <p>Catalonia couldn&apos;t be missing! <strong>WOŚP Barcelona prepared two recipes</strong> that show what our second home tastes like: one sweet and festive, and one hearty, straight from the Pyrenees.</p>
                                <PostFigure src="/images/allegro/Sie gotuje...4.jpg" width={3024} height={4032} alt="WOŚP charity cookbook with recipes from around the world" caption="The cookbook of WOŚP teams – it also went up for auction with us." className="max-w-sm mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'Panellets – marzipan sweets for the Castanyada',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Panellets</strong> are small marzipan sweets made from ground almonds and sugar, often with boiled potato or sweet potato added, which keeps them moist and tender. The best known are coated in <strong>pine nuts</strong>, but you will also find coconut, cocoa, coffee or candied-cherry versions.</p>
                                <p>Catalans eat them above all during <strong>La Castanyada</strong>, celebrated on the eve of All Saints&apos; Day (31 October). Roasted chestnuts and sweet potatoes also appear on the table, and panellets are traditionally served with sweet muscat wine. For us Poles it is an interesting contrast – in Poland 1 November is about candles and reflection, while in Catalonia it is also a time for family gatherings over sweets.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Trinxat de la Cerdanya with mushrooms',
                        body: (
                            <div className="space-y-3">
                                <p><strong>Trinxat</strong> comes from Cerdanya – a mountain valley in the Catalan Pyrenees with long, cold winters. It is a simple peasant dish of <strong>winter cabbage and potatoes</strong>, boiled, mashed and then fried into a golden cake, usually with garlic and bacon. The name comes from the Catalan verb “trinxar” – to chop.</p>
                                <p>In our version we serve trinxat with <strong>mushrooms</strong> (setas), a true autumn passion in Catalonia – mushroom picking is as popular here as in Poland! The dish is a bit like our home-style cabbage and potato dishes, so every Pole will feel right at home.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Polish-Catalan food at our Finales',
                        body: (
                            <div className="space-y-3">
                                <p>Food is an important part of our Finales. Every year our volunteers make hundreds of pierogi, bake cakes and prepare Polish specialities – and guests from Catalonia and around the world get a taste of “Cultura Polaca”. All proceeds go to the WOŚP Foundation.</p>
                                <p>We encourage you to try the Catalan recipes at home – and to visit our food stand at the next Finale!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Join our activities!',
                        body: (
                            <div className="space-y-3">
                                <p>To stay up to date with our culinary events and more, follow us on social media:</p>
                                <SocialPills />
                                <p>See you at our culinary events!</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: '¡Se cocina, se ayuda! Sabores del mundo con WOŚP',
                excerpt: 'WOŚP Barcelona aportó dos recetas catalanas a un libro de cocina solidario con sabores de todo el mundo: los panellets de mazapán y el contundente trinxat de la Cerdanya. ¡Descubre la historia de estos platos!',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>La Orquesta no solo toca en el escenario: ¡a veces también toca en la cocina! Equipos de WOŚP de todo el mundo compartieron sus recetas favoritas, que acabaron en un libro de cocina solidario conjunto. Es un viaje culinario por los países donde viven los polacos que tocan con la Orquesta.</p>
                                <p>¡No podía faltar Cataluña! <strong>WOŚP Barcelona preparó dos recetas</strong> que muestran a qué sabe nuestro segundo hogar: una dulce y festiva, y otra contundente, directamente de los Pirineos.</p>
                                <PostFigure src="/images/allegro/Sie gotuje...4.jpg" width={3024} height={4032} alt="Libro de cocina solidario de WOŚP con recetas de todo el mundo" caption="El libro de recetas de los equipos de WOŚP, que también salió en nuestras subastas." className="max-w-sm mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'Panellets: dulces de mazapán para la Castanyada',
                        body: (
                            <div className="space-y-3">
                                <p>Los <strong>panellets</strong> son pequeños dulces de mazapán hechos con almendra molida y azúcar, a menudo con patata o boniato cocido, que los hace jugosos y tiernos. Los más conocidos van rebozados en <strong>piñones</strong>, pero también los hay de coco, cacao, café o con cereza confitada.</p>
                                <p>Los catalanes los comen sobre todo durante <strong>La Castanyada</strong>, que se celebra la víspera de Todos los Santos (31 de octubre). En la mesa también hay castañas asadas y boniatos, y los panellets se acompañan tradicionalmente de moscatel. Para los polacos es un contraste curioso: en Polonia el 1 de noviembre se asocia a velas y recogimiento, mientras que en Cataluña también es tiempo de reuniones familiares con dulces.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Trinxat de la Cerdanya con setas',
                        body: (
                            <div className="space-y-3">
                                <p>El <strong>trinxat</strong> procede de la Cerdanya, un valle de montaña de los Pirineos catalanes con inviernos largos y fríos. Es un sencillo plato campesino de <strong>col de invierno y patata</strong>, que se hierven, se chafan y se fríen como una torta dorada, normalmente con ajo y panceta. El nombre viene del verbo catalán «trinxar», picar.</p>
                                <p>En nuestra versión lo servimos con <strong>setas</strong>, una auténtica pasión otoñal en Cataluña: ¡aquí buscar setas es tan popular como en Polonia! El plato recuerda a nuestras recetas caseras de col y patata, así que cualquier polaco se sentirá como en casa.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Cocina polaco-catalana en nuestras Finales',
                        body: (
                            <div className="space-y-3">
                                <p>La comida es una parte importante de nuestras Finales. Cada año nuestros voluntarios hacen cientos de pierogi, hornean pasteles y preparan especialidades polacas, y los invitados de Cataluña y de todo el mundo pueden probar la «Cultura Polaca». Todo lo recaudado va a la Fundación WOŚP.</p>
                                <p>Te animamos a probar las recetas catalanas en casa… ¡y a visitar nuestro puesto de comida en la próxima Final!</p>
                            </div>
                        ),
                    },
                    {
                        title: '¡Únete a nuestras actividades!',
                        body: (
                            <div className="space-y-3">
                                <p>Para estar al día de nuestros eventos culinarios y mucho más, síguenos en redes sociales:</p>
                                <SocialPills />
                                <p>¡Nos vemos en nuestros eventos culinarios!</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Es cuina, s’ajuda! Sabors del món amb WOŚP',
                excerpt: 'WOŚP Barcelona va aportar dues receptes catalanes a un llibre de cuina solidari amb sabors de tot el món: els panellets de massapà i el contundent trinxat de la Cerdanya. Descobreix la història d’aquests plats!',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>L’Orquestra no només toca a l’escenari: de vegades també toca a la cuina! Equips de WOŚP de tot el món van compartir les seves receptes preferides, que van acabar en un llibre de cuina solidari conjunt. És un viatge culinari pels països on viuen els polonesos que toquen amb l’Orquestra.</p>
                                <p>No hi podia faltar Catalunya! <strong>WOŚP Barcelona va preparar dues receptes</strong> que mostren a què té gust la nostra segona llar: una de dolça i festiva, i una altra de contundent, directament dels Pirineus.</p>
                                <PostFigure src="/images/allegro/Sie gotuje...4.jpg" width={3024} height={4032} alt="Llibre de cuina solidari de WOŚP amb receptes de tot el món" caption="El llibre de receptes dels equips de WOŚP, que també va sortir a les nostres subhastes." className="max-w-sm mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'Panellets: dolços de massapà per la Castanyada',
                        body: (
                            <div className="space-y-3">
                                <p>Els <strong>panellets</strong> són petits dolços de massapà fets amb ametlla mòlta i sucre, sovint amb patata o moniato bullit, que els fa sucosos i tendres. Els més coneguts són els arrebossats amb <strong>pinyons</strong>, però també n’hi ha de coco, de cacau, de cafè o amb cirera confitada.</p>
                                <p>Els catalans els mengen sobretot per <strong>la Castanyada</strong>, que se celebra la vigília de Tots Sants (31 d’octubre). A taula també hi ha castanyes torrades i moniatos, i els panellets s’acompanyen tradicionalment de moscatell. Per als polonesos és un contrast curiós: a Polònia l’1 de novembre s’associa a espelmes i recolliment, mentre que a Catalunya també és temps de trobades familiars amb dolços.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Trinxat de la Cerdanya amb bolets',
                        body: (
                            <div className="space-y-3">
                                <p>El <strong>trinxat</strong> ve de la Cerdanya, una vall de muntanya dels Pirineus catalans amb hiverns llargs i freds. És un plat pagès senzill de <strong>col d’hivern i patata</strong>, que es bullen, s’aixafen i es fregeixen com una coca daurada, normalment amb all i cansalada. El nom ve del verb «trinxar».</p>
                                <p>En la nostra versió el servim amb <strong>bolets</strong>, una autèntica passió tardorenca a Catalunya: aquí anar a buscar bolets és tan popular com a Polònia! El plat recorda les nostres receptes casolanes de col i patata, així que qualsevol polonès s’hi sentirà com a casa.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Cuina polonesa i catalana a les nostres Finals',
                        body: (
                            <div className="space-y-3">
                                <p>El menjar és una part important de les nostres Finals. Cada any els nostres voluntaris fan centenars de pierogi, couen pastissos i preparen especialitats poloneses, i els convidats de Catalunya i de tot el món poden tastar la «Cultura Polaca». Tot el que es recapta va a la Fundació WOŚP.</p>
                                <p>T’animem a provar les receptes catalanes a casa… i a visitar la nostra parada de menjar a la propera Final!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Uneix-te a les nostres activitats!',
                        body: (
                            <div className="space-y-3">
                                <p>Per estar al dia dels nostres esdeveniments culinaris i molt més, segueix-nos a les xarxes socials:</p>
                                <SocialPills />
                                <p>Ens veiem als nostres esdeveniments culinaris!</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'aukcje-wosp-licytuj-i-pomagaj',
        date: '2025-01-19',
        coverImage: '/images/blog/33-final/Aukcje-18-1024x672.png',
        tags: ['33FinałWOŚP', 'Aukcje', 'Allegro', '4Fund'],
        content: {
            pl: {
                title: 'Aukcje WOŚP – licytuj i pomagaj!',
                excerpt: 'Nie musisz być w Barcelonie, żeby pomóc! Na 4Fund i Allegro czekają książki z dedykacjami, kursy językowe, sesja zdjęciowa, winyle i kalendarze z podpisem Jurka Owsiaka. Sprawdź, jak licytować krok po kroku.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Finał WOŚP to nie tylko jeden dzień w Nau Bostik. Na 33. Finał przygotowaliśmy także <strong>licytacje internetowe</strong> – dzięki nim możesz wesprzeć <strong>onkologię i hematologię dziecięcą</strong> z dowolnego miejsca, nawet jeśli 26 stycznia nie będzie Cię w Barcelonie.</p>
                                <p>Wszystkie przedmioty i usługi podarowali nam przyjaciele sztabu, artyści, autorzy i lokalne firmy. Wygrywasz Ty – i wygrywają dzieci.</p>
                                <PostFigure src="/images/blog/33-final/Aukcje-18-1024x672.png" width={1024} height={672} alt="Przegląd aukcji WOŚP Barcelona na Allegro" caption="Wybrane aukcje sztabu WOŚP Barcelona." />
                            </div>
                        ),
                    },
                    {
                        title: '4Fund: aukcje dla Polonii w Barcelonie',
                        body: (
                            <div className="space-y-3">
                                <p>Na platformie <strong>4Fund</strong> wystawiliśmy aukcje skierowane przede wszystkim do Polaków mieszkających w Barcelonie i okolicach – to przedmioty i usługi, z których najłatwiej skorzystać na miejscu. Znajdziesz tam m.in. <strong>książki z dedykacjami</strong> i <strong>kurs języka polskiego</strong> – świetny pomysł dla dzieci dorastających w Hiszpanii albo dla katalońskich przyjaciół, którzy chcą poznać nasz język.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Allegro: unikalne skarby',
                        body: (
                            <div className="space-y-3">
                                <p>Na <strong>Allegro</strong> działamy w ramach Allegro Charytatywni – pieniądze z wygranych aukcji trafiają bezpośrednio na konto Fundacji WOŚP. Do wylicytowania są m.in.:</p>
                                <ul>
                                    <li>sesja zdjęciowa w Barcelonie,</li>
                                    <li>kurs języka hiszpańskiego,</li>
                                    <li>magnesy i gadżety z barcelońskim serduszkiem,</li>
                                    <li>płyty winylowe,</li>
                                    <li>książki z dedykacjami autorów,</li>
                                    <li>kalendarze z podpisem Jurka Owsiaka.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Jak licytować? Krok po kroku',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Załóż konto na Allegro lub 4Fund (albo zaloguj się na istniejące).</li>
                                    <li>Wejdź na aukcję, która Cię interesuje, i przeczytaj opis – znajdziesz tam szczegóły dostawy lub odbioru.</li>
                                    <li>Wpisz swoją maksymalną kwotę i złóż ofertę. Do końca aukcji ktoś może Cię przebić – warto zaglądać!</li>
                                    <li>Po wygranej opłać aukcję zgodnie z instrukcją. Gotowe – właśnie pomogłeś!</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        title: 'Dlaczego warto?',
                        body: (
                            <div className="space-y-3">
                                <p>Każde euro i każda złotówka z aukcji jest publicznie rozliczana przez Fundację WOŚP i zamienia się w nowoczesny sprzęt dla oddziałów onkologii i hematologii dziecięcej w Polsce. A Ty zyskujesz wyjątkową pamiątkę lub doświadczenie.</p>
                                <p>Wolisz licytować na żywo? Zobacz, co przygotowaliśmy na <Link href="/pl/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">licytacje podczas Finału w Nau Bostik</Link>.</p>
                                <p><em>Aktualizacja:</em> do 4 lutego aukcje na Allegro przyniosły już ponad 3000 euro – <Link href="/pl/news/tak-wygladal-33-final-wosp-w-barcelonie">zobacz podsumowanie 33. Finału</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'WOŚP Auctions – bid and help!',
                excerpt: 'You don’t need to be in Barcelona to help! On 4Fund and Allegro you can bid on dedicated books, language courses, a photo session, vinyl records and calendars signed by Jurek Owsiak. Here is how to bid, step by step.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>The WOŚP Finale is not just one day at Nau Bostik. For the 33rd Finale we have also prepared <strong>online auctions</strong> – so you can support <strong>paediatric oncology and haematology</strong> from anywhere, even if you are not in Barcelona on 26 January.</p>
                                <p>All items and services were donated by friends of our team, artists, authors and local businesses. You win – and so do the children.</p>
                                <PostFigure src="/images/blog/33-final/Aukcje-18-1024x672.png" width={1024} height={672} alt="Overview of WOŚP Barcelona auctions on Allegro" caption="A selection of WOŚP Barcelona auctions." />
                            </div>
                        ),
                    },
                    {
                        title: '4Fund: auctions for the Polish community in Barcelona',
                        body: (
                            <div className="space-y-3">
                                <p>On the <strong>4Fund</strong> platform we listed auctions aimed mainly at Poles living in and around Barcelona – items and services that are easiest to enjoy locally. You will find <strong>books with dedications</strong> and a <strong>Polish language course</strong> – a great idea for children growing up in Spain or for Catalan friends who want to learn our language.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Allegro: unique treasures',
                        body: (
                            <div className="space-y-3">
                                <p>On <strong>Allegro</strong> we run our auctions through Allegro Charytatywni (Allegro&apos;s charity section) – the money from winning bids goes directly to the WOŚP Foundation. Up for auction:</p>
                                <ul>
                                    <li>a photo session in Barcelona,</li>
                                    <li>a Spanish language course,</li>
                                    <li>magnets and gadgets with the Barcelona heart,</li>
                                    <li>vinyl records,</li>
                                    <li>books dedicated by their authors,</li>
                                    <li>calendars signed by Jurek Owsiak.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'How to bid, step by step',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Create an account on Allegro or 4Fund (or log in to an existing one).</li>
                                    <li>Open the auction you like and read the description – it includes delivery or pickup details.</li>
                                    <li>Enter your maximum amount and place your bid. Someone may outbid you before the end – keep checking!</li>
                                    <li>Once you win, pay as instructed. Done – you have just helped!</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        title: 'Why bid?',
                        body: (
                            <div className="space-y-3">
                                <p>Every euro and every zloty from the auctions is publicly accounted for by the WOŚP Foundation and turns into modern equipment for paediatric oncology and haematology wards in Poland. And you get a unique keepsake or experience.</p>
                                <p>Prefer live bidding? See what we have prepared for the <Link href="/en/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">auctions during the Finale at Nau Bostik</Link>.</p>
                                <p><em>Update:</em> by 4 February the Allegro auctions had already raised over €3,000 – <Link href="/en/news/tak-wygladal-33-final-wosp-w-barcelonie">see the 33rd Finale summary</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: 'Subastas de WOŚP: ¡puja y ayuda!',
                excerpt: '¡No hace falta estar en Barcelona para ayudar! En 4Fund y Allegro puedes pujar por libros dedicados, cursos de idiomas, una sesión de fotos, vinilos y calendarios firmados por Jurek Owsiak. Te explicamos cómo pujar paso a paso.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>La Final de WOŚP no es solo un día en Nau Bostik. Para la 33ª Final también hemos preparado <strong>subastas en internet</strong>, para que puedas apoyar la <strong>oncología y hematología infantil</strong> desde cualquier lugar, aunque el 26 de enero no estés en Barcelona.</p>
                                <p>Todos los objetos y servicios los han donado amigos del equipo, artistas, autores y empresas locales. Ganas tú… y ganan los niños.</p>
                                <PostFigure src="/images/blog/33-final/Aukcje-18-1024x672.png" width={1024} height={672} alt="Resumen de las subastas de WOŚP Barcelona en Allegro" caption="Una selección de subastas de WOŚP Barcelona." />
                            </div>
                        ),
                    },
                    {
                        title: '4Fund: subastas para la comunidad polaca en Barcelona',
                        body: (
                            <div className="space-y-3">
                                <p>En la plataforma <strong>4Fund</strong> hemos publicado subastas dirigidas sobre todo a los polacos que viven en Barcelona y alrededores: objetos y servicios que es más fácil disfrutar aquí. Encontrarás <strong>libros dedicados</strong> y un <strong>curso de polaco</strong>, una gran idea para niños que crecen en España o para amigos catalanes que quieran aprender nuestro idioma.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Allegro: tesoros únicos',
                        body: (
                            <div className="space-y-3">
                                <p>En <strong>Allegro</strong> subastamos a través de Allegro Charytatywni (la sección solidaria de Allegro): el dinero de las pujas ganadoras va directamente a la Fundación WOŚP. Podrás pujar, entre otros, por:</p>
                                <ul>
                                    <li>una sesión de fotos en Barcelona,</li>
                                    <li>un curso de español,</li>
                                    <li>imanes y artículos con el corazón de Barcelona,</li>
                                    <li>discos de vinilo,</li>
                                    <li>libros dedicados por sus autores,</li>
                                    <li>calendarios firmados por Jurek Owsiak.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Cómo pujar, paso a paso',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Crea una cuenta en Allegro o 4Fund (o inicia sesión).</li>
                                    <li>Abre la subasta que te interese y lee la descripción: allí verás los detalles de envío o recogida.</li>
                                    <li>Introduce tu cantidad máxima y puja. Alguien puede superarte antes del final: ¡vuelve a mirar!</li>
                                    <li>Si ganas, paga siguiendo las instrucciones. ¡Listo, acabas de ayudar!</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        title: '¿Por qué pujar?',
                        body: (
                            <div className="space-y-3">
                                <p>Cada euro y cada esloti de las subastas lo rinde públicamente la Fundación WOŚP y se convierte en equipos modernos para las unidades de oncología y hematología infantil de Polonia. Y tú consigues un recuerdo o una experiencia única.</p>
                                <p>¿Prefieres pujar en directo? Mira lo que hemos preparado para las <Link href="/es/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">subastas durante la Final en Nau Bostik</Link>.</p>
                                <p><em>Actualización:</em> hasta el 4 de febrero las subastas de Allegro ya habían recaudado más de 3.000 € – <Link href="/es/news/tak-wygladal-33-final-wosp-w-barcelonie">consulta el resumen de la 33ª Final</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Subhastes de WOŚP: licita i ajuda!',
                excerpt: 'No cal ser a Barcelona per ajudar! A 4Fund i Allegro pots licitar per llibres dedicats, cursos d’idiomes, una sessió de fotos, vinils i calendaris signats per Jurek Owsiak. T’expliquem com licitar pas a pas.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>La Final de WOŚP no és només un dia a Nau Bostik. Per a la 33a Final també hem preparat <strong>subhastes a internet</strong>, perquè puguis donar suport a l’<strong>oncologia i l’hematologia infantil</strong> des de qualsevol lloc, encara que el 26 de gener no siguis a Barcelona.</p>
                                <p>Tots els objectes i serveis els han donat amics de l’equip, artistes, autors i empreses locals. Guanyes tu… i guanyen els infants.</p>
                                <PostFigure src="/images/blog/33-final/Aukcje-18-1024x672.png" width={1024} height={672} alt="Resum de les subhastes de WOŚP Barcelona a Allegro" caption="Una selecció de subhastes de WOŚP Barcelona." />
                            </div>
                        ),
                    },
                    {
                        title: '4Fund: subhastes per a la comunitat polonesa a Barcelona',
                        body: (
                            <div className="space-y-3">
                                <p>A la plataforma <strong>4Fund</strong> hem publicat subhastes adreçades sobretot als polonesos que viuen a Barcelona i rodalia: objectes i serveis que és més fàcil gaudir aquí. Hi trobaràs <strong>llibres dedicats</strong> i un <strong>curs de polonès</strong>, una gran idea per a infants que creixen a Espanya o per a amics catalans que vulguin aprendre la nostra llengua.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Allegro: tresors únics',
                        body: (
                            <div className="space-y-3">
                                <p>A <strong>Allegro</strong> subhastem a través d’Allegro Charytatywni (la secció solidària d’Allegro): els diners de les licitacions guanyadores van directament a la Fundació WOŚP. Podràs licitar, entre d’altres, per:</p>
                                <ul>
                                    <li>una sessió de fotos a Barcelona,</li>
                                    <li>un curs d’espanyol,</li>
                                    <li>imants i articles amb el cor de Barcelona,</li>
                                    <li>discos de vinil,</li>
                                    <li>llibres dedicats pels seus autors,</li>
                                    <li>calendaris signats per Jurek Owsiak.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Com licitar, pas a pas',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Crea un compte a Allegro o 4Fund (o inicia la sessió).</li>
                                    <li>Obre la subhasta que t’interessi i llegeix la descripció: hi veuràs els detalls d’enviament o recollida.</li>
                                    <li>Introdueix la teva quantitat màxima i licita. Algú et pot superar abans del final: torna-hi a mirar!</li>
                                    <li>Si guanyes, paga seguint les instruccions. Fet, acabes d’ajudar!</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        title: 'Per què licitar?',
                        body: (
                            <div className="space-y-3">
                                <p>La Fundació WOŚP ret comptes públicament de cada euro i cada zloty de les subhastes, que es converteixen en equips moderns per a les unitats d’oncologia i hematologia infantil de Polònia. I tu aconsegueixes un record o una experiència única.</p>
                                <p>Prefereixes licitar en directe? Mira què hem preparat per a les <Link href="/ca/news/licytacje-podczas-33-finalu-wosp-w-barcelonie">subhastes durant la Final a Nau Bostik</Link>.</p>
                                <p><em>Actualització:</em> fins al 4 de febrer les subhastes d’Allegro ja havien recaptat més de 3.000 € – <Link href="/ca/news/tak-wygladal-33-final-wosp-w-barcelonie">consulta el resum de la 33a Final</Link>.</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'o-nas-nasza-druzyna-wosp-w-barcelonie',
        date: '2025-01-17',
        coverImage: '/images/33-final/DSCF7320.jpg',
        tags: ['WOŚPBarcelona', 'Wolontariusze', 'Drużyna'],
        content: {
            pl: {
                title: 'O Nas – Nasza Drużyna WOŚP w Barcelonie',
                excerpt: 'Kim są ludzie, którzy od lat organizują Finały WOŚP w Barcelonie? Poznaj naszą drużynę wolontariuszy – czym się zajmujemy, jak wygląda nasz rok i jak możesz do nas dołączyć.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Sztab WOŚP Barcelona to grupa Polaków mieszkających w Barcelonie i okolicach, którzy w wolnym czasie grają z Wielką Orkiestrą Świątecznej Pomocy. Organizujemy Finały WOŚP w stolicy Katalonii i wydarzenia przez cały rok – a wszystko to jako <strong>wolontariusze</strong>, bez wynagrodzenia, z czystej chęci pomagania.</p>
                                <PostFigure src="/images/33-final/DSCF7320.jpg" width={1024} height={683} alt="Wolontariusze i uczestnicy 33. Finału WOŚP w Barcelonie na wspólnym zdjęciu" caption="Nasza drużyna i przyjaciele podczas 33. Finału. Zdjęcie: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Kto tworzy naszą drużynę?',
                        body: (
                            <div className="space-y-3">
                                <p>Nasza drużyna to wyjątkowi wolontariusze – różne zawody, różne historie, wspólny cel i pasja do Orkiestry. Są wśród nas studenci, rodzice z dziećmi, osoby, które mieszkają w Barcelonie od lat, i takie, które dopiero co przyjechały. Każdy wnosi to, w czym jest najlepszy:</p>
                                <ul>
                                    <li><strong>koordynacja</strong> – planowanie Finału, kontakt z Fundacją, lokalami i urzędami,</li>
                                    <li><strong>wolontariusze z puszkami</strong> – zbiórka podczas Finału i wydarzeń,</li>
                                    <li><strong>kuchnia</strong> – lepienie pierogów, pieczenie ciast, grill i obsługa stoisk,</li>
                                    <li><strong>licytacje</strong> – zbieranie przedmiotów, aukcje na żywo i w internecie,</li>
                                    <li><strong>atrakcje dla dzieci</strong> – malowanie twarzy, warsztaty i zabawy,</li>
                                    <li><strong>scena i muzyka</strong> – kontakt z artystami i harmonogram koncertów,</li>
                                    <li><strong>media i zdjęcia</strong> – social media, grafiki, fotorelacje,</li>
                                    <li><strong>sponsorzy</strong> – współpraca z firmami, które grają razem z nami.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Nie tylko w styczniu',
                        body: (
                            <div className="space-y-3">
                                <p>Finał to kulminacja, ale pracujemy przez cały rok. Przed 33. Finałem zorganizowaliśmy m.in. warsztaty świąteczne „Wine and Craft”, plenerowe warsztaty fotograficzne, „Gwiazdkę Literacką” ze spotkaniem z polskimi autorami, warsztaty „Bubbly Craft”, wernisaż „Sztuka dla WOŚP” oraz barceloński bieg „Policz się z cukrzycą”. Każde z tych wydarzeń to okazja, żeby się spotkać, poznać nowych ludzi i zebrać dodatkowe środki.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Wspólne wspomnienia i współpraca',
                        body: (
                            <div className="space-y-3">
                                <p>Pamiętne chwile z Finałów, spotkania wolontariuszy i siła współpracy budują naszą społeczność. Pamiętamy pierwszy Finał po pandemii, kiedy znów mogliśmy grać razem na żywo, wyprzedane pierogi, wzruszające Światełka do nieba i rekordowe licytacje. Wiele przyjaźni zaczęło się właśnie przy stoisku z jedzeniem albo za kulisami sceny.</p>
                                <p>Dla wielu z nas sztab to także kawałek Polski w Barcelonie – miejsce, gdzie nowo przybyli mogą znaleźć znajomych, a Katalończycy i goście z całego świata poznają polską kulturę.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Dołącz do nas!',
                        body: (
                            <div className="space-y-3">
                                <p>Szukamy ludzi z dobrym sercem – nie potrzebujesz doświadczenia, wystarczy chęć i trochę wolnego czasu. Możesz pomóc tylko w dniu Finału albo zaangażować się na dłużej. <Link href="/pl/contact">Napisz do nas</Link> – odezwiemy się i opowiemy, jak możesz zagrać z Orkiestrą w Barcelonie!</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'About Us – Our WOŚP Team in Barcelona',
                excerpt: 'Who are the people who have been organising WOŚP Finales in Barcelona for years? Meet our team of volunteers – what we do, what our year looks like and how you can join us.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>WOŚP Barcelona is a group of Poles living in and around Barcelona who play with the Great Orchestra of Christmas Charity in their free time. We organise WOŚP Finales in the Catalan capital and events all year round – all as <strong>volunteers</strong>, unpaid, purely because we want to help.</p>
                                <PostFigure src="/images/33-final/DSCF7320.jpg" width={1024} height={683} alt="Volunteers and participants of the 33rd WOŚP Finale in Barcelona in a group photo" caption="Our team and friends during the 33rd Finale. Photo: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Who makes up our team?',
                        body: (
                            <div className="space-y-3">
                                <p>Our team consists of exceptional volunteers – different professions, different stories, a common goal and a passion for the Orchestra. Among us are students, parents with kids, people who have lived in Barcelona for years and some who have just arrived. Everyone brings what they do best:</p>
                                <ul>
                                    <li><strong>coordination</strong> – planning the Finale, liaising with the Foundation, venues and authorities,</li>
                                    <li><strong>volunteers with collection boxes</strong> – collecting during the Finale and events,</li>
                                    <li><strong>kitchen</strong> – making pierogi, baking cakes, the grill and running the stands,</li>
                                    <li><strong>auctions</strong> – gathering items, live and online auctions,</li>
                                    <li><strong>kids&apos; activities</strong> – face painting, workshops and games,</li>
                                    <li><strong>stage and music</strong> – contact with artists and the concert schedule,</li>
                                    <li><strong>media and photos</strong> – social media, graphics, photo reports,</li>
                                    <li><strong>sponsors</strong> – working with companies that play with us.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Not only in January',
                        body: (
                            <div className="space-y-3">
                                <p>The Finale is the high point, but we work all year round. Before the 33rd Finale we organised, among others, the “Wine and Craft” Christmas workshops, outdoor photography workshops, a “Literary Christmas” with Polish authors, “Bubbly Craft” workshops, the “Art for WOŚP” vernissage and the Barcelona “Count on Diabetes” run. Each event is a chance to meet, get to know new people and raise extra funds.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Shared memories and cooperation',
                        body: (
                            <div className="space-y-3">
                                <p>Memorable moments from the Finales, volunteer meetings and the power of cooperation build our community. We remember the first Finale after the pandemic, when we could play together live again, sold-out pierogi, moving Lights to Heaven and record-breaking auctions. Many friendships started at the food stand or backstage.</p>
                                <p>For many of us the team is also a piece of Poland in Barcelona – a place where newcomers can find friends, and where Catalans and guests from around the world discover Polish culture.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Join us!',
                        body: (
                            <div className="space-y-3">
                                <p>We are looking for people with big hearts – no experience needed, just willingness and a bit of free time. You can help only on Finale day or get involved for longer. <Link href="/en/contact">Write to us</Link> – we will get back to you and tell you how you can play with the Orchestra in Barcelona!</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: 'Sobre nosotros: nuestro equipo de WOŚP en Barcelona',
                excerpt: '¿Quiénes son las personas que desde hace años organizan las Finales de WOŚP en Barcelona? Conoce a nuestro equipo de voluntarios: qué hacemos, cómo es nuestro año y cómo puedes unirte.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>WOŚP Barcelona es un grupo de polacos que viven en Barcelona y alrededores y que, en su tiempo libre, tocan con la Gran Orquesta de la Ayuda Navideña. Organizamos las Finales de WOŚP en la capital catalana y eventos durante todo el año, siempre como <strong>voluntarios</strong>, sin cobrar, por puras ganas de ayudar.</p>
                                <PostFigure src="/images/33-final/DSCF7320.jpg" width={1024} height={683} alt="Voluntarios y participantes de la 33ª Final de WOŚP en Barcelona en una foto de grupo" caption="Nuestro equipo y amigos durante la 33ª Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: '¿Quién forma nuestro equipo?',
                        body: (
                            <div className="space-y-3">
                                <p>Nuestro equipo está formado por voluntarios excepcionales: distintas profesiones, distintas historias, un objetivo común y pasión por la Orquesta. Hay estudiantes, padres con niños, personas que llevan años en Barcelona y otras que acaban de llegar. Cada uno aporta lo que mejor sabe hacer:</p>
                                <ul>
                                    <li><strong>coordinación</strong>: planificar la Final y tratar con la Fundación, los locales y la administración,</li>
                                    <li><strong>voluntarios con hucha</strong>: recaudación durante la Final y los eventos,</li>
                                    <li><strong>cocina</strong>: hacer pierogi, hornear pasteles, la barbacoa y los puestos,</li>
                                    <li><strong>subastas</strong>: reunir objetos, subastas en directo y en internet,</li>
                                    <li><strong>actividades infantiles</strong>: pintacaras, talleres y juegos,</li>
                                    <li><strong>escenario y música</strong>: contacto con los artistas y horario de conciertos,</li>
                                    <li><strong>medios y fotos</strong>: redes sociales, diseño, crónicas fotográficas,</li>
                                    <li><strong>patrocinadores</strong>: colaboración con las empresas que tocan con nosotros.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'No solo en enero',
                        body: (
                            <div className="space-y-3">
                                <p>La Final es el punto culminante, pero trabajamos todo el año. Antes de la 33ª Final organizamos, entre otros, los talleres navideños «Wine and Craft», talleres de fotografía al aire libre, una «Navidad Literaria» con autores polacos, los talleres «Bubbly Craft», la exposición «Arte para WOŚP» y la carrera barcelonesa «Cuenta con la Diabetes». Cada evento es una ocasión para encontrarnos, conocer gente nueva y recaudar fondos extra.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Recuerdos compartidos y colaboración',
                        body: (
                            <div className="space-y-3">
                                <p>Los momentos inolvidables de las Finales, las reuniones de voluntarios y la fuerza de la colaboración construyen nuestra comunidad. Recordamos la primera Final después de la pandemia, cuando por fin pudimos volver a tocar juntos en directo, los pierogi agotados, las emocionantes Luces al Cielo y las subastas récord. Muchas amistades empezaron en el puesto de comida o detrás del escenario.</p>
                                <p>Para muchos de nosotros, el equipo es también un pedacito de Polonia en Barcelona: un lugar donde los recién llegados encuentran amigos, y donde catalanes e invitados de todo el mundo descubren la cultura polaca.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¡Únete a nosotros!',
                        body: (
                            <div className="space-y-3">
                                <p>Buscamos personas de buen corazón: no necesitas experiencia, solo ganas y un poco de tiempo libre. Puedes ayudar solo el día de la Final o implicarte más tiempo. <Link href="/es/contact">Escríbenos</Link> y te contaremos cómo puedes tocar con la Orquesta en Barcelona.</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Qui som: el nostre equip de WOŚP a Barcelona',
                excerpt: 'Qui són les persones que fa anys que organitzen les Finals de WOŚP a Barcelona? Coneix el nostre equip de voluntaris: què fem, com és el nostre any i com t’hi pots unir.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>WOŚP Barcelona és un grup de polonesos que viuen a Barcelona i rodalia i que, en el seu temps lliure, toquen amb la Gran Orquestra de l’Ajuda de Nadal. Organitzem les Finals de WOŚP a la capital catalana i esdeveniments durant tot l’any, sempre com a <strong>voluntaris</strong>, sense cobrar, per pures ganes d’ajudar.</p>
                                <PostFigure src="/images/33-final/DSCF7320.jpg" width={1024} height={683} alt="Voluntaris i participants de la 33a Final de WOŚP a Barcelona en una foto de grup" caption="El nostre equip i amics durant la 33a Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Qui forma el nostre equip?',
                        body: (
                            <div className="space-y-3">
                                <p>El nostre equip està format per voluntaris excepcionals: professions diferents, històries diferents, un objectiu comú i passió per l’Orquestra. Hi ha estudiants, pares i mares amb infants, persones que fa anys que viuen a Barcelona i d’altres que acaben d’arribar. Cadascú aporta el que fa millor:</p>
                                <ul>
                                    <li><strong>coordinació</strong>: planificar la Final i tractar amb la Fundació, els locals i l’administració,</li>
                                    <li><strong>voluntaris amb guardiola</strong>: recaptació durant la Final i els esdeveniments,</li>
                                    <li><strong>cuina</strong>: fer pierogi, coure pastissos, la brasa i les parades,</li>
                                    <li><strong>subhastes</strong>: reunir objectes, subhastes en directe i a internet,</li>
                                    <li><strong>activitats infantils</strong>: pintacares, tallers i jocs,</li>
                                    <li><strong>escenari i música</strong>: contacte amb els artistes i horari dels concerts,</li>
                                    <li><strong>mitjans i fotos</strong>: xarxes socials, disseny, cròniques fotogràfiques,</li>
                                    <li><strong>patrocinadors</strong>: col·laboració amb les empreses que toquen amb nosaltres.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'No només al gener',
                        body: (
                            <div className="space-y-3">
                                <p>La Final és el punt culminant, però treballem tot l’any. Abans de la 33a Final vam organitzar, entre d’altres, els tallers nadalencs «Wine and Craft», tallers de fotografia a l’aire lliure, un «Nadal Literari» amb autors polonesos, els tallers «Bubbly Craft», l’exposició «Art per WOŚP» i la cursa barcelonina «Compta amb la Diabetis». Cada esdeveniment és una ocasió per trobar-nos, conèixer gent nova i recaptar fons extra.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Records compartits i col·laboració',
                        body: (
                            <div className="space-y-3">
                                <p>Els moments inoblidables de les Finals, les trobades de voluntaris i la força de la col·laboració construeixen la nostra comunitat. Recordem la primera Final després de la pandèmia, quan per fi vam poder tornar a tocar junts en directe, els pierogi exhaurits, les emocionants Llums al Cel i les subhastes rècord. Moltes amistats van començar a la parada de menjar o darrere l’escenari.</p>
                                <p>Per a molts de nosaltres, l’equip és també un trosset de Polònia a Barcelona: un lloc on els nouvinguts troben amics, i on catalans i convidats de tot el món descobreixen la cultura polonesa.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Uneix-te a nosaltres!',
                        body: (
                            <div className="space-y-3">
                                <p>Busquem persones de bon cor: no cal experiència, només ganes i una mica de temps lliure. Pots ajudar només el dia de la Final o implicar-t’hi més temps. <Link href="/ca/contact">Escriu-nos</Link> i t’explicarem com pots tocar amb l’Orquestra a Barcelona.</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'o-naszych-wspanialych-sponsorach',
        date: '2025-01-15',
        coverImage: '/images/33-final/DSCF7250.jpg',
        tags: ['33FinałWOŚP', 'Sponsorzy', 'Partnerzy', 'Barcelona'],
        content: {
            pl: {
                title: 'O Naszych Wspaniałych Sponsorach',
                excerpt: 'Bez nich nie byłoby Finału! Poznaj sponsorów, partnerów i współorganizatorów 33. Finału WOŚP w Barcelonie – polskie i katalońskie firmy, które grają razem z nami.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Zorganizowanie Finału WOŚP w Barcelonie to ogromne przedsięwzięcie: sala, scena, nagłośnienie, transport, jedzenie, nagrody do loterii i przedmioty na licytacje. Wszystko to jest możliwe dzięki <strong>sponsorom, partnerom i współorganizatorom</strong>, którzy wspierają nas finansowo, rzeczowo i organizacyjnie. Poznajcie ich!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Sponsorzy i partnerzy 33. Finału',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Moja Katalonia</strong> – polskie biuro podróży w Katalonii, organizujące wycieczki i zwiedzanie regionu.</li>
                                    <li><strong>Wawel RestoBar</strong> – polska restauracja w Barcelonie, mały kawałek Polski z pierogami, zupami i kiełbaskami. To tu często spotykają się nasi wolontariusze.</li>
                                    <li><strong>PolCat</strong> – biuro podróży z niemal 20-letnim doświadczeniem w organizacji wycieczek i transferów.</li>
                                    <li><strong>Delicias by Bea</strong> – polska cukierniczka z dzielnicy Gotyckiej, łącząca rodzinne smaki z nowoczesnym cukiernictwem. Jej stoisko na Finale to obowiązkowy przystanek!</li>
                                    <li><strong>Alira Health</strong> – międzynarodowa firma z branży ochrony zdrowia, która wspiera nasze granie dla zdrowia dzieci.</li>
                                    <li><strong>Tomex Car-Bus</strong> – warsztat samochodowy w Santa Eugènia de Berga: mechanika, elektryka, klimatyzacja i zawieszenia.</li>
                                    <li><strong>World Class Barcelona</strong> – szkoła języka hiszpańskiego w centrum Barcelony, gospodarz wielu naszych warsztatów.</li>
                                    <li><strong>ART-TUR</strong> – firma transportowa łącząca Polskę i Hiszpanię od 1993 roku.</li>
                                    <li><strong>Templo Beauty</strong> – salon przy Ronda del Guinardó, w którym odbył się nasz wernisaż „Sztuka dla WOŚP”.</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Scena 33. Finału WOŚP z logo sponsora ART-TUR na ekranie" caption="Logo naszego sponsora ART-TUR na scenie 33. Finału. Zdjęcie: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Jak wspierają nas firmy?',
                        body: (
                            <div className="space-y-3">
                                <p>Każda forma pomocy ma znaczenie:</p>
                                <ul>
                                    <li><strong>wsparcie finansowe</strong> – pokrycie kosztów organizacji, dzięki czemu cała kwota z puszek trafia do Fundacji,</li>
                                    <li><strong>wsparcie rzeczowe</strong> – jedzenie, napoje, nagrody do loterii, materiały,</li>
                                    <li><strong>przedmioty i usługi na licytacje</strong> – vouchery, kursy, wycieczki,</li>
                                    <li><strong>lokal i logistyka</strong> – miejsce na warsztaty i spotkania, transport.</li>
                                </ul>
                                <p>W zamian sponsorzy pokazują się tysiącom osób w wyjątkowym kontekście – na naszej stronie, w mediach społecznościowych, na plakatach i podczas samego Finału.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Zostań sponsorem!',
                        body: (
                            <div className="space-y-3">
                                <p>Prowadzisz firmę w Barcelonie lub w Polsce i chcesz zagrać z nami? Zajrzyj na stronę <Link href="/pl/sponsors">Sponsorzy</Link> albo <Link href="/pl/contact">napisz do nas</Link> – przygotujemy propozycję współpracy dopasowaną do Ciebie. Wszystkim naszym sponsorom z całego serca dziękujemy! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: 'About Our Wonderful Sponsors',
                excerpt: 'There would be no Finale without them! Meet the sponsors, partners and co-organisers of the 33rd WOŚP Finale in Barcelona – Polish and Catalan businesses that play together with us.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Organising a WOŚP Finale in Barcelona is a huge undertaking: the venue, stage, sound system, transport, food, lottery prizes and auction items. All of it is possible thanks to <strong>sponsors, partners and co-organisers</strong> who support us financially, in kind and organisationally. Meet them!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Sponsors and partners of the 33rd Finale',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Moja Katalonia</strong> – a Polish travel agency in Catalonia, organising trips and sightseeing around the region.</li>
                                    <li><strong>Wawel RestoBar</strong> – a Polish restaurant in Barcelona, a little piece of Poland with pierogi, soups and sausages. Our volunteers often meet here.</li>
                                    <li><strong>PolCat</strong> – a travel agency with almost 20 years of experience in organising trips and transfers.</li>
                                    <li><strong>Delicias by Bea</strong> – a Polish pastry chef in the Gothic Quarter, combining family flavours with modern patisserie. Her stand at the Finale is a must!</li>
                                    <li><strong>Alira Health</strong> – an international healthcare company that supports our playing for children&apos;s health.</li>
                                    <li><strong>Tomex Car-Bus</strong> – a car workshop in Santa Eugènia de Berga: mechanics, electrics, air conditioning and suspension.</li>
                                    <li><strong>World Class Barcelona</strong> – a Spanish language school in central Barcelona and host of many of our workshops.</li>
                                    <li><strong>ART-TUR</strong> – a transport company connecting Poland and Spain since 1993.</li>
                                    <li><strong>Templo Beauty</strong> – a salon on Ronda del Guinardó that hosted our “Art for WOŚP” vernissage.</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Stage of the 33rd WOŚP Finale with the ART-TUR sponsor logo on screen" caption="Our sponsor ART-TUR's logo on the stage of the 33rd Finale. Photo: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'How do businesses support us?',
                        body: (
                            <div className="space-y-3">
                                <p>Every form of help matters:</p>
                                <ul>
                                    <li><strong>financial support</strong> – covering organisational costs, so that everything in the collection boxes goes to the Foundation,</li>
                                    <li><strong>in-kind support</strong> – food, drinks, lottery prizes, materials,</li>
                                    <li><strong>items and services for auctions</strong> – vouchers, courses, trips,</li>
                                    <li><strong>venues and logistics</strong> – space for workshops and meetings, transport.</li>
                                </ul>
                                <p>In return, sponsors are seen by thousands of people in a special context – on our website, on social media, on posters and at the Finale itself.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Become a sponsor!',
                        body: (
                            <div className="space-y-3">
                                <p>Do you run a business in Barcelona or in Poland and want to play with us? Visit our <Link href="/en/sponsors">Sponsors</Link> page or <Link href="/en/contact">write to us</Link> – we will prepare a partnership proposal tailored to you. A heartfelt thank you to all our sponsors! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: 'Sobre nuestros maravillosos patrocinadores',
                excerpt: '¡Sin ellos no habría Final! Conoce a los patrocinadores, socios y coorganizadores de la 33ª Final de WOŚP en Barcelona: empresas polacas y catalanas que tocan con nosotros.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Organizar una Final de WOŚP en Barcelona es un gran reto: el local, el escenario, el sonido, el transporte, la comida, los premios de la lotería y los objetos para subastar. Todo ello es posible gracias a <strong>patrocinadores, socios y coorganizadores</strong> que nos apoyan económicamente, con material y con su organización. ¡Te los presentamos!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Patrocinadores y socios de la 33ª Final',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Moja Katalonia</strong>: agencia de viajes polaca en Cataluña que organiza excursiones y visitas por la región.</li>
                                    <li><strong>Wawel RestoBar</strong>: restaurante polaco en Barcelona, un pedacito de Polonia con pierogi, sopas y salchichas. Aquí se reúnen a menudo nuestros voluntarios.</li>
                                    <li><strong>PolCat</strong>: agencia de viajes con casi 20 años de experiencia en excursiones y traslados.</li>
                                    <li><strong>Delicias by Bea</strong>: pastelera polaca en el Barrio Gótico que combina sabores familiares con pastelería moderna. ¡Su puesto en la Final es parada obligatoria!</li>
                                    <li><strong>Alira Health</strong>: empresa internacional del sector sanitario que apoya nuestra música por la salud infantil.</li>
                                    <li><strong>Tomex Car-Bus</strong>: taller mecánico en Santa Eugènia de Berga: mecánica, electricidad, climatización y suspensiones.</li>
                                    <li><strong>World Class Barcelona</strong>: escuela de español en el centro de Barcelona y sede de muchos de nuestros talleres.</li>
                                    <li><strong>ART-TUR</strong>: empresa de transporte que une Polonia y España desde 1993.</li>
                                    <li><strong>Templo Beauty</strong>: salón en la Ronda del Guinardó donde se celebró nuestra exposición «Arte para WOŚP».</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Escenario de la 33ª Final de WOŚP con el logo del patrocinador ART-TUR en la pantalla" caption="El logo de nuestro patrocinador ART-TUR en el escenario de la 33ª Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: '¿Cómo nos apoyan las empresas?',
                        body: (
                            <div className="space-y-3">
                                <p>Toda ayuda cuenta:</p>
                                <ul>
                                    <li><strong>apoyo económico</strong>: cubre los gastos de organización para que todo lo de las huchas vaya a la Fundación,</li>
                                    <li><strong>apoyo en especie</strong>: comida, bebida, premios de lotería, materiales,</li>
                                    <li><strong>objetos y servicios para subastas</strong>: vales, cursos, excursiones,</li>
                                    <li><strong>local y logística</strong>: espacio para talleres y reuniones, transporte.</li>
                                </ul>
                                <p>A cambio, los patrocinadores llegan a miles de personas en un contexto especial: en nuestra web, en redes sociales, en los carteles y durante la propia Final.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¡Hazte patrocinador!',
                        body: (
                            <div className="space-y-3">
                                <p>¿Tienes una empresa en Barcelona o en Polonia y quieres tocar con nosotros? Visita la página de <Link href="/es/sponsors">Patrocinadores</Link> o <Link href="/es/contact">escríbenos</Link>: te prepararemos una propuesta de colaboración a tu medida. ¡Gracias de corazón a todos nuestros patrocinadores! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Sobre els nostres meravellosos patrocinadors',
                excerpt: 'Sense ells no hi hauria Final! Coneix els patrocinadors, socis i coorganitzadors de la 33a Final de WOŚP a Barcelona: empreses poloneses i catalanes que toquen amb nosaltres.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Organitzar una Final de WOŚP a Barcelona és un gran repte: el local, l’escenari, el so, el transport, el menjar, els premis de la loteria i els objectes per subhastar. Tot això és possible gràcies als <strong>patrocinadors, socis i coorganitzadors</strong> que ens donen suport econòmic, material i organitzatiu. Us els presentem!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Patrocinadors i socis de la 33a Final',
                        body: (
                            <div className="space-y-3">
                                <ul>
                                    <li><strong>Moja Katalonia</strong>: agència de viatges polonesa a Catalunya que organitza excursions i visites per la regió.</li>
                                    <li><strong>Wawel RestoBar</strong>: restaurant polonès a Barcelona, un trosset de Polònia amb pierogi, sopes i salsitxes. Aquí s’hi troben sovint els nostres voluntaris.</li>
                                    <li><strong>PolCat</strong>: agència de viatges amb gairebé 20 anys d’experiència en excursions i trasllats.</li>
                                    <li><strong>Delicias by Bea</strong>: pastissera polonesa al Barri Gòtic que combina sabors familiars amb pastisseria moderna. La seva parada a la Final és parada obligatòria!</li>
                                    <li><strong>Alira Health</strong>: empresa internacional del sector sanitari que dona suport a la nostra música per la salut infantil.</li>
                                    <li><strong>Tomex Car-Bus</strong>: taller mecànic a Santa Eugènia de Berga: mecànica, electricitat, climatització i suspensions.</li>
                                    <li><strong>World Class Barcelona</strong>: escola d’espanyol al centre de Barcelona i seu de molts dels nostres tallers.</li>
                                    <li><strong>ART-TUR</strong>: empresa de transport que uneix Polònia i Espanya des del 1993.</li>
                                    <li><strong>Templo Beauty</strong>: saló a la Ronda del Guinardó on es va fer la nostra exposició «Art per WOŚP».</li>
                                </ul>
                                <PostFigure src="/images/33-final/DSCF7186.jpg" width={1024} height={683} alt="Escenari de la 33a Final de WOŚP amb el logotip del patrocinador ART-TUR a la pantalla" caption="El logotip del nostre patrocinador ART-TUR a l’escenari de la 33a Final. Foto: Hela Staniszewska" />
                            </div>
                        ),
                    },
                    {
                        title: 'Com ens donen suport les empreses?',
                        body: (
                            <div className="space-y-3">
                                <p>Tota ajuda compta:</p>
                                <ul>
                                    <li><strong>suport econòmic</strong>: cobreix les despeses d’organització perquè tot el de les guardioles vagi a la Fundació,</li>
                                    <li><strong>suport en espècie</strong>: menjar, beguda, premis de loteria, materials,</li>
                                    <li><strong>objectes i serveis per a subhastes</strong>: vals, cursos, excursions,</li>
                                    <li><strong>local i logística</strong>: espai per a tallers i trobades, transport.</li>
                                </ul>
                                <p>A canvi, els patrocinadors arriben a milers de persones en un context especial: al nostre web, a les xarxes socials, als cartells i durant la mateixa Final.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Fes-te patrocinador!',
                        body: (
                            <div className="space-y-3">
                                <p>Tens una empresa a Barcelona o a Polònia i vols tocar amb nosaltres? Visita la pàgina de <Link href="/ca/sponsors">Patrocinadors</Link> o <Link href="/ca/contact">escriu-nos</Link>: et prepararem una proposta de col·laboració a mida. Gràcies de tot cor a tots els nostres patrocinadors! ❤️</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
    {
        slug: 'bieg-policz-sie-z-cukrzyca-dolacz-do-nas',
        date: '2024-12-30',
        coverImage: '/images/pictures/pexels-valdemaras-d-784301-1874675.jpg',
        tags: ['BiegWOŚP', 'PoliczSięZCukrzycą', 'Barcelona', 'HotelW'],
        content: {
            pl: {
                title: 'Bieg „Policz się z cukrzycą” – dołącz do nas!',
                excerpt: '19 stycznia 2025 biegniemy 5 km spod Sagrady Familii pod Hotel W! Dołącz do 19. Biegu „Policz się z cukrzycą” w Barcelonie – biegiem, spacerem, na rolkach albo rowerze. Sprawdź, jak się zapisać i zdobyć koszulkę.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Biegasz, spacerujesz, jeździsz na rolkach albo rowerze? Mamy dla Ciebie wydarzenie! <strong>19 stycznia 2025</strong> odbędzie się barcelońska edycja <strong>19. Biegu WOŚP „Policz się z cukrzycą”</strong> – i to z widokiem na morze na mecie.</p>
                                <ul>
                                    <li><strong>Data:</strong> niedziela, 19 stycznia 2025</li>
                                    <li><strong>Start:</strong> 10:30, zbiórka pod Sagradą Familią</li>
                                    <li><strong>Meta:</strong> Hotel W Barcelona</li>
                                    <li><strong>Dystans:</strong> 5 km</li>
                                </ul>
                                <PostFigure src="/images/pictures/pexels-valdemaras-d-784301-1874675.jpg" width={2322} height={2322} alt="Hotel W Barcelona nad morzem – meta biegu" caption="Hotel W Barcelona – tu czeka na Was meta i pamiątkowe medale." className="max-w-md mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'O co chodzi w tym biegu?',
                        body: (
                            <div className="space-y-3">
                                <p>Bieg „Policz się z cukrzycą” to jedna z najstarszych akcji towarzyszących Finałom WOŚP. Odbywa się w wielu miastach w Polsce i na świecie, a jego celem jest przypominanie o profilaktyce cukrzycy i o tym, jak ważny jest ruch. Fundacja WOŚP od lat prowadzi też program, dzięki któremu dzieci i kobiety w ciąży chore na cukrzycę mogą korzystać z osobistych pomp insulinowych.</p>
                                <p>Dla nas to przede wszystkim świetna okazja, żeby się spotkać, poruszać i pokazać, że Barcelona gra z Orkiestrą!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Jak to się zaczęło w Barcelonie?',
                        body: (
                            <div className="space-y-3">
                                <p>Barcelońska edycja biegu wystartowała w 2021 roku, podczas 29. Finału WOŚP. Zaczynaliśmy w małym gronie – z roku na rok jest nas coraz więcej, a trasa między Sagradą Familią a plażą stała się już naszą tradycją.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Jak się zapisać?',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Zarejestruj się na Slotmarket na <strong>bieg wirtualny</strong>: <a href="https://slotmarket.pl/event/details/645/preview" target="_blank" rel="noopener noreferrer">slotmarket.pl/event/details/645/preview</a>.</li>
                                    <li>Jako adres wysyłki podaj adres Fundacji WOŚP: Dominikańska 19C, 02-738 Warszawa.</li>
                                    <li>Przy wyborze rozmiaru koszulki w polu „Klub” wpisz: <strong>Barcelona</strong>.</li>
                                    <li>Wybierz przesyłkę krajową (do Polski).</li>
                                    <li>Potwierdzenie rejestracji z imieniem, nazwiskiem i rozmiarem koszulki wyślij na adres <strong>biegwospbarcelona@gmail.com</strong>.</li>
                                </ol>
                                <p><strong>Koszt:</strong> 85 zł. Rejestracja do <strong>5 stycznia 2025</strong> gwarantuje koszulkę 19. Biegu i darmową przesyłkę – koszulki przywieziemy do Barcelony. Później zapisy nadal są możliwe (aż do 19 stycznia i podczas zbiórki), ale już bez gwarancji koszulki.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Medale i nagrody',
                        body: (
                            <div className="space-y-3">
                                <p>Na mecie <strong>każdy uczestnik otrzyma pamiątkowy medal</strong>, a dla najlepszych przewidzieliśmy atrakcyjne nagrody. Nie musisz jednak biec na czas – liczy się wspólna zabawa! Możesz pokonać trasę spacerem, w spokojnym truchcie, na rolkach czy rowerze.</p>
                                <p>Masz pytania? Napisz na <strong>biegwospbarcelona@gmail.com</strong> albo do nas przez <Link href="/pl/contact">formularz kontaktowy</Link>. Do zobaczenia na starcie!</p>
                            </div>
                        ),
                    },
                ],
            },
            en: {
                title: '“Count on Diabetes” Run – join us!',
                excerpt: 'On 19 January 2025 we run 5 km from the Sagrada Família to Hotel W! Join the 19th “Count on Diabetes” Run in Barcelona – running, walking, on rollerblades or by bike. Here is how to sign up and get your T-shirt.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Do you run, walk, rollerblade or cycle? We have an event for you! On <strong>19 January 2025</strong> the Barcelona edition of the <strong>19th WOŚP “Count on Diabetes” Run</strong> takes place – with a sea view at the finish line.</p>
                                <ul>
                                    <li><strong>Date:</strong> Sunday, 19 January 2025</li>
                                    <li><strong>Start:</strong> 10:30, meeting point at the Sagrada Família</li>
                                    <li><strong>Finish:</strong> Hotel W Barcelona</li>
                                    <li><strong>Distance:</strong> 5 km</li>
                                </ul>
                                <PostFigure src="/images/pictures/pexels-valdemaras-d-784301-1874675.jpg" width={2322} height={2322} alt="Hotel W Barcelona by the sea – the finish line of the run" caption="Hotel W Barcelona – the finish line and your medals await you here." className="max-w-md mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'What is this run about?',
                        body: (
                            <div className="space-y-3">
                                <p>The “Count on Diabetes” Run (Policz się z cukrzycą) is one of the longest-running events accompanying the WOŚP Finales. It takes place in many cities in Poland and around the world, and its aim is to raise awareness of diabetes prevention and the importance of physical activity. For years the WOŚP Foundation has also run a programme that gives children and pregnant women with diabetes access to personal insulin pumps.</p>
                                <p>For us it is above all a great chance to meet, get moving and show that Barcelona plays with the Orchestra!</p>
                            </div>
                        ),
                    },
                    {
                        title: 'How did it start in Barcelona?',
                        body: (
                            <div className="space-y-3">
                                <p>The Barcelona edition started in 2021, during the 29th WOŚP Finale. We began as a small group – every year there are more of us, and the route between the Sagrada Família and the beach has become our tradition.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'How to sign up?',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Register on Slotmarket for the <strong>virtual run</strong>: <a href="https://slotmarket.pl/event/details/645/preview" target="_blank" rel="noopener noreferrer">slotmarket.pl/event/details/645/preview</a>.</li>
                                    <li>As the shipping address, enter the WOŚP Foundation&apos;s address: Dominikańska 19C, 02-738 Warszawa.</li>
                                    <li>When choosing your T-shirt size, type <strong>Barcelona</strong> in the “Klub” (club) field.</li>
                                    <li>Choose domestic shipping (within Poland).</li>
                                    <li>Send your registration confirmation with your name and T-shirt size to <strong>biegwospbarcelona@gmail.com</strong>.</li>
                                </ol>
                                <p><strong>Cost:</strong> 85 PLN. Registering by <strong>5 January 2025</strong> guarantees a 19th Run T-shirt and free shipping – we will bring the T-shirts to Barcelona. After that you can still sign up (until 19 January and at the meeting point), but without a guaranteed T-shirt.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Medals and prizes',
                        body: (
                            <div className="space-y-3">
                                <p>At the finish line <strong>every participant will receive a commemorative medal</strong>, and there are great prizes for the best. But you don&apos;t have to race – it&apos;s all about having fun together! You can walk, jog, rollerblade or cycle the route.</p>
                                <p>Questions? Email <strong>biegwospbarcelona@gmail.com</strong> or use our <Link href="/en/contact">contact form</Link>. See you at the start!</p>
                            </div>
                        ),
                    },
                ],
            },
            es: {
                title: 'Carrera «Cuenta con la Diabetes»: ¡únete a nosotros!',
                excerpt: 'El 19 de enero de 2025 corremos 5 km desde la Sagrada Família hasta el Hotel W. Únete a la 19ª Carrera «Cuenta con la Diabetes» en Barcelona: corriendo, caminando, en patines o en bici. Te contamos cómo inscribirte y conseguir la camiseta.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>¿Corres, caminas, patinas o vas en bici? ¡Tenemos un evento para ti! El <strong>19 de enero de 2025</strong> se celebra la edición barcelonesa de la <strong>19ª Carrera de WOŚP «Cuenta con la Diabetes»</strong>, con vistas al mar en la meta.</p>
                                <ul>
                                    <li><strong>Fecha:</strong> domingo, 19 de enero de 2025</li>
                                    <li><strong>Salida:</strong> 10:30, punto de encuentro en la Sagrada Família</li>
                                    <li><strong>Meta:</strong> Hotel W Barcelona</li>
                                    <li><strong>Distancia:</strong> 5 km</li>
                                </ul>
                                <PostFigure src="/images/pictures/pexels-valdemaras-d-784301-1874675.jpg" width={2322} height={2322} alt="El Hotel W Barcelona junto al mar, meta de la carrera" caption="Hotel W Barcelona: aquí te esperan la meta y las medallas." className="max-w-md mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: '¿De qué trata esta carrera?',
                        body: (
                            <div className="space-y-3">
                                <p>La carrera «Cuenta con la Diabetes» (Policz się z cukrzycą) es una de las acciones más veteranas que acompañan a las Finales de WOŚP. Se celebra en muchas ciudades de Polonia y del mundo, y su objetivo es concienciar sobre la prevención de la diabetes y la importancia del ejercicio. Además, desde hace años la Fundación WOŚP mantiene un programa gracias al cual niños y embarazadas con diabetes pueden usar bombas de insulina personales.</p>
                                <p>Para nosotros es, sobre todo, una gran ocasión para encontrarnos, movernos y demostrar que Barcelona toca con la Orquesta.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Cómo empezó en Barcelona?',
                        body: (
                            <div className="space-y-3">
                                <p>La edición barcelonesa empezó en 2021, durante la 29ª Final de WOŚP. Empezamos siendo un grupo pequeño; cada año somos más, y el recorrido entre la Sagrada Família y la playa ya se ha convertido en nuestra tradición.</p>
                            </div>
                        ),
                    },
                    {
                        title: '¿Cómo inscribirse?',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Regístrate en Slotmarket en la <strong>carrera virtual</strong>: <a href="https://slotmarket.pl/event/details/645/preview" target="_blank" rel="noopener noreferrer">slotmarket.pl/event/details/645/preview</a>.</li>
                                    <li>Como dirección de envío, indica la de la Fundación WOŚP: Dominikańska 19C, 02-738 Varsovia.</li>
                                    <li>Al elegir la talla de la camiseta, escribe <strong>Barcelona</strong> en el campo «Klub» (club).</li>
                                    <li>Elige envío nacional (dentro de Polonia).</li>
                                    <li>Envía la confirmación de inscripción con tu nombre, apellidos y talla a <strong>biegwospbarcelona@gmail.com</strong>.</li>
                                </ol>
                                <p><strong>Precio:</strong> 85 zlotys. Inscribirse antes del <strong>5 de enero de 2025</strong> garantiza la camiseta de la 19ª Carrera y el envío gratuito: traeremos las camisetas a Barcelona. Después aún podrás inscribirte (hasta el 19 de enero y en el punto de encuentro), pero sin camiseta garantizada.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Medallas y premios',
                        body: (
                            <div className="space-y-3">
                                <p>En la meta <strong>cada participante recibirá una medalla conmemorativa</strong>, y habrá premios para los mejores. Pero no hace falta competir: ¡lo importante es divertirse juntos! Puedes hacer el recorrido caminando, trotando, en patines o en bici.</p>
                                <p>¿Tienes preguntas? Escribe a <strong>biegwospbarcelona@gmail.com</strong> o usa nuestro <Link href="/es/contact">formulario de contacto</Link>. ¡Nos vemos en la salida!</p>
                            </div>
                        ),
                    },
                ],
            },
            ca: {
                title: 'Cursa «Compta amb la Diabetis»: uneix-te a nosaltres!',
                excerpt: 'El 19 de gener de 2025 correm 5 km des de la Sagrada Família fins a l’Hotel W. Uneix-te a la 19a Cursa «Compta amb la Diabetis» a Barcelona: corrent, caminant, amb patins o en bici. T’expliquem com inscriure’t i aconseguir la samarreta.',
                sections: [
                    {
                        body: (
                            <div className="space-y-3">
                                <p>Corres, camines, patines o vas en bici? Tenim un esdeveniment per a tu! El <strong>19 de gener de 2025</strong> se celebra l’edició barcelonina de la <strong>19a Cursa de WOŚP «Compta amb la Diabetis»</strong>, amb vistes al mar a la meta.</p>
                                <ul>
                                    <li><strong>Data:</strong> diumenge, 19 de gener de 2025</li>
                                    <li><strong>Sortida:</strong> 10:30, punt de trobada a la Sagrada Família</li>
                                    <li><strong>Meta:</strong> Hotel W Barcelona</li>
                                    <li><strong>Distància:</strong> 5 km</li>
                                </ul>
                                <PostFigure src="/images/pictures/pexels-valdemaras-d-784301-1874675.jpg" width={2322} height={2322} alt="L’Hotel W Barcelona vora el mar, meta de la cursa" caption="Hotel W Barcelona: aquí t’esperen la meta i les medalles." className="max-w-md mx-auto" />
                            </div>
                        ),
                    },
                    {
                        title: 'De què va aquesta cursa?',
                        body: (
                            <div className="space-y-3">
                                <p>La cursa «Compta amb la Diabetis» (Policz się z cukrzycą) és una de les accions més veteranes que acompanyen les Finals de WOŚP. Se celebra a moltes ciutats de Polònia i del món, i el seu objectiu és conscienciar sobre la prevenció de la diabetis i la importància de l’exercici. A més, des de fa anys la Fundació WOŚP manté un programa gràcies al qual infants i embarassades amb diabetis poden fer servir bombes d’insulina personals.</p>
                                <p>Per a nosaltres és, sobretot, una gran ocasió per trobar-nos, moure’ns i demostrar que Barcelona toca amb l’Orquestra.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Com va començar a Barcelona?',
                        body: (
                            <div className="space-y-3">
                                <p>L’edició barcelonina va començar el 2021, durant la 29a Final de WOŚP. Vam començar sent un grup petit; cada any som més, i el recorregut entre la Sagrada Família i la platja ja s’ha convertit en la nostra tradició.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Com inscriure’s?',
                        body: (
                            <div className="space-y-3">
                                <ol>
                                    <li>Registra’t a Slotmarket a la <strong>cursa virtual</strong>: <a href="https://slotmarket.pl/event/details/645/preview" target="_blank" rel="noopener noreferrer">slotmarket.pl/event/details/645/preview</a>.</li>
                                    <li>Com a adreça d’enviament, indica la de la Fundació WOŚP: Dominikańska 19C, 02-738 Varsòvia.</li>
                                    <li>En triar la talla de la samarreta, escriu <strong>Barcelona</strong> al camp «Klub» (club).</li>
                                    <li>Tria l’enviament nacional (dins de Polònia).</li>
                                    <li>Envia la confirmació d’inscripció amb el teu nom, cognoms i talla a <strong>biegwospbarcelona@gmail.com</strong>.</li>
                                </ol>
                                <p><strong>Preu:</strong> 85 zlotys. Inscriure’s abans del <strong>5 de gener de 2025</strong> garanteix la samarreta de la 19a Cursa i l’enviament gratuït: portarem les samarretes a Barcelona. Després encara t’hi podràs inscriure (fins al 19 de gener i al punt de trobada), però sense samarreta garantida.</p>
                            </div>
                        ),
                    },
                    {
                        title: 'Medalles i premis',
                        body: (
                            <div className="space-y-3">
                                <p>A la meta <strong>cada participant rebrà una medalla commemorativa</strong>, i hi haurà premis per als millors. Però no cal competir: el més important és divertir-nos junts! Pots fer el recorregut caminant, trotant, amb patins o en bici.</p>
                                <p>Tens preguntes? Escriu a <strong>biegwospbarcelona@gmail.com</strong> o fes servir el nostre <Link href="/ca/contact">formulari de contacte</Link>. Ens veiem a la sortida!</p>
                            </div>
                        ),
                    },
                ],
            },
        },
    },
];

// Helper function to get post by slug and locale
// All posts, newest first
export const blogPostsI18n: BlogPostI18n[] = [...basePostsI18n, ...newsPostsI18n].sort((a, b) => b.date.localeCompare(a.date));

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
