import { Hero } from '@/components/Hero';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Socials: make the cards clickable and remove left buttons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dołącz do nas</h2>
            <p className="text-gray-600">Jesteśmy na Facebooku, Instagramie i Meetupie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Facebook className="w-5 h-5 text-blue-600" />
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
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <Instagram className="w-5 h-5 text-pink-600" />
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
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <MessageSquare className="w-5 h-5 text-red-600" />
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Zebrane kwoty przez WOŚP Barcelona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { final: '33 Finał', amount: '13 881.91 €' },
              { final: '32 Finał', amount: '10 460.47 €' },
              { final: '31 Finał', amount: '8 989.94 €' },
              { final: '30 Finał', amount: '2 496.62 €' },
            ].map((item) => (
              <div
                key={item.final}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
              >
                <Card className="rounded-2xl bg-white/95 backdrop-blur border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7 text-center">
                    <div className="text-xs font-semibold text-gray-700/90 mb-3 cursor-default">
                      {item.final}
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 tabular-nums cursor-default">
                      {item.amount}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dołącz do naszej misji
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Każdego roku organizujemy finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie, 
              zbierając fundusze na zakup najnowocześniejszego sprzętu medycznego dla polskich szpitali.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border border-red-100 shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    34. Finał WOŚP — Zdrowe brzuszki naszych dzieci
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                    <Link href="/donate">Więcej o zbiórce</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="https://www.wosp.org.pl/fundacja/jak-wspierac-wosp/wesprzyj-online" target="_blank" rel="noopener noreferrer">
                      Wesprzyj Fundację online
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="text-gray-700">
                Zagramy, by wesprzeć diagnostykę i leczenie chorób przewodu pokarmowego u najmłodszych pacjentów.
                To realne wsparcie dla około 1,2–1,5 mln dzieci. Razem zadbajmy o zdrowe brzuszki naszych dzieci.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
