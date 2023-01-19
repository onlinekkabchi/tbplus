import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuTitle,
  SubMenuContainer,
} from "../styled-component/headerStyle";

export default function MenuThird() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goSectionThird = () => {
    navigate("/section-3");
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
      <MenuTitle>menu 3</MenuTitle>
      {open ? (
        <div>
          <SubMenuContainer onClick={goSectionThird}>섹션 3</SubMenuContainer>
          <SubMenuContainer>test 6</SubMenuContainer>
        </div>
      ) : (
        <></>
      )}
    </MenuContainer>
  );
}
