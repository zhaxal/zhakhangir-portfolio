import { LanguageProvider } from "@/contexts/language-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* next/head keeps one meta per name unless each has its own key. */}
        <meta
          key="theme-color-light"
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content="#161616"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="description"
          content="Full-stack engineer in Japan. TypeScript, React/Next.js, Node.js and PostgreSQL. Experience, projects and contact."
        />
        <meta property="og:title" content="Zhakhangir Anuarbek" />
        <meta
          property="og:description"
          content="Full-stack engineer in Japan. TypeScript, React/Next.js, Node.js and PostgreSQL. Experience, projects and contact."
        />
        <meta property="og:url" content="https://portfolio.zhakhangir.site" />
        <meta property="og:type" content="website" />

        <title>Zhakhangir Anuarbek, Full-Stack Engineer</title>
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
