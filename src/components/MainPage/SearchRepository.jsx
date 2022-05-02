import styles from "../../styles/MainPage/Search.module.css"
import ButtonNavigador from "./ButtonNavigator"
import { useState } from "react"

export default function SearchRepository() {

        //use states to change the variable.
        const state = useState("")
        let input = state[0]
        let alterarInput = state[1]

        //the getInputValue is it used for change the variable
        //when the button is pressed
         const getInputValue = (event)=>{
            const userValue = event.target.value
            alterarInput(userValue)
    }

    return (
        <div className={styles.box}>
                <div className={styles.about}>
                <div>
                        <h1>PESQUISAR POR REPOSITÓRIO</h1>
                        <p>Aqui voce pode pesquisar por repositórios no Github</p>
                </div>
                <div className={styles.search}>
                            <input type="text" className={styles.inputText}  onChange={getInputValue}/>
                            <ButtonNavigador destino={`/resultRepository?type=repos&value=${input}`}/>
                </div>
                    
            </div>  
        </div>
       
    )
}