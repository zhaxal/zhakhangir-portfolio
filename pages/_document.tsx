import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Archivo carries the extended display type; Space Grotesk the
            technical numerals; Noto Sans JP the Japanese locale. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Space+Grotesk:wght@300..700&family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          {/* Reveals are JS-driven; without it, show everything. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
