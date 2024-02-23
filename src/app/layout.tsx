import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farm Data Dashboard",
  description: "A dashboard for farm data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center p-4 bg-green-600 text-white">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Farm Data Dashboard
            </a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/usda">Find State Data</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="p-4 bg-green-600 text-white text-center">
          <p>&copy; {new Date().getFullYear()} USDA</p>
        </footer>
      </body>
    </html>
  );
}
