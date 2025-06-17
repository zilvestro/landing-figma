import styles from "../landing.module.scss";
import image from "@/assets/images/story/Marc.webp";
import shape from "@/assets/images/story/shape.webp";
import shape2 from "@/assets/images/story/shape-2.webp";
import Image from "next/image";

const Story = () => {
  return (
    <section className={styles["story"]}>
      <div className={styles["story__bg"]}>
        <span className={styles["left"]}>
          <Image src={shape} alt="shape" />
        </span>
        <span className={styles["right"]}>
          <Image src={shape2} alt="shape" />
        </span>
      </div>
      <div className="auto__container">
        <div className={styles["story__inner"]}>
          <div className={styles["story__inner-row"]}>
            <div className={styles["storyImage"]}>
              <Image src={image} alt="Marc" />
            </div>
            <div className={styles["storyContent"]}>
              <h5>
                <span></span>
                Hey, it&apos;s Marc 👋
              </h5>
              <p className="big">
                In 2018, I believed I was Mark Zuckerberg, built a startup for 1
                year, and got 0 users...
                <br /> <br />A few years after my burnout, I restarted the
                journey differently: I shipped like a madman -{" "}
                <b>16 startups in 2 years.</b> Now I&apos;m happy and earn $45,000 a
                month.
              </p>
            </div>
          </div>
          <div className={styles["storyText"]}>
            <p className="big">
              I realized I was doing the same thing over and over: set up DNS
              records, listen to Stripe webhooks, design pricing section... So I
              built ShipFast for 3 reasons:
              <br /> <br />
              <b>1. Save time</b> and focus on what matters: building a business{" "}
              <br />
              <b>2. Avoid headaches</b> like emails ending in spam or handling
              Stripe subscriptions
              <br />
              <b>3. Get profitable fast -</b> the more you ship, the more you
              learn, the more you earn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
