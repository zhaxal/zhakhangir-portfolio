import { useDisclosure } from "@/hooks/disclosure";
import {
  Dialog,
  DialogContent,
  Container,
  IconButton,
  Stack,
  Typography,
  Chip,
  Divider,
  Grid,
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
    name: "Физкультура и спорт на ВДНХ",
    description: "2021 / Event",
    link: "https://fizkult.moscow.sport/",
  },

  {
    name: "Спортивные сезоны на ВДНХ",
    description: "2021 / Event",
    link: "https://seasons.moscow.sport/",
  },
  {
    name: "День Физкультурника 2022",
    description: "2022 / Event",
    link: "https://деньфизкультурника2022.рф/",
  },
  {
    name: "Московский рогейн",
    description: "2022 / Event",
    link: "https://orient.moscow.sport/",
  },
  {
    name: "Лёд надежды нашей",
    description: "2023 / Event",
    link: "https://led.moscow.sport/",
  },
  {
    name: "Лыжня россии 2023",
    description: "2023 / Event",
    link: "https://ski.moscow.sport/",
  },
  {
    name: "Всероссийский фестиваль прыжков с шестом",
    description: "2023 / Event",
    link: "https://pryzki.moscow.sport/",
  },
  {
    name: "Фестиваль школьного спорта",
    description: "2023 / Event",
    link: "https://school.moscow.sport/",
  },
  {
    name: `Забег "На старт!"`,
    description: "2023 / Event",
    link: "https://running.mosgorsport.ru/",
  },
];

const ProjectsButton: FC = () => {
  const { isOpen, close, open } = useDisclosure(false);

  const handleRedirect = (path: string) => () => {
    // open link in new page

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
