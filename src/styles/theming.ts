import { createTheming } from "@callstack/react-theme-provider";

const theme = {
  primaryColor: "red",
  secondaryColor: "green",
};

const { ThemeProvider: ThemeProviderBase, withTheme } = createTheming(theme);

type ThemeProviderType<Theme> = React.ComponentType<{
  children: React.ReactNode;
  theme?: Theme;
}>;

const ThemeProvider = ThemeProviderBase as ThemeProviderType<typeof theme>;

export { ThemeProvider, withTheme };
