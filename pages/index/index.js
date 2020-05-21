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
} from "@material-ui/core";
import Navbar from "../../src/components/Navbar";

import Home from "../../src/components/Home";
export default function Index() {
  return (
    <>
      <Hidden mdUp>
        <p>Mobile</p>
      </Hidden>
      <Hidden smDown>
        <p>Desktop</p>
      </Hidden>
    </>
  );
}
