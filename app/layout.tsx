import './globals.css';

export const metadata = {
  title: 'Nextjs-Playground',
  description: 'Playground for my Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
