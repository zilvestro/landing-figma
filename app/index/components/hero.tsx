"use client";
import { arrowRight, playBig, scaleIcon } from "@/base/SVG";
import { CustomButton } from "@/components/custom-button/custom-button";
import styles from "../landing.module.scss";
import bracket from "@/assets/images/hero/apps/bracket.svg";
import icon1 from "@/assets/images/hero/apps/1.svg";
import icon2 from "@/assets/images/hero/apps/2.svg";
import icon3 from "@/assets/images/hero/apps/3.svg";
import poster from "@/assets/images/hero/poster.webp";
import bg from "@/assets/images/hero/bg.webp";
import circle from "@/assets/images/hero/circle.webp";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Modal } from "@/components/modal";

export default function Hero() {
  const [modal, setModal] = useState<string | null>(null);
  return (
    <>
      <section className={styles["hero"]}>
        <div className={styles["hero__bg"]}>
          <Image
            src={bg}
            alt="Background"
            quality={100}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="auto__container">
          <div className={styles["hero__inner"]}>
            <div className={styles["hero__inner-title"]}>
              <h6> {scaleIcon} Ready to Scale Your SaaS</h6>
              <h1>
                Grow Your SaaS
                <br />
                with an Affiliate Program
              </h1>
              <p className="big">
                Our platform automates launching, managing, and scaling
                affiliate programs - no tech skills needed.
              </p>
              <CustomButton
                iconPos="right"
                title="Start Your 14-day free trial"
                styleType="primary"
                icon={arrowRight}
                href="/trade/steps"
              />
            </div>
            <div className={styles["heroInfo"]}>
              <h6>Integrates with</h6>
              <div className={styles["heroInfo__row"]}>
                <span>
                  <Image src={bracket} alt="Bracket" width={24} height={24} />
                </span>
                <div className={styles["heroInfo__logo"]}>
                  <Image src={icon1} alt="Polar" width={80} height={17} />
                </div>
                <div className={styles["heroInfo__logo"]}>
                  <Image src={icon2} alt="Stripe" width={80} height={24} />
                </div>
                <div className={styles["heroInfo__logo"]}>
                  <Image src={icon3} alt="Creem" width={80} height={24} />
                </div>
                <span>
                  <Image src={bracket} alt="Bracket" width={24} height={24} />
                </span>
              </div>
            </div>
            <div className={styles["heroVideo"]}>
              <Image src={poster} alt="Video poster" />
              <button
                className={styles["heroVideo__play"]}
                aria-label="Play video"
                onClick={() => setModal("video")}
              >
                <div className={styles["heroVideo__play-bg"]}>
                  <Image
                    src={circle}
                    alt="Circle background"
                    width={80}
                    height={80}
                  />
                </div>
                <span>{playBig}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {modal === "video" && <Modal setModal={setModal} />}
      </AnimatePresence>
    </>
  );
}
