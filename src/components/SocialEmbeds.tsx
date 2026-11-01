'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export const FACEBOOK_URL = 'https://www.facebook.com/sztabWOSPBarcelona';
export const INSTAGRAM_URL = 'https://www.instagram.com/wospbarcelona/';
export const TIKTOK_HANDLE = 'wospbarcelona';
export const TIKTOK_URL = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;

/* ---------- consent (per provider, remembered in localStorage on request) ---------- */

const CONSENT_EVENT = 'wosp-social-consent-change';
const consentKey = (provider: string) => `wosp-consent-${provider}`;

function readConsent(provider: string) {
  try {
    return localStorage.getItem(consentKey(provider)) === 'yes';
  } catch {
    return false;
  }
}

function writeConsent(provider: string, value: boolean) {
  try {
    if (value) localStorage.setItem(consentKey(provider), 'yes');
    else localStorage.removeItem(consentKey(provider));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function subscribeConsent(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CONSENT_EVENT, onChange);
  };
}

/** Placeholder with a "load" button; the third-party embed (and its cookies) loads only after consent. */
function ConsentGate({
  provider,
  name,
  profileUrl,
  buttonClass,
  children,
}: {
  provider: string;
  name: string;
  profileUrl: string;
  buttonClass: string;
  children: ReactNode;
}) {
  const t = useTranslations('social.embed');
  const [clicked, setClicked] = useState(false);
  const [remember, setRemember] = useState(false);
  const stored = useSyncExternalStore(subscribeConsent, () => readConsent(provider), () => false);
  const enabled = clicked || stored;

  if (!enabled) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-red-100 bg-white p-6 text-center shadow-sm">
        <p className="text-base text-gray-800 max-w-sm">{t('consentText', { name })}</p>
        <button
          type="button"
          onClick={() => {
            if (remember) writeConsent(provider, true);
            setClicked(true);
          }}
          className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${buttonClass}`}
        >
          {t('load', { name })}
        </button>
        <label className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 accent-red-600" />
          {t('remember')}
        </label>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold text-red-700 hover:underline">
          {t('openProfile', { name })}
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-red-100 bg-white shadow-sm">{children}</div>
      <p className="mt-2 text-sm text-gray-700">
        {t('fallback', { name })}{' '}
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-700 hover:underline">
          {t('openProfileShort', { name })}
        </a>
      </p>
      <button
        type="button"
        onClick={() => {
          writeConsent(provider, false);
          setClicked(false);
        }}
        className="mt-1 text-xs text-gray-600 hover:underline"
      >
        {t('forget', { name })}
      </button>
    </div>
  );
}

/** Width of the wrapping element, so embeds that need a pixel width (Facebook) fit the column exactly. */
function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

/* ---------- Facebook: official Page Plugin ---------- */

function FacebookFrame({ title }: { title: string }) {
  const [ref, measured] = useContainerWidth<HTMLDivElement>();
  // The Page Plugin accepts 180–500 px and must be told the width explicitly.
  const width = Math.max(180, Math.min(500, measured || 340));
  const height = 640;
  const src =
    'https://www.facebook.com/plugins/page.php?' +
    new URLSearchParams({
      href: FACEBOOK_URL,
      tabs: 'timeline',
      width: String(width),
      height: String(height),
      small_header: 'true',
      adapt_container_width: 'true',
      hide_cover: 'false',
      show_facepile: 'false',
    }).toString();

  return (
    <div ref={ref} className="flex justify-center">
      {measured > 0 && (
        <iframe
          key={width}
          title={title}
          src={src}
          width={width}
          height={height}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
          loading="lazy"
        />
      )}
    </div>
  );
}

export function FacebookFeed() {
  const t = useTranslations('social.facebook');
  return (
    <ConsentGate provider="facebook" name="Facebook" profileUrl={FACEBOOK_URL} buttonClass="bg-[#1877F2]">
      <FacebookFrame title={t('iframeTitle')} />
    </ConsentGate>
  );
}

/* ---------- Instagram: profile embed (header + grid of recent posts) ---------- */

export function InstagramFeed() {
  const t = useTranslations('social.instagram');
  return (
    <ConsentGate
      provider="instagram"
      name="Instagram"
      profileUrl={INSTAGRAM_URL}
      buttonClass="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
    >
      <iframe
        title={t('iframeTitle')}
        src={`${INSTAGRAM_URL}embed/`}
        className="block w-full border-0"
        height={640}
        loading="lazy"
        scrolling="no"
      />
    </ConsentGate>
  );
}

/* ---------- TikTok: official creator embed (profile + latest videos) ---------- */

function TikTokCreator() {
  useEffect(() => {
    // embed.js scans the page for .tiktok-embed blockquotes when it loads – (re)load it on mount.
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed !m-0"
      cite={TIKTOK_URL}
      data-unique-id={TIKTOK_HANDLE}
      data-embed-type="creator"
      style={{ maxWidth: 780, minWidth: 288 }}
    >
      <section>
        <a target="_blank" rel="noopener noreferrer" href={`${TIKTOK_URL}?refer=creator_embed`}>
          @{TIKTOK_HANDLE}
        </a>
      </section>
    </blockquote>
  );
}

export function TikTokFeed() {
  return (
    <ConsentGate provider="tiktok" name="TikTok" profileUrl={TIKTOK_URL} buttonClass="bg-gray-900">
      <TikTokCreator />
    </ConsentGate>
  );
}
