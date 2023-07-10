import { Button, ButtonProps, useMediaQuery } from "@mui/material";
import { FC } from "react";

const MenuButton: FC<ButtonProps> = ({ children, ...props }) => {
  const w540 = useMediaQuery("(min-width:540px)");


  return (
    <Button
      {...props}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      disableElevation
      sx={{
        width: "fit-content",
        height: "fit-content",
        color: "#00AEEF",
        fontSize: w540 ? "48px" : "36px",
        fontWeight: "100",
        textTransform: "none",
        lineHeight: "120%",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
