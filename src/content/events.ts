// Event list data - only non-translatable fields.
// Titles, descriptions and translated locations live in messages/{locale}.json under events.items.{id}.

export type EventSummary = {
  id: number;
  date: string;
  time?: string;
  location?: string;
  categoryKey: string;
  image: string;
  blogSlug?: string;
  amountRaised?: string;
  totalAmount?: string;
};

// Upcoming events - only non-translatable fields
export const upcomingEventsData: EventSummary[] = [
  {
    id: 11,
    date: '2027-01-31',
    categoryKey: 'final',
    image: '/images/35-final/35FinalBarcelona-miniatura.png',
    blogSlug: '35-final-wosp-zagramy-dla-noworodkow'
  }
];

// Event data - only non-translatable fields
export const pastEventsData: (EventSummary & { location: string })[] = [
  {
    id: 9,
    date: '2026-02-16',
    location: 'Online - Allegro.pl',
    categoryKey: 'onlineAuction',
    image: '/images/allegro/11_34FinalWOSP2026_grafika_AUKCJE_podglad.png'
  },
  {
    id: 1,
    date: '2026-01-25',
    location: 'Espacio 88, Sant Martí, Barcelona',
    categoryKey: 'final',
    image: '/images/kalendarz/fb_FINAL.jpg',
    totalAmount: '12 408 €'
  },
  {
    id: 10,
    date: '2026-01-24',
    location: 'Wawel Restobar, Barcelona',
    categoryKey: 'workshop',
    image: '/images/34-final/d0080507-e4ec-472e-9ba3-c4328686f552.jpg'
  },
  {
    id: 5,
    date: '2026-01-24',
    location: 'Hotel W Barcelona',
    categoryKey: 'run',
    image: '/images/kalendarz/workoplecak_20bieg_podglad.jpg'
  },
  {
    id: 8,
    date: '2025-12-14',
    time: '15:00',
    location: 'Wawel, Barcelona',
    categoryKey: 'volunteerMeeting',
    image: '/images/34-final/IMG_7449.JPG'
  },
  {
    id: 7,
    date: '2025-12-03',
    time: '19:30',
    location: 'Online (link zostanie wysłany)',
    categoryKey: 'volunteerMeeting',
    image: '/images/34-final/IMG_7448.JPG'
  },
  {
    id: 101,
    date: '2025-01-26',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    categoryKey: 'final',
    image: '/images/33-final/DSCF7321.jpg',
    amountRaised: '8,073.48 €',
    totalAmount: '13,880.62 €'
  },
  {
    id: 201,
    date: '2025-01-19',
    location: 'Start: Sagrada Familia, Meta: Hotel W Barcelona',
    categoryKey: 'run',
    image: '/images/pictures/pexels-valdemaras-d-784301-1874675.jpg'
  },
  {
    id: 202,
    date: '2025-01-18',
    location: 'Templo Beauty, Ronda del Guinardó 64, Horta-Guinardó, Barcelona',
    categoryKey: 'vernissage',
    image: '/images/33-final/DSCF7344.jpg'
  },
  {
    id: 203,
    date: '2025-01-11',
    location: 'World Class Barcelona',
    categoryKey: 'workshop',
    image: '/images/kalendarz/485066667_1070766505083825_7426193123650026575_n.jpg'
  },
  {
    id: 204,
    date: '2024-12-15',
    location: 'World Class Bcn Spanish school - Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    categoryKey: 'literaryMeeting',
    image: '/images/34-final/0a885645-72c7-4bbb-ba56-b3ee6895befd.jpg'
  },
  {
    id: 205,
    date: '2024-11-30',
    location: 'Jardins de Mossèn Costa i Llobera, Barcelona',
    categoryKey: 'photoWorkshop',
    image: '/images/pictures/pexels-frederic-bartl-256900-786126.jpg'
  },
  {
    id: 206,
    date: '2024-11-23',
    location: 'World Class Barcelona Carrer del Bisbe Laguarda, 4, Ciutat Vella, 08001 Barcelona',
    categoryKey: 'christmasWorkshop',
    image: '/images/kalendarz/485148348_1068884908605318_1878161433152570333_n.jpg'
  },
  {
    id: 104,
    date: '2023-01-29',
    location: 'Nau Bostik, Sant Andreu, Barcelona',
    categoryKey: 'final',
    image: '/images/33-final/DSCF7258.jpg',
    amountRaised: '10,460.47 €'
  },
  {
    id: 106,
    date: '2022-01-30',
    location: 'Carrer de Sardenya, 29, 08005 Barcelona',
    categoryKey: 'final',
    image: '/images/33-final/DSCF7250.jpg',
    amountRaised: '8,989.94 €'
  }
];
