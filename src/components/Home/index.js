import React from "react";
import TextyAnim from "rc-texty";
import {
  Container,
  Content,
  TextVertical,
  TextName,
  TextMyDescription,
  MyImage,
  ContentLast,
} from "./styles";
import { Row, Column } from "../../components/Grid/Grid";
export default function Home() {
  return (
    <Row>
      <Column xs={12} sm={12} md={4} lg={4}>
        <Content>
          <TextName>
            {/* <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}> */}
            Jose
            {/* </TextyAnim> */}
            <br></br>
            {/* <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}> */}
            Campos
            {/* </TextyAnim> */}
          </TextName>
        </Content>
      </Column>
      <Column xs={12} sm={12} md={4} lg={4}>
        <Content>
          <TextMyDescription>
            {/* <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}> */}
            JavaScript Developer
            {/* </TextyAnim> */}
          </TextMyDescription>
          <br></br>
          <TextMyDescription>
            {/* <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}> */}
            34 years old
            {/* </TextyAnim> */}
          </TextMyDescription>
          <br></br>
          <TextMyDescription>
            {/* <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}> */}
            Ribeirao Preto - Brazil
            {/* </TextyAnim> */}
          </TextMyDescription>
        </Content>
      </Column>
      <Column xs={12} sm={12} md={4} lg={4}>
        <ContentLast>
          <TextVertical>
            {/* <TextyAnim type="top" mode="smooth" onEnd={(type) => {}}> */}
            PT | ENG
            {/* </TextyAnim> */}
          </TextVertical>
        </ContentLast>
      </Column>

      {/* <Column xs={12} sm={12} md={4} lg={4}>
        <Content>
          <MyImage src="/images/me.svg" alt="Jose Campos" />
        </Content>
      </Column> */}
    </Row>
  );
}
