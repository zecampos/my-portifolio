import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  width: 100%;
`;
export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 10%;
  padding-right: 10%;
`;
export const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 60px;
  border-bottom: 0.5px solid #070707;

  align-self: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  justify-content: space-around;
`;

export const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #828282;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;

  display: flex;
  font-size: 18px;
  height: 50px;
  justify-content: center;
  line-height: 18px;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #828282;
  }
  .active {
    color: #f5f;
  }
`;
