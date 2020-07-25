import { atom } from "recoil";

type ColorScheme = "light" | "dark";

const defaultColorScheme: ColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
)
  ? "dark"
  : "light";

type DefaultState = {
  key: string;
  default: ColorScheme;
};

const defaultState: DefaultState = {
  key: "colorSchemeState",
  default: defaultColorScheme,
};

export const colorSchemeState = atom(defaultState);
