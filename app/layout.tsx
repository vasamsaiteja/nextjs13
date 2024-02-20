import "./globals.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        navbar
        <main>{children}</main>
        footer
      </body>
    </html>
  );
}
