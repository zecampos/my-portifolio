import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  background: #ddd;
  min-height: 120px;
`;
export const ContentLast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  background: #ddd;
  min-height: 120px;
`;
export const TextName = styled.h1`
  font-size: 20px;
  font-family: "Gilroy-Bold", serif;
  color: #070707;
`;
export const TextMyDescription = styled.span`
  font-size: 18px;
`;

export const TextVertical = styled.p`
  font-size: 16px;

  align-self: flex-end;
  background: #f5f;
  /* margin-right: -25px; */
`;
export const MyImage = styled.img``;
