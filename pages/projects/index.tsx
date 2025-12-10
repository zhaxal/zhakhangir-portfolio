import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const projects = [
  {
    title: "Точка ГТО на ВДНХ",
    image: "/projects/gto.jpg",
    link: "https://gtopoint.moscow.sport",
    description: "2021",
  },
  {
    title: "Физкультура и спорт на ВДНХ",
    image: "/projects/vdnh.jpg",
    link: "https://vdnh.zhakhangir.site",
    description: "2022-2023",
  },
  {
    title: "Ориентирование в лабиринте",
    image: "/projects/rogaine.png",
    link: "https://rogaine.mosgorsport.ru",
    description: "2022-2025",
  },
  {
    title: "Неделя Лыжни России в Москве",
    image: "/projects/ski.jpg",
    link: "https://ski.sport.mos.ru",
    description: "2022-2026",
  },
  {
    title: 'Забег "На старт!"',
    image: "/projects/zabeg.jpg",
    link: "https://running.mosgorsport.ru",
    description: "2023-2025",
  },
  {
    title: "Всероссийский фестиваль прыжков с шестом",
    image: "/projects/pryzki.jpg",
    link: "https://pryzki.sport.mos.ru",
    description: "2023-2025",
  },
  {
    title: "Лёд надежды нашей",
    image: "/projects/led.png",
    link: "https://led.sport.mos.ru",
    description: "2023-2025",
  },
  {
    title: "Москва Интересная",
    image: "/projects/interesnaya.webp",
    link: "https://interesnaya.sport.mos.ru",
    description: "2025",
  },
  {
    title: "Кросс Нации",
    image: "/projects/cross.jpg",
    link: "https://cross.sport.mos.ru",
    description: "2025",
  },
  {
    title: "Фестиваль технических видов спорта",
    image: "/projects/techfest.jpg",
    link: "https://tech-fest.sport.mos.ru",
    description: "2025",
  },
];

function ProjectsPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Stack p={2} justifyContent="flex-start" alignItems="flex-start">
        <IconButton
          onClick={() => router.back()}
          color="primary"
          aria-label="go back"
        >
          <ArrowBackIcon />
        </IconButton>
      </Stack>
      <Grid container spacing={2} p={2} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              variant="outlined"
            >
              <CardMedia
                sx={{ height: 160 }}
                image={project.image}
                title={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    router.push(project.link);
                  }}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsPage;
