const questions = [
        {//#1 A
            question: "1. A 0.5 mol sample of He(g) and a 0.5 mol sample of Ne(g) are placed separately in two 10.0 L rigid containers at 25°C. Each container has a pinhole opening. Which of the gases, He(g) or Ne(g), will escape faster through the pinhole and why?",
            image: "",
            answers: [
                { text: "He(g) will escape faster because the He(g) atoms are moving at a higher average speed than the Ne(g) atoms.", image: "", correct: true },
                { text: "Ne(g) will escape faster because its initial pressure in the container is higher.", correct: false },
                { text: "Ne(g) will escape faster because the Ne(g) atoms have a higher average kinetic energy than the He(g) atoms.", correct: false },
                { text: "Both gases will escape at the same rate because the atoms of both gases have the same average kinetic energy.", correct: false }
            ]
        },
        {//#2 C
            question: "2. The lattice energy of a salt is related to the energy required to separate the ions. For which of the following pairs of ions is the energy that is required to separate the ions largest? (Assume that the distance between the ions in each pair is equal to the sum of the ionic radii.)",
            answers: [
                { text: "Na<sup>+</sup> (g) and Cl<sup>-</sup> (g)", correct: false },
                { text: "Cs<sup>+</sup> (g) and Br<sup>-</sup> (g)", correct: false },
                { text: "Mg<sup>2+</sup> (g) and O<sup>2-</sup> (g)", correct: true },
                { text: "Ca<sup>2+</sup> (g) and O<sup>2-</sup> (g)", correct: false }
            ]
        },
        {//#3 D
            question: "3. The mass spectrum of element X is presented in the diagram above. Based on the spectrum, which of the following can be concluded about element X?",
            image: "assets/three.png",
            answers: [
                { text: "X is a transition metal, and each peak represents an oxidation state of the metal.", correct: false },
                { text: "X contains five electron sublevels.", correct: false },
                { text: "The atomic mass of X is 90.", correct: false },
                { text: "The atomic mass of X is between 90 and 92.", correct: true }
            ]
        },
        {//#4 A
            question: "4. Which of the following diagrams best depicts an alloy of Ni and B?",
            image: "",
            answers: [
                { text: "", image: "assets/fourA.jpg", correct: true },
                { text: "", image: "assets/fourB.jpg", correct: false },
                { text: "", image: "assets/fourC.jpg", correct: false  },
                { text: "", image: "assets/fourD.jpg", correct: false  }
            ]
        },
        {//#5 C
            question: "5. Which of the following is the strongest type of interaction that occurs between the atoms within the circled areas of the two molecules represente above?",
            image: "assets/five.jpg",
            answers: [
                { text: "Polar covalent bond", image: "", correct: false },
                { text: "Nonpolar covalent bond", image: "", correct: false },
                { text: "Hydrogen bond", image: "", correct: true  },
                { text: "London dispersion forces", image: "", correct: false  }
            ]
        },
        {//#6 C
            question: "6. A hot iron ball is dropped into a 200. g sample of water initially at 50.° C. If 8.4 kJ of heat is transferred from the ball to the water, what is the final temperature of the water? (The specific heat of water is 4.2 J/(g·°C).)",
            image: "",
            answers: [
                { text: "40.°C", image: "", correct: false },
                { text: "51°C", image: "", correct: false },
                { text: "60.°C", image: "", correct: true  },
                { text: "70.°C", image: "", correct: false  }
            ]
        },
        {//#7 C
            question: "7. At 27°C, five identical rigid 2.0 L vessels are filled with N<sub>2</sub>(g) and sealed. Four of the five vessels also contain a 0.050 mol sample of NaHCO<sub>3</sub>(s), NaBr(s), Cu(s), or I<sub>2</sub>(s), as shown in the diagram above. The volume taken up by the solids is negligible, and the initial pressure of N<sub>2</sub>(g) in each vessel is 720 mmHg. All four vessels are heated to 127°C and allowed to reach a constant pressure. At 127°C, the pressure in vessel 1 is found to be higher than that in vessel 2. Which of the following reactions best accounts for the observation?",
            image:"assets/seven.jpg",
            answers: [
                { text: "NaHCO<sub>3</sub>(s) &rarr; Na(s) + HCO<sub>3</sub>(s)", image: "", correct: false },
                { text: "NaHCO<sub>3</sub>(s) &rarr; NaH(s) + CO<sub>3</sub>(s)", image: "", correct: false },
                { text: "2 NaHCO<sub>3</sub>(s) &rarr; Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g)", image: "", correct: true  },
                { text: "2 NaHCO<sub>3</sub>(s) + N<sub>2</sub>(g) &rarr; 2 NaNO<sub>3</sub>(s) + C<sub>2</sub>H<sub>2</sub>(g)", image: "", correct: false  }
            ]
        },
        {//#8 B
            question: "8. At 127°C, the entire sample of I<sub>2</sub> is observed to have vaporized. How does the mass of vessel 5 at 127°C compare to its mass at 27°C?",
            image: "",
            answers: [
                { text: "The mass is less, since the I<sub>2</sub> is in the vapor phase.", image: "", correct: false },
                { text: "The mass is the same, since the number of each type of atom in the vessel is constant.", image: "", correct: true },
                { text: "The mass is greater, since the I<sub>2</sub> will react with N<sub>2</sub> to form NI<sub>3</sub>, which has a greater molar mass.", image: "", correct: false  },
                { text: "The mass is greater, since the pressure is greater and the particles have a higher average kinetic energy.", image: "", correct: false  }
            ]
        },
        {//#9 A
            question: "9. The gas particles in vessel 3 at 27°C are represented in the diagram above. The lengths of the arrows represent the speeds of the particles. Which of the following diagrams best represents the particles when vessel 3 is heated to 127°C?",
            image: "assets/nine.jpg",
            answers: [
                { text: "", image: "assets/nineA.jpg", correct: true },
                { text: "", image: "assets/nineB.jpg", correct: false },
                { text: "", image: "assets/nineC.jpg", correct: false },
                { text: "", image: "assets/nineD.jpg", correct: false },
            ]
        },
        {//#10 D
            question: "10. An acetate buffer solution is prepared by combining 50. mL of 0.20 M acetic acid, HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>(aq), and 50. mL of 0.20 M sodium acetate, NaC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>(aq). A 5.0 mL sample of 0.10 M NaOH(aq) is added to the buffer solution. Which of the following is a correct pairing of the acetate species present in greater concentration and of the pH of the solution after the NaOH(aq) is added? (The pKa of acetic acid is 4.7.)",
            image: "",
            answers: [
                { text: "HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>, pH < 4.7", image: "", correct: false },
                { text: "HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>, pH > 4.7", image: "", correct: false },
                { text: "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>, pH < 4.7", image: "", correct: false },
                { text: "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>, pH > 4.7", image: "", correct: true },
            ]
        },
        {//#11 B
            question: "11. The molecular formula and molar mass of two straight-chain hydrocarbons are listed in the table above. Based on the information in the table, which compound has the higher boiling point, and why is that compound’s boiling point higher?",
            image: "assets/eleven.jpg",
            answers: [
                { text: "C<sub>4</sub>H<sub>10</sub>, because it has more hydrogen atoms, resulting in more hydrogen bonding", image: "", correct: false },
                { text: "C<sub>4</sub>H<sub>10</sub>, because it has more electrons, resulting in greater polarizability and stronger dispersion forces", image: "", correct: true },
                { text: "C<sub>2</sub>H<sub>6</sub>, because its molecules are smaller and they can get closer to one another, resulting in stronger dispersion forces", image: "", correct: false },
                { text: "C<sub>2</sub>H<sub>6</sub>, because its molecules are more polar, resulting in stronger dipole-dipole attractions", image: "", correct: false },
            ]
        },
        {//#12 B
            question: "12. The first five ionization energies of a second-period element are listed in the table above. Which of the following correctly identifies the element and best explains the data in the table?",
            image: "assets/twelve.jpg",
            answers: [
                { text: "B, because it has five core electrons", image: "", correct: false },
                { text: "B, because it has three valence electrons", image: "", correct: true },
                { text: "N, because it has five valence electrons", image: "", correct: false },
                { text: "N, because it has three electrons in the <i>p</i> sublevel", image: "", correct: false },
            ]
        },
        {//#13 A
            question: "13. The exothermic dissolution of Mg(OH)<sub>2</sub>(s) in water is represented by the equation above. The K<sub>sp</sub> of Mg(OH)<sub>2</sub> is 1.8 &times; 10<sup>-11</sup>. Which of the following changes will increase the solubility of Mg(OH)<sub>2</sub> in an aqueous solution?",
            image: "assets/thirteen.jpg",
            answers: [
                { text: "Decreasing the pH", image: "", correct: true },
                { text: "Increasing the pH", image: "", correct: false },
                { text: "Adding NH<sub>3</sub> to the solution", image: "", correct: false },
                { text: "Adding Mg(NO<sub>3</sub>)<sub>2</sub> to the solution", image: "", correct: false },
            ]
        },
        {//#14 A
            question: "14. The heating curve for a sample of pure ethanol is provided above. The temperature was recorded as a 50.0 g sample of solid ethanol was heated at a constant rate. Which of the following explains why the slope of segment <i>T</i> is greater than the slope of segment <i>R</i> ?",
            image: "assets/fourteen.jpg",
            answers: [
                { text: "The specific heat capacity of the gaseous ethanol is less than the specific heat capacity of liquid ethanol.", image: "", correct: true },
                { text: "The specific heat capacity of the gaseous ethanol is greater than the specific heat capacity of liquid ethanol.", image: "", correct: false },
                { text: "The heat of vaporization of ethanol is less than the heat of fusion of ethanol.", image: "", correct: false },
                { text: "The heat of vaporization of ethanol is greater than the heat of fusion of ethanol.", image: "", correct: false },
            ]
        },
        {//#15 D
            question: "15. A solution is prepared by mixing 50 mL of 1 M NaH<sub>2</sub>PO<sub>4</sub> with 50 mL of 1 M Na<sub>2</sub>HPO<sub>4</sub>. On the basis of the information above, which of the following species is present in the solution at the <u>lowest</u> concentration?",
            image: "assets/fifteen.jpg",
            answers: [
                { text: "Na<sup>+</sup>", image: "", correct: false },
                { text: "HPO<sub>4</sub><sup>2-</sup>", image: "", correct: false },
                { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", image: "", correct: false },
                { text: "PO<sub>4</sub><sup>3-</sup>", image: "", correct: true },
            ]
        },
        {//#16 B
            question: "16. The temperature of the reaction mixture is held constant. In which direction will the reaction proceed?",
            image: "assets/sixteen.jpg",
            answers: [
                { text: "The reaction will form more products.", image: "", correct: false },
                { text: "The reaction will form more reactant.", image: "", correct: true },
                { text: "The mixture is at equilibrium, so there will be no change.", image: "", correct: false },
                { text: "It cannot be determined unless the volume of the container is known.", image: "", correct: false },
            ]
        },
        {//#17 C
            question: "17. Which of the following changes will most likely increase the rate of reaction between Li(s) and water?",
            image: "assets/seventeen.jpg",
            answers: [
                { text: "Using 125 mL of water instead of 100 mL", image: "", correct: false },
                { text: "Using a 0.25 g sample of Li(s) instead of a 0.35 g sample", image: "", correct: false },
                { text: "Using a 0.35 g sample of Li(s) cut into small pieces", image: "", correct: true },
                { text: "Decreasing the water temperature before adding the Li(s)", image: "", correct: false },
            ]
        },
        {//#18 B
            question: "18. What will be the effect on the amount of gas produced if the experiment is repeated using 0.35 g of K(s) instead of 0.35 g of Li(s)?",
            image: "assets/seventeen.jpg",
            answers: [
                { text: "No gas will be produced when K(s) is used.", image: "", correct: false },
                { text: "Some gas will be produced but less than the amount of gas produced with Li(s).", image: "", correct: true },
                { text: "Equal quantities of gas will be produced with the two metals.", image: "", correct: false },
                { text: "More gas will be produced with K(s) than with Li(s).", image: "", correct: false },
            ]
        },
        {//#19 B
            question: "19. On the basis of the pH curve, the p<i>K<sub>a</sub></i> value of the acid is closest to",
            image: "assets/seventeen.jpg",
            answers: [
                { text: "4", image: "", correct: false },
                { text: "5", image: "", correct: true },
                { text: "8", image: "", correct: false },
                { text: "12", image: "", correct: false },
            ]
        },
        {//#20 B
            question: "20. Which of the following is the balanced net-ionic equation for the reaction between Li(s) and water?",
            image: "assets/seventeen.jpg",
            answers: [
                { text: "2 Li(s) + 2 H<sup>+</sup>(aq) + 2 OH<sup>−</sup>(aq) &rarr; 2 Li<sup>+</sup>(aq) + 2 OH<sup>−</sup>(aq) + H<sub>2</sub>(g)", image: "", correct: false },
                { text: "2 Li(s) + 2 H<sub>2</sub>O(l) &rarr; 2 Li<sup>+</sup>(aq) + 2 OH<sup>−</sup>(aq) + H<sub>2</sub>(g)", image: "", correct: true },
                { text: "2 Li(s) + 2 H<sub>2</sub>O(l) &rarr; 2 LiOH(s) + H<sub>2</sub>(g)", image: "", correct: false },
                { text: "2 Li(s) + 2 H<sub>2</sub>O(l) &rarr; 2 LiH(s) + H<sub>2</sub>(g)", image: "", correct: false },
            ]
        },
        {//#21 D
            question: "21. Benzene, C<sub>6</sub>H<sub>6</sub>, has the structure shown above. Considering the observation that benzene is only sparingly soluble in water, which of the following best describes the intermolecular forces of attraction between water and benzene?",
            image: "assets/twentyone.jpg",
            answers: [
                { text: "Benzene is nonpolar, therefore there are no forces between water and benzene.", image: "", correct: false },
                { text: "The H atoms in benzene form hydrogen bonds with the O atoms in water.", image: "", correct: false },
                { text: "Benzene is hydrophobic, therefore there is a net repulsion between water and benzene.", image: "", correct: false },
                { text: "There are dipole-induced dipole and London dispersion interactions between water and benzene.", image: "", correct: true },
            ]
        },
        {//#22 B
            question: "22. Acid-dissociation constants of two acids are listed in the table above. A 20. mL sample of a 0.10 M solution of each acid is titrated to the equivalence point with 20. mL of 0.10 M NaOH. Which of the following is a true statement about the pH of the solutions at the equivalence point?",
            image: "assets/twentytwo.jpg",
            answers: [
                { text: "Solution 1 has a higher pH at the equivalence point because CH<sub>3</sub>CO<sub>2</sub>H is the stronger acid.", image: "", correct: false },
                { text: "Solution 1 has a higher pH at the equivalence point because CH<sub>3</sub>CO<sub>2</sub>H has the stronger conjugate base.", image: "", correct: true },
                { text: "Solution 1 has a lower pH at the equivalence point because CH<sub>3</sub>CO<sub>2</sub>H is the stronger acid.", image: "", correct: false },
                { text: "Solution 1 has a lower pH at the equivalence point because CH<sub>3</sub>CO<sub>2</sub>H has the stronger conjugate base.", image: "", correct: false },
            ]
        },
        {//#23 C
            question: "23. A 1.0 g sample of a cashew was burned in a calorimeter containing 1000. g of water, and the temperature of the water changed from 20.0°C to 25.0°C. In another experiment, a 3.0 g sample of a marshmallow was burned in a calorimeter containing 2000. g of water, and the temperature of the water changed from 25.0°C to 30.0°C. Based on the data, which of the following can be concluded about the energy content for 1.0 g of each of the two substances? (The specific heat of water is 4.2 J/(g⋅°C).)",
            image: "assets/twentytwo.jpg",
            answers: [
                { text: "The combustion of 1.0 g of cashew releases less energy than the combustion of 1.0 g of marshmallow.", image: "", correct: false },
                { text: "The combustion of 1.0 g of cashew releases the same amount of energy as the combustion of 1.0 g of marshmallow.", image: "", correct: false },
                { text: "The combustion of 1.0 g of cashew releases more energy than the combustion of 1.0 g of marshmallow.", image: "", correct: true },
                { text: "No comparison can be made because the two systems started with different masses of food, different masses of water, and different initial temperatures.", image: "", correct: false },
            ]
        },
        {//#24 B
            question: "24. The reaction between NO(g) and O<sub>2</sub>(g) to produce NO<sub>2</sub>(g) in a rigid reaction vessel is represented in the diagram above. The pressure inside the container is recorded using a pressure gauge. Which of the following statements correctly predicts the change in pressure as the reaction goes to completion at constant temperature, and provides the correct explanation?",
            image: "assets/twentyfour.jpg",
            answers: [
                { text: "The pressure will increase because the product molecules have a greater mass than either of the reactant molecules.", image: "", correct: false },
                { text: "The pressure will decrease because there are fewer molecules of product than of reactants.", image: "", correct: true },
                { text: "The pressure will decrease because the product molecules have a lower average speed than the reactant molecules.", image: "", correct: false },
                { text: "The pressure will not change because the total mass of the product molecules is the same as the total mass of the reactant molecules.", image: "", correct: false },
            ]
        },
        {//#25 C
            question: "25. Which of the following identifies the element(s) being oxidized and reduced in the reaction?",
            image: "assets/twentyfivetop.jpg",
            imageBottom: "assets/twentyfivebottom.jpg",
            answers: [
                { text: "Hydrogen is oxidized and oxygen is reduced.", image: "", correct: false },
                { text: "Oxygen is oxidized and hydrogen is reduced.", image: "", correct: false },
                { text: "Oxygen is both oxidized and reduced.", image: "", correct: true },
                { text: "No elements are oxidized or reduced; the reaction is not a redox reaction.", image: "", correct: false },
            ]
        },
        {//#26 A
            question: "26. The O<sub>2</sub>(g) produced from the decomposition of the 1.0 L sample of H<sub>2</sub>O<sub>2</sub>(aq) is collected in a previously evacuated 10.0 L flask at 300. K. What is the approximate pressure in the flask after 400. s? (For estimation purposes, assume that 1.0 mole of gas in 1.0 L exerts a pressure of 24 atm at 300. K.)",
            image: "assets/twentyfivetop.jpg",
            imageBottom: "assets/twentyfivebottom.jpg",
            answers: [
                { text: "1.2 atm", image: "", correct: true },
                { text: "2.4 atm", image: "", correct: false },
                { text: "12 atm", image: "", correct: false },
                { text: "24 atm", image: "", correct: false },
            ]
        },
        {//#27 B
            question: "27. Which of the following statements is a correct interpretation of the data regarding how the order of the reaction can be determined?",
            image: "assets/twentyfivetop.jpg",
            imageBottom: "assets/twentyfivebottom.jpg",
            answers: [
                { text: "The reaction must be first order because there is only one reactant species.", image: "", correct: false },
                { text: "The reaction is first order if the plot of ln[H<sub>2</sub>O<sub>2</sub>] versus time is a straight line.", image: "", correct: true },
                { text: "The reaction is first order if the plot of 1/[H<sub>2</sub>O<sub>2</sub>] versus time is a straight line.", image: "", correct: false },
                { text: "The reaction is second order because 2 is the coefficient of H<sub>2</sub>O<sub>2</sub> in the chemical equation.", image: "", correct: false },
            ]
        },
        {//#28 B
            question: "28. The reaction is thermodynamically favorable. The signs of &Delta;G° and &Delta;S° for the reaction are which of the following?",
            image: "assets/twentyfivetop.jpg",
            imageBottom: "assets/twentyfivebottom.jpg",
            answers: [
                { text: "<b>&Delta;G:</b> Positive || <b>&Delta;S:</b> Positive", image: "", correct: false },
                { text: "<b>&Delta;G:</b> Negative || <b>&Delta;S:</b> Positive", image: "", correct: true },
                { text: "<b>&Delta;G:</b> Positive || <b>&Delta;S:</b> Negative", image: "", correct: false },
                { text: "<b>&Delta;G:</b> Negative || <b>&Delta;S:</b> Negative", image: "", correct: false },
            ]
        },
        {//#29 B
            question: "29. Assume that the bond enthalpies of the oxygen-hydrogen bonds in H<sub>2</sub>O are not significantly different from those in H<sub>2</sub>O<sub>2</sub>. Based on the value of &Delta;H° of the reaction, which of the following could be the bond enthalpies (in kJ/mol) for the bonds broken and formed in the reaction?",
            image: "assets/twentyfivetop.jpg",
            imageBottom: "assets/twentyninebottom.jpg",
            answers: [
                { text: "A", image: "", correct: false },
                { text: "B", image: "", correct: true },
                { text: "C", image: "", correct: false },
                { text: "D", image: "", correct: false },
            ]
        },
        {//#30 B
            question: "30. Which of the following accounts for the observation that the pH of pure water at 37°C is 6.8?",
            image: "",
            imageBottom: "",
            answers: [
                { text: "At 37°C water is naturally acidic.", image: "", correct: false },
                { text: "At 37°C the autoionization constant for water, K<sub>w</sub>, is larger than it is at 25°C.", image: "", correct: true },
                { text: "At 37°C water has a lower density than it does at 25°C; therefore, [H<sup>+</sup>] is greater.", image: "", correct: false },
                { text: "At 37°C water ionizes to a lesser extent than it does at 25°C.", image: "", correct: false },
            ]
        },
        {//#31 D
            question: "31. To gravimetrically analyze the silver content of a piece of jewelry made from an alloy of Ag and Cu, a student dissolves a small preweighed sample in HNO<sub>3</sub>(aq). Ag<sup>+</sup>(aq)and Cu<sup>2+</sup>(aq) ions form in the solution. Which of the following should be the next step in the analytical process?",
            image: "",
            imageBottom: "",
            answers: [
                { text: "Centrifuging the solution to isolate the heavier ions", image: "", correct: false },
                { text: "Evaporating the solution to recover the dissolved nitrates", image: "", correct: false },
                { text: "Adding enough base solution to bring the pH up to 7.0", image: "", correct: false },
                { text: "Adding a solution containing an anion that forms an insoluble salt with only one of the metal ions", image: "", correct: true },
            ]
        },
        {//#32 B
            question: "32. A sample of a compound that contains only the elements C, H, and N is completely burned in O<sub>2</sub> to produce 44.0 g of CO<sub>2</sub>, 45.0 g of H<sub>2</sub>O, and some NO<sub>2</sub>. A possible empirical formula of the compound is",
            image: "",
            imageBottom: "",
            answers: [
                { text: "CH<sub>2</sub>N", image: "", correct: false },
                { text: "CH<sub>5</sub>N", image: "", correct: true },
                { text: "C<sub>2</sub>H<sub>5</sub>N", image: "", correct: false },
                { text: "C<sub>3</sub>H<sub>3</sub>N<sub>2</sub>", image: "", correct: false },
            ]
        },
        {//#33 D
            question: "33. The dissociation of the weak acid HF in water is represented by the equation above. Adding a 1.0 mL sample of which of the following would increase the percent ionization of HF(aq) in 10 mL of a solution of 1.0 M HF?",
            image: "assets/thirtythree.jpg",
            imageBottom: "",
            answers: [
                { text: "1.0 <i>M</i> KF", image: "", correct: false },
                { text: "1.0 <i>M</i> H<sub>2</sub>SO<sub>4</sub>", image: "", correct: false },
                { text: "10.0 <i>M</i> HF", image: "", correct: false },
                { text: "Distilled water", image: "", correct: true },
            ]
        },
        {//#34 D
            question: "34. Ca(OH)<sub>2</sub>(s) precipitates when a 1.0 g sample of CaC<sub>2</sub>(s) is added to 1.0 L of distilled water at room temperature. If a 0.064 g sample of CaC<sub>2</sub>(s) (molar mass 64 g/mol) is used instead and all of it reacts, which of the following will occur and why? (The value of K<sub>sp</sub> for Ca(OH)<sub>2</sub> is 8.0 &times; 10<sup>-8</sup>.)",
            image: "assets/thirtyfour.jpg",
            imageBottom: "",
            answers: [
                { text: "Ca(OH)<sub>2</sub> will precipitate because <i>Q</i> > K<sub>sp</sub>.", image: "", correct: false },
                { text: "Ca(OH)<sub>2</sub> will precipitate because <i>Q</i> < K<sub>sp</sub>.", image: "", correct: false },
                { text: "Ca(OH)<sub>2</sub> will not precipitate because <i>Q</i> > K<sub>sp</sub>.", image: "", correct: false },
                { text: "Ca(OH)<sub>2</sub> will not precipitate because <i>Q</i> < K<sub>sp</sub>.", image: "", correct: true },
            ]
        },
        {//#35 C
            question: "35. Reaction 2 occurs when an excess of 6 M HCl(aq) solution is added to 100. mL of NaOCl(aq) of unknown concentration. If the reaction goes to completion and 0.010 mol of Cl<sub>2</sub>(g) is produced, then what was the molarity of the NaOCl(aq) solution?",
            image: "assets/thirtyfour.jpg",
            imageBottom: "",
            answers: [
                { text: "0.0010 <i>M</i>", image: "", correct: false },
                { text: "0.010 <i>M</i>", image: "", correct: false },
                { text: "0.10 <i>M</i>", image: "", correct: true },
                { text: "1.0 <i>M</i>", image: "", correct: false },
            ]
        },
        {//#36 A
            question: "36. When Reaction 3 occurs, does the hybridization of the carbon atoms change?",
            image: "assets/thirtyfour.jpg",
            imageBottom: "",
            answers: [
                { text: "Yes; it changes from <i>sp</i> to <i>sp</i><sup>2</sup>.", image: "", correct: true },
                { text: "Yes; it changes from <i>sp</i> to <i>sp</i><sup>3</sup>.", image: "", correct: false },
                { text: "Yes; it changes from <i>sp</i><sup>2</sup> to <i>sp</i><sup>3</sup>.", image: "", correct: false },
                { text: "No; it does not change.", image: "", correct: false },
            ]
        },
        {//#37 B
            question: "37. The acid-dissociation constants of HC<sub>3</sub>H<sub>5</sub>O<sub>3</sub>(aq) and CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>(aq) are given in the table above. Which of the following mixtures is a buffer with a pH of approximately 3?",
            image: "assets/thirtyseven.jpg",
            imageBottom: "",
            answers: [
                { text: "A mixture of 100. mL of 0.1 M CH<sub>3</sub>NH<sub>3</sub>Cl and 50. mL of 0.1 M NaOH", image: "", correct: false },
                { text: "A mixture of 100. mL of 0.1 M HC<sub>3</sub>H<sub>5</sub>O<sub>3</sub> and 50. mL of 0.1 M NaOH", image: "", correct: true },
                { text: "A mixture of 100. mL of 0.1 M NaC<sub>3</sub>H<sub>5</sub>O<sub>3</sub> and 100. mL of 0.1 M NaOH", image: "", correct: false },
                { text: "A mixture of 100. mL of 0.1 M CH<sub>3</sub>NH<sub>3</sub>Cl and 100. mL of 0.1 M CH<sub>3</sub>NH<sub>2</sub>", image: "", correct: false },
            ]
        },
        {//#38 B
            question: "38. The Lewis electron-dot diagrams of the HClO<sub>3</sub> molecule and the HClO<sub>2</sub> molecule are shown above at the left and right, respectively. Which of the following statements identifies the stronger acid and correctly identifies a factor that contributes to its being the stronger acid?",
            image: "assets/thirtyeight.jpg",
            imageBottom: "",
            answers: [
                { text: "HClO<sub>3</sub>(<i>aq</i>) is the stronger acid because its molecules experience stronger London dispersion forces.", image: "", correct: false },
                { text: "HClO<sub>3</sub>(<i>aq</i>) is the stronger acid because the additional electronegative oxygen atom on the chlorine atom stabilizes the conjugate base.", image: "", correct: true },
                { text: "HClO<sub>2</sub>(<i>aq</i>) is the stronger acid because its molecules experience weaker London dispersion forces.", image: "", correct: false },
                { text: "HClO<sub>2</sub>(<i>aq</i>) is the stronger acid because the lone pairs of electrons on the chlorine atom stabilize the conjugate base.", image: "", correct: false },
            ]
        },
        {//#39 A
            question: "39. If equal masses of the following compounds undergo complete combustion, which will yield the greatest mass of CO<sub>2</sub>?",
            image: "",
            imageBottom: "",
            answers: [
                { text: "Benzene, C<sub>6</sub>H<sub>6</sub>", image: "", correct: true },
                { text: "Cyclohexane, C<sub>6</sub>H<sub>12</sub>", image: "", correct: false },
                { text: "Glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>", image: "", correct: false },
                { text: "Methane, CH<sub>4</sub>", image: "", correct: false },
            ]
        },
        {//#40 B
            question: "40. The reaction system represented above is at equilibrium. Which of the following will decrease the amount of CaO(s) in the system?",
            image: "assets/fourty.jpg",
            imageBottom: "",
            answers: [
                { text: "Increasing the volume of the reaction vessel at constant temperature", image: "", correct: false },
                { text: "Lowering the temperature of the system", image: "", correct: true },
                { text: "Removing some CO<sub>2</sub>(<i>g</i>) at constant temperature", image: "", correct: false },
                { text: "Removing some CaCO<sub>3</sub>(<i>s</i>) at constant temperature", image: "", correct: false },
            ]
        },
        {//#41 C
            question: "41. To maximize the yield in a certain manufacturing process, a solution of a weak monoprotic acid that has a concentration between 0.20 <i>M</i> and 0.30 <i>M</i> is required. Four 100. mL samples of the acid at different concentrations are each titrated with a 0.20 <i>M</i> NaOH solution. The volume of NaOH needed to reach the end point for each sample is given in the table above. Which solution is the most suitable to maximize the yield?",
            image: "assets/fourtyone.jpg",
            imageBottom: "",
            answers: [
                { text: "Solution A", image: "", correct: false },
                { text: "Solution B", image: "", correct: false },
                { text: "Solution C", image: "", correct: true },
                { text: "Solution D", image: "", correct: false },
            ]
        },
        {//#42 B
            question: "42. Which of the following rate laws for the overall reaction corresponds to the proposed mechanism?",
            image: "assets/fourtytwo.jpg",
            imageBottom: "",
            answers: [
                { text: "Rate = <i>k</i>[O<sub>3</sub>]<sup>2</sup>", image: "", correct: false },
                { text: "Rate = <i>k</i>[Cl][O<sub>3</sub>]", image: "", correct: true },
                { text: "Rate = <i>k</i>[ClO][O<sub>3</sub>]<sup>2</sup>", image: "", correct: false },
                { text: "Rate = <i>k</i>&nbsp;<sup>[O<sub>2</sub>]<sup>3</sup></sup>&frasl;<sub>[O<sub>3</sub>]<sup>2</sub></sub>", image: "", correct: false },
            ]
        },
        {//#43 B
            question: "43. Which of the following reaction energy profiles best corresponds to the proposed mechanism?",
            image: "assets/fourtytwo.jpg",
            imageBottom: "",
            answers: [
                { text: "", image: "assets/fourtythreeA.jpg", correct: false },
                { text: "", image: "assets/fourtythreeB.jpg", correct: true },
                { text: "", image: "assets/fourtythreeC.jpg", correct: false },
                { text: "", image: "assets/fourtythreeD.jpg", correct: false },
            ]
        },
        {//#44 B
            question: "44. The proposed mechanism can be written in a more general form, as shown below. Species other than Cl can also decompose O<sub>3</sub> through the same mechanism. Which of the following chemical species is most likely to decompose O<sub>3</sub> in the upper atmosphere through the below mechanism?",
            image: "assets/fourtytwo.jpg",
            imageBottom: "assets/fourtyfourbottom.jpg",
            answers: [
                { text: "He", image: "", correct: false },
                { text: "Br", image: "", correct: true },
                { text: "N<sub>2</sub>", image: "", correct: false },
                { text: "O<sub>2</sub>", image: "", correct: false },
            ]
        },
        {//#45 B
            question: "45. A solution of a salt of a weak acid HY is added to a solution of another weak acid HX. Based on the information given above, which of the following species is the strongest base?",
            image: "assets/fourtyfive.jpg",
            imageBottom: "",
            answers: [
                { text: "HX(<i>aq</i>)", image: "", correct: false },
                { text: "Y<sup>-</sup>(<i>aq</i>)", image: "", correct: true },
                { text: "HY(<i>aq</i>)", image: "", correct: false },
                { text: "X<sup>-</sup>(<i>aq</i>)", image: "", correct: false },
            ]
        },
        {//#46 C
            question: "46. A 1.0 mol sample of X(g) and a 1.0 mol sample of Q(g) are introduced into an evacuated, rigid 10.0 L container and allowed to reach equilibrium at 50°C according to the equation above. At equilibrium, which of the following is true about the concentrations of the gases?",
            image: "assets/fourtysix.jpg",
            imageBottom: "",
            answers: [
                { text: "[R] = <sup>1</sup>&frasl;<sub>2</sub> [Q]", image: "", correct: false },
                { text: "[Q] = <sup>1</sup>&frasl;<sub>2</sub> [X]", image: "", correct: false },
                { text: "[R] = [Z] > [Q]", image: "", correct: true },
                { text: "[X] = [Q] = [R] = [Z]", image: "", correct: false },
            ]
        },
        {//#47 A
            question: "47. The potential energy of a system of two atoms as a function of their internuclear distance is shown in the diagram above. Which of the following is true regarding the forces between the atoms when their internuclear distance is x?",
            image: "assets/fourtyseven.jpg",
            imageBottom: "",
            answers: [
                { text: "The attractive and repulsive forces are balanced, so the atoms will maintain an average internuclear distance x.", image: "", correct: true },
                { text: "There is a net repulsive force pushing the atoms apart, so the atoms will move further apart.", image: "", correct: false },
                { text: "There is a net attractive force pulling the atoms together, so the atoms will move closer together.", image: "", correct: false },
                { text: "It cannot be determined whether the forces between atoms are balanced, attractive, or repulsive, because the diagram shows only the potential energy.", image: "", correct: false },
            ]
        },
        {//#48 D
            question: "48. In order to determine the order of the reaction represented above, the initial rate of formation of XY<sub>2</sub> is measured using different initial values of [X] and [Y]. The results of the experiment are shown in the table below.<br> In trial 2 which of the reactants would be consumed more rapidly, and why?",
            image: "assets/fourtyeight.jpg",
            imageBottom: "assets/fourtyeightbottom.jpg",
            answers: [
                { text: "X, because it has a higher molar concentration.", image: "", correct: false },
                { text: "X, because the reaction is second order with respect to X.", image: "", correct: false },
                { text: "Y, because the reaction is second order with respect to Y.", image: "", correct: false },
                { text: "Y, because the rate of disappearance will be double that of X.", image: "", correct: true },
            ]
        },
        {//#49 D
            question: "49. In a paper chromatography experiment, a sample of a pigment is separated into two components, X and Y, as shown in the figure above. The surface of the paper is moderately polar. What can be concluded about X and Y based on the experimental results?",
            image: "assets/fourtynine.jpg",
            imageBottom: "",
            answers: [
                { text: "X has a larger molar mass than Y does.", image: "", correct: false },
                { text: "Y has a larger molar mass than X does.", image: "", correct: false },
                { text: "X is more polar than Y.", image: "", correct: false },
                { text: "Y is more polar than X.", image: "", correct: true },
            ]
        },
        {//#50 D
            question: "50. The diagram above represents the absorption spectrum for a pure molecular substance. Which of the following correctly indicates the type of transition observed for the substance in each of the regions of the absorption spectrum?",
            image: "assets/fifty.jpg",
            imageBottom: "assets/fiftybottom.jpg",
            answers: [
                { text: "A", image: "", correct: false },
                { text: "B", image: "", correct: false },
                { text: "C", image: "", correct: false },
                { text: "D", image: "", correct: true },
            ]
        },

    ];
    
    function redirectToNewPage() {
        window.location.href = 'apprac.html';
    }
    
    // Add event listener to the button
    document.getElementById('home-button').addEventListener('click', redirectToNewPage);
    
    const questionElement = document.getElementById('question');
    const questionContentElement = document.getElementById('question-content');
    const questionImageBottomElement = document.getElementById('question-image-bottom'); 
    const answerButtonsElement = document.getElementById('answer-buttons');
    const submitButton = document.getElementById('submit-btn');
    const scoreElement = document.getElementById('score');
    const questionBarElement = document.getElementById('question-buttons');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    
    let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);
let quizCompleted = false;

function showQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.innerHTML = currentQuestion.question;

    // Show the bottom image if it exists
    if (currentQuestion.imageBottom) {
        const imgBottom = document.createElement('img');
        imgBottom.src = currentQuestion.imageBottom;
        imgBottom.alt = currentQuestion.question;
        imgBottom.classList.add('question-image-bottom');
        questionImageBottomElement.innerHTML = ''; // Clear previous content in bottom image container
        questionImageBottomElement.appendChild(imgBottom);
    } else {
        questionImageBottomElement.innerHTML = ''; // Clear previous content if no bottom image
    }

    // Show the top image if it exists
    if (currentQuestion.image) {
        const imageElement = document.createElement('img');
        imageElement.src = currentQuestion.image;
        imageElement.alt = currentQuestion.question;
        imageElement.classList.add('question-image');
        questionContentElement.innerHTML = ''; // Clear previous content in top image container
        questionContentElement.appendChild(imageElement);
    } else {
        questionContentElement.innerHTML = ''; // Clear previous content if no top image
    }

    answerButtonsElement.innerHTML = ''; // Clear previous answers
    currentQuestion.answers.forEach((answer, answerIndex) => {
        const button = document.createElement("button");
        button.classList.add("btn");

        const textElement = document.createElement('span');
        textElement.innerHTML = answer.text; // Use innerHTML to support HTML tags
        button.appendChild(textElement);

        if (answer.image) {
            const answerImageElement = document.createElement('img');
            answerImageElement.src = answer.image;
            answerImageElement.alt = answer.text;
            answerImageElement.classList.add('answer-image'); // Add styling class if needed
            button.appendChild(answerImageElement);
        }

        button.addEventListener('click', () => selectAnswer(answerIndex));
        answerButtonsElement.appendChild(button);
    });

    highlightSelectedAnswer();
    updateQuestionBar();
}

function selectAnswer(answerIndex) {
    if (quizCompleted) return; // Prevent selecting answers after quiz completion
    answers[currentQuestionIndex] = answerIndex;
    highlightSelectedAnswer();
}

function highlightSelectedAnswer() {
    const buttons = answerButtonsElement.querySelectorAll('.btn');
    buttons.forEach((button, buttonIndex) => {
        button.classList.remove('selected', 'correct', 'incorrect');
        if (buttonIndex === answers[currentQuestionIndex]) {
            button.classList.add('selected');
        }
        if (quizCompleted) {
            const currentQuestion = questions[currentQuestionIndex];
            if (buttonIndex === answers[currentQuestionIndex]) {
                if (currentQuestion.answers[buttonIndex].correct) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
            }
        }
    });
}

function showScore() {
    scoreElement.style.display = 'block';
    let correctAnswers = 0;
    answers.forEach((answerIndex, questionIndex) => {
        const currentQuestion = questions[questionIndex];
        const button = answerButtonsElement.children[answerIndex];
        button.classList.remove('selected');
        if (currentQuestion.answers[answerIndex].correct) {
            button.classList.add('correct');
            correctAnswers++;
        } else {
            button.classList.add('incorrect');
        }
    });

    const scorePercentage = (correctAnswers / questions.length) * 100;
    scoreElement.textContent = `You scored ${correctAnswers} out of ${questions.length} (${scorePercentage.toFixed(2)}%)`;
    quizCompleted = true;
}

function updateQuestionBar() {
    questionBarElement.innerHTML = '';
    const start = Math.floor(currentQuestionIndex / 10) * 10;
    const end = Math.min(start + 10, questions.length);

    for (let i = start; i < end; i++) {
        const button = document.createElement('button');
        button.innerHTML = i + 1;
        button.classList.add('question-btn');
        button.addEventListener('click', () => {
            currentQuestionIndex = i;
            showQuestion(currentQuestionIndex);
            highlightSelectedAnswer();
            updateQuestionBar(); // Ensure question bar reflects the current question
        });
        if (i === currentQuestionIndex) {
            button.classList.add('selected');
        }
        questionBarElement.appendChild(button);
    }
}

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        showQuestion(currentQuestionIndex);
        updateQuestionBar();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1;
        showQuestion(currentQuestionIndex);
        updateQuestionBar();
    }
});

submitButton.addEventListener('click', () => {
    showScore();
    updateQuestionBar();
});

// Initial question display
showQuestion(currentQuestionIndex);
updateQuestionBar();