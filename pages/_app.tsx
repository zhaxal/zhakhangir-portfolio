import { SnackbarProvider } from "@/contexts/snackbar-context";
import { LanguageProvider } from "@/contexts/language-context";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    button: { textTransform: "none" },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#D6A24E",
      contrastText: "#111110",
    },
    background: {
      default: "#111110",
      paper: "#111110",
    },
    text: {
      primary: "#E9E7E2",
      secondary: "#8F8D86",
    },
    divider: "rgba(233, 231, 226, 0.12)",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Zhakhangir Anuarbek" />
        <meta
          property="og:description"
          content="Fullstack engineer — event platforms, registration systems, interactive city quests."
        />
        <meta property="og:url" content="zhakhangir.online" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/xDW0cxg/portfolio-logo.png"
        />

        <title>Zhakhangir Anuarbek — Fullstack Engineer</title>
      </Head>
      <LanguageProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
