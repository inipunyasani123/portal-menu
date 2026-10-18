import Link from 'next/link';
import { templates } from './components/templates-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main id="konten" className="modul flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="stiker" aria-hidden="true">404</span>
      <h1 className="mt-6 text-4xl sm:text-5xl">Meja ini tidak ada</h1>
      <p className="mt-4 max-w-md text-tinta-2">Nomor yang kamu pindai tidak terdaftar. {templates.length} menu digital menunggu di halaman utama.</p>
      <Link href="/" className="tombol tombol-tinta mt-8">Kembali ke daftar meja</Link>
    </main>
  );
}
