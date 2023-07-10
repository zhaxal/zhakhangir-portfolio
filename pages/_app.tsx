import { SnackbarProvider } from "@/contexts/snackbar-context";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

declare module "@mui/material/styles" {
  interface Palette {
    react: Palette["primary"];
    nextjs: Palette["primary"];
    github: Palette["primary"];
    nginx: Palette["primary"];
    docker: Palette["primary"];
    instagram: Palette["primary"];
    firebase: Palette["primary"];
    mongodb: Palette["primary"];
    linkedin: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    react?: PaletteOptions["primary"];
    nextjs?: PaletteOptions["primary"];
    github?: PaletteOptions["primary"];
    nginx?: PaletteOptions["primary"];
    docker?: PaletteOptions["primary"];
    instagram?: PaletteOptions["primary"];
    firebase?: PaletteOptions["primary"];
    mongodb?: PaletteOptions["primary"];
    linkedin?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    react: true;
    nextjs: true;
    github: true;
    nginx: true;
    docker: true;
    instagram: true;
    firebase: true;
    mongodb: true;
    linkedin: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Prompt", "Open Sans"].join(","),
  },
  palette: {
    mode: "dark",

    primary: {
      main: "#00AEEF",
    },
    react: {
      main: "#61dbfb",
      contrastText: "#FFFFFF",
    },
    nextjs: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
    github: {
      main: "#171515",
      contrastText: "#FFFFFF",
    },
    firebase: {
      main: "#F5820D",
      contrastText: "#FFFFFF",
    },
    instagram: {
      main: "#E4405F",
      contrastText: "#FFFFFF",
    },
    docker: {
      main: "#384d54",
      contrastText: "#FFFFFF",
    },
    mongodb: {
      main: "#589636",
      contrastText: "#FFFFFF",
    },
    linkedin: {
      main: "#0A66C2",
      contrastText: "#FFFFFF",
    },
    nginx: {
      main: "#009900",
      contrastText: "#FFFFFF",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta property="og:title" content="Zhakhangir Anuarbek" />
          <meta property="og:description" content="Kazakh web developer." />
          <meta property="og:url" content="zhakhangir.online" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://i.ibb.co/xDW0cxg/portfolio-logo.png" />

          <title>Zhakhangir Anuarbek</title>
        </Head>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
