const units = [
    "cm",
    "m"
];

exports.converter = (input) => {

    const words = input.toString().toLowerCase().split(" ");
    const amount = words[0];
    const firstUnit = words[1];
    const secondUnit = words[3];
};