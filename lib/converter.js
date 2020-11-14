const units = [
    "cm",
    "m"
];

const multiplyBy100 = (x, unit) => {
    return `${ x * 100 } ` + `${ unit }`;
};

const divideBy100 = (x, unit) => {
    return  `${ x / 100 } ` + `${ unit }`;
};

exports.converter = (input) => {

    const words = input.toString().toLowerCase().split(" ");
    const amount = words[0];
    const firstUnit = words[1];
    const secondUnit = words[3];

    switch (firstUnit + "|" + secondUnit) {
        case "m|cm":
            return multiplyBy100(amount, secondUnit);
        case "cm|m":
            return divideBy100(amount, secondUnit);
            default:
            console.log("Error! Please enter two different units.");
        break;
    };
};