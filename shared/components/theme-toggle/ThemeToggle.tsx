"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Menu from "../menu/Menu";

function ThemeToggle(): React.ReactElement {
  const { setTheme } = useTheme();

  const handleSelect = (value: string) => {
    setTheme(value);
  };

  return (
    <Menu
      menuHeader={
        <>
          <Sun className="dark:hidden block" />
          <Moon className="dark:block hidden" />
        </>
      }
      items={[
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "system", label: "System" },
      ]}
      onSelect={handleSelect}
    />
  );
}
export default ThemeToggle;
