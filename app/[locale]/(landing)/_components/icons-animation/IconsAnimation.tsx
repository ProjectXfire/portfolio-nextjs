"use client";

// Components & styles
import styles from "./IconsAnimation.module.css";
import IconAnimated from "./IconAnimated";

function IconsAnimation(): React.ReactElement {
  return (
    <div className={styles["icons-animation"]}>
      <IconAnimated imgPath="/icons/typescript.svg" imgName="typescript" top={15} left={15} />
      <IconAnimated imgPath="/icons/css.svg" imgName="css" bottom={15} left={15} />
      <IconAnimated imgPath="/icons/html.svg" imgName="html" right={15} top={15} />
      <IconAnimated imgPath="/icons/javascript.svg" imgName="javascript" right={15} bottom={15} />
    </div>
  );
}
export default IconsAnimation;
