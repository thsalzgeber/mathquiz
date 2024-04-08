const sectionHeader = document.getElementById('section-header').innerHTML = "Have Fun with Math";

const sectionHangman = document.getElementById('math-quiz').innerHTML = "Choose a Math Quiz: ";
const textStatistic = document.getElementById('statistic').innerHTML = "Statistic";
const textMark = document.getElementById('mark').innerHTML = "Mark";
// const textResults = document.getElementById('results').innerHTML = "Results";

const $quizNumbers = [$("label[for='math-1']"), $("label[for='math-2']"), $("label[for='math-3']"), $("label[for='math-4']"), $("label[for='math-5']"), $("label[for='math-6']"), $("label[for='math-7']")];
const quizText = ["Multiplication", "Division", "Division with remainder (Result format: 123r4)", "Division rounded (Rounded to 2 decimal places)", "Addition", "Subtraction", "Random operation from Quiz 1 to 6"];

const toggleToolTip = document.getElementById("toggleToolTip");
const popup = document.getElementById("popupvalue");

const $mathChoice = $('input[name="mathchoice"]');
const $mathOperation = $('#mathoperation');
const $quizNumber = $('#quiznumber');
const $inputResult = $('#input-result');
const $inputError = $('#input-error');
const $okButton = $('#ok-btn');
const $result = $('#result');
const $resultBoolean = $('#result-boolean');
const $displayStatistic = $('#statistic-text');
const $displayMark = $('#mark-text');
const $displayResults = $('#all-results');
const resultArray = [];

let mathCalculation = new MathCalc();
let player = new Player("You");

let formError = false;

let n1 = 0;
let n2 = 0;
let op = "*";
let strOp = "x";
let mathChoice = 1;

//Accordeon
const $accordion = $("#accordion");
$accordion.accordion();
$accordion.accordion({ heightStyle: "content" });
$accordion.accordion({ collapsible: true });
$accordion.accordion("option", "active", false);

init();

function init() {
    let i = 0;
    for (const q of $quizNumbers) {
        q.text(quizText[i]);
        i++;
    }
    n1 = getRandomInt(10, 100);
    n2 = getRandomInt(2, 100);
    createMath();
    clearFormMessages();

}

$inputResult.on("keydown", function (e) {
    if (e.keyCode == 13) continueQuiz();
})

$okButton.click(function () {
    continueQuiz();
});

function continueQuiz() {
    if (formError) {
        clearFormMessages();
        removeErrorClass();
    }
    $resultBoolean.removeClass('ok-graphic x-graphic');
    formError = false;
    verifyUserInput();
    clearErrorMessage();
    selectOperation();
    createMath()
}

function selectOperation() {
    mathChoice = mathSelection();

    if (mathChoice === 7) {
        mathChoice = Math.floor(Math.random() * 6) + 1;
    }

    switch (mathChoice) {
        case 1:
            op = "*";
            strOp = "x";
            n1 = getRandomInt(10, 100);
            n2 = getRandomInt(2, 100);
            break;
        case 2:
            op = strOp = "/"
            n1 = getRandomInt(10, 100);
            n2 = getRandomInt(2, 10);
            break;
        case 3:
            op = "/%";
            strOp = "/";
            n1 = getRandomInt(10, 1000);
            n2 = getRandomInt(2, 10);
            break;
        case 4:
            strOp = "/";
            op = "/r";
            n1 = getRandomInt(10, 1000);
            n2 = getRandomInt(2, 10);
            break;
        case 5:
            op = strOp = "+";
            n1 = getRandomInt(10, 100000);
            n2 = getRandomInt(2, 100000);
            break;
        case 6:
            op = strOp = "-";
            n1 = getRandomInt(10, 1000);
            n2 = getRandomInt(2, 1000);
            break;
        default:
            console.log("no operator chosen");
    }
}

$mathChoice.click(function () {

    selectOperation();

    $resultBoolean.removeClass('ok-graphic x-graphic');
    $result.text("");
    clearFormMessages();
    clearErrorMessage();
    removeErrorClass();
    createMath();
});

function createMath() {

    if (n1 < n2) [n1, n2] = [n2, n1];

    n1 = op === "-" ? (n1 + n2) : n1;
    n1 = op === "/" ? (n1 * n2) : n1;

    $quizNumber.html(`<strong>${quizText[mathChoice - 1]}:</strong> `);
    $mathOperation.html(`${n1} ${strOp} ${n2} = `);
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function verifyUserInput() {
    mathCalculation = new MathCalc(n1, n2, $inputResult.val(), mathChoice);

    checkInput($inputResult.val());

    const resultOk = mathCalculation.mathOperation().resultBoolean;
    if (resultOk) {
        $resultBoolean.addClass('ok-graphic');
        $result.text(`${mathCalculation.mathOperation().resultText}`);
        resultArray.push(`${n1} ${strOp} ${n2} = ${$inputResult.val()}`);
        player.playQuiz(resultOk);
    } else {
        $resultBoolean.addClass('x-graphic');
        $result.html(`<strong>${mathCalculation.mathOperation().resultText}</strong`)
        resultArray.push(`<span style="color:red;font-weight:bold">${n1} ${strOp} ${n2} = ${$inputResult.val()} <span style="color:black;font-weight:normal">(${mathCalculation.mathOperation().resultText})`);
        player.playQuiz(resultOk);
    }

    $displayStatistic.html(player.displayStatistics());
    $displayMark.html(player.displayMark());

    $displayResults.text('');
    let i = 1
    for (const r of resultArray) {
        $displayResults.append(`${i}) ${r} <br>`);
        i++;
    }
}

function mathSelection() {
    for (const radioButton of $mathChoice) {
        if (radioButton.checked) if (radioButton.value === 'math-1') return 1;
        if (radioButton.checked) if (radioButton.value === 'math-2') return 2;
        if (radioButton.checked) if (radioButton.value === 'math-3') return 3;
        if (radioButton.checked) if (radioButton.value === 'math-4') return 4;
        if (radioButton.checked) if (radioButton.value === 'math-5') return 5;
        if (radioButton.checked) if (radioButton.value === 'math-6') return 6;
        if (radioButton.checked) if (radioButton.value === 'math-7') return 7;
    }
}

function checkInput(userInput) {
    const regexInput = /^\d+r?.?\d*$/;
    const regexObject = RegExp(regexInput);
    if (userInput.trim().length === 0) {
        $inputError.text(`Please enter a value in the text field.`);
        $inputError.addClass('input-error');
        formError = true;
    }

    if (!formError) {
        if (!regexObject.test(userInput)) {
            $inputError.html(`Use this input format: <strong>123</strong> or <strong>123.1</strong> for the division with decimal or <strong>123r1</strong> for the division with remainer.`);
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

toggleToolTip.addEventListener("mouseover", function (e) {
    popup.classList.toggle("show");
})

toggleToolTip.addEventListener("mouseout", function (e) {
    popup.classList.toggle("show");
})