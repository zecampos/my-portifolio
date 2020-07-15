import React from "react";
import TextyAnim from "rc-texty";
import { Hidden, Container, Grid } from "@material-ui/core";
import {
  Content,
  TextVertical,
  TextName,
  TextMyDescription,
  MyImage,
  ContentLast,
  ContentMiddle,
} from "./styles";
import { Row, Column } from "../../components/Grid/Grid";

export default function Home() {
  return (
    <Grid style={{ paddingLeft: "10%", paddingRight: "10%" }} container>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Content>
          <TextName>
            <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
              Jose
            </TextyAnim>
            <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
              Campos
            </TextyAnim>
          </TextName>
        </Content>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <ContentMiddle>
          <TextMyDescription>
            JavaScript Developer
            <br></br>
            34 years old
            <br></br>
            Ribeirao Preto - Brazil
          </TextMyDescription>
        </ContentMiddle>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <ContentLast>
          <TextVertical>
            {/* <TextyAnim type="top" mode="smooth" onEnd={(type) => {}}> */}
            PT | ENG
            {/* </TextyAnim> */}
          </TextVertical>
        </ContentLast>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MyImage src="/images/me.svg" alt="Jose Campos" />
      </Grid>
    </Grid>
  );
}
