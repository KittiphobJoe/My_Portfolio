import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          “Your work in developing this site is incredible! You not only thoughtfully innovate and improve features, but also tailor every detail to our customers' needs. It can be clearly seen that you are responsible for your work and experience in website development. Thank you for making this project a success!”
          </p>
          <img
            src="https://img5.pic.in.th/file/secure-sv1/431475362_1467844040815936_7817250060968460206_n.jpeg"
            alt=""
          />
          <h4>WanWan</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
