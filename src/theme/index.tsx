import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // add xxl breakpoint
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 568,
      lg: 768,
      xl: 1024,
      xxl: 1300
    }
  }
});

export default theme;
