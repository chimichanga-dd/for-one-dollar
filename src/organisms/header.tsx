import { styled, Typography } from "@mui/material";
import HeaderActionIcons from "../atoms/headerActionIcons";
import HeaderLogo from "../atoms/headerLogo";

const HeaderContainer = styled(`div`)(() => ({
  gridArea: "header",
  padding: "16px"
}));

const HeaderActionsContainer = styled(`div`)(({ theme }) => ({
  gridArea: "header",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column-reverse",
    justifyContent: "normal"
  }
}));

const HeaderRoutes = styled(`div`)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block"
  }
}));

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderActionsContainer>
        <HeaderLogo />
        <HeaderActionIcons />
      </HeaderActionsContainer>
      <HeaderRoutes>
        {["All", "Writings", "Drawings"].map((category) => {
          return (
            <Typography
              variant="h5"
              key={category}
            >
              {category}
            </Typography>
          );
        })}
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Header;
