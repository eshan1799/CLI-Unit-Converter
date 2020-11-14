const convert = require("../lib/convert");

const argument = process.argv.splice(2);

console.log(
    convert.convert(argument)
);