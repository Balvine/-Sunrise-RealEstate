import { createTheme } from "@mui/material/styles";
import { blueGrey, green, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey.A700,
    },
    secondary: {
      main: "#ff6666",
    },
  },
});

export default theme;
