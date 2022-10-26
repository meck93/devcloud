import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Devcloud</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
