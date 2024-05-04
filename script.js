const questions = [
    {
        //#1
        question: "What is the name of KNO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Potassium Sulfate", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
    },
    {
        //#2
        question: "What is the name of Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "Sodium Nitrate", correct: false},
            { text: "Sodium Nitrite", correct: false},
            { text: "Sodium Sulfate", correct: true},
            { text: "Sodium Sulfite", correct: false},
        ]
    },
    { //#3
        question: "What is the name of CaSO<sub>4</sub>?",
        answers: [
            { text: "Calcium Nitrate", correct: false},
            { text: "Calcium Nitrite", correct: false},
            { text: "Calcium Sulfate", correct: true},
            { text: "Calcium Sulfite", correct: false},
        ]
    },
    { //#4
        question: "What is the formula of Chromium (VI) Phosphate?",
        answers: [
            { text: "Cr<sub>3</sub>(PO<sub>4</sub>)", correct: false},
            { text: "Cr<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub>", correct: false},
            { text: "Cr(PO<sub>4</sub>)", correct: false},
            { text: "Cr(PO<sub>4</sub>)<sub>2</sub>", correct: true},
        ]
    },
    { //#5
        question: "What is the name of CO?",
        answers: [
            { text: "Carbon Oxide", correct: false},
            { text: "Carbonic Oxide", correct: false},
            { text: "Carbon Monoxide", correct: true},
            { text: "Monocarbonic Oxide", correct: false},
        ]
    },
    { //#6
        question: "What is the formula of Magnesium Sulfate Heptahydrate?",
        answers: [
            { text: "Mg(SO<sub>4</sub>) * 7H<sub>2</sub>O", correct: true},
            { text: "Mg(SO<sub>4</sub>) * 6H<sub>2</sub>O", correct: false},
            { text: "Mg(SO<sub>3</sub>) * 7H<sub>2</sub>O", correct: false},
            { text: "Mg(SO<sub>3</sub>) * 6H<sub>2</sub>O", correct: false},
        ]
    },
    {  //#7
        question: "What is the name of CCI<sub>4</sub>?",
        answers: [
            { text: "Carbon Chloride", correct: false},
            { text: "Carbon Tetrachloride", correct: true},
            { text: "Carbon Chlorate", correct: false},
            { text: "Carbon Pentachloride", correct: false},
        ]
    },
    { //#8
        question: "What is the name of V<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "Vanadium(III) Sulfide", correct: true },
            { text: "Vanadium(II) Sulfide", correct: false},
            { text: "Vanadium(IV) Sulfide", correct: false },
            { text: "Vanadium(VI) Sulfide", correct: false},
        ]
    },
    { //#9
        question: "What is the name of SO<sub>2</sub>?" ,
        answers: [
            { text: "Sulfuric Acid", correct: false},
            { text: "Sulfur Monoxide", correct: false},
            { text: "Sulfur Oxide", correct: false},
            { text: "Sulfur Dioxide", correct: true},
        ]
    },
    { //#10
        question: "What is the name of AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Carbon Oxide", correct: false},
            { text: "Silver Acetate", correct: true},
            { text: "Carbon Tetrachloride", correct: false} ,
            { text: "Monocarbonic Oxide", correct: false},
        ]
    },
    { //#11
        question: "What is the name of FePO<sub>4</sub>?",
        answers: [
            { text: "Iron(II) Phosphate", correct: false},
            { text: "Iron(VI) Phosphate", correct: false},
            { text: "Iron(III) Phosphate", correct: true},
            { text: "Iron(IV) Phosphate", correct: false},
        ]
    },
    {  //#12
        question: "What is the name of Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Manganese (II) Phosphate", correct: true},
            { text: "Manganese (VI) Phosphate", correct: false},
            { text: "Manganese (IV) Phosphate", correct: false} ,
            { text: "Manganese (III) Phosphate", correct: false},
        ]
    },
    { //#13
        question: "What is the name of B<sub>2</sub>Br<sub>4</sub>?",
        answers: [
            { text: "Boron(IV) Bromide", correct: false},
            { text: "Tetraboron Octabromide", correct: false},
            { text: "Diboron Tetrabromide", correct: true},
            { text: "Boron Bromide", correct: false},
        ]
    },
    { //#14
        question: "What is the name of SnSe<sub>2</sub>?",
        answers: [
            { text: "Tin (IV) Selenide", correct: true},
            { text: "Tin (II) Selenium", correct: false},
            { text: "Tin (III) Selenide", correct: false},
            { text: "Tin (IV) Selenium", correct: false},
        ]
    },
    { //#15
        question: "What is the name of Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Calcium Acetite", correct: false},
            { text: "Calconic Acetate", correct: false},
            { text: "Acetic Acid", correct: false},
            { text: "Calcium Acetate", correct: true},
        ]
    },
    { //#16
        question: "What is the name of ZnS?",
        answers: [
            { text: "Zinc Sulfur", correct: false},
            { text: "Zinc(III) Sulfide", correct: false},
            { text: "Zinc Sulfide", correct: true},
            { text: "Zinc Sulfite", correct: false},
        ]
    },
	{ //#17
        question: "What is the name of CdSO<sub>3</sub>?",
        answers: [
            { text: "Cadmium Sulfite", correct: true},
            { text: "Cadmium Sulfate", correct: false},
            { text: "Cadmium Sulfide", correct: false},
            { text: "Cadmium Sulfur", correct: false},
        ]
    },
	{ //#18
        question: "What is the name of Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Iron (III) Bicarbonate", correct: false},
            { text: "Iron (II) Carbonate", correct: false},
            { text: "Iron (IV) Bicarbonate", correct: false},
            { text: "Iron (II) Bicarbonate", correct: true},
        ]
    },
	{ //#19
        question: "What is the name of PbS?",
        answers: [
            { text: "Lead (IV) Sulfide", correct: false},
            { text: "Lead Sulfide", correct: false},
            { text: "Lead (II) Sulfide", correct: true},
            { text: "Lead (II) Sulfite", correct: false},
        ]
    },
	{ //#20
        question: "What is the name of BBr<sub>3</sub>?",
        answers: [
            { text: "Boron Tribromide", correct: true},
            { text: "Boron Bromide", correct: false},
            { text: "Boron Tribromine", correct: false},
            { text: "Boronbrominic acid", correct: false},
        ]
    },
    { //#21
        question: "What is the name of Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Lithium Sulfite", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
 },
        { //#22
        question: "What is the name of Cu<sub>2</sub>O?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Copper (I) Oxide", correct: true},
            { text: "Lithium Sulfite", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
 },
       { //#23
        question: "What is the name of PF<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Phosphorus Trifluoride", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
 },
        { //#24
        question: "What is the name of Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Lithium Sulfite", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
 },
        { //#25
        question: "What is the name of GaCl<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Gallium Chloride", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
  },
       { //#26
        question: "What is the name of Si<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "Disilicon Hexabromide", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Lithium Sulfite", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
    },
       { //#27
        question: "What is the name of ZnCO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Lithium Sulfite", correct: false},
            { text: "Zinc Carbonate", correct: true},
        ]
    },
       { //#28
        question: "What is the name of Ag<sub>3</sub>P?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Silver Phosphide", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#29
        question: "What is the name of Cr(CO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "Chromium (VI) Carbonate", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#30
        question: "What is the name of Mo(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Molybdenum Sulfate", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#31
        question: "What is the name of V<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Vanadium (III) Sulfate", correct: true},
        ]
   },
       { //#32
        question: "What is the name of Se<sub>2</sub>I<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Diselenium Diiodide", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#33
        question: "What is the name of (NH<sub>4</sub>)<sub>2</sub>O?",
        answers: [
            { text: "Ammonium Oxide", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#34
        question: "What is the name of (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrite", correct: false},
            { text: "Ammonium Sulfate", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#35
        question: "What is the name of S<sub>4</sub>N<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#36
        question: "What is the name of P<sub>2</sub>O<sub>5</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Diphosphorus Pentoxide", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#37
        question: "What is the name of Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Iron (II) Phosphate", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#38
        question: "What is the name of Pb(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Lead (IV) Sulfate", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#39
        question: "What is the name of Mn<sub>3</sub>As<sub>7</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Manganese (VII) Arsenide", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#40
        question: "What is the name of KMnO<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Permanganate", correct: true},
        ]
   },
       { //#41
        question: "What is the name of N<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Dinitrogen Trioxide", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#42
        question: "What is the name of GaCl<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Gallium Chloride", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#43
        question: "What is the name of CH<sub>4</sub>?",
        answers: [
            { text: "Methane", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#44
        question: "What is the name of P<sub>4</sub>Se<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetraphosphorus Triselenide", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#45
        question: "What is the name of AgCN?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Cyanide", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#46
        question: "What is the name of Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Strontium Acetate", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#47
        question: "What is the name of VO<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Vanadium (IV) Oxide", correct: true},
        ]
   },
       { //#48
        question: "What is the name of KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Acetate", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#49
        question: "What is the name of KOH?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Hydroxide", correct: true},
        ]
   },
       { //#50
        question: "What is the name of CaCO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Calcium Carbonate", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#51
        question: "What is the name of Cu(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Copper (I) Nitrite", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#52
        question: "What is the name of LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Lithium Acetate", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#53
        question: "What is the name of NaBr?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Sodium Bromide", correct: true},
        ]
   },
       { //#54
        question: "What is the name of Ni<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Nickel (III) Sulfide", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#55
        question: "What is the name of Ti(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Titanium (IV) Sulfate", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#56
        question: "What is the name of SiO<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Silicon Dioxide", correct: true},
        ]
   },
       { //#57
        question: "What is the name of CuOH?",
        answers: [
            { text: "Copper (I) Hydroxide", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#58
        question: "What is the name of NH<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Ammonia", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#59
        question: "What is the name of B<sub>2</sub>H<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Diboron Tetrahydride", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#60
        question: "What is the name of Pb<sub>3</sub>N<sub>2</sub>?",
        answers: [
            { text: "Lead (II) Nitride", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#61
        question: "What is the name of PtS?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Platinum (II) Sulfide", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#62
        question: "What is the name of Fe<sub>3</sub>P<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Iron (II) Phosphide", correct: true},
        ]
   },
       { //#63
        question: "What is the name of Cu(CIO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Copper (II) Chlorate", correct: true},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#64
        question: "What is the name of Sns<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Tin (IV) Sulfide", correct: true},
        ]
   },
       { //#65
        question: "What is the name of Ag<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphate", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#66
        question: "What is the name of CaBr<sub>2</sub>?",
        answers: [
            { text: "Cobalt (III) Chromate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Calcium Bromide", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#67
        question: "What is the name of Ga<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Gallium Oxide", correct: true},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#68
        question: "What is the name of NH<sub>4</sub>F?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Ammonium Fluoride", correct: true},
        ]
   },
       { //#69
        question: "What is the name of V<sub>3</sub>N<sub>5</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Vanadium (V) Nitride", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#70
        question: "What is the name of FeSO<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Iron (II) Sulfate", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#71
        question: "What is the name of SiF<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Silicon Tetrafluoride", correct: true},
        ]
   },
       { //#72
        question: "What is the name of N<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Nitrogen", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#73
        question: "What is the name of C<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Tetrasulfur Dinitride", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Dicarbon Hexabromide", correct: true},
        ]
   },
       { //#74
        question: "What is the name of P<sub>4</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Phosphorus", correct: true},
            { text: "Silver Phosphide", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
    },


	
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("tryAgain-btn");

let currentQuestionIndex = 0;
let score  = 0;
let questionNumber;
let qIndex = 0;
let visitedQuestions = [];

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    tryAgainButton.innerHTML = "Try Again";
    showQuestion();
}

function showQuestion(){
    resetState();
    questionNumber = Math.floor(Math.random() * questions.length);
    qIndex = questionNumber;
    while(visitedQuestions.includes(qIndex)){
        questionNumber = Math.floor(Math.random() * questions.length);
        if(questionNumber === qIndex){
            questionNumber = Math.floor(Math.random() * questions.length);

        }
    }
    let currentQuestion = questions[qIndex];
    visitedQuestions.push(qIndex);
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
    resetState();
    
    let currentQuestion = questions[qIndex];
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
    visitedQuestions = [];
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
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