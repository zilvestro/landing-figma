import Image from "next/image";
import { arrowRight, logoIcon } from "@/base/SVG";
import { CustomButton } from "@/components/custom-button/custom-button";
import styles from "../landing.module.scss";
import bg from "@/assets/images/join/bg.webp";

const Join = () => {
  return (
    <section className={styles["join"]}>
      <div className="auto__container">
        <div className={styles["join__inner"]}>
          <div className={styles["join__inner-bg"]}>
            <Image src={bg} alt="bg" />
          </div>
          <div className={styles["join__inner-content"]}>
            <div className={styles["join__inner-icon"]}>{logoIcon}</div>
            <h2 className="ex">Ready to Scale Your SaaS?</h2>
            <p className="big">
              Affonso is the easiest way to launch your own affiliate program.
              We take care of the technical stuff, so you can focus on growing
              your business.
            </p>
            <div className={styles["join__inner-buttons"]}>
              <CustomButton
                iconPos="right"
                title="Launch Your Programme"
                styleType="secondary"
                icon={arrowRight}
              />
              <CustomButton title="Try for Free" styleType="uniq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Join;
