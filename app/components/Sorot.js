'use client';
import { useEffect } from 'react';

// Tautan langsung #slug: gulir ke kartu (menghormati header sticky lewat scroll-margin) lalu sorot ±2 detik.
export default function Sorot() {
  useEffect(() => {
    let t;
    const sorot = () => {
      const slug = decodeURIComponent(location.hash.slice(1));
      const el = slug && document.querySelector(`[data-demo="${CSS.escape(slug)}"]`);
      if (!el) return;
      el.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      el.setAttribute('data-sorot', '');
      clearTimeout(t);
      t = setTimeout(() => el.removeAttribute('data-sorot'), 2200);
    };
    sorot();
    addEventListener('hashchange', sorot);
    return () => { removeEventListener('hashchange', sorot); clearTimeout(t); };
  }, []);
  return null;
}
