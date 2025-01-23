const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score'); // Added this line

const questions = [
    {
        question: "Do any of your family members have diabetes?",
        options: ["Yes", "No", "I'm not sure"],
        correctAnswer: "Yes"
    },
    {
        question: "Have you noticed any changes to your vision recently?",
        options: ["Yes", "No", "I'm not Sure"],
        correctAnswer: "Yes"
    },
    {
        question: "Have you been experiencing excessive tiredness?",
        options: ["Yes", "No", "I'm not Sure"],
        correctAnswer: "Yes"
    },
    {
        question: "Have you been diagnosed with high blood pressure?",
        options: ["Yes", "No", "I'm not Sure"],
        correctAnswer: "Yes"
    },
    {
        question: "Have you been urinating more frequently recently?",
        options: ["Yes", "No", "I'm not Sure"],
        correctAnswer: "Yes"
    },
    // Add more questions in a similar format
];

function generateQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map(option => `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = calculateScore();
    scoreElement.style.display = 'block';
    scoreElement.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;

    if(score<3)
    {
        document.getElementById('score').innerHTML = "Low Chance of Diabetes";

    }
    else if(score == 3)
    {
        document.getElementById('score').innerHTML = 'Moderate Chance of Diabetes<br>Consider Seeking Medical Attention';
    }
    else if(score == 4)
    {
        document.getElementById('score').innerHTML = 'High Chance of Diabetes<br>Seek Medical Attention';
    }
    else
    {
        document.getElementById('score').innerHTML = 'High Chance of Diabetes<br>Seek Medical Attention Immediately';
    }
});

generateQuiz();