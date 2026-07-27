import { LanguageProvider } from "@/contexts/language-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* viewport-fit=cover so env(safe-area-inset-*) resolves on notched phones */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="description"
          content="Software engineer in Niigata, Japan — web development, computer vision and hardware."
        />
        <meta property="og:title" content="Zhakhangir Anuarbek" />
        <meta
          property="og:description"
          content="Software engineer in Niigata, Japan — web development, computer vision and hardware."
        />
        <meta property="og:url" content="https://portfolio.zhakhangir.site" />
        <meta property="og:type" content="website" />

        <title>Zhakhangir Anuarbek — Software Engineer</title>
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
