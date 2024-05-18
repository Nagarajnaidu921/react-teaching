import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(["light"]);

const ChildOne = () => {
  // const theme = useContext(ThemeContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <button onClick={toggleTheme}>Child Component toggle</button>
      <p>Child One: {theme}</p>
      <ChildTwo></ChildTwo>
    </>
  );
};

const ChildTwo = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <p>Child Two: {theme}</p>
      <ChildThree></ChildThree>
    </>
  );
};

const ChildThree = () => {
  const [theme] = useContext(ThemeContext);
  return <p>Child Three: {theme}</p>;
};

export const ContextExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ChildOne></ChildOne>
        <ChildTwo></ChildTwo>
      </ThemeContext.Provider>
      <hr />
    </>
  );
};
