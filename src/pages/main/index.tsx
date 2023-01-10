import Header from "../../organisms/header";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

const MainPageContainer = styled(`div`)(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
  "header"
  "content"
  `,
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(250px, 1fr) 5fr",
    gridTemplateAreas: `
            "header content"
          `
  }
}));

const ContentContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: "calc(100vh - 72px)",
  [theme.breakpoints.up("md")]: {
    minHeight: "100vh"
  }
}));

function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </MainPageContainer>
  );
}

export default MainPage;
