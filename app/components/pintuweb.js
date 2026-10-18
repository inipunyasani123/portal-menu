// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /menu-digital) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';
export const URL_PORTAL = `${PINTUWEB}/menu-digital`;

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "landing-page" dari PintuWeb/app/lib/packages.ts (harga, waktu): menu digital satu halaman
 * masuk paket itu. Satu-satunya tempat angka bisnis di portal ini.
 */
export const PAKET = {
  nama: 'Landing Page',
  mulai: 'Rp300 ribu',
  sampai: 'Rp600 ribu',
  waktu: '1–2 hari kerja',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'menu-digital', label: 'Menu Digital' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'menu-digital');

/** Paket harga (lib/packages.ts: landing-page), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#landing-page`, label: 'Harga paket Landing Page' },
  { href: `${PINTUWEB}/services/landing-page`, label: 'Jasa pembuatan landing page' },
  { href: `${PINTUWEB}/demo#menu`, label: 'Semua demo PintuWeb' },
];
