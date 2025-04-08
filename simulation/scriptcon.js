function startConversionAnimation() {
    const inputNumber = document.getElementById("inputNumber").value.trim();
    const inputBase = parseInt(document.getElementById("inputBase").value);
    const targetBase = parseInt(document.getElementById("targetBase").value);
    const stepContainer = document.getElementById("stepContainer");
    const finalResult = document.getElementById("finalResult");

    // Clear previous steps
    stepContainer.innerHTML = "";
    finalResult.textContent = "";
    gsap.set(finalResult, { opacity: 0 });

    // Base validation
    const baseRegex = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^\d+$/,
        16: /^[0-9A-Fa-f]+$/
    };
    if (!baseRegex[inputBase].test(inputNumber)) {
        alert(`Please enter a valid ${getBaseName(inputBase)} number.`);
        return;
    }

    // Check if input base and target base are the same
    if (inputBase === targetBase) {
        finalResult.textContent = `The number ${inputNumber} is already in ${getBaseName(inputBase)}.`;
        gsap.to(finalResult, { opacity: 1, duration: 0.5 });
        return;
    }

    // Convert input to decimal
    const decimalValue = parseInt(inputNumber, inputBase);

    // Determine conversion steps
    let conversion = getConversionSteps(inputBase, targetBase, inputNumber, decimalValue);
    if (!conversion) {
        alert("Unsupported conversion.");
        return;
    }

    // Animate steps
    animateSteps(conversion.steps, conversion.result);
}

// Helper to determine appropriate conversion function
function getConversionSteps(inputBase, targetBase, inputNumber, decimalValue) {
    const conversions = {
        '2-10': () => ({ result: decimalValue, steps: calculateBinaryToDecimalSteps(inputNumber) }),
        '2-8': () => ({ result: decimalValue.toString(8), steps: calculateBinaryToOctalSteps(inputNumber) }),
        '2-16': () => ({ result: decimalValue.toString(16).toUpperCase(), steps: calculateBinaryToHexadecimalSteps(inputNumber) }),
        '8-10': () => ({ result: decimalValue, steps: calculateOctalToDecimalSteps(inputNumber) }),
        '10-2': () => ({ result: decimalValue.toString(2), steps: calculateDecimalToBinarySteps(decimalValue) }),
        '10-8': () => ({ result: decimalValue.toString(8), steps: calculateDecimalToOctalSteps(decimalValue) }),
        '10-16': () => ({ result: decimalValue.toString(16).toUpperCase(), steps: calculateDecimalToHexadecimalSteps(decimalValue) }),
        '16-10': () => ({ result: decimalValue, steps: calculateHexadecimalToDecimalSteps(inputNumber) }),
        '8-2': () => ({ result: calculateOctalToBinarySteps(inputNumber), steps: calculateOctalToBinarySteps(inputNumber) }),
        '16-2': () => ({ result: calculateHexadecimalToBinarySteps(inputNumber), steps: calculateHexadecimalToBinarySteps(inputNumber) }),
        '16-8': () => ({ result: decimalValue.toString(8), steps: calculateHexadecimalToOctalSteps(inputNumber) }),
        '8-16': () => ({ result: decimalValue.toString(16).toUpperCase(), steps: calculateOctalToHexadecimalSteps(inputNumber) }) // New conversion added here
    };
    return conversions[`${inputBase}-${targetBase}`]();
}

// Conversion helper functions
function calculateBinaryToDecimalSteps(binaryStr) {
    const steps = [];
    let sum = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        const digit = parseInt(binaryStr[binaryStr.length - 1 - i], 10);
        const value = digit * Math.pow(2, i);
        sum += value;
        steps.push(`(${digit} * 2^${i}) = ${value}`);
    }
    steps.push(`Sum of values = ${sum}`);
    return steps;
}

function calculateBinaryToOctalSteps(binaryStr) {
    const steps = [];
    let paddedBinary = binaryStr.padStart(Math.ceil(binaryStr.length / 3) * 3, '0');
    let result = "";
    for (let i = 0; i < paddedBinary.length; i += 3) {
        const triplet = paddedBinary.substring(i, i + 3);
        const octalDigit = parseInt(triplet, 2);
        result += octalDigit.toString();
        steps.push(`Binary triplet (${triplet}) = ${octalDigit}`);
    }
    steps.push(`Binary to Octal result = ${result}`);
    return steps;
}

function calculateBinaryToHexadecimalSteps(binaryStr) {
    const steps = [];
    let paddedBinary = binaryStr.padStart(Math.ceil(binaryStr.length / 4) * 4, '0');
    let result = "";
    for (let i = 0; i < paddedBinary.length; i += 4) {
        const quartet = paddedBinary.substring(i, i + 4);
        const hexDigit = parseInt(quartet, 2).toString(16).toUpperCase();
        result += hexDigit;
        steps.push(`Binary quartet (${quartet}) = ${hexDigit}`);
    }
    steps.push(`Binary to Hexadecimal result = ${result}`);
    return steps;
}

function calculateOctalToDecimalSteps(octalStr) {
    const steps = [];
    let sum = 0;
    for (let i = 0; i < octalStr.length; i++) {
        const digit = parseInt(octalStr[octalStr.length - 1 - i], 10);
        const value = digit * Math.pow(8, i);
        sum += value;
        steps.push(`(${digit} * 8^${i}) = ${value}`);
    }
    steps.push(`Sum of values = ${sum}`);
    return steps;
}

function calculateDecimalToBinarySteps(decimalValue) {
    const steps = [];
    let number = decimalValue;
    let result = "";
    while (number > 0) {
        const remainder = number % 2;
        result = remainder + result;
        steps.push(`${number} / 2 = ${Math.floor(number / 2)}, remainder = ${remainder}`);
        number = Math.floor(number / 2);
    }
    steps.push(`Decimal to Binary result = ${result}`);
    return steps;
}

function calculateDecimalToOctalSteps(decimalValue) {
    const steps = [];
    let number = decimalValue;
    let result = "";
    while (number > 0) {
        const remainder = number % 8;
        result = remainder + result;
        steps.push(`${number} / 8 = ${Math.floor(number / 8)}, remainder = ${remainder}`);
        number = Math.floor(number / 8);
    }
    steps.push(`Decimal to Octal result = ${result}`);
    return steps;
}

function calculateDecimalToHexadecimalSteps(decimalValue) {
    const steps = [];
    let number = decimalValue;
    let result = "";
    while (number > 0) {
        const remainder = number % 16;
        const hexDigit = remainder < 10 ? remainder.toString() : String.fromCharCode(remainder - 10 + 65);
        result = hexDigit + result;
        steps.push(`${number} / 16 = ${Math.floor(number / 16)}, remainder = ${hexDigit}`);
        number = Math.floor(number / 16);
    }
    steps.push(`Decimal to Hexadecimal result = ${result}`);
    return steps;
}

function calculateHexadecimalToDecimalSteps(hexStr) {
    const steps = [];
    let sum = 0;
    for (let i = 0; i < hexStr.length; i++) {
        const digit = parseInt(hexStr[hexStr.length - 1 - i], 16);
        const value = digit * Math.pow(16, i);
        sum += value;
        steps.push(`(${hexStr[hexStr.length - 1 - i]} * 16^${i}) = ${value}`);
    }
    steps.push(`Sum of values = ${sum}`);
    return steps;
}

function calculateOctalToBinarySteps(octalStr) {
    const steps = [];
    let binaryResult = '';

    // Convert each octal digit to binary
    for (let i = 0; i < octalStr.length; i++) {
        const octalDigit = octalStr[i];
        // Convert the octal digit to a decimal value
        const decimalValue = parseInt(octalDigit, 8);
        // Convert the decimal value to a binary string
        const binarySegment = decimalValue.toString(2).padStart(3, '0'); // Ensures 3 bits per octal digit
        binaryResult += binarySegment;
        steps.push(`Octal digit (${octalDigit}) = Binary (${binarySegment})`);
    }

    steps.push(`Octal to Binary result = ${binaryResult}`);
    return steps;
}


function calculateHexadecimalToBinarySteps(hexStr) {
    const steps = [];
    let binaryResult = "";

    for (let i = 0; i < hexStr.length; i++) {
        const digit = parseInt(hexStr[i], 16);
        const binarySegment = digit.toString(2).padStart(4, '0'); // Convert to binary and pad
        binaryResult += binarySegment;
        steps.push(`Hexadecimal digit (${hexStr[i]}) = Binary (${binarySegment})`);
    }
    steps.push(`Hexadecimal to Binary result = ${binaryResult}`);
    return steps;
}

function calculateHexadecimalToOctalSteps(hexStr) {
    const steps = [];
    const decimalValue = parseInt(hexStr, 16);
    let octalResult = decimalValue.toString(8);

    steps.push(`Hexadecimal (${hexStr}) to Decimal = ${decimalValue}`);
    steps.push(`Decimal to Octal result = ${octalResult}`);
    return steps;
}

function calculateOctalToHexadecimalSteps(octalStr) {
    const steps = [];
    const decimalValue = parseInt(octalStr, 8);
    let hexResult = decimalValue.toString(16).toUpperCase();

    steps.push(`Octal (${octalStr}) to Decimal = ${decimalValue}`);
    steps.push(`Decimal to Hexadecimal result = ${hexResult}`);
    return steps;
}

// Animate steps
function animateSteps(steps, finalValue) {
    const stepContainer = document.getElementById("stepContainer");
    steps.forEach((stepText, index) => {
        const stepElement = document.createElement("div");
        stepElement.textContent = stepText;
        stepContainer.appendChild(stepElement);
        gsap.from(stepElement, { opacity: 0, duration: 0.5, delay: index * 0.5 });
    });

    // Set final result
    const finalResult = document.getElementById("finalResult");
    finalResult.textContent = `Final Result: ${finalValue}`;
    gsap.to(finalResult, { opacity: 1, duration: 0.5 });
}

function getBaseName(base) {
    switch (base) {
        case 2: return "binary";
        case 8: return "octal";
        case 10: return "decimal";
        case 16: return "hexadecimal";
        default: return "unknown";
    }
}
