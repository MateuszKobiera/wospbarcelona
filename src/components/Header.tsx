'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import Image from 'next/image';

const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ca', name: 'Català', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  type NavItem = { name: string; href: string; children?: { name: string; href: string }[] };

  const navigation: NavItem[] = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('events'), href: `/${locale}/events` },
    { name: t('blog'), href: `/${locale}/blog` },
    {
      name: t('sponsors'),
      href: `/${locale}/sponsors/35-final`,
      children: [
        { name: t('sponsors35'), href: `/${locale}/sponsors/35-final` },
        { name: t('sponsors34'), href: `/${locale}/sponsors/34-final` },
      ],
    },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src="/images/favicon.ico"
              alt="WOŚP Barcelona"
              width={40}
              height={40}
              priority
            />
            <span className="font-bold text-xl text-gray-900">WOŚP Barcelona</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-gray-700 hover:text-red-600 group-hover:text-red-600 transition-colors font-medium"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity">
                    <div className="min-w-[180px] rounded-lg bg-white border border-gray-200 shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 whitespace-nowrap"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Language Selector & Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-900 cursor-pointer">
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">{locale.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 text-gray-900">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild className="flex items-center space-x-2 text-gray-900 focus:bg-gray-100">
                    <Link href={`/${lang.code}`} className="flex items-center space-x-2">
                      <Image src={`/flags/${lang.code}.svg`} alt={`${lang.name} flag`} width={18} height={12} />
                      <span className="text-sm">{lang.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <span className="block px-3 py-2 text-gray-700 font-medium">{item.name}</span>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block pl-8 pr-3 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md"
                        onClick={toggleMenu}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-900 cursor-pointer">
                        <Globe className="w-4 h-4" />
                        <span className="font-semibold">{locale.toUpperCase()}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border border-gray-200 text-gray-900">
                      {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} asChild className="flex items-center space-x-2 text-gray-900 focus:bg-gray-100">
                          <Link href={`/${lang.code}`} className="flex items-center space-x-2">
                            <Image src={`/flags/${lang.code}.svg`} alt={`${lang.name} flag`} width={18} height={12} />
                            <span className="text-sm">{lang.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
