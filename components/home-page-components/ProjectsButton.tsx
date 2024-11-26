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
    name: "Физкультура и спорт на ВДНХ",
    description: "2021 / Event",
    link: "https://www.figma.com/design/1D4e4PA2QAtQ5mIZKOHfGR/Fizkult.moscow.sport?node-id=0-1&t=vbc9r6Eun4QyWk7e-1",
  },

  {
    name: "Спортивные сезоны на ВДНХ",
    description: "2021 / Event",
    link: "https://www.figma.com/design/PHTriUpbtmtwS6JU5BBoeF/%D0%A1%D0%9F%D0%9E%D0%A0%D0%A2%D0%98%D0%92%D0%9D%D0%AB%D0%95-%D0%A1%D0%95%D0%97%D0%9E%D0%9D%D0%AB-%D0%9D%D0%90-%D0%92%D0%94%D0%9D%D0%A5?node-id=0-1&t=LSedMNmovTThwW7C-1",
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
    name: "День Физкультурника 2023",
    description: "2023 / Event",
    link: "https://www.figma.com/proto/309iXqqaFFyxSYgFvn8lTA/DF2022_desktop?page-id=0%3A1&node-id=1101-334&t=MQT45skEzEVRjZy8-1",
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
  {
    name: "Московский рогейн",
    description: "2024 / Event",
    link: "https://www.figma.com/proto/7HYOZgn7R90voIDUgCFisC/Orient?page-id=0%3A1&node-id=1545-699&t=duML0YTu2NsBK7KC-1",
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
                    <ListItemButton
                      disabled={!project.link}
                      onClick={handleRedirect(project.link)}
                    >
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
