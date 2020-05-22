import App from "next/app";
import React from "react";
import GlobalStyle from "../src/styles/global";
import { PageTransition } from "next-page-transitions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../src/components/Navbar";
import NavBarMobile from "../src/components/NavBarMobile";
import { Hidden, Container } from "@material-ui/core";

import theme from "../src/styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Hidden smDown>
          <Container>
            <Navbar></Navbar>
               </Container>
          </Hidden>
          <Hidden mdUp>
          <Container>
            <NavBarMobile />
            </Container>
          </Hidden>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
          <GlobalStyle />
          <CssBaseline />
        </ThemeProvider>
      </>
    );
  }
}
