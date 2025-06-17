"use client";
import { useState } from "react";
import FadeIn from "@/base/FadeIn";
import { chevronBottom } from "@/base/SVG";
import styles from "../landing.module.scss";
import classNames from "classnames";
import { faqList } from "@/base/modul";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqItemProps extends FAQItem {
  setFaq: (id: string | null) => void;
  faq: string | null;
}

export default function Faq() {
  const [faq, setFaq] = useState<string | null>(null);

  return (
    <section className={styles["faq"]}>
      <div className="auto__container">
        <div className={styles["faq__inner"]}>
          <div className={styles["faq__inner-title"]}>
            <h6 className="sup">
              <span></span> Frequently Asked Questions
            </h6>
            <h2>Answers to Help You Launch Your Affiliate Program</h2>
          </div>
          <div className={styles["faq__inner-col"]}>
            {faqList.map((item, index) => {
              return (
                <FaqItem {...item} key={index} setFaq={setFaq} faq={faq} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const FaqItem = (props: FaqItemProps) => {
  return (
    <div
      className={classNames(
        styles["faqItem"],
        props.faq === props.id && styles["active"]
      )}
    >
      <div
        className={styles["faqItem__head"]}
        onClick={() => {
          if (props.faq !== props.id) {
            props.setFaq(props.id);
          } else {
            props.setFaq(null);
          }
        }}
      >
        <span>{chevronBottom}</span>
        <h5>{props.question}</h5>
      </div>
      {props.faq === props.id && (
        <FadeIn className={styles["faqItem__body"]}>
          <p>{props.answer}</p>
        </FadeIn>
      )}
    </div>
  );
};
