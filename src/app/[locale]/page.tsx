import { Hero } from '@/components/Hero';

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
    </main>
  );
}
