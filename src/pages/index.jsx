import HeaderMain from "../components/GeneralHeader"
import BoxSelection from "../components/MainPage/BoxSelection"
import About from "../components/MainPage/About"
import SearchRepository from "../components/MainPage/SearchRepository"
import SearchProfile from "../components/MainPage/SearchProfile"
import FooterMain from "../components/GeneralFooter"

import styles from "../styles/Layout.module.css"


export default function Layout() {
    return (
       <div className={styles.layout}>
            <HeaderMain title = "Github API"/>
            <BoxSelection/>
            <About/>
            <SearchRepository/>
            <SearchProfile/>
            <FooterMain/>
       </div>
    )
}