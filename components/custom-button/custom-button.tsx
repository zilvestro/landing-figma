import classNames from "classnames";
import styles from "./custom-button.module.scss";
import Image from "next/image";
import gridImage from "@/assets/images/grid.png";
import Link from "next/link";

type ButtonProps = {
  styleType: "primary" | "secondary" | "delete" | "uniq";
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  iconPos?: "left" | "right";
  icon?: React.ReactNode;
  grid?: boolean;
  href?: string;
};

const CustomButton = ({
  styleType,
  title,
  type,
  onClick,
  disabled,
  iconPos,
  icon,
  grid,
  href,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles["button"], {
        [styles.primary]: styleType === "primary",
        [styles.secondary]: styleType === "secondary",
        [styles.delete]: styleType === "delete",
        [styles.uniq]: styleType === "uniq",
        [styles.left]: iconPos === "left",
        [styles.disabled]: disabled,
      })}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {href && <Link className={styles["button__link"]} href={href}></Link>}
      {grid && (
        <div className={styles["button__grid"]}>
          <Image src={gridImage} alt={"grid"} />
        </div>
      )}
      {iconPos === "left" && <span>{icon}</span>} {title}
      {iconPos === "right" && <span>{icon}</span>}
    </button>
  );
};

export { CustomButton };
