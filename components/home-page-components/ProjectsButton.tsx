import { useDisclosure } from "@/hooks/disclosure";
import {
  Dialog,
  DialogContent,
  Container,
  IconButton,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import MenuButton from "../ui/MenuButton";
import CloseIcon from "@mui/icons-material/Close";

const projects = [
  {
    name: "Moscow Sport Projects",
    description: "2021-2023 / Work projects",
    link: "https://storage.zhaxal.site/filebrowser/share/wWS9Xr9r",
  },
  {
    name: "car-kit",
    description: "2021 / Diploma project",
    link: "https://linkstack.zhaxal.site",
  },
  {
    name: "toverlay",
    description: "2021 / Personal project",
    link: "https://storage.zhaxal.site/filebrowser/api/public/dl/NVchWoFB?inline=true",
  },
  {
    name: "RiceQualiLink",
    description: "2024 / University project",
  },
  {
    name: "anime-site",
    description: "2024 / Personal project",
    link: "https://anime.zhaxal.site",
  },
];

const ProjectsButton: FC = () => {
  const { isOpen, close, open } = useDisclosure(false);

  const handleRedirect = (path?: string) => () => {
    if (!path) return;

    window.open(path, "_blank");
  };

  return (
    <>
      <MenuButton onClick={open}>Projects</MenuButton>

      <Dialog fullScreen open={isOpen} onClose={close}>
        <DialogContent>
          <Container maxWidth="lg" sx={{ height: "100%" }}>
            <IconButton
              aria-label="close"
              onClick={close}
              color="primary"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Stack height="100%" justifyContent="center" alignContent="center">
              <List>
                {projects.map((project, key) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton onClick={handleRedirect(project.link)}>
                      <ListItemText
                        sx={{ fontFamily: "Open Sans", fontWeight: "300" }}
                        primary={project.name}
                        secondary={project.description}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsButton;
