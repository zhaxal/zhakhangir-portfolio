import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

const MainTitle: FC = () => {
  const w820 = useMediaQuery("(min-width:820px)");
  const w540 = useMediaQuery("(min-width:540px)");
  const h580 = useMediaQuery("(min-height:580px)");

  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent={h580 ? "center" : "flex-start"}
      alignItems={h580 ? "center" : "flex-start"}
      position="absolute"
    >
      <Stack p={h580 ? "0rem" : "2rem"} alignItems="flex-start">
        <Typography
          width="fit-content"
          textAlign="center"
          lineHeight="100%"
          color="#FFFFFF"
          fontSize={w820 ? "72px" : w540 ? "48px" : "32px"}
          fontWeight="500"
        >
          Zhakhangir Anuarbek
        </Typography>
        <Typography
          width="fit-content"
          color="#FFFFFF"
          fontSize={w540 ? "24px" : "16px"}
          fontWeight="100"
        >
          Developer
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MainTitle;
