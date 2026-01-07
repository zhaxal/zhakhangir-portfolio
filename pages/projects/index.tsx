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
  Chip,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const projects = [
  {
    title: "Graphics program for Podium Esports",
    image: "/projects/podium.jpg",
    link: "https://youtu.be/D6BNq7bhOCg",
    year: "2020-2021",
    description:
      "A graphics program designed for Podium Esports, enabling real-time score updates, player statistics, and dynamic overlays for live esports broadcasts.",
    technologies: ["Golang"],
  },
  {
    title: "Точка ГТО на ВДНХ",
    image: "/projects/gto.jpg",
    link: "https://gtopoint.moscow.sport",
    year: "2021",
    description:
      "A comprehensive personal dashboard featuring points tracking, task completion history, QR-code rewards system, merchandise catalog (backpacks, hoodies, bottles), and achievement tracking.",
    technologies: ["React.js", "Firebase"],
  },
  {
    title: "Физкультура и спорт на ВДНХ",
    image: "/projects/vdnh.jpg",
    link: "https://vdnh.zhakhangir.site",
    year: "2022-2023",
    description:
      "Event management platform for physical culture and sports activities at VDNH. Features include phone-based registration, event schedules, participant management, and a comprehensive admin panel.",
    technologies: ["Next.js", "MongoDB"],
  },
  {
    title: "Ориентирование в лабиринте",
    image: "/projects/rogaine.png",
    link: "https://rogaine.mosgorsport.ru",
    year: "2022-2025",
    description:
      "Annual orienteering event 'Rogaine: Following the Traces of Culture' platform with phone registration, interactive quiz system, telemetry device synchronization, and admin panel for individual and family competitions.",
    technologies: ["Next.js", "PostgreSQL"],
  },
  {
    title: "Неделя Лыжни России в Москве",
    image: "/projects/ski.jpg",
    link: "https://ski.sport.mos.ru",
    year: "2022-2026",
    description:
      "Official landing page for Moscow's annual 'Ski Track of Russia' event, showcasing event details, registration system, schedules, and participant information.",
    technologies: ["Next.js", "Firebase"],
  },
  {
    title: 'Забег "На старт!"',
    image: "/projects/zabeg.jpg",
    link: "https://running.mosgorsport.ru",
    year: "2023-2025",
    description:
      "Event website for the annual 'On Your Marks!' running competition in Moscow, providing comprehensive event information, registration portal, race schedules, and participant resources.",
    technologies: ["Next.js"],
  },
  {
    title: "Всероссийский фестиваль прыжков с шестом",
    image: "/projects/pryzki.jpg",
    link: "https://pryzki.sport.mos.ru",
    year: "2023-2025",
    description:
      "Official platform for the All-Russian Pole Vault Festival, featuring detailed event information, athlete registration system, competition schedules, and comprehensive resources.",
    technologies: ["Next.js"],
  },
  {
    title: "Лёд надежды нашей",
    image: "/projects/led.png",
    link: "https://led.sport.mos.ru",
    year: "2023-2025",
    description:
      "Event landing page for 'Ice of Our Hope', featuring comprehensive event details, streamlined registration process, schedules, and participant information.",
    technologies: ["Next.js"],
  },
  {
    title: "Москва Интересная",
    image: "/projects/interesnaya.png",
    link: "https://interesnaya.sport.mos.ru",
    year: "2025",
    description:
      "Interactive urban orienteering quest 'Moscow Interesting' featuring engaging quiz mechanics including video challenges, photo tasks, and GPS check-ins for city exploration.",
    technologies: ["Next.js", "MongoDB"],
  },
  {
    title: "Кросс Нации",
    image: "/projects/cross.jpg",
    link: "https://cross.sport.mos.ru",
    year: "2025",
    description:
      "Official website for the 'Nation's Cross' event, providing detailed event information, participant registration, race schedules, and essential resources.",
    technologies: ["Next.js"],
  },
  {
    title: "Фестиваль технических видов спорта",
    image: "/projects/techfest.jpg",
    link: "https://tech-fest.sport.mos.ru",
    year: "2025",
    description:
      "Technical Sports Festival platform featuring event information, participant registration with integrated casting system for selection, plus administrative tools for registration management.",
    technologies: ["Next.js", "PocketBase"],
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
      <Stack px={2} mb={2} alignItems="center">
        <Typography color="text.primary" fontSize="32px" fontWeight={600}>
          Projects
        </Typography>
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
                  {project.title} ({project.year})
                </Typography>
                {/* <Typography variant="body2">{project.year}</Typography> */}
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {project.technologies.map((tech) => {
                    let color:
                      | "default"
                      | "primary"
                      | "secondary"
                      | "error"
                      | "info"
                      | "success"
                      | "warning" = "default";

                    switch (tech.toLowerCase()) {
                      case "react.js":
                      case "react":
                        color = "primary";
                        break;
                      case "next.js":
                      case "next":
                        color = "secondary";
                        break;
                      case "firebase":
                        color = "warning";
                        break;
                      case "mongodb":
                        color = "success";
                        break;
                      case "postgresql":
                        color = "info";
                        break;
                      case "golang":
                      case "go":
                        color = "info";
                        break;
                      default:
                        color = "default";
                    }

                    return (
                      <Chip
                        size="small"
                        key={tech}
                        label={tech}
                        color={color}
                      />
                    );
                  })}
                </Stack>
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
