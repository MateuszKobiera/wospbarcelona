import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, User, Clock } from 'lucide-react';
import { HeartBackground } from '@/components/HeartBackground';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: '32. Finał WOŚP w Barcelonie - wielki sukces!',
    excerpt: 'Tegoroczny finał Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie przeszedł do historii. Zebraliśmy rekordową kwotę 125 000 euro na zakup sprzętu medycznego.',
    author: 'Anna Kowalska',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Wydarzenia',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Jak zostać wolontariuszem WOŚP w Barcelonie?',
    excerpt: 'Chcesz dołączyć do naszego zespołu i pomagać innym? Sprawdź, jak zostać wolontariuszem Wielkiej Orkiestry Świątecznej Pomocy w Barcelonie.',
    author: 'Piotr Nowak',
    date: '2024-01-10',
    readTime: '3 min',
    category: 'Wolontariat',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Podsumowanie aukcji charytatywnej 2024',
    excerpt: 'Nasza coroczna aukcja dzieł sztuki przyniosła niesamowite rezultaty. Dzieła polskich i hiszpańskich artystów znalazły nowych właścicieli.',
    author: 'Maria García',
    date: '2024-01-05',
    readTime: '4 min',
    category: 'Aukcje',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Spotkanie z Ambasadorem RP w Madrycie',
    excerpt: 'Podczas wizyty w Barcelonie Ambasador RP spotkał się z naszym zespołem, aby omówić przyszłe działania i podziękować za zaangażowanie.',
    author: 'Jan Wiśniewski',
    date: '2023-12-20',
    readTime: '6 min',
    category: 'Wydarzenia',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Barcelońskie Polonia łączy siły dla WOŚP',
    excerpt: 'Razem z polskimi organizacjami w Katalonii organizujemy wspólne wydarzenia charytatywne. Poznaj nasze partnerstwa.',
    author: 'Ewa Torres',
    date: '2023-12-15',
    readTime: '4 min',
    category: 'Partnerstwa',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Historia WOŚP w Barcelonie - 8 lat pomocy',
    excerpt: 'Przez 8 lat naszej działalności zebraliśmy ponad 500 000 euro. Przypominamy najważniejsze momenty z naszej historii.',
    author: 'Tomasz Kozłowski',
    date: '2023-12-10',
    readTime: '8 min',
    category: 'Historia',
    imageUrl: '/api/placeholder/400/250'
  }
];

export default function BlogPage() {
  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Blog WOŚP Barcelona
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poznaj nasze historie, wydarzenia i inicjatywy. Dowiedz się więcej o naszej działalności charytatywnej.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden bg-white border border-red-100 shadow-sm">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
                    <HeartBackground size="large" />
                    <span className="text-white text-6xl font-bold relative z-10">W</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Czytaj dalej
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
                  <HeartBackground size="medium" />
                  <span className="text-white text-4xl font-bold relative z-10">W</span>
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 text-gray-900 font-bold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.id}`}>
                      Czytaj dalej
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Załaduj więcej artykułów
            </Button>
          </div>
        </div>
    </main>
  );
}
