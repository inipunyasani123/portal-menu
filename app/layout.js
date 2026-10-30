import './globals.css';
import { Unbounded, Geist } from 'next/font/google';
import { templates } from './components/templates-data';
import { URL_PORTAL, PINTUWEB } from './components/pintuweb';

const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded', display: 'swap' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah demo dihitung dari data, bukan ditulis tangan.
const TITLE = `Contoh Menu Digital: ${templates.length} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = 'Empat contoh menu digital QR: kedai kopi, warung bakso, warung Jepang, dan dessert bar. Pindai di meja, pilih, pesan lewat WhatsApp.';

// CollectionPage + daftar demonya (ItemList) + jejak. Data dari templates-data, jadi ikut bertambah sendiri.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: 'id-ID',
  isPartOf: { '@type': 'WebSite', name: 'PintuWeb', url: PINTUWEB },
  publisher: { '@type': 'Organization', name: 'PintuWeb', url: PINTUWEB },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: templates.length,
    itemListElement: templates.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: `${t.merek} — ${t.name}`, url: t.url })),
  },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'PintuWeb', item: PINTUWEB }, { '@type': 'ListItem', position: 2, name: 'Menu Digital', item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: 'PintuWeb',
  keywords: ['menu digital', 'qr menu', 'menu qr restoran', 'menu digital kafe', 'contoh menu digital'],
  authors: [{ name: 'PintuWeb', url: PINTUWEB }],
  creator: 'PintuWeb',
  publisher: 'PintuWeb',
  alternates: { canonical: URL_PORTAL },
  openGraph: { type: 'website', locale: 'id_ID', url: URL_PORTAL, siteName: 'PintuWeb', title: TITLE, description: DESCRIPTION, images: [{ url: '/og.jpg', width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export const viewport = { themeColor: '#f6f3ec', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${unbounded.variable} ${geist.variable}`}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
