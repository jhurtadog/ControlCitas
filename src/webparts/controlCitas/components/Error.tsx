import * as React from "react";
import styles from "./ControlCitas.module.scss";

const Error: React.FC = () => {
  return (
    <div className={styles.error}>
      <p>{"Todos los campos son obligatorios"}</p>
    </div>
  );
};
export default Error;
