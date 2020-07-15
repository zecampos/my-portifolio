import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;

  align-items: center;
  padding-top: 70px;
`;

export const Content = styled.div`
  max-width: 950px;
  width: 100%;
  height: 100%;
`;

export const MainDiv = styled.div`
  margin-top: 50px;
`;
export const MainText = styled.h1`
  font-size: 34px;
  font-family: "Gilroy-Bold", serif;
  text-align: center;
  margin-top: 15px;
`;

export const TextDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

export const ViewSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  max-width: 25%;
  height: 210px;
  justify-content: space-around;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const NameSkills = styled.p`
  font-size: 14px;
  color: #828282;
  text-align: center;
`;
