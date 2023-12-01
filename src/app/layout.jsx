import { Inter, Inika } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const inika = Inika({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Triviosa',
  description: 'Invata judetele Romaniei',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body
        className={`${inter.className} flex flex-col h-screen text-primary-500 lg:text-xl`}
      >
        <header className="bg-gray-50 text-center py-2 lg:py-7">
          <div className="container mx-auto px-6 lg:px-0">
            <h1
              className={`${inika.className} text-primary-100 text-2xl lg:text-6xl uppercase`}
            >
              <a href="/" title="Triviosa">
                Triviosa
              </a>
            </h1>
          </div>
        </header>

        <main className="text-primary-500 flex-grow bg-neutral-400 py-5 lg:py-12">
          {children}
        </main>

        <footer className="bg-gray-50">
          <div className="container mx-auto px-6 lg:px-0">
            <p className="text-[#6F6C90] pt-10 pb-10 lg:pt-32 text-sm lg:text-lg">
              Copyright © {new Date().getFullYear()} Triviosa | All Rights
              Reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
