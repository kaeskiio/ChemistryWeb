//Unit 2
const questions = [
    //Topic 2.1
    {
        //#1
        question: "Place the following bonds in order of increasing polarity. <br><br>C-H, C-F, C-C, C-O, Ca-C",
        answers: [
            { text: "C-O < C-H < C-C < C-F < Ca-C", correct: false },
            { text: "C-H < C-F < C-O < C-C < Ca-C", correct: false },
            { text: "C-C < C-H < C-O < C-F < Ca-C", correct: true },
            { text: "Ca-C < C-F < C-O < C-H < C-C", correct: false },
        ]
    }, 
    {
        //#2
        question: "Without referencing electronegativity values, place the following in order from least polar to most polar. <br><br> Si-F, S-F, P-F",
        answers: [
            { text: "S-F, Si-F, P-F", correct: false },
            { text: "P-F, S-F, Si-F", correct: false },
            { text: "Si-F, P-F, S-F", correct: false },
            { text: "S-F, P-F, Si-F", correct: true },
        ]
    }, 
    {
        //#3
        question: "Without referencing electronegativity values, place the following in order from least polar to most polar. <br><br> F-F, F-Br, F-Cl ",
        answers: [
            { text: "F-F, F-Br, F-Cl", correct: false },
            { text: "F-F, F-Cl, F-Br", correct: true },
            { text: "F-Cl, F-Br, F-F", correct: false },
            { text: "F-Br, F-Cl, F-F", correct: false },
        ]
    }, 
    {
        //#4
        question: "Inspect the compound lithium hydroxide, LiOH. Is the bond/attraction between the Li - O the same as O-H?",
        answers: [
            { text: "Yes, Li-O would be ionic, and O-H would be polar covalent", correct: false },
            { text: "Yes, Li-O would be ionic, and O-H would be nonpolar covalent", correct: false },
            { text: "No, Li-O would be ionic, and O-H would be nonpolar covalent", correct: false },
            { text: "No, Li-O would be ionic, and O-H would be polar covalent", correct: true },
        ]
    }, 
    {
        //#5
        question: "Based on the locations on the periodic table, rank the following in terms of increasing metallic character.",
        answers: [
            { text: "Ne, Se, Ge, Ga, Cu, Ca, Ba", correct: true },
            { text: "Se, Ne, Ge, Ga, Cu, Ca, Ba", correct: false },
            { text: "Ne, Se, Ge, Ga, Cu, Ca, Ba", correct: false },
            { text: "Ba, Ca, Cu, Ga, Ge, Se, Ne", correct: false },
        ]
    },    
    //Topic 2.2
    {
        //#6
        question: "Place the following in order from strongest bond energy to weakest. <br><br> C-Cl, C-Br, C-F",
        answers: [
            { text: "C-Cl, C-Br, C-F", correct: false },
            { text: "C-Cl, C-F, C-Br", correct: false },
            { text: "C-F, C-Cl, C-Br", correct: true },
            { text: "C-F, C-Br, C-Cl", correct: false },
        ]
    }, 
    //Topic 2.3
    {
        //#7
        question: "An ionic solid does not conduct electricity, but does conduct electricity when dissolved in water. Which of the following explains why?",
        answers: [
            { text: "Water is polar so it readily conducts electricity. The ionic solid does not play a role.", correct: false },
            { text: "The ionic solid has too small of spaces between particles for electricity to flow. Water moves the particles apart enough to conduct electricity.", correct: false },
            { text: "Ionic solids do not have free movement of ions. When dissolved, the ions are free moving. This allows electricity to flow.", correct: true },
            { text: "Ionic solids are too big to conduct electricity. When dissolved, the solid gets smaller and then can conduct electricity.", correct: false },
        ]
    }, 
    {
        //#8
        question: "The energy required to dissociate an ionic solid into gaseous ions is known as the lattice energy. Sodium chloride, NaCl, has a lattice energy of 787.3 kJ/mol. Sodium oxide, Na<sub>2</sub>O has a lattice energy of 2564 kJ/mol. Which explanation best accounts for this difference?",
        answers: [
            { text: "Chloride has a smaller ionic radius than oxide, resulting in a lower lattice energy.", correct: false },
            { text: "Chloride cannot form hydrogen bonds.", correct: false },
            { text: "There are two sodium ions in the chemical formula, meaning there are more ions that need to become a gas.", correct: false },
            { text: "Oxygen has a -2 charge, whereas Cl has a -1 charge. This results in a stronger attraction for Na<sub>2</sub>O.", correct: true },
        ]
    }, 
    //Topic 2.4
    {
        //#9
        question: "Compare the metals calcium and magnesium. Which metal would be stronger (more tightly held together)? Justify your selection.",
        answers: [
            { text: "Ca because it has more protons, which increases the nuclear charge and strengthens the metallic bonds.", correct: false },
            { text: "Ca because it has a larger atomic radius, allowing for more room for the electrons to move and form stronger metallic bonds.", correct: false },
            { text: "Mg because the atomic radius is smaller with the same number of valence electrons, therefore there is more attraction.", correct: true },
            { text: "Mg because it is located higher on the periodic table, meaning it has more energy levels and thus stronger bonds.", correct: false },
        ]
    }, 
    {
        //#10
        question: "A pure metal and an interstitial alloy containing the same metal were examined. Predict which substance will have a greater density and justify your selection.",
        answers: [
            { text: "The interstitial alloy would have a greater density because the smaller atoms fit into holes of the bigger atoms, so there is more mass for the same volume.", correct: true },
            { text: "The pure metal would have a greater density because it has a uniform composition, making it more compact.", correct: false },
            { text: "The interstitial alloy would have a lower density because the presence of smaller atoms disrupts the structure, creating more empty space.", correct: false },
            { text: "The pure metal would have a greater density because it is free from impurities, which makes the metallic bonds stronger and the structure more tightly packed.", correct: false },
        ]
    }, 
    {
        //#11
        question: "Interstitial alloys are usually less malleable than the pure metals. Based on their structure, propose a reason for this decrease in malleability.",
        answers: [
            { text: "The additional atoms in the interstitial holes create more free electrons, which increases the rigidity of the metal.", correct: false },
            { text: "The additional atoms in the interstitial holes stop the metals from sliding past each other.", correct: true },
            { text: "The additional atoms in the interstitial holes absorb more energy, making the metal more brittle and less malleable.", correct: false },
            { text: "The additional atoms in the interstitial holes form stronger metallic bonds, making the structure more rigid and less capable of deforming.", correct: false },
        ]
    }, 
    //Topic 2.7
    {
        //#12
        question: "Determine the molecular geometry and predict the bond angle of the following: ICl<sub>2</sub><sup>-</sup>",
        answers: [
            { text: "Linear, 120&deg;", correct: false },
            { text: "Linear, 180&deg;", correct: true },
            { text: "Trigonal Planar 180&deg;", correct: false },
            { text: "Trigonal Planar, 120&deg;", correct: false },
        ]
    }, 
    {
        //#13
        question: "Determine the molecular geometry and predict the bond angle of the following: BF<sub>3</sub>",
        answers: [
            { text: "Linear, 180&deg;", correct: false },
            { text: "Trigonal Planar 180&deg;", correct: false },
            { text: "Linear, 120&deg;", correct: true },
            { text: "Trigonal Planar, 120&deg;", correct: false },
        ]
    }, 
    {
        //#14
        question: "Indicate the hybridization on the central atom of CN<sup>-</sup> and the total number of sigma and pi bonds in the molecule.",
        answers: [
            { text: "<b>Hyb:</b> sp, <b>Sigma: </b> 1, <b>Pi: </b>1 <br>", correct: false },
            { text: "<b>Hyb:</b> sp, <b>Sigma: </b> 1, <b>Pi: </b>2 <br>", correct: true },
            { text: "<b>Hyb:</b> sp<sup>2</sup>, <b>Sigma: </b> 1, <b>Pi: </b>1 <br>", correct: false },
            { text: "<b>Hyb:</b> sp<sup>2</sup>, <b>Sigma: </b> 1, <b>Pi: </b>2 <br>", correct: false },
        ]
    }, 
    {
        //#15
        question: "Indicate the hybridization on the central atom of H<sub>2</sub>CO and the total number of sigma and pi bonds in the molecule.",
        answers: [
            { text: "<b>Hyb:</b> sp, <b>Sigma: </b> 3, <b>Pi: </b>1 <br>", correct: false },
            { text: "<b>Hyb:</b> sp, <b>Sigma: </b> 3, <b>Pi: </b>2 <br>", correct: false },
            { text: "<b>Hyb:</b> sp<sup>2</sup>, <b>Sigma: </b> 1, <b>Pi: </b>1 <br>", correct: false },
            { text: "<b>Hyb:</b> sp<sup>2</sup>, <b>Sigma: </b> 3, <b>Pi: </b>1 <br>", correct: true },
        ]
    }, 
    {
        //#16
        question: "Which molecule has a trigonal pyramidal geometry?",
        answers: [
            { text: "H<sub>2</sub>O", correct: false },
            { text: "CO<sub>2</sub>", correct: false },
            { text: "NH<sub>3</sub>", correct: true },
            { text: "CH<sub>4</sub>", correct: false },
        ]
    }, 
    {
        //#17
        question: "What is the molecular geometry of sulfur hexafluoride (SF<sub>6</sub>)?",
        answers: [
            { text: "Square planar", correct: false },
            { text: "Trigonal bipyramidal", correct: false },
            { text: "Tetrahedral", correct: false },
            { text: "Octahedral", correct: true },
        ]
    }, 
    {
        //#18
        question: "Is ammonia (NH<sub>3</sub>) polar or nonpolar? Explain using molecular shape and polar bonds.",
        answers: [
            { text: "Nonpolar because the N-H bonds are evenly distributed around the central nitrogen atom, canceling out any dipole moments.", correct: false },
            { text: "Polar since the central atom has lone pairs. N-H is a polar bond and since the bonds are polar and the molecule is asymmetrical, the polar bonds don't cancel.", correct: true },
            { text: "Nonpolar since the molecule is symmetrical, which makes the polar bonds cancel out.", correct: false },
            { text: "Polar because the N-H bonds are nonpolar, but the lone pair on the nitrogen creates a dipole moment.", correct: false },
        ]
    },
    {
        //#19
        question: "Indicate the hybridization of the central atom of Boron trifluoride, BF<sub>3</sub>.",
        answers: [
            { text: "sp<sup>3</sup>", correct: false },
            { text: "sp", correct: false },
            { text: "sp<sup>3</sup>d", correct: false },
            { text: "sp<sup>2</sup>", correct: true },
        ]
    },
    {
        //#20
        question: "Indicate the hybridization of the central atom of Carbonate Ion, CO<sub>3</sub><sup>2-</sup>.",
        answers: [
            { text: "sp<sup>3</sup>", correct: false },
            { text: "sp<sup>2</sup>", correct: true },
            { text: "sp", correct: false },
            { text: "sp<sup>3</sup>d", correct: false },
        ]
    },
    {
        //#21
        question: "Indicate the hybridization of the central atom of Oxygen difluoride, OF<sub>2</sub>.",
        answers: [
            { text: "sp<sup>3</sup>", correct: true },
            { text: "sp<sup>2</sup>", correct: false },
            { text: "sp", correct: false },
            { text: "sp<sup>3</sup>d", correct: false },
        ]
    },  
    {
        //#22
        question: "Indicate the hybridization of the central atom of Hydrogen cyanide, HCN.",
        answers: [
            { text: "sp<sup>3</sup>", correct: false },
            { text: "sp<sup>2</sup>", correct: false },
            { text: "sp", correct: true },
            { text: "sp<sup>3</sup>d", correct: false },
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
        if(score < 15*.7)
        {
            questionElement.innerHTML = `You scored ${score} out of ${15}. Play again to improve your score!`;
        }
        else{
            questionElement.innerHTML = `You scored ${score} out of ${15}!`;
        }
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton(){
        console.log("handleNextButton");
        currentQuestionIndex++;
        if(currentQuestionIndex< 15){
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
        if(currentQuestionIndex < 15){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    
    
    
    startQuiz();