import { Fragment } from "react";
import { brands, years, plans } from "../constants"
import useQuoteTool from "../hooks/useQuoteTool";

import Error from "./Error";

function Form() {

    const { handleDataChange, data, error, setError, quoteInsurance } = useQuoteTool()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(data).includes("")) {
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")
        quoteInsurance()
    }

    return (
        <>

            {error && <Error />}

            <form onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>
                        Brand
                    </label>
                    <select name="brand" id="" className='w-full p-3 bg-white border border-gray-200'
                        onChange={e => handleDataChange(e)}
                        value={data.brand}

                    >
                        <option value="">---- Select Brand ----</option>
                        {brands.map((brand) => (
                            <option value={brand.id} key={brand.id}>
                                {brand.name}
                            </option>
                        ))}

                    </select>
                </div>

                <div className='my-5'>
                    <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>
                        Year
                    </label>
                    <select name="year" id="" className='w-full p-3 bg-white border border-gray-200'
                        onChange={e => handleDataChange(e)}
                        value={data.year}
                    >
                        <option value="">---- Select Year ----</option>
                        {years.map((year) => (
                            <option value={year} key={year}>
                                {year}
                            </option>
                        ))}

                    </select>
                </div>

                <div className='my-5'>
                    <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>
                        Select a Plan
                    </label>

                    <div className="flex gap-3 items-center">
                        {plans.map(plan => (
                            <Fragment key={plan.id}>
                                <label htmlFor="">{plan.name}</label>

                                <input type="radio" name="plan" value={plan.id}
                                    onChange={e => handleDataChange(e)}
                                />
                            </Fragment>
                        ))}

                    </div>
                </div>

                <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value="Get Quote"
                />
            </form>
        </>
    )
}

export default Form