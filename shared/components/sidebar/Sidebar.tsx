"use client";

import { useTranslations } from "next-intl";
import { useSidebar } from "@/shared/states";
import { routes } from "@/shared/constants";
// Components & Styles
import styles from "./Sidebar.module.css";
import { Link } from "@/shared/lib";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "../ui/Sheet";

function Sidebar(): JSX.Element {
  const t = useTranslations("navbar");
  const toggle = useSidebar((s) => s.toggle);
  const isOpen = useSidebar((s) => s.isOpen);
  const close = useSidebar((s) => s.close);

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent>
        <SheetTitle>Gabriel</SheetTitle>
        <SheetDescription>My Portfolio</SheetDescription>
        <div className={styles.sidebar__links}>
          {routes.map((route, i) => (
            <Link className={styles.link} key={i} href={route.path} onClick={close}>
              <div className={styles.link__back} />
              <div className={styles["link__bar-top"]} />
              <div className={styles["link__bar-bottom"]} />
              <div className={styles["link__decoration-top"]} />
              <div className={styles["link__decoration-bottom"]} />
              {t(route.name)}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default Sidebar;
