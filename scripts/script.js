const sectionHeader = document.getElementById('section-header').innerHTML = "Have Fun with Math";

const sectionHangman = document.getElementById('math-quiz').innerHTML = "Choose a Math Quiz: ";
const sectionMathQuiz = document.getElementById('statistic').innerHTML = "Statistic";

const $mathChoice = $('input[name="mathchoice"]');
const $mathOperation = $('#mathoperation');
const $inputResult = $('#input-result');
const $inputError = $('#input-error');
const $okButton = $('#ok-btn');
const $result = $('#result');
const $resultBoolean = $('#result-boolean');

let formError = false;

let n1 = 0;
let n2 = 0;
let op = strOp = "*";

init();

function init() {
    createMath();
    clearFormMessages();

}

$okButton.click(function () {
    if (formError) {
        clearFormMessages();
        removeErrorClass();

    }
    $resultBoolean.removeClass('ok-graphic x-graphic');
    formError = false;
    verifyUserInput();
    clearErrorMessage();
});

$mathChoice.click(function () {
    op = strOp = mathSelection();
    $resultBoolean.removeClass('ok-graphic x-graphic');
    $result.text("");
    clearFormMessages();
    clearErrorMessage();
    removeErrorClass();
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
    let resultOk = false;
    const mathCalculation = new MathCalc(n1, n2, $inputResult.val(), op);
    checkInput($inputResult.val());
    $result.text(`${n1} ${strOp} ${n2} = ${mathCalculation.mathOperation().result}`);
    resultOk = mathCalculation.mathOperation().resultBoolean;

    if (resultOk) {
        $resultBoolean.addClass('ok-graphic');
    } else {
        $resultBoolean.addClass('x-graphic');
    }

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

function checkInput(userInput) {
    const regexInput = /^\d+r?\d*$/;
    const regexObject = RegExp(regexInput);
    if (userInput.trim().length === 0) {
        $inputError.text(`You cannot leave the field empty`);
        formError = true;
    }

    if (!formError) {
        if (!regexObject.test(userInput)) {
            $inputError.text(`Wrong input`);
            $inputError.addClass('input-error');
            clearErrorMessage()
            formError = true;
        }
    }
}

function clearFormMessages() {
    $inputError.text("");
    $inputResult.focus();
}

function clearErrorMessage() {
    $inputResult.val("");
    $inputResult.focus();
}

function removeErrorClass() {
    $inputError.removeClass('input-error');
}