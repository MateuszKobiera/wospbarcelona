import { redirect } from 'next/navigation';

export default async function SponsorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/sponsors/35-final`);
}
