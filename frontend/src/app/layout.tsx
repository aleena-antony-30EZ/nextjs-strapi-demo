import "./globals.css";

export const metadata = {
  title: "Corporate Starter",
  description: "Next.js Corporate Starter Template",
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

