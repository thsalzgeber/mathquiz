class MathCalc {
    constructor(number1, number2, input, operation) {
        this.number1 = number1;
        this.number2 = number2;
        this.input = input;
        this.operation = operation;
    }

    mathOperation() {
        switch (this.operation) {
            case 1:
                return calcMultiplication(this.number1, this.number2, this.input);
            case 2:
                return calcDivision(this.number1, this.number2, this.input);
            case 3:
                return calcDivisionRemainer(this.number1, this.number2, this.input);
            case 4:
                return calcDivisionRounded(this.number1, this.number2, this.input);
            case 5:
                return calcAddition(this.number1, this.number2, this.input);
            case 6:
                return calcSubstraction(this.number1, this.number2, this.input);
            default:
                console.log("Math Operation not found");
        }
    }
}

function calcMultiplication(n1, n2, input) {
    const calc = n1 * n2;
    return {
        result: calc,
        resultText: `${n1} * ${n2} = ${calc}`,
        resultBoolean: +input === calc ? true : false,
    }
}

function calcDivision(n1, n2, input) {
    const calc = n1 / n2;
    return {
        result: calc,
        resultText: `${n1} / ${n2} = ${calc}`,
        resultBoolean: +input === calc ? true : false,
    }
}

function calcDivisionRemainer(n1, n2, input) {
    const remainerResult = (Math.trunc(n1 / n2)) + "r" + (n1 % n2);
    return {
        result: remainerResult,
        resultText: `${n1} / ${n2} = ${remainerResult}`,
        resultBoolean: input === remainerResult ? true : false,
    }
}

function calcDivisionRounded(n1, n2, input) {
    const calc = parseFloat((n1 / n2).toFixed(2));
    return {
        result: calc,
        resultText: `${n1} / ${n2} = ${calc}`,
        resultBoolean: +input === calc ? true : false,
    }
}

function calcAddition(n1, n2, input) {
    const calc = n1 + n2;
    return {
        result: calc,
        resultText: `${n1} + ${n2} = ${calc}`,
        resultBoolean: +input === calc ? true : false,
    }
}

function calcSubstraction(n1, n2, input) {
    const calc = n1 - n2;
    return {
        result: calc,
        resultText: `${n1} - ${n2} = ${calc}`,
        resultBoolean: +input === calc ? true : false,
    }
}


