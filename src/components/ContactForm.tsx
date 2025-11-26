"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Custom hook to safely handle client-side mounting
function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return isClient;
}

export function ContactForm({ to = "kontakt@wospbarcelona.org" }: { to?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isClient = useIsClient();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Wiadomość ze strony – ${name || "Bez imienia"}`);
    const body = encodeURIComponent(`Imię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Imię i nazwisko</label>
            <input
              key={isClient ? 'name-client' : 'name-server'}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Jan Kowalski"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              key={isClient ? 'email-client' : 'email-server'}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="twoj@email.com"
              suppressHydrationWarning
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Wiadomość</label>
          <textarea
            key={isClient ? 'message-client' : 'message-server'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
            placeholder="Napisz wiadomość..."
            suppressHydrationWarning
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs text-gray-500">Wysłanie otworzy domyślny program pocztowy.</p>
        <Button type="submit" className="bg-red-600 hover:bg-red-700">Wyślij</Button>
      </div>
    </form>
  );
}
