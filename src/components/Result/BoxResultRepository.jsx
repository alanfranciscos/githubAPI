import styles from "../../styles/Result/BoxResult.module.css"
import React, { useEffect, useState } from "react";

import api from "../../pages/api/api"
import ImageComponent from "../ImageComponent";

export default function BoxResultRepository() {

    //search for value key in url
    const value = new URL(location.href).searchParams.get('value')

    //use states to change the variable.
    const [rep, setRep] = useState();

    //using and handling an api
    useEffect(() => {
        api
          .get(`/repos/${value}`)
          .then((response) =>
              setRep(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
  

    const image = rep?.owner.avatar_url

    return (
        <div className={styles.window}>
            <div className={styles.box}>
                <div className={styles.borderButton}>
                    <h1 style={{color : "#eee"}}>RESULTADO</h1>
                </div>
                <div>
                    {/*
                    Passa como parametro a url da imagem
                    */}
                    <ImageComponent url={image}/>
                    <div className={styles.info}>
                        <h2>USUÁRIO:</h2>
                        <p>{rep?.owner.login}</p>
                    </div>
                    <div className={styles.info}>
                        <h2>REPOSITÓRIO:</h2>
                        <p>{rep?.name}</p>
                    </div>
                    <div className={styles.info}>
                        <h2>STARS</h2>
                        <p>{rep?.stargazers_count}</p>
                    </div>
                    <div className={styles.info}>
                        <h2>FORKS</h2>
                        <p>{rep?.forks}</p>
                    </div>
                    <div className={styles.info}>
                        <h2>ISSUES ABERTAS</h2>
                        <p>{rep?.open_issues_count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}