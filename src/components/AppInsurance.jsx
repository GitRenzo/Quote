import Form from "./Form"
import useQuoteTool from "../hooks/useQuoteTool"

import Spinner from "./Spinner"
import Result from "./Result"

const AppInsurance = () => {

    const { result, loader } = useQuoteTool()
    return (
        <>
            <header className='my-10'>
                <h1 className='text-white text-center text-4xl font-black'>
                    Car Insurance Quote Generator
                </h1>
            </header>

            <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-5'>
                <Form />
                {
                    loader ? <Spinner /> : <Result />
                }
            </main>
        </>
    )
}

export default AppInsurance