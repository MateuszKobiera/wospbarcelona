import React from 'react';
import Image from 'next/image';

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
    tags?: string[];
    social?: {
        facebook?: string;
        instagram?: string;
        meetup?: string;
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
        slug: 'tak-wygladal-33-final-wosp-w-barcelonie',
        date: '2025-02-04',
        coverImage: '/images/blog/33-final/33-Final.png',
        tags: ['33FinałWOŚP', 'Barcelona', 'Licytacje', 'WOŚPBarcelona'],
        social: {
            facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
            instagram: 'https://www.instagram.com/wospbarcelona/',
            meetup: 'https://www.meetup.com/wo%C5%9Bp-barcelona/',
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
            tags: post.tags,
            social: post.social,
            title: content.title,
            excerpt: content.excerpt,
        };
    });
}
