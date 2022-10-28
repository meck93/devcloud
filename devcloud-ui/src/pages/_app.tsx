import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import EnsureAuthenticated from "../features/auth/EnsureAuthenticated/EnsureAuthenticated";
import type { AppAuthProps } from "../utils/next-auth/next-auth.types";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppAuthProps) {
  return (
    <SessionProvider session={session}>
      {Component.authenticationRequired ? (
        <EnsureAuthenticated>
          <Component {...pageProps} />
        </EnsureAuthenticated>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
