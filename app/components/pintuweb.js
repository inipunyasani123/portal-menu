import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /menu-digital) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';
export const URL_PORTAL = `${PINTUWEB}/menu-digital`;

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "landing-page" dari PintuWeb/app/lib/packages.ts (harga, waktu): menu digital satu halaman
 * masuk paket itu. Satu-satunya tempat angka bisnis di portal ini.
 */
export const PAKET = {
  nama: 'Landing Page',
  mulai: rp(P('landing-page').mulai),
  sampai: rp(P('landing-page').sampai),
  waktu: P('landing-page').waktu,
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'menu-digital');

/** Paket harga (lib/packages.ts: landing-page), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#landing-page`, label: 'Harga paket Landing Page' },
  { href: `${PINTUWEB}/services/landing-page`, label: 'Jasa pembuatan landing page' },
  { href: `${PINTUWEB}/demo#menu`, label: 'Semua demo PintuWeb' },
];

/** Artikel terkait di PintuWeb (grup "Baca juga"). */
export const BACA = [
  { href: `${PINTUWEB}/artikel/menu-digital-qr`, label: 'Menu digital QR: cara kerja dan biayanya' },
];
