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
        <meta name="theme-color" content="#2c3136" />
        <meta
          name="description"
          content="Full-stack engineer. Built and ran event platforms where 5,000+ people registered, owning front end, back end, database and deployment."
        />
        <meta property="og:title" content="Zhakhangir Anuarbek" />
        <meta
          property="og:description"
          content="Full-stack engineer. Built and ran event platforms where 5,000+ people registered, owning front end, back end, database and deployment."
        />
        <meta property="og:url" content="https://portfolio.zhakhangir.site" />
        <meta property="og:type" content="website" />

        <title>Zhakhangir Anuarbek, full-stack engineer</title>
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
