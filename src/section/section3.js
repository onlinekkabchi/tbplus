import { useEffect, useState } from "react";

export default function SectionThird() {
  const [helloWorldBox, setHelloWorldBox] = useState(false);
  const [secondBoxStyle, setSecondBoxStyle] = useState({
    backgroundColor: "#f90",
  });
  const [allClick, setAllClick] = useState(0);
  const [boxClick, setBoxClick] = useState(0);

  const handleHelloWorldBox = () => {
    if (helloWorldBox) {
      setHelloWorldBox(false);
    } else {
      setHelloWorldBox(true);
    }
  };

  const secondBoxStyleMouseEnter = () => {
    setSecondBoxStyle({
      boxSizing: "border-box",
      backgroundColor: "#2ca",
      borderWidth: "20px",
      borderColor: "#00c",
    });
  };

  const secondBoxStyleMouseLeave = () => {
    setSecondBoxStyle({
      backgroundColor: "#0c0",
      borderColor: "#c00",
      borderWidth: "20px",
      boxSizing: "border-box",
    });
  };

  return (
    <div className="section-3">
      {helloWorldBox ? (
        <div
          onMouseLeave={handleHelloWorldBox}
          className="section-3--box  section-3--1--hello-world"
        >
          <p className="hello-world--text"> Hello World</p>
        </div>
      ) : (
        <div
          className="section-3--box section-3--1"
          onMouseEnter={handleHelloWorldBox}
        >
          1번
        </div>
      )}

      <div
        className="section-3--box section-3--2"
        onMouseEnter={secondBoxStyleMouseEnter}
        onMouseLeave={secondBoxStyleMouseLeave}
        style={secondBoxStyle}
      >
        2번
      </div>
      <div
        onClick={() => {
          setBoxClick(boxClick + 1);
        }}
        className="section-3--box section-3--3"
      >
        3번
        <div>3-1 : {allClick}</div>
        <div>3-2 : {boxClick}</div>
      </div>
    </div>
  );
}
