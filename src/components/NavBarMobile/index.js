import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  Slide,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {
  Container,
  Content,
  TextVertical,
  TextName,
  TextMyDescription,
  MyImage,
  ContentLast,
} from "./styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#070707",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    justifyContent: "space-between",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavBarMobile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
          <TextName>Jose Campos</TextName>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
