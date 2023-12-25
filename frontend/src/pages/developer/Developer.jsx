import React from 'react'

import Mohit from "../../assets/developer_img/mohit.jpeg";
import Rupantar from "../../assets/developer_img/rupantar.png";
import Piyush from "../../assets/developer_img/piyush.jpeg";

import styles from '../developer/Developer.module.css';

const Developer = () => {
  return (
    <>
      <h1 className={styles.txt_container}>OUR TEAM</h1>
      <div className={styles.home_container}>
        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Rupantar} />
          </div>
          <div className={styles.caption}>
            <h3>Rupantar</h3>
            <p>CTO, FITVERSE</p>
            <div className={styles.social_links}>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Mohit} />
          </div>
          <div className={styles.caption}>
            <h3>Mohit</h3>
            <p>CEO, FITVERSE</p>
            <div className={styles.social_links}>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Piyush} />
          </div>
          <div className={styles.caption}>
            <h3>Piyush</h3>
            <p>CPO, FITVERSE</p>
            <div className={styles.social_links}>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developer