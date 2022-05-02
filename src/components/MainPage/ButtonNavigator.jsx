import Link from "next/link"
import styles from "../../styles/MainPage/Search.module.css"

export default function ButtonNavigador(props) {
    return (
        <Link href={props.destino}>
            <input type="button" value="PESQUISAR" className={styles.okbutton}></input>
        </Link>
    )
}