import { useState } from "react";

import {
  AppContainer,
  HomeContainer,
  Toggle,
  HeaderContainer,
  MenuList,
  MobileMenuList,
} from "./styled-component/headerStyle";
import MenuFirst from "./menu/menu1";
import MenuSecond from "./menu/menu2";
import MenuThird from "./menu/menu3";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [toggleClicked, setToggleClicked] = useState(false);
  const navigate = useNavigate();

  const onAndOffToggle = () => {
    if (toggleClicked) {
      setToggleClicked(false);
      console.log("false");
    } else {
      setToggleClicked(true);
      console.log("true");
    }
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <AppContainer>
      <p>테스트</p>
      <HeaderContainer>
        <HomeContainer onClick={goHome}>
          <p>home</p>
        </HomeContainer>
        {/* <div>
          <Toggle onClick={onAndOffToggle}>토글</Toggle>
          {toggleClicked ? (
            <MobileMenuList>
              bb
              <MenuFirst />
              <MenuSecond />
              <MenuThird />
            </MobileMenuList>
          ) : (
            <></>
          )}
        </div> */}

        <MenuList>
          aa
          <MenuFirst />
          <MenuSecond />
          <MenuThird />
        </MenuList>
      </HeaderContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;
