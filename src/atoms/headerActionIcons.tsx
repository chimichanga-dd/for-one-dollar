import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, styled } from "@mui/material";

const ActionsIcon = styled(`div`)(({ theme }) => ({
  gridArea: "header",
  padding: "4px",
  [theme.breakpoints.up("md")]: {
    paddingBottom: "32px",
    "&.menu": {
      display: "none"
    }
  }
}));

const IconsContainer = styled(`div`)(() => ({
  display: "flex",
  marginTop: "-8px",
  width: "calc(100% + 8px)",
  marginLeft: "-8px",
  justifyContent: "flex-end",
  "& .actionIcon": {
    paddingTop: "8px",
    paddingLeft: "8px"
  }
}));

const HeaderActionIcons = () => {
  return (
    <IconsContainer>
      <ActionsIcon>
        <IconButton>
          <ShoppingBasketIcon color="primary" />
        </IconButton>
      </ActionsIcon>
      <ActionsIcon className="menu">
        <IconButton>
          <MenuIcon color="primary" />
        </IconButton>
      </ActionsIcon>
    </IconsContainer>
  );
};

export default HeaderActionIcons;
