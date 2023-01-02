import airbnbLogoLong from "../assets/photos/airbnbLogoLong.svg";
import { styled } from "@mui/system";

const Logo = styled(`img`)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: "64px"
  }
}));

const HeaderLogo = () => {
  return (
    <Logo
      src={airbnbLogoLong}
      alt="long version of logo"
      height={36}
      width={102}
    />
  );
};

export default HeaderLogo;
