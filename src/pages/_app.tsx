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
        <meta name="author" content="jinyoung" />
        {/* TODO: modify content value for meta image from relative path to canonical URL */}
        <meta name="image" property="og:image" content="jeju.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://jinyoung.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="jinyoung" />
        <meta property="og:description" content="a self-proclaimed interesting human bean 🫘" />
        <meta name="description" content="a self-proclaimed interesting human bean 🫘" />
        {/* <meta property="og:image" content="public/jeju.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        <link rel="icon" href="favicon.ico" />
        <base target="_blank" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
