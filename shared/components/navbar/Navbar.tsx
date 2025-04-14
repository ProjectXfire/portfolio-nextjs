"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { Link } from "../../lib";
import { useTranslations } from "next-intl";
import { useSidebar } from "@/shared/states";
// Constants
import { routes } from "@/shared/constants";
// Styles
import styles from "./Navbar.module.css";
// Components
import { Button, Language, ThemeToggle } from "..";
import { Menu } from "lucide-react";

function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const open = useSidebar((s) => s.open);
  const t = useTranslations("navbar");
  const currentPath = pathname.split("/")[2];

  const isOnPathname = useCallback(
    (routeName: string) => {
      if (routeName.toLowerCase() === "home" && currentPath === undefined) return true;
      if (routeName.toLowerCase() === currentPath) return true;
      return false;
    },
    [currentPath]
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        {routes.map((route) => (
          <div className={styles["link-container"]} key={route.name}>
            <p className={`${styles.link}`}>{t(route.name)}</p>
            <div
              className={`${styles["link__bar"]} ${
                isOnPathname(route.name) && styles["link__bar-animated"]
              }`}
            />
            <Link
              className={`${styles.link__selected} ${
                isOnPathname(route.name) && styles["link__selected-animated"]
              }`}
              href={route.path}
            >
              {t(route.name)}
            </Link>
          </div>
        ))}
      </div>
      <Button
        className={styles["sidebar-button"]}
        name="sidebar"
        variant="outline"
        size="icon"
        onClick={open}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Language />
      <ThemeToggle />
    </nav>
  );
}
export default Navbar;
