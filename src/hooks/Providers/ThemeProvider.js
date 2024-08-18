import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "classicBlackAndWhite"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList = "";
    document.body.classList.add(
      theme,
      "bg-[var(--color-primary)]",
      "text-[var(--color-text)]"
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
export { useThemeContext };
