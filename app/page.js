import Image from 'next/image';
import QR from './components/QR';
import { templates, slugOf } from './components/templates-data';
import GaleriLain from './components/GaleriLain';
import BilahLengket from './components/BilahLengket';
import Sorot from './components/Sorot';
import { LANJUT, BACA, GALERI_LAIN, PINTUWEB, URL_PORTAL, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya mau buat menu digital QR untuk usaha saya. Boleh minta info?');
const WA_BILAH = wa('Halo PintuWeb, saya tertarik menu digital QR. Boleh minta info?');
const N = templates.length;
const NAMA_N = { 4: 'Empat', 5: 'Lima', 6: 'Enam' }[N] ?? N;

const BISA = [
  ['Nomor meja ikut terbaca', 'Setiap meja punya QR dengan nomornya sendiri. Pelanggan tidak perlu mengetik apa pun; kasir tahu pesanan datang dari meja mana.'],
  ['Cari dan saring', 'Ketik "pedas", "tanpa kafein", atau "dingin". Bagian yang kosong hilang sendiri, jadi daftarnya tidak pernah terasa panjang.'],
  ['Opsi dan topping dengan harga', 'Ukuran, suhu, level pedas, susu oat, topping tambahan. Harga tambahannya dihitung di lembar pilihan sebelum masuk nampan.'],
  ['Nampan ke WhatsApp', 'Pesanan tersusun rapi sebagai pesan: item, pilihan, catatan, nomor meja, total. Masuk ke WhatsApp kasir tanpa aplikasi tambahan.'],
  ['Jam buka dihitung sendiri', 'Status buka atau tutup mengikuti jam usahamu dalam WIB, termasuk warung yang tutup lewat tengah malam.'],
  ['Habis tinggal ditandai', 'Stok habis, harga naik, menu baru: cukup ubah satu berkas data. Tidak ada cetak ulang, tidak ada stiker koreksi.'],
];

const PASANG = [
  ['Kirim daftar menu', 'Foto menu lama, Excel, atau catatan WhatsApp. Harga, deskripsi singkat, dan opsi yang biasa ditanya pelanggan.'],
  ['Kami susun dan desain', 'Kategori, urutan, ilustrasi, dan identitas warna yang cocok dengan warungmu. Satu halaman, ringan di ponsel murah sekalipun.'],
  ['Cetak QR per meja', 'Kamu terima berkas QR siap cetak untuk tiap nomor meja, plus satu QR umum untuk kasir dan media sosial.'],
  ['Pesanan masuk WhatsApp', 'Tamu pindai, pilih, kirim. Nomor WhatsApp kasir dipasang di halaman; pesan masuk lengkap dengan nomor meja.'],
];

const TANYA = [
  { q: 'Berapa biaya membuat menu digital seperti ini?', a: `Menu digital satu halaman masuk paket ${PAKET.nama} PintuWeb: ${PAKET.mulai}–${PAKET.sampai}, dikerjakan ${PAKET.waktu}. Termasuk desain, berkas QR siap cetak per meja, domain, dan tombol WhatsApp. Angka pastinya tertulis di penawaran sebelum mulai.` },
  { q: 'Pesanan masuk ke mana?', a: 'Ke nomor WhatsApp kasir yang kamu tentukan, sebagai pesan yang sudah tersusun: item, pilihan, catatan, nomor meja, dan total. Di demo ini WhatsApp terbuka tanpa nomor tujuan.' },
  { q: 'Bisa ganti harga atau menandai menu habis sendiri?', a: 'Bisa. Semua isi menu ada di satu berkas data yang mudah dibaca. Kirim perubahannya ke kami, atau minta akses untuk mengubahnya sendiri; halaman diperbarui tanpa cetak ulang.' },
  { q: 'Apakah pelanggan harus memasang aplikasi?', a: 'Tidak. Menu dibuka di peramban ponsel lewat kamera biasa. Halamannya ringan (tanpa foto berat) dan tetap bisa dibaca di sinyal lemah.' },
  { q: 'Bisa pakai pembayaran QRIS atau kasir?', a: 'Alur dasarnya: pesan dari meja, bayar di kasir atau lewat QRIS saat diantar. Kalau mau pembayaran online di dalam halaman, itu masuk paket Aplikasi Web; ceritakan kebutuhanmu dan kami tunjukkan bedanya.' },
  { q: 'Usaha saya bukan kafe atau warung makan. Tetap cocok?', a: 'Pola yang sama dipakai untuk daftar layanan salon, harga laundry, paket fotokopi, atau katalog kios. Apa pun yang biasa dicetak dan sering berubah harganya.' },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      {/* Logo pintu asli PintuWeb (367×512); di latar gelap diberi alas putih membulat */}
      <span className={`grid shrink-0 place-items-center ${kecil ? 'rounded-lg bg-white p-1' : ''}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/menu-digital/logo-pintuweb.png" alt="" width="367" height="512" className={kecil ? 'h-7 w-auto' : 'h-8 w-auto'} />
      </span>
      <span className="flex flex-col text-left leading-none">
        {/* Spasi di antara dua baris: teks terlihat terbaca "PintuWeb Menu Digital" (sama dengan awal aria-label tautan) */}
        <span className="font-display text-[0.95rem] font-700 tracking-tight">PintuWeb</span>{' '}
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${kecil ? 'text-stiker' : 'text-pindai-tua'}`}>Menu Digital</span>
      </span>
    </>
  );
}

export default function PortalMenu() {
  return (
    <div id="top" className="min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      <GaleriLain galeri={GALERI_LAIN} pintuweb={PINTUWEB} />
      <Sorot />

      <header className="sticky top-0 z-40 border-b border-garis bg-kertas/90 backdrop-blur-xl">
        <div className="wadah flex items-center justify-between gap-3 py-2.5">
          <a href="#top" className="flex items-center gap-2.5" aria-label="PintuWeb Menu Digital, ke atas"><Logo /></a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-medium text-tinta-2 md:flex">
            <a href="#meja" className="transition hover:text-tinta">Empat meja</a>
            <a href="#bisa" className="transition hover:text-tinta">Yang bisa dilakukan</a>
            <a href="#pasang" className="transition hover:text-tinta">Cara pasang</a>
            <a href="#tanya" className="transition hover:text-tinta">Tanya jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-tinta min-h-10 shrink-0 px-4 text-sm">Pesan menu digital</a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero: kartu tenda di atas meja */}
        <section id="hero" className="modul relative overflow-hidden border-b border-garis">
          <div className="wadah grid gap-10 py-8 sm:py-16 lg:grid-cols-12 lg:items-center lg:py-20">
            <div className="min-w-0 lg:col-span-7">
              <p className="label naik">{N} demo · pindai dan coba di ponselmu</p>
              <h1 className="mt-3 text-[1.55rem] min-[400px]:text-[1.7rem] sm:mt-4 sm:text-6xl lg:text-[4.2rem]">
                Menu yang dipindai, bukan dicetak ulang.
              </h1>
              <p className="naik naik-2 mt-6 hidden max-w-xl sm:block text-[1.05rem] leading-relaxed text-tinta-2">
                Satu halaman ringan di balik stiker QR tiap meja: pelanggan memilih, memberi catatan, lalu pesanannya masuk WhatsApp kasir lengkap dengan nomor meja. Harga naik? Ubah datanya, bukan cetak ulang.
              </p>
              <div className="naik naik-2 mt-5 flex flex-wrap items-center gap-3 sm:mt-8">
                <a href="#meja" className="tombol tombol-tinta">Lihat {NAMA_N.toLowerCase()} meja</a>
                <a href="#pasang" className="tombol tombol-garis">Cara pasang</a>
              </div>
              <p className="mt-4 hidden text-sm text-tinta-3 sm:block">Mulai <strong className="font-display text-base text-tinta">{PAKET.mulai}</strong> · pengerjaan {PAKET.waktu}</p>
              {/* Strip demo (ponsel): demo terlihat di layar pertama, menaut ke kartunya */}
              <div className="mt-5 md:hidden">
                <p className="label">Geser, lalu pilih meja</p>
                <ul className="strip mt-2" aria-label="Pintasan ke demo">
                  {templates.map((t) => (
                    <li key={t.kode} className="contents">
                      <a href={`#${slugOf(t)}`} className="block w-[5.75rem]">
                        <span className="block overflow-hidden rounded-2xl border-2 border-tinta bg-white" style={{ background: t.warnaMuda }}>
                          <Image src={t.image} alt="" width={390} height={844} sizes="92px" className="aspect-[390/560] w-full object-cover object-top" />
                        </span>
                        <span className="mt-1.5 block text-xs font-semibold leading-tight">{t.merek}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tenda relative mx-auto hidden w-full max-w-sm md:block lg:col-span-5">
              {/* sisi lipatan */}
              <div className="tenda-sisi absolute inset-y-6 -left-3 w-10 rounded-l-lg bg-kertas-2" aria-hidden="true" />
              <div className="tenda-muka relative rounded-xl border border-garis bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="stiker" aria-hidden="true">01</span>
                  <div className="text-right">
                    <p className="label">Meja</p>
                    <p className="font-display text-lg font-700">Nomor 01</p>
                  </div>
                </div>
                <div className="relative mx-auto mt-5 w-[13.5rem] sm:w-60">
                  <QR url={URL_PORTAL} className="w-full text-tinta" label="Kode QR menuju halaman ini: pindai dengan ponsel untuk mencoba" />
                  <span className="garis-pindai" aria-hidden="true" />
                </div>
                <p className="mt-5 text-center font-display text-sm font-700">Pindai untuk lihat menu</p>
                <p className="mt-1 text-center text-xs text-tinta-3">Kode ini sungguhan: membuka halaman ini di ponselmu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Empat meja */}
        <section id="meja" aria-labelledby="judul-meja" className="scroll-mt-20 py-14 sm:py-20">
          <div className="wadah">
            <div className="max-w-2xl">
              <p className="label">Galeri</p>
              <h2 id="judul-meja" className="mt-3 text-3xl sm:text-5xl">{NAMA_N} meja, {NAMA_N.toLowerCase()} warung, satu cara pesan.</h2>
              <p className="mt-4 text-tinta-2">Tiap demo adalah usaha fiktif dengan identitas, tata letak, dan jenis opsi yang berbeda. Buka dari nomor meja contohnya supaya lencana meja dan pesan WhatsApp ikut terisi.</p>
            </div>

            <ol className="mt-10 space-y-10 sm:mt-14 sm:space-y-16">
              {templates.map((t, i) => {
                const slug = slugOf(t);
                const balik = i % 2 === 1;
                return (
                  <li key={t.kode} id={slug} data-demo={slug} className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-12">
                    <div className={`relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:col-span-5 ${balik ? 'lg:order-2 lg:col-start-8' : ''}`}>
                      <span className="stiker absolute -left-4 -top-4 z-10" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <a href={`${t.url}/?meja=${t.meja}`} target="_blank" rel="noopener noreferrer" className="ponsel block" tabIndex={-1} aria-hidden="true">
                        <div className="ponsel-layar" style={{ background: t.warnaMuda }}>
                          <Image src={t.image} alt="" fill sizes="(max-width: 640px) 272px, 304px" className="object-cover object-top" />
                        </div>
                      </a>
                    </div>
                    <div className={`lg:col-span-6 ${balik ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                      <p className="label">{t.kode} · {t.name} · {t.kota}</p>
                      <h3 className="mt-2 text-3xl sm:text-4xl">{t.merek}</h3>
                      <p className="mt-1 font-semibold text-pindai-tua">{t.paradigma}</p>
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-tinta-2">{t.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Bagian yang bisa dicoba di ${t.merek}`}>
                        {t.halaman.map(([path, label]) => (
                          <li key={path}>
                            <a href={`${t.url}${path}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center rounded-full border border-garis bg-white px-3.5 text-sm font-medium text-tinta-2 transition hover:border-tinta hover:text-tinta">{label}</a>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm text-tinta-3">Menu digital seperti ini: <strong className="font-display text-tinta">mulai {PAKET.mulai}</strong> · {PAKET.waktu}</p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <a href={`${t.url}/?meja=${t.meja}`} target="_blank" rel="noopener noreferrer" className="tombol tombol-tinta">Coba demo {t.merek}</a>
                        <a href={wa(`Halo PintuWeb, saya tertarik menu digital QR seperti contoh ${t.merek} (${t.url}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis">Pesan yang seperti ini</a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Yang bisa dilakukan pelanggan */}
        <section id="bisa" aria-labelledby="judul-bisa" className="gelap scroll-mt-20 bg-tinta py-14 text-kertas sm:py-20">
          <div className="wadah">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label !text-stiker">Dari sisi meja</p>
                <h2 id="judul-bisa" className="mt-3 text-3xl sm:text-4xl">Yang bisa dilakukan pelanggan tanpa memanggil siapa pun</h2>
                <p className="mt-4 text-sm leading-relaxed text-kertas/70">Semua ini sudah berjalan di keempat demo, bukan daftar rencana. Coba satu per satu dari nomor meja contoh.</p>
              </div>
              <ol className="grid gap-x-10 lg:col-span-8 sm:grid-cols-2">
                {BISA.map(([j, d], i) => (
                  <li key={j} className="border-t border-kertas/15 py-5">
                    <p className="font-display text-3xl font-700 text-stiker">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-lg">{j}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-kertas/70">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Cara pasang: struk */}
        <section id="pasang" aria-labelledby="judul-pasang" className="scroll-mt-20 py-14 sm:py-20">
          <div className="wadah grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="label">Cara pasang</p>
              <h2 id="judul-pasang" className="mt-3 text-3xl sm:text-4xl">Dari foto menu lama sampai stiker di meja</h2>
              <p className="mt-4 text-tinta-2">Pengerjaan {PAKET.waktu}. Kamu tidak perlu menyiapkan apa pun selain daftar menu dan nomor WhatsApp kasir.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-stiker mt-6">Mulai dari WhatsApp</a>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="struk my-3 px-6 py-7 shadow-[0_20px_50px_-24px_rgba(21,22,26,0.35)] sm:px-8">
                <li className="mb-4 flex items-center justify-between border-b border-dashed border-garis pb-3 text-xs uppercase tracking-[0.16em] text-tinta-3"><span>Langkah pemasangan</span><span>{PASANG.length} baris</span></li>
                {PASANG.map(([j, d], i) => (
                  <li key={j} className="flex gap-4 border-b border-dashed border-garis py-4 last:border-0">
                    <span className="font-display text-xl font-700 text-tinta-3">{i + 1}</span>
                    <div>
                      <h3 className="text-lg">{j}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-tinta-2">{d}</p>
                    </div>
                  </li>
                ))}
                <li className="mt-4 flex items-center justify-between border-t border-garis pt-4 font-display text-sm font-700"><span>Mulai</span><span>{PAKET.mulai}</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Tanya jawab */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-20 border-t border-garis bg-white py-14 sm:py-20">
          <div className="wadah max-w-3xl">
            <p className="label">Tanya jawab</p>
            <h2 id="judul-tanya" className="mt-3 text-3xl sm:text-4xl">Sebelum menempel stiker</h2>
            <div className="mt-8 divide-y divide-garis border-y border-garis">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-menu" open={i === 0} className="tanya group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-[1rem] font-600 leading-snug [&::-webkit-details-marker]:hidden">
                    {t.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-garis text-lg leading-none transition group-open:rotate-45 group-open:bg-stiker" aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-5 text-[0.95rem] leading-relaxed text-tinta-2">{t.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="modul border-t border-garis px-4 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-xl">
            <span className="stiker" aria-hidden="true">QR</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">Warungmu berikutnya yang menempel stiker</h2>
            <p className="mt-4 text-tinta-2">Kirim foto menu lamamu. Dalam {PAKET.waktu} kamu terima halaman menu dan berkas QR siap cetak.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-tinta mt-7">Chat WhatsApp {WA_DISPLAY}</a>
          </div>
        </section>
      </main>

      <footer id="kaki" className="gelap bg-tinta pb-24 pt-10 text-kertas/75 md:pb-6">
        <div className="wadah grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{NAMA_N} menu digital untuk kedai kopi, warung bakso, warung Jepang, dan dessert bar.</p>
          </div>
          <nav aria-labelledby="kaki-lanjut" className="text-sm">
            <p id="kaki-lanjut" className="label !text-stiker">Lanjut di PintuWeb</p>
            <ul className="mt-3 space-y-1">
              {LANJUT.map((l) => (
                <li key={l.href}><a href={l.href} className="inline-block py-1 transition hover:text-kertas">{l.label}</a></li>
              ))}
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-kertas">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
            </ul>
          </nav>
          <nav aria-labelledby="kaki-baca" className="text-sm">
            <p id="kaki-baca" className="label !text-stiker">Baca juga</p>
            <ul className="mt-3 space-y-1">
              {BACA.map((l) => (
                <li key={l.href}><a href={l.href} className="inline-block py-1 transition hover:text-kertas">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="kaki-galeri" className="text-sm">
            <p id="kaki-galeri" className="label !text-stiker">Galeri lain</p>
            <ul className="mt-3 space-y-1">
              {GALERI_LAIN.map((g) => (
                <li key={g.path}><a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 transition hover:text-kertas">{g.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="wadah mt-10 border-t border-kertas/10 pt-4 text-xs">© 2026 PintuWeb. Semua usaha di demo ini fiktif. Berlokasi di Tulungagung.</p>
      </footer>
      <BilahLengket waHref={WA_BILAH} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
