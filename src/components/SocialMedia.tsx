'use client';

import { Facebook, Instagram, Youtube, Twitter, Linkedin } from '@/components/icons/SocialIcons';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/sztabWOSPBarcelona',
    icon: Facebook,
    color: 'hover:bg-blue-600',
    description: 'Dołącz do naszej społeczności na Facebooku'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/wospbarcelona',
    icon: Instagram,
    color: 'hover:bg-pink-600',
    description: 'Śledź nasze relacje na Instagramie'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@sztabwospbarcelona3771',
    icon: Youtube,
    color: 'hover:bg-red-600',
    description: 'Oglądaj nasze filmy na YouTube'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/wospbarcelona',
    icon: Twitter,
    color: 'hover:bg-sky-500',
    description: 'Bądź na bieżąco na Twitterze'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/wospbarcelona',
    icon: Linkedin,
    color: 'hover:bg-blue-700',
    description: 'Połącz się z nami na LinkedIn'
  }
];

export function SocialMedia() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dołącz do nas w mediach społecznościowych
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bądź na bieżąco z naszymi wydarzeniami, inicjatywami i historiami pomocy.
            Śledź nas w mediach społecznościowych i bierz udział w naszej misji!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {socialLinks.map((social) => (
            <div key={social.name} className="text-center">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:bg-red-50 group-hover:ring-2 group-hover:ring-red-200 group-hover:scale-105`}>
                    <social.icon className="text-gray-700 group-hover:text-red-600 transition-colors" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{social.name}</h3>
                  <p className="text-sm text-gray-600">{social.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <span className="text-gray-900 font-semibold">Udostępnij:</span>
            <div className="flex space-x-2">
              {socialLinks.slice(0, 3).map((social) => (
                <Button key={social.name} variant="ghost" size="sm" asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-900"
                  >
                    <social.icon className="text-gray-900" size={16} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Feed Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Najnowsze posty</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Facebook className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Facebook</h4>
                  <p className="text-sm text-gray-500">2 godziny temu</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                Dziękujemy wszystkim za udział w wczorajszym koncercie charytatywnym! 🎵❤️
                Zebraliśmy 5,000 euro na sprzęt medyczny.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>❤️ 124</span>
                <span className="mx-2">•</span>
                <span>💬 18</span>
                <span className="mx-2">•</span>
                <span>↗️ 8</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <Instagram className="text-pink-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Instagram</h4>
                  <p className="text-sm text-gray-500">5 godzin temu</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                Spotkanie organizacyjne przed 33. Finałem WOŚP! 📋✨
                Mamy już 100 wolontariuszy!
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>❤️ 256</span>
                <span className="mx-2">•</span>
                <span>💬 32</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Youtube className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">YouTube</h4>
                  <p className="text-sm text-gray-500">1 dzień temu</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                Nowy film z podsumowaniem 32. Finału WOŚP w Barcelonie!
                Zobaczcie, jak razem zmieniamy świat 🌍
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>👁️ 1.2K</span>
                <span className="mx-2">•</span>
                <span>👍 89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
