"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type Item = {
  value: string;
  label: React.ReactNode | string;
};

interface Props {
  items: Item[];
  menuHeader: React.ReactNode;
  onSelect: (value: string) => void;
}

function Menu({ items, menuHeader, onSelect }: Props): React.ReactElement {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuItemsPos, setMenuItemsPos] = useState({ left: "auto", right: "auto" });

  const handleMenu = (e: MouseEvent): void => {
    if (menuRef.current && menuRef.current.contains(e.target as Node)) {
      const pos = handleItemsPos();
      setMenuItemsPos(pos);
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  const handleSelectOption = (value: string): void => {
    onSelect(value);
    setOpenMenu(false);
  };

  const handleItemsPos = (): { left: string; right: string } => {
    const menu = menuRef.current;
    if (!menu) return { left: "auto", right: "auto" };
    const menuRect = menu.getBoundingClientRect();
    const halfScreen = window.innerWidth / 2;
    const chooseLeftOrRight = menuRect.right > halfScreen;
    if (chooseLeftOrRight) return { left: "auto", right: "0" };
    else return { left: "0", right: "auto" };
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMenu);
    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.menu}>
      <button className={styles.menu__trigger}>{menuHeader}</button>
      <ul
        style={{ left: menuItemsPos.left, right: menuItemsPos.right }}
        className={`${styles.menu__items} ${openMenu && styles["menu__items--show"]}`}
      >
        {items.map((item, i) => (
          <li key={i} onClick={() => handleSelectOption(item.value)}>
            {typeof item.label === "string" ? (
              <div className={styles.item}>{item.label}</div>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
