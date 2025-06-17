import styles from "../landing.module.scss";
import logo from "@/assets/images/affonso.svg";
import shape from "@/assets/images/privilege/shape.webp";
import { privilegeList } from "@/base/modul";
import Image from "next/image";
import { ReactNode } from "react";

interface PrivilegeListItem {
  id: string;
  text: string;
}

interface PrivilegeItemProps {
  title?: string;
  list: PrivilegeListItem[];
  icon?: ReactNode;
}

const PrivilegeItem = (props: PrivilegeItemProps) => {
  return (
    <div className={styles["privilegeItem"]}>
      <div className={styles["privilegeItem__bg"]}>
        <span>
          <Image src={shape} alt="shape" />
        </span>
        <span>
          <Image src={shape} alt="shape" />
        </span>
      </div>
      <div className={styles["privilegeItem__title"]}>
        {props.title ? (
          <h5>{props.title}</h5>
        ) : (
          <div className={styles["privilegeItem__logo"]}>
            <Image src={logo} alt="logo" />
          </div>
        )}
      </div>
      <div className={styles["privilegeItem__content"]}>
        <ul>
          {props.list.map((item, index) => {
            return (
              <li key={index} {...item}>
                <span>{props.icon}</span>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Privilege = () => {
  return (
    <section className={styles["privilege"]}>
      <div className="auto__container">
        <div className={styles["privilege__inner"]}>
          <div className={styles["privilege__inner-title"]}>
            <h6 className="sup">
              <span></span> Read what people are saying
            </h6>
            <h2>Why Choose Affonso Over Others?</h2>
            <p className="big">
              Yes, there are other affiliate software providers, but our goal is
              to be the best, and we&apos;re almost there!
            </p>
          </div>
          <div className={styles["privilege__inner-row"]}>
            {privilegeList.map((item, index) => {
              return <PrivilegeItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privilege;
