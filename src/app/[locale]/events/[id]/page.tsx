'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowLeft, AlertTriangle, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// Helper component to render text with bold and underline
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;

  // Simple recursive parser for bold and underline
  const parseBold = (str: string): React.ReactNode[] => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-extrabold text-gray-950">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const parts = text.split(/(__.*?__)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('__') && part.endsWith('__')) {
          return (
            <span key={i} className="inline-block border-b-2 border-red-500 leading-none pb-0.5">
              {parseBold(part.slice(2, -2))}
            </span>
          );
        }
        return parseBold(part);
      })}
    </>
  );
};

// Mock events data (same as in events page)
const allEvents = [
  {
    id: 7,
    title: 'Spotkanie Wolontariuszy Online',
    description: 'Spotkanie online dla wolontariuszy WOŚP Barcelona. Skontaktuj się z nami przez formularz kontaktowy, aby otrzymać link do spotkania.',
    fullDescription: 'Zapraszamy na spotkanie online dla wolontariuszy WOŚP Barcelona! To doskonała okazja dla tych, którzy nie mogą dotrzeć na spotkanie stacjonarne.\n\nPodczas spotkania online:\n• Poznasz zespół organizacyjny WOŚP Barcelona\n• Dowiesz się o aktualnych planach na 34. Finał\n• Będziesz mógł zadać pytania i wyrazić swoje pomysły\n• Otrzymasz dostęp do materiałów informacyjnych\n• Poznasz innych wolontariuszy z całej Katalonii\n\n📝 JAK DOŁĄCZYĆ:\nAby otrzymać link do spotkania, skontaktuj się z nami przez formularz kontaktowy na stronie. Wyślemy Ci szczegóły spotkania oraz link do platformy.\n\nTo idealna opcja dla osób, które:\n• Mieszkają daleko od centrum Barcelony\n• Mają ograniczony czas\n• Preferują uczestnictwo online\n• Chcą dołączyć do zespołu wolontariuszy\n\nSpotkanie odbędzie się na platformie online - szczegóły otrzymasz po kontakcie z nami.',
    date: '2025-12-03',
    time: '19:30',
    location: 'Online',
    category: 'Spotkanie Wolontariuszy',
    image: '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg',
    gallery: [
      '/images/blog/online-1.jpg',
      '/images/blog/online-2.jpg'
    ],
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wośp-barcelona/events/312210626/',
    facebookLink: 'https://www.facebook.com/events/959414393911595',
    organizer: 'WOŚP Barcelona',
    contact: 'wolontariat@wospbarcelona.org'
  },
  {
    id: 8,
    title: 'Spotkanie Wolontariuszy - Wawel',
    description: '🤝 Spotkanie wolontariuszy WOŚP Barcelona w Wawel Restobar — naszym głównym sponsorze! Poznaj zespół, skosztuj polskiego jedzenia i przygotuj się do 34. Finału.',
    fullDescription: '🤝 Spotkanie wolontariuszy WOŚP Barcelona w Wawel Restobar\nZapraszamy na spotkanie wolontariuszy WOŚP Barcelona w Wawel Restobar — naszym głównym sponsorze! To idealne miejsce, aby poznać się, porozmawiać i zjeść pyszne polskie jedzenie oraz skosztować napojów prosto z Polski.\n\nPodczas spotkania:\n• poznasz zespół WOŚP Barcelona\n• dowiesz się o planach na 34. Finał\n• zadasz pytania i podzielisz się swoimi pomysłami\n• otrzymasz materiały informacyjne\n• poznasz innych wolontariuszy z Barcelony, Katalonii i Polski\n\nDlaczego warto przyjść:\n• Wawel Restobar to miejsce stworzone przez Polaków dla Polaków\n• zjesz tradycyjne dania i wypijesz polskie napoje\n• poczujesz klimat domowej, polskiej gościnności\n• wesprzesz lokalnego sponsora WOŚP\n\n📝 Jak dołączyć:\nPrzyjdź w wyznaczonym terminie lub skontaktuj się z nami, jeśli masz pytania.\n\nSpotkanie odbędzie się w Wawel Restobar — do zobaczenia!',
    date: '2025-12-14',
    time: '15:00',
    location: 'Wawel, Barcelona',
    category: 'Spotkanie Wolontariuszy',
    image: '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg',
    gallery: [
      '/images/blog/wolontariusze-grudzien-1.jpg',
      '/images/blog/wolontariusze-grudzien-2.jpg'
    ],
    registrationRequired: false,
    meetupLink: 'https://www.meetup.com/wośp-barcelona/events/312212223/',
    facebookLink: 'https://www.facebook.com/events/2638201476539435',
    organizer: 'WOŚP Barcelona',
    contact: 'wolontariat@wospbarcelona.org'
  },
  {
    id: 1,
    title: '34. Finał WOŚP w Barcelonie',
    description: '🎉 Największe wydarzenie charytatywne roku w Barcelonie! Dołącz do nas w Espacio 88 na dzień pełen warsztatów, występów, aukcji i integracji. Gramy dla zdrowych brzuszków polskich dzieci!',
    fullDescription: '🎉 34. Finał WOŚP w Barcelonie\n\n📍 Miejsce: Espacio 88 — Carrer de Pamplona 88, Sant Martí, Barcelona\n📅 Data: 25 stycznia 2026\n🎯 Cel: zakup nowoczesnego sprzętu do diagnozowania, monitorowania i leczenia chorób przewodu pokarmowego u dzieci (endoskopy pediatryczne, systemy obrazowania, sprzęt do badań czynnościowych itp.)\n\n✨ Co będzie się działo?\nProgram jeszcze powstaje, ale cały dzień w Espacio 88 będzie pełen aktywności:\n\n🫧 Strefy warsztatowe dla dzieci i rodzin\n• zabawy i aktywności KosmoHisPlano\n• bańki mydlane, ruch, kreatywność\n• dodatkowe stacje warsztatowe\n\n🎤 Występy, panele i spotkania\n• panele literackie i artystyczne\n• spotkanie z artystami i ich pracami\n• aktywności rodzinne\n• tort od Delicious By Bea dla wszystkich uczestników\n\n🎲 Gry i integracja\n• gra PL-ES łącząca Polaków, Hiszpanów i lokalną społeczność\n\n🔨 Aukcje charytatywne\n• licytacje wyjątkowych przedmiotów wspierające cel finału\n\n🎆 Światełko do Nieba\n• tradycyjny, pozytywny gest jedności i solidarności\n\n🇵🇱❤️ Polska kultura w Barcelonie\nPodczas finału promujemy polską kulturę, język, twórców i tradycje — tworząc przestrzeń, gdzie Polonia, Hiszpanie i międzynarodowa społeczność mogą spotkać się, współtworzyć i poznawać się nawzajem.\n\n❤️ Dlaczego gramy?\nZbieramy środki na wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u dzieci — aby najmłodsi pacjenci w Polsce mogli korzystać z najnowocześniejszego sprzętu i lepszej opieki.',
    date: '2026-01-25',
    time: '11:00 - 20:00',
    location: 'Espacio 88, Sant Martí, Barcelona',
    category: 'Finał WOŚP',
    image: '/images/kalendarz/36_34FinalWOSP2026_grafika_podglad.jpg',
    gallery: [
      '/images/plakaty/PL-Ogólny-2026.png',
      '/images/plakaty/PL-Harmonogram-2026.png',
      '/images/plakaty/EN-Ogólny-2026.png',
      '/images/plakaty/EN-Harmonogram-2026.png',
      '/images/plakaty/ES-Ogólny-2026.png',
      '/images/plakaty/ES-Harmonogram-2026.png',
      '/images/plakaty/CAT-Ogólny-2026.png',
      '/images/plakaty/CAT-Harmonogram-2026.png',
      '/images/33-final/DSCF7186.jpg',
      '/images/33-final/DSCF7194.jpg',
      '/images/33-final/DSCF7221.jpg',
      '/images/33-final/DSCF7250.jpg',
      '/images/33-final/DSCF7264.jpg',
      '/images/33-final/DSCF7277.jpg',
      '/images/33-final/DSCF7285.jpg',
      '/images/33-final/DSCF7302.jpg',
      '/images/33-final/DSCF7320.jpg',
      '/images/33-final/DSCF7344.jpg',
      '/images/33-final/DSCF7366.jpg',
      '/images/33-final/DSCF7376.jpg'
    ],
    registrationRequired: true,
    isFinal: true,
    meetupLink: 'https://www.meetup.com/wośp-barcelona/events/312210334/',
    facebookLink: 'https://www.facebook.com/events/722563890373111',
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org'
  },
  {
    id: 5,
    title: '20. Bieg WOŚP "Policz się z cukrzycą"',
    description: 'Bieg charytatywny na 5 km. Start i meta: Hotel W Barcelona (Barceloneta). Trasa wzdłuż plaży, nawrót i powrót pod Hotel W. **UWAGA: ZMIANA TERMINU!** Z powodu zapowiadanych intensywnych opadów deszczu i ze względów na bezpieczeństwo uczestników, bieg odbędzie się w **SOBOTĘ 24.01.2026**. Start i meta biegu są teraz spod Hotelu W Barcelona. Trasa prowadzi wzdłuż plaży, następnie jest zawrócenie i powrót na metę pod hotelem W.',
    fullDescription: 'Dołącz do 20. Biegu WOŚP "Policz się z cukrzycą"! To bieg charytatywny na dystansie 5 km w Barcelonie.\n\n🏃‍♂️ SZCZEGÓŁY BIEGU:\n• Dystans: 5 km\n• Data: **SOBOTA 24.01.2026** (zmieniona z powodu pogody)\n• Start/Zbiórka: Hotel W Barcelona (Barceloneta)\n• Trasa: wzdłuż plaży, nawrót i powrót pod Hotel W\n• Meta: Hotel W Barcelona (medal dla każdego uczestnika)\n\n📞 KONTAKT DO ORGANIZATORÓW:\nW razie pytaniań lub problemów prosimy o kontakt na czacie lub z koordynatorką biegu Anetą pod numerem +34 637 486 551.\n\n📝 REJESTRACJA (OBOWIĄZKOWA):\nKażdy uczestnik biegu organizowanego przez Sztab WOŚP w Barcelonie musi zarejestrować się osobiście w systemie Slotmarket w biegu WIRTUALNYM.\n1. Zarejestruj się przez Slotmarket\n2. Wpisz adres wysyłki na Polskę: Dominikańska 19C, 02-738 Warszawa\n3. W polu "Klub" wpisz: 6516 Barcelona\n4. Wybierz opcję przesyłki krajowej (do Polski)\n5. Wyślij potwierdzenie rejestracji z imieniem, nazwiskiem i rozmiarem koszulki na: biegwospbarcelona@gmail.com\n6. Termin rejestracji: do 31.12.2025\n\n⚠️ UWAGA: Niepoprawne wypełnienie formularza może skutkować koniecznością dopłaty 150 zł lub brakiem otrzymania pakietu!\n\n🏆 DLA NAJLEPSZYCH UCZESTNIKÓW:\nWarunkiem otrzymania pakietu startowego jest zapisanie do 5 stycznia 2025. Po 5 stycznia 2025 zapisy będą nadal możliwe, ale bez gwarancji otrzymania pakietu startowego.\n\n💰 Koszt: 85 zł\n\n📋 Jak się zapisać:\n1. Zarejestruj się na Slotmarket na bieg WIRTUALNY: slotmarket.pl/event/details/741/20-bieg-wosp-policz-sie-z-cukrzyca-wirtualny\n2. Wpisz adres wysyłki na Polskę: Dominikańska 19C, 02-738 Warszawa\n3. W polu "Klub" wpisz: 6516 Barcelona\n4. Wybierz opcję przesyłki krajowej (do Polski)\n5. Wyślij potwierdzenie rejestracji z imieniem, nazwiskiem i rozmiarem koszulki na: biegwospbarcelona@gmail.com\n\n🏆 Dla najlepszych uczestników przewidziane są atrakcyjne nagrody!\n\nDołącz do nas, bądź świetnie i pokażmy, że Barcelona wspiera WOŚP!\n\n🗺️ SZCZEGÓŁY TRASY I INFORMACJE:\n• **Trasa**: Bieg rozpoczyna się przy Hotelu W Barcelona (Barceloneta) i prowadzi wzdłuż plaży Barcelonety w kierunku północnym. Po około 2,5 km następuje zawrót i powrót na metę pod hotelem. Trasa jest malowna i bezpieczna, idealna dla biegaczy na każdym poziomie zaawansowania.\n• **Punkty kontrolne**: Na trasie zorganizowane będą punkty kontrolne z wodą i przekąskami dla uczestników.\n• **Zabezpieczenie**: Trasa będzie zabezpieczona przez organizatorów, a na trasie obecni będą patrole medyczne.\n• **Transport**: Po biegu zapewniamy transport powrotny do Hotelu W Barcelona dla uczestników, którzy wyrażą taką chęć.\n• **Pogoda**: W przypadku złych warunków pogodowych, organizator zastrzega sobie prawo do zmiany daty lub przełożenia biegu na inny termin. O wszelkich zmianach uczestnicy będą informowani z wyprzedzeniem.\n• **Co ze sobą**: Po zakończeniu biegu zapraszamy na wspólną integrację i podziękowania uczestnikom w Hotelu W Barcelona.',
    date: '2026-01-24',
    time: 'Start: 10:30',
    location: 'Hotel W Barcelona',
    category: 'Bieg',
    image: '/images/kalendarz/workoplecak_20bieg_podglad.jpg',
    gallery: [
      '/images/kalendarz/workoplecak_20bieg_podglad.jpg'
    ],
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wośp-barcelona/events/312210485/',
    facebookLink: 'https://www.facebook.com/events/1931855297364179/',
    organizer: 'WOŚP Barcelona',
    contact: 'biegwospbarcelona@gmail.com',
    isSpecialEvent: true,
    registrationDeadline: '31.12.2025'
  },
  {
    id: 9,
    title: 'Koniec Aukcji Charytatywnych na Allegro',
    description: 'Ostatni dzień przyjmowania ofert charytatywnych w ramach Akcji WOŚP. Oferty mogą być prowadzone od 01.12.2025 – 16.02.2026r.',
    fullDescription: 'To ostatni dzień przyjmowania ofert charytatywnych na platformie Allegro w ramach 34. Finału WOŚP!\n\n📅 OKRES AUKCJI CHARYTATYWNYCH:\nOferty charytatywne w ramach Akcji WOŚP mogą być prowadzone w okresie od 01.12.2025 – 16.02.2026r.\n\n💻 JAK WZIĄĆ UDZIAŁ:\n• Wejdź na stronę allegro.pl\n• Wyszukaj WOŚP Barcelona\n• Wybierz interesującą Cię aukcję\n• Licytuj i wspieraj WOŚP Barcelona\n• Wszystkie zebrane środki idą na cele charytatywne\n\n🎯 CEL ZBIÓRKI:\nWszystkie środki zebrane podczas aukcji charytatywnych zostaną przekazane na wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u najmłodszych pacjentów - cel 34. Finału WOŚP "Zdrowe brzuszki naszych dzieci".\n\n⏰ OSTATNIA SZANSA:\nTo ostatni dzień, aby wziąć udział w aukcjach charytatywnych WOŚP na Allegro. Nie przegap okazji, aby pomóc potrzebującym dzieciom!\n\nDziękujemy wszystkim, którzy wzięli udział w aukcjach charytatywnych przez te ponad 2 miesiące. Każda złotówka ma znaczenie!',
    date: '2026-02-16',
    time: '23:59',
    location: 'Online - Allegro.pl',
    category: 'Aukcja Online',
    image: '/images/allegro/11_34FinalWOSP2026_grafika_AUKCJE_podglad.png',
    gallery: [
      '/images/allegro/apaszka-Warszawa-4.jpg',
      '/images/allegro/Kalendarz1.jpg',
      '/images/allegro/krawat-Warszawa-3.jpg',
      '/images/allegro/plakat-Warszawa-podpis-Trzaskowski-2.jpg',
      '/images/allegro/poduszka_moje_3.jpg',
      '/images/allegro/Sie gotuje...4.jpg',
      '/images/allegro/7E5E2F03-E9DD-4D2F-BC1E-B5467EE07583.png'
    ],
    registrationRequired: false,
    meetupLink: null,
    facebookLink: null,
    allegroLink: 'https://allegro.pl/uzytkownik/Client%3A140580262',
    organizer: 'WOŚP Barcelona',
    contact: 'aukcje@wospbarcelona.org'
  },
  // Past events
  {
    id: 101,
    title: '33. Finał WOŚP w Barcelonie',
    description: 'Niesamowity finał! Zebraliśmy 8,073.48 euro podczas wydarzenia, a łącznie z wydarzeniami towarzyszącymi i aukcjami 13,880.62 euro!',
    fullDescription: '33. Finał WOŚP w Barcelonie\n\nSerdecznie zapraszamy na wyjątkowe wydarzenie, które połączy nas w jednym celu – pomocy potrzebującym! 33. Finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie to dzień pełen muzyki, radości i wspólnego działania.\n\n📍 Miejsce: Nau Bostik — Carrer Ferran Turné, 1-11, Sant Andreu, 08027 Barcelona, Hiszpania\n📅 Data: 26 stycznia 2025\n🕘 Godzina: Start o 10:30\n\n🎵 Harmonogram koncertów:\n11:00 - ANULKA & DIRTY SPOONS\n12:30 - MARCIN BURY\n14:00 - GUIMERA BLUES & THE SUGAR BOYS\n16:30 - JUSTYNA & JAIME\n18:15 - EYE OF THE STORM\n19:30 - Światełko do nieba\n20:00 - Zakończenie\n\n🎪 Atrakcje podczas wydarzenia:\n• Niesamowite koncerty lokalnych artystów\n• Emocjonujące licytacje\n• Loteria z fantastycznymi nagrodami\n• Kiermasz książek\n• Animacje i zabawy dla dzieci\n• Pyszne pierogi, polskie ciasta i słodycze\n• Napoje z polskich browarów\n\nTo wydarzenie, które musisz przeżyć! Przyjdź i wesprzyj największą orkiestrę serc! Wszystkie zebrane środki zostaną przekazane na wsparcie dzieci i seniorów.\n\nRazem możemy więcej! Do zobaczenia!\n\n#WOŚPBarcelona #RazemDlaWOŚP #PomaganieJestDziecinnieProste #33FinałWOŚP',
    date: '2025-01-26',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    category: 'Finał WOŚP',
    image: '/images/33-final/final-2024-main.jpg',
    gallery: [
      '/images/33-final/final-2024-1.jpg',
      '/images/33-final/final-2024-2.jpg',
      '/images/33-final/final-2024-3.jpg',
      '/images/33-final/final-2024-4.jpg',
      '/images/33-final/final-2024-5.jpg',
      '/images/33-final/final-2024-6.jpg'
    ],
    amountRaised: '8,073.48 €',
    totalAmount: '13,880.62 €',
    organizer: 'WOŚP Barcelona',
    highlights: [
      'Rekordowa kwota zebrana w historii WOŚP Barcelona',
      'Największa frekwencja w historii finałów',
      'Pierwszy finał z transmisją na żywo',
      'Udział katalońskich artystów'
    ]
  },
  {
    id: 201,
    title: '19. Bieg WOŚP "Policz się z cukrzycą"',
    description: 'Bieg charytatywny na 5 km z Sagrada Familia do Hotel W Barcelona. Wspólna zabawa i wsparcie WOŚP!',
    fullDescription: '19. Bieg WOŚP "Policz się z cukrzycą" w Barcelonie!\n\nZapraszamy na 19. edycję biegu „Policz się z cukrzycą" z WOŚP – także w Barcelonie!\n\n📅 Data: Niedziela, 19 stycznia 2025\n🕘 Start: 10:30\n📍 Miejsce zbiórki: Sagrada Familia (https://maps.app.goo.gl/R5mMRR6FwW8v18Pd9)\n🏁 Meta: Hotel W Barcelona\n📏 Dystans: 5 km\n🗺️ Trasa biegu: https://maps.app.goo.gl/mFDnte8xnbmnag1x5\n\nTo wyjątkowe wydarzenie to nie tylko bieg – możesz dołączyć, jak chcesz! Spacerem, na rolkach, rowerze czy w spokojnym truchcie – najważniejsze to wspólna zabawa i wsparcie WOŚP!\n\n✨ Dlaczego warto się zapisać?\n\n📝 Rejestracja do 5 stycznia 2025 gwarantuje:\n• Koszulkę z 19. Biegu „Policz się z cukrzycą"\n• Darmową przesyłkę do Polski\n• Po 5 stycznia zapisy będą nadal możliwe aż do 19 stycznia oraz w trakcie zbiórki, jednak bez gwarancji koszulki\n• Na mecie każdy uczestnik otrzyma pamiątkowy medal!\n\n💰 Koszt: 85 zł\n\n📋 Jak się zapisać?\n1. Zarejestruj się na Slotmarket na bieg WIRTUALNY: slotmarket.pl/event/details/645/preview\n2. Wprowadź adres wysyłki na Polskę do Fundacji WOŚP: Dominikańska 19C, 02-738 Warszawa\n3. Przy wyborze rozmiaru koszulki, w polu „Klub" wpisz: Barcelona\n4. Wybierz opcję przesyłki krajowej (do Polski)\n5. Potwierdzenie rejestracji z imieniem, nazwiskiem i rozmiarem koszulki wyślij na: biegwospbarcelona@gmail.com\n\n🏆 Dla najlepszych uczestników przewidziane są atrakcyjne nagrody!\n\nDołącz do nas, baw się świetnie i pokażmy, że Barcelona wspiera WOŚP!',
    date: '2025-01-19',
    time: 'Start: 10:30',
    location: 'Start: Sagrada Familia, Meta: Hotel W Barcelona',
    category: 'Bieg',
    image: '/images/blog/bieg-2025.jpg',
    gallery: [],
    registrationRequired: true,
    registrationLink: 'https://slotmarket.pl/event/details/645/preview',
    registrationDeadline: '5 stycznia 2025 (z koszulką), 19 stycznia 2025 (bez koszulki)',
    organizer: 'WOŚP Barcelona',
    contact: 'biegwospbarcelona@gmail.com',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 202,
    title: 'Wernisaż Artystyczny WOŚP',
    description: 'Wyjątkowe wydarzenie artystyczne łączące sztukę z dobrem. Dzieła lokalnych artystów i gości z Polski na wsparcie WOŚP!',
    fullDescription: 'Wernisaż Artystyczny WOŚP w Barcelonie\n\nZapraszamy na wyjątkowe wydarzenie artystyczne, podczas którego sztuka łączy się z dobrem! Wernisaż w Barcelonie to okazja do podziwiania różnorodnych dzieł artystów, zarówno lokalnych twórców, jak i gości z Polski, a także do wsparcia Wielkiej Orkiestry Świątecznej Pomocy.\n\n✨ Dlaczego warto przyjść?\n\n🎨 Wyjątkowi artyści – Spotkaj twórców mieszkających w Barcelonie i podziwiaj ich prace: od malarstwa po różnorodne techniki artystyczne.\n\n🔨 Licytacja dzieł – Wylicytuj unikalne prace podczas wielkiego finału WOŚP 26 stycznia 2025. Całkowity dochód zasili konto Fundacji WOŚP!\n\n🖼️ Sprzedaż dzieł – Wybrane prace będą dostępne na sprzedaż podczas wernisażu. To doskonała okazja, by wesprzeć artystów i sprawić sobie lub bliskim niepowtarzalny prezent.\n\n🍷 Kameralna atmosfera – Delektuj się sztuką przy lampce wina i małych przekąskach przygotowanych przez naszych wolontariuszy.\n\n🌍 Dla każdego – Wydarzenie dostępne w językach: polskim, hiszpańskim i angielskim.\n\n👨‍🎨 Artyści:\n• Daria Stróżyk – Instagram @DariaStrozykArt\n• Natalia Sarzyńska – Instagram @zoryas.realm\n• Marta Cybulska – Instagram @la_vidamarta\n• Magdalena Gladysz – Instagram @magda_y_arte\n• Jordina González Zygmuntowicz\n• Roxane Durtheil – Instagram @tarragonarte\n• Katarzyna Rzędzian – Instagram @rudakata\n• Helena Staniszewska – Instagram @helastaniszewska\n• Aneta Grabowska – Instagram @agphotographybcn\n\n📅 Szczegóły wydarzenia:\nData: Sobota, 18 stycznia 2025\nGodzina: 11:00 – 22:00\nMiejsce: Templo Beauty peluquería & holística, Ronda del Guinardó 64, Horta-Guinardó, 08025 Barcelona\nJęzyk: polski, angielski, hiszpański\n\n⏰ Program:\n11:00 – Otwarcie drzwi: czas na podziwianie dzieł i rozmowy z artystami\n12:00 – Oficjalne powitanie i prezentacja artystów\nCały dzień – Możliwość zakupu wybranych dzieł, rozmów z twórcami oraz delektowania się przekąskami i winem\n21:00 – Zamknięcie wernisażu\n\n🎯 Licytacja finałowa odbędzie się 26 stycznia 2025 – całkowity dochód wspiera cel 33. Finału: onkologia i hematologia dziecięca!\n\n🎟️ Wstęp wolny!\n\nPrzyjdź, odkryj piękno sztuki i wspólnie z nami graj dla Wielkiej Orkiestry Świątecznej Pomocy. Sztuka może zmieniać świat – dołącz do nas!',
    date: '2025-01-18',
    time: '11:00 - 22:00',
    location: 'Templo Beauty, Ronda del Guinardó 64, Horta-Guinardó, Barcelona',
    category: 'Wernisaż',
    image: '/images/blog/wernisaz-2025.jpg',
    gallery: [],
    registrationRequired: false,
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 206,
    title: 'Warsztaty Świąteczne: "Wine and Craft"',
    description: 'Dołącz do wyjątkowego wieczoru kreatywności i relaksu z WOŚP Barcelona! Świąteczne rękodzieło przy grzańcu i winie!',
    fullDescription: 'PL (ENG and ES below)\n\nDołącz do wyjątkowego wieczoru kreatywności i relaksu z WOŚP Barcelona!\n\nZapraszamy na warsztaty, które łączą świąteczne rękodzieło z wieczorem pełnym dobrej zabawy przy grzańcu i winie!\n\n🎄 Co na Ciebie czeka?\n\n🎅 Świąteczne dekoracje: Tworzenie wyjątkowych ozdób, w tym bombek i dekoracji z filcu.\n\n🍷 Grzaniec/wino: Delektuj się pysznym trunkiem, tworząc w świątecznej atmosferze.\n\n✨ Nie potrzebujesz doświadczenia – wystarczy Twój entuzjazm! Wszystkie materiały będą zapewnione na miejscu.\n\n💰 Koszt: 20 EUR lub 90 PLN, przeznaczone na działania 33. Finału WOŚP w Barcelonie.\n\n📅 Kiedy: Sobota, 23 listopada 2024, godz. 17:30\n\n📍 Gdzie: World Class Barcelona Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona\n\n***\n\nENG:\n\nJoin an unforgettable evening of creativity and relaxation with WOŚP Barcelona!\n\nWe invite you to a workshop that combines festive crafts with an evening of fun, enjoying mulled wine and great company!\n\n🎄 What\'s in store?\n\n🎅 Holiday Decorations: Create unique ornaments, including baubles and felt decorations.\n\n🍷 Mulled Wine/Wine: Savor a delicious drink while crafting in a cozy, festive atmosphere.\n\n✨ No experience needed – just bring your enthusiasm! All materials will be provided.\n\n💰 Cost: 20 EUR or 90 PLN, fully supporting the 33rd WOŚP Finale in Barcelona.\n\n📅 When: Saturday, November 23, 2024, at 5:30 PM\n\n📍 Where: World Class Barcelona Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    date: '2024-11-23',
    time: '17:30',
    location: 'World Class Barcelona Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    category: 'Warsztaty Świąteczne',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg',
    gallery: [],
    registrationRequired: true,
    registrationLink: 'https://wospbarcelona.org/wine-craft-christmas/',
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 205,
    title: 'Warsztaty Fotograficzne Plenerowe',
    description: 'Sztab WOŚP w Barcelonie wraz z Anetą zaprasza na fotograficzne warsztaty plenerowe! Naucz się pracy z modelem i wykorzystania światła.',
    fullDescription: 'Sztab WOŚP w Barcelonie wraz z naszą wolontariuszką Anetą zaprasza na: fotograficzne Warsztaty Plenerowe w Barcelonie!\n\nMarzysz o doskonaleniu swoich umiejętności fotograficznych? Zapraszamy na wyjątkowe warsztaty w malowniczym plenerze Barcelony! To niepowtarzalna okazja, by nauczyć się pracy z modelem i odkryć kreatywne techniki wykorzystania światła oraz funkcji aparatu.\n\n📸 Co na Ciebie czeka?\n\n👤 Fotografia z modelem/modelką – Praktyczne ćwiczenia z prowadzenia sesji zdjęciowej i pracy z modelem. Każdy uczestnik będzie miał okazję przeprowadzić krótką sesję i przesłać zdjęcia modelowi.\n\n📷 Ustawienia aparatu – Nauka kluczowych funkcji, takich jak ekspozycja, czas naświetlania i inne ustawienia idealne do pracy w plenerze.\n\n💡 Wykorzystanie światła – Dowiedz się, jak najlepiej używać naturalnego światła o różnych porach dnia, by oddać nastrój miejsca i osoby.\n\n🎨 Obróbka zdjęć – Poznaj podstawy edycji zdjęć i techniki, które pozwolą wyciągnąć z Twoich fotografii to, co najlepsze.\n\nℹ️ Dodatkowe informacje:\nWarsztaty są skierowane do początkujących – możesz przyjść zarówno z aparatem fotograficznym, jak i z aparatem w telefonie.\n\n📝 Zapisy na warsztaty pod linkiem:\nhttps://wospbarcelona.org/warsztaty-fotograficzne/\n\n📅 Szczegóły wydarzenia:\n• Data: 30 listopada 2024\n• Godzina: 14:30 – 17:30 (3 godziny)\n• Koszt: 15 EUR lub 70 PLN - całość dochodu przeznaczona na wynajem sali i organizację 33. Finału WOŚP w Barcelonie\n• Miejsce: Jardins de Mossèn Costa i Llobera, Barcelona\n• Język: polski, hiszpański\n\nTo idealna szansa, by rozwinąć swoje umiejętności, nauczyć się czegoś nowego i spotkać innych miłośników fotografii. Gwarantujemy, że po tych warsztatach Twoje zdjęcia zyskają nową jakość!',
    date: '2024-11-30',
    time: '14:30 - 17:30',
    location: 'Jardins de Mossèn Costa i Llobera, Barcelona',
    category: 'Warsztaty Fotograficzne',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg',
    gallery: [],
    registrationRequired: true,
    registrationLink: 'https://wospbarcelona.org/warsztaty-fotograficzne/',
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 204,
    title: 'Gwiazdka Literacka z WOŚP',
    description: 'Wyjątkowe świąteczne wydarzenie! Spotkanie z polskimi autorami, licytacja książek z autografami i winno-literacki wieczór.',
    fullDescription: 'Zapraszamy na wyjątkowe świąteczne wydarzenie!\n\nPoznaj polskich autorów mieszkających w Barcelonie, posłuchaj fragmentów ich książek i daj się porwać literackiej atmosferze.\n\n🎄 Dlaczego warto przyjść?\n\n📚 Spotkanie z autorami: Zapytaj o inspiracje, proces twórczy i życie w Barcelonie.\n\n🏆 Licytacja książek: Wylicytuj wyjątkowe egzemplarze z autografami autorów książek, a cały przychód zasili cel 33. Finału WOŚP.\n\n❤️ Dobroczynność: Wesprzyj Wielką Orkiestrę Świątecznej Pomocy.\n\n🍷 Winno-literacki wieczór: Delektuj się winem i zakąskami w miłym towarzystwie.\n\n📖 Sprzedaż książek: Kup polską książkę na prezent z biblioteczki naszych wolontariuszy!\n\n✍️ Autorzy:\n• Krzysztof Monastyrski "Monarek"\n• Joanna Jurek\n• Agnieszka Łukomska\n• Agnieszka Wolińska-Skuza\n• Marta Cybulska\n\n🎤 Spotkanie poprowadzi dziennikarka Wirtualnej Polski: Agnieszka Woźniak!\n\n📅 Kiedy i gdzie?\n• Data: 15 grudnia 2024\n• Godzina: 15:00 - 19:00 (czas trwania: 3,5 godziny)\n• Koszt: Wstęp Wolny!\n• Miejsce: World Class Bcn Spanish school - Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona\n• Język: Polski\n\n📋 Program:\n15:00-15:30: Rozgrzewka\n15:30-17:30: Panel dyskusyjny z autorami: Krzysztof Monastyrski, Joanna Jurek, Agnieszka Łukomska, Agnieszka Wolińska-Skuza, Marta Cybulska.\n17:30-18:00: Przerwa na rozmowy z autorami.\n18:00-19:00: Licytacja książek.\n\n🎟️ Wstęp wolny!\n\nDołącz do nas i spędź wyjątkową gwiazdkę w gronie miłośników literatury!\n\n💰 Zbieramy środki na wsparcie celu 33. Finału WOŚP, czyli onkologii i hematologii dziecięcej! Swoje darowizny możecie już wpłacać poprzez platformę 4fund https://4fund.com/wospbarcelona/s/gwiazdka lub do puszek podczas spotkania.',
    date: '2024-12-15',
    time: '15:00 - 19:00',
    location: 'World Class Bcn Spanish school - Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    category: 'Spotkanie Literackie',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg',
    gallery: [],
    registrationRequired: false,
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 203,
    title: 'Bubbly Craft - Earth Edition',
    description: 'Wyjątkowy wieczór kreatywności i relaksu! Warsztaty odnawiania doniczek i makramy przy aromatycznych napojach.',
    fullDescription: 'Bubbly Craft - Earth Edition z WOŚP Barcelona!\n\nDołącz do wyjątkowego wieczoru kreatywności i relaksu z WOŚP Barcelona! Zapraszamy na drugą edycję warsztatów „Bubbly Craft", tym razem pod nazwą Earth Edition. To doskonała okazja, aby spędzić wieczór w twórczej atmosferze przy aromatycznych napojach!\n\n🎨 Co na Ciebie czeka?\n\n🪴 Odnawianie doniczek: Przynieś swoją nudną doniczkę, a my pomożemy jej nadać nowe życie! Dekorujemy doniczki w duchu Earth Edition – z naciskiem na recykling i zero waste.\n\n🧵 Makrama na doniczkę: Naucz się tworzyć piękne, ozdobne makramy do kwiatów. Bez doświadczenia? Żaden problem!\n\n🍷 Aromatyczne napoje: W tej edycji czekają na Ciebie napoje, które dopełnią twórczą atmosferę.\n\n👶 Strefa dla dzieci: Zabierz swoje pociechy ze sobą! Dla dzieci przygotowaliśmy specjalne animacje i zabawy, abyś Ty mógł/mogła spokojnie pić winko i twórczo spędzić czas. (Sugerowana dopłata: 5 EUR)\n\n📅 Szczegóły wydarzenia:\nKiedy: Sobota, 11 stycznia 2025, godz. 17:30\nGdzie: World Class Barcelona\nJęzyk: Polski, Angielski\nSugerowana wpłata: 15 EUR\n\nTo wydarzenie łączy kreatywność, ekologię i wsparcie dla WOŚP w jednym! Przyjdź i spędź wieczór w miłej atmosferze, tworząc coś pięknego dla swojego domu.',
    date: '2025-01-11',
    time: '17:30',
    location: 'World Class Barcelona',
    category: 'Warsztaty',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg',
    gallery: [],
    registrationRequired: true,
    registrationLink: 'https://wospbarcelona.org/wine-craft-ii-earth-edition/',
    organizer: 'WOŚP Barcelona',
    contact: 'sztab@wospbarcelona.org',
    meetupLink: null,
    facebookLink: null
  },
  {
    id: 104,
    title: '32. Finał WOŚP w Barcelonie',
    description: 'Wspaniały finał z rekordową frekwencją! Zebrano łącznie 10.460,47 €!',
    fullDescription: '32. Finał WOŚP w Barcelonie\n\nNiesamowity dzień pełen emocji, muzyki i wsparcia dla Wielkiej Orkiestry Świątecznej Pomocy! Dziękujemy wszystkim, którzy byliście z nami tego dnia.\n\n🎪 PROGRAM IMPREZY\n\n11:00 Rozpoczęcie imprezy\n12:00 Oficjalne przywitanie\n12:15 Kalambury\n13:00 Matt Zerek /koncert/\n13.45 Licytacje\n14:15 Guimera Blues & The Sugar Boys /koncert/\n15.30 Licytacja Złotego Serduszka\n16:00 Tort\n16.30 Karaoke\n17:00 Headbug /koncert/\n18.00 Licytacje\n19:00 Eveli Ray /koncert/\n19.40 Światełko do nieba\n\n🎨 Ponad to:\n\n👶 Atrakcje dla dzieci\n/warsztaty dla najmłodszych, maski karnawałowe, brokatowe tatuaże, bańki mydlane/\n\n🍽️ Polskie jedzenie\n/pierogi, kiełbasa, sałatki, ciasta, kołacze/\n\n🍺 Polskie piwo i grzane wino\n\n📚 Kiermasz książek\n\n🎰 Loteria fantowa\n\n🏆 Konkursy z nagrodami\n\n🎉 ZAPRASZAMY!!!\n\nGramy razem do końca świata i o jeden dzień dłużej!!!',
    date: '2023-01-29',
    time: '11:00 - 20:00',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    category: 'Finał WOŚP',
    image: '/images/33-final/final-2024-main.jpg',
    gallery: [
      '/images/33-final/final-2024-1.jpg',
      '/images/33-final/final-2024-2.jpg',
      '/images/33-final/final-2024-3.jpg',
      '/images/33-final/final-2024-4.jpg',
      '/images/33-final/final-2024-5.jpg',
      '/images/33-final/final-2024-6.jpg'
    ],
    amountRaised: '10,460.47 €',
    organizer: 'WOŚP Barcelona',
    highlights: [
      'Rekordowa frekwencja',
      'Wspaniała atmosfera',
      'Wiele atrakcji dla całej rodziny',
      'Koncerty: Matt Zerek, Guimera Blues & The Sugar Boys, Headbug, Eveli Ray',
      'Tradycyjne Światełko do nieba'
    ]
  },
  {
    id: 106,
    title: '31. Finał WOŚP w Barcelonie',
    description: 'Pierwszy finał po pandemii! Warsztaty dla dzieci, koncerty, licytacje i polskie przysmaki!',
    fullDescription: 'Sztab WOŚP Barcelona zaprasza na 31 Finał WOŚP w Barcelonie\n\n🎪 PROGRAM IMPREZY\n\n10:00 Wstęp\n11:00 – 12.00 Warsztaty dla dzieci 8m – 2 lata / KOSMOHISPLANO\n12.00 Licytacje\n12.15 Pokaz baniek /BUBBLES.MASTERS\n12.30 – 14.00 Warsztaty dla dzieci 5 – 7 lat / KOSMOHISPLANO\n14.00 Pokaz baniek /BUBBLES.LOCOS\n14.30 MARCIN BURY & JULIA KWIEK\n15.00 – 16.30 Warsztaty dla dzieci 2,5 – 4 lata / KOSMOHISPLANO\n15.30 Licytacje\n16.00 Podziękowania dla sponsorów\n16.15 TORT\n16.30 Koncert HEADBUGBAND\n17.30 Licytacje\n18.15 Podzięękowania dla sponsorów\n18.30 Koncert SWINGITBABY\n19.30 Zakończenie\n20.00 Światełko do nieba\n\n🎨 Ponadto:\n\n📸 Sesje zdjęciowe od AGPHOTOGRAPHYBCN\n\n📚 Kiermasz książek\n\n🎮 Gry i konkursy, malowanie twarzy\n\n🎨 Warsztaty z Tolą\n\n🎰 Loteria z koszem przysmaków polskich\n\n🎤 Karaoke\n\n🍽️ Przyjdź spróbować polskich przysmaków takich jak:\npierogi, kiełbasa z grilla, pajda chleba ze smalcem, barszcz czerwony z pasztecikami, ciasta, kołacze\n\n🍺 Piwo polskie, grzane wino\n\n📍 Miejsce: Carrer de Sardenya, 29, 08005 Barcelona\n\n🎉 Zapraszamy!',
    date: '2022-01-30',
    time: '10:00 - 20:00',
    location: 'Carrer de Sardenya, 29, 08005 Barcelona',
    category: 'Finał WOŚP',
    image: '/images/33-final/final-2024-main.jpg',
    gallery: [
      '/images/33-final/final-2024-1.jpg',
      '/images/33-final/final-2024-2.jpg',
      '/images/33-final/final-2024-3.jpg',
      '/images/33-final/final-2024-4.jpg',
      '/images/33-final/final-2024-5.jpg',
      '/images/33-final/final-2024-6.jpg'
    ],
    amountRaised: '8,989.94 €',
    organizer: 'WOŚP Barcelona',
    highlights: [
      'Pierwszy finał po pandemii',
      'Warsztaty KOSMOHISPLANO dla dzieci w różnym wieku',
      'Pokazy baniek BUBBLES.MASTERS i BUBBLES.LOCOS',
      'Koncerty: MARCIN BURY & JULIA KWIEK, HEADBUGBAND, SWINGITBABY',
      'Sesje zdjęciowe AGPHOTOGRAPHYBCN',
      'Tradycyjne Światełko do nieba'
    ]
  }
];


export default function EventPage() {
  const t = useTranslations('events');
  const tHome = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;
  const id = params.id as string;
  const event = allEvents.find(e => e.id === parseInt(id));

  if (!event) {
    notFound();
  }

  // Get translated content
  const eventTitle = t(`items.${event.id}.title`);
  const eventDescription = t(`items.${event.id}.description`);
  const eventFullDescription = t.has(`items.${event.id}.fullDescription`)
    ? t(`items.${event.id}.fullDescription`)
    : event.fullDescription;
  const eventLocation = t.has(`items.${event.id}.location`)
    ? t(`items.${event.id}.location`)
    : event.location;
  // Map Polish category names to translation keys
  const categoryKeyMap: Record<string, string> = {
    'Spotkanie Wolontariuszy': 'volunteerMeeting',
    'Bieg': 'run',
    'Finał WOŚP': 'final',
    'Aukcja Online': 'onlineAuction',
    'Wernisaż': 'vernissage',
    'Warsztaty': 'workshop',
    'Spotkanie Literackie': 'literaryMeeting',
    'Warsztaty Fotograficzne': 'photoWorkshop',
    'Warsztaty Świąteczne': 'christmasWorkshop'
  };
  const categoryKey = categoryKeyMap[event.category] || null;
  const eventCategory = categoryKey ? t(`categories.${categoryKey}`) : event.category;

  // Simple helper for Google Calendar dates
  const parseTimes = (dateStr: string, timeStr?: string) => {
    const [y, m, d] = dateStr.split('-').map((x) => parseInt(x, 10));
    const isAllDay = !timeStr || timeStr.toLowerCase().includes('cały dzień') || timeStr.toLowerCase().includes('całodniowy');

    if (isAllDay) {
      const dtStart = new Date(y, m - 1, d);
      const dtEnd = new Date(y, m - 1, d + 1);
      return { dtStart, dtEnd, isAllDay: true };
    }

    let startH = 9, startM = 0, endH = 10, endM = 0;
    const mRange = timeStr.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
    const mSingle = timeStr.match(/(\d{1,2}):(\d{2})/);

    if (mRange) {
      startH = parseInt(mRange[1], 10); startM = parseInt(mRange[2], 10);
      endH = parseInt(mRange[3], 10); endM = parseInt(mRange[4], 10);
    } else if (mSingle) {
      startH = parseInt(mSingle[1], 10); startM = parseInt(mSingle[2], 10);
      endH = (startH + 2) % 24; endM = startM;
    }

    const dtStart = new Date(y, m - 1, d, startH, startM, 0);
    const dtEnd = new Date(y, m - 1, d, endH, endM, 0);
    return { dtStart, dtEnd, isAllDay: false };
  };

  // Helper for URL-based calendar links
  const getCalendarDates = () => {
    const timeInfo = parseTimes(event.date, event.time);
    const { dtStart, dtEnd, isAllDay } = timeInfo;

    if (isAllDay) {
      const startDate = event.date.replace(/-/g, '');
      const endDate = event.date.replace(/-/g, '');
      return { startDate, endDate, isAllDay };
    } else {
      // Simple date formatting for Google Calendar
      const formatForGoogle = (date: Date) => {
        const pad = (n: number) => String(n).padStart(2, '0');
        const y = date.getFullYear();
        const m = pad(date.getMonth() + 1);
        const d = pad(date.getDate());
        const h = pad(date.getHours());
        const min = pad(date.getMinutes());
        return `${y}${m}${d}T${h}${min}00`;
      };

      const startDate = formatForGoogle(dtStart);
      const endDate = formatForGoogle(dtEnd);
      return { startDate, endDate, isAllDay };
    }
  };

  const isPastEvent = new Date(event.date) < new Date();

  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href={`/${locale}/events`} className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('detail.backToEvents')}
          </Link>
        </div>

        {/* Event header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image
              src={event.image}
              alt={eventTitle}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                {eventCategory}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {eventTitle}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('detail.aboutEvent')}</h2>
                <div className="space-y-6">
                  {eventFullDescription?.split('\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (trimmed === '') return <div key={index} className="h-1"></div>;

                    // Specialized Warning Box for ⚠️ paragraphs
                    if (trimmed.includes('⚠️')) {
                      return (
                        <div key={index} className="my-8 p-5 rounded-2xl bg-orange-50 border-2 border-orange-100 shadow-sm flex items-start gap-4 transition-all hover:shadow-md">
                          <div className="bg-orange-100 p-2 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                          </div>
                          <div className="text-orange-950 leading-relaxed font-semibold text-lg flex-1">
                            <FormattedText text={trimmed} />
                          </div>
                        </div>
                      );
                    }

                    // Specialized Info Box for ℹ️ or 📞 paragraphs
                    if (trimmed.includes('📞') || (trimmed.includes('📍') && !trimmed.includes('•'))) {
                      return (
                        <div key={index} className="my-6 p-5 rounded-2xl bg-blue-50 border-2 border-blue-100 shadow-sm flex items-start gap-4 transition-all hover:shadow-md">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          </div>
                          <div className="text-blue-950 leading-relaxed text-lg flex-1">
                            <FormattedText text={trimmed} />
                          </div>
                        </div>
                      );
                    }

                    // Check if paragraph is a subtitle
                    const isSubtitle = (
                      trimmed.includes('🏃‍♂️') ||
                      trimmed.includes('📝') ||
                      trimmed.includes('🎁') ||
                      trimmed.includes('👥') ||
                      trimmed.includes('📧') ||
                      trimmed.includes('🗺️') ||
                      trimmed.includes('✨') ||
                      /^[A-ZĄĆĘŁŃÓŚŹŻ\s]+:$/.test(trimmed)
                    ) && (trimmed.endsWith(':') || (trimmed.length < 40 && trimmed.toUpperCase() === trimmed));

                    if (isSubtitle) {
                      return (
                        <h3 key={index} className="text-2xl font-black text-gray-900 mt-10 mb-6 flex items-center gap-3 group">
                          <span className="w-1.5 h-8 bg-red-600 rounded-full group-hover:h-10 transition-all duration-300"></span>
                          <FormattedText text={trimmed} />
                        </h3>
                      );
                    }

                    // Bullet points
                    const isBulletPoint = trimmed.startsWith('•') || /^\d+\./.test(trimmed);
                    if (isBulletPoint) {
                      return (
                        <div key={index} className="flex items-start gap-4 mb-3 ml-4 text-gray-800 group">
                          <span className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <p className="leading-relaxed flex-1 text-lg">
                            <FormattedText text={trimmed.replace(/^[•\d\.]+\s*/, '')} />
                          </p>
                        </div>
                      );
                    }

                    // Regular paragraph
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed text-lg mb-4 ml-1">
                        <FormattedText text={trimmed} />
                      </p>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('detail.gallery')}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {event.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${event.title} - ${t('detail.photoAlt')} ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event details */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('detail.eventDetails')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      {event.time && <div className="text-sm text-gray-500">{event.time}</div>}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                    <div>
                      {(eventLocation.includes('Online') || eventLocation.includes('Allegro')) ? (
                        <span className="text-gray-700">{eventLocation}</span>
                      ) : (
                        <a
                          href={event.id === 5 ? 'https://www.google.com/maps/search/?api=1&query=Hotel%20W%20Barcelona' : event.id === 1 ? 'https://maps.app.goo.gl/dJVBoLze5fe5AhB38' : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventLocation)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 hover:underline"
                        >
                          {eventLocation}
                        </a>
                      )}
                    </div>
                  </div>

                  {event.id === 5 && (
                    <div className="pt-2">
                      <a
                        href="https://www.facebook.com/share/r/1AgZ12M2Ha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          {t('detail.routeVideo')}
                        </Button>
                      </a>
                    </div>
                  )}

                  {event.id === 9 && event.allegroLink && (
                    <div className="pt-2">
                      <a
                        href={event.allegroLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white cursor-pointer">
                          {tHome('allegro.viewAuctions')}
                        </Button>
                      </a>
                    </div>
                  )}

                  {event.contact && (
                    <div className="flex items-center text-gray-700">
                      <span className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 text-center">📧</span>
                      <div>
                        <a href={`mailto:${event.contact}`} className="text-red-600 hover:text-red-700">
                          {event.contact}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Add to calendar button */}
                {!isPastEvent && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href={(() => {
                        const { startDate, endDate } = getCalendarDates();
                        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location)}`;
                      })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center w-full justify-center rounded-md border border-blue-300 bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 text-sm font-medium shadow-sm transition-colors"
                    >
                      <Calendar className="w-4 h-4 mr-2 text-blue-700" />
                      {t('detail.addToCalendar')}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Amount raised for past events */}
            {isPastEvent && (event.amountRaised || event.totalAmount) && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">{t('detail.amountRaised')}</h3>
                  <div className="space-y-6">
                    {event.amountRaised && (
                      <div className="text-center bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="text-xs uppercase tracking-wide text-gray-600 mb-2 font-semibold">{t('detail.duringEvent')}</div>
                        <div className="text-4xl font-bold text-green-600">
                          {event.amountRaised}
                        </div>
                      </div>
                    )}
                    {event.totalAmount && (
                      <div className="text-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-medium">{t('detail.totalDuringFinale')}</div>
                        <div className="text-2xl font-bold text-gray-700">
                          {event.totalAmount}
                        </div>
                      </div>
                    )}
                    <div className="text-center text-sm text-gray-600 pt-2 italic">
                      {t('detail.thankYou')} ❤️
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}


            {/* Registration for special events */}
            {!isPastEvent && event.registrationLink && event.id !== 5 && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{t('detail.registration')}</h3>
                  <div className="space-y-3">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                        {t('detail.registerForRun')}
                      </Button>
                    </a>
                    {event.registrationDeadline && (
                      <p className="text-sm text-gray-600 text-center">
                        {t('detail.registrationDeadline')}: {event.registrationDeadline}
                      </p>
                    )}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-800">
                        <strong>{t('detail.warning')}:</strong> {t('detail.registrationWarning')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('detail.contact')}</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                    <Link href={`/${locale}/contact`}>{t('detail.contactUs')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
