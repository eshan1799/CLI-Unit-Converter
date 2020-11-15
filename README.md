# CLI Unit Converter

## Description

A CLI application that converts centimetres into metres and vice versa!

## Installation

#### Global

* ```npm install -g @eshan1799/unitconverter```

#### Local

* ```npm install @eshan1799/unitconverter```

##### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)

## Usage

* Supported units: cm (centimetres) & m (metres)

* String format: 
```x unit1 in unit2```

#### Global

* ```converter "'enter string here'" ```

###### Example
* ```converter "5 m in cm" ```
--> output: 
```"500 cm"```

#### Local

* Add script(s) in your package.json

* ```"converter": "converter \"enter string here\""```

* ```npm run converter```

###### Example
* ```"converter": "converter \"5 m in cm\"" ```
* ```npm run converter```  
  
* --> output:
```"500 cm"```
