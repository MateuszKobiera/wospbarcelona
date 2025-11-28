'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from '@/components/icons/SocialIcons';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const contactT = useTranslations('contact');
  const locale = useLocale();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'O nas', href: `/${locale}/about` },
    { name: 'Kalendarz', href: `/${locale}/events` },
    { name: 'Blog', href: `/${locale}/blog` },
    { name: 'Sponsorzy', href: `/${locale}/sponsors` },
    { name: 'Kontakt', href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/favicon.ico"
                alt="WOŚP Barcelona"
                width={40}
                height={40}
                priority
              />
              <span className="font-bold text-xl">WOŚP Barcelona</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Jesteśmy dynamiczną społecznością Polaków w Barcelonie, która od 9 lat organizuje Finały WOŚP i wydarzenia charytatywne.
            </p>
            
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('socials')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-300">{contactT('info.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600" />
                <a 
                  href="mailto:kontakt@wospbarcelona.org" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactT('info.email')}
                </a>
              </div>
                          </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 WOŚP Barcelona. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
