/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="author" content="Muhammadrizo Bakhtiyorov" />
          <meta
            name="keywords"
            content="Muhammadrizo Bakhtiyorov, muhammadrizo, muhammadrizo.dev, affinity developer."
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hi, I&#x27;m Muhammadrizo Bakhtiyorov, Frontend Developer and Javascript Engineer."
          />
          <meta
            property="og:description"
            content="Hi, I&#x27;m Muhammadrizo Bakhtiyorov, Frontend Developer and Javascript Engineer."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="preconnect" href="https://i.ibb.co/" crossOrigin />
          <link rel="shortcut icon" href="../public/icons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/ms-icon-70x70.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/ms-icon-70x70.png"
          />
          <meta name="msapplication-TileImage" content="/ms-icon-70x70.png" />
          <link rel="icon" href=".././public/icons/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />
          <meta property="og:title" content="Muhammadrizo Bakhtiyorov" />
          <meta property="og:url" content="https://muhammadrizo.dev" />
          <meta
            name="apple-mobile-web-app-title"
            content="Muhammadrizo Bakhtiyorov"
          />
          <meta name="next-head-count" content="21" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Regular.otf");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Medium.otf");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Bold.otf");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
