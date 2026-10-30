'use client';
import { useEffect, useState } from 'react';

// Bilah aksi lengket di ponsel (< 768 px): muncul setelah hero lewat, hilang saat footer terlihat.
export default function BilahLengket({ waHref }) {
  const [heroLewat, setHeroLewat] = useState(false);
  const [footerTampil, setFooterTampil] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const footer = document.getElementById('kaki');
    if (!hero || !footer) return;
    const a = new IntersectionObserver(([e]) => setHeroLewat(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    const b = new IntersectionObserver(([e]) => setFooterTampil(e.isIntersecting), { threshold: 0 });
    a.observe(hero); b.observe(footer);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);

  const tampil = heroLewat && !footerTampil;
  return (
    <div
      className={`gelap fixed inset-x-0 bottom-0 z-40 border-t border-kertas/15 bg-tinta px-4 pt-2.5 transition duration-300 md:hidden ${tampil ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
      inert={!tampil}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href="#meja" className="tombol tombol-garis !min-h-11 flex-1 !border-kertas/40 !px-3 !text-kertas">Lihat demo</a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="tombol tombol-stiker !min-h-11 flex-[1.4] !px-3">Pesan via WhatsApp</a>
      </div>
    </div>
  );
}
