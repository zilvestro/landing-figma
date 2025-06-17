import styles from "../landing.module.scss";
import { arrowRight, twitterBase } from "@/base/SVG";
import { CustomButton } from "@/components/custom-button/custom-button";
import shape from "@/assets/images/story/shape.webp";
import shape2 from "@/assets/images/story/shape-2.webp";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { reviewsList } from "@/base/modul";
interface ReviewItem {
  id: string;
  avatar: StaticImageData;
  name: string;
  user: string;
  text: string | ReactNode;
}

const ReviewsItem = (props: ReviewItem) => {
  return (
    <div className={styles["reviewsItem"]}>
      <div className={styles["reviewsItem__profile"]}>
        <div className={styles["reviewsItem__avatar"]}>
          <Image src={props.avatar} alt="avatar" />
        </div>
        <div className={styles["reviewsItem__name"]}>
          <h6>{props.name}</h6>
          <p>{props.user}</p>
        </div>
        <button type="button" className={styles["reviewsItem__link"]}>
          {twitterBase}
        </button>
      </div>
      <div className={styles["reviewsItem__text"]}>
        {typeof props.text === "string" ? <p>{props.text}</p> : props.text}
      </div>
    </div>
  );
};

const Reviews = () => {
  function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const results: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  }

  const columns = chunkArray<ReviewItem>(reviewsList, 2);

  return (
    <section className={styles["reviews"]}>
      <div className={styles["story__bg"]}>
        <span className={styles["left"]}>
          <Image src={shape} alt="shape" />
        </span>
        <span className={styles["right"]}>
          <Image src={shape2} alt="shape" />
        </span>
      </div>
      <div className="auto__container">
        <div className={styles["reviews__inner"]}>
          <div className={styles["reviews__inner-title"]}>
            <h6 className="sup">
              <span></span> Read what people are saying
            </h6>
            <h2>The Choice of SaaS Founders, The Trust of Brands</h2>
          </div>
          <div className={styles["reviews__inner-row"]}>
            {columns.map((columnItems, columnIndex) => (
              <div className={styles["reviews__inner-col"]} key={columnIndex}>
                {columnItems.map((item, index) => (
                  <ReviewsItem {...item} key={`${columnIndex}-${index}`} />
                ))}
              </div>
            ))}
          </div>
          <div className={styles["reviews__inner-foot"]}>
            <CustomButton
              iconPos="right"
              title="Hear From Others"
              styleType="primary"
              icon={arrowRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
