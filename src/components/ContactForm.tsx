"use client";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { sendContactMessage } from "@/app/actions/contact";

// Custom hook to safely handle client-side mounting
function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>('idle');
  const isClient = useIsClient();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await sendContactMessage(new FormData(e.currentTarget));
      if (result.ok) {
        setStatus('success');
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-4xl">
      {/* Pole-pułapka na boty – ukryte dla ludzi i czytników ekranu */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{t('name')}</label>
            <input
              key={isClient ? 'name-client' : 'name-server'}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={200}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder={t('placeholderName')}
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{t('email')}</label>
            <input
              key={isClient ? 'email-client' : 'email-server'}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={200}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder={t('placeholderEmail')}
              suppressHydrationWarning
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">{t('message')}</label>
          <textarea
            key={isClient ? 'message-client' : 'message-server'}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={5000}
            rows={6}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
            placeholder={t('placeholderMessage')}
            suppressHydrationWarning
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs text-gray-500" aria-live="polite">
          {status === 'success' && <span className="text-green-700 font-medium">{t('success')}</span>}
          {status === 'error' && <span className="text-red-600 font-medium">{t('error')}</span>}
          {(status === 'idle' || status === 'sending') && t('note')}
        </p>
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="bg-red-600 hover:bg-red-700 text-white cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          suppressHydrationWarning
        >
          {status === 'sending' ? t('sending') : t('submit')}
        </Button>
      </div>
    </form>
  );
}
