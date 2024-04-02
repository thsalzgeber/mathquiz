const sectionHeader = document.getElementById('section-header').innerHTML = "Have Fun with Math";

const sectionHangman = document.getElementById('math-quiz').innerHTML = "Choose a Math Quiz: ";
const sectionMathQuiz = document.getElementById('statistic').innerHTML = "Statistic";

const $mathChoice = $('input[name="mathchoice"]');
const $mathOperation = $('#mathoperation');

let n1 = 5;
let n2 = 3;
let op = "*";

init();

function init() {
    $mathOperation.text(`${n1} ${op} ${n2} = `);
}

$mathChoice.click(function () {
    op = mathSelection();
    console.log(op);
    $mathOperation.text(`${n1} ${op} ${n2} = `);
});

// $mathOperation.text(`${n1} ${op} ${n2} = `);

function mathSelection() {
    for (const radioButton of $mathChoice) {
        if (radioButton.checked) if (radioButton.value === 'math-1') return "*";
        if (radioButton.checked) if (radioButton.value === 'math-2') return "/";
        if (radioButton.checked) if (radioButton.value === 'math-3') return "/";
        if (radioButton.checked) if (radioButton.value === 'math-4') return "/";
        if (radioButton.checked) if (radioButton.value === 'math-5') return "+";
        if (radioButton.checked) if (radioButton.value === 'math-6') return "-";
        if (radioButton.checked) if (radioButton.value === 'math-7') return 0;
    }

}
