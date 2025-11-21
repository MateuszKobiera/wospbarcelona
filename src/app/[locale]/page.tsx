import { Hero } from '@/components/Hero';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main>
      <Hero />
      
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
