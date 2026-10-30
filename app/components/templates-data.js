// Data 4 menu digital. `meja` = nomor meja contoh yang dipakai tautan QR demo. `halaman` = bagian yang bisa dicoba.
export const templates = [
  {
    kode: 'QR-001', name: 'Kedai kopi', merek: 'Sepertiga Kopi', kota: 'Malang', meja: '12',
    description: 'Kedai kopi di Malang. Pilih ukuran dan suhu, lalu pesan dari meja.',
    image: '/menu-digital/images/menu/kopi.webp', url: 'https://menu-kopi.pintuweb.id',
    warna: '#2a1b14', warnaMuda: '#efe6d7',
    halaman: [['/?meja=12', 'Buka dari meja 12'], ['/#pindai', 'Kode QR meja'], ['/#info', 'Alergen & tanya jawab']],
  },
  {
    kode: 'QR-002', name: 'Warung bakso', merek: 'Bakso Dalu', kota: 'Solo', meja: '7',
    description: 'Warung bakso malam di Solo. Pilih level pedas dan topping, lalu pesan.',
    image: '/menu-digital/images/menu/bakso.webp', url: 'https://menu-bakso.pintuweb.id',
    warna: '#141220', warnaMuda: '#ffb547',
    halaman: [['/?meja=7', 'Buka dari meja 7'], ['/#pindai', 'Kode QR meja'], ['/#info', 'Alergen & tanya jawab']],
  },
  {
    kode: 'QR-003', name: 'Warung makan Jepang', merek: 'Akagane Shokudō', kota: 'Jakarta Selatan', meja: '4',
    description: 'Warung makan Jepang di Jakarta. Lihat tanda alergen dan pilih paket set.',
    image: '/menu-digital/images/menu/jepang.webp', url: 'https://menu-jepang.pintuweb.id',
    warna: '#1b1a19', warnaMuda: '#f4efe6',
    halaman: [['/?meja=4', 'Buka dari meja 4'], ['/#pindai', 'Kode QR meja'], ['/#info', 'Alergen & tanya jawab']],
  },
  {
    kode: 'QR-004', name: 'Dessert bar', merek: 'Lintang Manis', kota: 'Bandung', meja: '3',
    description: 'Dessert bar di Bandung. Pilih rasa gelato dan rakit bowl sendiri.',
    image: '/menu-digital/images/menu/dessert.webp', url: 'https://menu-dessert.pintuweb.id',
    warna: '#3a2420', warnaMuda: '#ffd6e2',
    halaman: [['/?meja=3', 'Buka dari meja 3'], ['/#pindai', 'Kode QR meja'], ['/#info', 'Alergen & tanya jawab']],
  },
];

/** "https://menu-kopi.pintuweb.id" -> "kopi" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^menu-/, '');
