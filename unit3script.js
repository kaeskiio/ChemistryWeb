//Unit 3
const questions = [
    //Topic 3.1
    {
        //#1
        question: "Pentane, C<sub>5</sub>H<sub>12</sub> and Octane C<sub>8</sub>H<sub>18</sub>, are both hydrocarbons. Identify the type of intermolecular forces present.",
        answers: [
            { text: "Both molecules would exhibit hydrogen bonding due to the presence of hydrogen atoms bonded to electronegative atoms (carbon in hydrocarbons).", correct: false },
            { text: "Octane would exhibit stronger intermolecular forces than pentane due to its larger molecular size and increased surface area.", correct: false },
            { text: "Both molecules would only exhibit London dispersion forces (LDF).", correct: true },
            { text: "Both molecules would exhibit dipole-dipole interactions because they have polar C-H bonds.", correct: false },
        ]
    }, 
    {
        //#2
        question: "Predict the substance (Pentane, C<sub>5</sub>H<sub>12</sub> or Octane C<sub>8</sub>H<sub>18</sub>) that would have a higher vapor pressure and justify your claim.",
        answers: [
            { text: "Octane would have a higher vapor pressure because it has a larger molecular surface area, allowing more molecules to escape into the vapor phase.", correct: false },
            { text: "Pentane would have a lower vapor pressure because its larger molecular size makes it less volatile compared to octane.", correct: false },
            { text: "Octane would have a higher vapor pressure because its longer carbon chain provides more opportunities for London dispersion forces, which increase vaporization rates.", correct: false },
            { text: "Pentane would have a higher vapor pressure. Pentane is less polarizable than Octane as it has fewer electrons, meaning that the intermolecular forces (IMFs) are weaker. Weaker IMFs result in higher vapor pressure.", correct: true },
        ]
    }, 
    {
        //#3
        question: "The boiling point of HF is 293K whereas the boiling point of F<sub>2</sub> is 85K. Determine the type(s) of intermolecular forces present.",
        answers: [
            { text: "<b>HF:</b> Hydrogen-bonding, dipole-dipole, LDFs | <b>F<sub>2</sub>:</b> LDFs", correct: true },
            { text: "<b>HF:</b> LDFs | <b>F<sub>2</sub>:</b> Hydrogen-bonding, dipole-dipole, LDFs", correct: false },
            { text: "<b>HF:</b> Dipole-dipole, LDFs | <b>F<sub>2</sub>:</b> LDFs", correct: false },
            { text: "<b>HF:</b> LDFs | <b>F<sub>2</sub>:</b> LDFs", correct: false },
        ]
    }, 
    {
        //#4
        question: "The boiling point of HF is 293K whereas the boiling point of F<sub>2</sub> is 85K. Explain the difference in boiling points based on their intermolecular forces.",
        answers: [
            { text: "F<sub>2</sub> has a higher boiling point because its symmetrical molecular structure allows for more efficient packing and stronger van der Waals forces, leading to higher boiling temperatures.", correct: false },
            { text: "HF has a lower boiling point because its molecules are larger and experience greater steric hindrance, making it easier for them to overcome intermolecular forces and transition to the gas phase.", correct: false },
            { text: "F<sub>2</sub> has a higher boiling point because its molecules are non-polar and experience induced dipole-induced dipole attractions, which are stronger than the dipole-dipole interactions in HF.", correct: false },
            { text: "HF has a higher boiling point because hydrogen bonding, which is stronger than LDFs, exists between HF molecules. This additional intermolecular attraction requires more energy to break, resulting in a higher boiling point than F<sub>2</sub>.", correct: true },
        ]
    }, 
    {
        //#5
        question: "Use intermolecular forces to explain why the vapor pressure of CH<sub>4</sub> is greater than that of NH<sub>3</sub>.",
        answers: [
            { text: "NH<sub>3</sub> has stronger IMFs, so they are more tightly attracted which makes it less likely to become a gas/vapor.", correct: true },
            { text: "CH<sub>4</sub> has a greater vapor pressure because it is a smaller molecule, allowing it to escape from the liquid phase more readily than NH<sub>3</sub>.", correct: false },
            { text: "NH<sub>3</sub> has a lower vapor pressure because it is more volatile due to its stronger intermolecular attractions, making it easier for NH<sub>3</sub> molecules to transition to the gas phase.", correct: false },
            { text: "CH<sub>4</sub> has a higher vapor pressure because it experiences weaker London dispersion forces compared to the dipole-dipole interactions present in NH<sub>3</sub>.", correct: false },
        ]
    },    
    //Topic 3.2
    {
        //#6
        question: "If a particular solid had very strong attractive forces, would you expect the melting point of that solid to be relatively high or relatively low? Explain your reasoning.",
        answers: [
            { text: "High, strong attractive forces imply a more unstable solid structure, causing it to melt at lower temperatures.", correct: false },
            { text: "Low, strong attractive forces result in a weaker solid structure, allowing it to melt at lower temperatures.", correct: false },
            { text: "High, because strong attractive forces require more energy to overcome, thus raising the melting point.", correct: true },
            { text: "Low, strong attractive forces mean the particles are already close together, making it easier for them to transition to the liquid phase.", correct: false },
        ]
    }, 
    {
        //#7
        question: "Why do covalent network solids melt at a much higher temperature than molecular solids.",
        answers: [
            { text: "Molecular solids exhibit intricate lattice arrangements of their molecules, leading to stronger intermolecular attractions compared to covalent network solids. This results in molecular solids requiring higher temperatures to overcome their robust structures and melt.", correct: false },
            { text: "Covalent network solids, despite their strong internal bonds, possess a higher degree of molecular symmetry and alignment, which enhances their thermal stability and raises their melting points compared to molecular solids.", correct: false },
            { text: "Covalent network solids have a continuous network of strong covalent bonds throughout their structure, requiring significant energy to break. In contrast, molecular solids are held together by weaker intermolecular forces between discrete molecules.", correct: true },
            { text: "Molecular solids have a greater surface area per molecule, allowing for stronger van der Waals interactions between neighboring molecules. This increased intermolecular force necessitates higher temperatures to break the cohesive bonds and transition into the liquid phase, unlike covalent network solids.", correct: false },
        ]
    }, 
    {
        //#8
        question: "The melting point of HBr is -87&deg;C and the melting point of NaBr is 747&deg;C. Justify the difference in their melting points.",
        answers: [
            { text: "HBr melts at a lower temperature because the hydrogen bonds between H and Br atoms are weaker than the ionic bonds present in NaBr, which require higher temperatures to break.", correct: false },
            { text: "NaBr has a higher melting point due to the larger size and stronger London dispersion forces between its ions, making it more resistant to melting compared to the polar interactions in HBr.", correct: false },
            { text: "HBr has a lower melting point because its molecules are lighter and less densely packed compared to the solid lattice structure of NaBr, which requires more energy to disrupt.", correct: false },
            { text: "HBr must overcome the attractions between partial charges caused by the permanent dipole. NaBr must overcome the attractions between full positive and negatively charged ions.", correct: true },
        ]
    },
    //Topic 3.3
    {
        //#9
        question: "Which of the following is the best explanation for why gases generally follow the ideal gas law?",
        answers: [
            { text: "All gases have the same spacing of particles", correct: false },
            { text: "All gases have the same volume", correct: false },
            { text: "Gas particles are spaced far apart with minimal intermolecular forces", correct: true },
            { text: "Gas particles do not have intermolecular forces", correct: false },
        ]
    }, 
     {
        //#10
        question: "Of the following, the best explanation for the fact that most liquids cannot be easily compressed is that the molecules in a liquid:",
        answers: [
            { text: "are relatively close together", correct: true },
            { text: "are in constant motion", correct: false },
            { text: "have varying densities", correct: false },
            { text: "have a fixed volume", correct: false },
            { text: "move slower as temperature decreases", correct: false },
        ]
    }, 
    //Topic 3.4
    {
        //#11
        question: "A gas mixture at 20.0&deg;C and 2.0 atm contains 0.40 mol of H<sub>2</sub>, 0.15 mol of O<sub>2</sub>, and 0.5 mol of N<sub>2</sub>. Assuming ideal behavior, what is the partial pressure of hydrogen gas (H<sub>2</sub>) in the mixture?",
        answers: [
            { text: "0.71 atm", correct: false },
            { text: "0.76 atm", correct: true },
            { text: "0.45 atm", correct: false },
            { text: "0.18 atm", correct: false },
        ]
    }, 
    {
        //#12
        question: "193 mL of oxygen, O<sub>2</sub>, was collected over water on a day when the atmospheric pressure was 762 mmHg. The temperature of the water was 23.0&deg;C. <br>(At 23.0&deg;C the vapor pressure of water is 21.1 mmHg)<br>What is the partial pressure of the oxygen gas collected?",
        answers: [
            { text: "779.1 mmHg", correct: false },
            { text: "145.6 mmHg", correct: false },
            { text: "756.1 mmHg", correct: false },
            { text: "740.9 mmHg", correct: true },
        ]
    }, 
    {
        //#13
        question: "193 mL of oxygen, O<sub>2</sub>, was collected over water on a day when the atmospheric pressure was 762 mmHg. The temperature of the water was 23.0&deg;C. <br>(At 23.0&deg;C the vapor pressure of water is 21.1 mmHg)<br>How many moles of oxygen were collected?",
        answers: [
            { text: "0.00774 mol O<sub>2</sub>", correct: true },
            { text: "0.0774 mol O<sub>2</sub>", correct: false },
            { text: "0.774 mol O<sub>2</sub>", correct: false },
            { text: "7.74 mol O<sub>2</sub>", correct: false },
        ]
    }, 
    {
        //#14
        question: "193 mL of oxygen, O<sub>2</sub>, was collected over water on a day when the atmospheric pressure was 762 mmHg. The temperature of the water was 23.0&deg;C. <br>(At 23.0&deg;C the vapor pressure of water is 21.1 mmHg)<br>How many grams of oxygen were collected?",
        answers: [
            { text: "0.581 g O<sub>2</sub>", correct: false },
            { text: "0.461 g O<sub>2</sub>", correct: false },
            { text: "0.248 g O<sub>2</sub>", correct: true },
            { text: "0.167 g O<sub>2</sub>", correct: false },
        ]
    }, 
    {
        //#15
        question: "An ideal gas sample has a mass of 1.28 grams in a 0.500 L container. The temperature of the container is 127&deg;C and the pressure of the gas is 2.00 atm. What is the molar mass of the gas?",
        answers: [
            { text: "21.0 g/mol", correct: false },
            { text: "42.0 g/mol", correct: true },
            { text: "84.0 g/mol", correct: false },
            { text: "56.0 g/mol", correct: false },
        ]
    },
    {
        //#16
        question: "2KClO<sub>3</sub> &rarr; 2KCl + 3O<sub>2</sub> <br>How many grams of potassium chlorate, KClO<sub>3</sub>, were reacted if 5.30 liters of oxygen, O<sub>2</sub>, were produced at 117.0&deg;C and 0.995 atm?",
        answers: [
            { text: "15.6 grams KClO<sub>3</sub>", correct: false },
            { text: "15.8 grams KClO<sub>3</sub>", correct: false },
            { text: "20.2 grams KClO<sub>3</sub>", correct: false },
            { text: "13.5 grams KClO<sub>3</sub>", correct: true },
        ]
    }, 
    {
        //#17
        question: "What is the density of NO<sub>2</sub> gas at 25.0&deg;C and 2.56 atm?",
        answers: [
            { text: "4.8 g/L", correct: true },
            { text: "8.1 g/L", correct: false },
            { text: "3.9 g/L", correct: false },
            { text: "1.7 g/L", correct: false },
        ]
    },
    {
        //#18
        question: "By what factor will the pressure of a sample of a gas change if the volume is reduced by 1/3 while the kelvin temperature is doubled?",
        answers: [
            { text: "2x original value", correct: false },
            { text: "1/3x original value", correct: false },
            { text: "3x original value", correct: true },
            { text: "2/3x original value", correct: false },
        ]
    },
    //Topic 3.5
    {
        //#19
        question: "Equimolar samples of N<sub>2</sub> and O<sub>2</sub> are both at standard conditions (1 atm, 273K). Which sample has more kinetic energy? Why?",
        answers: [
            { text: "O<sub>2</sub> has more kinetic energy because its molecules are more massive, resulting in greater energy at the same temperature.", correct: false },
            { text: "N<sub>2</sub> has more kinetic energy because nitrogen molecules are smaller and can move faster than oxygen molecules at the same temperature.", correct: false },
            { text: "O<sub>2</sub> has more kinetic energy because it has a higher molar mass, which translates into greater energy storage capacity at standard conditions.", correct: false },
            { text: "They are the same. Same temperature equals same kinetic energy.", correct: true },
        ]
    },
    {
        //#20
        question: "Equimolar samples of N<sub>2</sub> and O<sub>2</sub> are both at standard conditions (1 atm, 273K). Which sample has higher average molecular speeds? Why?",
        answers: [
            { text: "O<sub>2</sub> has higher average molecular speeds because its molecules are more massive, giving them greater momentum at the same temperature.", correct: false },
            { text: "N<sub>2</sub> because it has a lower molar mass, therefore its average molecular speed is faster.", correct: true },
            { text: "N<sub>2</sub> and O<sub>2</sub> have the same average molecular speeds because they are at the same temperature, and temperature solely determines molecular speed.", correct: false },
            { text: "O<sub>2</sub> has higher average molecular speeds because oxygen is more electronegative, which affects the distribution of kinetic energy among its molecules.", correct: false },
        ]
    },
    //Topic 3.6
    {
        //#21
        question: "At 10. atm and 100 K, Radon (Rn) deviates from its predicted volume based on the ideal gas law. If Radon (Rn) has a smaller volume than predicted, propose an explanation to justify this observation.",
        answers: [
            { text: "If Rn has a smaller volume it is because the intermolecular forces (IMFs) are strong and pull the particles closer together, resulting in a decrease in the volume.", correct: true },
            { text: "If Rn has a smaller volume, it is because the high pressure compresses the gas molecules more than predicted, despite the lack of significant intermolecular forces.", correct: false },
            { text: "If Rn has a smaller volume, it is due to the large atomic radius of Rn atoms, which allows them to occupy less space under high pressure.", correct: false },
            { text: "If Rn has a smaller volume, it is because the kinetic energy of the gas molecules is higher than expected at 100 K, causing them to move closer together.", correct: false },
        ]
    },
    {
        //#22
        question: "At 10. atm and 100 K, Radon (Rn) deviates from its predicted volume based on the ideal gas law. If Radon (Rn) has a larger volume than predicted, propose an explanation to justify this observation.",
        answers: [
            { text: "If Rn has a larger volume than predicted, it is because the high pressure causes the gas molecules to repel each other more strongly, leading to an increased volume.", correct: false },
            { text: "If Rn has a larger volume than predicted, it is due to the low temperature causing a significant decrease in particle velocity, which reduces the effectiveness of intermolecular forces and increases volume.", correct: false },
            { text: "If Rn has a larger volume than predicted, it is because the particles occupy space and the volume of the particles themselves increases the total volume.", correct: true },
            { text: "If Rn has a larger volume than predicted, it is because Radon atoms have a higher tendency to expand due to their large atomic size, which causes an increase in the overall volume.", correct: false },
        ]
    },
    {
        //#23
        question: "NO<sub>2</sub> and CO<sub>2</sub> have a similar molecular weight. Which gas would you predict to deviate from as ideal gas? Justify your selection.",
        answers: [
            { text: "CO<sub>2</sub>, because it has a linear structure which increases intermolecular forces, causing it to deviate more from ideal gas behavior.", correct: false },
            { text: "NO<sub>2</sub>, because it has a higher molecular weight than CO<sub>2</sub>, leading to greater deviations from ideal gas behavior.", correct: false },
            { text: "CO<sub>2</sub>, because its molecules are more symmetrical, resulting in stronger van der Waals forces that cause significant deviations from ideal gas behavior.", correct: false },
            { text: "NO<sub>2</sub>, because it is polar due to the lone pairs on the N atom; therefore, the intermolecular forces (IMFs) are stronger than those of CO<sub>2</sub>.", correct: true },
        ]
    },
    //Topic 3.7
    {
        //#24
        question: "Calculate the volume of 1.25M lithium chloride solution that can be made with 13.3g of lithium chloride?",
        answers: [
            { text: "0.251L LiCl solution", correct: true },
            { text: "0.521L LiCl solution", correct: false },
            { text: "0.764L LiCl solution", correct: false },
            { text: "0.145L LiCl solution", correct: false },
        ]
    },
    {
        //#25
        question: "What would be the concentration of chloride ion, [Cl<sup>1-</sup>] in a solution that is made by dissolving 10.0g zinc chloride, ZnCl<sub>2</sub>, in a solution that has a final volume of 500. mL?",
        answers: [
            { text: "0.167 M Cl<sup>1-</sup>", correct: false },
            { text: "0.294 M Cl<sup>1-</sup>", correct: true },
            { text: "0.143 M Cl<sup>1-</sup>", correct: false },
            { text: "0.978 M Cl<sup>1-</sup>", correct: false },
        ]
    },
    {
        //#26
        question: "What volume of 0.25M lithium fluoride solution can be made by dissolving 5.0 g lithium fluoride, LiF?",
        answers: [
            { text: "0.65L LiF", correct: false },
            { text: "0.48L LiF", correct: false },
            { text: "0.96L LiF", correct: false },
            { text: "0.77L LiF", correct: true },
        ]
    },
    {
        //#27
        question: "What mass of sodium hydroxide would be required to make 1.0L of a 0.75M solution of sodium hydroxide, NaOH?",
        answers: [
            { text: "14. g NaOH", correct: false },
            { text: "57. g NaOH", correct: false },
            { text: "30. g NaOH", correct: true },
            { text: "71. g NaOH", correct: false },
        ]
    },
    {
        //#28
        question: "What is the molar concentration of a solution made by dissolving 2.9g sodium acetate, NaC<sub>2</sub>H<sub>3</sub>O<sub>2</sub> in water to a total volume of 25mL?",
        answers: [
            { text: "1.4M", correct: true },
            { text: "4.7M", correct: false },
            { text: "2.3M", correct: false },
            { text: "2.6M", correct: false },
        ]
    },
    {
        //#29
        question: "What is the acetate ion concentration, [C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>1-</sup>] of a 100mL of calcium acetate solution, Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2)<sub>2</sub>, with 25.0g dissolved Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2)<sub>2</sub>?",
        answers: [
            { text: "7.83M C<sub>2</sub>H<sub>3</sub>O<sub>2", correct: false },
            { text: "3.16M C<sub>2</sub>H<sub>3</sub>O<sub>2", correct: true },
            { text: "1.42M C<sub>2</sub>H<sub>3</sub>O<sub>2", correct: false },
            { text: "8.47M C<sub>2</sub>H<sub>3</sub>O<sub>2", correct: false },
        ]
    },
    //Topic 3.9
    {
        //#30
        question: "Which of the following is a most appropriate reason to perform column chromatography over paper chromatography?",
        answers: [
            { text: "The sample is a mixture of strictly polar particles", correct: false },
            { text: "The sample is a mixture of strictly nonpolar particles", correct: false },
            { text: "The goal is to separate and recover the parts of the mixture", correct: true },
            { text: "The densities of the component parts of the mixture differ", correct: false },
        ]
    },
    {
        //#31
        question: "The following data(left) has a leading edge of solvent of 10.0 cm and the distance travelled by the dye was 8.0 cm. The data for another paper(right) shows the leading edge of solvent as 6.0 cm. What distance would you predict the same dye to travel on the chromatography paper on the right?",
        answers: [
            { text: "4.8cm", correct: true },
            { text: "6.0cm", correct: false },
            { text: "8.0cm", correct: false },
            { text: "Cannot be determined", correct: false },
        ]
    },
    {
        //#32
        question: "Which of the following would travel the farthest in column chromatography?",
        answers: [
            { text: "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH", correct: false },
            { text: "C<sub>6</sub>H<sub>6</sub>", correct: true },
            { text: "CH<sub>3</sub>OH", correct: false },
            { text: "C<sub>8</sub>H<sub>18</sub>", correct: false },
        ]
    },
    {
        //#33
        question: "In paper chromatography, what physical property is most important to the separation?",
        answers: [
            { text: "Polarity", correct: true },
            { text: "Density", correct: false },
            { text: "Size of particle", correct: false },
            { text: "Molar mass of particle", correct: false },
        ]
    },
    //Topic 3.10
    {
        //#34
        question: "Rank the following from MOST soluble in water to LEAST soluble in water.<br>a. CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH <br>b. HOCH<sub>2</sub>CH<sub>2</sub>OH <br> c. CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>",
        answers: [
            { text: "a, c, b", correct: false },
            { text: "b, c, a", correct: false },
            { text: "c, a, b", correct: false },
            { text: "b, a, c", correct: true },
        ]
    },
    {
        //#35
        question: "The following gases were bubbled through water, which of the gases is most likely to dissolve?",
        answers: [
            { text: "CO<sub>2</sub>", correct: false },
            { text: "CH<sub>4</sub>", correct: false },
            { text: "PH<sub>3</sub>", correct: true },
            { text: "N<sub>2</sub>", correct: false },
        ]
    },
    {
        //#36
        question: "Which of the following pairs of substances are miscible? (Choose any one answer that apply)",
        answers: [
            { text: "C<sub>6</sub>H<sub>14</sub> and C<sub>5</sub>H<sub>12</sub>", correct: true },
            { text: "H<sub>2</sub>O and CH<sub>3</sub>OH", correct: true },
            { text: "C<sub>4</sub>H<sub>10</sub> and C<sub>4</sub>H<sub>9</sub>OH", correct: false },
            { text: "CHCl<sub>3</sub> and CH<sub>2</sub>Cl<sub>2</sub>", correct: true },
            { text: "CH<sub>3</sub>NH<sub>2</sub> and CH<sub>3</sub>CH<sub>3</sub>", correct: false },
        ]
    },
    //Topic 3.11
    {
        //#37
        question: "Two samples of copper (II) sulfate were analyzed using visible light spectroscopy. Sample One absorbed twice as much light as Sample Two. What can you deduce about the concentrations of the two solutions?",
        answers: [
            { text: "The concentration of Sample One is the same as Sample Two, because light absorption does not correlate directly with concentration in visible light spectroscopy.", correct: false },
            { text: "The concentration of Sample One is less than that of Sample Two, because higher absorption is indicative of fewer molecules in solution interacting with the light.", correct: false },
            { text: "The concentration of Sample One is half that of Sample Two, as a higher absorption indicates a lower concentration due to more light passing through.", correct: false },
            { text: "The concentration of Sample One is double that of Sample Two.", correct: true },
        ]
    },
    {
        //#38
        question: "Two samples of copper (II) sulfate were analyzed using visible light spectroscopy. Sample One absorbed twice as much light as Sample Two. What must be true of the solutions in order to get results from this type of spectroscopy?",
        answers: [
            { text: "They need to be colored.", correct: true },
            { text: "They need to be transparent to ensure accurate measurement of light absorption.", correct: false },
            { text: "They must be at the same temperature, as temperature variations can affect the absorption spectra.", correct: false },
            { text: "They need to be diluted, because highly concentrated solutions do not interact properly with visible light spectroscopy.", correct: false },
        ]
    },
    {
        //#39
        question: "What molecular motion or transition does infrared electromagnetic radiation cause.",
        answers: [
            { text: "Rotational Motion", correct: false },
            { text: "Electronic Transitions", correct: false },
            { text: "Vibrational Motion", correct: true },
        ]
    },
    {
        //#40
        question: "What molecular motion or transition does Ultraviolet-Visible Light electromagnetic radiation cause.",
        answers: [
            { text: "Rotational Motion", correct: false },
            { text: "Electronic Transitions", correct: true },
            { text: "Vibrational Motion", correct: false },
        ]
    },
    {
        //#41
        question: "What molecular motion or transition does microwave electromagnetic radiation cause.",
        answers: [
            { text: "Rotational Motion", correct: true },
            { text: "Electronic Transitions", correct: false },
            { text: "Vibrational Motion", correct: false },
        ]
    },
    //Topic 3.12
    {
        //#42
        question: "What is the frequency of light with photon energy 3.3 x 10<sup>-19</sup> J?",
        answers: [
            { text: "6.7 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
            { text: "5.0 x 10<sup>14</sup> s<sup>-</sup>", correct: true },
            { text: "3.1 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
            { text: "1.5 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
        ]
    },
    {
        //#43
        question: "Calculate the wavelength for light with energy 3.3 x 10<sup>-19</sup> J?",
        answers: [
            { text: "4.1 x 10<sup>-7</sup> m", correct: false },
            { text: "1.8 x 10<sup>-7</sup> m", correct: false },
            { text: "7.6 x 10<sup>-7</sup> m", correct: false },
            { text: "6.0 x 10<sup>-7</sup> m", correct: true },
        ]
    },
    {
        //#44
        question: "CuSO<sub>4</sub> solutions absorb light at a wavelength of 635 nm. Calculate the approximate energy of one photon of this light.",
        answers: [
            { text: "3.13 x 10<sup>-19</sup> J", correct: true },
            { text: "7.84 x 10<sup>-19</sup> J", correct: false },
            { text: "1.79 x 10<sup>-19</sup> J", correct: false },
            { text: "5.91 x 10<sup>-19</sup> J", correct: false },
        ]
    },
    {
        //#45
        question: "The energy required to eject an electron from sodium metal using the photoelectric effect is 275 kJ/mol. What is the maximum wavelength in nm needed for this to occur?",
        answers: [
            { text: "597 nm", correct: false },
            { text: "859 nm", correct: false },
            { text: "435 nm", correct: true },
            { text: "157 nm", correct: false },
        ]
    },
    {
        //#46
        question: "Calculate the frequency of red light with a wavelength of 715 nm.",
        answers: [
            { text: "4.20 x 10<sup>14</sup> s<sup>-</sup>", correct: true },
            { text: "1.46 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
            { text: "5.87 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
            { text: "7.17 x 10<sup>14</sup> s<sup>-</sup>", correct: false },
        ]
    },
    //Topic 3.13
    {
        //#47
        question: "When handling a cuvette it is very important to clean it and make sure that you don't leave fingerprints on the glass. What would happen to the absorbance if there were fingerprints on the surface of the cuvette?",
        answers: [
            { text: "The fingerprints will scatter the light, leading to a lower measured absorbance value due to light being deflected away from the detector.", correct: false },
            { text: "The fingerprints will have no significant effect on the absorbance measurement because they are not part of the solution being analyzed.", correct: false },
            { text: "The fingerprints will cause an increase in light transmission, resulting in a lower absorbance reading as more light passes through the cuvette.", correct: false },
            { text: "The fingerprints will absorb light, causing the measured absorbance value to be too high.", correct: true },
        ]
    },
    {
        //#48
        question: "The standard size of a cuvette is 1 cm. How would the absorbance data be different if you used cuvettes that were twice the width?",
        answers: [
            { text: "The absorbance would be halved because the light path would be longer, allowing more light to pass through.", correct: false },
            { text: "The absorbance would double because a wider cuvette increases the path length, resulting in higher absorbance values.", correct: true },
            { text: "The absorbance would remain unchanged because the concentration of the solution is the same regardless of the cuvette size.", correct: false },
            { text: "The absorbance would decrease because the larger cuvette allows for more light scattering and less direct absorption.", correct: false },
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