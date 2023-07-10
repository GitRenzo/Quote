import { useContext } from "react"
import QuoteContext from "../context/QuoteProvider"

const useQuoteTool = () => {
    return (
        useContext(QuoteContext)
    )
}

export default useQuoteTool