'use server';

import nodemailer from 'nodemailer';

export type ContactResult = { ok: true } | { ok: false; error: 'invalid' | 'server' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Wiadomości z formularza zawsze idą na stały adres sztabu – odbiorca nie przychodzi z przeglądarki,
// żeby formularza nie dało się użyć do wysyłania maili pod dowolny adres.
export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const name = String(formData.get('name') ?? '').trim().slice(0, 200);
  const email = String(formData.get('email') ?? '').trim().slice(0, 200);
  const message = String(formData.get('message') ?? '').trim().slice(0, 5000);
  const honeypot = String(formData.get('website') ?? '');

  // Pole-pułapka: ludzie go nie widzą, boty je wypełniają. Udajemy sukces, żeby bot nie próbował dalej.
  if (honeypot) return { ok: true };

  if (!EMAIL_RE.test(email) || message.length < 2) {
    return { ok: false, error: 'invalid' };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: missing SMTP_HOST / SMTP_USER / SMTP_PASS env vars');
    return { ok: false, error: 'server' };
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const displayName = (name || 'Bez imienia').replace(/[\r\n"]/g, ' ');

  try {
    await transporter.sendMail({
      from: { name: 'Strona WOŚP Barcelona', address: SMTP_USER },
      to: CONTACT_TO || SMTP_USER,
      replyTo: { name: displayName, address: email },
      subject: `Wiadomość ze strony – ${displayName}`,
      text: `Imię i nazwisko: ${name || '—'}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });
    return { ok: true };
  } catch (err) {
    console.error('Contact form: sending failed', err);
    return { ok: false, error: 'server' };
  }
}
