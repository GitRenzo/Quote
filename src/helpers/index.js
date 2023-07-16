export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}


export function calculateBrandPrice(brand) {
    let incremento

    switch (brand) {
        case "1":
            incremento = 1.3;
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento
}

export function calculatePlanPrice(plan) {
    return (plan === "1") ? 1.20 : 1.50
}

export function formatMoney(amount) {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}