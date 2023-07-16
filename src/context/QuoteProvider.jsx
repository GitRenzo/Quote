import { createContext, useState } from "react";
import { getYearDifference, calculateBrandPrice, calculatePlanPrice, formatMoney } from "../helpers/index"

const QuoteContext = createContext()

const QuoteProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: "",  
    })

    const [error, setError] = useState("")
    const [result, setResult] = useState(0)

    const handleDataChange = e => {
        setData(
            {
                ...data,
                [e.target.name]: e.target.value,
            }
        )
    }

    const quoteInsurance = () => {
        let result = 2000

        const yearDifference = getYearDifference(data.year)

        result -= ((yearDifference * 3) * result) / 100

        result *= calculateBrandPrice(data.brand)

        result *= calculatePlanPrice(data.plan)

        result = formatMoney(result)
        
        setResult(result)
    }

    return (
        <QuoteContext.Provider
            value={{
                handleDataChange,
                data,
                error,
                setError,
                quoteInsurance,
                result,
            }}
        >

            {children}

        </QuoteContext.Provider>
    )
}



export {
    QuoteProvider
}

export default QuoteContext
