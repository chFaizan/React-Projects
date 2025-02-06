import React, { createContext, useState,use} from "react";
import "./Dark.css";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () =>{
    return setTheme((pre) =>(pre=== 'dark' ? 'light' : 'dark'));
  }
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export function DarkLight() {
    const {theme, handleToggleTheme} =use(ThemeContext);
  return (
    <>
      <h1>Dark Light Mode Website</h1>
      <p>Hello React 19 Version</p>
      <button onClick={handleToggleTheme}>{theme === 'dark' ? "Switch To Dark Mode" : "Switch To Light Mode"}</button>
    </>
  );
}
