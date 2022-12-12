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
        <meta name="image" property="og:image" content="public/portugal_og-image-1200x630px.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="description" property="og:description" content="a self-proclaimed interesting human bean 🫘" />
        <meta property="og:description" content="a self-proclaimed interesting human bean 🫘" />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content="jinyoung" />
        <link rel="icon" href="public/favicon.ico" />
        <base target="_blank" />
        <meta property="og:url" content="https://jinyoung.xyz" />
        <meta property="og:title" content="jinyoung" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
