import { arrowRight, checkCircle } from "@/base/SVG";
import { CustomButton } from "@/components/custom-button/custom-button";
import styles from "../landing.module.scss";
import logo from "@/assets/images/logo.svg";
import ellipse from "@/assets/images/about/ellipse.webp";
import Image from "next/image";
const About = () => {
  return (
    <section className={styles["about"]}>
      <div className="auto__container">
        <div className={styles["about__inner"]}>
          <div className={styles["aboutContent"]}>
            <h6 className="sup">
              <span></span> Why Affonso
            </h6>
            <h2 className="sm">
              Powerful Affiliate Marketing Without the Price Tag
            </h2>
            <p className="big">
              Other solutions are pricey and complicated. Affonso is affordable,
              easy to use, and customizable when needed.
            </p>
            <CustomButton
              iconPos="right"
              title="Launch Your Programme"
              styleType="primary"
              icon={arrowRight}
            />
          </div>
          <div className={styles["aboutInfo"]}>
            <div className={styles["aboutInfo__bg"]}>
              <span className={styles["left"]}>
                <Image src={ellipse} alt="ellipse" />
              </span>
              <span className={styles["right"]}>
                <Image src={ellipse} alt="ellipse" />
              </span>
            </div>
            <div className={styles["aboutInfo__logo"]}>
              <Image src={logo} alt="logo" />
            </div>
            <div className={styles["aboutInfo__col"]}>
              <h5>Replaces multiple tools with one powerful platform:</h5>
              <ul>
                <li>
                  <span>{checkCircle}</span>
                  <p>Outcome-Driven Agents</p>
                </li>
                <li>
                  <span>{checkCircle}</span>
                  <p>Full Funnel Optimization</p>
                </li>
                <li>
                  <span>{checkCircle}</span>
                  <p>Real-Time Adaptation</p>
                </li>
                <li>
                  <span>{checkCircle}</span>
                  <p>Seamless Integrations</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
