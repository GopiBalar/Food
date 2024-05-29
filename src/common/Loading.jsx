import React from "react";
import styles from "../style/loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Loading;
