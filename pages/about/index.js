import React from "react";
import {
  Container,
  Content,
  MainText,
  TextDescription,
  MainDiv,
} from "./styles";
import TextyAnim from "rc-texty";
export default function About() {
  return (
    <Container>
      <Content>
        <MainText>
          <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
            About me
          </TextyAnim>
        </MainText>
        <MainDiv>
          <TextDescription>
            Hi, I'm Jose – Javascript developer from Ribeirao Preto.
            <br /> I love technology, I like to develop web, mobile and <br />{" "}
            backend applications using javascript frameworks and <br />
            libraries.
          </TextDescription>
          <TextDescription>
            I have studied these technologies through Udemy and <br />{" "}
            Rocketseat.
          </TextDescription>
          <TextDescription>
            I want to help companies and organizations to solve their <br />{" "}
            problems and develop their products through technology.
          </TextDescription>
        </MainDiv>
      </Content>
    </Container>
  );
}
