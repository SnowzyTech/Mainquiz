
        // Get references to HTML elements
        const maleBtn = document.getElementById('maleBtn');
        const femaleBtn = document.getElementById('femaleBtn');
        const questionsContainer = document.getElementById('questionsContainer');

        // Male button click event listener
        maleBtn.addEventListener('click', () => {
            displayMaleQuestions();
        });

        // Female button click event listener
        femaleBtn.addEventListener('click', () => {
            displayFemaleQuestions();
        });

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
                            question: "which of these best describes you",
                            options: [
                                "Breastfeeding Mums",
                                "Your last child is between 2 - 5 years"
                            ]
                        },
                        {
                            question: "which of these best describes you",
                            options: [
                                "Did you give bith through CS",
                                "Did you give them through vagina delivery (normal delivery)"
                                
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

        // Function to display questions for Male section
        function displayMaleQuestions() {
            let currentQuestionIndex = 0;

            // Function to display current question
            function displayQuestion() {
                const currentQuestion = maleQuestions[currentQuestionIndex];
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `
                    <h2>Q${currentQuestionIndex + 1}: ${currentQuestion.question}</h2>
                    <ul>
                        ${currentQuestion.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                `;
                questionsContainer.innerHTML = ''; // Clear previous question
                questionsContainer.appendChild(questionElement);

                // Add event listener to options
                const options = questionElement.querySelectorAll('li');
                options.forEach((option, optionIndex) => {
                    option.addEventListener('click', () => {
                        currentQuestionIndex++;
                        if (currentQuestionIndex < maleQuestions.length) {
                            displayQuestion(); // Display next question
                        } else {
                            // Redirect to another page for Male section completion
                            window.location.href = 'male_completed.html'; // Change this to the URL you want to redirect to
                        }
                    });
                });
            }

            // Initial display of first question
            displayQuestion();
        }

        // Function to display questions for Female section
        function displayFemaleQuestions() {
            // Display first question with three options
            const firstQuestion = femaleQuestions[0];
            const firstQuestionElement = document.createElement('div');
            firstQuestionElement.classList.add('question');
            firstQuestionElement.innerHTML = `
                <h2>Q1: ${firstQuestion.question}</h2>
                <ul>
                    ${firstQuestion.options.map((option, index) => `<li data-index="${index}">${option}</li>`).join('')}
                </ul>
            `;
            questionsContainer.innerHTML = ''; // Clear previous question
            questionsContainer.appendChild(firstQuestionElement);

            // Add event listener to options
            const options = firstQuestionElement.querySelectorAll('li');
            options.forEach((option, optionIndex) => {
                option.addEventListener('click', () => {
                    // Check if option selected is 1, then display sub questions
                    if (optionIndex === 0) {
                        displaySubQuestions(femaleQuestions[0].subQuestions[0]);
                    } else {
                        displaySubQuestions(femaleQuestions[0].subQuestions[1]);
                    }
                });
            });
        }

        // Function to display sub questions for Female section
        function displaySubQuestions(subQuestions) {
            let currentQuestionIndex = 0;

            // Function to display current question
            function displayQuestion() {
                const currentQuestion = subQuestions[currentQuestionIndex];
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `
                    <h2>Q${currentQuestionIndex + 1}: ${currentQuestion.question}</h2>
                    <ul>
                        ${currentQuestion.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                `;
                questionsContainer.innerHTML = ''; // Clear previous question
                questionsContainer.appendChild(questionElement);

                // Add event listener to options
                const options = questionElement.querySelectorAll('li');
                options.forEach((option, optionIndex) => {
                    option.addEventListener('click', () => {
                        currentQuestionIndex++;
                        if (currentQuestionIndex < subQuestions.length) {
                            displayQuestion(); // Display next question
                        } else {

                            // Redirect based on the option selected

                            if(optionIndex === 0) {
                                window.location.href = 'female_completed_option1.html'; // Redirect for option 1
                            }else {
                                window.location.href = 'female_completed_option2-3.html'; // Redirect for options 2 and 3
                            }
                        }
                    });
                });
            }

            // Initial display of first sub question
            displayQuestion();
        }
    