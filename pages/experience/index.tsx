import {
  Box,
  IconButton,
  Stack,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import Link from "next/link";

function ExperiencePage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#202025",
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
      <Stack p={2} direction="row" justifyContent="center" spacing={2}>
        <Stack>
          <Typography variant="h4" color="white" mb={4} ml={2}>
            Education
          </Typography>

          <Timeline position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <MuiLink
                  underline="none"
                  component={Link}
                  href={"https://astanait.edu.kz/en/main-page/"}
                >
                  Astana IT University (2019-2021) - Software Engineer
                </MuiLink>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <MuiLink
                  underline="none"
                  component={Link}
                  href={"https://www.niigata-u.ac.jp"}
                >
                  Niigata University (2024-2026) - Graduate school of Science
                  and Technology
                </MuiLink>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Stack>

        <Stack>
          <Typography variant="h4" color="white" mb={4} ml={2}>
            Work
          </Typography>

          <Timeline position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <MuiLink
                  underline="none"
                  component={Link}
                  href={"https://www.ektu.kz"}
                >
                  D. Serikbayev EKTU, Kazakhstan (2019-2021) - R&D Engineer
                </MuiLink>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <MuiLink
                  underline="none"
                  component={Link}
                  href={"/experience/mossport"}
                >
                  Moscow Sport, Russia (2021-Present) - Fullstack Engineer
                </MuiLink>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <MuiLink
                  underline="none"
                  component={Link}
                  href={"https://apartx.co"}
                >
                  ApartX, Kazakhstan (2023-2024) - Fullstack engineer
                </MuiLink>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ExperiencePage;
