import '../styles/main.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    <>
      <Head>
        <title>Speechmatics RT Demo</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
        <Theme>
          <Component {...pageProps} />
        </Theme>
    </>
  );
}
