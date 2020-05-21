import React from "react";
import Head from "next/head";
import { Nav, Ul, Li, Container, NavContainer } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { Hide } from "../../components/Grid/Grid";
import MenuBurguer from "../MenuBurguer";
import Modal from "react-modal";

export default function Navbar({ children }) {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Head>
        <title>Jose Campos - JavaScript Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hide md lg>
        <MenuBurguer openModal={openModal} />
      </Hide>
      <Hide xs sm>
        <NavContainer>
          <Nav>
            <Ul>
              <Li className={router.pathname === "/" ? "active" : ""}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Li>
              <Li>
                <Link href="/about">
                  <a>About me</a>
                </Link>
              </Li>
              <Li>
                <Link href="/skills">
                  <a>Skills </a>
                </Link>
              </Li>
              <Li>
                <Link href="/portifolio">
                  <a>Portifolio </a>
                </Link>
              </Li>
              <Li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </Li>
            </Ul>
          </Nav>
        </NavContainer>
      </Hide>
    </>
  );
}
