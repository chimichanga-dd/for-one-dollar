import Header from "../../organisms/header";
import { styled } from "@mui/system";

const Content = styled(`div`)(() => ({
  gridArea: "content",
  height: 800,
  backgroundColor: "purple"
}));

const MainPageContainer = styled(`div`)(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
  "header"
  "content"
  `,
  [theme.breakpoints.up("md")]: {
    "grid-template-columns": "minmax(250px, 1fr) 5fr",
    "grid-template-areas": `
            "header content"
          `
  }
}));

function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <Content>SOME CONTENT</Content>
    </MainPageContainer>
  );
}

export default MainPage;
