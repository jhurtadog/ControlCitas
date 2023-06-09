import * as React from "react";
import styles from "./ControlCitas.module.scss";

interface IControlCitasPacienteProps {
  id: number;
  nombre: string;
  propietario: string;
  email: string;
  sintomas: string;
  deleteItem: (arg: number) => void;
}

const Paciente: React.FC<IControlCitasPacienteProps> = (props) => {
  const { id, nombre, propietario, email, sintomas, deleteItem } = props;

  return (
    <div className={styles.cajaPaciente}>
      <p className={styles.cajaItem}>
        Nombre: {""}
        <span className={styles.cajaItem2}>{nombre}</span>
      </p>
      <p className={styles.cajaItem}>
        Propietario: {""}
        <span className={styles.cajaItem2}>{propietario}</span>
      </p>
      <p className={styles.cajaItem}>
        Email: {""}
        <span className={styles.cajaItem2}>{email}</span>
      </p>
      <p className={styles.cajaItem}>
        Sintomas: {""}
        <span className={styles.cajaItem2}>{sintomas}</span>
      </p>
      <div className={styles.cajaItem3}>
        <button
          className={styles.boton3}
          type="button"
          onClick={() => deleteItem(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default Paciente;
