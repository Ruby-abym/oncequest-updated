import React from 'react';
import styles from "@/styles/checkout.module.css";
const Schedual = () => {
  return (
    <div className={styles.paddingbox}>
      <div className={styles.schedualTopHead}>Choose Date & Time for Home Sample Collection *</div>
      <div className={styles.schedualSelectBox}>
        <select>
          <option>Select Date</option>
          <option>t1</option>
          <option>t1</option>
        </select>
        <select>
          <option>Select Time</option>
          <option>t1</option>
          <option>t1</option>
        </select>
      </div>
      <p className={styles.schedualFooterText}>*Choose sample collection date & time to proceed further</p>
    </div>
  )
}

export default Schedual