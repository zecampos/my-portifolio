import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const Content = styled.div`
  max-width: 950px;
  width: 100%;
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
  font-family: "Gilroy-Medium", serif;
  margin-top: 15px;
`;
export const ViewSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CustomBtn = styled.div`
  cursor: pointer;
`;
export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 20%;
  height: 210px;
  justify-content: space-around;

  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
