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
import Head from "next/head";
import theme from "../src/styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta
            name="description"
            content="Site do Desenvolvedor Jose GUilherme Campos"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:title" content="Jose Guilherme Campos" />
          <meta property="og:image" content="/images/me.svg" />
        </Head>
        <ThemeProvider theme={theme}>
          <Hidden smDown>
            <Navbar></Navbar>
          </Hidden>
          <Hidden mdUp>
            <NavBarMobile />
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
