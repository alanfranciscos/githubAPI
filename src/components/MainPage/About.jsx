import styles from "../../styles/MainPage/About.module.css"


export default function About() {
        return (
                <div className={styles.box}>
                        <div className={styles.about}>
                                <h1>O que é Github?</h1>
                                <p>
                                        O GitHub é uma plataforma de hospedagem de repositórios Git que permite que pessoas sugiram modificações em projetos e compartilhem conhecimento. Ele também é considerado uma grande rede social, que junta 40 milhões de desenvolvedores do mundo ao redor de discussões sobre software livre.
                                </p>
                        </div>
                </div>


        )
}