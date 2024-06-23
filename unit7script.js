//Unit 7
const questions = [
    {
        //#1
        question: "What is the equilibrium reaction for the freezing/melting of benzene, C<sub>6</sub>H<sub>6</sub>.",
        answers: [
            { text: "C<sub>6</sub>H<sub>6 (l)</sub> &harr; C<sub>6</sub>H<sub>6 (aq)</sub>", correct: false },
            { text: "C<sub>6</sub>H<sub>6 (g)</sub> &harr; C<sub>6</sub>H<sub>6 (l)</sub>", correct: false },
            { text: "C<sub>6</sub>H<sub>6 (s)</sub> &harr; C<sub>6</sub>H<sub>6 (l)</sub>", correct: true },
            { text: "C<sub>6</sub>H<sub>6 (s)</sub> &harr; C<sub>6</sub>H<sub>6 (g)</sub>", correct: false },
        ]
    },
    {
        //#2
        question: "What is the equilibrium reaction for the dissolution of the weak acid, HCN<sub>(aq)</sub>",
        answers: [
            { text: "HCN<sub>(aq)</sub> &harr; H<sup>+</sup><sub>(aq)</sub>", correct: false },
            { text: "HCN<sub>(aq)</sub> &harr; H<sup>+</sup><sub>(aq)</sub> + CN<sup>-</sup><sub>(aq)</sub>", correct: true },
            { text: "HCN<sub>(aq)</sub> &harr; CN<sup>-</sup><sub>(aq)</sub>", correct: false },
        ]
    },
    {
        //#3
        question: "What is the equilibrium reaction for the proton transfer between the weak base, HS<sup>-</sup><sub>(aq)</sub> and the weak acid, H<sub>2</sub>PO<sub>4</sub><sup>-</sup><sub>(aq)</sub>",
        answers: [
            { text: "HS<sup>-</sup><sub>(aq)</sub> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup><sub>(aq)</sub> &harr; HPO<sub>4</sub><sup>2-</sup><sub>(aq)</sub> + H<sub>2</sub>S<sub>(aq)</sub>", correct: true },
            { text: "HS<sup>-</sup><sub>(aq)</sub> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup><sub>(aq)</sub> &harr; 2HPO<sub>4</sub><sup>2-</sup><sub>(aq)</sub>", correct: false },
            { text: "HS<sup>-</sup><sub>(aq)</sub> &harr; HPO<sub>4</sub><sup>2-</sup><sub>(aq)</sub> + H<sub>2</sub>S<sub>(aq)</sub>", correct: false },
            { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup><sub>(aq)</sub> &harr; HPO<sub>4</sub><sup>2-</sup><sub>(aq)</sub> + H<sub>2</sub>S<sub>(aq)</sub>", correct: false },
        ]
    },   
    {
        //#4
        question: "Write an equilibrium reaction for the sublimation of I<sub>2 (s)</sub>",
        answers: [
            { text: "I<sub>2 (l)</sub> &harr; I<sub>2 (g)</sub>", correct: false },
            { text: "I<sub>2 (aq)</sub> &harr; I<sub>2 (g)</sub>", correct: false },
            { text: "I<sub>2 (s)</sub> &harr; I<sub>2 (g)</sub>", correct: true },
            { text: "I<sub>2 (s)</sub> &harr; I<sub>2 (l)</sub>", correct: false },
        ]
    },
    {
        //#5
        question: "Write an equilibrium reaction for the reaction between the weak acid, HCN<sub>(aq)</sub> and the weak base, NH<sub>3 (aq)</sub>.",
        answers: [
            { text: "HCN<sub>(aq)</sub> &harr; CN<sup>-</sup><sub>(aq)</sub> + NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", correct: false },
            { text: "HCN<sub>(aq)</sub> + NH<sub>3 (aq)</sub> &harr; CN<sup>-</sup><sub>(aq)</sub> + NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", correct: true },
            { text: "HCN<sub>(aq)</sub> + NH<sub>3 (aq)</sub> &harr; HCN<sub>(aq)</sub> + NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", correct: false },
            { text: "NH<sub>3 (aq)</sub> &harr; CN<sup>-</sup><sub>(aq)</sub> + NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", correct: false },
        ]
    },
    {
        //#6
        question: "The reaction N<sub>2</sub> + 3H<sub>2</sub> &harr; 2NH<sub>3</sub> is at equilibrium at 500 K. What happens to the rates of the forward and reverse reactions if some NH<sub>3</sub> is added at time, t?",
        answers: [
            { text: "The rates of both the forward and reverse reactions will stay the same, maintaining the original equilibrium state.", correct: false },
            { text: "Both the forward and reverse reaction rates will decrease due to the disturbance caused by the added NH<sub>3</sub>.", correct: false },
            { text: "The rate of the forward reaction will increase to consume the added NH<sub>3</sub> and restore equilibrium.", correct: false },
            { text: "The rate of the reverse reaction will increase to reestablish the equilibrium. The rate of the reverse reaction will be greater than the rate of the forward reaction, until it reaches equilibrium.", correct: true },
        ]
    },
    {
        //#7
        question: "Given the equilibrium reaction:<br> 2A &harr; B + 2C <br>Which reaction will be favored if A is added to the system at equilibrium?",
        answers: [
            { text: "Forward", correct: true },
            { text: "Reverse", correct: false },
        ]
    },
    {
        //#8
        question: "Given the equilibrium reaction:<br> 2A &harr; B + 2C <br>Which reaction will be favored if C is added to the system at equilibrium?",
        answers: [
            { text: "Forward", correct: false },
            { text: "Reverse", correct: true },
        ]
    },
    {
        //#9
        question: "Given the equilibrium reaction:<br> 2A &harr; B + 2C <br>Which reaction will be favored if B is removed to the system at equilibrium?",
        answers: [
            { text: "Reverse", correct: false },
            { text: "Forward", correct: true },
        ]
    },
    {
        //#10
        question: "Write the equilibrium constant expression for the following system at equilibrium:<br>C<sub>3</sub>H<sub>8 (g)</sub> + 5O<sub>2 (g)</sub> &harr; 3CO<sub>2 (g)</sub> + 4H<sub>2</sub>O<sub>(g)</sub>",
        answers: [
            { text: "K<sub>p</sub> = <numerator>(P<sub>CO<sub>2</sub></sub>) (P<sub>H<sub>2</sub>O</sub>)</numerator> &frasl; <denominator>(P<sub>C<sub>3</sub>H<sub>8</sub></sub>) (P<sub>O<sub>2</sub></sub>)</denominator>", correct: false },
            { text: "K<sub>p</sub> = <numerator>(CO<sub>2</sub>)<sup>3</sup> (H<sub>2</sub>O)<sup>4</sup></numerator> &frasl; <denominator>(C<sub>3</sub>H<sub>8</sub>) (O<sub>2</sub>)<sup>5</sup></denominator>", correct: false },
            { text: "K<sub>p</sub> = <numerator>(P<sub>H<sub>2</sub>O</sub>)<sup>4</sup></numerator> &frasl; <denominator>(P<sub>C<sub>3</sub>H<sub>8</sub></sub>) (P<sub>O<sub>2</sub></sub>)<sup>5</sup></denominator>", correct: false },
            { text: "K<sub>p</sub> = <numerator>(P<sub>CO<sub>2</sub></sub>)<sup>3</sup> (P<sub>H<sub>2</sub>O</sub>)<sup>4</sup></numerator> &frasl; <denominator>(P<sub>C<sub>3</sub>H<sub>8</sub></sub>) (P<sub>O<sub>2</sub></sub>)<sup>5</sup></denominator>", correct: true },
        ]
    },
    {
        //#11
        question: "Write the reaction quotient for the following system: <br>3Cl<sub>2 (g)</sub>+ CS<sub>2 (g)</sub> &harr; CCl<sub>4 (g)</sub>+ S<sub>2</sub>Cl<sub>2 (g)</sub>",
        answers: [
            { text: "Q<sub>p</sub> = <numerator>(P<sub>CCl<sub>4</sub></sub>) (P<sub>S<sub>2</sub>Cl<sub>2</sub></sub>)</numerator> &frasl; <denominator>(P<sub>Cl<sub>2</sub></sub>)<sup>3</sup> (P<sub>CS<sub>2</sub></sub>)</denominator>", correct: true },
            { text: "Q<sub>p</sub> = <numerator>(CCl<sub>4</sub>) (S<sub>2</sub>Cl<sub>2</sub>)</numerator> &frasl; <denominator>(Cl<sub>2</sub>)<sup>3</sup> (CS<sub>2</sub>)</denominator>", correct: false },
            { text: "Q<sub>p</sub> = <numerator>(P<sub>CCl<sub>4</sub></sub>) </numerator> &frasl; <denominator>(P<sub>Cl<sub>2</sub></sub>)<sup>3</sup> (P<sub>CS<sub>2</sub></sub>)</denominator>", correct: false },
            { text: "Q<sub>p</sub> = <numerator>(P<sub>CCl<sub>4</sub></sub>)<sup>2</sup> (P<sub>S<sub>2</sub>Cl<sub>2</sub></sub>)</numerator> &frasl; <denominator>(P<sub>Cl<sub>2</sub></sub>)<sup>3</sup> (P<sub>CS<sub>2</sub></sub>)</denominator>", correct: false },
        ]
    },
    {
        //#12
        question: "Write the reaction quotient for the following system: <br>2NOCl<sub>(g)</sub> &harr; 2NO<sub>(g)</sub> + Cl<sub>2 (g)</sub>",
        answers: [
            { text: "Q<sub>p</sub> = <numerator>(NO)<sup>2</sup> (Cl<sub>2</sub>)</numerator> &frasl; <denominator>(NOCl)<sup>2</sup></denominator>", correct: false },
            { text: "Q<sub>p</sub> = <numerator>(P<sub>NO</sub>)<sup>2</sup> (P<sub>Cl<sub>2</sub></sub>)</numerator> &frasl; <denominator>(P<sub>NOCl</sub>)<sup>2</sup></denominator>", correct: true },
            { text: "Q<sub>p</sub> = <numerator>(P<sub>NO</sub>) (P<sub>Cl<sub>2</sub></sub>)</numerator> &frasl; <denominator>(P<sub>NOCl</sub>)</denominator>", correct: false },
            { text: "Q<sub>p</sub> = <numerator>(P<sub>NO</sub>)<sup>2</sup> (P<sub>Cl<sub>2</sub></sub>)<sup>2</sup></numerator> &frasl; <denominator>(P<sub>NOCl</sub>)<sup>2</sup></denominator>", correct: false },
        ]
    },
    {
        //#13
        question: "Calculate the reaction quotient for the reaction:<br>NaOH<sub>(s)</sub> &harr; Na<sup>+</sup><sub>(aq)</sub> + OH<sup>-</sup><sub>(aq)</sub><br>[Na<sup>+</sup>] = 4.22 M [OH<sup>-</sup>] = 6.41 M",
        answers: [
            { text: "Q<sub>c</sub> = 48.2", correct: false },
            { text: "Q<sub>c</sub> = 27.1", correct: true },
            { text: "Q<sub>c</sub> = 97.4", correct: false },
            { text: "Q<sub>c</sub> = 10.6", correct: false },
        ]
    },
    {
        //#14
        question: "The following reaction is at equilibrium at a certain temperature. At that temperature the value for the equilibrium constant is 3.80 x 10<sup>-5</sup>. If the partial pressure of I<sub>2</sub> is 1.00 atm, find the partial pressure of I.<br>I<sub>2 (g)</sub> &harr; 2I<sub>(g)</sub>",
        answers: [
            { text: "P<sub>I</sub> = 6.98 &times; 10<sup>-3</sup>", correct: false },
            { text: "P<sub>I</sub> = 4.86 &times; 10<sup>-3</sup>", correct: false },
            { text: "P<sub>I</sub> = 6.16 &times; 10<sup>-3</sup>", correct: true },
            { text: "P<sub>I</sub> = 5.11 &times; 10<sup>-3</sup>", correct: false },
        ]
    },
    {
        //#15
        question: "The equilibrium constant for this reaction is 5.88 x 10<sup>4</sup>. If concentration of the lead ion is 5.24 M, what is the concentration of the chloride ion?: Pb<sup>2+</sup><sub>(aq)</sub> + 2Cl<sup>-</sup><sub>(aq)</sub> &harr; PbCl<sub>2 (s)</sub>",
        answers: [
            { text: "[Cl<sup>-</sup>] = 5.17 &times; 10<sup>-3</sup> M", correct: false },
            { text: "[Cl<sup>-</sup>] = 1.80 &times; 10<sup>-3</sup> M", correct: true },
            { text: "[Cl<sup>-</sup>] = 8.74 &times; 10<sup>-3</sup> M", correct: false },
            { text: "[Cl<sup>-</sup>] = 3.92 &times; 10<sup>-3</sup> M", correct: false },
        ]
    },
    {
        //#16
        question: "Given the following reaction, what can be said about the relative amounts of the reactants and products when you reach equilibrium? Explain. <br>A<sub>(aq)</sub> + B<sub>(aq)</sub> &harr; 2C<sub>(aq)</sub> + D<sub>(aq)</sub> K = 1.34 x 10<sup>7</sup>",
        answers: [
            { text: "At equilibrium, there will be equal amounts of reactants and products because the reaction reaches a balanced state.", correct: false },
            { text: "At equilibrium, there must be mostly products and almost no reactants. The value for K is very large, which indicates that the reaction will essentially go to completion.", correct: true },
            { text: "At equilibrium, there must be mostly reactants and very few products. A large K value suggests the reactants are favored.", correct: false },
            { text: "At equilibrium, the amounts of reactants and products will be minimal due to the large K value indicating a very slow reaction.", correct: false },
        ]
    },
    {
        //#17
        question: "Given the reaction: 2A<sub>(g)</sub> + B<sub>(g)</sub> &harr; 2C<sub>(g)</sub>, K = 5.27 x 10<sup>-4</sup>, if 1.00 moles of A and 1.00 moles of B were placed into a 1.00 L container and allowed to reach equilibrium, what would be true of the partial pressures of the gases at equilibrium? Explain.",
        answers: [
            { text: "A<B<<C", correct: false },
            { text: "A<B>>C", correct: true },
            { text: "A=B<<C", correct: false },
            { text: "A>B>>C", correct: false },
            { text: "A=B=C", correct: false },
        ]
    },
    {
        //#18
        question: "Given the reaction: 2NOF<sub>(g)</sub> &harr; 2NO<sub>(g)</sub> + F<sub>2 (g)</sub> at a certain temperature the value for K<sub>P</sub> is 1200. What will happen to the value for Q if the volume was doubled?",
        answers: [
            { text: "The value for Q would increase because doubling the volume increases the concentration of the reactants.", correct: false },
            { text: "The value for Q would remain unchanged because K<sub>P</sub> is constant for the reaction.", correct: false },
            { text: "Pressure would be halved, which would decrease Q since Q depends on the partial pressures of the gases.", correct: true },
            { text: "Pressure would be halved, which would increase Q since Q depends on the partial pressures of the gases.", correct: false },
        ]
    },
    {
        //#19
        question: "Consider the reaction: <br>I<sub>2 (g)</sub> + Cl<sub>2 (g)</sub> &harr; 2ICl<sub>(g)</sub>       K<sub>p</sub> = 81.9 (at 25&deg;C) A reaction mixture at 25&deg;C initially contains P<sub>I<sub>2</sub></sub> = 0.100 atm, P<sub>Cl<sub>2</sub></sub>= 0.100 atm, and P<sub>ICl</sub> = 0.100 atm. Find the equilibrium partial pressures of I<sub>2</sub> , Cl<sub>2</sub> and ICl at this temperature.",
        answers: [
            { text: "<b>P<sub>I<sub>2</sub></sub></b> = 0.246 atm, <b>P<sub>Cl<sub>2</sub></sub></b> = 0.246 atm, and <b>P<sub>ICl</sub></b> = 0.246 atm", correct: false },
            { text: "<b>P<sub>I<sub>2</sub></sub></b> = 0.027 atm, <b>P<sub>Cl<sub>2</sub></sub></b> = 0.027 atm, and <b>P<sub>ICl</sub></b> = 0.027 atm", correct: false },
            { text: "<b>P<sub>I<sub>2</sub></sub></b> = 0.027 atm, <b>P<sub>Cl<sub>2</sub></sub></b> = 0.027 atm, and <b>P<sub>ICl</sub></b> = 0.246 atm", correct: true },
            { text: "<b>P<sub>I<sub>2</sub></sub></b> = 0.246 atm, <b>P<sub>Cl<sub>2</sub></sub></b> = 0.246 atm, and <b>P<sub>ICl</sub></b> = 0.027 atm", correct: false },
        ]
    },
    {
        //#20
        question: "Consider the equilibrium: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) &harr; 2NH<sub>3</sub>(g). What will happen to the position of equilibrium if the pressure is increased?",
        answers: [
            { text: "Shift to the right", correct: true },
            { text: "Shift to the left", correct: false },
            { text: "No change", correct: false },
            { text: "Pressure does not affect equilibrium", correct: false },
        ]
    },
    {
        //#21
        question: "For the reaction: 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &harr; 2SO<sub>3</sub>(g) + heat, what will happen to the position of equilibrium if the temperature is increased?",
        answers: [
            { text: "Shift to the right", correct: false },
            { text: "Shift to the left", correct: true },
            { text: "No change", correct: false },
            { text: "Temperature does not affect equilibrium", correct: false },
        ]
    },
    {
        //#22
        question: "Given the equilibrium: H<sub>2</sub>(g) + I<sub>2</sub>(g) &harr; 2HI(g), what happens to the position of equilibrium if H<sub>2</sub> is removed?",
        answers: [
            { text: "Shift to the right", correct: false },
            { text: "No change", correct: false },
            { text: "Shift to the left", correct: true },
            { text: "Equilibrium cannot be established", correct: false },
        ]
    },
    {
        //#23
        question: "For the reaction: PCl<sub>5</sub>(g) &harr; PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g), what happens to the equilibrium position if Cl<sub>2</sub> is added?",
        answers: [
            { text: "Shift to the right", correct: false },
            { text: "No change", correct: false },
            { text: "Equilibrium is destroyed", correct: false },
            { text: "Shift to the left", correct: true },
        ]
    },
    {
        //#24
        question: "Consider the equilibrium: CO<sub>2</sub>(g) + H<sub>2</sub>O(g) &harr; H<sub>2</sub>CO<sub>3</sub>(g). What will happen to the position of equilibrium if the volume of the container is decreased?",
        answers: [
            { text: "Shift to the right", correct: false },
            { text: "Shift to the left", correct: true },
            { text: "No change", correct: false },
            { text: "Volume does not affect equilibrium", correct: false },
        ]
    },    
    {
        //#25
        question: "For the equilibrium: 2NO<sub>2</sub>(g) &harr; N<sub>2</sub>O<sub>4</sub>(g) + heat, what will happen to the position of equilibrium if the temperature is decreased?",
        answers: [
            { text: "Shift to the right", correct: true },
            { text: "Shift to the left", correct: false },
            { text: "No change", correct: false },
            { text: "Temperature does not affect equilibrium", correct: false },
        ]
    },
    {
        //#26
        question: "Given the reaction: 2H<sub>2</sub>O<sub>2</sub>(aq) &harr; 2H<sub>2</sub>O(l) + O<sub>2</sub>(g), what happens to the position of equilibrium if O<sub>2</sub> is removed?",
        answers: [
            { text: "Shift to the left", correct: false },
            { text: "No change", correct: false },
            { text: "Shift to the right", correct: true },
            { text: "Equilibrium cannot be established", correct: false },
        ]
    },    
    {
        //#27
        question: "Which compound will have the lowest concentration of carbonate ions, CO<sub>3</sub><sup>2-</sup>, when added to 1.00 L of water at 25°C?",
        answers: [
            { text: "Lead (II) Carbonate, PbCO<sub>3</sub> K<sub>sp</sub> = 7.40 x 10<sup>-14</sup>", correct: true },
            { text: "Magnesium Carbonate, MgCO<sub>3</sub> K<sub>sp</sub> = 6.82 x 10<sup>-6</sup>", correct: false },
            { text: "Strontium Carbonate, SrCO<sub>3</sub> K<sub>sp</sub> = 5.60 x 10<sup>-10</sup>", correct: false },
            { text: "Calcium Carbonate, CaCO<sub>3</sub> K<sub>sp</sub> = 3.36 x 10<sup>-9</sup>", correct: false },
        ]
    },
    {
        //#28
        question: "Given silver oxalate (Ag<sub>2</sub>C<sub>2</sub>O<sub>4</sub> K<sub>sp</sub> = 5.40 x 10<sup>-12</sup>) and silver phosphate (Ag<sub>3</sub>PO<sub>4</sub> K<sub>sp</sub> = 8.89 x 10<sup>-17</sup>), which substance has a greater concentration of the Ag<sup>+</sup> ion?",
        answers: [
            
            { text: "Silver oxalate, because it forms fewer moles of ions in solution.", correct: false },
            { text: "Silver phosphate, because it forms more moles of ions in solution.", correct: false },
            { text: "Silver phosphate, because its K<sub>sp</sub> value is lower.", correct: false },
            { text: "Silver oxalate, because its K<sub>sp</sub> value is higher.", correct: true },
        ]
    },
    {
        //#29
        question: "The molar solubility of X<sub>2</sub>S in pure water is 0.0395 M. Calculate the K<sub>sp</sub>.",
        answers: [
            { text: "4.87 x 10<sup>-5</sup>", correct: false },
            { text: "6.16 x 10<sup>-6</sup>", correct: true },
            { text: "1.58 x 10<sup>-4</sup>", correct: false },
            { text: "9.87 x 10<sup>-7</sup>", correct: false },
        ]
    },    
    {
        //#30
        question: "Which of the following salts will precipitate first when the same volume of 0.10 M Na<sub>2</sub>SO<sub>4</sub> is added to 1.0 L of a solution containing equal concentrations of Ba<sup>2+</sup>, Ca<sup>2+</sup>, and Sr<sup>2+</sup> ions?",
        answers: [
            { text: "BaSO<sub>4</sub> (K<sub>sp</sub> = 1.1 x 10<sup>-10</sup>)", correct: true },
            { text: "CaSO<sub>4</sub> (K<sub>sp</sub> = 2.4 x 10<sup>-5</sup>)", correct: false },
            { text: "SrSO<sub>4</sub> (K<sub>sp</sub> = 3.2 x 10<sup>-7</sup>)", correct: false },
            { text: "All will precipitate at the same time", correct: false }
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