const sectionHeader = document.getElementById('section-header').innerHTML = "Have Fun with Math";

const sectionHangman = document.getElementById('math-quiz').innerHTML = "Choose a Math Quiz: ";
const sectionMathQuiz = document.getElementById('statistic').innerHTML = "Statistic";

// Navigation Menu
const dropDowns = document.getElementsByClassName("sub-nav");
window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        for (var i = 0; i < dropDowns.length; i++) {
            var openDropdown = dropDowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

