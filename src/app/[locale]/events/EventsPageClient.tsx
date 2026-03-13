'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { siFacebook, siInstagram, siYoutube } from 'simple-icons/icons';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';

// Event data - only non-translatable fields
const pastEventsData = [
  {
    id: 9,
    date: '2026-02-16',
    location: 'Online - Allegro.pl',
    categoryKey: 'onlineAuction',
    image: '/images/allegro/11_34FinalWOSP2026_grafika_AUKCJE_podglad.png'
  },
  {
    id: 1,
    date: '2026-01-25',
    location: 'Espacio 88, Sant Martí, Barcelona',
    categoryKey: 'final',
    image: '/images/kalendarz/fb_FINAL.jpg'
  },
  {
    id: 10,
    date: '2026-01-24',
    location: 'Wawel Restobar, Barcelona',
    categoryKey: 'workshop',
    image: '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg'
  },
  {
    id: 5,
    date: '2026-01-24',
    location: 'Hotel W Barcelona',
    categoryKey: 'run',
    image: '/images/kalendarz/workoplecak_20bieg_podglad.jpg'
  },
  {
    id: 8,
    date: '2025-12-14',
    time: '15:00',
    location: 'Wawel, Barcelona',
    categoryKey: 'volunteerMeeting',
    image: '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg'
  },
  {
    id: 7,
    date: '2025-12-03',
    time: '19:30',
    location: 'Online (link zostanie wysłany)',
    categoryKey: 'volunteerMeeting',
    image: '/images/kalendarz/06_SLIDE_34_F_ZAGRA_25_01_2026 (1).jpg'
  },
  {
    id: 101,
    date: '2025-01-26',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    categoryKey: 'final',
    image: '/api/placeholder/400/250',
    amountRaised: '8,073.48 €',
    totalAmount: '13,880.62 €'
  },
  {
    id: 201,
    date: '2025-01-19',
    location: 'Start: Sagrada Familia, Meta: Hotel W Barcelona',
    categoryKey: 'run',
    image: '/api/placeholder/400/250'
  },
  {
    id: 202,
    date: '2025-01-18',
    location: 'Templo Beauty, Ronda del Guinardó 64, Horta-Guinardó, Barcelona',
    categoryKey: 'vernissage',
    image: '/api/placeholder/400/250'
  },
  {
    id: 203,
    date: '2025-01-11',
    location: 'World Class Barcelona',
    categoryKey: 'workshop',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg'
  },
  {
    id: 204,
    date: '2024-12-15',
    location: 'World Class Bcn Spanish school - Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    categoryKey: 'literaryMeeting',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg'
  },
  {
    id: 205,
    date: '2024-11-30',
    location: 'Jardins de Mossèn Costa i Llobera, Barcelona',
    categoryKey: 'photoWorkshop',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg'
  },
  {
    id: 206,
    date: '2024-11-23',
    location: 'World Class Barcelona Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    categoryKey: 'christmasWorkshop',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg'
  },
  {
    id: 104,
    date: '2023-01-29',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    categoryKey: 'final',
    image: '/images/33-final/final-2024-main.jpg',
    amountRaised: '10,460.47 €'
  },
  {
    id: 106,
    date: '2022-01-30',
    location: 'Carrer de Sardenya, 29, 08005 Barcelona',
    categoryKey: 'final',
    image: '/images/33-final/final-2024-main.jpg',
    amountRaised: '8,989.94 €'
  }
];

export default function EventsPageClient() {
  const t = useTranslations('events');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      <main className="py-16 bg-linear-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('page.subtitle')}
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{t('upcoming')}</h2>
            </div>

            <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-lg font-medium text-gray-600">{t('noEvents')}</p>
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('past')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {pastEventsData.map((event) => {
                const eventTitle = t(`items.${event.id}.title`);
                const eventDescription = t(`items.${event.id}.description`);
                const eventCategory = t(`categories.${event.categoryKey}`);
                const eventLocation = t.has(`items.${event.id}.location`)
                  ? t(`items.${event.id}.location`)
                  : event.location;
                return (
                  <Card key={event.id} className="h-full bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 bg-linear-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {eventCategory}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {eventTitle}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {eventDescription}
                      </p>
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-3 h-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-2" />
                          {(eventLocation.includes('Online') || eventLocation.includes('Allegro')) ? (
                            <span className="text-gray-600">{eventLocation}</span>
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
                        {(event.amountRaised || event.totalAmount) && (
                          <div className="space-y-1">
                            {event.amountRaised && (
                              <div className="flex items-center text-sm font-semibold text-green-600">
                                <span className="mr-2">💰</span>
                                {t('page.duringEvent')}: {event.amountRaised}
                              </div>
                            )}
                            {event.totalAmount && (
                              <div className="flex items-center text-xs text-gray-600 ml-6">
                                {t('page.total')}: {event.totalAmount}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <Link href={`/${locale}/events/${event.id}`}>
                        <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group cursor-pointer">
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{t('page.seeReport')}</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>


          {/* Call to Action with Contact Form */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('page.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('page.cta.description')}
            </p>
            <div className="rounded-xl bg-white/80 backdrop-blur p-6">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      {/* Social Media - using same tiles as homepage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('page.socials.title')}</h2>
            <p className="text-gray-600">{t('page.socials.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {t('page.socials.facebookDesc')}
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
                    {t('page.socials.instagramDesc')}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://www.youtube.com/@sztabwospbarcelona3771" target="_blank" rel="noopener noreferrer" className="block">
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
                        <path d={siYoutube.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">YouTube</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t('page.socials.youtubeDesc')}
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
