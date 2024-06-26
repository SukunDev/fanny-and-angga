import localFont from "next/font/local";
import "./globals.css";
import { ThemeContextProvider } from "@/components/providers";

const adelia = localFont({
  src: [
    {
      path: "../public/fonts/adelia.ttf",
      weight: "400",
    },
  ],
  variable: "--font-adelia",
});

const aston = localFont({
  src: [
    {
      path: "../public/fonts/Aston Script.ttf",
      weight: "400",
    },
  ],
  variable: "--font-aston",
});

const newyork = localFont({
  src: [
    {
      path: "../public/fonts/NewYork.otf",
      weight: "400",
    },
  ],
  variable: "--font-newyork",
});

export const metadata = {
  title: `The Wedding Of Fanny & Angga`,
  description: `Sabtu, 27 April 2024`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${adelia.variable} ${aston.variable} ${newyork.variable}`}
    >
      <body className="overflow-hidden">
        <ThemeContextProvider>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {children}
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
