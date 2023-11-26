import React from "react";
import styles from "@/styles/class3.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa";
import Link from "next/link";
const About = () => {
  return (
    <div>
      {/* <Link href="/">home</Link> */}
      <section className={styles.sub_header}>
        <nav className={styles.nav}>
          <Link href="./" className={styles.logo}>
            Xplore
            <b className={styles.fab}>
              <FaStaylinked />
            </b>
            kill
          </Link>
          <div className={styles.navlinks} id="navLinks">
            {/* <!-- Reposnive bar open and close --> */}
            <i className={`${styles.fa} fa-times`}></i>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="course.html">Course</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <i className={`${styles.fa} fa-bars`}></i>
          {/* <!-- Reposnive bar open and close --> */}
        </nav>
        <h1 className={styles.heading}>About Us</h1>
      </section>

      {/* <!-- About Us Section Start --> */}

      <section className={styles.about_us}>
        <div className={styles.row}>
          <div className={styles.about_col}>
            <h1>We are the world's largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <a href="#" className={`${styles.hero_btn} btn`}>
              EXPLORE NOW
            </a>
          </div>
          <div className={styles.about_col}>
            <img src="/images/about.png" alt="" />
          </div>
        </div>
      </section>

      {/* <!-- About Us Section end --> */}
      {/* <!-- Footer Section Start --> */}
      <section className={styles.footer}>
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
          consectetur. Aliquid ab deserunt exercitationem, illum molestiae
          dolorem.
        </p>

        <div className={styles.icons}>
          <i className={`${styles.fab} fa-facebook-f`}>
            <FaFacebookSquare />
          </i>
          <i className={`${styles.fab} fa-instagram`}>
            <FaInstagram />
          </i>
          <i className={`${styles.fab} fa-twitter`}>
            <FaTwitter />
          </i>
          <i className={`${styles.fab} fa-linkedin`}>
            <FaLinkedin />
          </i>
        </div>
        <p>
          Made with <i className={`${styles.fas} fa-heart`}></i> by{" "}
          <a href="index.html">Code Perks</a>
        </p>
        <p>
          Copyright © 2023 <a href="index.html">Xplore Skill</a>. All Rights
          Reserved
        </p>
      </section>
      {/* <!-- Footer Section End --> */}
    </div>
  );
};

export default About;
