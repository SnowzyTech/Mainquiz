// Get references to HTML elements
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');
const questionsContainer = document.getElementById('questionsContainer');
const popupOverlay = document.getElementById('popupOverlay');

// Male button click event listener
maleBtn.addEventListener('click', () => {
    displayQuestionsInPopup(maleQuestions, 'male_completed.html');
});

// Female button click event listener
femaleBtn.addEventListener('click', () => {
    displayQuestionsInPopup(femaleQuestions, 'female_completed.html');
});

// Function to display questions in a popup
function displayQuestionsInPopup(questions, completionUrl) {
    let currentQuestionIndex = 0;

    // Function to display current question
    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2 class='question-heading'>Q${currentQuestionIndex + 1}: ${currentQuestion.question}</h2>
            <ul class='options'>
                ${currentQuestion.options.map((option, index) => `<li class='option' data-index=${index}>${option}</li>`).join('')}
            </ul>
        `;
        questionsContainer.innerHTML = ''; // Clear previous question
        questionsContainer.appendChild(questionElement);

        // Add event listener to options
        const options = questionElement.querySelectorAll('li.option');
        options.forEach((option) => {
            option.addEventListener('click', () => {
                const selectedIndex = parseInt(option.getAttribute('data-index'));
                if (currentQuestion.subQuestions && currentQuestion.subQuestions[selectedIndex]) {
                    // If subquestions exist for the selected option, display them
                    displaySubQuestions(currentQuestion.subQuestions[selectedIndex]);
                } else {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        displayQuestion(); // Display next question
                    } else {
                        // Close popup when all questions are answered
                        closePopup();
                        // Redirect to completion URL
                        window.location.href = completionUrl;
                    }
                }
            });
        });
    }

    // Function to display subquestions
    function displaySubQuestions(subQuestions) {
        let currentSubQuestionIndex = 0;

        // Function to display current subquestion
        function displaySubQuestion() {
            const currentSubQuestion = subQuestions[currentSubQuestionIndex];
            const subQuestionElement = document.createElement('div');
            subQuestionElement.classList.add('question');
            subQuestionElement.innerHTML = `
                <h2 class='question-heading'>Q${currentSubQuestionIndex + 1}: ${currentSubQuestion.question}</h2>
                <ul class='options'>
                    ${currentSubQuestion.options.map((option, index) => `<li class='option' data-index=${index}>${option}</li>`).join('')}
                </ul>
            `;
            questionsContainer.innerHTML = ''; // Clear previous question
            questionsContainer.appendChild(subQuestionElement);

            // Add event listener to options
            const options = subQuestionElement.querySelectorAll('li.option');
            options.forEach((option) => {
                option.addEventListener('click', () => {
                    currentSubQuestionIndex++;
                    if (currentSubQuestionIndex < subQuestions.length) {
                        displaySubQuestion(); // Display next subquestion
                    } else {
                        currentQuestionIndex++; // Move to the next main question
                        if (currentQuestionIndex < questions.length) {
                            displayQuestion(); // Display next main question
                        } else {
                            // Close popup when all questions are answered
                            closePopup();
                            // Redirect to completion URL
                            window.location.href = completionUrl;
                        }
                    }
                });
            });
        }

        // Initial display of first subquestion
        displaySubQuestion();
    }

    // Initial display of first question
    displayQuestion();

    // Show popup
    openPopup();
}

// Function to open the popup
function openPopup() {
    popupOverlay.style.display = 'flex'; // Display the popup overlay
}

// Function to close the popup
function closePopup() {
    popupOverlay.style.display = 'none'; // Hide the popup overlay
}

// Male section questions
const maleQuestions = [
    {
        question: "Which of these best describes you?",
        options: [
            "You have big belly",
            "You have excess fats in your belly, arms, neck, thigh and all over your body.",
            "You are overweight and big"
        ]
    },
    {
        question: "How often do you eat per day?",
        options: [
            "Once Daily",
            "Twice Daily",
            "3 Times Daily",
            "I eat as often as I can but in small quantities."
        ]
    },
    {
        question: "Which of the following exercises do you engage in?",
        options: [
            "Skipping",
            "Walking",
            "Going to the gym",
            "I don't do exercise"
        ]
    }
];

// Female section questions
const femaleQuestions = [
    {
        question: "Which of these best describes you?",
        options: [
            "You recently gave birth and your tummy still looks protruded and big like you're still 6 months pregnant.",
            "You have excess fats in your belly, arms, neck, thigh and all over your body.",
            "You are overweight and just big."
        ],
        subQuestions: [
            [
                {
                    question: "Which of these best describes you",
                    options: [
                        "Breastfeeding Mums",
                        "Your last child is between 2 - 5 years"
                    ]
                },
                {
                    question: "Did you give birth through CS?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    question:"Are you still looking to conceive?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    question: "When last did you treat infection?",
                    options: [
                        "6 months - 1 year",
                        "2 - 3 Years",
                        "3 Years plus",
                        "Never"
                    ]
                }    
            ],
            [
                {
                    question: "How often do you eat per day?",
                    options: [
                        "Once Daily",
                        "Twice Daily",
                        "3 Times Daily",
                        "I eat as often as I can but in small quantities."
                    ]
                },
                {
                    question: "Do you get tired and fatigued often?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    question: "Do you experience shortness of breath after walking a distance?",
                    options: [
                        "Yes",
                        "No",
                        "Occasionally"
                    ]
                },
                {
                    question: "Which of these do you experience often?",
                    options: [
                        "Excess Sweating",
                        "Joint and back pain",
                        "Difficulty in sleeping",
                        "All of the above",
                        "None of the Above"
                    ]
                },
                {
                    question: "Which of the following exercises do you engage in?",
                    options: [
                        "Skipping",
                        "Walking",
                        "Going to the gym",
                        "I don't do exercise"
                    ]
                },
                {
                    question: "Do you drink alcohol?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    question: "Which of these best describes?",
                    options: [
                        "You've tried weight loss products before but didn't work",
                        "You've loss weight before but after the stopped using the product it came back",
                        "You haven't tried any weight loss products"
                    ]
                }
            ]
        ]
    }
];
