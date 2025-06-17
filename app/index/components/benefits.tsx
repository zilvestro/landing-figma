import { arrowRight } from "@/base/SVG";
import { CustomButton } from "@/components/custom-button/custom-button";
import styles from "../landing.module.scss";
import image1 from "@/assets/images/benefits/1.webp";
import image2 from "@/assets/images/benefits/2.webp";
import image3 from "@/assets/images/benefits/3.webp";
import Image, { StaticImageData } from "next/image";

interface BenefitItem {
  id: string;
  image: StaticImageData;
  title: string;
  text: string;
}

export const benefitsList: BenefitItem[] = [
  {
    id: "1",
    image: image1,
    title: "Subscription-Based SaaS",
    text: "Built for SaaS teams ready to scale. Set it up once, let affiliates bring in qualified signups while you build.",
  },
  {
    id: "2",
    image: image2,
    title: "One-Time Purchase Software",
    text: "Grow your software sales through affiliates motivated by smart commission structures.",
  },
  {
    id: "3",
    image: image3,
    title: "Businesses with Multiple Products",
    text: "All your affiliate operations in one place - less admin, better reporting, and effortless scalability.",
  },
];

interface BenefitsItemProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const BenefitsItem = (props: BenefitsItemProps): JSX.Element => {
  return (
    <div className={styles["benefitsItem"]}>
      <div className={styles["benefitsItem__image"]}>
        <Image src={props.image} alt="benefitImage" />
      </div>
      <div className={styles["benefitsItem__content"]}>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className={styles["benefits"]}>
      <div className="auto__container">
        <div className={styles["benefits__inner"]}>
          <div className={styles["benefits__inner-title"]}>
            <h6 className="sup">
              <span></span> Why Affonso
            </h6>
            <h2>Who Benefits the Most?</h2>
          </div>
          <div className={styles["benefits__inner-row"]}>
            {benefitsList.map((item, index) => {
              return <BenefitsItem {...item} key={index} />;
            })}
          </div>
          <div className={styles["benefits__inner-foot"]}>
            <CustomButton
              iconPos="right"
              title="Start Your 14-day free trial"
              styleType="primary"
              icon={arrowRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
