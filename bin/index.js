const converter = require("../lib/converter");

const argument = process.argv.splice(2);

console.log(
    converter.converter(argument)
);