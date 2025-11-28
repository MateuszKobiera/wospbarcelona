'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600">
              Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <Card className="bg-white border border-red-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 font-bold">Wyślij wiadomość</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border border-red-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 font-bold">Informacje kontaktowe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-600">{t('info.address')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:kontakt@wospbarcelona.org" 
                        className="text-red-600 hover:text-red-700"
                      >
                        {t('info.email')}
                      </a>
                    </div>
                  </div>

                                  </CardContent>
              </Card>

              <Card className="bg-amber-50 border border-amber-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-amber-900 text-lg mb-3">
                    Zostań wolontariuszem
                  </h3>
                  <p className="text-amber-800">
                    Szukamy osób chętnych do pomocy przy organizacji wydarzeń. 
                    Dołącz do naszego zespołu i pomagaj razem z nami!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </main>
  );
}
