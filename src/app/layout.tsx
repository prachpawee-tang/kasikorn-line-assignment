import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/th-bank.css";
import LocalStorageCleaner from "@/utils/LocalStorageCleaner";
import { StoreProvider } from "@/components/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kasikorn Line - Assignment",
  description: "Kasikorn Line - Frontend Developer Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocalStorageCleaner />
        <StoreProvider>
          <div className="wrap">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
