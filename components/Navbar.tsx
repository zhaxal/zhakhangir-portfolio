import { FC } from "react";
import { Box, Link as MuiLink, Stack } from "@mui/material";
import { Lang, LANGS, useLanguage } from "@/contexts/language-context";
import { ui } from "@/data/content";

const linkSx = {
  color: "text.secondary",
  textDecoration: "none",
  fontSize: "0.9rem",
  "&:hover": { color: "text.primary" },
};

const langLabels: Record<Lang, string> = {
  en: "EN",
  ru: "RU",
  ja: "日本語",
};

const Navbar: FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      pt={5}
      pb={{ xs: 8, md: 12 }}
    >
      <MuiLink href="#top" sx={{ ...linkSx, color: "text.primary" }}>
        ZA
      </MuiLink>
      <Stack direction="row" spacing={{ xs: 2, sm: 3 }}>
        <MuiLink href="#projects" sx={linkSx}>
          {ui.nav.projects[lang]}
        </MuiLink>
        <MuiLink href="#experience" sx={linkSx}>
          {ui.nav.experience[lang]}
        </MuiLink>
        <MuiLink href="#contact" sx={linkSx}>
          {ui.nav.contact[lang]}
        </MuiLink>
        <Stack
          direction="row"
          spacing={1}
          divider={<Box sx={{ color: "divider" }}>·</Box>}
        >
          {LANGS.map((code) => (
            <Box
              key={code}
              component="button"
              onClick={() => setLang(code)}
              aria-label={`Switch language to ${code}`}
              aria-current={lang === code ? "true" : undefined}
              sx={{
                ...linkSx,
                color: lang === code ? "text.primary" : "text.secondary",
                fontWeight: lang === code ? 600 : 400,
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
              }}
            >
              {langLabels[code]}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
