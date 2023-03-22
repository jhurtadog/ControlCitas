/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import styles from "./ControlCitas.module.scss";
import { IControlCitasProps } from "./IControlCitasProps";
import Header from "./Header";
import Formulario from "./Formulario";
import Paciente from "./Paciente";

const ControlCitas: React.FC<IControlCitasProps> = (props) => {
  const { hasTeamsContext } = props;

  return (
    <section
      className={`${styles.controlCitas} ${hasTeamsContext ? styles.teams : ""}`}>
      <Header />
      <Formulario />
      <div>
        <h2 className={styles.subTitulo}>
          Administra tus {""}
          <span className={styles["sub-header"]}>Pacientes y Citas</span>
        </h2>
 
          <Paciente
            id={1}
            nombre={"paciente.Title"}
            propietario={"paciente.Propiedad"}
            email={"paciente.Email"}
            sintomas={"paciente.Sintomas"}
          />
          <Paciente
            id={1}
            nombre={"paciente.Title"}
            propietario={"paciente.Propiedad"}
            email={"paciente.Email"}
            sintomas={"paciente.Sintomas"}
          />

      </div>
    </section>
  );
};
export default ControlCitas;
