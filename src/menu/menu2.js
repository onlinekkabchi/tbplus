import { useState } from "react";
import {
  MenuContainer,
  MenuTitle,
  SubMenuContainer,
} from "../styled-component/headerStyle";

export default function MenuSecond() {
  const [open, setOpen] = useState(false);
  return (
    <MenuContainer
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <MenuTitle>메뉴 2</MenuTitle>
      {open ? (
        <div>
          <SubMenuContainer>test 1</SubMenuContainer>
          <SubMenuContainer>test 2</SubMenuContainer>
          <SubMenuContainer>test 3</SubMenuContainer>
          <SubMenuContainer>test 4</SubMenuContainer>
          <SubMenuContainer>test 5</SubMenuContainer>
        </div>
      ) : (
        <></>
      )}
    </MenuContainer>
  );
}
