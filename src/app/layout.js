import "./globals.css";
import NextTopLoader from "nextjs-toploader";
// import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
const googleSans = localFont({
    src: [
      { path: './fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },

    ],
  });

// const openSans  = Open_Sans({
//     subsets: ['latin'], // Optional subsets
//     weight: ['300', '400', '500', '600', '700'], // Optional weights
//     variable: '--font-inter', // Optional CSS variable
//   });

export const metadata = {
    title: "GDG PCE",
    description: "On Campus Pillai College of Engineering",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={googleSans.className}>
                <NextTopLoader />
                {children}
            </body>
        </html>
    );
}
