import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okazu",
  description: "A preventative illness solution",
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
