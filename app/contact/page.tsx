import React from "react";
import styles from "@/styles/class3.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
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
        <h1 className={styles.heading}>Contact Us</h1>
      </section>

      {/* <!-- Contact Us Section Start --> */}

      <section className={styles.loacation}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>

      <section className={styles.contact_us}>
        <div className={styles.row}>
          <div className={styles.content_col}>
            <div>
              {/* <i class="fa fa-home"></i> */}
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
              {/* <i class="fa fa-phone"></i> */}
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
              {/* <i class="fa fa-envelope"></i> */}
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Yor Query</p>
              </span>
            </div>
          </div>
          <div className={styles.content_col}>
            <form>
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <input type="text" placeholder="Enter Subject" required />
              <textarea rows={8} placeholder="Message" required></textarea>
              <button type="submit" className={`${styles.hero_btn} btn`}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
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

export default ContactUs;
