import React from "react";
import {
  Container,
  Content,
  MainText,
  TextDescription,
  ViewSkills,
  BoxSkills,
  CustomBtn,
} from "../../src/components/styles/contact";
import TextyAnim from "rc-texty";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <Container>
      <Content>
        <MainText>
          <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
            Contacts
          </TextyAnim>
          <TextDescription>
            Want to know more or just chat? <br></br>
            You are welcome!
          </TextDescription>
        </MainText>
        <ViewSkills>
          <BoxSkills>
            <CustomBtn
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/joseguilherme-fullstack-react-react-native-vue-nodejs-adonisjs/"
                )
              }
            >
              <AiOutlineLinkedin size={50} />
            </CustomBtn>
          </BoxSkills>
          <BoxSkills>
            <CustomBtn
              onClick={() =>
                window.open("https://www.instagram.com/ze_recampos/")
              }
            >
              <AiOutlineInstagram size={50} />
            </CustomBtn>
          </BoxSkills>
          <BoxSkills>
            <CustomBtn
              onClick={() => window.open("https://github.com/zecampos")}
            >
              <AiOutlineGithub size={50} />
            </CustomBtn>
          </BoxSkills>
          <BoxSkills>
            <CustomBtn
              onClick={() => window.open("https://wa.me/5516988020195")}
            >
              <FaWhatsapp size={50} />
            </CustomBtn>
          </BoxSkills>
          <BoxSkills>
            <CustomBtn
              onClick={() => window.open("mailto:zecampos2015@yahoo.com.br")}
            >
              <AiOutlineMail size={50} />
            </CustomBtn>
          </BoxSkills>
        </ViewSkills>
      </Content>
    </Container>
  );
}

export default Contact;
