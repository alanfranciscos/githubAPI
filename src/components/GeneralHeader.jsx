import styles from "../styles/Header.module.css"
import Link from "next/link"

export default function HeaderMain(props) {
    //props é somente leitura
    return (
        <header className={styles.header}>
            <Link href="/"><h1 className={styles.title}>{props.title ??  "Github API"} </h1></Link>
        </header>
    )
}