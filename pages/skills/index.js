import React from "react";
import { Hidden, Grid, Divider } from "@material-ui/core";
import {
  Container,
  Content,
  MainText,
  MainDiv,
  TextDescription,
  ViewSkills,
  BoxSkills,
  NameSkills,
} from "../../src/components/styles/skills";
import TextyAnim from "rc-texty";
import { DiReact } from "react-icons/di";
import { RiVuejsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

function Skills() {
  return (
    <>
      <Hidden mdUp>
        <Grid alignItems="center" justify="center" container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MainText>
              <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
                Skills
              </TextyAnim>
            </MainText>
            <MainDiv>
              <TextDescription>I work in such programs as</TextDescription>
            </MainDiv>
          </Grid>
          <Grid
            item
            style={{ marginBottom: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <DiReact
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              color="#5ADAFD"
              size={100}
            />
            <NameSkills>Reactjs</NameSkills>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 10,
              }}
              src="/images/4stars.png"
            />
            <Divider />
          </Grid>
          <Grid
            item
            style={{ marginBottom: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <DiReact
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              color="#424242"
              size={100}
            />
            <NameSkills>React Native</NameSkills>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 10,
              }}
              src="/images/4stars.png"
            />
            <Divider />
          </Grid>
          <Grid
            item
            style={{ marginBottom: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <RiVuejsLine
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              color="#3FB37F"
              size={100}
            />
            <NameSkills>Vuejs</NameSkills>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 10,
              }}
              src="/images/3stars.png"
            />
            <Divider />
          </Grid>
          <Grid
            item
            style={{ marginBottom: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <FaNode
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 10,
              }}
              color="#7FC72A"
              size={100}
            />
            <NameSkills>Nodejs</NameSkills>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="/images/3stars.png"
            />
            <Divider />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smDown>
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
      </Hidden>
    </>
  );
}

export default Skills;
