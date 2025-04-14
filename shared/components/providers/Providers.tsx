"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
// Components & Styles
import { Toaster } from "..";

function Providers({ children, ...props }: ThemeProviderProps): React.ReactElement {
  return (
    <NextThemesProvider {...props}>
      <Toaster />
      {children}
    </NextThemesProvider>
  );
}
export default Providers;
