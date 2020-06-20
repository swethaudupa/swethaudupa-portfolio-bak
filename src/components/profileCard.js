import React from "react";
import styles from "./profileCard.module.css"
import profilePicture from "../assets/dp.jpg";

const ProfileCard = () => (
  <div className={styles.photo}>
    <img className={styles.avatar} src={profilePicture} alt="logo" />
    <div className={styles.glowWrap}>
      <i className={styles.glow}></i>
    </div>
  </div>
)



export default ProfileCard
