const units = [
    "cm",
    "m"
];

exports.converter = (input) => {

    const words = input.toString().toLowerCase().split(" ");
    const amount = words[0];
    const firstUnit = words[1];
    const secondUnit = words[3];

    switch (firstUnit + "|" + secondUnit) {
        case "m|cm":
            break;
        case "cm|m":
            break;
        default:
            console.log("Error! Please enter two different units.");
        break;
    };
};