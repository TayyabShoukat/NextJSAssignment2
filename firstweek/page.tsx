"use client";
import Image from "next/image";

import class1 from "@/commonComponents/firstweek/page";
import "@/styles/class1.module.css";
import styles from "@/styles/class1.module.css";

const firstweekclass = () => {
  return (
    <div className={styles.container}>
      {/* <class1/> */}
      <h1>Tayyab</h1>
      <h2>Tayyab</h2>
      <h3>Tayyab</h3>
      <h4>Tayyab</h4>
      <h5>Tayyab</h5>
      <h6>Tayyab</h6>
      <span>tayyab</span>
      <span>Shoukat</span>
      <p>Type&nbsp;Script</p>
      <img src="" alt="no image"></img>
      <br />
      <a href="https://www.google.com/" target="_blank">
        Goolge
      </a>
      <br />
      <a href="https://www.google.com/" target="_blank">
        <img src="" alt="no image" />
      </a>
      <br />
      <br></br>
      <hr></hr>
      <div>abc</div>
      <input type="text" name="" id="" /> <br />
      <input type="number" name="" id="" /> <br />
      {/* e add hoga bas for exponent power    */}
      <input type="password" name="" id="" /> <br />
      {/* doted form input */}
      <input type="radio" name="gender" id="male" />
      <label htmlFor="male">Male</label>
      <br />
      <input type="radio" name="gender" id="female" />
      <label htmlFor="female">Female</label>
      <br />
      <input type="checkbox" name="" id="acceptPrivacyPolice" />
      <label htmlFor="acceptPrivacyPolice">Accept Private Policy</label>
      <br />
      <input type="checkbox" name="" id="password" />
      <label htmlFor="password">password</label>
      <br />
      <input type="date" name="" id="" />
      <br />
      <input type="time" name="" id="" />
      <br />
      <input type="file" name="" id="" />
      <br />
      <input type="month" name="" id="" />
      <br />
      <input type="search" name="" id="" />
      <br />
      <input type="range" name="" id="" />
      <br />
      <input type="submit" name="" id="" />
      <br />
      <button type="button">Save</button>
      <button>Save</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" required />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" required />
        <br />
        <button type="submit">Submit</button>
        <br />
        <button type="reset">Reset</button>
        <br />
        <button type="button">Submit</button>
        <br />
      </form>
      {/* preflight css ==> by default css */}
      <p>tayyab</p>
    </div>
  );
};

export default firstweekclass;
