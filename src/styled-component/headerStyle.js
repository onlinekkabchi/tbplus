import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  heigth: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: start;

  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const Toggle = styled.div`
  background-color: #ebebeb;
  height: 30px;
  width: 60px;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuList = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
`;

export const MobileMenuList = styled.div`
  @media (max-width: 1024px) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  background-color: transparent;
  width: auto;
  height: auto;
  margin: 1px;:
  }
`;

export const MenuTitle = styled.div`
  background-color: #000000;
  width: 60px;
  height: 20px;
  color: #ffffff;
  margin: 1px;
  cursor: pointer;
  &:hover {
    color: #ffff00;
  }
`;

export const SubMenuContainer = styled.div`
  background-color: #000000;
  width: 60px;
  height: 20px;
  color: #ffffff;
  margin: 1px;
  cursor: pointer;
  &:hover {
    color: #ffff00;
  }
`;
