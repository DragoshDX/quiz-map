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
      <body className={inter.className}>
        <header>
          <h1 className={`${inika.className} text-primary-100`}>
            <a href="/" title="Triviosa">
              Triviosa
            </a>
          </h1>
        </header>

        <main className="text-primary-500">game</main>

        <footer>
          <p>
            Copyright © {new Date().getFullYear()} Triviosa | All Rights
            Reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
