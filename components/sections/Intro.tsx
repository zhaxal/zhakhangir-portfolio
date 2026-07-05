import { FC } from "react";
import { Link as MuiLink, Stack, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/language-context";
import { languages, skills, socials, ui } from "@/data/content";

const Intro: FC = () => {
  const { lang } = useLanguage();

  return (
    <Stack id="top" component="header" spacing={3}>
      <Stack spacing={0.5}>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          Zhakhangir Anuarbek
        </Typography>
        <Typography color="text.secondary">{ui.intro.role[lang]}</Typography>
      </Stack>

      <Typography sx={{ lineHeight: 1.75, maxWidth: "38rem" }}>
        {ui.intro.bio[lang]}
      </Typography>

      <Typography color="text.secondary" fontSize="0.9rem">
        {ui.intro.skillsLabel[lang]}: {skills.join(" · ")}
      </Typography>

      <Typography color="text.secondary" fontSize="0.9rem">
        {ui.intro.languagesLabel[lang]}:{" "}
        {languages
          .map((l) => `${l.name[lang]} (${l.level[lang]})`)
          .join(" · ")}
      </Typography>

      <Stack direction="row" spacing={2.5}>
        {[
          { label: "GitHub", href: socials.github },
          { label: "LinkedIn", href: socials.linkedin },
          { label: "Instagram", href: socials.instagram },
        ].map((social) => (
          <MuiLink
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "primary.main",
              fontSize: "0.9rem",
              textDecorationColor: "rgba(214, 162, 78, 0.4)",
              "&:hover": { textDecorationColor: "inherit" },
            }}
          >
            {social.label}
          </MuiLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default Intro;
