import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/language-context";
import { ui } from "@/data/content";

const Footer: FC = () => {
  const { lang } = useLanguage();

  return (
    <Stack component="footer" py={6}>
      <Typography color="text.secondary" fontSize="0.8rem">
        © {new Date().getFullYear()} Zhakhangir Anuarbek · {ui.footer.built[lang]}
      </Typography>
    </Stack>
  );
};

export default Footer;
