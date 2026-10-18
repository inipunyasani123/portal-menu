// Data 4 menu digital. `meja` = nomor meja contoh yang dipakai tautan QR demo. `halaman` = bagian yang bisa dicoba.
export const templates = [
  {
    kode: 'QR-001', name: 'Kedai kopi', merek: 'Sepertiga Kopi', kota: 'Malang', meja: '12',
    paradigma: 'Daftar berpenuntun titik',
    description: 'Menu kedai kopi bergaya kartu cupping: espresso, manual brew, kopi susu, kudapan, dan biji bawa pulang. Pilih suhu, ukuran, susu oat, gula, sampai metode seduh.',
    image: '/menu-digital/images/menu/kopi.webp', url: 'https://menu-kopi.pintuweb.id',
    warna: '#2a1b14', warnaMuda: '#efe6d7',
    halaman: [['/?meja=12', 'Buka dari meja 12'], ['/#pindai', 'Kartu QR meja'], ['/#info', 'Alergen & FAQ']],
  },
  {
    kode: 'QR-002', name: 'Warung bakso', merek: 'Bakso Dalu', kota: 'Solo', meja: '7',
    paradigma: 'Ubin bergambar mangkuk',
    description: 'Warung tenda malam yang buka sampai lewat tengah malam. Level pedas 0–5, kuah bening atau merah, topping tambahan, dan paket hemat dalam bento.',
    image: '/menu-digital/images/menu/bakso.webp', url: 'https://menu-bakso.pintuweb.id',
    warna: '#141220', warnaMuda: '#ffb547',
    halaman: [['/?meja=7', 'Buka dari meja 7'], ['/#pindai', 'Kartu QR meja'], ['/#info', 'Alergen & FAQ']],
  },
  {
    kode: 'QR-003', name: 'Warung makan Jepang', merek: 'Akagane Shokudō', kota: 'Jakarta Selatan', meja: '4',
    paradigma: 'Nampan lacquer & teishoku',
    description: 'Shokudō sederhana: teishoku, ramen, donburi, sushi roll, agemono. Ikon alergen di tiap item, tingkat pedas ichimi, porsi mie, dan diagram susunan set.',
    image: '/menu-digital/images/menu/jepang.webp', url: 'https://menu-jepang.pintuweb.id',
    warna: '#1b1a19', warnaMuda: '#f4efe6',
    halaman: [['/?meja=4', 'Buka dari meja 4'], ['/#pindai', 'Kartu QR meja'], ['/#info', 'Alergen & FAQ']],
  },
  {
    kode: 'QR-004', name: 'Dessert bar', merek: 'Lintang Manis', kota: 'Bandung', meja: '3',
    paradigma: 'Bento pastel & rakit bowl',
    description: 'Gelato, croffle, kue potong, puding, dan bowl rakitan sendiri. Meter manis 1–5 bintang, pilihan rasa sesuai jumlah scoop, topping dengan batas maksimal.',
    image: '/menu-digital/images/menu/dessert.webp', url: 'https://menu-dessert.pintuweb.id',
    warna: '#3a2420', warnaMuda: '#ffd6e2',
    halaman: [['/?meja=3', 'Buka dari meja 3'], ['/#pindai', 'Kartu QR meja'], ['/#info', 'Alergen & FAQ']],
  },
];

/** "https://menu-kopi.pintuweb.id" -> "kopi" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^menu-/, '');
