import { arrowRight } from "@/base/SVG";
import styles from "../landing.module.scss";
import { CustomButton } from "@/components/custom-button/custom-button";
import { featuresList } from "@/base/modul";
import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  text: string;
}

const FeaturesItem = (props: FeatureItem) => {
  return (
    <div className={styles["featuresItem"]}>
      <div className={styles["featuresItem__icon"]}>{props.icon}</div>
      <div className={styles["featuresItem__content"]}>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default function Features() {
  function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const results: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  }

  const columns = chunkArray<FeatureItem>(featuresList, 4);

  return (
    <section className={styles["features"]}>
      <div className="auto__container">
        <div className={styles["features__inner"]}>
          <div className={styles["features__inner-title"]}>
            <h6 className="sup">
              <span></span> Why Affonso
            </h6>
            <h2>Everything You Need to Run Your Affiliate Program</h2>
          </div>
          <div className={styles["features__inner-row"]}>
            {columns.map((columnItems, columnIndex) => (
              <div className={styles["features__inner-col"]} key={columnIndex}>
                {columnItems.map((item, index) => (
                  <FeaturesItem {...item} key={`${columnIndex}-${index}`} />
                ))}
              </div>
            ))}
          </div>
          <div className={styles["features__inner-foot"]}>
            <CustomButton
              iconPos="right"
              title="Explore More Features"
              styleType="primary"
              icon={arrowRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
