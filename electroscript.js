//Unit 9
const questions = [
    {
        //#1
        question: "The half-reaction that occurs at the cathode during the electrolysis of molten sodium bromide is __________.",
        answers: [
            { text: "2Br<sup>-</sup> &#8594 Br<sub>2</sub> + 2e<sup>-</sup>", correct: false },
            { text: "Br<sub>2</sub> + 2e<sup>-</sup> &#8594 2Br<sup>-</sup>", correct: false },
            { text: "Na<sup>+</sup> + e<sup>-</sup> &#8594 Na", correct: true },
            { text: "Na &#8594 Na<sup>+</sup> + e<sup>-</sup>", correct: false },
        ]
    },
    {
        //#2
        question: "How many coulombs of charge pass through a cell if 2.40 amperes of current are passed through the cell for 85.0 minutes?",
        answers: [
            { text: "2.04 &times; 10<sup>2</sup> C", correct: false },
            { text: "1.33 &times; 10<sup>-1</sup> C", correct: false },
            { text: "1.22 &times; 10<sup>4</sup> C", correct: true },
            { text: "2.12 &times; 10<sup>3</sup> C", correct: false },
        ]
    },
    {
        //#3
        question: "How many moles of chromium would be electroplated by passing a current of 5.2 amperes through a solution of Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> for 45.0 minutes?",
        answers: [
            { text: "0.048 mol", correct: true },
            { text: "2.9 mol", correct: false },
            { text: "0.15 mol", correct: false },
            { text: "6.9 mol", correct: false },
        ]
    },
    {
        //#4
        question: "An aqueous copper(II) sulfate solution is electrolyzed for 45 minutes. A 3.2 ampere current is used. What mass of copper is produced?",
        answers: [
            { text: "0.95 g", correct: false },
            { text: "1.9 g", correct: false },
            { text: "2.8 g", correct: true },
            { text: "4.6 g", correct: false },
        ]
    },
    {
        //#5
        question: "Which response contains all the following statements that are correct, and no others?<br>I. In voltaic cells the flow of electrons is spontaneous.<br>II. In electrolytic cells electrons flow in the external circuit (through the wire) from the anode to the cathode.<br>III. In voltaic cells the cathode is the positive electrode.",
        answers: [
            { text: "I", correct: false },            
            { text: "I, II, and III", correct: true },
            { text: "III", correct: false },
            { text: "I and II", correct: false },
        ]
    },
    {
        //#6
        question: "A cell is constructed by immersing a strip of lead in a 1.0 M Pb(NO<sub>3</sub>)<sub>2</sub> solution and a strip of silver in a 1.0 M AgNO<sub>3</sub> solution. The circuit is completed by a wire and a salt bridge. As the cell operates, the strip of silver gains mass (only silver), and the concentration of silver ions in the solution around the silver strip decreases, while the strip of lead loses mass, and the concentration of lead ions increases in the solution around the lead strip. Which of the following represents the reaction that occurs at the cathode in this cell?",
        answers: [
            { text: "Pb<sup>2+</sup> + 2e<sup>-</sup> &#8594 Pb", correct: false },
            { text: "Pb &#8594 Pb<sup>2+</sup> + 2e<sup>-</sup>", correct: false },
            { text: "Ag<sup>+</sup> + e<sup>-</sup> &#8594 Ag", correct: true },
            { text: "Ag &#8594 Ag<sup>+</sup> + e<sup>-</sup>", correct: false },
        ]
    },
    {
        //#7
        question: "A voltaic cell is constructed by immersing a strip of copper metal in 1.0 M CuSO<sub>4</sub> solution and a strip of aluminum in 0.50 M Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> solution. A wire and a salt bridge complete the circuit. The aluminum strip loses mass, and the concentration of aluminum ions in the solution increases. The copper electrode gains mass, and the concentration of copper ions decreases. Which of the following are applicable to the electrode at which oxidation occurs?<br>I. The anode<br>II. The cathode<br>III. The positive electrode<br>IV. The electrode at which electrons are produced<br>V. The negative electrode<br>VI. The electrode at which electrons are used up",
        answers: [
            { text: "I, III, and V", correct: false },
            { text: "I, IV, and V", correct: true },
            { text: "II, V, and VI", correct: false },
            { text: "II, III, and IV", correct: false },
        ]
    },
    {
        //#8
        question: "Which of the following species is the strongest oxidizing agent?",
        answers: [
            { text: "Sn<sup>2+</sup>", correct: false },
            { text: "Sn<sup>4+</sup>", correct: false },
            { text: "Br<sub>2</sub>", correct: true },
            { text: "Br<sup>-</sup>", correct: false },
        ]
    },
    {
        //#9
        question: "Which of the following is the strongest reducing agent?",
        answers: [
            { text: "K", correct: true },
            { text: "Ag", correct: false },
            { text: "Ba<sup>2+</sup>", correct: false },
            { text: "F<sub>2</sub>", correct: false },
        ]
    },
    {
        //#10
        question: "Which of the following metals is most easily oxidized?",
        answers: [
            { text: "Cd", correct: false },
            { text: "Cu", correct: false },
            { text: "Zn", correct: true },
            { text: "Ni", correct: false },
        ]
    },
    {
        //#11
        question: "Which of the following describes the net reaction that occurs in the cell, Cd | Cd<sup>2+</sup>(1 M) || Cu<sup>2+</sup>(1 M) | Cu?",
        answers: [
            { text: "Cu + Cd<sup>2+</sup> &#8594 Cu<sup>2+</sup> + Cd", correct: false },
            { text: "Cu + Cd &#8594 Cu<sup>2+</sup> + Cd<sup>2+</sup>", correct: false },
            { text: "Cu<sup>2+</sup> + Cd<sup>2+</sup> &#8594 Cu + Cd", correct: false },
            { text: "Cu<sup>2+</sup> + Cd &#8594 Cu + Cd<sup>2+</sup>", correct: true },
        ]
    },
    {
        //#12
        question: "Which one of the following reactions is spontaneous (in the direction given) under standard electrochemical conditions?",
        answers: [            
            { text: "2Hg + 2Cl<sup>-</sup> + 2H<sup>+</sup> &#8594 Hg<sub>2</sub><sup>2+</sup> + H<sub>2</sub>", correct: false },
            { text: "Pb<sup>2+</sup> + 2I<sup>-</sup> &#8594 Pb + I<sub>2</sub>", correct: false },
            { text: "Cu<sup>2+</sup> + Fe &#8594 Cu + Fe<sup>2+</sup>", correct: true },
            { text: "2Au + Pt<sup>2+</sup> &#8594 2Au<sup>+</sup> + Pt", correct: false },
        ]
    },
    {
        //#13
        question: "What is the numerical value for the standard cell potential for the following reaction?<br><br>2Cr<sup>3+</sup>(aq) + 3Cu(s) &rarr; 2Cr(s) + 3Cu<sup>2+</sup>(aq)",
        answers: [
            { text: "-1.08 V", correct: true },
            { text: "-0.40 V", correct: false },
            { text: "0.40 V", correct: false },
            { text: "1.08 V", correct: false },
            { text: "2.52 V", correct: false },
        ]
    },
    {
        //#14
        question: "Calculate the standard cell potential for the cell,<br><br>Cd|Cd<sup>2+</sup>(1 M)||Cu<sup>2+</sup>(1 M)|Cu.",
        answers: [
            { text: "+0.74 V", correct: true },
            { text: "-0.74 V", correct: false },
            { text: "+0.06 V", correct: false },
            { text: "-0.06 V", correct: false },
            { text: "0.00 V", correct: false },
        ]
    },
    {
        //#15
        question: "Given the following standard electrode potentials:<br><br>Half-Reaction <br><br>O<sub>2</sub>(g) + 4H<sup>+</sup> + 4e<sup>-</sup> &rarr; 2H<sub>2</sub>O    E<sup>0</sup> = +1.23 V<br>2CO<sub>2</sub>(g) + 2H<sup>+</sup> + 2e<sup>-</sup> &rarr; (COOH)<sub>2</sub>    E<sup>0</sup> = -0.49 V<br><br>Which response contains all the true statements and no others? (Assume all species are present under standard electrochemical conditions.)<br><br>I. H<sub>2</sub>O will spontaneously oxidize (COOH)<sub>2</sub> to form CO<sub>2</sub>.<br>II. O<sub>2</sub>(g) will spontaneously oxidize (COOH)<sub>2</sub> to form CO<sub>2</sub>.<br>III. (COOH)<sub>2</sub> will spontaneously reduce O<sub>2</sub>(g) to form H<sub>2</sub>O.<br>IV. H<sup>+</sup> will spontaneously reduce (COOH)<sub>2</sub> to form CO<sub>2</sub>.<br>V. CO<sub>2</sub> will spontaneously oxidize H<sub>2</sub>O to form O<sub>2</sub>(g).",
        answers: [
            { text: "II, IV, and V", correct: false },
            { text: "I, III, and IV", correct: false },
            { text: "II and III", correct: true },
            { text: "I and IV", correct: false },
            { text: "III and V", correct: false },
        ]
    },
    {
        //#16
        question: "If a copper-plated iron can is scratched, the iron beneath it corrodes more rapidly than it would without the coating. On the other hand, a galvanized iron can is not oxidized if its coating is scratched. Which statement below about these processes is false?",
        answers: [
            { text: "Copper is less active than iron.", correct: false },
            { text: "Zinc is more active than iron.", correct: false },
            { text: "The zinc is preferentially reduced.", correct: true },
            { text: "Zinc is acting as a sacrificial anode.", correct: false },
            { text: "Copper is less easily oxidized than iron.", correct: false },
        ]
    },
    {
        //#17
        question: "A zinc bar weighing 3.0 kg is attached to a buried iron pipe to protect the pipe from corrosion. An average current of 0.020 A flows between the bar and the pipe. How many years will be required for the zinc bar to be entirely consumed? (1 yr = 3.16 &times; 10<sup>7</sup> s)",
        answers: [
            { text: "600 yr", correct: false },
            { text: "14.0 yr", correct: true },
            { text: "5.99 yr", correct: false },
            { text: "7.00 yr", correct: false },
            { text: "6.66 yr", correct: false },
        ]
    },
    {
        //#18
        question: "Calculate the reduction potential of the Zn<sup>2+</sup>/Zn electrode when [Zn<sup>2+</sup>] = 1.0 &times; 10<sup>-8</sup> M.",
        answers: [
            { text: "-0.73 V", correct: false },
            { text: "-0.75 V", correct: false },
            { text: "-0.76 V", correct: true },
            { text: "-0.77 V", correct: false },
            { text: "-1.00 V", correct: false },
        ]
    },
    {
        //#19
        question: "A cell is constructed by immersing a strip of silver in 0.10 M AgNO<sub>3</sub> solution and a strip of lead in 1.0 M Pb(NO<sub>3</sub>)<sub>2</sub> solution. A wire and salt bridge complete the cell. What is the potential of the silver electrode in the cell?",
        answers: [
            { text: "0.74 V", correct: true },
            { text: "0.80 V", correct: false },
            { text: "0.83 V", correct: false },
            { text: "0.86 V", correct: false },
            { text: "0.88 V", correct: false },
        ]
    },
    {
        //#20
        question: "Calculate E<sub>cell</sub> for the reaction below when [Zn<sup>2+</sup>] = 1.00 M, [H<sup>+</sup>] = 1.00 &times; 10<sup>-6</sup> M, and P<sub>H<sub>2</sub></sub> = 1.00 atm.<br><br>Zn(s) + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + H<sub>2</sub>(g)",
        answers: [
            { text: "+0.41 V", correct: true },
            { text: "+0.053 V", correct: false },
            { text: "0.64 V", correct: false },
            { text: "+1.12 V", correct: false },
            { text: "+0.76 V", correct: false },
        ]
    },  
    {
        //#21
        question: "Calculate the cell potential of the following voltaic cell.<br><br>Zn | Zn<sup>2+</sup>(1.0 &times; 10<sup>-4</sup> M) || Cu<sup>2+</sup>(1.0 &times; 10<sup>-6</sup> M) | Cu",
        answers: [
            { text: "+0.98 V", correct: false },
            { text: "+1.10 V", correct: false },
            { text: "+1.04 V", correct: true },
            { text: "+1.22 V", correct: false },
            { text: "+1.16 V", correct: false }
        ]
    },
    {
        //#22
        question: "Calculate the Cd<sup>2+</sup> concentration in the following cell if E<sub>cell</sub> = 0.23 V.<br><br>Cd(s) | Cd<sup>2+</sup>(&times; M) || Ni<sup>2+</sup>(1.00 M) | Ni",
        answers: [
            { text: "0.0019 M", correct: true },
            { text: "1.4 &times; 10<sup>-5</sup> M", correct: false },
            { text: "0.0036 M", correct: false },
            { text: "0.015 M", correct: false },
            { text: "0.0086 M", correct: false }
        ]
    },
    {
        //#23
        question: "A concentration cell is constructed by placing identical iron electrodes in two Fe<sup>2+</sup> solutions. The potential of this cell is observed to be 0.047 V. If the more concentrated Fe<sup>2+</sup> solution is 0.10 M, what is the concentration of the other Fe<sup>2+</sup> solution?",
        answers: [
            { text: "1.5 &times; 10<sup>-2</sup> M", correct: false },
            { text: "2.8 &times; 10<sup>-5</sup> M", correct: false },
            { text: "3.5 &times; 10<sup>-4</sup> M", correct: false },
            { text: "9.2 &times; 10<sup>-2</sup> M", correct: false },
            { text: "2.6 &times; 10<sup>-3</sup> M", correct: true }
        ]
    },
    {
        //#24
        question: "Calculate &Delta;G<sup>0</sup> for the following reaction from its E value.<br><br>F = 96,500 J/V&bull;mol e<sup>-</sup><br>3Hg<sub>2</sub>Cl<sub>2</sub> + 2Cr &rarr; 2Cr<sup>3+</sup> + 6Hg + 6Cl<sup>-</sup> <br>Hint: Relationship between E, Delta G, and K",
        answers: [
            { text: "-1.12 &times; 10<sup>3</sup> kJ", correct: false },
            { text: "-585 kJ", correct: true },
            { text: "-361 kJ", correct: false },
            { text: "1.62 &times; 10<sup>3</sup> kJ", correct: false },
            { text: "-1.78 &times; 10<sup>3</sup> kJ", correct: false }
        ]
    },
    {
        //#25
        question: "Calculate &Delta;G for the reaction of the cell below under the stated conditions.<br><br>F = 96,500 J/V&bull;mol e<sup>-</sup><br>Zn | Zn<sup>2+</sup>(1.0 &times; 10<sup>-8</sup> M) || Cu<sup>2+</sup>(1.0 &times; 10<sup>-6</sup> M) | Cu",
        answers: [
            { text: "-163 kJ", correct: false },
            { text: "-192 kJ", correct: false },
            { text: "201 kJ", correct: false },
            { text: "-212 kJ", correct: true },
            { text: "-268 kJ", correct: false }
        ]
    },
    {
        //#26
        question: "Calculate &Delta;G for the reaction of the cell below under the stated conditions.<br><br>F = 96,500 J/V&bull;mol e<sup>-</sup><br>Zn | Zn<sup>2+</sup>(1.0 &times; 10<sup>-8</sup> M) || Cu<sup>2+</sup>(1.0 &times; 10<sup>-6</sup> M) | Cu",
        answers: [
            { text: "-163 kJ", correct: false },
            { text: "-192 kJ", correct: false },
            { text: "201 kJ", correct: false },
            { text: "-212 kJ", correct: true },
        ]
    }, 
    {
        //#27
        question: "Choose the substance with higher entropy at a given temperature: <br> CO<sub>2(g)</sub> or CO<sub>2(s)</sub>?",
        answers: [
            { text: "CO<sub>2(g)</sub>", correct: true },
            { text: "CO<sub>2(s)</sub>", correct: false },
        ]
    },
    {
        //#28
        question: "Which of the following reactions has a positive change in entropy (ΔS)? <br> A) H<sub>2</sub>O<sub>(l)</sub> &rarr; H<sub>2</sub>O<sub>(g)</sub> <br> B) NH<sub>3</sub>(g) &rarr; NH<sub>3</sub>(l) <br> C) NaCl<sub>(s)</sub> &rarr; NaCl<sub>(aq)</sub> <br> D) CO<sub>2(g)</sub> &rarr; CO<sub>2(s)</sub>",
        answers: [
            { text: "H<sub>2</sub>O<sub>(l)</sub> &rarr; H<sub>2</sub>O<sub>(g)</sub>", correct: true },
            { text: "NH<sub>3</sub>(g) &rarr; NH<sub>3</sub>(l)", correct: false },
            { text: "NaCl<sub>(s)</sub> &rarr; NaCl<sub>(aq)</sub>", correct: true },
            { text: "CO<sub>2(g)</sub> &rarr; CO<sub>2(s)</sub>", correct: false },
        ]
    },
    {
        //#29
        question: "Determine the sign of the entropy change for the reaction: <br> N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &rarr; 2NH<sub>3(g)</sub>",
        answers: [
            { text: "Positive", correct: false },
            { text: "Negative", correct: true },
            { text: "Zero", correct: false },
            { text: "Not enough information", correct: false },
        ]
    },
    {
        //#30
        question: "Which has higher entropy: 1.0 M C<sub>12</sub>H<sub>22</sub>O<sub>11(aq)</sub> or 10.0 M C<sub>12</sub>H<sub>22</sub>O<sub>11(aq)</sub>?",
        answers: [
            { text: "1.0 M", correct: true },
            { text: "10.0 M", correct: false },
            { text: "Both have the same entropy", correct: false },
            { text: "Not enough information", correct: false },
        ]
    },
    {
        //#31
        question: "Predict the entropy change when PbCl<sub>2(s)</sub> &rarr; PbCl<sub>2(aq)</sub>.",
        answers: [
            { text: "Entropy increases", correct: true },
            { text: "Entropy decreases", correct: false },
            { text: "Entropy stays the same", correct: false },
            { text: "Not enough information", correct: false },
        ]
    },
    {
        //#32
        question: "For the reaction 2NO<sub>2(g)</sub> &rarr; N<sub>2</sub>O<sub>4(g)</sub>, is the entropy change positive or negative?",
        answers: [
            { text: "Positive", correct: false },
            { text: "Negative", correct: true },
            { text: "Zero", correct: false },
            { text: "Not enough information", correct: false },
        ]
    },
    {
        //#33
        question: "Which of the following phases has the highest entropy? ",
        answers: [
            { text: "Solid", correct: false },
            { text: "Liquid", correct: false },
            { text: "Gas", correct: true },
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