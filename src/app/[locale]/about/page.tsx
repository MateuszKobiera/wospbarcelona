'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Stethoscope, ExternalLink, Users, Heart, HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siFacebook, siInstagram, siMeetup } from 'simple-icons/icons';
import { useState } from 'react';

export default function AboutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visiblePhotos, setVisiblePhotos] = useState(8); // Start with 8 photos (2 rows)
  
  const allPhotos = [
    'DSCF7186.jpg', 'DSCF7189.jpg', 'DSCF7194.jpg', 'DSCF7203.jpg',
    'DSCF7205.jpg', 'DSCF7221.jpg', 'DSCF7223.jpg', 'DSCF7238.jpg',
    'DSCF7239.jpg', 'DSCF7250.jpg', 'DSCF7254.jpg', 'DSCF7257.jpg',
    'DSCF7258.jpg', 'DSCF7259.jpg', 'DSCF7260.jpg', 'DSCF7264.jpg',
    'DSCF7267.jpg', 'DSCF7271.jpg', 'DSCF7272.jpg', 'DSCF7274.jpg',
    'DSCF7277.jpg', 'DSCF7279.jpg', 'DSCF7281.jpg', 'DSCF7282.jpg',
    'DSCF7283.jpg', 'DSCF7285.jpg', 'DSCF7287.jpg', 'DSCF7290.jpg',
    'DSCF7291.jpg', 'DSCF7292.jpg', 'DSCF7295.jpg', 'DSCF7300.jpg',
    'DSCF7302.jpg', 'DSCF7308.jpg', 'DSCF7309.jpg', 'DSCF7313.jpg',
    'DSCF7314.jpg', 'DSCF7318.jpg', 'DSCF7320.jpg', 'DSCF7321.jpg',
    'DSCF7324.jpg', 'DSCF7330.jpg', 'DSCF7331.jpg', 'DSCF7334.jpg',
    'DSCF7339.jpg', 'DSCF7344.jpg', 'DSCF7346.jpg', 'DSCF7351.jpg',
    'DSCF7352.jpg', 'DSCF7361.jpg', 'DSCF7364.jpg', 'DSCF7366.jpg',
    'DSCF7367.jpg', 'DSCF7368.jpg', 'DSCF7369.jpg', 'DSCF7370.jpg',
    'DSCF7371.jpg', 'DSCF7372.jpg', 'DSCF7374.jpg', 'DSCF7375.jpg',
    'DSCF7376.jpg', 'DSCF7377.jpg', 'DSCF7389.jpg', 'DSCF7404.jpg',
    'DSCF7408.jpg', 'DSCF7409.jpg'
  ];

  const photos = allPhotos.slice(0, visiblePhotos);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1;
    
    // Jeśli to ostatnie widoczne zdjęcie
    if (nextIndex >= photos.length) {
      // Sprawdź czy są jeszcze niewidoczne zdjęcia
      if (visiblePhotos < allPhotos.length) {
        // Doładuj więcej zdjęć i przejdź do następnego
        setVisiblePhotos((prev) => Math.min(prev + 8, allPhotos.length));
        setCurrentImageIndex(nextIndex);
      } else {
        // To już wszystkie zdjęcia - zamknij lightbox
        closeLightbox();
      }
    } else {
      // Normalna nawigacja
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => Math.min(prev + 8, allPhotos.length));
  };

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
                    <p className="text-sm text-gray-700">Łączymy firmy i ludzi, tworzymy kontakty oraz przestrzeń do współpracy. Nasi partnerzy to zarówno polskie firmy w Katalonii, jak i lokalne przedsiębiorstwa, które chcą pomagać i dotrzeć do nowej społeczności.</p>
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
                    <p className="text-sm text-gray-700">Pokazujemy polską kulturę, artystów, wartości, polskie jedzenie i napoje. Każdego roku na naszych finałach pojawia się coraz więcej Polaków, ale też Katalończyków i ludzi z całego świata, żeby poznać &ldquo;Cultura Polaca&rdquo;.</p>
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
                  Współpracujemy z wieloma polskimi, ale też lokalnymi firmami z Katalonii. Nasz główny partner <strong>World Class Barcelona</strong> zapoczątkował z WOŚP w Barcelonie, teraz skupiają się na rozwijaniu szkoły języka hiszpańskiego, ale zawsze służą nam pomocą!
                </p>
                <p className="mb-4">
                  Kolejny główny partner to <strong>Kosmo Hispano</strong> – szkoła języka polskiego dla dzieci, która bardzo nam pomaga organizacyjnie i zawsze organizuje różne zabawy dla dzieci, jak zabawy mikołajkowe czy andrzejkowe.
                </p>
                <p className="mb-4">
                  Najczęściej spotykamy się w restauracji <strong>Krakoviak</strong>, który jest kolejnym naszym głównym sponsorem i wspiera nas od kuchni!
                </p>
                <p>
                  Wszystkie fundusze, jakie pozyskujemy, są od sponsorów – najczęściej tych najbardziej lokalnych.
                  Nie mamy własnych pieniędzy – wszystkie rzeczy, które mamy, czy wszystkie fundusze są od sponsorów. Bardzo im za to dziękujemy, bo bez nich finały by się nie odbyły!
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

            {/* Photo Gallery */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Galeria zdjęć z 33. Finału</h3>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {photos.map((photo, index) => (
                  <div 
                    key={photo} 
                    className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    {/* Placeholder/Loading state */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                      📸 Ładowanie...
                    </div>
                    
                    <Image
                      src={`/images/33-final/${photo}`}
                      alt={`Zdjęcie z 33. Finału WOŚP Barcelona ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 z-10"
                      onLoad={(e) => {
                        console.log('Image loaded successfully:', photo);
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.opacity = '1';
                      }}
                      onError={(e) => {
                        console.error('Failed to load image:', `/images/33-final/${photo}`);
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s' }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              {visiblePhotos < allPhotos.length && (
                <div className="mb-6">
                  <button 
                    onClick={loadMorePhotos}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Załaduj więcej zdjęć ({allPhotos.length - visiblePhotos} pozostało)
                  </button>
                </div>
              )}

              {/* Photo Credit */}
              <div className="text-center bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  📸 Zdjęcia wykonała: <strong>Hela Staniszewska</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Dziękujemy za uwiecznienie wspaniałych chwil z naszego 33. Finału!
                </p>
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-red-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                aria-label="Zamknij galerię"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main image */}
              <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
                <Image
                  src={`/images/33-final/${photos[currentImageIndex]}`}
                  alt={`Zdjęcie z 33. Finału WOŚP Barcelona ${currentImageIndex + 1}`}
                  width={1600}
                  height={1200}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-sm">
                  {currentImageIndex + 1} / {allPhotos.length}
                </span>
              </div>

              {/* Photo credit */}
              <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-xs">
                  📸 Hela Staniszewska
                </span>
              </div>
            </div>
          )}
        </div>
    </main>
  );
}

