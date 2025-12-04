'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Meetup } from '@/components/icons/SocialIcons';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const contactT = useTranslations('contact');
  const locale = useLocale();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/sztabWOSPBarcelona', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/wospbarcelona', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@sztabwospbarcelona3771', label: 'YouTube' },
    { icon: Meetup, href: 'https://www.meetup.com/wośp-barcelona', label: 'Meetup' },
  ];

  const quickLinks = [
    { name: t('quickLinks'), isHeader: true },
    { name: 'about', href: `/${locale}/about` },
    { name: 'events', href: `/${locale}/events` },
    { name: 'blog', href: `/${locale}/blog` },
    { name: 'sponsors', href: `/${locale}/sponsors` },
    { name: 'contact', href: `/${locale}/contact` },
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
            <p className="text-gray-300 mb-6 max-w-md">{t('description')}</p>

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
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.filter((l): l is { name: string; href: string } => Boolean(l.href)).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {navT(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{contactT('title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-300">{contactT('info.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600" />
                <a
                  href="mailto:sztab@wospbarcelona.org"
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
