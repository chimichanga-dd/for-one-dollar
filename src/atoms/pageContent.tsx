import { styled } from "@mui/system";

const PageContent = styled(`div`)((props) => ({
  gridArea: "content",
  backgroundColor: props.color,
  flex: "1 0 auto"
}));

export default PageContent;
