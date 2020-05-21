import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ContainerMenu } from "./styles";
export default function MenuBurguer({ openModal }) {
  return (
    <ContainerMenu>
      <GiHamburgerMenu onClick={() => openModal()} fontSize={25} />
    </ContainerMenu>
  );
}
