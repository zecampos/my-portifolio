import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02cc8e",
    },
  },
});
export default (props) => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="xl" disableGutters>
      <CssBaseline />
      <></>

      <>{props.content}</>
    </Container>
  </ThemeProvider>
);
