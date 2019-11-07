import React from "react";
import styles from "./profileCard.module.css"


const ProfileCard = () => (
  <div className={styles.photo}>
    <div className={styles.avatar}></div>
    <div className={styles.glowWrap}>
      <i className={styles.glow}></i>
    </div>
  </div>
)



export default ProfileCard