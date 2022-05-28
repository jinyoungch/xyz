import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';
import '../styles/syntax.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" disableTransitionOnChange>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Jin Young Choi Blog/Portfolio" />
        <meta name="author" content="Jin Young Choi" />
        <meta name="image" property="og:image" content="/bean.jpeg" />
        <meta name="description" property="og:description" content="software engineer based in nyc" />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content="jinyoung choi" />
        <link rel="icon" href="/favicon.ico" />
        <base target="_blank" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
