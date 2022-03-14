import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...otherPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <Component {...otherPageProps} />
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
