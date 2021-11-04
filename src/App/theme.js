import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#4dabf5",
    },
    secondary: {
      main: "#ff9800",
      dark: "#ab003c",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
