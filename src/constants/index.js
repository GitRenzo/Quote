export const brands = [
    { id: 1, name: "European" },
    { id: 2, name: "American" },
    { id: 3, name: "Asian" },
]

const yearMax = new Date().getFullYear()
export const years = Array.from(new Array(20), (valor, index) => yearMax - index)


export const plans = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Premier" },
]