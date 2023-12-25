import React from 'react';

import Navbar from "../../components/navbar/Navbar.jsx";
import Animate from "../../components/animate/Animate.jsx";
import Background from "../../assets/bg_img/bg.png";

import styles from '../home/Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
        <img src={Background}/>
      </div>
    </>
  );
}

export default Home