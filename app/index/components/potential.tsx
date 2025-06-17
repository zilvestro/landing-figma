import { potentialList } from "@/base/modul";
import { checkIcon, playIcon } from "@/base/SVG";
import styles from "../landing.module.scss";
import Image, { StaticImageData } from "next/image";

interface ListItem {
  id: string;
  text: string;
}
interface PotentialItemProps {
  title: string;
  text: string;
  image: StaticImageData;
  list: ListItem[];
}
const PotentialItem = (props: PotentialItemProps) => {
  return (
    <div className={styles["potentialItem"]}>
      <div className={styles["potentialItem__content"]}>
        <button type="button">
          <span>{playIcon}</span>
          Watch Video
        </button>
        <div className={styles["potentialItem__title"]}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
        <ul>
          {props.list.map((item, index) => {
            return (
              <li key={index} {...item}>
                <span>{checkIcon}</span>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["potentialItem__image"]}>
        <Image src={props.image} alt="potentialImage" />
      </div>
    </div>
  );
};

const Potential = () => {
  return (
    <section className={styles["potential"]}>
      <div className="auto__container">
        <div className={styles["potential__inner"]}>
          <div className={styles["potential__inner-title"]}>
            <h6 className="sup">
              <span></span> Why Affonso
            </h6>
            <h2>
              Unlock the Full Potential of Affiliate Marketing with Affonso
            </h2>
          </div>
          <div className={styles["potential__inner-col"]}>
            {potentialList.map((item, index) => {
              return <PotentialItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
