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

const LangSwitcher: FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="baseline"
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
  );
};

const Navbar: FC = () => {
  const { lang } = useLanguage();

  return (
    <Stack
      component="nav"
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", sm: "baseline" }}
      spacing={{ xs: 2.5, sm: 0 }}
      pt={5}
      pb={{ xs: 8, md: 12 }}
    >
      {/* Top tier on mobile: logo + language switcher.
          On desktop the switcher is hidden here and shown alongside the links. */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <MuiLink href="#top" sx={{ ...linkSx, color: "text.primary" }}>
          ZA
        </MuiLink>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <LangSwitcher />
        </Box>
      </Stack>

      {/* Section links; language switcher rejoins this row on desktop. */}
      <Stack
        direction="row"
        spacing={{ xs: 2.5, sm: 3 }}
        alignItems="baseline"
        flexWrap="wrap"
      >
        <MuiLink href="#projects" sx={linkSx}>
          {ui.nav.projects[lang]}
        </MuiLink>
        <MuiLink href="#experience" sx={linkSx}>
          {ui.nav.experience[lang]}
        </MuiLink>
        <MuiLink href="#contact" sx={linkSx}>
          {ui.nav.contact[lang]}
        </MuiLink>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <LangSwitcher />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
