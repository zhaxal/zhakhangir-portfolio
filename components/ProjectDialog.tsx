import { FC } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useLanguage } from "@/contexts/language-context";
import { Project, ui } from "@/data/content";

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDialog: FC<ProjectDialogProps> = ({ project, open, onClose }) => {
  const { lang } = useLanguage();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          backgroundImage: "none",
        },
      }}
    >
      {project && (
        <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            mb={2}
          >
            <Box>
              <Typography component="h2" fontSize="1.15rem" fontWeight={600}>
                {project.title[lang]}
              </Typography>
              <Typography color="text.secondary" fontSize="0.85rem" mt={0.25}>
                {project.year} · {project.technologies.join(" · ")}
              </Typography>
            </Box>
            <IconButton
              onClick={onClose}
              size="small"
              aria-label={ui.projects.close[lang]}
              sx={{ color: "text.secondary", mt: -0.5, mr: -0.5 }}
            >
              ✕
            </IconButton>
          </Stack>

          <Typography
            color="text.secondary"
            fontSize="0.95rem"
            lineHeight={1.7}
            mb={project.media?.length ? 3 : 0}
          >
            {(project.details ?? project.description)[lang]}
          </Typography>

          {project.media && (
            <Stack spacing={3}>
              {project.media.map((item) => (
                <Box key={item.src}>
                  {item.type === "video" ? (
                    <Box
                      component="video"
                      src={item.src}
                      controls
                      preload="metadata"
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        display: "block",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={item.src}
                      alt={item.caption?.[lang] ?? project.title[lang]}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        display: "block",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                  )}
                  {item.caption && (
                    <Typography
                      color="text.secondary"
                      fontSize="0.8rem"
                      mt={1}
                    >
                      {item.caption[lang]}
                    </Typography>
                  )}
                </Box>
              ))}
            </Stack>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ProjectDialog;
