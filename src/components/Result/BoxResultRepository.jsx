import styles from "../../styles/Result/BoxResult.module.css"
import React, { useEffect, useState } from "react";

import api from "../../pages/api/api"
import ImageComponent from "../ImageComponent";




export default function BoxResultRepository() {

    //search for value key in url
    const value = new URL(location.href).searchParams.get('value')

    //use states to change the variable.
    const [user, setUser] = useState();
    var param = `/users/${value}`

    //using and handling an api
    useEffect(() => {
      api
        .get(param)
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const image = user?.avatar_url

    return (
        <div className={styles.window}>
            <div className={styles.box}>
                <div className={styles.borderButton}>
                    <h1>RESULTADO</h1>
                </div>
                <div>
                    {/*
                    Passa como parametro a url da imagem
                    */}
                    <ImageComponent url={image}/>
                    <div className={styles.info}>
                        <h2>USUÁRIO:</h2>
                        <p>{user?.login}</p>
                    </div>
                    <div className={styles.info}>
                        <h2>REPOSITÓRIO:</h2>
                        <p>{user?.repos_url}</p>
                    </div>
                    <div className={styles.info}>
                    </div>
                </div>
            </div>
        </div>
    )
}