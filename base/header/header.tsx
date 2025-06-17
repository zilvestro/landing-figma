"use client";
import styles from "./header.module.scss";
import logo from "@/assets/images/logo.svg";
import { useEffect, useState, MouseEvent } from "react";
import classNames from "classnames";
import { arrowRight, chevronBottom } from "../SVG";
import { CustomButton } from "../../components/custom-button/custom-button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);

  const close = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setMenu(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const scrollFunc = () => {
      setIsSticky(window.scrollY >= 60);
    };
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header
      className={classNames(styles["header"], isSticky && styles["sticky"])}
    >
      <div className="auto__container sm">
        <div className={styles["header__inner"]}>
          <Link href="/" className={styles["header__inner-logo"]}>
            <Image src={logo} alt="Company Logo" />
          </Link>
          <nav
            className={classNames(styles["nav"], menu && styles["active"])}
            onClick={close}
          >
            <div className={styles["nav__inner"]}>
              <ul className={styles["nav__inner-links"]}>
                <li
                  className={classNames(
                    styles["drop"],
                    activeDropdown === "product" && styles["active"]
                  )}
                >
                  <button
                    type="button"
                    className={styles["nav__inner-link"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("product");
                    }}
                  >
                    Product
                    <span>{chevronBottom}</span>
                  </button>
                  <ul className={styles["dropMenu"]}>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/" className={styles["nav__inner-link"]}>
                    Pricing
                  </Link>
                </li>
                <li
                  className={classNames(
                    styles["drop"],
                    activeDropdown === "resources" && styles["active"]
                  )}
                >
                  <button
                    type="button"
                    className={styles["nav__inner-link"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("resources");
                    }}
                  >
                    Resources
                    <span>{chevronBottom}</span>
                  </button>
                  <ul className={styles["dropMenu"]}>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                    <li>
                      <Link href="#">Lorem Ipsum</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className={styles["nav__inner-buttons"]}>
                <Link href="/" className={styles["nav__inner-log"]}>
                  Login
                </Link>
                <CustomButton
                  iconPos="right"
                  grid={true}
                  title="Launch Your Program"
                  styleType="primary"
                  icon={arrowRight}
                />
              </div>
            </div>
          </nav>
          <div
            className={classNames(styles["burger"], menu && styles["active"])}
            id="menuBtn"
            onClick={() => {
              setMenu(!menu);
              setActiveDropdown(null);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export { Header };
