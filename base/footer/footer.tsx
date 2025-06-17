import styles from "./footer.module.scss";
import { arrowRight, linkedin, twitter } from "../SVG";
import logo from "@/assets/images/logo.svg";
import icon1 from "@/assets/images/footer/1.png";
import icon2 from "@/assets/images/footer/2.png";
import icon3 from "@/assets/images/footer/3.png";
import icon4 from "@/assets/images/footer/4.png";
import { CustomButton } from "@/components/custom-button/custom-button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="auto__container">
        <div className={styles["footer__inner"]}>
          <div className={styles["footerMain"]}>
            <div className={styles["footerMain__logo"]}>
              <Image src={logo} alt="logo" />
            </div>
            <p className="big">
              Achieve real growth with smarter affiliate marketing software.
            </p>
            <CustomButton
              iconPos="right"
              title="Get Started"
              styleType="primary"
              icon={arrowRight}
            />
          </div>
          <div className={styles["footerLinks"]}>
            <div className={styles["footerLinks__col"]}>
              <h6>SOFTWARE</h6>
              <a href="#">Affiliate Marketing Software</a>
              <a href="#">Referral Software</a>
              <a href="#">Influencer Marketing Software</a>
            </div>
            <div className={styles["footerLinks__col"]}>
              <h6>PRODUCT</h6>
              <a href="#">Programs</a>
              <a href="#">Payments</a>
              <a href="#">Affiliate Portal</a>
              <a href="#">Analytics & Tracking</a>
              <a href="#">Marketing Resources</a>
              <a href="#">Integrations</a>
            </div>
            <div className={styles["footerLinks__col"]}>
              <h6>INTEGRATIONS</h6>
              <a href="#">Stripe Affiliate Program</a>
              <a href="#">Polar Affiliate Program</a>
              <a href="#">Creem Affiliate Program</a>
            </div>
            <div className={styles["footerLinks__col"]}>
              <h6>KNOW HOW</h6>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a href="#">Glossary</a>
            </div>
            <div className={styles["footerLinks__col"]}>
              <h6>COMPANY</h6>
              <a href="#">About us</a>
              <a href="#">Careers</a>
              <a href="#">Affiliate Program</a>
            </div>
            <div className={styles["footerLinks__col"]}>
              <h6>LEGAL</h6>
              <a href="#">Legal notice</a>
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
          <div className={styles["footerRow"]}>
            <span>
              <Image src={icon1} alt={"icon"} />
            </span>
            <span>
              <Image src={icon2} alt={"icon"} />
            </span>
            <span>
              <Image src={icon3} alt={"icon"} />
            </span>
            <span>
              <Image src={icon4} alt={"icon"} />
            </span>
          </div>
          <div className={styles["copy"]}>
            <div className={styles["social"]}>
              <a href="#" aria-label="Twitter">
                {twitter}
              </a>
              <a href="#" aria-label="LinkedIn">
                {linkedin}
              </a>
            </div>
            <p>© 2024 - 2025 Affonso. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
