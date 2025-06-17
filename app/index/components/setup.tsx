import styles from "../landing.module.scss";
import { setupList } from "@/base/modul";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface SetupItemProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  text: ReactNode;
}

const SetupItem = (props: SetupItemProps) => {
  return (
    <div className={styles["setupItem"]}>
      <div className={styles["setupItem__image"]}>
        <Image src={props.image} alt="setup-image" />
      </div>
      <div className={styles["setupItem__content"]}>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <Link href="/" className={styles["setupItem__link"]}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

const Setup = () => {
  return (
    <section className={styles["setup"]}>
      <div className="auto__container">
        <div className={styles["setup__inner"]}>
          <div className={styles["setup__inner-title"]}>
            <h6 className="sup">
              <span></span> How to Setup
            </h6>
            <h2>How to Setup and Start Growing Affiliate Sales</h2>
          </div>
          <div className={styles["setup__inner-row"]}>
            {setupList.map((item, index) => {
              return <SetupItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
