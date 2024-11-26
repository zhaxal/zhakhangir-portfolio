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
} from "@mui/material";
import { FC } from "react";
import MenuButton from "../ui/MenuButton";
import CloseIcon from "@mui/icons-material/Close";

const InfoButton: FC = () => {
  const { isOpen, close, open } = useDisclosure(false);

  const handleRedirect = (path: string) => () => {
    // open link in new page

    window.open(path, "_blank");
  };

  return (
    <>
      <MenuButton onClick={open}>Info</MenuButton>

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
              <>
                <Typography lineHeight="120%" fontSize="36px">
                  Skills
                </Typography>

                <Grid container spacing={1}>
                  <Grid item>
                    <Chip color="react" label="ReactJS" />
                  </Grid>
                  <Grid item>
                    <Chip color="nextjs" label="NextJS" />
                  </Grid>
                  <Grid item>
                    <Chip color="docker" label="Docker" />
                  </Grid>
                  <Grid item>
                    <Chip color="firebase" label="Firebase" />
                  </Grid>
                  <Grid item>
                    <Chip color="mongodb" label="MongoDB" />
                  </Grid>
                  <Grid item>
                    <Chip color="nginx" label="Nginx" />
                  </Grid>
                  <Grid item>
                    <Chip color="typescript" label="TypeScript" />
                  </Grid>

                  <Grid item>
                    <Chip color="golang" label="Golang" />
                  </Grid>

                  <Grid item>
                    <Chip color="python" label="Python" />
                  </Grid>

                  <Grid item>
                    <Chip color="meteorjs" label="MeteorJS" />
                  </Grid>
                </Grid>
              </>
              <Divider sx={{ my: 2 }} />
              <>
                <Typography lineHeight="120%" fontSize="36px">
                  Education
                </Typography>
                <Typography fontWeight="100" fontSize="24px">
                  Astana IT University (2019-2021) - Software Engineer
                </Typography>
                <Typography fontWeight="100" fontSize="24px">
                  Niigata University (2024-2026) - Graduate school of Science and Technology
                </Typography>

              </>
              <Divider sx={{ my: 2 }} />
              <>
                <Typography lineHeight="120%" fontSize="36px">
                  Links
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    onClick={handleRedirect("https://github.com/zhaxal")}
                    clickable
                    color="github"
                    label="Github"
                  />

                  <Chip
                    onClick={handleRedirect(
                      "https://www.instagram.com/zhaxal/"
                    )}
                    clickable
                    color="instagram"
                    label="Instagram"
                  />
                  <Chip
                    onClick={handleRedirect(
                      "https://www.linkedin.com/in/zhakhangir/"
                    )}
                    clickable
                    color="linkedin"
                    label="LinkedIn"
                  />
                </Stack>
              </>
            </Stack>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoButton;
