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
      <p>onlinekkabchi@gmail.com 투브플러스 코딩테스트</p>
      <HeaderContainer>
        <HomeContainer onClick={goHome}>
          <p style={{ fontWeight: "800", color: "white", cursor: "pointer" }}>
            home
          </p>
        </HomeContainer>
        <div>
          <Toggle onClick={onAndOffToggle}>Toggle</Toggle>
          {toggleClicked ? (
            <MobileMenuList>
              <MenuFirst />
              <MenuSecond />
              <MenuThird />
            </MobileMenuList>
          ) : (
            <></>
          )}
        </div>

        <MenuList>
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
