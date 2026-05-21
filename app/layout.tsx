import "./globals.css";

export const metadata = {
  title: "SPK General Contracting",
  description: "Website",
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
