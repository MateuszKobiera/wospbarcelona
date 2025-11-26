import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Stethoscope, ExternalLink, Users, Heart, HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon } from 'lucide-react';
import Link from 'next/link';
import { siFacebook, siInstagram, siMeetup } from 'simple-icons/icons';

export default function AboutPage() {
  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* WOŚP History Section */}
          <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wielka Orkiestra Świątecznej Pomocy</h2>
            
            {/* YouTube Video */}
            <div className="mb-8">
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg border-0"
                  src="https://www.youtube.com/embed/nBXar_Xr5lU"
                  title="Wielka Orkiestra Świątecznej Pomocy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 text-red-600 mr-2" />
                    Historia WOŚP
                  </h3>
                  <p className="mb-4">
                    Wielka Orkiestra Świątecznej Pomocy to największa organizacja charytatywna w Polsce, założona w 1993 roku przez Jerzego Owsiaka. Przez ponad 30 lat działalności zebrała już ponad 2 miliardy złotych na cele medyczne.
                  </p>
                  <p className="mb-4">
                    Każdego stycznia w całej Polsce i na świecie odbywają się Finały WOŚP – największe wydarzenia charytatywne, które łączą miliony ludzi w jednym celu: ratowania życia i zdrowia dzieci oraz seniorów.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Stethoscope className="w-6 h-6 text-red-600 mr-2" />
                    Cele medyczne
                  </h3>
                  <p className="mb-4">
                    WOŚP finansuje zakup najnowocześniejszego sprzętu medycznego dla polskich szpitali. Każdy rok ma swój konkretny cel medyczny – od kardiochirurgii dziecięcej, przez onkologię, po geriatrię.
                  </p>
                  <p className="mb-4">
                    Dzięki WOŚP polskie szpitale otrzymały tysiące urządzeń: od respiratorów, przez tomografy, po nowoczesne sale operacyjne. To konkretna pomoc, która ratuje życie każdego dnia.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-red-600 mr-2" />
                  Jerzy Owsiak i Fundacja
                </h3>
                <p className="mb-4">
                  Jerzy Owsiak, założyciel i prezes Fundacji WOŚP, to jedna z najbardziej rozpoznawalnych postaci polskiego życia społecznego. Dziennikarz, społecznik i wizjoner, który przez dekady budował ruch społeczny oparty na życzliwości i pomocy.
                </p>
                <p>
                  Fundacja WOŚP działa transparentnie – każda złotówka jest rozliczana publicznie. To organizacja, która zmieniła oblicze polskiej medycyny dziecięcej i geriatrycznej, wyposażając szpitale w sprzęt wartości miliardów złotych.
                </p>
              </div>

              {/* Link to main WOŚP website */}
              <div className="text-center mt-8">
                <a
                  href="https://www.wosp.org.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <span>Odwiedź oficjalną stronę WOŚP</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* WOŚP Barcelona Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">WOŚP Barcelona</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Od ponad 8 lat budujemy w Barcelonie wyjątkowe miejsce, w którym polska energia i hiszpański temperament łączą się w jednym celu – by pomagać.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Card className="rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <HeartHandshakeIcon className="w-5 h-5 text-red-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Wspieranie najbardziej potrzebujących</h3>
                    </div>
                    <p className="text-sm text-gray-700">Zbieramy środki i organizujemy działania, by realnie pomagać dzieciom i osobom w potrzebie. Każda złotówka trafia bezpośrednio do polskich szpitali na zakup najnowocześniejszego sprzętu medycznego.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Card className="rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <StoreIcon className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Wspieranie lokalnych przedsiębiorstw</h3>
                    </div>
                    <p className="text-sm text-gray-700">Łączymy firmy i ludzi, tworzymy kontakty oraz przestrzeń do współpracy. Nasi partnerzy to zarówno polskie firmy w Katalonii, jak i lokalne przedsiębiorstwa, które chcą pomagać i się rozpromować.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Card className="rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <UsersIcon className="w-5 h-5 text-blue-700" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Integracja polskiej społeczności</h3>
                    </div>
                    <p className="text-sm text-gray-700">Budujemy relacje, organizujemy wydarzenia i łączymy Polaków w Barcelonie i okolicach. Jesteśmy miejscem spotkania dla nowych mieszkańców, studentów i wszystkich szukających polskiego kontaktu.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Card className="rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                        <FlagIcon className="w-5 h-5 text-pink-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Promowanie polskiej kultury w Hiszpanii</h3>
                    </div>
                    <p className="text-sm text-gray-700">Pokazujemy polską kulturę i wartości, współtworząc kolorową mozaikę Barcelony. Nasz Finał to już znane wydarzenie w kalendarzu miasta, które przyciąga także Hiszpanów i inne narodowości.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* How We Work Section */}
          <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jak pracujemy</h2>
            
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 text-red-600 mr-2" />
                    Sezon WOŚPowy
                  </h3>
                  <p className="mb-4">
                    Sezon WOŚPowy zaczyna się od początku grudnia aż do końca stycznia – to są dwa najintensywniejsze miesiące w roku. Podczas tego czasu zakładamy sztab, spotykamy się zawsze tą samą lub bardzo podobną grupą.
                  </p>
                  <p className="mb-4">
                    Po Finale, zazwyczaj w lutym, nasz sztab zostaje rozwiązywany i co roku powstaje nowy. Dlatego pewnie nie słychać tak od nas pomiędzy lutym a listopadem – wtedy wracamy do naszych rodzin i codziennych zwyczajów.
                  </p>
                  <p className="mb-4">
                    Często organizujemy wtedy nasze wewnętrzne spotkania wolontariuszy, gdzie rozmawiamy co nam wyszło w tym roku i co możemy poprawić.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 text-red-600 mr-2" />
                    Nasi wolontariusze
                  </h3>
                  <p className="mb-4">
                    Są z nami wolontariusze, którzy grają z nami od lat, ale też co roku zbieramy różnych osób, które dopiero co się przeprowadziły i szukają kontaktu z Polakami.
                  </p>
                  <p className="mb-4">
                    Zapraszamy studentów, którzy często pomagają nam w formie praktyk, co jest bardzo pomocne podczas organizacji Finału. Przyjmujemy każdą pomoc – nawet jednorazową!
                  </p>
                  <p className="mb-4">
                    Zachęcamy wszystkich, którzy chcą pomagać, szukają nowych znajomości lub po prostu chcą być częścią wolontariatu.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-red-600 mr-2" />
                  Nasi partnerzy
                </h3>
                <p className="mb-4">
                  Współpracujemy z wieloma polskimi, ale też lokalnymi firmami z Katalonii. Nasz główny partner <strong>World Class Barcelona</strong> zapoczątkował z nami pracę, teraz skupiają się na rozwijaniu szkoły języka hiszpańskiego, ale zawsze służą nam pomocą.
                </p>
                <p className="mb-4">
                  Kolejny główny partner to <strong>Kosmo Hispano</strong> – szkoła języka polskiego dla dzieci, która bardzo nam pomaga organizacyjnie i zawsze organizuje różne zabawy mikołajkowe czy andrzejkowe.
                </p>
                <p className="mb-4">
                  Najczęściej spotykamy się w barze <strong>Krakoviak</strong>, który jest kolejnym naszym głównym sponsorem. Wszystkie fundusze, jakie pozyskujemy, są od sponsorów – najczęściej tych najbardziej lokalnych.
                </p>
                <p>
                  Nie mamy własnych pieniędzy – wszystkie rzeczy, które mamy, czy wszystkie fundusze są od sponsorów. Bardzo im za to dziękujemy!
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dołącz do nas</h2>
              <p className="text-gray-600">Jesteśmy na Facebooku, Instagramie i Meetupie. Śledź nasze social media, aby być na bieżąco!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
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
                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
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
                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
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

          {/* 33rd Final Section */}
          <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">33. Finał WOŚP w Barcelonie</h2>
            
            <div className="prose prose-lg text-gray-700 max-w-none mb-8">
              <p className="text-center text-xl mb-6">
                W styczniu 2025 roku zorganizowaliśmy już 33. Finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie. Był to nasz najlepszy Finał do tej pory!
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wyniki zbiórki</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">13 881,91 €</div>
                      <div className="text-lg text-gray-700">zebraliśmy podczas 33. Finału</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cel medyczny</h3>
                  <p>
                    33. Finał grał dla medycyny paliatywnej i hospicyjnej. Zebrane środki poszły na zakup sprzętu medycznego, który pomaga zapewnić godne życie i śmierć pacjentom w najtrudniejszych chwilach.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Galeria zdjęć z 33. Finału</h3>
              <div className="bg-gray-100 rounded-lg p-12 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">Galeria zdjęć zostanie dodana wkrótce</p>
                <p className="text-gray-400 text-sm mt-2">Zdjęcia z naszego 33. Finału, wolontariuszy i wszystkich wspaniałych chwil</p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}

