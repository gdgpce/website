import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
    title: "Google Developer Groups",
    description: "On Campus Pillai College of Engineering",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader />
                {children}
            </body>
        </html>
    );
}
