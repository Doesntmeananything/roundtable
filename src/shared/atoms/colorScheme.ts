import { atom } from "recoil";

type ColorScheme = "light" | "dark";

type DefaultState = {
  key: string;
  default: ColorScheme;
};

const defaultColorScheme: ColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
)
  ? "dark"
  : "light";

const defaultState: DefaultState = {
  key: "colorSchemeState",
  default: defaultColorScheme,
};

export const colorSchemeState = atom(defaultState);
