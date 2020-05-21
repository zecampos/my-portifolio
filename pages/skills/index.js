import React from "react";
import {
  Container,
  Content,
  MainText,
  MainDiv,
  TextDescription,
  ViewSkills,
  BoxSkills,
  NameSkills,
} from "./styles";
import TextyAnim from "rc-texty";
import { DiReact } from "react-icons/di";
import { RiVuejsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

export default function Skills() {
  return (
    <Container>
      <Content>
        <MainText>
          <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
            Skills
          </TextyAnim>
        </MainText>
        <MainDiv>
          <TextDescription>I work in such programs as</TextDescription>
        </MainDiv>
        <ViewSkills>
          <BoxSkills>
            <DiReact color="#5ADAFD" size={130} />
            <NameSkills>Reactjs</NameSkills>
            <img src="/images/4stars.png" />
          </BoxSkills>
          <BoxSkills>
            <DiReact color="#424242" size={130} />
            <NameSkills>React Native</NameSkills>
            <img src="/images/4stars.png" />
          </BoxSkills>
          <BoxSkills>
            <RiVuejsLine color="#3FB37F" size={130} />
            <NameSkills>Vuejs</NameSkills>
            <img src="/images/3stars.png" />
          </BoxSkills>
          <BoxSkills>
            <FaNode color="#7FC72A" size={130} />
            <NameSkills>Nodejs</NameSkills>
            <img src="/images/3stars.png" />
          </BoxSkills>
        </ViewSkills>
      </Content>
    </Container>
  );
}
