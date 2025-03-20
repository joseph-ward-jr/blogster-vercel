export type ThemeColors = {
  primary: string
  secondary: string
}

export const defaultTheme: ThemeColors = {
  primary: "#1A365D", // Dark blue
  secondary: "#FF6F61", // Coral/orange
}

// Example of an alternate theme
export const alternateTheme: ThemeColors = {
  primary: "#2A4365", // Darker blue
  secondary: "#38B2AC", // Teal
}

// Example of how to create a theme switcher function
export function updateThemeColors(theme: ThemeColors) {
  // This would be used with a more advanced theme switching mechanism
  // that updates CSS variables at runtime
  document.documentElement.style.setProperty("--primary", theme.primary)
  document.documentElement.style.setProperty("--secondary", theme.secondary)
}

