/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { useState, useEffect } from "react";
import { IControlCitasProps } from "./IControlCitasProps";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import Header from "./Header";
import Formulario from "./Formulario";
import Paciente from "./Paciente";
import styles from "./ControlCitas.module.scss";
interface Item {
  Id: number;
  Title: string;
  Propietario: string;
  Email: string;
  Sintomas: string;
}

const ControlCitas: React.FC<IControlCitasProps> = (props) => {
  const listName: string = 'ControlCita';
  const endPoint: string = `${props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
  const { hasTeamsContext } = props;
  const [siteLists, setSiteLists] = useState<Item[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const deleteItem = (id: number): void => {
    const idList: number = id;
    if (idList > 0) {
      props.context.spHttpClient.post(`${endPoint}(${idList})`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              Accept: "application/json;odata=nometadata",
              "Content-type": "application/json;odata=verbose",
              "odata-version": "",
              "IF-MATCH": "*",
              "X-HTTP-Method": "DELETE",
            },
          }
        )
        .then((response: SPHttpClientResponse) => {
          if (response.ok) {
            setReload(!reload);
          } else {
            console.log(response.json());
          }
        });
    }
  };

  const createItem = (nombre: string, propietario: string, email: string, sintomas: string): void => {
    const pacienteData = {
      Title: nombre,
      Propietario: propietario,
      Email: email,
      Sintomas: sintomas,
    };
    const body: string = JSON.stringify(pacienteData);
    props.context.spHttpClient.post(`${endPoint}`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: body,
        }
      )
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
          response.json().then(() => {
            setReload(!reload);
          });
        } else {
          response.json().then((responseJSON) => {
            console.log(responseJSON);
          });
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    (async () => {
      const rawResponse: SPHttpClientResponse = await props.context.spHttpClient.get(endPoint, SPHttpClient.configurations.v1);
      setSiteLists((await rawResponse.json()).value.map((list: { Title: string; Propietario: string }) => {return list;}));
    })();
  }, [reload]);

  return (
    <section
      className={`${styles.controlCitas} ${hasTeamsContext ? styles.teams : ""}`}>
      <Header />
      <Formulario createItem={createItem} />
      <div>
        <h2 className={styles.subTitulo}>
          Administra tus {""}
          <span className={styles["sub-header"]}>Pacientes y Citas</span>
        </h2>
        {siteLists.map((paciente) => (
          <Paciente
            key={paciente.Id}
            id={paciente.Id}
            nombre={paciente.Title}
            propietario={paciente.Propietario}
            email={paciente.Email}
            sintomas={paciente.Sintomas}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </section>
  );
};
export default ControlCitas;
