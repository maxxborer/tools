import { createTheming } from "@callstack/react-theme-provider";

type ThemeProviderType<Theme> = React.ComponentType<{
  children: React.ReactNode;
  theme?: Theme;
}>;

const { ThemeProvider: ThemeProviderBase, withTheme } = createTheming({
  primaryColor: "red",
  secondaryColor: "green",
});

const ThemeProvider = ThemeProviderBase as ThemeProviderType<Theme>;

export { ThemeProvider, withTheme };
