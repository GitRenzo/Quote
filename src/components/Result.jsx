import { useCallback, useRef } from "react"
import useQuoteTool from "../hooks/useQuoteTool"
import { brands, plans } from "../constants"

function Result() {
  const { result, data } = useQuoteTool()
  const { brand, year, plan } = data

  const yearRef = useRef(year)

  const [brandName] = useCallback(
    brands.filter(brandValue => brandValue.id === Number(brand)),
    [result]
  )
  const [planName] = useCallback(
    plans.filter(planValue => planValue.id === Number(plan)),
    [])

  if (result === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-700 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {brandName ? brandName.name : ""}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {planName ? planName.name : ""}
      </p>

      <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Quote: </span>
        {result}
      </p>

    </div>
  )
}

export default Result