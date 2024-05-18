import { useState } from "react";

const ChildOne = (props) => {
  return (
    <>
      <p>Child One: {props.theme}</p>
      <ChildTwo theme={props.theme}></ChildTwo>
    </>
  );
};

const ChildTwo = (props) => {
  return (
    <>
      <p>Child Two: {props.theme}</p>
      <ChildThree theme={props.theme}></ChildThree>
    </>
  );
};

const ChildThree = (props) => {
  return <p>Child Three: {props.theme}</p>;
};

export const PropsDrillingExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildOne theme={theme}></ChildOne>
    </>
  );
};
