import { SocialMedia } from '@/components/SocialMedia';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    title: '33. Finał WOŚP w Barcelonie',
    description: 'Największe wydarzenie charytatywne roku! Dołącz do nas i pomagajmy razem.',
    date: '2024-01-28',
    time: '10:00 - 22:00',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/400/250',
    attendees: 500,
    registrationRequired: true
  },
  {
    id: 2,
    title: 'Koncert Charytatywny "Serce dla dzieci"',
    description: 'Wieczór muzyki i pomocy - koncerty polskich i katalońskich artystów.',
    date: '2024-02-10',
    time: '19:00',
    location: 'Palau de la Música Catalana',
    category: 'Koncert',
    image: '/api/placeholder/400/250',
    attendees: 200,
    registrationRequired: true
  },
  {
    id: 3,
    title: 'Spotkanie Wolontariuszy',
    description: 'Organizacyjne spotkanie dla wszystkich chętnych do pomocy przy WOŚP 2024.',
    date: '2024-01-15',
    time: '18:00',
    location: 'Centrum Polonijne, Barcelona',
    category: 'Spotkanie',
    image: '/api/placeholder/400/250',
    attendees: 50,
    registrationRequired: false
  },
  {
    id: 4,
    title: 'Aukcja Sztuki WOŚP',
    description: 'Wystawa i aukcja dzieł polskich artystów na rzecz WOŚP.',
    date: '2024-01-20',
    time: '12:00 - 18:00',
    location: 'Galeria Sztuki, Barcelona',
    category: 'Aukcja',
    image: '/api/placeholder/400/250',
    attendees: 100,
    registrationRequired: false
  }
];

const pastEvents = [
  {
    id: 5,
    title: '32. Finał WOŚP w Barcelonie',
    description: 'Niesamowity finał zebraliśmy 125,000 euro!',
    date: '2023-01-29',
    location: 'Plaça de Catalunya, Barcelona',
    category: 'Finał WOŚP',
    image: '/api/placeholder/400/250',
    attendees: 450,
    amountRaised: '125,000 €'
  },
  {
    id: 6,
    title: 'Mikołajki dla Dzieci',
    description: 'Świąteczne spotkanie z prezentami dla polskich dzieci w Barcelonie.',
    date: '2023-12-06',
    location: 'Polski Kościół św. Jerzego',
    category: 'Święta',
    image: '/api/placeholder/400/250',
    attendees: 80,
    amountRaised: '2,000 €'
  }
];

export default function EventsPage() {
  // Helpers to build ICS payloads server-side (no client JS required)
  const escapeICS = (s: string) =>
    s
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');

  const formatDate = (date: Date, withZ = false) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const y = date.getUTCFullYear();
    const m = pad(date.getUTCMonth() + 1);
    const d = pad(date.getUTCDate());
    const hh = pad(date.getUTCHours());
    const mm = pad(date.getUTCMinutes());
    const ss = pad(date.getUTCSeconds());
    return `${y}${m}${d}T${hh}${mm}${ss}${withZ ? 'Z' : ''}`;
  };

  const parseTimes = (dateStr: string, timeStr?: string) => {
    // dateStr: YYYY-MM-DD
    // timeStr examples: "10:00 - 22:00", "19:00"
    const [y, m, d] = dateStr.split('-').map((x) => parseInt(x, 10));
    let startH = 9, startM = 0, endH = 10, endM = 0;
    if (timeStr) {
      const mRange = timeStr.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
      const mSingle = timeStr.match(/(\d{1,2}):(\d{2})/);
      if (mRange) {
        startH = parseInt(mRange[1], 10); startM = parseInt(mRange[2], 10);
        endH = parseInt(mRange[3], 10); endM = parseInt(mRange[4], 10);
      } else if (mSingle) {
        startH = parseInt(mSingle[1], 10); startM = parseInt(mSingle[2], 10);
        endH = (startH + 2) % 24; endM = startM; // default 2h duration
      }
    }
    // Treat times as local; we will export without Z (floating time)
    const dtStart = new Date(Date.UTC(y, (m - 1), d, startH, startM, 0));
    const dtEnd = new Date(Date.UTC(y, (m - 1), d, endH, endM, 0));
    return { dtStart, dtEnd };
  };

  const buildEventICS = (ev: typeof upcomingEvents[number]) => {
    const { dtStart, dtEnd } = parseTimes(ev.date, ev.time);
    const dtStamp = formatDate(new Date(), true);
    const DTSTART = formatDate(dtStart, false);
    const DTEND = formatDate(dtEnd, false);
    const UID = `${ev.id}@wospbarcelona`;
    const lines = [
      'BEGIN:VEVENT',
      `UID:${UID}`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${DTSTART}`,
      `DTEND:${DTEND}`,
      `SUMMARY:${escapeICS(ev.title)}`,
      ev.location ? `LOCATION:${escapeICS(ev.location)}` : undefined,
      ev.description ? `DESCRIPTION:${escapeICS(ev.description)}` : undefined,
      'END:VEVENT',
    ].filter(Boolean) as string[];
    return lines.join('\r\n');
  };

  const buildICS = (events: typeof upcomingEvents) => {
    const eventsICS = events.map((e) => buildEventICS(e)).join('\r\n');
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'PRODID:-//WOŚP Barcelona//Kalendarz//PL',
      'METHOD:PUBLISH',
      eventsICS,
      'END:VCALENDAR',
      '',
    ].join('\r\n');
  };

  const allEventsIcsHref = `data:text/calendar;charset=utf-8,${encodeURIComponent(buildICS(upcomingEvents))}`;
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Nadchodzące wydarzenia</h2>
              <a
                href={allEventsIcsHref}
                download="wosp-barcelona-wydarzenia.ics"
                className="inline-flex items-center rounded-full border border-orange-300 bg-white text-orange-700 hover:bg-orange-100 px-3 py-2 text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4 mr-2 text-orange-700" />
                Dodaj do kalendarza
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="h-full overflow-hidden bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:flex md:h-full">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center rounded-l-md">
                        <Calendar className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:flex md:flex-col md:h-full">
                      <div className="mb-3">
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {event.category}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
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
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2 text-red-600" />
                            {event.attendees} uczestników
                          </div>
                        </div>

                        <div className="flex space-x-3 mt-4">
                          <Button className="bg-red-600 hover:bg-red-700 flex-1">
                            Dowiedz się więcej
                          </Button>
                          {/* Per-event small add-to-calendar */}
                          <a
                            href={`data:text/calendar;charset=utf-8,${encodeURIComponent(buildICS([event]))}`}
                            download={`wosp-${event.id}.ics`}
                            aria-label="Dodaj do kalendarza"
                            title="Dodaj do kalendarza"
                            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-orange-300 bg-white text-orange-700 hover:bg-orange-100 shadow-sm"
                          >
                            <Calendar className="w-4 h-4 text-orange-700" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
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
                        {event.location}
                      </div>
                      {event.amountRaised && (
                        <div className="flex items-center text-sm font-semibold text-green-600">
                          <span className="mr-2">💰</span>
                          Zebrano: {event.amountRaised}
                        </div>
                      )}
                    </div>
                    <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                      Zobacz relację →
                    </Button>
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
      
      <SocialMedia />
    </>
  );
}
