import React, { ReactNode, useState, useEffect } from "react";

type ColorScheme = "light" | "dark";

const defaultScheme: ColorScheme = "light";

interface DefaultState {
  colorScheme: ColorScheme;
  toggleScheme: VoidFunction;
}

const defaultState: DefaultState = {
  colorScheme: defaultScheme,
  toggleScheme: () => {},
};

export const ColorSchemeContext = React.createContext(defaultState);

interface Props {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultScheme);

  const toggleScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setColorScheme(
      window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"
    );
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
