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
            { text: "Lithium Nitrate", correct: false},
            { text: "Lithium Nitrite", correct: false},
            { text: "Lithium Sulfite", correct: true},
            { text: "Lithium Sulfate", correct: false},
        ]
 },
        { //#22
        question: "What is the name of Cu<sub>2</sub>O?",
        answers: [
            { text: "Copper (II) Oxide", correct: false},
            { text: "Copper (I) Oxide", correct: true},
            { text: "Copper (III) Oxide", correct: false},
            { text: "Copper (IV) Oxide", correct: false},
        ]
 },
       { //#23
        question: "What is the name of PF<sub>3</sub>?",
        answers: [
            { text: "Potassium Trifluoride", correct: false},
            { text: "Potassium Fluoride", correct: false},
            { text: "Phosphorus Trifluoride", correct: true},
            { text: "Phosphorus Fluoride", correct: false},
        ]
 },
        { //#24
        question: "What is the name of Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "Lithium Sulfate", correct: false},
            { text: "Lithium Sulfide", correct: false},
            { text: "Lithium Sulfite", correct: true},
            { text: "Sulfurous Lithium", correct: false},
        ]
 },
        { //#25
        question: "What is the name of GaCl<sub>3</sub>?",
        answers: [
            { text: "Gallium Chlorite", correct: false},
            { text: "Gallium Trichloride", correct: false},
            { text: "Gallium Chloride", correct: true},
            { text: "Gallium Chlorate", correct: false},
        ]
  },
       { //#26
        question: "What is the name of Si<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "Disilicon Hexabromide", correct: true},
            { text: "Silicon Hexabromide", correct: false},
            { text: "Disilicon Bromide", correct: false},
            { text: "Disilicon Hexabromite", correct: false},
        ]
    },
       { //#27
        question: "What is the name of ZnCO<sub>3</sub>?",
        answers: [
            { text: "Zinc Carbonous", correct: false},
            { text: "Zinc Carbate", correct: false},
            { text: "Zinc Carbonite", correct: false},
            { text: "Zinc Carbonate", correct: true},
        ]
    },
       { //#28
        question: "What is the name of Ag<sub>3</sub>P?",
        answers: [
            { text: "Silver Phosphite", correct: false},
            { text: "Silver Phosphate", correct: false},
            { text: "Silver Phosphide", correct: true},
            { text: "Silver Phosphorous", correct: false},
        ]
   },
       { //#29
        question: "What is the name of Cr(CO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "Chromium (VI) Carbonate", correct: true},
            { text: "Chromium (IV) Carbonate", correct: false},
            { text: "Chromium (VI) Carbonite", correct: false},
            { text: "Chromium (IV) Carbonite", correct: false},
        ]
   },
       { //#30
        question: "What is the name of Mo(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "Molybdenum Sulfite", correct: false},
            { text: "Molybdenum Sulfur", correct: false},
            { text: "Molybdenum Sulfate", correct: true},
            { text: "Molybdenum Sulfurous", correct: false},
        ]
   },
       { //#31
        question: "What is the name of V<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "Vanadium (IV) Sulfate", correct: false},
            { text: "Vanadium (II) Sulfite", correct: false},
            { text: "Vanadium (III) Sulfite", correct: false},
            { text: "Vanadium (III) Sulfate", correct: true},
        ]
   },
       { //#32
        question: "What is the name of Se<sub>2</sub>I<sub>2</sub>?",
        answers: [
            { text: "Selenium Diiodide", correct: false},
            { text: "Diselenium Diiodide", correct: true},
            { text: "Diselenium Iodide", correct: false},
            { text: "Selenium Iodide", correct: false},
        ]
   },
       { //#33
        question: "What is the name of (NH<sub>4</sub>)<sub>2</sub>O?",
        answers: [
            { text: "Ammonium Oxide", correct: true},
            { text: "Ammonium Oxate", correct: false},
            { text: "Ammonia Oxide", correct: false},
            { text: "Ammonia Oxate", correct: false},
        ]
   },
       { //#34
        question: "What is the name of (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "Ammonia Sulfate", correct: false},
            { text: "Ammonia Sulfite", correct: false},
            { text: "Ammonium Sulfate", correct: true},
            { text: "Ammonium Sulfite", correct: false},
        ]
   },
       { //#35
        question: "What is the name of S<sub>4</sub>N<sub>2</sub>?",
        answers: [
            { text: "Sulfur Dinitride", correct: false},
            { text: "Tetrasulfur Dinitride", correct: true},
            { text: "Tetrasulfur Nitride", correct: false},
            { text: "Sulfur Nitride", correct: false},
        ]
   },
       { //#36
        question: "What is the name of P<sub>2</sub>O<sub>5</sub>?",
        answers: [
            { text: "Phosphorus Pentoxide", correct: false},
            { text: "Diphosphorus Oxide", correct: false},
            { text: "Diphosphorus Pentoxide", correct: true},
            { text: "Phosphorus Oxide", correct: false},
        ]
   },
       { //#37
        question: "What is the name of Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Iron (II) Phosphate", correct: true},
            { text: "Iron (I) Phosphate", correct: false},
            { text: "Iron (III) Phosphate", correct: false},
            { text: "Iron (IV) Phosphate", correct: false},
        ]
   },
       { //#38
        question: "What is the name of Pb(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Lead (VI) Sulfate", correct: false},
            { text: "Lead (IV) Sulfate", correct: true},
            { text: "Lead (III) Sulfate", correct: false},
            { text: "Lead (II) Sulfate", correct: false},
        ]
   },
       { //#39
        question: "What is the name of Mn<sub>3</sub>As<sub>7</sub>?",
        answers: [
            { text: "Manganese (VI) Arsenide", correct: false},
            { text: "Manganese (VII) Arsenide", correct: true},
            { text: "Manganese (III) Arsenide", correct: false},
            { text: "Manganese (IV) Arsenide", correct: false},
        ]
   },
       { //#40
        question: "What is the name of KMnO<sub>4</sub>?",
        answers: [
            { text: "Potassium Manganate", correct: false},
            { text: "Potassium Magnesium", correct: false},
            { text: "Phosphorus Permanganate", correct: false},
            { text: "Potassium Permanganate", correct: true},
        ]
   },
       { //#41
        question: "What is the name of N<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Dinitrogen Trioxide", correct: true},
            { text: "Nitrogen Trioxide", correct: false},
            { text: "Nitrogen Oxide", correct: false},
            { text: "Dinitrogen Oxide", correct: false},
        ]
   },
       { //#42
        question: "What is the name of GaCl<sub>3</sub>?",
        answers: [
            { text: "Gallium Chlorous", correct: false},
            { text: "Gallium Chlorite", correct: false},
            { text: "Gallium Chloride", correct: true},
            { text: "Gallium Chlorate", correct: false},
        ]
   },
       { //#43
        question: "What is the name of CH<sub>4</sub>?",
        answers: [
            { text: "Methane", correct: true},
            { text: "Carbon Tetrahydride", correct: false},
            { text: "Methine", correct: false},
            { text: "Ethane", correct: false},
        ]
   },
       { //#44
        question: "What is the name of P<sub>4</sub>Se<sub>3</sub>?",
        answers: [
            { text: "Phosphorus Triselenide", correct: false},
            { text: "Tetraphosphorus Triselenide", correct: true},
            { text: "Tetraphosphorus Selenide", correct: false},
            { text: "Phosphorus Selenide", correct: false},
        ]
   },
       { //#45
        question: "What is the name of AgCN?",
        answers: [
            { text: "Silver Carbonous Nitrate", correct: false},
            { text: "Silver Cyanite", correct: false},
            { text: "Silver Cyanide", correct: true},
            { text: "Silver Cyanate", correct: false},
        ]
   },
       { //#46
        question: "What is the name of Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Strontium Acetate", correct: true},
            { text: "Strontium Carbonous Acid", correct: false},
            { text: "Strontium Acetic Acid", correct: false},
            { text: "Strontious Acetate", correct: false},
        ]
   },
       { //#47
        question: "What is the name of VO<sub>2</sub>?",
        answers: [
            { text: "Vanadium (VI) Oxide", correct: false},
            { text: "Vanadium (III) Oxide", correct: false},
            { text: "Vanadium (II) Oxide", correct: false},
            { text: "Vanadium (IV) Oxide", correct: true},
        ]
   },
       { //#48
        question: "What is the name of KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Acetate", correct: true},
            { text: "Potassium Acetic Acid", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
   },
       { //#49
        question: "What is the name of KOH?",
        answers: [
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Hydride", correct: false},
            { text: "Potassium Hydroxite", correct: false},
            { text: "Potassium Hydroxide", correct: true},
        ]
   },
       { //#50
        question: "What is the name of CaCO<sub>3</sub>?",
        answers: [
            { text: "Calcium Carbonous Acid", correct: false},
            { text: "Calcium Carbon", correct: false},
            { text: "Calcium Carbonate", correct: true},
            { text: "Calcium Carbonite", correct: false},
        ]
   },
       { //#51
        question: "What is the name of Cu(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Copper (I) Nitrite", correct: true},
            { text: "Copper (II) Nitrite", correct: false},
            { text: "Copper (III) Nitrite", correct: false},
            { text: "Copper (IV) Nitrite", correct: false},
        ]
   },
       { //#52
        question: "What is the name of LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Lithium Acetate", correct: true},
            { text: "Lithium Acetite", correct: false},
            { text: "Lithium Acetic Acid", correct: false},
            { text: "Lithium Carbonous Hydride", correct: false},
        ]
   },
       { //#53
        question: "What is the name of NaBr?",
        answers: [
            { text: "Sodium Bromine", correct: false},
            { text: "Sodium Bromate", correct: false},
            { text: "Sodium Bromite", correct: false},
            { text: "Sodium Bromide", correct: true},
        ]
   },
       { //#54
        question: "What is the name of Ni<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "Nickel (II) Sulfide", correct: false},
            { text: "Nickel (III) Sulfide", correct: true},
            { text: "Nickel (IV) Sulfide", correct: false},
            { text: "Nickel (III) Sulfite", correct: false},
        ]
   },
       { //#55
        question: "What is the name of Ti(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Titanium (IV) Sulfate", correct: true},
            { text: "Titanium (III) Sulfate", correct: false},
            { text: "Titanium (II) Sulfate", correct: false},
            { text: "Titanium (I) Sulfate", correct: false},
        ]
   },
       { //#56
        question: "What is the name of SiO<sub>2</sub>?",
        answers: [
            { text: "Silicon Oxide", correct: false},
            { text: "Silicon Oxite", correct: false},
            { text: "Silicon Oxate", correct: false},
            { text: "Silicon Dioxide", correct: true},
        ]
   },
       { //#57
        question: "What is the name of CuOH?",
        answers: [
            { text: "Copper (I) Hydroxide", correct: true},
            { text: "Copper (II) Hydroxide", correct: false},
            { text: "Copper (III) Hydroxide", correct: false},
            { text: "Copper (IV) Hydroxide", correct: false},
        ]
   },
       { //#58
        question: "What is the name of NH<sub>3</sub>?",
        answers: [
            { text: "Ammonium", correct: false},
            { text: "Ammonia", correct: true},
            { text: "Nitrogen Trihydride", correct: false},
            { text: "Nitrogen Hydronium", correct: false},
        ]
   },
       { //#59
        question: "What is the name of B<sub>2</sub>H<sub>4</sub>?",
        answers: [
            { text: "Boron Tetrahydride", correct: false},
            { text: "Diboron Hydride", correct: false},
            { text: "Diboron Tetrahydride", correct: true},
            { text: "Boron Hydride", correct: false},
        ]
   },
       { //#60
        question: "What is the name of Pb<sub>3</sub>N<sub>2</sub>?",
        answers: [
            { text: "Lead (II) Nitride", correct: true},
            { text: "Lead (III) Nitride", correct: false},
            { text: "Lead (IV) Nitride", correct: false},
            { text: "Lead (II) Nitrite", correct: false},
        ]
   },
       { //#61
        question: "What is the name of PtS?",
        answers: [
            { text: "Platinum (I) Sulfide", correct: false},
            { text: "Platinum (II) Sulfide", correct: true},
            { text: "Platinum (IV) Sulfide", correct: false},
            { text: "Platinum (III) Sulfide", correct: false},
        ]
   },
       { //#62
        question: "What is the name of Fe<sub>3</sub>P<sub>2</sub>?",
        answers: [
            { text: "Iron (I) Phosphide", correct: false},
            { text: "Iron (III) Phosphide", correct: false},
            { text: "Iron (IV) Phosphide", correct: false},
            { text: "Iron (II) Phosphide", correct: true},
        ]
   },
       { //#63
        question: "What is the name of Cu(CIO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Copper (II) Chlorate", correct: true},
            { text: "Copper (III) Chlorate", correct: false},
            { text: "Copper (II) Chlorite", correct: false},
            { text: "Copper (III) Chlorite", correct: false},
        ]
   },
       { //#64
        question: "What is the name of SnS<sub>2</sub>?",
        answers: [
            { text: "Tin (IV) Sulfite", correct: false},
            { text: "Tin (IV) Sulfatee", correct: false},
            { text: "Tin (III) Sulfide", correct: false},
            { text: "Tin (IV) Sulfide", correct: true},
        ]
   },
       { //#65
        question: "What is the name of Ag<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "Silver Phosphite", correct: false},
            { text: "Silver Phosphorous", correct: false},
            { text: "Silver Phosphate", correct: true},
            { text: "Silver Phosphide", correct: false},
        ]
   },
       { //#66
        question: "What is the name of CaBr<sub>2</sub>?",
        answers: [
            { text: "Calcium Bromine", correct: false},
            { text: "Calcium Bromate", correct: false},
            { text: "Calcium Bromide", correct: true},
            { text: "Calcium Bromite", correct: false},
        ]
   },
       { //#67
        question: "What is the name of Ga<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Gallium Oxalate", correct: false},
            { text: "Gallium Oxate", correct: false},
            { text: "Gallium Oxide", correct: true},
            { text: "Gallium Oxite", correct: false},
        ]
   },
       { //#68
        question: "What is the name of NH<sub>4</sub>F?",
        answers: [
            { text: "Ammonia Fluoride", correct: false},
            { text: "Ammonia Fluorite", correct: false},
            { text: "Ammonium Fluorite", correct: false},
            { text: "Ammonium Fluoride", correct: true},
        ]
   },
       { //#69
        question: "What is the name of V<sub>3</sub>N<sub>5</sub>?",
        answers: [
            { text: "Vanadium (VI) Nitride", correct: false},
            { text: "Vanadium (V) Nitride", correct: true},
            { text: "Vanadium (IV) Nitride", correct: false},
            { text: "Vanadium (III) Nitride", correct: false},
        ]
   },
       { //#70
        question: "What is the name of FeSO<sub>4</sub>?",
        answers: [
            { text: "Iron (III) Sulfate", correct: false},
            { text: "Iron (II) Sulfate", correct: true},
            { text: "Iron (IV) Sulfate", correct: false},
            { text: "Iron (I) Sulfatee", correct: false},
        ]
   },
       { //#71
        question: "What is the name of SiF<sub>4</sub>?",
        answers: [
            { text: "Silicon Fluoride", correct: false},
            { text: "Silicon Fluorite", correct: false},
            { text: "Silicon Tetrafluorite", correct: false},
            { text: "Silicon Tetrafluoride", correct: true},
        ]
   },
       { //#72
        question: "What is the name of N<sub>2</sub>?",
        answers: [
            { text: "Dinitrogen", correct: false},
            { text: "Nitrogen", correct: true},
            { text: "Dinitride", correct: false},
            { text: "Nitrous Gas", correct: false},
        ]
   },
       { //#73
        question: "What is the name of C<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "Carbon Hexabromide", correct: false},
            { text: "Dicarbon Bromide", correct: false},
            { text: "Dicarbon Hexabromite", correct: false},
            { text: "Dicarbon Hexabromide", correct: true},
        ]
   },
       { //#74
        question: "What is the name of P<sub>4</sub>?",
        answers: [
            { text: "Tetraphosphorus", correct: false},
            { text: "Phosphorus", correct: true},
            { text: "Phosphide", correct: false},
            { text: "Phosphic Gas", correct: false},
        ]
    },
        { //#75
        question: "What is the name of CoBr<sub>2</sub>?",
        answers: [
            { text: "Cobalt (I) Bromide", correct: false},
            { text: "Cobalt (III) Bromide", correct: false},
            { text: "Cobalt (IV) Bromide", correct: false},
            { text: "Cobalt (II) Bromide", correct: true},
        ]
   },
       { //#76
        question: "What is the name of Al(OH)<sub>3</sub>?",
        answers: [
            { text: "Aluminum Hydride", correct: false},
            { text: "Aluminum Hydroxide", correct: true},
            { text: "Aluminum Hydronium", correct: false},
            { text: "Aluminum Hydroxic Acid", correct: false},
        ]
   },
       { //#77
        question: "What is the name of Ti(CN)<sub>4</sub>?",
        answers: [
            { text: "Titanium (I) Cyanide", correct: false},
            { text: "Titanium (II) Cyanide", correct: false},
            { text: "Titanium (III) Cyanide", correct: false},
            { text: "Titanium (IV) Cyanide", correct: true},
        ]
   },
       { //#78
        question: "What is the name of K<sub>2</sub>CO<sub>3</sub>?",
        answers: [
            { text: "Potassium Carbonate", correct: true},
            { text: "Potassium Carbonite", correct: false},
            { text: "Potassium Carbonide", correct: false},
            { text: "Potassium Carbonous Acid", correct: false},
        ]
   },
       { //#79
        question: "What is the name of K<sub>3</sub>N?",
        answers: [
            { text: "Potassium Nitrite", correct: false},
            { text: "Potassium Nitrate", correct: false},
            { text: "Potassium Nitrogen", correct: false},
            { text: "Potassium Nitride", correct: true},
        ]
   },
       { //#80
        question: "What is the name of GaAs?",
        answers: [
            { text: "Gallium Arsenic", correct: false},
            { text: "Gallium Arsenide", correct: true},
            { text: "Gallium Arsenite", correct: false},
            { text: "Gallium Arsenate", correct: false},
        ]
   },
       { //#81
        question: "What is the name of Pb<sub>3</sub>N<sub>2</sub>?",
        answers: [
            { text: "Lead (III) Nitrite", correct: false},
            { text: "Lead (IV) Nitrate", correct: false},
            { text: "Lead (II) Nitride", correct: true},
            { text: "Lead (I) Nitrogen", correct: false},
        ]
   },
       { //#82
        question: "What is the name of Be(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Beryllium Bicarbonate", correct: true},
            { text: "Beryllium Carbonate", correct: false},
            { text: "Beryllium Bicarbonite", correct: false},
            { text: "Beryllium Bicarbonous", correct: false},
        ]
   },
       { //#83
        question: "What is the name of Ti(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Titanium (III) Acetate", correct: false},
            { text: "Titanium (II) Acetate", correct: true},
            { text: "Titanium (III) Acetite", correct: false},
            { text: "Titanium (II) Acetite", correct: false},
        ]
   },
       { //#84
        question: "What is the name of Sn(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Tin (II) Nitrite", correct: true},
            { text: "Tin (I) Nitrite", correct: false},
            { text: "Tin (III) Nitrite", correct: false},
            { text: "Tin (IV) Nitrite", correct: false},
        ]
   },
       { //#85
        question: "What is the name of Mn<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "Manganese (II) Sulfate", correct: false},
            { text: "Manganese (III) Sulfate", correct: false},
            { text: "Manganese (III) Sulfite", correct: true},
            { text: "Manganese (II) Sulfite", correct: false},
        ]
   },
       { //#86
        question: "What is the name of NH<sub>4</sub>Cl?",
        answers: [
            { text: "Ammonium Chlorite", correct: false},
            { text: "Ammonium Chloride", correct: true},
            { text: "Ammonia Chloride", correct: false},
            { text: "Ammonia Chlorite", correct: false},
        ]
   },
       { //#87
        question: "What is the name of Cr(OH)<sub>3</sub>?",
        answers: [
            { text: "Chromium (II) Hydroxide", correct: false},
            { text: "Chromium (I) Hydroxide", correct: false},
            { text: "Chromium (IV) Hydroxide", correct: false},
            { text: "Chromium (III) Hydroxide", correct: true},
        ]
   },
       { //#88
        question: "What is the name of V<sub>2</sub>S<sub>5</sub>?",
        answers: [
            { text: "Vanadium (VI) Sulfide", correct: false},
            { text: "Vanadium (V) Sulfide", correct: true},
            { text: "Vanadium (VI) Sulfite", correct: false},
            { text: "Vanadium (V) Sulfite", correct: false},
        ]
   },
       { //#89
        question: "What is the name of Cu<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "Copper (II) Phosphite", correct: false},
            { text: "Copper (I) Phosphite", correct: false},
            { text: "Copper (II) Phosphate", correct: false},
            { text: "Copper (I) Phosphate", correct: true},
        ]
   },
       { //#90
        question: "What is the name of TiBr<sub>3</sub>?",
        answers: [
            { text: "Titanium (I) Bromide", correct: false},
            { text: "Titanium (III) Bromide", correct: true},
            { text: "Titanium (IV) Bromide", correct: false},
            { text: "Titanium (II) Bromide", correct: false},
        ]
   },
       { //#91
        question: "What is the name of Zn(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Zinc Nitrogen", correct: false},
            { text: "Zinc Nitrite", correct: true},
            { text: "Zinc Nitride", correct: false},
            { text: "Zinc Nitrate", correct: false},
        ]
   },
       { //#92
        question: "What is the name of P<sub>2</sub>O<sub>5</sub>?",
        answers: [
            { text: "Phosphorus Pentoxide", correct: false},
            { text: "Diphosphorus Oxide", correct: false},
            { text: "Diphosphorus Pentoxide", correct: true},
            { text: "Phosphorus Oxide", correct: false},
        ]
   },
       { //#93
        question: "What is the name of NaBr?",
        answers: [
            { text: "Sodium Bromite", correct: false},
            { text: "Sodium Bromate", correct: false},
            { text: "Sodium Bromine", correct: false},
            { text: "Sodium Bromide", correct: true},
        ]
   },
       { //#94
        question: "What is the name of N<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Nitrogen Trioxide", correct: false},
            { text: "Dinitrogen Oxide", correct: false},
            { text: "Dinitrogen Trioxide", correct: true},
            { text: "Nitrogen Oxide", correct: false},
        ]
   },
       { //#95
        question: "What is the name of V(CO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Vanadium (VI) Carbonite", correct: false},
            { text: "Vanadium (IV) Carbonite", correct: false},
            { text: "Vanadium (IV) Carbonate", correct: true},
            { text: "Vanadium (VI) Carbonate", correct: false},
        ]
   },
       { //#96
        question: "What is the name of AgBr?",
        answers: [
            { text: "Silver Bromide", correct: true},
            { text: "Silver Bromite", correct: false},
            { text: "Silver Phosphide", correct: false},
            { text: "Silver Bromate", correct: false},
        ]
   },
       { //#97
        question: "What is the name of Lil?",
        answers: [
            { text: "Monolithus Iodide", correct: false},
            { text: "Lithium Iodate", correct: false},
            { text: "Lithium Iodide", correct: true},
            { text: "Lithium Iodite", correct: false},
        ]
   },
       { //#98
        question: "What is the name of Fe(NO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "Iron (IV) Nitrate", correct: false},
            { text: "Iron (I) Nitrate", correct: false},
            { text: "Iron (II) Nitrate", correct: false},
            { text: "Iron (III) Nitrate", correct: true},
        ]
   },
       { //#99
        question: "What is the name of Zn<sub>3</sub>P<sub>2</sub>?",
        answers: [
            { text: "Zinc Phosphorus", correct: false},
            { text: "Zinc Phosphate", correct: false},
            { text: "Zinc Phosphite", correct: false},
            { text: "Zinc Phosphide", correct: true},
        ]
   },
       { //#100
        question: "What is the name of YCIO<sub>3</sub>?",
        answers: [
            { text: "Yttrium Chlorite", correct: false},
            { text: "Yttrium Chloride", correct: false},
            { text: "Yttrium Chlorine", correct: false},
            { text: "Yttrium Chlorate", correct: true},
        ]
   },
       { //#101
        question: "What is the name of Ti(NO<sub>3</sub>)<sub>4</sub>?",
        answers: [
            { text: "Titanium (VI) Nitrate", correct: false},
            { text: "Titanium (IV) Nitrate", correct: true},
            { text: "Titanium (VI) Nitrite", correct: false},
            { text: "Titanium (IV) Nitrite", correct: false},
        ]
   },
       { //#102
        question: "What is the name of Be(OH)<sub>2</sub>?",
        answers: [
            { text: "Beryllium Hydronium", correct: false},
            { text: "Beryllium Hydroxite", correct: false},
            { text: "Beryllium Hydride", correct: false},
            { text: "Beryllium Hydroxide", correct: true},
        ]
   },
       { //#103
        question: "What is the name of CoCO<sub>3</sub>?",
        answers: [
            { text: "Cobalt (II) Carbonate", correct: true},
            { text: "Cobalt (I) Carbonate", correct: false},
            { text: "Cobalt (III) Carbonate", correct: false},
            { text: "Cobalt (IV) Carbonate", correct: false},
        ]
   },
       { //#104
        question: "What is the name of Na<sub>2</sub>CO<sub>3</sub>?",
        answers: [
            { text: "Sodium Carbonite", correct: false},
            { text: "Sodium Carbonide", correct: false},
            { text: "Sodium Carbonous Oxide", correct: false},
            { text: "Sodium Carbonate", correct: true},
        ]
   },
       { //#105
        question: "What is the name of IO<sub>2</sub>?",
        answers: [
            { text: "Iodine Dioxite", correct: false},
            { text: "Iodine Dioxine", correct: false},
            { text: "Iodine Dioxide", correct: true},
            { text: "Iodine Dioxate", correct: false},
        ]
   },
       { //#106
        question: "What is the name of NaH?",
        answers: [
            { text: "Monosodious Hydride", correct: false},
            { text: "Sodium Hydroxide", correct: false},
            { text: "Sodium Hydrite", correct: false},
            { text: "Sodium Hydride", correct: true},
        ]
   },
       { //#107
        question: "What is the name of NiPO<sub>4</sub>?",
        answers: [
            { text: "Nickel (II) Phosphate", correct: false},
            { text: "Nickel (III) Phosphate", correct: true},
            { text: "Nickel (II) Phosphite", correct: false},
            { text: "Nickel (III) Phosphite", correct: false},
        ]
   },
       { //#108
        question: "What is the name of SiO<sub>2</sub>?",
        answers: [
            { text: "Silicon Oxide", correct: false},
            { text: "Silicon Dioxide", correct: true},
            { text: "Silicon Dioxite", correct: false},
            { text: "Silicon Dioxate", correct: false},
        ]
   },
       { //#109
        question: "What is the name of TiSe?",
        answers: [
            { text: "Titanium (II) Selenide", correct: true},
            { text: "Titanium (II) Selenite", correct: false},
            { text: "Titanium (III) Selenide", correct: false},
            { text: "Titanium (III) Selenite", correct: false},
        ]
   },
       { //#110
        question: "What is the name of Al(CN)<sub>3</sub>?",
        answers: [
            { text: "Aluminum Cyanite", correct: false},
            { text: "Aluminum Oxalite", correct: false},
            { text: "Aluminum Cyanide", correct: true},
            { text: "Aluminum Oxalate", correct: false},
        ]
   },
       { //#111
        question: "What is the name of Cu<sub>3</sub>P?",
        answers: [
            { text: "Copper (II) Phosphite", correct: false},
            { text: "Copper (I) Phosphite", correct: false},
            { text: "Copper (II) Phosphide", correct: false},
            { text: "Copper (I) Phosphide", correct: true},
        ]
   },
       { //#112
        question: "What is the name of Co<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "Cobalt (III) Oxide", correct: true},
            { text: "Cobalt (III) Oxite", correct: false},
            { text: "Cobalt (II) Oxite", correct: false},
            { text: "Cobalt (II) Oxide", correct: false},
        ]
   },
       { //#113
        question: "What is the name of Sc(OH)<sub>3</sub>?",
        answers: [
            { text: "Scandium Hydroxite", correct: false},
            { text: "Scandium Hydride", correct: false},
            { text: "Scandium Hydroxide", correct: true},
            { text: "Scandium Hydronium", correct: false},
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
        while(questionNumber === qIndex){
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
    while(visitedQuestions.includes(qIndex)){
        questionNumber = Math.floor(Math.random() * questions.length);
        while(questionNumber === qIndex){
            questionNumber = Math.floor(Math.random() * questions.length);
        }
    }
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