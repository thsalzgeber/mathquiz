class Player {
    constructor(firstName) {
        this.firstName = firstName;
        this.quizPlayed = 0;
        this.right = 0;
        this.wrong = 0;
        this.precentage = 0;
    }

    playQuiz(result) {
        this.quizPlayed++;
        if (result) {
            this.right++;
        } else if (!result) {
            this.wrong++;
        }
    }

    displayStatistics() {
        return `<strong>${this.firstName}</strong> ${this.firstName === 'You' ? 'have' : 'has'} participated in <strong>${this.quizPlayed} ${this.quizPlayed === 1 ? 'quiz' : 'quizzes'}</strong>,
        achieving a correct result <strong>${this.right} ${this.right === 1 ? 'time' : 'times'}</strong> an incorrect result <strong>${this.wrong} ${this.wrong === 1 ? 'time' : 'times'}</strong>.`;
    }

    displayMark() {
        const markText = 'Your Mark: ';
        this.precentage = (this.right * 100) / this.quizPlayed;

        switch (true) {
            case this.precentage >= 86:
                return `${markText} <strong>A</strong>`;
            case this.precentage >= 73 && this.precentage < 86:
                return `${markText} <strong>B</strong>`;
            case this.precentage >= 67 && this.precentage < 73:
                return `${markText} <strong>C1</strong>`;
            case this.precentage >= 60 && this.precentage < 67:
                return `${markText} <strong>C</strong>`;
            case this.precentage >= 50 && this.precentage < 60:
                return `${markText} <strong>C2</strong>`;
            default:
                return `${markText} <strong>F</strong>`;
        }
    }
}