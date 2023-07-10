import { Fragment } from "react";
import { brands, years, plans } from "../constants"

function Formulario() {
    console.log(plans);
    return (
        <>
            <form action="">

                <div className='my-5'>
                    <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>
                        Brand
                    </label>
                    <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200'>
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
                    <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200'>
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
                            <Fragment>
                                <label htmlFor="">{plan.name}</label>
                                <input type="radio" name="plan" value={plan.id} />
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

export default Formulario