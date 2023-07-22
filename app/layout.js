import { Header } from '@/components/layout/Header';
import './globals.css';

export const metadata = {
  title: 'Diamono Website',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
