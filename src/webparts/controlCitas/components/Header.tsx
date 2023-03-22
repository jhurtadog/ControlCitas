import * as React from "react";
import styles from "./ControlCitas.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <img
        alt=""
        src={require("../assets/welcome-light.png")}
        className={styles.welcomeImage}
      />
      <h2 className={styles.header}>
        Seguimiento Pacientes{" "}
        <span className={styles["sub-header"]}>Veterinaria</span>!
      </h2>
    </div>
  );
};
export default Header;
