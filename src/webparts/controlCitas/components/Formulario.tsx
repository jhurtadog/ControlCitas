/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from "react";
import { useState } from "react";
import Error from "./Error";
import styles from "./ControlCitas.module.scss";
interface IControlCitasPacienteProps {
  messageError: string;
  createItem: (nombre: string, propietario: string, email: string, sintomas: string) => void;
}

const Formulario: React.FC<IControlCitasPacienteProps> = (props) => {
  const { createItem, messageError } = props;
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ([nombre, propietario, email, sintomas].includes("")) {
      setErrorMessage('Todos los campos son obligatorios');
      return;
    }
    setErrorMessage('');
    createItem(nombre, propietario, email, sintomas);
    setNombre("");
    setPropietario("");
    setEmail("");
    setSintomas("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      {(errorMessage || messageError) && <Error description={errorMessage || messageError} />}
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
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
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
          onChange={(e) => setPropietario(e.target.value)}
          value={propietario}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className={styles["mb-5"]}>
        <label className={styles.label} htmlFor="sintomas">
          Sistomas:
        </label>
        <textarea
          className={styles.imput}
          id="sintomas"
          onChange={(e) => setSintomas(e.target.value)}
          value={sintomas}
        />
      </div>
      <div>
        <input type="submit" className={styles.boton} value="Crear Paciente" />
      </div>
    </form>
  );
};
export default Formulario;
