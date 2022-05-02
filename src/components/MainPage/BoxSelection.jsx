import styles from "../../styles/MainPage/BoxSelection.module.css"

//Import auto scroll (animate)
//To import is necessary command in terminal npm install react-scroll
import { animateScroll as scroll } from "react-scroll";

export default function BoxSelection() {

    //This function is to auto scroll page to about
    function scrollToAbout() {
    var screenWidth = window.screen.width
        if(screenWidth >= 600) {
            scroll.scrollTo(500)
        } else {
            scroll.scrollTo(700)
        }
    } 
    
    //This function is to auto scroll page to search by repository.
    function scrollToRepository() {
    var screenWidth = window.screen.width
        if(screenWidth >= 600) {
            scroll.scrollTo(950)
        } else {
            scroll.scrollTo(1300)
        }
    } 


    return (
       <div className={styles.box}>
           <div className={styles.whatsGithub} onClick={scrollToAbout}>
                <p>
                    O QUE É GITHUB?
                </p>
           </div>
           <div className={styles.search} onClick={scrollToRepository}>
                <p>
                    PESQUISAR POR REPOSITÓRIO
                </p>
           </div>
           <div className={styles.search}  onClick={scroll.scrollToBottom} 
           style={{
               backgroundColor: "#1B98E0"
               }}>
                <p>
                    PESQUISAR POR PERFIL
                </p>
           </div>
       </div>
    )
}