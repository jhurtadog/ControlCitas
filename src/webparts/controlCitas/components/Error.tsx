import * as React from "react";
import styles from "./ControlCitas.module.scss";
interface IControlCitasErrorProps {
  description: string;
}

const Error: React.FC<IControlCitasErrorProps> = (props) => {
  const { description } = props;
  return (
    <div className={styles.error}>
      <p>{description}</p>
    </div>
  );
};
export default Error;
