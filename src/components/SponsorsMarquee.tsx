"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Sponsor = {
  name: string;
  logo?: string; // optional path in public/
};

const DEFAULT_SPONSORS: Sponsor[] = [
  { name: 'Bona Barcelona', logo: '/images/sponsors/logo wektory-krzywe kolor DO DRUKU-1.png' },
  { name: 'Wawel RestoBar', logo: '/images/sponsors/Wawel.png' },
  { name: 'Sol de Gracia', logo: '/images/sponsors/311836535_638740301171743_4776177943725666713_n.png' },
  { name: 'Stowarzyszenie Edukacyjne Kosmo HisPLano', logo: '/images/sponsors/kosmo-his-plano.png' },
];

function InitialAvatar({ name }: { name: string }) {
  const letter = name.trim().charAt(0).toUpperCase();
  return (
    <div className="mr-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-700 ring-1 ring-gray-200">
      {letter}
    </div>
  );
}

function SponsorBadge({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="mx-5 inline-flex items-center rounded-full bg-white/20 px-6 py-4 text-lg text-gray-800 backdrop-blur-sm transition-colors hover:ring-1 hover:ring-white/50">
      {sponsor.logo ? (
        <div className="mr-5 h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
        </div>
      ) : (
        <InitialAvatar name={sponsor.name} />
      )}
      <span className="font-semibold">{sponsor.name}</span>
    </div>
  );
}

export function SponsorsMarquee({ items = DEFAULT_SPONSORS, href }: { items?: Sponsor[]; href?: string }) {
  // Duplicate the list to create a seamless loop
  const loopItems = [...items, ...items];
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale;
  const targetHref = href ?? (locale ? `/${locale}/sponsors` : '/sponsors');

  return (
    <Link href={targetHref} aria-label="Zobacz wszystkich sponsorów i partnerów" className="block">
      <div className="marquee group relative overflow-hidden cursor-pointer">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white/60 to-transparent" />

        <div className="marquee-track inline-flex items-center whitespace-nowrap gap-8 py-3">
          {loopItems.map((s, i) => (
            <SponsorBadge sponsor={s} key={`${s.name}-${i}`} />
          ))}
        </div>
      </div>
    </Link>
  );
}
