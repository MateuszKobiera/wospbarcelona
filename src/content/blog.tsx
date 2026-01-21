import React from 'react';
import Image from 'next/image';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  social?: {
    facebook?: string;
    instagram?: string;
  };
  sourceUrl?: string;
  sections: Array<{
    title?: string;
    body: React.ReactNode;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'zapraszamy-na-34-final-wosp-w-barcelonie',
    title: 'Zapraszamy na 34. Finał WOŚP w Barcelonie – 25 stycznia 2026!',
    date: '2026-01-21',
    excerpt:
      'Już 25 stycznia 2026 roku zapraszamy na 34. Finał WOŚP w Barcelonie! Dzień pełen warsztatów, koncertów, quizów, licytacji i dobrej zabawy. Gramy dla zdrowych brzuszków polskich dzieci!',
    coverImage:
      '/images/34-final/ZDJECIE_W_TLE (1).jpg',
    tags: ['34FinałWOŚP', 'Barcelona', 'Espacio88', 'WOŚPBarcelona', 'Finał2026'],
    social: {
      facebook: 'https://www.facebook.com/events/722563890373111',
    },
    sourceUrl: undefined,
    sections: [
      {
        body: (
          <div className="space-y-4">
            <div
              className="relative rounded-lg overflow-hidden p-4 md:p-6 text-white shadow-lg"
              style={{
                backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.95) 0%, rgba(239, 68, 68, 0.90) 50%, rgba(251, 146, 60, 0.85) 100%), url('/images/34-final/ZDJECIE_W_TLE (1).jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">🎉 A MY, POLACY! – 34. Finał WOŚP w Barcelonie</h3>
              <ul className="list-disc pl-6 space-y-2 text-white">
                <li>
                  <strong>Data:</strong> 25 stycznia 2026 (sobota)
                </li>
                <li>
                  <strong>Godziny:</strong> 11:00 - 20:00
                </li>
                <li>
                  <strong>Miejsce:</strong> Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona
                </li>
                <li>
                  <strong>Cel:</strong> Choroby przewodu pokarmowego u dzieci – "Zdrowe brzuszki naszych dzieci"
                </li>
              </ul>
            </div>
            <p>
              Serdecznie zapraszamy na 34. Finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie! To będzie wyjątkowy dzień pełen muzyki, warsztatów, licytacji, quizów i wspólnej zabawy. Razem zagramy dla zdrowych brzuszków polskich dzieci!
            </p>
          </div>
        ),
      },
      {
        title: 'Harmonogram dnia',
        body: (
          <div className="space-y-4">
            <Image
              src="/images/plakaty/PL-Harmonogram-2026.png"
              alt="Harmonogram 34. Finału WOŚP w Barcelonie"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-lg shadow-md"
              priority={true}
            />
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
      {
        title: 'Co dla Was przygotowaliśmy?',
        body: (
          <div className="space-y-4">
            <Image
              src="/images/plakaty/PL-Ogolny-2026.png"
              alt="Plakat 34. Finału WOŚP w Barcelonie"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-lg shadow-md"
              priority={false}
            />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h4 className="font-bold text-lg mb-2 text-red-700">🎪 Dla dzieci</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Warsztaty i gra miejska (Kosmo HisPLano)</li>
                  <li>Bańki mydlane w parku</li>
                  <li>Tatuaże</li>
                  <li>Bransoletki, mydełka</li>
                  <li>Symulator jazdy</li>
                  <li>Malowanie twarzy</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                <h4 className="font-bold text-lg mb-2 text-orange-700">🍽️ Gastronomia</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Polska kiełbasa</li>
                  <li>Pierogi</li>
                  <li>Ciasta, pierogi</li>
                  <li>Sałatki</li>
                  <li>Napoje</li>
                  <li>Tort (Delicias by Bea)</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h4 className="font-bold text-lg mb-2 text-blue-700">📚 Kultura</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Panel literacki (Marta Cybulska, Agnieszka Łukomska, Agnieszka Wolińska-Skuza)</li>
                  <li>Licytacje książek</li>
                  <li>Kiermasz książek</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <h4 className="font-bold text-lg mb-2 text-purple-700">🎮 Rozrywka</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Quiz Polacy vs Hiszpanie</li>
                  <li>Bingo Muzyczne</li>
                  <li>Loteria</li>
                  <li>WOŚP-oliada</li>
                  <li>Licytacje gadżetów WOŚP</li>
                  <li>Turniej ping-ponga</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Plakaty w innych językach',
        body: (
          <div className="space-y-4">
            <p>Przygotowaliśmy plakaty również w innych językach, aby każdy mógł poczuć się zaproszony!</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-2">🇬🇧 English</h5>
                <Image
                  src="/images/plakaty/EN-Ogolny-2026.png"
                  alt="34th WOŚP Finale in Barcelona - English poster"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={false}
                />
              </div>
              <div>
                <h5 className="font-semibold mb-2">🇪🇸 Español</h5>
                <Image
                  src="/images/plakaty/ES-Ogolny-2026.png"
                  alt="34º Final WOŚP en Barcelona - Cartel en español"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={false}
                />
              </div>
              <div>
                <h5 className="font-semibold mb-2">🏴 Català</h5>
                <Image
                  src="/images/plakaty/CAT-Ogolny-2026.png"
                  alt="34è Final WOŚP a Barcelona - Cartell en català"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={false}
                />
              </div>
              <div>
                <h5 className="font-semibold mb-2">🇬🇧 English - Schedule</h5>
                <Image
                  src="/images/plakaty/EN-Harmonogram-2026.png"
                  alt="34th WOŚP Finale Schedule"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Dlaczego warto przyjść?',
        body: (
          <div className="space-y-3">
            <p>
              34. Finał WOŚP w Barcelonie to nie tylko zbiórka pieniędzy – to przede wszystkim <strong>wspólnota</strong>, <strong>integracja</strong> i <strong>radość</strong> z pomagania. To miejsce, gdzie spotykają się Polacy, Hiszpanie i międzynarodowa społeczność, aby razem grać dla zdrowych brzuszków polskich dzieci.
            </p>
            <p>
              Podczas finału promujemy polską kulturę, język, twórców i tradycje – tworząc przestrzeń, gdzie każdy może poczuć się jak w domu. To dzień pełen pozytywnej energii, muzyki, smacznego jedzenia i niezapomnianych chwil!
            </p>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-100 mt-4">
              <h4 className="font-bold text-xl mb-3 text-red-700">❤️ Cel 34. Finału WOŚP</h4>
              <p className="text-gray-800">
                Zbieramy środki na wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u dzieci – aby najmłodsi pacjenci w Polsce mogli korzystać z najnowocześniejszego sprzętu medycznego (endoskopy pediatryczne, systemy obrazowania, sprzęt do badań czynnościowych) i lepszej opieki medycznej.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Jak do nas dołączyć?',
        body: (
          <div className="space-y-4">
            <p>
              Przyjdź 25 stycznia 2026 roku do <strong>Espacio 88</strong> (Carrer de Pamplona 88, Sant Martí, Barcelona) między godziną <strong>11:00 a 20:00</strong>. Wstęp jest darmowy!
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/events/722563890373111"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-red-600 text-white hover:bg-red-700 shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
              >
                Wydarzenie na Facebook
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Śledź nasze social media, aby być na bieżąco z aktualnościami dotyczącymi finału!
            </p>
          </div>
        ),
      },
      {
        body: (
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Do zobaczenia 25 stycznia!</h3>
            <p className="text-lg">Razem zagramy dla zdrowych brzuszków polskich dzieci! ❤️</p>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'tak-wygladal-33-final-wosp-w-barcelonie',
    title: 'Tak wyglądał 33. Finał WOŚP w Barcelonie [Zdjęcia]',
    date: '2025-02-04',
    excerpt:
      '33. Finał WOŚP w Barcelonie pełen emocji! Zebrano 9516,91€, a aukcje Allegro nadal trwają. Muzyka, licytacje, pyszne jedzenie – zobacz relację i zdjęcia!',
    coverImage:
      '/images/blog/33-final/33-Final.png',
    tags: ['33FinałWOŚP', 'Barcelona', 'Licytacje', 'WOŚPBarcelona'],
    social: {
      facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
      instagram: 'https://www.instagram.com/wospbarcelona/',
    },
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/02/04/tak-wygladal-33-final-wosp-w-barcelonie/',
    sections: [
      {
        body: (
          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 border border-red-100 p-4 md:p-6 text-gray-900">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>33. Finał WOŚP w Barcelonie</strong> był niezwykle udanym wydarzeniem, pełnym muzyki, emocji i wspólnej chęci niesienia pomocy.
                </li>
                <li>
                  Do tej pory udało się zebrać <strong>9516,91 euro</strong> ze sprzedaży produktów podczas finału, z wydarzeń towarzyszących oraz z zakończonych już licytacji, ale to jeszcze nie koniec.
                </li>
                <li>
                  Wciąż trwają <a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">aukcje na Allegro</a>, które potrwają do <strong>10 lutego</strong>, a ich dotychczasowy wynik to już ponad <strong>3000 euro</strong>.
                </li>
                <li>
                  Dziękujemy wszystkim za wsparcie i zapraszamy do dalszego udziału w licytacjach, aby jeszcze bardziej zwiększyć tę niesamowitą kwotę!
                </li>
              </ul>
            </div>
            <p>
              26 stycznia 2025 roku w Barcelonie odbył się 33. Finał Wielkiej Orkiestry Świątecznej Pomocy. W przestrzeni Nau Bostik, od rana do wieczora, tętniła pozytywna energia, muzyka i wspólna chęć pomocy. Był to dzień pełen emocji, niesamowitych atrakcji i niezapomnianych chwil, które z pewnością zostaną na długo w naszej pamięci.
            </p>
            <Image
              src="/images/blog/33-final/DSCF7250.jpg"
              alt="Puszka WOŚP i hiszpański znak WOŚP"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
            <div className="text-xs text-gray-500">Puszka 33. Finału WOŚP i hiszpański znak WOŚP. Zdjęcia: Hela Staniszewska</div>
          </div>
        ),
      },
      {
        title: 'Rozpoczęcie Finału',
        body: (
          <div className="space-y-3">
            <p>
              Już o godzinie 10:30 pierwsi uczestnicy zaczęli gromadzić się w Nau Bostik, gdzie czekała na nich moc atrakcji. Oficjalne otwarcie wydarzenia przywitało licznych wolontariuszy, sponsorów i wszystkich tych, którzy przybyli, by wesprzeć szczytny cel.
            </p>
            <Image
              src="/images/blog/33-final/DSCF7186.jpg"
              alt="Marcin Bury na scenie w Nau Bostik"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
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
            <Image
              src="/images/blog/33-final/DSCF7339.jpg"
              alt="Scena i publiczność podczas koncertów WOŚP"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
          </div>
        ),
      },
      {
        body: (
          <div className="space-y-2">
            <Image
              src="/images/blog/33-final/DSCF7189.jpg"
              alt="Licytacja obrazu Darii Stróżyk; prowadzący Krzysztof Monastyrski"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
            <div className="text-xs text-gray-500">Licytacja obrazu Darii Stróżyk. Krzysztof Monastyrski po lewej. Aneta Grabowska po prawej. Wolontariuszka Dominika w środku. Zdjęcia Hela Staniszewska</div>
          </div>
        ),
      },
      {
        title: 'Licytacje i wielkie emocje',
        body: (
          <p>
            Podczas Finału odbyły się cztery sesje licytacji, które cieszyły się ogromnym zainteresowaniem. Na aukcjach można było zdobyć m.in. unikalne dzieła sztuki, gadżety WOŚP, vouchery na usługi oraz pamiątki z autografami znanych osobistości. Największe emocje wzbudziła licytacja złotego serduszka Jakuba Rajchelta, które zostało wylicytowane za rekordową sumę! Równie ekscytująca była licytacja książki oraz jednocześnie prowadzącego licytację Krzysztofa Monastyrskiego, która dostarczyła mnóstwo emocji i wywołała zaciekłą walkę o najwyższą ofertę!
          </p>
        ),
      },
      {
        body: (
          <div className="space-y-2">
            <Image
              src="/images/blog/33-final/DSCF7368.jpg"
              alt="Animacje dla dzieci MiniPL"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
            <div className="text-xs text-gray-500">Animacje dla dzieci MiniPL. Zdjęcia: Hela Staniszewska</div>
          </div>
        ),
      },
      {
        title: 'Atrakcje dla każdego',
        body: (
          <div className="space-y-3">
            <p>
              W jasnej sali można było podziwiać wystawę sztuki, z której dzieła trafiły na licytację. Nie zabrakło również strefy kulinarnej, gdzie można było spróbować domowych pierogów, grillowanej kiełbasy, pajdy ze smalcem oraz pysznych polskich ciast. W tym roku pierogi się nie skończyły i dzięki ciężkiej pracy naszych wolontariuszy jedzenia było do samego końca!
            </p>
            <Image
              src="/images/blog/33-final/DSCF7339.jpg"
              alt="Stoisko Delicious by Bea"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
            <div className="text-xs text-gray-500">Stoisko Delicious by Bea. Zdjęcia: Hela Staniszewska</div>
            <p>
              Dodatkowo, nasza wspaniała sponsorka <strong>Delicious by Bea</strong> wyprzedała wszystkie swoje wypieki! Jesteśmy ogromnie wdzięczni za jej wsparcie oraz za wkład wszystkich sponsorów, dzięki którym to wydarzenie mogło się odbyć. Więcej informacji o naszych sponsorach można znaleźć klikając przycisk poniżej.
            </p>
            <a
              href="https://wospbarcelona.org/index.php/sponsorzy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
            >
              Poznaj naszych sponsorów!
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <p>
              Dla najmłodszych przygotowano malowanie twarzy, robienie tatuaży z logiem WOŚP, a nawet robienie bransoletek i bardzo się cieszymy jak stoisko naszych wolontariuszek cieszyło się ogromnym zainteresowaniem!
            </p>
            <Image
              src="/images/blog/33-final/DSCF7205.jpg"
              alt="Wolontariusze Marcin, Mateusz, Patrycja"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
              priority={false}
            />
            <div className="text-xs text-gray-500">Wolontariusze Marcin, Mateusz, Patrycja. Zdjęcia: Hela Staniszewska</div>
          </div>
        ),
      },
      {
        title: 'Klimatyczny bar i polskie smaki',
        body: (
          <p>
            W strefie barowej można było spróbować polskich piw kraftowych, grzańca, win oraz soków. Dostępne były również kolekcjonerskie kubki WOŚP, które wielu uczestników zabrało na pamiątkę.
          </p>
        ),
      },
      {
        title: 'Światełko do nieba',
        body: (
          <p>
            Kulminacyjnym momentem wydarzenia było tradycyjne <strong>Światełko do nieba</strong> o godzinie 19:30. Setki uczestników zgromadziło się, by wspólnie wysłać w niebo symboliczne światełka, które rozświetliły barcelońskie niebo. Był to moment pełen wzruszenia i radości.
          </p>
        ),
      },
      {
        body: (
          <p>
            Finał zakończył się o godzinie 20:00, ale emocje i pozytywna energia pozostały na długo. Cały dochód z wydarzenia został przeznaczony na wsparcie <strong>onkologii i hematologii dziecięcej</strong>.
          </p>
        ),
      },
      {
        title: 'Zabrana kwota',
        body: (
          <p>
            Do tej pory, podczas 33. Finału WOŚP w Barcelonie oraz wydarzeń towarzyszących i licytacji, udało się zebrać <strong>9516,91 euro</strong>, ale to jeszcze nie koniec! Nadal trwają licytacje na Allegro, które potrwają do <strong>10 lutego</strong>. Już teraz, dzięki aukcjom internetowym, zebrano ponad <strong>3000 euro</strong>, a kwota wciąż rośnie!
          </p>
        ),
      },
      {
        title: 'Aukcje Allegro',
        body: (
          <div className="space-y-3">
            <p>
              Na licytacjach można znaleźć wiele ciekawych przedmiotów, takich jak <strong>gadżety WOŚP</strong>, kurs językowy, sesja zdjęciowa, a nawet wycieczka do Montserrat i po Barcelonie. Zapraszamy do udziału: <a href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">Aukcje Allegro WOŚP Barcelona</a>.
            </p>
            <a
              href="https://allegro.pl/uzytkownik/Barcelona_WOSP/wyjatkowe-chwile-301130"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
            >
              Licytuj teraz
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        ),
      },
      {
        body: (
          <div className="space-y-3">
            <p>
              Więcej zdjęć z wydarzenia można obejrzeć na stronie fotografki <strong>Heleny Staniszewskiej</strong>.
            </p>
            <a
              href="https://helena-staniszewska.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
            >
              Zobacz galerię zdjęć
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        ),
      },
      {
        body: (
          <>
            <p>
              Dziękujemy wszystkim uczestnikom, wolontariuszom, artystom oraz sponsorom, którzy wsparli to wspaniałe wydarzenie. Razem pokazaliśmy, że siła dobra nie zna granic!
            </p>
            <p>Do zobaczenia za rok na 34. Finale WOŚP w Barcelonie! ❤️</p>
          </>
        ),
      },
    ],
  },
  {
    slug: '33-final-wosp-w-barcelonie-muzyka-licytacje-i-pomoc',
    title: '33. Finał WOŚP w Barcelonie – Muzyka, Licytacje i Pomoc w Jednym Miejscu!',
    date: '2025-01-26',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/26/33-final-wosp-w-barcelonie-muzyka-licytacje-i-pomoc-w-jednym-miejscu/',
    sections: [
      {
        title: 'Co dla Was przygotowaliśmy?',
        body: (
          <>
            <p>Pierwsza, jasna sala:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Wystawa sztuki na licytację</li>
              <li>Kulinaria: domowe ciasta, pierogi, grill, sałatki, kawa</li>
              <li>Loteria – każdy los wygrywa</li>
              <li>Malowanie twarzy</li>
            </ul>
            <p>Druga, ciemna sala:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Koncerty i licytacje</li>
              <li>Bar: polskie piwa kraftowe, wina, grzaniec i inne</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Informacje o płatnościach',
        body: (
          <ul className="list-disc pl-6 space-y-1">
            <li>Kupony płatne kartą lub gotówką do puszki</li>
            <li>Stoisko Delicious by Bea: płatność u sprzedawcy</li>
            <li>Bar: część asortymentu tylko za gotówkę, reszta za kupony</li>
            <li>Kubki: darmowy, kolekcjonerski Wawel/Sol De Gracia (kaucja 1 €), kolekcjonerski WOŚP Barcelona (2 €)</li>
          </ul>
        ),
      },
      {
        title: 'Licytacje',
        body: (
          <p>
            Na aukcjach do zdobycia m.in. unikatowe dzieła sztuki, vouchery i rękodzieło. Szczegóły: „Licytacje podczas 33. Finału WOŚP w Barcelonie”.
          </p>
        ),
      },
    ],
  },
  {
    slug: 'licytacje-podczas-33-finalu-wosp-w-barcelonie',
    title: 'Licytacje podczas 33. Finału WOŚP w Barcelonie',
    date: '2025-01-25',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/25/licytacje-podczas-33-finalu-wosp-w-barcelonie/',
    sections: [
      {
        title: 'Licytacje na Finale WOŚP Barcelona',
        body: (
          <>
            <p>Przygotowano cztery panele licytacji z wyjątkowymi pozycjami:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Panel 11:45–12:30: zegar WOŚP, kalendarz, obrazy, płyta z podpisem Krzysztofa Cugowskiego, handmade poduszka, koszulka biegu</li>
              <li>Panel 13:14–14:00: obrazy, liczne książki z dedykacjami, oprowadzanie po Barcelonie, lekcje hiszpańskiego, złote serduszko, płyta A. Piasecznego</li>
              <li>Panel 15:00–16:30: obrazy, gadżety WOŚP, książka z autografem, sesja coachingowa</li>
              <li>Panel 17:30–18:15: obraz, książka „Mecz to pretekst”, gadżety WOŚP</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Licytacja złotego serduszka',
        body: (
          <p>
            Złote serduszko wykonane przez Jakuba Rajchelta – złoto próby 585, ok. 2.2 g, z logo sztabu WOŚP Barcelona – do wylicytowania o 15:00.
          </p>
        ),
      },
      {
        title: 'Licytacja obrazów',
        body: (
          <p>
            Na licytacji 10 obrazów z wernisażu „Sztuka dla WOŚP” – m.in. Daria Stróżyk, Magdalena Gładysz, Marta Cybulska, Roxane Durtheil, Natalia Sarzyńska, Jordina González Zygmuntowicz, Katarzyna Rzędzian.
          </p>
        ),
      },
    ],
  },
  {
    slug: 'sie-gotuje-sie-pomaga-smaki-swiata-z-wosp',
    title: 'Się gotuje, się pomaga! Smaki świata z WOŚP',
    date: '2025-01-22',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/22/elementor-1959/',
    sections: [
      {
        title: 'Przepisy od sztabu Barcelona',
        body: (
          <p>
            Sztab WOŚP w Barcelonie przygotował dwa wyjątkowe katalońskie przepisy, które znalazły się w książce.
          </p>
        ),
      },
      {
        title: 'Panellets (Marcepanowe ciasteczka)',
        body: (
          <p>
            Tradycyjne katalońskie ciasteczka marcepanowe spożywane na święto Castañada. Zachęcamy do spróbowania przepisu!
          </p>
        ),
      },
      {
        title: 'Trinxat de la Cerdanya con setas',
        body: (
          <p>
            Danie z katalońskich regionów górskich z kapusty i ziemniaków. Nazwa pochodzi od „trinxar” – siekać.
          </p>
        ),
      },
      {
        title: 'Dołącz do naszych działań!',
        body: (
          <>
            <p>
              Zapraszamy do odkrycia smaków z różnych zakątków świata i spróbowania katalońskich przysmaków, które przygotował sztab WOŚP Barcelona!
            </p>
            <p>
              Aby być na bieżąco z informacjami na temat naszych wydarzeń kulinarnych i książki kucharskiej, zachęcamy do śledzenia naszych mediów społecznościowych:
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.facebook.com/sztabWOSPBarcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/wospbarcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@wospbarcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                TikTok
              </a>
            </div>
            <p className="mt-4">
              Do zobaczenia na naszych wydarzeniach kulinarnych!
            </p>
          </>
        ),
      },
    ],
  },
  {
    slug: 'aukcje-wosp-licytuj-i-pomagaj',
    title: 'Aukcje WOŚP – licytuj i pomagaj!',
    date: '2025-01-19',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/19/aukcje-wosp-licytuj-i-pomagaj/',
    sections: [
      {
        title: '4Fund: Aukcje dla Polonii w Barcelonie',
        body: (
          <p>
            Aukcje z unikalnymi propozycjami dla Polonii – m.in. książki z dedykacjami, kurs języka polskiego.
          </p>
        ),
      },
      {
        title: 'Allegro: Unikalne Skarby',
        body: (
          <p>
            Na Allegro m.in. sesja zdjęciowa, kurs hiszpańskiego, magnesy, winyle, książki z dedykacjami, kalendarze z podpisem Jurka.
          </p>
        ),
      },
    ],
  },
  {
    slug: 'o-nas-nasza-druzyna-wosp-w-barcelonie',
    title: 'O Nas – Nasza Drużyna WOŚP w Barcelonie',
    date: '2025-01-17',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/17/o-nas-nasza-druzyna-wosp-w-barcelonie/',
    sections: [
      {
        title: 'Kto Tworzy Naszą Drużynę?',
        body: (
          <p>
            Nasza drużyna to wyjątkowi wolontariusze – różne role, wspólny cel i pasja do Orkiestry.
          </p>
        ),
      },
      {
        title: 'Wspólne wspomnienia i współpraca',
        body: (
          <p>
            Pamiętne chwile z finałów, spotkania i siła współpracy budują naszą społeczność.
          </p>
        ),
      },
    ],
  },
  {
    slug: 'o-naszych-wspanialych-sponsorach',
    title: 'O Naszych Wspaniałych Sponsorach',
    date: '2025-01-15',
    sourceUrl: 'https://wospbarcelona.org/index.php/2025/01/15/o-naszych-wspanialych-sponsorach/',
    sections: [
      {
        title: 'Sponsorzy WOŚP 2025',
        body: (
          <>
            <p>Poznaj naszych sponsorów, partnerów i współorganizatorów, dzięki którym dzieje się magia!</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Moja Katalonia</li>
              <li>Wawel RestoBar</li>
              <li>PolCat</li>
              <li>Delicias by Bea</li>
              <li>Alira Health</li>
              <li>Tomex Car-Bus</li>
              <li>World Class Barcelona</li>
              <li>ART-TUR</li>
              <li>Templo Beauty</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    slug: 'bieg-policz-sie-z-cukrzyca-dolacz-do-nas',
    title: 'Bieg „Policz się z cukrzycą” – dołącz do nas!',
    date: '2024-12-30',
    sourceUrl: 'https://wospbarcelona.org/index.php/2024/12/30/bieg-policz-sie-z-cukrzyca-dolacz-do-nas/',
    sections: [
      {
        title: 'Jak to się zaczęło?',
        body: (
          <p>
            Barcelońska edycja rozpoczęła się w 2021 roku podczas 29. Finału WOŚP. Z roku na rok rośniemy!
          </p>
        ),
      },
      {
        title: 'Jak do nas dołączyć?',
        body: (
          <p>
            Dołącz w dowolnej formie aktywności. Szczegóły rejestracji na Slotmarket i mail kontaktowy w artykule źródłowym.
          </p>
        ),
      },
    ],
  },
];

export function findPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
