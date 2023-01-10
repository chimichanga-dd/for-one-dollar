import { styled, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
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

const ROUTES = [
  { label: "All", path: "/" },
  { label: "Writings", path: "/writings" },
  { label: "Drawings", path: "/drawings" }
];

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderActionsContainer>
        <HeaderLogo />
        <HeaderActionIcons />
      </HeaderActionsContainer>
      <HeaderRoutes>
        {ROUTES.map((route) => {
          return (
            <MuiLink
              component={RouterLink}
              to={route.path}
              variant="h5"
              key={route.label}
              sx={{ display: "block" }}
            >
              {route.label}
            </MuiLink>
          );
        })}
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Header;
