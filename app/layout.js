import "./globals.css";

export const metadata = {
  title: "Al Hafsa | Premium Living",
  description: "A premium, modern Al Hafsa experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}