//Unit 6
const questions = [
    {
        //#1
        question: "Instant coffee is made through a process called freeze drying. First the coffee is made in the traditional way, and then the coffee is cooled until it becomes a solid, finally the pressure is decreased and the ice changes to a gas, leaving behind the freeze - dried coffee granules. Identify a phase change that takes place and classify it as endothermic or exothermic. ",
        answers: [
            { text: "Melting, Exothermic", correct: false },
            { text: "Condensation, Endothermic", correct: false },
            { text: "Freezing, Exothermic", correct: true },
            { text: "Sublimation, Exothermic", correct: false },
        ]
    },
    {
        //#2
        question: "A solution of ammonium nitrate was created by dissolving 5.02 grams of ammonium nitrate in 100.0 mL of water at 22.3&deg;C. After forming the solution the temperature was 17.3&deg;C. Did heat enter or leave the system?",
        answers: [
            { text: "Leave the system", correct: false },
            { text: "Enter the system", correct: true },
        ]
    },
    {
        //#3
        question: "A solution of ammonium nitrate was created by dissolving 5.02 grams of ammonium nitrate in 100.0 mL of water at 22.3&deg;C. After forming the solution the temperature was 17.3&deg;C. What is the sign for q?",
        answers: [
            { text: "Positive", correct: true },
            { text: "Negative", correct: false },
        ]
    },   
    {
        //#4
        question: "A solution of ammonium nitrate was created by dissolving 5.02 grams of ammonium nitrate in 100.0 mL of water at 22.3&deg;C. After forming the solution the temperature was 17.3&deg;C. Was the dissolution process endothermic or exothermic?",
        answers: [
            { text: "Endothermic", correct: true },
            { text: "Exothermic", correct: false },
        ]
    },
    {
        //#5
        question: "When whipped cream is forced out of the can, it is propelled by dinitrogen monoxide gas, N 2 O. After expelling the whipped cream, the can feels cold. If the can is the surroundings, was the process endothermic or exothermic?",
        answers: [
            { text: "Endothermic", correct: true },
            { text: "Exothermic", correct: false },
        ]
    },
    {
        //#6
        question: "When water is placed into a freezer, it forms ice cubes. If the water is the system, was the process endothermic or exothermic?",
        answers: [
            { text: "Endothermic", correct: false },
            { text: "Exothermic", correct: true },
        ]
    },
    {
        //#7
        question: "Ice melt, calcium chloride, CaCl<sub>2</sub>, is used in the winter to melt ice on sidewalks and driveways. If the calcium chloride is the system and the ice is the surroundings, was the process endothermic or exothermic?",
        answers: [
            { text: "Exothermic", correct: true },
            { text: "Endothermic", correct: false },
        ]
    },
    {
        //#8
        question: "Oranges are typically grown in warm climates because the trees can be damaged by freezing temperatures. If an orange farmer knows that the temperatures are going to drop to below freezing they will spray orange trees with water. Which of the following explains why this protects the oranges and orange trees from freezing damage?",
        answers: [
            { text: "The water protects the orange trees by freezing before the oranges do ; the process of freezing absorbs heat which is released by the oranges so they don’t freeze.", correct: false },
            { text: "The water protects the orange trees by freezing before the oranges do ; the process of freezing releases heat which is absorbed by the oranges so they don’t freeze.", correct: true },
        ]
    },
    {
        //#9
        question: "50.0 grams of Aluminum (specific heat capacity = 0.900 J/g&deg;C) at 85.0&deg;C was placed into 100.0 grams of water (specific heat capacity = 4.184 J/g &deg;C) at 25.0&deg;C. What happens to the temperature, average kinetic energy and average speed of the aluminum?",
        answers: [
            { text: "The temperature and average kinetic energy decrease, while the average speed of the aluminum atoms increases as both substances reach thermal equilibrium.", correct: false },
            { text: "The temperature, average kinetic energy and the average speed of the aluminum atoms decrease as both substances reach thermal equilibrium.", correct: true },
            { text: "The temperature and average kinetic energy increase, while the average speed of the aluminum atoms decreases as both substances reach thermal equilibrium.", correct: false },
            { text: "The temperature, average kinetic energy and the average speed of the aluminum atoms increase as both substances reach thermal equilibrium.", correct: false },
        ]
    },
    {
        //#10
        question: "50.0 grams of Aluminum (specific heat capacity = 0.900 J/g&deg;C) at 85.0&deg;C was placed into 100.0 grams of water (specific heat capacity = 4.184 J/g &deg;C) at 25.0&deg;C. The final temperature of the two substances was 30.8&deg;C. What can be said of the temperature changes for each substance?",
        answers: [
            { text: "&Delta;T<sub>Al</sub> < &Delta;T<sub>H<sub>2</sub>O</sub>", correct: false },
            { text: "&Delta;T<sub>Al</sub> = &Delta;T<sub>H<sub>2</sub>O</sub>", correct: false },
            { text: "&Delta;T<sub>Al</sub> > &Delta;T<sub>H<sub>2</sub>O</sub>", correct: true },
        ]
    },
    {
        //#11
        question: "50.0 grams of Aluminum (specific heat capacity = 0.900 J/g&deg;C) at 85.0&deg;C was placed into 100.0 grams of water (specific heat capacity = 4.184 J/g &deg;C) at 25.0&deg;C. The final temperature of the two substances was 30.8&deg;C. What is true of the amount of thermal energy exchanged?",
        answers: [
            { text: "Same magnitude of thermal energy, but opposite signs.", correct: true },
            { text: "Same magnitude of thermal energy, and same signs.", correct: false },
            { text: "Different magnitude of thermal energy, and opposite signs.", correct: false },
            { text: "Different magnitude of thermal energy, but same signs.", correct: false },
        ]
    },
    {
        //#12
        question: "15.0 grams of calcium chloride, CaCl<sub>2</sub>, is dissolved into 100.0 mL of water at 22.5&deg;C, the final temperature of the solution was 32.2&deg;C. After the dissolution took place, consider the water and what had happened to the temperature, the average kinetic energy, and the average speed.",
        answers: [
            { text: "Increase, Increase, Decrease", correct: false },
            { text: "Increase, Increase, Increase", correct: true },
            { text: "Decrease, Decrease, Decrease", correct: false },
            { text: "No change, Increase, Increase", correct: false },
        ]
    },
    {
        //#13
        question: "15.0 grams of calcium chloride, CaCl<sub>2</sub>, is dissolved into 100.0 mL of water at 22.5&deg;C, the final temperature of the solution was 32.2&deg;C. After the dissolution took place, was the dissolution reaction endothermic or exothermic?",
        answers: [
            { text: "Endothermic", correct: false },
            { text: "Exothermic", correct: true },
        ]
    },
    {
        //#14
        question: "When 39.0 grams of copper metal at 92.5&deg;C (molar mass = 63.546 g/mol) is dropped into 200. mL of water (molar mass 18.02 g/mol) at 25.0&deg;C, the two substances reach thermal equilibrium. Which substance has greater kinetic energy, particles with the greatest average speed, and highest temperature?",
        answers: [
            { text: "copper, water, copper", correct: false },
            { text: "water, water, same", correct: false },
            { text: "same, water, same", correct: true },
            { text: "water, same, copper", correct: false },
        ]
    },
    {
        //#15
        question: "50.0 mL of 0.500 M HCl was added to 50.0 mL of 0.500 M NaOH, the initial temperature of the solutions was 19.8&deg;C. The reaction below occurred: <br> HCl<sub>(aq)</sub> + NaOH<sub>(aq)</sub> &rarr; NaCl<sub>(aq)</sub> + H<sub>2</sub>O<sub>(l)</sub> <br> The final temperature of the mixture was 26.3&deg;C. Calculate the heat gained by the mixture.",
        answers: [
            { text: "1800 J", correct: false },
            { text: "2700 J", correct: true },
            { text: "3500 J", correct: false },
            { text: "4200 J", correct: false },
        ]
    },
    {
        //#16
        question: "50.0 mL of 0.500 M HCl was added to 50.0 mL of 0.500 M NaOH, the initial temperature of the solutions was 19.8&deg;C. The reaction below occurred: <br> HCl<sub>(aq)</sub> + NaOH<sub>(aq)</sub> &rarr; NaCl<sub>(aq)</sub> + H<sub>2</sub>O<sub>(l)</sub> <br> The final temperature of the mixture was 26.3&deg;C. What is the heat of reaction per mole of NaOH?",
        answers: [
            { text: "-140 kJ/mol", correct: false },
            { text: "-110 kJ/mol", correct: true },
            { text: "-85 kJ/mol", correct: false },
            { text: "-65 kJ/mol", correct: false },
        ]
    },
    {
        //#17
        question: "A 25.0 g sample of water was cooled from 23.9&deg;C to 12.7&deg;C, how much heat was released? (Assume that the specific heat of water is 4.18 J/g&deg;C)",
        answers: [
            { text: "850 J", correct: false },
            { text: "1170 J", correct: true },
            { text: "1450 J", correct: false },
            { text: "2100 J", correct: false },
        ]
    },
    {
        //#18
        question: "75.0 grams of an unknown metal was heated to 95.0&deg;C, it was then placed into 150.0 grams of water at 23.1&deg;C, when the metal and water reached thermal equilibrium, the temperature was 27.8&deg;C. Calculate the specific heat of the metal. (Assume that the specific heat of water is 4.18 J/g&deg;C)",
        answers: [
            { text: "1.25 J/g&deg;C", correct: false },
            { text: "0.90 J/g&deg;C", correct: false },
            { text: "0.58 J/g&deg;C", correct: true },
            { text: "0.3 J/g&deg;C", correct: false },
        ]
    },
    {
        //#19
        question: "In an insulated cup of negligible heat capacity, 100. g of water at 50.0&deg;C is mixed with 80.0 g of water at 10.0&deg;C. What is the final temperature of the mixture?",
        answers: [
            { text: "18.5&deg;C", correct: false },
            { text: "25.0&deg;C", correct: false },
            { text: "32.2&deg;C", correct: true },
            { text: "40.0&deg;C", correct: false },
        ]
    },
    {
        //#20
        question: "A hot piece of copper was dropped into 155 mL of water at 23.6&deg;C and 2.1 kJ of energy is transferred to the water. What is the final temperature of the water?",
        answers: [
            { text: "24.7&deg;C", correct: false },
            { text: "25.2&deg;C", correct: false },
            { text: "26.0&deg;C", correct: false },
            { text: "26.8&deg;C", correct: true },
        ]
    },
    {
        //#21
        question: "When 5.00 grams of ammonium chloride, NH<sub>4</sub>Cl, is added to 100. mL of water the temperature drops by 4.2&deg;C , how much would the temperature change if 10.0 grams is added to 1000 mL of water?",
        answers: [
            { text: "0.37&deg;C", correct: false },
            { text: "0.84&deg;C", correct: true },
            { text: "1.25&deg;C", correct: false },
            { text: "5.20&deg;C", correct: false },
        ]
    },
    {
        //#22
        question: "2.71 grams of a fuel was burned releasing 4.10 kJ of energy into some amount of water. The water changed from 22.2&deg;C to 53.1&deg;C. How much water was heated?",
        answers: [
            { text: "24.6g", correct: false },
            { text: "28.9g", correct: false },
            { text: "31.7g", correct: true },
            { text: "52.4g", correct: false },
        ]
    },
    {
        //#23
        question: "A 125.0 gram sample of a metal, X, was heated to 400.0&deg;C and placed onto a 1.000 kg block of ice at 0.0&deg;C. Some of the ice melted, but after the metal and ice reached thermal equilibrium the temperature of the metal, ice and liquid water remained at 0.0&deg;C. If the specific heat of the metal was 0.245 J/g&deg;C, calculate the heat lost by the metal?",
        answers: [
            { text: "-17400 J", correct: false },
            { text: "-15750 J", correct: false },
            { text: "-12250 J", correct: true },
            { text: "-9500 J", correct: false },
        ]
    },
    {
        //#24
        question: "Calculate the amount of energy needed to boil 91.2 grams of carbon tetrachloride, CCl<sub>4</sub>, at its boiling point, 350.0 K. <br> &Delta;H<sub>fus</sub>= 2.67 kJ/ mole	&Delta;H<sub>vap</sub>= 30.0 kJ/mole	Molar mass, CCL<sub>4</sub> = 153.82 g/mole",
        answers: [
            { text: "4.59 kJ", correct: false },
            { text: "15.6 kJ", correct: false },
            { text: "16.5 kJ", correct: false },
            { text: "17.8 kJ", correct: true },
        ]
    },
    {
        //#25
        question: "The heat of fusion for water is 6.01 kJ/mole and the heat of vaporization for water is 40.7 kJ/mol, how much energy is needed to melt 22.5 grams of ice?",
        answers: [
            { text: "1.74 kJ", correct: false },
            { text: "4.31 kJ", correct: false },
            { text: "7.51 kJ", correct: true },
            { text: "8.13 kJ", correct: false },
        ]
    },
    {
        //#26
        question: "Aluminum melts /freezes at 933 K. How much energy is required to freeze 2.50 moles of Al at 933 K? <br> &Delta;H<sub>fus,Al</sub>=10.9 kJ/mole, &Delta;H<sub>vap,Al</sub>= 284 kJ/mole",
        answers: [
            { text: "-27.3 kJ", correct: true },
            { text: "-15.2 kJ", correct: false },
            { text: "-8.9 kJ", correct: false },
            { text: "-3.1 kJ", correct: false },
        ]
    },
    {
        //#27
        question: "Naphthalene is a primary component of mothballs; they readily sublime at room temperature. The heat of sublimation for naphthalene, C<sub>10</sub>H<sub>8</sub>, is 72.9 kJ/mol. How much energy is needed to sublime 15.0 grams of naphthalene? (Molar mass = 128.17 g/mol)",
        answers: [
            { text: "3.98 kJ", correct: false },
            { text: "8.53 kJ", correct: true },
            { text: "10.24 kJ", correct: false },
            { text: "18.02 kJ", correct: false },
        ]
    },
    {
        //#28
        question: "2H<sub>2</sub>S<sub>2(g)</sub> + 3O<sub>2(g)</sub> &rarr; 2H<sub>2</sub>O<sub>(l)</sub> + 2SO<sub>2(g)</sub> &Delta;H&deg;= -1120kJ/mol<sub>rxn</sub> <br> If you were to react 7.25 moles of H<sub>2</sub>S with 9.34 moles of O<sub>2</sub> , how much heat would be released?",
        answers: [
            { text: "-12070 kJ", correct: false },
            { text: "-9380 kJ", correct: false },
            { text: "-7240 kJ", correct: false },
            { text: "-3490 kJ", correct: true },
        ]
    },
    {
        //#29
        question: "2H<sub>2(g)</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O<sub>(g)</sub>	&Delta;&deg;= -481.6 kJ/mol<sub>rxn</sub> <br> If you performed this reaction and produced 92.1 kJ of energy, how many moles of water were also produced?",
        answers: [
            { text: "2.905 mol H<sub>2</sub>O", correct: false },
            { text: "1.250 mol H<sub>2</sub>O", correct: false },
            { text: "0.382 mol H<sub>2</sub>O", correct: true },
            { text: "0.050 mol H<sub>2</sub>O", correct: false },
        ]
    },
    {
        //#30
        question: "Hydrazine, N<sub>2</sub>H<sub>4</sub>, is formed through the reaction below: <br> 2H<sub>2 (g)</sub> + N<sub>2 (g)</sub> &rarr; N<sub>2</sub>H<sub>4 (l)</sub>	&Delta;H&deg; = +50.63kJ/mol<sub>rxn</sub> <br> Calculate the standard enthalpy change when 0.452 moles of N<sub>2</sub>H<sub>4</sub> is formed at 1 atm and 298 K. ",
        answers: [
            { text: "3.8 kJ", correct: false },
            { text: "11.2 kJ", correct: false },
            { text: "18.6 kJ", correct: false },
            { text: "22.9 kJ", correct: true },
        ]
    },
    {
        //#31
        question: "Given the reaction: <br> AB<sub>(g)</sub> + 2CD<sub>(g)</sub> &rarr: 3EF<sub>(g)</sub>	&Delta;H = -9.52 kJ <br> How many moles of EF would also be produced if the reaction gave off 750 J?",
        answers: [
            { text: "0.08 moles", correct: false },
            { text: "0.12 moles", correct: false },
            { text: "0.24 moles", correct: true },
            { text: "0.48 moles", correct: false },
        ]
    },
    {
        //#32
        question: "Calculate the energy released in the reaction between hydrogen and oxygen forming water as shown: <br> H<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; H<sub>2</sub>O<sub>(g)</sub>",
        answers: [
            { text: "-485 kJ", correct: true },
            { text: "-345 kJ", correct: false },
            { text: "-250 kJ", correct: false },
            { text: "-125 kJ", correct: false },
        ]
    },   
    {
        //#33
        question: "Is the reaction between CH<sub>2</sub>Cl<sub>2(g)</sub> + Br<sub>2(g)</sub> &rarr;  CH<sub>2</sub>Br<sub>2(g)</sub> + Cl<sub>2(g)</sub> endothermic or exothermic?",
        answers: [
            { text: "Exothermic", correct: false },
            { text: "Endothermic", correct: true },
        ]
    },  
    {
       //#34
       question: "What is the reaction enthalpy for the decomposition of baking soda? <br> 2 NaHCO<sub>3(s)</sub> &rarr; Na<sub>2</sub>CO<sub>3(s)</sub> + CO<sub>2(g)</sub> +H<sub>2</sub>O<sub>(g)</sub>",
       answers: [
           { text: "48.8 kJ", correct: false },
           { text: "129.5 kJ", correct: true },
           { text: "270.9 kJ", correct: false },
           { text: "342.7 kJ", correct: false },
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