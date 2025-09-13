import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Cartolinks Internship";
const SITE_DESCRIPTION = "An internship assignment project for Cartolinks, created by Dandave Udoka.";
const SITE_URL = "https://cartolink-internship.vercel.app/";  
const TWITTER_HANDLE = "@davetechinnov";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["internship", "career", "job", "opportunity", "Cartolinks", "Dandave Udoka"],
  authors: [{ name: "Dandave Udoka" }],
  creator: "Dandave Udoka",
  publisher: "Cartolinks",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [`${SITE_URL}/dan.jpg`], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/favicon-32x32.png' },
    ],
  },
  manifest: '/site.webmanifest', // Consider adding a webmanifest file
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
    // languages: {
    //   'en-US': 'https://yourdomain.com/en-US',
    //   'de-DE': 'https://yourdomain.com/de-DE',
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
