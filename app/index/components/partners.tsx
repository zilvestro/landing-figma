import styles from "../landing.module.scss";
import logo1 from "@/assets/images/partners/1.png";
import logo2 from "@/assets/images/partners/2.png";
import logo3 from "@/assets/images/partners/3.png";
import logo4 from "@/assets/images/partners/4.png";
import logo5 from "@/assets/images/partners/5.png";
import classNames from "classnames";
import Image from "next/image";
import { ReactElement } from "react";

export default function Partners(): ReactElement {
  return (
    <section className={styles["partners"]}>
      <div className="auto__container">
        <div className={styles["partners__inner"]}>
          <div className={styles["partnersItem"]}>
            <Image
              src={logo1}
              alt="Partner logo 1"
              width={90}
              height={25}
              quality={100}
            />
          </div>
          <div className={styles["partnersItem"]}>
            <Image
              src={logo2}
              alt="Partner logo 2"
              width={90}
              height={25}
              quality={100}
            />
          </div>
          <div className={classNames(styles["partnersItem"], styles["med"])}>
            <Image
              src={logo3}
              alt="Partner logo 3"
              width={90}
              height={25}
              quality={100}
            />
          </div>
          <div className={classNames(styles["partnersItem"], styles["sm"])}>
            <Image
              src={logo4}
              alt="Partner logo 4"
              width={90}
              height={25}
              quality={100}
            />
          </div>
          <div className={styles["partnersItem"]}>
            <Image
              src={logo5}
              alt="Partner logo 5"
              width={90}
              height={25}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
