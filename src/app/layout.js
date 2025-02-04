import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/header/Header";
import localFont from 'next/font/local';
import Footer from "@/components/footer/Footer";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

const googleSans = localFont({
    src: [
      { path: './fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
    ],
  });

export const metadata = {
    title: "GDG-PCE",
    description: "Google Developer Groups • On Campus Pillai College of Engineering, New Panvel",
    openGraph: {
        title: "GDG-PCE",
        description: "Google Developer Groups • On Campus Pillai College of Engineering, New Panvel",
        siteName: "GDG-PCE",
        images: [
            {
                url: "https://gdg-website-test.vercel.app/banner.png",
                width: 1200,
                height: 630,
            },
        ]
    },
    twitter: {
        title: "GDG-PCE",
        description: "Google Developer Groups • On Campus Pillai College of Engineering, New Panvel",
        images: ["https://gdg-website-test.vercel.app/banner.png"],
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
            </head>
            <body className={googleSans.className}>
                <NextTopLoader style={{ zIndex: 500 }} />
                <LoadingOverlay />
                <Header />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
