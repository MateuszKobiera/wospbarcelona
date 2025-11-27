import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siFacebook, siInstagram, siMeetup } from 'simple-icons/icons';

// Mock events data - sorted by date (closest first)
const upcomingEvents = [
  {
    id: 3,
    title: 'Spotkanie Wolontariuszy',
    description: 'Organizacyjne spotkanie dla wszystkich chętnych do pomocy przy WOŚP 2025.',
    date: '2025-01-15',
    time: '18:00',
    location: 'Centrum Polonijne, Barcelona',
    category: 'Spotkanie',
    image: '/api/placeholder/400/250',
    attendees: 50,
    registrationRequired: false,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/spotkanie-wolontariuszy',
    facebookLink: 'https://facebook.com/events/spotkanie-wolontariuszy'
  },
  {
    id: 5,
    title: '20. Bieg WOŚP "Policz się z cukrzycą"',
    description: 'Bieg charytatywny na 5 km. Start: Sagrada Familia, Meta: Hotel W - Barceloneta. Zbiórka: Carrer de Lepant, 281. Rejestracja przez Slotmarket do 31.12.2025.',
    date: '2026-01-18',
    time: '10:30',
    location: 'Sagrada Familia',
    category: 'Bieg',
    image: '/images/kalendarz/workoplecak_20bieg_podglad.jpg',
    attendees: 100,
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/bieg-wosp-barcelona',
    facebookLink: 'https://facebook.com/events/bieg-wosp-policz-sie-z-cukrzyca',
    registrationLink: 'https://slotmarket.pl/event/details/741/20-bieg-wosp-policz-sie-z-cukrzyca-wirtualny',
    isSpecialEvent: true
  },
  {
    id: 4,
    title: 'Aukcja Sztuki WOŚP',
    description: 'Wystawa i aukcja dzieł polskich artystów na rzecz WOŚP.',
    date: '2025-01-20',
    time: '12:00 - 18:00',
    location: 'Galeria Sztuki, Barcelona',
    category: 'Aukcja',
    image: '/api/placeholder/400/250',
    attendees: 100,
    registrationRequired: false,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/aukcja-sztuki',
    facebookLink: 'https://facebook.com/events/aukcja-sztuki-wosp'
  },
  {
    id: 1,
    title: '34. Finał WOŚP w Barcelonie',
    description: 'Największe wydarzenie charytatywne roku! Dołącz do nas i pomagajmy razem. Cel: Zdrowe brzuszki naszych dzieci - wsparcie diagnostyki i leczenia chorób przewodu pokarmowego u najmłodszych pacjentów.',
    date: '2025-01-26',
    time: '10:00 - 22:00',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/600/400',
    attendees: 500,
    registrationRequired: true,
    isFinal: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/34-final-wosp',
    facebookLink: 'https://facebook.com/events/34-final-wosp-barcelona'
  },
  {
    id: 2,
    title: 'Koncert Charytatywny "Serce dla dzieci"',
    description: 'Wieczór muzyki i pomocy - koncerty polskich i katalońskich artystów.',
    date: '2025-02-10',
    time: '19:00',
    location: 'Palau de la Música Catalana',
    category: 'Koncert',
    image: '/api/placeholder/400/250',
    attendees: 200,
    registrationRequired: true,
    meetupLink: 'https://www.meetup.com/wosp-barcelona/events/koncert-charytatywny',
    facebookLink: 'https://facebook.com/events/koncert-serce-dla-dzieci'
  }
];

const pastEvents = [
  {
    id: 101,
    title: '33. Finał WOŚP w Barcelonie',
    description: 'Niesamowity finał! Zebraliśmy rekordową kwotę 13,881.91 euro!',
    date: '2024-01-28',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/400/250',
    attendees: 520,
    amountRaised: '13,881.91 €'
  },
  {
    id: 102,
    title: 'Mikołajki dla Dzieci 2023',
    description: 'Świąteczne spotkanie z prezentami dla polskich dzieci w Barcelonie.',
    date: '2023-12-06',
    location: 'Polski Kościół św. Jerzego',
    category: 'Święta',
    image: '/api/placeholder/400/250',
    attendees: 80,
    amountRaised: '2,000 €'
  },
  {
    id: 103,
    title: 'Koncert Jesieni Polskiej',
    description: 'Wieczór polskiej muzyki i poezji w sercu Barcelony.',
    date: '2023-10-15',
    location: 'Teatr Polònia, Barcelona',
    category: 'Koncert',
    image: '/api/placeholder/400/250',
    attendees: 150,
    amountRaised: '3,200 €'
  },
  {
    id: 104,
    title: '32. Finał WOŚP w Barcelonie',
    description: 'Wspaniały finał z rekordową frekwencją!',
    date: '2023-01-29',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/400/250',
    attendees: 450,
    amountRaised: '10,460.47 €'
  },
  {
    id: 105,
    title: 'Letni Piknik Polonijny',
    description: 'Rodzinne spotkanie z grami, konkursami i polskim jedzeniem.',
    date: '2022-07-16',
    location: 'Park Ciutadella, Barcelona',
    category: 'Piknik',
    image: '/api/placeholder/400/250',
    attendees: 200,
    amountRaised: '1,500 €'
  },
  {
    id: 106,
    title: '31. Finał WOŚP w Barcelonie',
    description: 'Pierwszy finał po pandemii - pełen emocji i radości!',
    date: '2022-01-30',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/400/250',
    attendees: 380,
    amountRaised: '8,989.94 €'
  },
  {
    id: 107,
    title: 'Wigilia Polonijna 2021',
    description: 'Tradycyjna wigilia dla polskiej społeczności w Barcelonie.',
    date: '2021-12-18',
    location: 'Centrum Polonijne, Barcelona',
    category: 'Święta',
    image: '/api/placeholder/400/250',
    attendees: 120,
    amountRaised: '800 €'
  }
];

interface EventsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  
  // Helper for Google Calendar links
  const getGoogleCalendarUrl = (event: typeof upcomingEvents[number]) => {
    const isAllDay = !event.time || event.time.toLowerCase().includes('cały dzień');
    let startDate, endDate;
    
    if (isAllDay) {
      startDate = event.date.replace(/-/g, '');
      endDate = event.date.replace(/-/g, '');
    } else {
      // For timed events, use a simple format
      startDate = event.date.replace(/-/g, '') + 'T090000';
      endDate = event.date.replace(/-/g, '') + 'T100000';
    }
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location)}`;
  };

  return (
    <>
      <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Kalendarz wydarzeń
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dołącz do naszych wydarzeń charytatywnych i pomagaj razem z nami. 
              Każde wydarzenie to szansa na realną pomoc i świetna zabawa!
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Nadchodzące wydarzenia</h2>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event) => {
                const isFinal = event.isFinal;
                const cardClass = isFinal 
                  ? "h-full overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  : "h-full overflow-hidden bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow";
                
                return (
                  <Card key={event.id} className={cardClass}>
                    <div className={`${isFinal ? 'lg:flex lg:h-full' : 'md:flex md:h-full'}`}>
                      <div className={isFinal ? 'lg:w-1/2' : 'md:w-1/3'}>
                        <div className={`${isFinal ? 'h-64 lg:h-full' : 'h-48 md:h-full'} relative rounded-l-md overflow-hidden`}>
                          {event.image && !event.image.includes('/api/placeholder') ? (
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${isFinal ? 'from-red-500 to-orange-500' : 'from-red-400 to-pink-400'} flex items-center justify-center`}>
                              <Calendar className={`${isFinal ? 'w-24 h-24' : 'w-16 h-16'} text-white`} />
                            </div>
                          )}
                          {isFinal && (
                            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold z-10">
                              FINAŁ!
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={`${isFinal ? 'lg:w-1/2 p-8' : 'md:w-2/3 p-6'} md:flex md:flex-col md:h-full`}>
                        <div className="mb-3">
                          <span className={`inline-block ${isFinal ? 'bg-red-200 text-red-900' : 'bg-red-100 text-red-800'} text-xs px-2 py-1 rounded`}>
                            {event.category}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className={`${isFinal ? 'text-2xl lg:text-3xl' : 'text-xl'} font-bold text-gray-900 mb-2`}>
                            {event.title}
                          </h3>
                          <p className={`text-gray-600 ${isFinal ? 'text-base' : 'line-clamp-2'}`}>
                            {event.description}
                          </p>
                        </div>

                        {/* Footer: icons + actions at the bottom */}
                        <div className="mt-6 border-t pt-4">
                          <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2 text-red-600" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-2 text-red-600" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="w-4 h-4 mr-2 text-red-600" />
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

                          {/* Social links */}
                          <div className="flex space-x-2 mt-4">
                            <a
                              href={event.meetupLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                              title="Zobacz na Meetup"
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d={siMeetup.path} />
                              </svg>
                            </a>
                            <a
                              href={event.facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                              title="Zobacz na Facebook"
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d={siFacebook.path} />
                              </svg>
                            </a>
                          </div>

                          <div className="flex space-x-3 mt-4">
                            <Link href={`/${locale}/events/${event.id}`} className="flex-1">
                              <Button className={`w-full ${isFinal ? 'bg-red-600 hover:bg-red-700 text-lg py-3' : 'bg-red-600 hover:bg-red-700'}`}>
                                Zobacz więcej
                              </Button>
                            </Link>
                            {/* Per-event small add-to-calendar */}
                            <a
                              href={getGoogleCalendarUrl(event)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Dodaj do Google Calendar"
                              title="Dodaj do Google Calendar"
                              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-blue-300 bg-white text-blue-700 hover:bg-blue-50 shadow-sm"
                            >
                              <Calendar className="w-4 h-4 text-blue-700" />
                            </a>
                          </div>

                          {/* Special registration button for running event */}
                          {event.registrationLink && (
                            <div className="mt-3">
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
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Minione wydarzenia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {pastEvents.map((event) => (
                <Card key={event.id} className="h-full bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3 h-3 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-2" />
                        <a 
                          href={event.id === 5 ? 'https://maps.app.goo.gl/FR1RXEmzdsYAX42a6' : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 hover:underline"
                        >
                          {event.location}
                        </a>
                      </div>
                      {event.amountRaised && (
                        <div className="flex items-center text-sm font-semibold text-green-600">
                          <span className="mr-2">💰</span>
                          Zebrano: {event.amountRaised}
                        </div>
                      )}
                    </div>
                    <Link href={`/${locale}/events/${event.id}`}>
                      <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                        Zobacz relację →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="bg-orange-50 rounded-lg p-8 mb-20 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nasze osiągnięcia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Wydarzeń rocznie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600">Wolontariuszy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500K€</div>
                <div className="text-gray-600">Zebranych funduszy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">8 lat</div>
                <div className="text-gray-600">Działalności</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chcesz zorganizować wydarzenie z nami?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Masz pomysł na wydarzenie charytatywne? Chcesz zostać partnerem? 
              Skontaktuj się z nami i razem zorganizujmy coś wyjątkowego!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Skontaktuj się z nami
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Zostań partnerem
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      {/* Social Media - using same tiles as homepage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dołącz do nas</h2>
            <p className="text-gray-600">Jesteśmy na Facebooku, Instagramie i Meetupie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-white border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-blue-600 fill-current"
                        aria-hidden
                      >
                        <path d={siFacebook.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Facebook</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Zobacz, co u nas słychać. Aktualności, zdjęcia i relacje z wydarzeń.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://instagram.com/wospbarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-white border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-pink-600 fill-current"
                        aria-hidden
                      >
                        <path d={siInstagram.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Instagram</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Najnowsze zdjęcia i stories z naszych działań w Barcelonie.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://www.meetup.com/wośp-barcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-white border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-red-600 fill-current"
                        aria-hidden
                      >
                        <path d={siMeetup.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Meetup</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Dołącz do naszych wydarzeń i spotkań polskiej społeczności.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
