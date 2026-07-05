import { FC } from "react";
import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/language-context";
import { education, ExperienceItem, ui, work } from "@/data/content";

const ExperienceGroup: FC<{ label: string; items: ExperienceItem[] }> = ({
  label,
  items,
}) => {
  const { lang } = useLanguage();

  return (
    <Stack spacing={2.5}>
      <Typography
        color="text.secondary"
        fontSize="0.9rem"
        component="h2"
        fontWeight={500}
      >
        {label}
      </Typography>
      {items.map((item) => (
        <Stack
          key={item.title.en}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0.25, sm: 2 }}
        >
          <Typography
            color="text.secondary"
            fontSize="0.85rem"
            sx={{ width: { sm: "9rem" }, flexShrink: 0, pt: "0.15rem" }}
          >
            {item.period[lang]}
          </Typography>
          <Stack spacing={0.25}>
            {item.link ? (
              <MuiLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.title[lang]}
              </MuiLink>
            ) : (
              <Typography fontWeight={500}>{item.title[lang]}</Typography>
            )}
            <Typography color="text.secondary" fontSize="0.9rem">
              {item.subtitle[lang]}
            </Typography>
            {item.highlights && (
              <Stack component="ul" spacing={0.5} sx={{ m: 0, mt: 0.75, pl: 2 }}>
                {item.highlights.map((highlight) => (
                  <Typography
                    key={highlight.en}
                    component="li"
                    color="text.secondary"
                    fontSize="0.9rem"
                    lineHeight={1.65}
                  >
                    {highlight[lang]}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const Experience: FC = () => {
  const { lang } = useLanguage();

  return (
    <Box id="experience" component="section">
      <Stack spacing={6}>
        <ExperienceGroup label={ui.experience.work[lang]} items={work} />
        <ExperienceGroup
          label={ui.experience.education[lang]}
          items={education}
        />
      </Stack>
    </Box>
  );
};

export default Experience;
