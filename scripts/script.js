const sectionHeader = document.getElementById('section-header').innerHTML = "Have Fun with Math";

const sectionHangman = document.getElementById('math-quiz').innerHTML = "Choose a Math Quiz: ";
const sectionMathQuiz = document.getElementById('statistic').innerHTML = "Statistic";

const $mathChoice = $('input[name="mathchoice"]');
const $mathOperation = $('#mathoperation');
const $inputResult = $('#input-result');
const $okButton = $('#ok-btn');
const $result = $('#result');
const $resultBoolean = $('#result-boolean');

let n1 = 0;
let n2 = 0;
let op = strOp = "*";

init();

function init() {
    createMath();

}

$okButton.click(function () {
    verifyUserInput();
    $inputResult.val("");
    $inputResult.focus();

});

$mathChoice.click(function () {
    op = strOp = mathSelection();
    createMath();
});

function createMath() {
    n1 = randNum();
    n2 = randNum();

    if (n1 < n2) [n1, n2] = [n2, n1];

    n1 = op === "-" ? (n1 + n2) : n1;
    n1 = op === "/" ? (n1 * n2) : n1;

    if (op === "%" || op === "/r") strOp = "/";

    $mathOperation.text(`${n1} ${strOp} ${n2} = `);
}

function randNum() {
    // return Math.floor(Math.random() * 99) + 2;
    return Math.floor(Math.random() * 9) + 2;
}

function verifyUserInput() {
    const mathCalculation = new Mathop(n1, n2, $inputResult.val(), op);
    // console.log(mathCalculation.mathOperation().result, mathCalculation.mathOperation().resultBoolean);
    $result.text(mathCalculation.mathOperation().result);
    $resultBoolean.text(mathCalculation.mathOperation().resultBoolean);
    createMath();

}

function mathSelection() {
    for (const radioButton of $mathChoice) {
        if (radioButton.checked) if (radioButton.value === 'math-1') return "*";
        if (radioButton.checked) if (radioButton.value === 'math-2') return "/";
        if (radioButton.checked) if (radioButton.value === 'math-3') return "%";
        if (radioButton.checked) if (radioButton.value === 'math-4') return "/r";
        if (radioButton.checked) if (radioButton.value === 'math-5') return "+";
        if (radioButton.checked) if (radioButton.value === 'math-6') return "-";
        if (radioButton.checked) if (radioButton.value === 'math-7') return 0;
    }
}

function checInput(userInput) {
    const numbersOnly = /[0-9.]+/;
}
