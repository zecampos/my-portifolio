import Head from "next/head";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Hidden,
  Container,
  CardMedia,
  Card,
} from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import { TextMyDescription } from "../../src/components/styles/Home";
import Home from "../../src/components/Home";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

function Index() {
  const classes = useStyles();
  return (
    <>
      <Hidden mdUp>
        <Container>
          <Grid
            justify="center"
            alignItems="center"
            alignContent="center"
            container
          >
            <Grid style={{ marginBottom: 10 }} xs={12} sm={12} md={12} item>
              <TextMyDescription>JavaScript Developer</TextMyDescription>

              <TextMyDescription>
                34 years old, Ribeirão Preto - Brazil
              </TextMyDescription>
            </Grid>
            <Grid xs={12} sm={12} md={12} item>
              {/* <img style={{maxHeight:400}} src="/images/me_mobile.jpeg" /> */}
              <Card square>
                <CardMedia
                  className={classes.media}
                  image="/images/me_mobile.jpeg"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden smDown>
        <Home></Home>
      </Hidden>
    </>
  );
}

export default Index;
