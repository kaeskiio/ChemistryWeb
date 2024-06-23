//Unit 1
const questions = [
    {
        //#1
        question: "How many moles of Lead(II) Iodide, PbI<sub>2</sub>, are there in a 25.0 gram sample?",
        answers: [
            { text: "0.243 mol", correct: false },
            { text: "0.0189 mol", correct: false },
            { text: "0.0542 mol", correct: true },
            { text: "0.789 mol", correct: false },
        ]
    }, 
    {
        //#2
        question: "How many atoms of Lead in Lead(II) Iodide, PbI<sub>2</sub>, are there in a 25.0 gram sample?",
        answers: [
            { text: "3.13 &times 10<sup>23</sup> atoms Pb", correct: false },
            { text: "5.87 &times 10<sup>24</sup> atoms Pb", correct: false },
            { text: "5.47 &times 10<sup>24</sup> atoms Pb", correct: false },
            { text: "3.27 &times 10<sup>22</sup> atoms Pb", correct: true },
        ]
    }, 
    {
        //#3
        question: "A 0.244g sample of calcium carbonate, CaCO<sub>3</sub>, was recovered from a sample of hard water. How many formula units of CaCO<sub>3</sub> were in the sample?",
        answers: [
            { text: "0.89 &times 10<sup>22</sup> formula units CaCO<sub>3</sub>", correct: false },
            { text: "1.47 &times 10<sup>21</sup> formula units CaCO<sub>3</sub>", correct: true },
            { text: "2.43 &times 10<sup>22</sup> formula units CaCO<sub>3</sub>", correct: false },
            { text: "3.18 &times 10<sup>21</sup> formula units CaCO<sub>3</sub>", correct: false },
        ]
    },     
    {
        //#4
        question: "Methane, CH<sub>4</sub>, is the gas commonly found in labs to fuel Bunsen burners, how many moles of Methane are there in a 7.21 gram sample?",
        answers: [
            { text: "0.450 mol CH<sub>4</sub>", correct: true },
            { text: "0.189 mol CH<sub>4</sub>", correct: false },
            { text: "0.605 mol CH<sub>4</sub>", correct: false },
            { text: "0.819 mol CH<sub>4</sub>", correct: false },
        ]
    }, 
    {
        //#5
        question: "Methane, CH<sub>4</sub>, is the gas commonly found in labs to fuel Bunsen burners, how many particles of Methane are there in a 7.21 gram sample?",
        answers: [
            { text: "3.41 &times 10<sup>23</sup> particles CH<sub>4</sub>", correct: false },
            { text: "9.01 &times 10<sup>23</sup> particles CH<sub>4</sub>", correct: false },
            { text: "2.71 &times 10<sup>23</sup> particles CH<sub>4</sub>", correct: true },
            { text: "0.94 &times 10<sup>23</sup> particles CH<sub>4</sub>", correct: false },
        ]
    }, 
    {
        //#6
        question: "Methane, CH<sub>4</sub>, is the gas commonly found in labs to fuel Bunsen burners, how many atoms of Hydrogen are there in a 7.21 gram sample of Methane?",
        answers: [
            { text: "4.49 &times 10<sup>24</sup> atoms H", correct: false },
            { text: "8.01 &times 10<sup>24</sup> atoms H", correct: false },
            { text: "6.17 &times 10<sup>24</sup> atoms H", correct: false },
            { text: "1.08 &times 10<sup>24</sup> atoms H", correct: true },
        ]
    }, 
    {
        //#7
        question: "If 150. grams of helium is needed to cool a superconductor, how many atoms of helium are used?",
        answers: [
            { text: "4.49 &times 10<sup>25</sup> atoms He", correct: false },
            { text: "2.24 &times 10<sup>25</sup> atoms He", correct: true },
            { text: "7.17 &times 10<sup>25</sup> atoms He", correct: false },
            { text: "1.98 &times 10<sup>25</sup> atoms He", correct: false },
        ]
    }, 
    {
        //#8
        question: "If you know the mass and identity of a sample, what other information do you need in order to find the number of each atom in the sample?",
        answers: [
            { text: "Boiling Point, Melting Point", correct: false },
            { text: "Volume, Avogadro's #", correct: false },
            { text: "Density, Temperature", correct: false },
            { text: "Atomic(Molar) Mass, Avogadro's #", correct: true },
        ]
    }, 
    {
        //#9
        question: "Given 10.0 gram samples of LiCl, LiBr, LiF and LiI, place the samples in order of least to greatest number of atoms of Lithium, Li.",
        answers: [
            { text: "LiI < LiBr < LiCl < LiF", correct: true },
            { text: "LiF < LiCl < LiBr < LiI", correct: false },
            { text: "LiCl < LiI < LiBr < LiF", correct: false },
            { text: "LiI < LiCL < LiBr < LiF", correct: false },
        ]
    },
    {
        //#10
        question: "What is the mass of one atom of carbon-12?",
        answers: [
            { text: "3.99 &times 10<sup>-23</sup> g", correct: false },
            { text: "1.99 &times 10<sup>23</sup> g", correct: false },
            { text: "1.99 &times 10<sup>-23</sup> g", correct: true },
            { text: "3.99 &times 10<sup>23</sup> g", correct: false },
        ]
    },
    {
        //#11
        question: "There are two naturally occurring isotopes, Z-85, and Z-87. Z-85 has a natural abundance of 72.17% and a mass of 84.912 amu. Z-87 has a natural abundance of 27.83% and a mass of 86.909 amu. Determine the identity of mystery element Z.",
        answers: [
            { text: "Rubidium", correct: true },
            { text: "Strontium", correct: false },
            { text: "Krypton", correct: false },
            { text: "Yttrium", correct: false },
        ]
    },
    {
        //#12
        question: "A certain sugar used in treating patients with low blood sugar has the following chemical composition: 40% C, 6.7% H, and 53.3% O. What is the empirical formula?",
        answers: [
            { text: "C<sub>2</sub>H<sub>2</sub>O", correct: false },
            { text: "CH<sub>2</sub>O", correct: true },
            { text: "CH<sub>2</sub>O<sub>2</sub>", correct: false },
            { text: "COH", correct: false },
        ]
    },
    {
        //#13
        question: "The molar mass for the empirical compound: CH<sub>2</sub>O, is 180 g/mol. What is the molecular formula?",
        answers: [
            { text: "C<sub>6</sub>H<sub>12</sub>O<sub>12</sub>", correct: false },
            { text: "CH<sub>2</sub>O", correct: false },
            { text: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>", correct: true },
            { text: "C<sub>4</sub>H<sub>10</sub>O<sub>6</sub>", correct: false },
        ]
    },
    {
        //#14
        question: "The most abundant molecule found in the human body is 88.810% oxygen and 11.190% hydrogen. Calculate the empirical formula for this substance.",
        answers: [
            { text: "H<sub>2</sub>O<sub>2</sub>", correct: false },
            { text: "H<sub>3</sub>O<sup>+</sup>", correct: false },
            { text: "H<sub>2</sub>O", correct: true },
            { text: "OH", correct: false },
        ]
    },
    {
        //#15
        question: "A sample of Arginine was 41.368% C, 8.101% H, 32.162% N and 18.369% O. What is the empirical formula?",
        answers: [
            { text: "C<sub>3</sub>H<sub>7</sub>N<sub>2</sub>O", correct: true },
            { text: "C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O", correct: false },
            { text: "C<sub>3</sub>H<sub>7</sub>NO", correct: false },
            { text: "C<sub>3</sub>H<sub>8</sub>N<sub>2</sub>O", correct: false },
        ]
    },
    {
        //#16
        question: "The molecular weight of C<sub>3</sub>H<sub>7</sub>N<sub>2</sub>O is 174.204 grams/mole. What is the molecular formula?",
        answers: [
            { text: "C<sub>3</sub>H<sub>7</sub>N<sub>2</sub>O", correct: false },
            { text: "C<sub>4</sub>H<sub>8</sub>N<sub>4</sub>O", correct: false },
            { text: "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O<sub>2</sub>", correct: true },
            { text: "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O", correct: false },
        ]
    },
    {
        //#17
        question: "If the percentage composition of the elements in urea are 19.999% C, 6.713% H, 46.646% N, and 26.641% O. Find the empirical/molecular formula.",
        answers: [
            { text: "C<sub>2</sub>H<sub>4</sub>N<sub>2</sub>O", correct: false },
            { text: "CH<sub>2</sub>N<sub>2</sub>O", correct: false },
            { text: "CH<sub>4</sub>N<sub>2</sub>O", correct: true },
            { text: "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O", correct: false },
        ]
    },
    {
        //#18
        question: "A compound is 43.642% phosphorus and 56.358% oxygen. Calculate the empirical formula for this compound.",
        answers: [
            { text: "P<sub>2</sub>O<sub>6</sub>", correct: false },
            { text: "P<sub>2</sub>O<sub>4</sub>", correct: false },
            { text: "P<sub>2</sub>O<sub>3</sub>", correct: false },
            { text: "P<sub>2</sub>O<sub>5</sub>", correct: true },
        ]
    },
    {
        //#19
        question: "The molar mass of P<sub>2</sub>O<sub>5</sub> is 283.889044 g/mol, determine the molecular formula.",
        answers: [
            { text: "P<sub>4</sub>O<sub>10</sub>", correct: true },
            { text: "P<sub>4</sub>O<sub>4</sub>", correct: false },
            { text: "P<sub>4</sub>O<sub>8</sub>", correct: false },
            { text: "P<sub>2</sub>O<sub>5</sub>", correct: false },
        ]
    },
    {
        //#20
        question: "What is the ground state electron configuration for Arsenic.",
        answers: [
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup>", correct: true },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 4p<sup>3</sup>", correct: false },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup>", correct: false },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 4p<sup>6</sup> 5s<sup>2</sup> 5p<sup>5</sup>", correct: false },
        ]
    },
    {
        //#21
        question: "What is the ground state electron configuration for Chlorine, Cl.",
        answers: [
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 4s<sup>5</sup>", correct: false },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>", correct: false },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>", correct: true },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>7</sup>", correct: false },
        ]
    },
    {
        //#22
        question: "What is the electron configuration of fluorine ion, F<sup>-</sup>",
        answers: [
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> ", correct: true },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> ", correct: false },
            { text: "[He] 2s<sup>2</sup> 2p<sup>1</sup>", correct: false },
            { text: "[He] 2s<sup>2</sup> 2p<sup>3</sup>", correct: false },
        ]
    },
    {
        //#23
        question: "The electron configuration for an unknown element is xs2 xp4, where x is an integer. Based on your knowledge of ion formation, predict the charge for the ion that would form when this element loses or gains electrons.",
        answers: [
            { text: "4<sup>-</sup> charge", correct: false },
            { text: "2<sup>-</sup> charge", correct: true },
            { text: "2<sup>+</sup> charge", correct: false },
            { text: "4<sup>+</sup> charge", correct: false },
        ]
    },
    {
        //#24
        question: "What is the noble gas electron configuration for scandium, Sc.",
        answers: [
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>1</sup>", correct: false },
            { text: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>", correct: false },
            { text: "[Ar] 4s<sup>2</sup> 4p<sup>1</sup>", correct: false },
            { text: "[Ar] 4s<sup>2</sup> 3d<sup>1</sup>", correct: true },
        ]
    },
    {
        //#25
        question: "Element X has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>, while element Z has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>. Which element would have greater first ionization energy?",
        answers: [
            { text: "Element Z", correct: true },
            { text: "Element X", correct: false },
        ]
    },
    {
        //#26
        question: "Element X has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>, while element Z has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>. Which element would have a larger radius?",
        answers: [
            { text: "Element Z", correct: false },
            { text: "Element X", correct: true },
        ]
    },
    {
        //#27
        question: "Element X has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>, while element Z has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>. Which element would have higher electronegativity?",
        answers: [
            { text: "Element Z", correct: true },
            { text: "Element X", correct: false },
        ]
    },
    {
        //#28
        question: "Element X has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>, while element Z has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>. Which element would form an ion that has a larger radius?",
        answers: [
            { text: "Element Z", correct: true },
            { text: "Element X", correct: false },
        ]
    },
    {
        //#29
        question: "Element X has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>, while element Z has an electron configuration of 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>. Which element would release more energy when it gains an electron?",
        answers: [
            { text: "Element Z", correct: true },
            { text: "Element X", correct: false },
        ]
    },
    {
        //#30
        question: "Calcium reacts with a certain element to form a compound with the general formula CaX2. What would be the most likely formula for a compound formed between sodium and element X?",
        answers: [
            { text: "NaX<sub>2</sub>", correct: false },
            { text: "Na<sub>2</sub>X", correct: false },
            { text: "Na<sub>2</sub>X<sub>2</sub>", correct: false },
            { text: "NaX", correct: true },
        ]
    },
    {
        //#31
        question: "Which of the following has the same number of electrons as Cl<sup>-</sup>?",
        answers: [
            { text: "F<sup>-</sup>", correct: false },
            { text: "S", correct: false },
            { text: "Al<sup>3+</sup>", correct: false },
            { text: "K<sup>+</sup>", correct: true },
        ]
    },
    {
        //#32
        question: "KCl dissolves in water, forming a solution able to conduct electricity. Which of the following would behave similarly?",
        answers: [
            { text: "PbCl<sub>2</sub>", correct: false },
            { text: "LiK", correct: false },
            { text: "LiCl", correct: true },
            { text: "SrCl<sub>2</sub>", correct: false },
        ]
    },
    
    
    
];

function redirectToNewPage() {
    window.location.href = 'apprac.html'; // Change 'newpage.html' to the desired URL
}

    // Add event listener to the button
    document.getElementById('home-button').addEventListener('click', redirectToNewPage);

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const tryAgainButton = document.getElementById("tryAgain-btn");
    
    let currentQuestionIndex = 0;
    let score  = 0;
    let questionNumber;
    let visitedQuestions = [];
    
    function startQuiz(){
        visitedQuestions = [];
        console.log("startQuiz");
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        tryAgainButton.innerHTML = "Try Again";
        showQuestion();
    }
    
    function showQuestion(){
        console.log("showQuestion");
        resetState();
        questionNumber = Math.floor(Math.random() * questions.length);
        while(visitedQuestions.includes(questionNumber)){
            console.log("questionNumber in visited questions, questionNumber = " + questionNumber);
            questionNumber = Math.floor(Math.random() * questions.length);
        }
        console.log(visitedQuestions + " visited questions");
        console.log(questionNumber);
        let currentQuestion = questions[questionNumber];
        visitedQuestions.push(questionNumber);
        let questionNo = currentQuestionIndex +1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
    
    function wrongQuestion(){
        console.log("wrongQuestion");
        resetState();
        let currentQuestion = questions[questionNumber];
        let questionNo = currentQuestionIndex+1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });  
    }
    
    
    function resetState(){
        console.log("resetState");
        nextButton.style.display = "none";
        tryAgainButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e){
        console.log("selectAnswer");
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
    
        }
        else{
            selectedBtn.classList.add("incorrect");
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "false"){
                    button.classList.add("incorrect");
                }
                button.disabled = true;
            });
            nextButton.style.display= "block";
            tryAgainButton.style.display = "block";
    
            
        }
        
    }
    
    function showScore(){
        console.log("showScore");
        resetState();
        if(score < 20*.7)
        {
            questionElement.innerHTML = `You scored ${score} out of ${20}. Play again to improve your score!`;
        }
        else{
            questionElement.innerHTML = `You scored ${score} out of ${20}!`;
        }
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton(){
        console.log("handleNextButton");
        currentQuestionIndex++;
        if(currentQuestionIndex< 20){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    
    tryAgainButton.addEventListener("click", () => {
        wrongQuestion();
    });
    
    nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < 20){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    
    
    
    startQuiz();