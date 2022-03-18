import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SessionProvider } from 'next-auth/react';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...otherPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <Component {...otherPageProps} />
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
