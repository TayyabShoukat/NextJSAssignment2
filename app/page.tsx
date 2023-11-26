"use client";
import Image from "next/image";
import firstweekclass from "@/firstweek/page";
import class1 from "@/commonComponents/firstweek/page";
import Thirdweek from "@/thirdweek/page";
import { FaRegStar } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import styles from "@/styles/class3.module.css";
import { FaStaylinked } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.header}>
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
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* <i className={`${styles.fa} fa-bars`}></i> */}
            {/* <!-- Reposnive bar open and close --> */}
          </nav>

          <div className={styles.text_box}>
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              consequuntur corrupti sapiente aut porro
              <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className={styles.hero_btn}>
              Visit Us To Know More
            </a>
          </div>
        </section>

        {/* <!-- Course Section Start --> */}
        <section className={styles.course}>
          <div className={styles.PageBlock}>
            <div className={styles.verticalLine}></div>
            <div className={styles.Clear}></div>
          </div>
          <h1 className={styles.heading}>
            EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className={styles.row}>
            <div className={styles.coursecol}>
              <h3>Undergraduate Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolor corporis, commodi nihil quas soluta labore
                quisquam impedi distinctio explicabo aut minima quos pariatur
                unde aliquam earum laborum velit non.
              </p>
            </div>
            <div className={styles.coursecol}>
              <h3>Graduate Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolor corporis, commodi nihil quas soluta labore
                quisquam impedit distinctio explicabo aut minima quos pariatur
                unde aliquam earum laborum velit non.
              </p>
            </div>
            <div className={styles.coursecol}>
              <h3>Adult Learning & Degree Completion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolor corporis, commodi nihil quas soluta labore
                quisquam impedit distinctio explicabo aut minima quos pariatur
                unde aliquam earum laborum velit non.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Course Section End --> */}

        {/* <!-- Campus Section Start--> */}

        <section className={styles.campus}>
          <div className={styles.PageBlock}>
            <div className={styles.verticalLine}></div>
            <div className={styles.Clear}></div>
          </div>
          <h1 className={styles.heading}>TAKE OUR VIRTUAL TOUR</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className={styles.row}>
            <div className={styles.campuscol}>
              <img src="/images/Campus1.png" alt="abc" />
              <div className={styles.layer}>
                <h3>DELHI</h3>
              </div>
            </div>
            <div className={styles.campuscol}>
              <img src="/images/Campus2.png" alt="abc" />
              <div className={styles.layer}>
                <h3>HYDERABAD</h3>
              </div>
            </div>
            <div className={styles.campuscol}>
              <img src="/images/Campus3.png" alt="abc" />
              <div className={styles.layer}>
                <h3>MUMBAI</h3>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Campus Section End --> */}

        {/* <!-- Facilities Section Start --> */}
        <section className={styles.facilities}>
          <div className={styles.PageBlock}>
            <div className={styles.verticalLine}></div>
            <div className={styles.Clear}></div>
          </div>
          <h1 className={styles.heading}>Our Facilities</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className={styles.row}>
            <div className={styles.facilitiescol}>
              <img src="/images/libary.png" alt="" />
              <h3>Best Libary</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
            <div className={styles.facilitiescol}>
              <img src="/images/playground.png" alt="" />
              <h3>Athletics</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
            <div className={styles.facilitiescol}>
              <img src="/images/food.png" alt="" />
              <h3>Tasty and Healthy Food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Facilities Section End --> */}

        {/* <!-- Testimonials Section Start --> */}
        <section className={styles.testimonials}>
          <div className={styles.PageBlock}>
            <div className={styles.verticalLine}></div>
            <div className={styles.Clear}></div>
          </div>
          <h1 className={styles.heading}>What Our Student Says</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className={styles.row}>
            <div className={styles.testimonialscol}>
              <img src="/images/user.png" alt="oo.." />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis
                  alias omnis voluptate nisi aperiam, voluptatum quibusdam
                  itaque a deserunt. In quia repellat maxime.
                </p>
                <h3>Student Name</h3>
                {/* <i className={`${styles.fa} fa-star`}><FaRegStar /></i> */}
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
              </div>
            </div>
            <div className={styles.testimonialscol}>
              <img src="/images/user.png" alt="oo.." />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis
                  alias omnis voluptate nisi aperiam, voluptatum quibusdam
                  itaque a deserunt. In quia repellat maxime.
                </p>
                <h3>Student Name</h3>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
                <i className={`${styles.fa} fa-star`}>
                  <FaRegStar />
                </i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonials Section End --> */}

        {/* <!-- Call To Action Section Start --> */}
        <section className={styles.cta}>
          <h1>GET READY FOR A BRIGHT FUTURE</h1>
          <a href="contact.html" className={styles.hero_btn}>
            CONTACT US
          </a>
        </section>
        {/* <!-- Call To Action Section End --> */}

        {/* <!-- Footer Section Start --> */}
        <section className={styles.footer}>
          <hr />
          <h4>About Us</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            minima incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
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
    </>
  );
}
