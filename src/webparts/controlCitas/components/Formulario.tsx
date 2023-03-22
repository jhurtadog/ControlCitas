/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from "react";
import Error from "./Error";
import styles from "./ControlCitas.module.scss";

const Formulario: React.FC = () => {

  return (
    <form className={styles.formulario}>
      {<Error />}
      <h3 className={styles.subTitulo}>
        Añade Paciente y{" "}
        <span className={styles["sub-header"]}>Administralos:</span>
      </h3>
      <div className={styles["mb-5"]}>
        <label className={styles.label} htmlFor="mascota">
          Nombre de la Mascota:
        </label>
        <input
          className={styles.imput}
          type="text"
          id="mascota"
          value={"nombre"}
        />
      </div>
      <div className={styles["mb-5"]}>
        <label className={styles.label} htmlFor="propietario">
          Propietario de la Mascota:
        </label>
        <input
          className={styles.imput}
          type="text"
          id="propietario"
          value={"propietario"}
        />
      </div>
      <div className={styles["mb-5"]}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.imput}
          type="email"
          id="email"
          value={"email"}
        />
      </div>
      <div className={styles["mb-5"]}>
        <label className={styles.label} htmlFor="sintomas">
          Sistomas:
        </label>
        <textarea
          className={styles.imput}
          id="sintomas"
          value={"sintomas"}
        />
      </div>
      <div>
        <input type="submit" className={styles.boton} value="Crear Paciente" />
      </div>
    </form>
  );
};
export default Formulario;
