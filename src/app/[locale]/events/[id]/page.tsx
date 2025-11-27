import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siFacebook, siMeetup } from 'simple-icons/icons';
import { notFound } from 'next/navigation';

// Mock events data (same as in events page)
const allEvents = [
  {
    id: 1,
    title: '34. Finał WOŚP w Barcelonie',
    description: 'Największe wydarzenie charytatywne roku! Dołącz do nas i pomagajmy razem. Cel: Zdrowe brzuszki naszych dzieci - wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u najmłodszych pacjentów.',
    fullDescription: 'Serdecznie zapraszamy na 34. Finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie! To największe wydarzenie charytatywne roku, podczas którego zbieramy fundusze na wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u najmłodszych pacjentów.\n\nW tym roku gramy dla "Zdrowych brzuszków naszych dzieci". Cel tegorocznej zbiórki to wsparcie około 1,2–1,5 mln dzieci, które potrzebują specjalistycznej opieki medycznej.\n\nPodczas finału czekają na Was:\n• Koncerty polskich i katalońskich artystów\n• Aukcje charytatywne z wyjątkowymi przedmiotami\n• Stoiska z polskim jedzeniem\n• Gry i zabawy dla dzieci\n• Licytacje "Złotych Serc"\n• Możliwość zakupu pamiątkowych gadżetów WOŚP\n\nKażda złotówka, każde euro ma znaczenie! Razem możemy zrobić coś naprawdę wielkiego dla polskich dzieci.',
    date: '2025-01-26',
    time: '10:00 - 22:00',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/images/33-final/final-2024-main.jpg',
    gallery: [
      '/images/33-final/final-2024-1.jpg',
      '/images/33-final/final-2024-2.jpg',
      '/images/33-final/final-2024-3.jpg',
      '/images/33-final/final-2024-4.jpg'
    ],
    attendees: 500,
    registrationRequired: true,
    isFinal: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/34-final-wosp',
    facebookLink: 'https://facebook.com/events/34-final-wosp-barcelona',
    targetAmount: '15,000 €',
    currentAmount: '0 €',
    organizer: 'WOŚP Barcelona',
    contact: 'kontakt@wospbarcelona.org'
  },
  {
    id: 2,
    title: 'Koncert Charytatywny "Serce dla dzieci"',
    description: 'Wieczór muzyki i pomocy - koncerty polskich i katalońskich artystów.',
    fullDescription: 'Zapraszamy na wyjątkowy wieczór muzyki i pomocy! Koncert "Serce dla dzieci" to wydarzenie, podczas którego polscy i katalońscy artyści łączą siły, aby wspierać działalność charytatywną WOŚP Barcelona.\n\nW programie:\n• Występy polskich artystów mieszkających w Barcelonie\n• Koncerty katalońskich muzyków wspierających naszą misję\n• Prezentacje multimedialne o działalności WOŚP\n• Możliwość zakupu pamiątek i gadżetów\n• Networking z polską społecznością\n\nCały dochód z wydarzenia zostanie przekazany na cele charytatywne związane ze wsparciem polskich dzieci.',
    date: '2025-02-10',
    time: '19:00',
    location: 'Palau de la Música Catalana',
    category: 'Koncert',
    image: '/images/blog/koncert-serce.jpg',
    gallery: [
      '/images/blog/koncert-1.jpg',
      '/images/blog/koncert-2.jpg',
      '/images/blog/koncert-3.jpg'
    ],
    attendees: 200,
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/koncert-charytatywny',
    facebookLink: 'https://facebook.com/events/koncert-serce-dla-dzieci',
    targetAmount: '3,000 €',
    currentAmount: '0 €',
    organizer: 'WOŚP Barcelona',
    contact: 'kontakt@wospbarcelona.org'
  },
  {
    id: 3,
    title: 'Spotkanie Wolontariuszy',
    description: 'Organizacyjne spotkanie dla wszystkich chętnych do pomocy przy WOŚP 2025.',
    fullDescription: 'Serdecznie zapraszamy wszystkich chętnych do pomocy przy organizacji 34. Finału WOŚP w Barcelonie!\n\nPodczas spotkania:\n• Poznasz zespół organizacyjny WOŚP Barcelona\n• Dowiesz się o planach na 34. Finał\n• Wybierzesz obszar, w którym chcesz pomóc\n• Otrzymasz materiały informacyjne\n• Poznasz innych wolontariuszy\n\nSzukamy pomocy w następujących obszarach:\n• Obsługa stoisk i punktów informacyjnych\n• Pomoc przy organizacji koncertów\n• Wsparcie w mediach społecznościowych\n• Tłumaczenia (polski-hiszpański-kataloński)\n• Pomoc techniczna i logistyczna\n\nKażda pomoc jest cenna! Dołącz do naszego zespołu i pomóż nam zorganizować niezapomniany finał.',
    date: '2025-01-15',
    time: '18:00',
    location: 'Centrum Polonijne, Barcelona',
    category: 'Spotkanie',
    image: '/images/blog/spotkanie-wolontariuszy.jpg',
    gallery: [
      '/images/blog/wolontariusze-1.jpg',
      '/images/blog/wolontariusze-2.jpg'
    ],
    attendees: 50,
    registrationRequired: false,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/spotkanie-wolontariuszy',
    facebookLink: 'https://facebook.com/events/spotkanie-wolontariuszy',
    organizer: 'WOŚP Barcelona',
    contact: 'wolontariat@wospbarcelona.org'
  },
  {
    id: 4,
    title: 'Aukcja Sztuki WOŚP',
    description: 'Wystawa i aukcja dzieł polskich artystów na rzecz WOŚP.',
    fullDescription: 'Zapraszamy na wyjątkową wystawę i aukcję dzieł polskich artystów mieszkających w Barcelonie i okolicach!\n\nW programie:\n• Wystawa prac polskich artystów\n• Aukcja charytatywna dzieł sztuki\n• Spotkania z artystami\n• Prezentacje o polskiej sztuce współczesnej\n• Degustacja polskich specjałów\n\nWszystkie zebrane środki zostaną przekazane na cele charytatywne WOŚP. To doskonała okazja, aby wesprzeć polską sztukę i jednocześnie pomóc potrzebującym dzieciom.\n\nWśród wystawianych prac znajdziecie:\n• Obrazy olejne i akrylowe\n• Grafiki i rysunki\n• Rzeźby i instalacje\n• Fotografie artystyczne\n• Rękodzieło artystyczne',
    date: '2025-01-20',
    time: '12:00 - 18:00',
    location: 'Galeria Sztuki, Barcelona',
    category: 'Aukcja',
    image: '/images/blog/aukcja-sztuki.jpg',
    gallery: [
      '/images/blog/sztuka-1.jpg',
      '/images/blog/sztuka-2.jpg',
      '/images/blog/sztuka-3.jpg'
    ],
    attendees: 100,
    registrationRequired: false,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/aukcja-sztuki',
    facebookLink: 'https://facebook.com/events/aukcja-sztuki-wosp',
    targetAmount: '2,500 €',
    currentAmount: '0 €',
    organizer: 'WOŚP Barcelona',
    contact: 'sztuka@wospbarcelona.org'
  },
  {
    id: 5,
    title: '20. Bieg WOŚP "Policz się z cukrzycą"',
    description: 'Bieg charytatywny na 5 km. Start: Sagrada Familia, Meta: Hotel W - Barceloneta. Zbiórka: Carrer de Lepant, 281. Rejestracja przez Slotmarket do 31.12.2025.',
    fullDescription: 'Dołącz do 20. Biegu WOŚP "Policz się z cukrzycą"! To bieg charytatywny na dystansie 5 km przez piękną Barcelonę.\n\n🏃‍♂️ SZCZEGÓŁY BIEGU:\n• Dystans: 5 km\n• Data: 18 stycznia 2026\n• Start/Zbiórka: Sagrada Familia (tam zostaną rozdane koszulki)\n• Meta: Hotel W - Barceloneta (dla każdego czeka medal)\n• Miejsce zbiórki: Carrer de Lepant, 281, L\'Eixample\n\n📝 REJESTRACJA (OBOWIĄZKOWA):\nKażdy uczestnik biegu organizowanego przez Sztab WOŚP w Barcelonie musi zarejestrować się osobiście w systemie Slotmarket w biegu WIRTUALNYM.\n\n⚠️ WAŻNE INSTRUKCJE REJESTRACJI:\n1. Zarejestruj się przez Slotmarket\n2. Wpisz adres wysyłki na Polskę: Dominikańska 19C, 02-738 Warszawa\n3. W polu "Klub" wpisz: 6516 Barcelona\n4. Wybierz opcję przesyłki krajowej (do Polski)\n5. Wyślij potwierdzenie rejestracji z imieniem, nazwiskiem i rozmiarem koszulki na: biegwospbarcelona@gmail.com\n6. Termin rejestracji: do 31.12.2025\n\n🎁 PAKIET STARTOWY:\nWarunkiem otrzymania pakietów w zbiorczej gratisowej paczce jest poprawne wypełnienie wszystkich pól w formularzu Slotmarket.\n\n⚠️ UWAGA: Niepoprawne wypełnienie formularza może skutkować koniecznością dopłaty 150 zł za przesyłkę lub brakiem otrzymania pakietu!',
    date: '2026-01-18',
    time: 'Start: 10:30',
    location: 'Sagrada Familia',
    category: 'Bieg',
    image: '/images/kalendarz/workoplecak_20bieg_podglad.jpg',
    gallery: [
      '/images/kalendarz/workoplecak_20bieg_podglad.jpg'
    ],
    attendees: 100,
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/bieg-wosp-barcelona',
    facebookLink: 'https://facebook.com/events/bieg-wosp-policz-sie-z-cukrzyca',
    registrationLink: 'https://slotmarket.pl/event/details/741/20-bieg-wosp-policz-sie-z-cukrzyca-wirtualny',
    organizer: 'WOŚP Barcelona',
    contact: 'biegwospbarcelona@gmail.com',
    isSpecialEvent: true,
    registrationDeadline: '31.12.2025'
  },
  // Past events
  {
    id: 101,
    title: '33. Finał WOŚP w Barcelonie',
    description: 'Niesamowity finał! Zebraliśmy rekordową kwotę 13,881.91 euro!',
    fullDescription: 'Dziękujemy wszystkim, którzy wzięli udział w 33. Finale WOŚP w Barcelonie! Był to niezwykły dzień pełen muzyki, radości i pomocy.\n\nOsiągnięcia 33. Finału:\n• Zebraliśmy rekordową kwotę 13,881.91 euro!\n• Uczestniczyło ponad 520 osób\n• Odbyły się 4 koncerty\n• Zorganizowano 15 aukcji charytatywnych\n• Sprzedano ponad 200 gadżetów WOŚP\n\nŚrodki zostały przekazane na zakup sprzętu medycznego dla polskich szpitali dziecięcych. Dzięki Waszemu wsparciu mogliśmy realnie pomóc potrzebującym dzieciom.\n\nRelacja z wydarzenia:\nFinał rozpoczął się o godzinie 10:00 na Plaça de Catalunya. Przez cały dzień trwały koncerty, aukcje i różnorodne atrakcje. Pogoda dopisała, a atmosfera była niesamowita!\n\nDziękujemy wszystkim wolontariuszom, artystom, sponsorom i uczestnikom za wspaniały dzień!',
    date: '2024-01-28',
    location: 'Plaça de Catalunya, Barcelona',
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
    attendees: 520,
    amountRaised: '13,881.91 €',
    organizer: 'WOŚP Barcelona',
    highlights: [
      'Rekordowa kwota zebrana w historii WOŚP Barcelona',
      'Największa frekwencja w historii finałów',
      'Pierwszy finał z transmisją na żywo',
      'Udział katalońskich artystów'
    ]
  },
  {
    id: 102,
    title: 'Mikołajki dla Dzieci 2023',
    description: 'Świąteczne spotkanie z prezentami dla polskich dzieci w Barcelonie.',
    fullDescription: 'Magiczne Mikołajki dla polskich dzieci w Barcelonie! Było to wyjątkowe wydarzenie, które przyniosło radość najmłodszym członkom naszej społeczności.\n\nProgram wydarzenia:\n• Spotkanie ze Świętym Mikołajem\n• Rozdanie prezentów dla dzieci\n• Polskie kolędy i piosenki\n• Tradycyjne polskie słodycze\n• Warsztaty plastyczne\n• Opowiadanie polskich bajek\n\nW wydarzeniu wzięło udział 80 dzieci wraz z rodzicami. Każde dziecko otrzymało prezent, a rodzice mogli cieszyć się wspólnym czasem z polską społecznością.\n\nZebraliśmy również 2,000 euro na cele charytatywne, które zostały przekazane na wsparcie polskich rodzin w trudnej sytuacji w Barcelonie.',
    date: '2023-12-06',
    location: 'Polski Kościół św. Jerzego',
    category: 'Święta',
    image: '/images/blog/mikolajki-2023.jpg',
    gallery: [
      '/images/blog/mikolajki-1.jpg',
      '/images/blog/mikolajki-2.jpg',
      '/images/blog/mikolajki-3.jpg'
    ],
    attendees: 80,
    amountRaised: '2,000 €',
    organizer: 'WOŚP Barcelona',
    highlights: [
      '80 szczęśliwych dzieci',
      'Tradycyjne polskie Mikołajki',
      'Wsparcie dla polskich rodzin',
      'Integracja społeczności'
    ]
  }
];

interface EventPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { id, locale } = await params;
  const event = allEvents.find(e => e.id === parseInt(id));

  if (!event) {
    notFound();
  }

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
            Powrót do wydarzeń
          </Link>
        </div>

        {/* Event header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                {event.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {event.title}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O wydarzeniu</h2>
                <div className="prose prose-gray max-w-none">
                  {event.fullDescription?.split('\n').map((paragraph, index) => {
                    // Check if paragraph is a subtitle (contains common subtitle patterns)
                    const trimmed = paragraph.trim();
                    const isSubtitle = (
                      trimmed.includes('🏃‍♂️') || 
                      trimmed.includes('📝') || 
                      trimmed.includes('⚠️') || 
                      trimmed.includes('🎁') ||
                      trimmed.includes('👥') ||
                      trimmed.includes('📧') ||
                      /^[A-ZĄĆĘŁŃÓŚŹŻ\s]+:$/.test(trimmed)
                    ) && trimmed.endsWith(':');
                    
                    if (isSubtitle) {
                      return (
                        <h3 key={index} className="text-lg font-bold text-gray-800 mt-6 mb-3 flex items-center">
                          {paragraph}
                        </h3>
                      );
                    }
                    
                    // Check if paragraph is empty (just spacing)
                    if (paragraph.trim() === '') {
                      return <div key={index} className="mb-2"></div>;
                    }
                    
                    // Check if paragraph starts with bullet point or number
                    const isBulletPoint = /^[•\d]\s/.test(paragraph.trim());
                    
                    if (isBulletPoint) {
                      return (
                        <p key={index} className="mb-2 text-gray-700 leading-relaxed ml-4">
                          {paragraph}
                        </p>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeria</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {event.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${event.title} - zdjęcie ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Highlights for past events */}
            {isPastEvent && event.highlights && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Najważniejsze osiągnięcia</h2>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event details */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Szczegóły wydarzenia</h3>
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
                      <a 
                        href={event.id === 5 ? 'https://maps.app.goo.gl/FR1RXEmzdsYAX42a6' : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 hover:underline"
                      >
                        {event.location}
                      </a>
                    </div>
                  </div>
                  


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
                      Dodaj do Google Calendar
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Fundraising progress for upcoming events */}
            {!isPastEvent && event.targetAmount && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Cel zbiórki</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Zebrano:</span>
                      <span className="font-medium">{event.currentAmount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cel:</span>
                      <span className="font-medium">{event.targetAmount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Amount raised for past events */}
            {isPastEvent && event.amountRaised && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Zebrana kwota</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {event.amountRaised}
                    </div>
                    <div className="text-sm text-gray-600">
                      Dziękujemy za wsparcie!
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Social links */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Śledź wydarzenie</h3>
                <div className="space-y-3">
                  {event.meetupLink && (
                    <a
                      href={event.meetupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current text-red-600 mr-3" viewBox="0 0 24 24">
                        <path d={siMeetup.path} />
                      </svg>
                      <span className="text-red-700 font-medium">Zobacz na Meetup</span>
                      <ExternalLink className="w-4 h-4 ml-auto text-red-600" />
                    </a>
                  )}
                  
                  {event.facebookLink && (
                    <a
                      href={event.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current text-blue-600 mr-3" viewBox="0 0 24 24">
                        <path d={siFacebook.path} />
                      </svg>
                      <span className="text-blue-700 font-medium">Zobacz na Facebook</span>
                      <ExternalLink className="w-4 h-4 ml-auto text-blue-600" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Registration for special events */}
            {!isPastEvent && event.registrationLink && (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Rejestracja</h3>
                  <div className="space-y-3">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Zarejestruj się na bieg
                      </Button>
                    </a>
                    {event.registrationDeadline && (
                      <p className="text-sm text-gray-600 text-center">
                        Termin rejestracji: {event.registrationDeadline}
                      </p>
                    )}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-800">
                        <strong>Uwaga:</strong> Niepoprawne wypełnienie formularza może skutkować dopłatą 150 zł lub brakiem pakietu!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Kontakt</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link href={`/${locale}/contact`}>Skontaktuj się z nami</Link>
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
