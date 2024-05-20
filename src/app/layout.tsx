import { ThemeProvider } from '../context/ThemeContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Startup Exchange | The path to moving your ideas forward awaits.",
    template: "%s | Startup Exchange",
  },
  description: "SX offers students the community and mentors that enable them to become full-time founders. Sign up to hear about cool builders, campus communities, and upcoming events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
