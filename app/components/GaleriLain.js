'use client';
import { useEffect, useId, useRef, useState } from 'react';

// Bilah jejak: "PintuWeb / Menu Digital" + tombol "Galeri lain" yang membuka daftar galeri lain (popover).
export default function GaleriLain({ galeri, pintuweb }) {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const kotak = useRef(null);
  const id = useId();

  useEffect(() => {
    if (!buka) return;
    const tutup = (kembali) => { setBuka(false); if (kembali) tombol.current?.focus(); };
    const onKey = (e) => { if (e.key === 'Escape') tutup(true); };
    const onKlik = (e) => { if (!kotak.current?.contains(e.target) && !tombol.current?.contains(e.target)) setBuka(false); };
    const onFokus = (e) => { if (!kotak.current?.contains(e.target) && !tombol.current?.contains(e.target)) setBuka(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onKlik);
    document.addEventListener('focusin', onFokus);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onKlik); document.removeEventListener('focusin', onFokus); };
  }, [buka]);

  return (
    <nav aria-label="Jejak" className="relative bg-tinta text-xs text-kertas">
      <div className="wadah flex items-center gap-2 py-1.5">
        <a href={pintuweb} className="inline-flex min-h-7 items-center font-semibold underline-offset-4 hover:underline">PintuWeb</a>
        <span aria-hidden="true" className="opacity-60">/</span>
        <span aria-current="page">Menu Digital</span>
        <button
          ref={tombol}
          type="button"
          aria-expanded={buka}
          aria-controls={id}
          onClick={() => setBuka((b) => !b)}
          className="ms-auto inline-flex min-h-7 items-center gap-1 rounded-full border border-kertas/30 px-3 font-semibold transition hover:border-stiker hover:text-stiker"
        >
          Galeri lain <span aria-hidden="true" className={`transition ${buka ? 'rotate-180' : ''}`}>▾</span>
        </button>
      </div>
      {buka && (
        <div ref={kotak} id={id} className="gelap absolute end-0 start-0 top-full z-50 border-b border-kertas/15 bg-tinta shadow-2xl sm:start-auto sm:me-6 sm:w-72 sm:rounded-b-2xl sm:border sm:border-t-0">
          <ul className="wadah grid gap-x-4 py-2 sm:px-3">
            {galeri.map((g) => (
              <li key={g.path}>
                <a href={`${pintuweb}/${g.path}`} className="flex min-h-10 items-center justify-between rounded-lg px-2 text-sm text-kertas/90 transition hover:bg-kertas/10 hover:text-stiker">
                  {g.label}<span aria-hidden="true" className="opacity-50">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
