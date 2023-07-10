import { createContext, useState } from "react";

const QuoteContext = createContext()

const QuoteProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        brand: "",
        year: "",
        plan: "",
    })
    const handleDataChange = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDatos(
            {
                ...datos,
                [e.target.name] : e.target.value
            }
        )
    }

    return (
        <QuoteContext.Provider
            value={{
                handleDataChange,
                datos,
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
