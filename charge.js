const questions = [
    {
        //#1
        question: "What is the oxidation number of Potassium (K) in KNO<sub>3</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#2
        question: "What is the oxidation number of Nitrogen (N) in KNO<sub>3</sub>?",
        answers: [
            { text: "+5", correct: true},
            { text: "-3", correct: false},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#3
        question: "What is the oxidation number of Oxygen (O) in KNO<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#4
        question: "What is the oxidation number of Sodium (Na) in Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#5
        question: "What is the oxidation number of Sulfur (S) in Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "+4", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#6
        question: "What is the oxidation number of Oxygen (O) in Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#7
        question: "What is the oxidation number of Calcium (Ca) in CaSO<sub>4</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#8
        question: "What is the oxidation number of Sulfur (S) in CaSO<sub>4</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "-2", correct: false},
            { text: "+6", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#9
        question: "What is the oxidation number of Oxygen (O) in CaSO<sub>4</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#10
        question: "What is the oxidation number of Chromium (Cr) in Cr(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#11
        question: "What is the oxidation number of Phosphorus (P) in Cr(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+5", correct: true},
            { text: "-3", correct: false},
            { text: "+3", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#12
        question: "What is the oxidation number of Oxygen (O) in Cr(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#13
        question: "What is the oxidation number of Carbon (C) in CO?",
        answers: [
            { text: "-2", correct: false},
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "+2", correct: true}
        ]
    },
    {
        //#14
        question: "What is the oxidation number of Oxygen (O) in CO?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false}
        ]
    },
    {
        //#15
        question: "What is the oxidation number of Carbon (C) in CCl<sub>4</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "-4", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#16
        question: "What is the oxidation number of Chlorine (Cl) in CCl<sub>4</sub>?",
        answers: [
            
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#17
        question: "What is the oxidation number of Vanadium (V) in V<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "+5", correct: false},
            { text: "+2", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#18
        question: "What is the oxidation number of Sulfur (S) in V<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "-2", correct: true},
    
        ]
    },
    {
        //#19
        question: "What is the oxidation number of Sulfur (S) in SO<sub>2</sub>?",
        answers: [
            { text: "+6", correct: false},
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#20
        question: "What is the oxidation number of Oxygen (O) in SO<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: false}
        ]
    },
    {
        //#21
        question: "What is the oxidation number of Silver (Ag) in AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#22
        question: "What is the oxidation number of Carbon (C) in AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "-3", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: true},
        ]
    },
    {
        //#23
        question: "What is the oxidation number of Hydrogen (H) in AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#24
        question: "What is the oxidation number of Oxygen (O) in AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#25
        question: "What is the oxidation number of Iron (Fe) in FePO<sub>4</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "+2", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#26
        question: "What is the oxidation number of Phosphorus (P) in FePO<sub>4</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "+5", correct: true},
            { text: "-3", correct: false},
        ]
    },
    {
        //#27
        question: "What is the oxidation number of Oxygen (O) in FePO<sub>4</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: true},
        ]
    },
    {
        //#28
        question: "What is the oxidation number of Manganese (Mn) in Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: false},
            { text: "+3", correct: false},
            { text: "-3", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#29
        question: "What is the oxidation number of Phosphorus (P) in Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+5", correct: true},
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#30
        question: "What is the oxidation number of Oxygen (O) in Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#31
        question: "What is the oxidation number of Boron (B) in B<sub>2</sub>Br<sub>4</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+2", correct: true},
            { text: "+1", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#32
        question: "What is the oxidation number of Bromine (Br) in B<sub>2</sub>Br<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "-1", correct: true},
        ]
    },
    {
        //#33
        question: "What is the oxidation number of Tin (Sn) in SnSe<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "+3", correct: false},
            { text: "+6", correct: false},
        ]
    },
    {
        //#34
        question: "What is the oxidation number of Selenium (Se) in SnSe<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#35
        question: "What is the oxidation number of Calcium (Ca) in Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: false},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#36
        question: "What is the oxidation number of Carbon (C) in Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: true},
            { text: "+1", correct: false},
        ]
    },
    {
        //#37
        question: "What is the oxidation number of Hydrogen (H) in Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#38
        question: "What is the oxidation number of Oxygen (O) in Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#39
        question: "What is the oxidation number of Zinc (Zn) in ZnS?",
        answers: [
            { text: "-2", correct: false},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#40
        question: "What is the oxidation number of Sulfur (S) in ZnS?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#41
        question: "What is the oxidation number of Cadmium (Cd) in CdSO<sub>3</sub>?",
        answers: [
            { text: "+1", correct: false },
            { text: "+2", correct: true },
            { text: "0", correct: false },
            { text: "+3", correct: false },
        ]
    },
    {
        //#42
        question: "What is the oxidation number of Sulfur (S) in CdSO<sub>3</sub>?",
        answers: [
            { text: "+3", correct: false },
            { text: "+4", correct: true },
            { text: "+2", correct: false },
            { text: "-2", correct: false },
        ]
    },
    {
        //#43
        question: "What is the oxidation number of Oxygen (O) in CdSO<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true },
            { text: "+2", correct: false },
            { text: "0", correct: false },
            { text: "-1", correct: false },
        ]
    },
    {
        //#44
        question: "What is the oxidation number of Iron (Fe) in Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "0", correct: false },
            { text: "+3", correct: false },
            { text: "+1", correct: false },
            { text: "+2", correct: true },
        ]
    },
    {
        //#45
        question: "What is the oxidation number of Carbon (C) in Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true },
            { text: "+3", correct: false },
            { text: "+2", correct: false },
            { text: "+1", correct: false },
        ]
    },
    {
        //#46
        question: "What is the oxidation number of Hydrogen (H) in Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false },
            { text: "+2", correct: false },
            { text: "0", correct: false },
            { text: "+1", correct: true },
        ]
    },
    {
        //#47
        question: "What is the oxidation number of Oxygen (O) in Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true },
            { text: "-1", correct: false },
            { text: "0", correct: false },
            { text: "+2", correct: false },
        ]
    },
    {
        //#48
        question: "What is the oxidation number of Lead (Pb) in PbS?",
        answers: [
            { text: "+2", correct: true },
            { text: "+1", correct: false },
            { text: "0", correct: false },
            { text: "-2", correct: false },
        ]
    },
    {
        //#49
        question: "What is the oxidation number of Sulfur (S) in PbS?",
        answers: [
            { text: "+4", correct: false },
            { text: "+2", correct: false },
            { text: "0", correct: false },
            { text: "-2", correct: true },
        ]
    },
    {
        //#50
        question: "What is the oxidation number of Boron (B) in BBr<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true },
            { text: "+2", correct: false },
            { text: "+1", correct: false },
            { text: "0", correct: false },
        ]
    },
    {
        //#51
        question: "What is the oxidation number of Bromine (Br) in BBr<sub>3</sub>?",
        answers: [
            { text: "+1", correct: false },
            { text: "0", correct: false },
            { text: "-1", correct: true },
            { text: "+3", correct: false },
        ]
    },
    {
        //#52
        question: "What is the oxidation number of Lithium (Li) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "+1", correct: true },
            { text: "0", correct: false },
            { text: "-1", correct: false },
            { text: "+2", correct: false },
        ]
    },
    {
        //#53
        question: "What is the oxidation number of Sulfur (S) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "+4", correct: true },
            { text: "+2", correct: false },
            { text: "0", correct: false },
            { text: "-2", correct: false },
        ]
    },
    {
        //#54
        question: "What is the oxidation number of Oxygen (O) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true },
            { text: "-1", correct: false },
            { text: "0", correct: false },
            { text: "+2", correct: false },
        ]
    },
    {
        //#55
        question: "What is the oxidation number of Copper (Cu) in Cu<sub>2</sub>O?",
        answers: [
            { text: "+2", correct: false },
            { text: "+1", correct: true },
            { text: "0", correct: false },
            { text: "-2", correct: false },
        ]
    },
    {
        //#56
        question: "What is the oxidation number of Oxygen (O) in Cu<sub>2</sub>O?",
        answers: [
            { text: "-2", correct: true },
            { text: "-1", correct: false },
            { text: "0", correct: false },
            { text: "+2", correct: false },
        ]
    },
    {
        //#57
        question: "What is the oxidation number of Phosphorus (P) in PF<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#58
        question: "What is the oxidation number of Fluorine (F) in PF<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
            { text: "+3", correct: false}
        ]
    },
    {
        //#59
        question: "What is the oxidation number of Lithium (Li) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#60
        question: "What is the oxidation number of Sulfur (S) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+6", correct: false},
            { text: "+2", correct: false},
            { text: "+4", correct: true},
        ]
    },
    {
        //#61
        question: "What is the oxidation number of Oxygen (O) in Li<sub>2</sub>SO<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#62
        question: "What is the oxidation number of Gallium (Ga) in GaCl<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#63
        question: "What is the oxidation number of Chlorine (Cl) in GaCl<sub>3</sub>?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: false},
        ]
    },
    {
        //#64
        question: "What is the oxidation number of Silicon (Si) in Si<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+3", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false}
        ]
    },
    {
        //#65
        question: "What is the oxidation number of Bromine (Br) in Si<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false}
        ]
    },
    {
        //#66
        question: "What is the oxidation number of Zinc (Zn) in ZnCO<sub>3</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#67
        question: "What is the oxidation number of Carbon (C) in ZnCO<sub>3</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "-4", correct: false}, 
            { text: "+4", correct: true},
        ]
    },
    {
        //#68
        question: "What is the oxidation number of Oxygen (O) in ZnCO<sub>3</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#69
        question: "What is the oxidation number of Silver (Ag) in Ag<sub>3</sub>P?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false}
        ]
    },
    {
        //#70
        question: "What is the oxidation number of Phosphorus (P) in Ag<sub>3</sub>P?",
        answers: [
            { text: "+3", correct: false},
            { text: "-3", correct: true},
            { text: "+5", correct: false},
            { text: "-1", correct: false}
        ]
    },
    {
        //#71
        question: "What is the oxidation number of Chromium (Cr) in Cr(CO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+6", correct: true},
            { text: "0", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#72
        question: "What is the oxidation number of Carbon (C) in Cr(CO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "+4", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#73
        question: "What is the oxidation number of Oxygen (O) in Cr(CO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#74
        question: "What is the oxidation number of Molybdenum (Mo) in Mo(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#76
        question: "What is the oxidation number of Sulfur (S) in Mo(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+6", correct: true},
            { text: "-2", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#77
        question: "What is the oxidation number of Oxygen (O) in Mo(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-6", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#78
        question: "What is the oxidation number of Vanadium (V) in V<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "+5", correct: false},
            { text: "+4", correct: false},
            { text: "+3", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#79
        question: "What is the oxidation number of Sulfur (S) in V<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "+4", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#80
        question: "What is the oxidation number of Oxygen (O) in V<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
        ]
    },
    {
        //#81
        question: "What is the oxidation number of Nitrogen (N) in (NH<sub>4</sub>)<sub>2</sub>O?",
        answers: [
            { text: "+1", correct: false},
            { text: "-3", correct: false},
            { text: "-2", correct: true},
            { text: "+4", correct: false},
        ]
    },
    {
        //#82
        question: "What is the oxidation number of Hydrogen (H) in (NH<sub>4</sub>)<sub>2</sub>O?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#83
        question: "What is the oxidation number of Oxygen (O) in (NH<sub>4</sub>)<sub>2</sub>O?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false},
        ]
    },
    {
        //#84
        question: "What is the oxidation number of Nitrogen (N) in (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "+5", correct: false},
            { text: "-3", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#85
        question: "What is the oxidation number of Hydrogen (H) in (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false}
        ]
    },
    {
        //#86
        question: "What is the oxidation number of Sulfur (S) in (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "-2", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#87
        question: "What is the oxidation number of Oxygen (O) in (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: true}
        ]
    },
    {
        //#88
        question: "What is the oxidation number of Sulfur (S) in S<sub>4</sub>N<sub>2</sub>?",
        answers: [
            { text: "+2.5", correct: false},
            { text: "+3", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false}
        ]
    },
    {
        //#89
        question: "What is the oxidation number of Nitrogen (N) in S<sub>4</sub>N<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: true},
            { text: "-1", correct: false}
        ]
    },
    {
        //#90
        question: "What is the oxidation number of Phosphorus (P) in P<sub>2</sub>O<sub>5</sub>?",
        answers: [
            { text: "+5", correct: true},
            { text: "-3", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: false}
        ]
    },
    {
        //#91
        question: "What is the oxidation number of Oxygen (O) in P<sub>2</sub>O<sub>5</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false}
        ]
    },
    {
        //#92
        question: "What is the oxidation number of Iron (Fe) in Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false}
        ]
    },
    {
        //#93
        question: "What is the oxidation number of Phosphorus (P) in Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "-3", correct: false},
            { text: "+5", correct: true},
            { text: "0", correct: false}
        ]
    },
    {
        //#94
        question: "What is the oxidation number of Oxygen (O) in Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "-2", correct: true}
        ]
    },
    {
        //#95
        question: "What is the oxidation number of Lead (Pb) in Pb(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-4", correct: false}
        ]
    },
    {
        //#96
        question: "What is the oxidation number of Sulfur (S) in Pb(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-2", correct: false},
            { text: "+4", correct: false},
            { text: "+6", correct: true}
        ]
    },
    {
        //#97
        question: "What is the oxidation number of Oxygen (O) in Pb(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "-1", correct: false}
        ]
    },
    {
        //#98
        question: "What is the oxidation number of Manganese (Mn) in Mn<sub>3</sub>As<sub>7</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+2", correct: false},
            { text: "+7", correct: true},
            { text: "0", correct: false}
        ]
    },
    {
        //#99
        question: "What is the oxidation number of Arsenic (As) in Mn<sub>3</sub>As<sub>7</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-3", correct: true},
            { text: "+3", correct: false}
        ]
    },
    {
        //#100
        question: "What is the oxidation number of Potassium (K) in KMnO<sub>4</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false}
        ]
    },
    {
        //#101
        question: "What is the oxidation number of Manganese (Mn) in KMnO<sub>4</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+7", correct: true},
            { text: "+4", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#102
        question: "What is the oxidation number of Oxygen (O) in KMnO<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
            { text: "-2", correct: true}
        ]
    },
    {
        //#103
        question: "What is the oxidation number of Nitrogen (N) in N<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "-3", correct: false},
            { text: "0", correct: false},
            { text: "+5", correct: false}
        ]
    },
    {
        //#104
        question: "What is the oxidation number of Oxygen (O) in N<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
            { text: "-2", correct: true}
        ]
    },
    {
        //#105
        question: "What is the oxidation number of Gallium (Ga) in GaCl<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: false}
        ]
    },
    {
        //#106
        question: "What is the oxidation number of Chlorine (Cl) in GaCl<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false}
        ]
    },
    {
        //#107
        question: "What is the oxidation number of Carbon (C) in CH<sub>4</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "0", correct: false},
            { text: "-4", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#108
        question: "What is the oxidation number of Hydrogen (H) in CH<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+1", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#109
        question: "What is the oxidation number of Phosphorus (P) in P<sub>4</sub>Se<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+1.5", correct: false},
        ]
    },
    {
        //#110
        question: "What is the oxidation number of Selenium (Se) in P<sub>4</sub>Se<sub>3</sub>?",
        answers: [
            { text: "-2", correct: false},
            { text: "-3", correct: false},
            { text: "+4", correct: true},
            { text: "0", correct: false},
        ]
    },
    {
        //#111
        question: "What is the oxidation number of Silver (Ag) in AgCN?",
        answers: [
            { text: "+2", correct: false},
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#112
        question: "What is the oxidation number of Carbon (C) in AgCN?",
        answers: [
            { text: "+2", correct: false},
            { text: "+4", correct: false},
            { text: "-3", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#113
        question: "What is the oxidation number of Nitrogen (N) in AgCN?",
        answers: [
            { text: "-5", correct: false},
            { text: "+3", correct: false},
            { text: "-1", correct: false},
            { text: "-3", correct: true},
        ]
    },
    {
        //#114
        question: "What is the oxidation number of Strontium (Sr) in Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#115
        question: "What is the oxidation number of Carbon (C) in Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "0", correct: true},
        ]
    },
    {
        //#116
        question: "What is the oxidation number of Hydrogen (H) in Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#117
        question: "What is the oxidation number of Oxygen (O) in Sr(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#118
        question: "What is the oxidation number of Vanadium (V) in VO<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "+5", correct: false},
            { text: "+3", correct: false},
        ]
    },
    {
        //#119
        question: "What is the oxidation number of Oxygen (O) in VO<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#120
        question: "What is the oxidation number of Potassium (K) in KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#121
        question: "What is the oxidation number of Carbon (C) in KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: true},
            { text: "+1", correct: false},
        ]
    },
    {
        //#122
        question: "What is the oxidation number of Hydrogen (H) in KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: true},
        ]
    },
    {
        //#123
        question: "What is the oxidation number of Oxygen (O) in KC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#124
        question: "What is the oxidation number of Potassium (K) in KOH?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#125
        question: "What is the oxidation number of Oxygen (O) in KOH?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
        ]
    },
    {
        //#126
        question: "What is the oxidation number of Hydrogen (H) in KOH?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#127
        question: "What is the oxidation number of Copper (Cu) in Cu(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "+3", correct: false},
        ]
    },
    {
        //#128
        question: "What is the oxidation number of Nitrogen (N) in Cu(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "+3", correct: true},
            { text: "+5", correct: false},
        ]
    },
    {
        //#129
        question: "What is the oxidation number of Oxygen (O) in Cu(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#130
        question: "What is the oxidation number of Lithium (Li) in LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#131
        question: "What is the oxidation number of Carbon (C) in LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: true},
        ]
    },
    {
        //#132
        question: "What is the oxidation number of Hydrogen (H) in LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+1", correct: true},
        ]
    },
    {
        //#133
        question: "What is the oxidation number of Oxygen (O) in LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#134
        question: "What is the oxidation number of Sodium (Na) in NaBr?",
        answers: [
            { text: "+1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#135
        question: "What is the oxidation number of Bromine (Br) in NaBr?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#136
        question: "What is the oxidation number of Nickel (Ni) in Ni<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+3", correct: true},
            { text: "+1", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#137
        question: "What is the oxidation number of Sulfur (S) in Ni<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#138
        question: "What is the oxidation number of Titanium (Ti) in Ti(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
            { text: "+6", correct: false},
        ]
    },
    {
        //#139
        question: "What is the oxidation number of Sulfur (S) in Ti(SO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "+6", correct: true},
            { text: "+4", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#140
        question: "What is the oxidation number of Silicon (Si) in SiO<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "-4", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#141
        question: "What is the oxidation number of Oxygen (O) in SiO<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#142
        question: "What is the oxidation number of Copper (Cu) in CuOH?",
        answers: [
            { text: "+1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: false},
        ]
    },
    {
        //#143
        question: "What is the oxidation number of Oxygen (O) in CuOH?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#144
        question: "What is the oxidation number of Hydrogen (H) in CuOH?",
        answers: [
            { text: "-1", correct: false},
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: true},
        ]
    },
    {
        //#145
        question: "What is the oxidation number of Nitrogen (N) in NH<sub>3</sub>?",
        answers: [
            { text: "-3", correct: true},
            { text: "-2", correct: false},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#146
        question: "What is the oxidation number of Hydrogen (H) in NH<sub>3</sub>?",
        answers: [
            { text: "-2", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: true},
        ]
    },
    {
        //#147
        question: "What is the oxidation number of Boron (B) in B2H4?",
        answers: [
            { text: "+3", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: true},
            { text: "-1", correct: false},
        ]
    },
    {
        //#148
        question: "What is the oxidation number of Hydrogen (H) in B2H4?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#149
        question: "What is the oxidation number of Lead (Pb) in Pb3N2?",
        answers: [
            { text: "+2", correct: true},
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#150
        question: "What is the oxidation number of Nitrogen (N) in Pb3N2?",
        answers: [
            { text: "-3", correct: true},
            { text: "+3", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#151
        question: "What is the oxidation number of Platinum (Pt) in PtS?",
        answers: [
            { text: "+2", correct: true},
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#152
        question: "What is the oxidation number of Sulfur (S) in PtS?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#153
        question: "What is the oxidation number of Iron (Fe) in Fe<sub>3</sub>P<sub>2</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+2", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#154
        question: "What is the oxidation number of Phosphorus (P) in Fe<sub>3</sub>P<sub>2</sub>?",
        answers: [
            { text: "-3", correct: true},
            { text: "-2", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: false},
        ]
    },
    {
        //#155
        question: "What is the oxidation number of Copper (Cu) in Cu(ClO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "+1", correct: false},
            { text: "+3", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#156
        question: "What is the oxidation number of Chlorine (Cl) in Cu(ClO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+7", correct: false},
            { text: "-1", correct: false},
            { text: "+5", correct: true},
        ]
    },
    {
        //#157
        question: "What is the oxidation number of Oxygen (O) in Cu(ClO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "-1", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#158
        question: "What is the oxidation number of Tin (Sn) in SnS<sub>2</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-4", correct: false},
        ]
    },
    {
        //#159
        question: "What is the oxidation number of Sulfur (S) in SnS<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: true},
        ]
    },
    {
        //#160
        question: "What is the oxidation number of Silver (Ag) in Ag<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "+1", correct: true},
            { text: "-1", correct: false},
        ]
    },
    {
        //#161
        question: "What is the oxidation number of Phosphorus (P) in Ag<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+3", correct: false},
            { text: "-3", correct: false},
            { text: "+5", correct: true},
        ]
    },
    {
        //#162
        question: "What is the oxidation number of Oxygen (O) in Ag<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#163
        question: "What is the oxidation number of Calcium (Ca) in CaBr<sub>2</sub>?",
        answers: [
            { text: "-2", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#164
        question: "What is the oxidation number of Bromine (Br) in CaBr<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#165
        question: "What is the oxidation number of Gallium (Ga) in Ga<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "+3", correct: true},
            { text: "0", correct: false},
        ]
    },
    {
        //#166
        question: "What is the oxidation number of Oxygen (O) in Ga<sub>2</sub>O<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#167
        question: "What is the oxidation number of Nitrogen (N) in NH<sub>4</sub>F?",
        answers: [
            { text: "+3", correct: false},
            { text: "+5", correct: false},
            { text: "0", correct: false},
            { text: "-3", correct: true},
        ]
    },
    {
        //#168
        question: "What is the oxidation number of Hydrogen (H) in NH<sub>4</sub>F?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#169
        question: "What is the oxidation number of Fluorine (F) in NH<sub>4</sub>F?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#170
        question: "What is the oxidation number of Vanadium (V) in V<sub>3</sub>N<sub>5</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "+5", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //#171
        question: "What is the oxidation number of Nitrogen (N) in V<sub>3</sub>N<sub>5</sub>?",
        answers: [
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "-3", correct: true},
        ]
    },
    {
        //#172
        question: "What is the oxidation number of Iron (Fe) in FeSO<sub>4</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#173
        question: "What is the oxidation number of Sulfur (S) in FeSO<sub>4</sub>?",
        answers: [
            { text: "+6", correct: false},
            { text: "+4", correct: false},
            { text: "-2", correct: false},
            { text: "+6", correct: true},
        ]
    },
    {
        //#174
        question: "What is the oxidation number of Oxygen (O) in FeSO<sub>4</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#175
        question: "What is the oxidation number of Silicon (Si) in SiF<sub>4</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+4", correct: true},
            { text: "-4", correct: false},
        ]
    },
    {
        //#176
        question: "What is the oxidation number of Fluorine (F) in SiF<sub>4</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#177
        question: "What is the oxidation number of Nitrogen (N) in N<sub>2</sub>?",
        answers: [
            { text: "0", correct: true},
            { text: "-3", correct: false},
            { text: "+1", correct: false},
            { text: "+5", correct: false},
        ]
    },
    {
        //#178
        question: "What is the oxidation number of Carbon (C) in C<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "-3", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: true},
        ]
    },
    {
        //#179
        question: "What is the oxidation number of Bromine (Br) in C<sub>2</sub>Br<sub>6</sub>?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#180
        question: "What is the oxidation number of Phosphorus (P) in P<sub>4</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-3", correct: false},
            { text: "0", correct: true},
            { text: "+5", correct: false},
        ]
    },
    {
        //#181
        question: "What is the oxidation number of Cobalt (Co) in CoBr<sub>2</sub>?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#182
        question: "What is the oxidation number of Bromine (Br) in CoBr<sub>2</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+1", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: true},
        ]
    },
    {
        //#183
        question: "What is the oxidation number of Aluminum (Al) in Al(OH)<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+3", correct: true},
            { text: "-3", correct: false},
        ]
    },
    {
        //#184
        question: "What is the oxidation number of Oxygen (O) in Al(OH)<sub>3</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#185
        question: "What is the oxidation number of Hydrogen (H) in Al(OH)<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: true},
        ]
    },
    {
        //#186
        question: "What is the oxidation number of Titanium (Ti) in Ti(CN)<sub>4</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+4", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#187
        question: "What is the oxidation number of Carbon (C) in Ti(CN)<sub>4</sub>?",
        answers: [
            { text: "+2", correct: true},
            { text: "+4", correct: false},
            { text: "0", correct: false},
            { text: "-3", correct: false},
        ]
    },
    {
        //#188
        question: "What is the oxidation number of Nitrogen (N) in Ti(CN)<sub>4</sub>?",
        answers: [
            { text: "-5", correct: false},
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "-3", correct: true},
        ]
    },
    {
        //#189
        question: "What is the oxidation number of Potassium (K) in K<sub>2</sub>CO<sub>3</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#190
        question: "What is the oxidation number of Carbon (C) in K<sub>2</sub>CO<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-4", correct: false},
            { text: "+3", correct: false},
            { text: "+4", correct: true},
        ]
    },
    {
        //#191
        question: "What is the oxidation number of Oxygen (O) in K<sub>2</sub>CO<sub>3</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+1", correct: false},
        ]
    },
    {
        //#192
        question: "What is the oxidation number of Potassium (K) in K<sub>3</sub>N?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#193
        question: "What is the oxidation number of Nitrogen (N) in K<sub>3</sub>N?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: false},
            { text: "-3", correct: true},
            { text: "-1", correct: false},
        ]
    },
    {
        //#194
        question: "What is the oxidation number of Gallium (Ga) in GaAs?",
        answers: [
            { text: "-3", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: true},
        ]
    },
    {
        //#195
        question: "What is the oxidation number of Arsenic (As) in GaAs?",
        answers: [
            { text: "0", correct: false},
            { text: "+3", correct: false},
            { text: "-3", correct: true},
            { text: "-1", correct: false},
        ]
    },
    {
        //#196
        question: "What is the oxidation number of Lead (Pb) in Pb₃N₂?",
        answers: [
            { text: "-2", correct: false},
            { text: "+3", correct: false},
            { text: "+4", correct: false},
            { text: "+2", correct: true},
        ]
    },
    {
        //#197
        question: "What is the oxidation number of Nitrogen (N) in Pb₃N₂?",
        answers: [
            { text: "-3", correct: true},
            { text: "+3", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false},
        ]
    },
    {
        //#198
        question: "What is the oxidation number of Beryllium (Be) in Be(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#199
        question: "What is the oxidation number of Hydrogen (H) in Be(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "+1", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#200
        question: "What is the oxidation number of Carbon (C) in Be(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "-4", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+4", correct: true},
        ]
    },
    {
        //#201
        question: "What is the oxidation number of Oxygen (O) in Be(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
        ]
    },
    {
        //#202
        question: "What is the oxidation number of Titanium (Ti) in Ti(C2H3O2)2?",
        answers: [
            { text: "+4", correct: false},
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "+6", correct: false},
        ]
    },
    {
        //#203
        question: "What is the oxidation number of Carbon (C) in Ti(C2H3O2)2?",
        answers: [
            { text: "+2", correct: false},
            { text: "+4", correct: false},
            { text: "0", correct: true},
            { text: "-2", correct: false},
        ]
    },
    {
        //#204
        question: "What is the oxidation number of Hydrogen (H) in Ti(C2H3O2)2?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#205
        question: "What is the oxidation number of Oxygen (O) in Ti(C2H3O2)2?",
        answers: [
            { text: "+2", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "-2", correct: true},
        ]
    },
    {
        //#206
        question: "What is the oxidation number of Tin (Sn) in Sn(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+2", correct: true},
            { text: "0", correct: false},
            { text: "+6", correct: false},
        ]
    },
    {
        //#207
        question: "What is the oxidation number of Nitrogen (N) in Sn(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: true},
        ]
    },
    {
        //#208
        question: "What is the oxidation number of Oxygen (O) in Sn(NO<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "+4", correct: false},
        ]
    },
    {
        //#209
        question: "What is the oxidation number of Manganese (Mn) in Mn<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "+3", correct: true},
            { text: "+2", correct: false},
            { text: "+4", correct: false},
            { text: "+6", correct: false},
        ]
    },
    {
        //#210
        question: "What is the oxidation number of Sulfur (S) in Mn<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "+4", correct: true},
            { text: "+2", correct: false},
            { text: "+6", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#211
        question: "What is the oxidation number of Oxygen (O) in Mn<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub>?",
        answers: [
            { text: "-4", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: true},
            { text: "+6", correct: false},
        ]
    },
    {
        //#212
        question: "What is the oxidation number of Nitrogen (N) in NH<sub>4</sub>Cl?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: false},
            { text: "-3", correct: true},
            { text: "+3", correct: false},
        ]
    },
    {
        //#213
        question: "What is the oxidation number of Hydrogen (H) in NH<sub>4</sub>Cl?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#214
        question: "What is the oxidation number of Chlorine (Cl) in NH<sub>4</sub>Cl?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
            { text: "-2", correct: false},
        ]
    },
    {
        //#215
        question: "What is the oxidation number of Chromium (Cr) in Cr(OH)<sub>3</sub>?",
        answers: [
            { text: "0", correct: false},
            { text: "+2", correct: false},
            { text: "+3", correct: true},
            { text: "+4", correct: false}
        ]
    },
    {
        //#216
        question: "What is the oxidation number of Oxygen (O) in Cr(OH)<sub>3</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false}
        ]
    },
    {
        //#217
        question: "What is the oxidation number of Hydrogen (H) in Cr(OH)<sub>3</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "-1", correct: false},
            { text: "0", correct: false},
            { text: "+1", correct: true}
        ]
    },
    {
        //#218
        question: "What is the oxidation number of Vanadium (V) in V<sub>2</sub>S<sub>5</sub>?",
        answers: [
            { text: "+4", correct: false},
            { text: "+3", correct: false},
            { text: "+2", correct: false},
            { text: "+5", correct: true}
        ]
    },
    {
        //#219
        question: "What is the oxidation number of Sulfur (S) in V<sub>2</sub>S<sub>5</sub>?",
        answers: [
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: true},
            { text: "+3", correct: false}
        ]
    },
    {
        //#220
        question: "What is the oxidation number of Copper (Cu) in Cu<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "+2", correct: false},
            { text: "+1", correct: true},
            { text: "+3", correct: false},
            { text: "0", correct: false}
        ]
    },
    {
        //#221
        question: "What is the oxidation number of Phosphorus (P) in Cu<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "-3", correct: false},
            { text: "0", correct: false},
            { text: "+3", correct: false},
            { text: "+5", correct: true}
        ]
    },
    {
        //#222
        question: "What is the oxidation number of Oxygen (O) in Cu<sub>3</sub>PO<sub>4</sub>?",
        answers: [
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: false}
        ]
    },        
];


function redirectToNewPage() {
    window.location.href = 'index.html'; // Change 'newpage.html' to the desired URL
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