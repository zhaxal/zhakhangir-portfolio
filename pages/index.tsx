import { NextPage } from "next";

import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import MainTitle from "@/components/ui/MainTitle";
import InfoButton from "@/components/home-page-components/InfoButton";
import ContactButton from "@/components/home-page-components/ContactButton";
import MenuButton from "@/components/ui/MenuButton";
import { useRouter } from "next/router";
import { useState } from "react";

import { useLocalStorage } from "@/hooks/localstorage";

const Home: NextPage = () => {
  const router = useRouter();
  const w540 = useMediaQuery("(min-width:540px)");

  const [hasClosedModal, setHasClosedModal] = useLocalStorage(
    "portfolio-modal-closed",
    false
  );
  const [open, setOpen] = useState(!hasClosedModal);

  const handleClose = () => {
    setOpen(false);
    setHasClosedModal(true);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <MainTitle />

      <Grid
        container
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
        sx={{ height: "100%" }}
      >
        <Grid p={w540 ? "4rem" : "1rem"} item xs={4}>
          <Stack alignItems="flex-end">
            <InfoButton />
            <MenuButton onClick={() => router.push("/projects")}>
              Projects
            </MenuButton>
            <MenuButton onClick={() => router.push("/experience")}>
              Experience
            </MenuButton>
            <ContactButton />
          </Stack>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: w540 ? "80vw" : "90vw",
            maxWidth: "900px",
            maxHeight: "90vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: w540 ? 4 : 2,
            borderRadius: "8px",
            overflow: "auto",
            color: "text.primary",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant={w540 ? "h5" : "h6"}
            component="h2"
            mb={3}
            fontWeight={600}
            color="text.primary"
          >
            Welcome to My Portfolio
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              borderRadius: "4px",
              overflow: "hidden",
              mb: 3,
              boxShadow: 2,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              src="https://www.youtube.com/embed/D6BNq7bhOCg?si=qdi7tgl5yt33zYdx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Box>
          <Typography
            id="modal-modal-description"
            variant="body1"
            color="text.primary"
            sx={{ lineHeight: 1.6 }}
          >
            Check out this video to learn more about my work and projects. Click
            away to close it.
          </Typography>
          <Button
            onClick={() => {
              router.push("/projects");
            }}
            sx={{ mt: 3 }}
          >
            Projects
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
