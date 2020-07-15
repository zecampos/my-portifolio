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
import Link from "next/link";
import { useRouter } from "next/router";
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
  toolbarMobile: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  listItem: {
    fontSize: 30,
    fontWeight: "400",
    fontFamily: "Gilroy-Bold",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavBarMobile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleNavigate(route) {
    handleClose();
    router.push(route);
  }

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
        <AppBar
          style={{ backgroundColor: "transparent" }}
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbarMobile}>
            <IconButton
              edge="end"
              style={{ color: "#070707" }}
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: 30 }}>
          <List>
            <ListItem onClick={() => handleNavigate("/")} button>
              <ListItemText
                style={{ fontSize: 30, fontWeight: "600" }}
                disableTypography
                primary="Home"
              />
            </ListItem>
            <ListItem onClick={() => handleNavigate("/about")} button>
              <ListItemText
                className={classes.listItem}
                disableTypography
                primary="About me"
              />
            </ListItem>
            <ListItem onClick={() => handleNavigate("/skills")} button>
              <ListItemText
                className={classes.listItem}
                disableTypography
                primary="Skills"
              />
            </ListItem>
            <ListItem onClick={() => handleNavigate("/portifolio")} button>
              <ListItemText
                className={classes.listItem}
                disableTypography
                primary="Portfolio"
              />
            </ListItem>
            <ListItem onClick={() => handleNavigate("/contact")} button>
              <ListItemText
                className={classes.listItem}
                disableTypography
                primary="Contacts"
              />
            </ListItem>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
