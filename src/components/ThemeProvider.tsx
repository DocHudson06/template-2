'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme="dark" // Set dark mode as the default theme for all new visitors
      enableSystem={true} // Allow system preference to be used after initial load
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 