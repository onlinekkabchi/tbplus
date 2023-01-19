import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuTitle,
  SubMenuContainer,
} from "../styled-component/headerStyle";

export default function MenuFirst() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goSectionFirst = () => {
    navigate("/section-1");
  };

  const goSectionSecond = () => {
    navigate("/section-2");
  };

  return (
    <MenuContainer
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <MenuTitle open={open}>메뉴1</MenuTitle>
      {open ? (
        <div>
          <SubMenuContainer onClick={goSectionFirst}>섹션 1</SubMenuContainer>
          <SubMenuContainer onClick={goSectionSecond}>섹션 2</SubMenuContainer>
        </div>
      ) : (
        <></>
      )}
    </MenuContainer>
  );
}
