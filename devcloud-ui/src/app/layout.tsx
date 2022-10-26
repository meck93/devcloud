import { PropsWithChildren } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Devcloud</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
