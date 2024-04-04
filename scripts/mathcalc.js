class MathCalc {
    constructor(number1, number2, input, operation) {
        this.number1 = number1;
        this.number2 = number2;
        this.input = input;
        this.operation = operation;
    }

    mathOperation() {
        switch (this.operation) {
            case "*":
                return calcMultiplication(this.number1, this.number2, this.input);
            case "/":
                return calcDivision(this.number1, this.number2, this.input);
            case "%":
                return calcDivisionRemainer(this.number1, this.number2, this.input);
            case "/r":
                return calcDivisionRounded(this.number1, this.number2, this.input);
            case "+":
                return calcAddition(this.number1, this.number2, this.input);
            case "-":
                return calcSubstraction(this.number1, this.number2, this.input);
            default:
                console.log("this is the end");
        }
    }
}

function calcMultiplication(n1, n2, input) {
    return {
        result: n1 * n2,
        resultBoolean: +input === n1 * n2 ? true : false,
    }
}

function calcDivision(n1, n2, input) {
    return {
        result: n1 / n2,
        resultBoolean: +input === n1 / n2 ? true : false,
    }
}

function calcDivisionRemainer(n1, n2, input) {
    const remainerResult = (Math.trunc(n1 / n2)) + "r" + (n1 % n2);
    return {
        result: remainerResult,
        resultBoolean: input === remainerResult ? true : false,
    }
}

function calcDivisionRounded(n1, n2, input) {
    return {
        result: parseFloat((n1 / n2).toFixed(2)),
        resultBoolean: +input === parseFloat((n1 / n2).toFixed(2)) ? true : false,
    }
}

function calcAddition(n1, n2, input) {
    return {
        result: n1 + n2,
        resultBoolean: +input === n1 + n2 ? true : false,
    }
}

function calcSubstraction(n1, n2, input) {
    return {
        result: n1 - n2,
        resultBoolean: +input === (n1 - n2) ? true : false,
    }
}


