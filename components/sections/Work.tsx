import { FC, useState } from "react";
import {
  Box,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { useLanguage } from "@/contexts/language-context";
import { Project, projects, ui } from "@/data/content";
import ProjectDialog from "@/components/ProjectDialog";

const INITIAL_COUNT = 5;

const Work: FC = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const openProject = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const canExpand = projects.length > INITIAL_COUNT;
  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <Box id="projects" component="section">
      <Typography
        color="text.secondary"
        fontSize="0.9rem"
        mb={3}
        component="h2"
        fontWeight={500}
      >
        {ui.projects.heading[lang]}
      </Typography>

      <Stack divider={<Divider />} spacing={3}>
        {visible.map((project) => (
          <Stack key={project.title.en} spacing={0.75} pb={0.5}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2}
            >
              {project.link ? (
                <MuiLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {project.title[lang]} ↗
                </MuiLink>
              ) : project.media ? (
                <MuiLink
                  component="button"
                  type="button"
                  onClick={() => openProject(project)}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    textDecoration: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {project.title[lang]} →
                </MuiLink>
              ) : (
                <Typography color="text.primary" fontWeight={500}>
                  {project.title[lang]}
                </Typography>
              )}
              <Typography
                color="text.secondary"
                fontSize="0.85rem"
                whiteSpace="nowrap"
              >
                {project.year}
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              fontSize="0.95rem"
              lineHeight={1.65}
              maxWidth="36rem"
            >
              {project.description[lang]}
            </Typography>
            <Typography color="text.secondary" fontSize="0.8rem">
              {project.technologies.join(" · ")}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {canExpand && (
        <MuiLink
          component="button"
          type="button"
          onClick={() => setExpanded((v) => !v)}
          sx={{
            mt: 3,
            color: "text.secondary",
            fontSize: "0.85rem",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
        >
          {expanded
            ? `${ui.projects.showLess[lang]} ↑`
            : `${ui.projects.showAll[lang]} (${projects.length}) ↓`}
        </MuiLink>
      )}

      <ProjectDialog
        project={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default Work;
