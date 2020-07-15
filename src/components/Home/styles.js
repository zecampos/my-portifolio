import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  min-height: 150px;
  justify-content: center;
  align-items: center;
`;
export const TextName = styled.h1`
  font-size: 48px;
  font-family: "Gilroy-Bold", serif;
  font-weight: normal;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

export const ContentMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  min-height: 150px;
  justify-content: center;
  align-items: center;
`;
export const TextMyDescription = styled.p`
  font-size: 18px;
`;
export const ContentLast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  min-height: 150px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextVertical = styled.p`
  font-size: 16px;
  /* align-self: flex-end; */

  margin-right: -40px;
  transform-origin: 0 0;
  transform: rotate(270deg);
`;
export const MyImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  object-fit: cover;
`;
