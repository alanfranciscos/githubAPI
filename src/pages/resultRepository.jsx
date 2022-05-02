import HeaderMain from "../components/GeneralHeader"
import BoxResult from "../components/Result/BoxResultRepository"
import FooterMain from "../components/GeneralFooter"

export default function ResultProfile() {
    return (
       <div>
           <HeaderMain></HeaderMain>
           <BoxResult></BoxResult>
           <FooterMain></FooterMain>
       </div>
    )
}