import "./globals.css";
import "./tailwind.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/header/Header";
// import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from "@/components/footer/Footer";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

const googleSans = localFont({
    src: [
      { path: './fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },

    ],
  });

export const metadata = {
    title: "GDG PCE",
    description: "On Campus Pillai College of Engineering",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
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
