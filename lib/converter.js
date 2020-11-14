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

    if (words.length == 4 && words[2] == "in") {
        if (amount >= 0) {
            if (units.includes(firstUnit) && units.includes(secondUnit)) {
                switch (firstUnit + "|" + secondUnit) {
                    case "m|cm":
                        return multiplyBy100(amount, secondUnit);
                    case "cm|m":
                        return divideBy100(amount, secondUnit);
                    default:
                        console.log("Error! Please enter two different units.");
                    break;
                };
            } else {
                console.log("Error! We do not support that unit yet. Please enter either: cm or m.");
            };
        } else {
            console.log("Error! Please enter an amount greater or equal to 0.");
        };
    } else {
        console.log("Error! Please enter in the format (X unit1 in unit2).");
    };
};