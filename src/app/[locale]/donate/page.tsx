import Link from 'next/link';
import { SocialMedia } from '@/components/SocialMedia';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Wpłać Online',
};

export default function WplacOnlinePage() {
  return (
    <>
      <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Wpłać Online</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tutaj wkrótce uruchomimy zbiórkę online na cel 34. Finału WOŚP.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-white border border-red-100 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-gray-900">Cel 34. Finału WOŚP</h2>
                  <div className="flex flex-col items-center text-center gap-3 md:gap-4 mt-2">
                    <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                      34. Finał WOŚP
                    </span>
                    <div className="text-3xl md:text-4xl font-extrabold text-red-600 tracking-tight">
                      25 stycznia 2026 roku
                    </div>
                    <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      Zdrowe brzuszki naszych dzieci
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Zagramy, by wesprzeć diagnostykę i leczenie chorób przewodu pokarmowego u najmłodszych pacjentów.
                    To realne wsparcie dla około 1,2–1,5 miliona dzieci, cierpiących na schorzenia gastroenterologiczne.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">Dlaczego to ważne?</h3>
                  <p className="text-gray-700">
                    Gastroenterologia dziecięca w Polsce mierzy się z rosnącą liczbą pacjentów i potrzebą nowoczesnego
                    sprzętu, który poprawia wyniki diagnostyki i leczenia, w tym także w chirurgii.
                  </p>
                  <p className="text-gray-700">
                    Choroby przewodu pokarmowego u dzieci (np. celiakia, choroba Leśniowskiego-Crohna, WZJG, GERD,
                    ciężkie alergie pokarmowe, choroby trzustki i wątroby) oraz zaburzenia żywienia (niedożywienie i otyłość)
                    są coraz częstsze i wpływają na rozwój, odporność i codzienne funkcjonowanie najmłodszych.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-900">Zbiórka jeszcze nie wystartowała</h2>
                  <p className="text-gray-700">
                    Aktualnie nie prowadzimy jeszcze zbiórki na cel 34. Finału WOŚP.
                    Rozpoczniemy przyjmowanie wpłat w grudniu.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <Button asChild className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                      <Link
                        href="https://www.wosp.org.pl/fundacja/jak-wspierac-wosp/wesprzyj-online"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wesprzyj Fundację online
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <Link
                        href="https://www.wosp.org.pl/final"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        O celu Finału
                      </Link>
                    </Button>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SocialMedia />
    </>
  );
}
