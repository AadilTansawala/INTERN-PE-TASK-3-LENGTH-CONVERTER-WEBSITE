const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formula = document.querySelector('.content');
const result_display = document.querySelector('.result');
var objFormula = JSON.parse(formulas);
const selectElement = document.querySelectorAll('select');



// get options value
const units = [
    'Millimeter',
    'Decimeter',
    'Meter',
    'Kilometer',
    'Foot',
    'Inch',
    'Mile',
    'Yard'
];


for (let index = 7; index >= 0; index--) {
    let option = `<option value=${units[index]}>${units[index]}</option>`;
    selectElement[0].firstElementChild.insertAdjacentHTML('afterend',option);
    
}

for (let index = 7; index >= 0; index--) {
    let option = `<option value=${units[index]}>${units[index]}</option>`;
    selectElement[1].firstElementChild.insertAdjacentHTML('afterend',option);
    
}

// function to convert units

function ConvertLength()
{
    var convertThrough = convertFrom.value;
    var convertInto = convertTo.value;
    var lengthToConvert = length.value;
    var result = 0;
    var makeThisMillimeter = 0;
    var inMillimeter = 0;

    // first make the given unit to millimeter
    switch (convertThrough)
    {
        case "Millimeter":
            makeThisMillimeter = 1;
            break;
        case "Centimeter":
            makeThisMillimeter = 10;
            break;
        case "Decimeter":
            makeThisMillimeter = 100;
            break;
        case "Meter":
            makeThisMillimeter = 1000;
            break;
            case "Kilometer":
                makeThisMillimeter = 1000000;
            break;
        case "Foot":
            makeThisMillimeter = 304.8;
            break;
            case "Inch":
            makeThisMillimeter = 25.4;
            break;
        case "Mile":
            makeThisMillimeter = 1609344;
            break;
        case "Yard":
            makeThisMillimeter = 914.4;
            break;
    }
    inMillimeter = lengthToConvert * makeThisMillimeter;

    //convert the millimiter value to the targeted unit
    switch (convertInto)
    {
        case "Millimeter":
            result = inMillimeter;
            break;
        case "Centimeter":
            result = inMillimeter / 10;
            break;
        case "Decimeter":
            result = inMillimeter / 100;
            break;
        case "Meter":
            result = inMillimeter / 1000;
            break;
        case "Kilometer":
            result = inMillimeter / 1000000;
            break;
        case "Foot":
            result = inMillimeter / 304.8;
            break;
        case "Inch":
            result = inMillimeter / 25.4;
            break;
        case "Mile":
            result = inMillimeter / 1609344;
            break;
        case "Yard":
            result = inMillimeter / 914.4;
            break;
    }
    result_display.value = result;
}


// display formula hints


function ShowFormula()
{
    var convertThrough = convertFrom.value;
    var convertInto = convertTo.value;
    formula.innerHTML = "";

    for(var i = 0; i <objFormula.conversions.length; i++)
    {            
        if(
            objFormula.conversions[i].from.toLowerCase() == convertThrough.toLowerCase() 
            && objFormula.conversions[i].to.toLowerCase() == convertInto.toLowerCase()
            )
        {
            formula.innerHTML = objFormula.conversions[i].formula;
        }
    }
}


convertFrom.addEventListener('change',ConvertLength);
convertFrom.addEventListener('change',ShowFormula);
convertTo.addEventListener('change',ConvertLength);
convertTo.addEventListener('change',ShowFormula);
length.addEventListener('input',ConvertLength);
length.addEventListener('input',ShowFormula);