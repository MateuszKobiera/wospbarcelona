import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              O nas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poznaj naszą historię i misję
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nasza społeczność</h3>
                <p className="text-gray-700">
                  Tworzymy aktywną społeczność Polaków w Barcelonie – połączonych energią, empatią i chęcią działania dla innych.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nasza misja</h3>
                <p className="text-gray-700">
                  Wspieramy dzieci i seniorów, organizując wydarzenia charytatywne, które jednoczą lokalną społeczność i realnie pomagają.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nasze cele</h3>
                <p className="text-gray-700">
                  Konsekwentnie wspieramy najważniejsze cele medyczne WOŚP, inwestując w nowoczesny sprzęt i konkretne działania.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nasza historia</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Od ponad 8 lat budujemy w Barcelonie wyjątkowe miejsce, w którym polska energia i hiszpański temperament łączą się w jednym celu – by pomagać.
              </p>
              <p>
                Z małej inicjatywy przerodziliśmy się w duży zespół wolontariuszy, partnerów i darczyńców. Każdego roku organizujemy wydarzenia, które angażują setki osób i realnie wspierają polskie szpitale.
              </p>
              <p>
                Dziś WOŚP Barcelona to społeczność, na którą zawsze można liczyć. Tworzymy most między Polską a Katalonią – most zbudowany z życzliwości, muzyki, uśmiechu i wielkich serc.
              </p>
            </div>
          </div>

          {/* Stats */}
          <section className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-lg bg-white border border-red-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-red-600 mb-1">500K€+</div>
                <div className="text-sm text-gray-600">Zebranych środków</div>
              </div>
              <div className="rounded-lg bg-white border border-red-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-red-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Wolontariuszy</div>
              </div>
              <div className="rounded-lg bg-white border border-red-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-red-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Wydarzeń rocznie</div>
              </div>
              <div className="rounded-lg bg-white border border-red-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-red-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Partnerów</div>
              </div>
            </div>
          </section>
        </div>
    </main>
  );
}

