const questions = [
    {//#1
        question: "Balance the equation: H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O",
        components: ["H<sub>2</sub>", "O<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#2
        question: "Balance the equation: _F → F<sub>2</sub>",
        components: ["F", "F<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#3
        question: "Balance the equation: N<sub>2</sub> + H<sub>2</sub> → NH<sub>3</sub>",
        components: ["N<sub>2</sub>", "H<sub>2</sub>", "NH<sub>3</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#4
        question: "Balance the equation: C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>2</sub>H<sub>6</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "7", correct: true},
            { text: "4", correct: true},
            { text: "6", correct: true}
        ]
    },
    {//#5
        question: "Balance the equation: Fe + O<sub>2</sub> → Fe<sub>2</sub>O<sub>3</sub>",
        components: ["Fe", "O<sub>2</sub>", "Fe<sub>2</sub>O<sub>3</sub>"],
        answers: [
            { text: "4", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#6
        question: "Balance the equation: C<sub>3</sub>H<sub>8</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>3</sub>H<sub>8</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "5", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true}
        ]
    },
    {//#7
        question: "Balance the equation: Na + Cl<sub>2</sub> → NaCl",
        components: ["Na", "Cl<sub>2</sub>", "NaCl"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#8
        question: "Balance the equation: Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub>",
        components: ["Al", "O<sub>2</sub>", "Al<sub>2</sub>O<sub>3</sub>"],
        answers: [
            { text: "4", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#9
        question: "Balance the equation: H<sub>2</sub> + Cl<sub>2</sub> → HCl",
        components: ["H<sub>2</sub>", "Cl<sub>2</sub>", "HCl"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#10
        question: "Balance the equation: P<sub>4</sub> + O<sub>2</sub> → P<sub>2</sub>O<sub>5</sub>",
        components: ["P<sub>4</sub>", "O<sub>2</sub>", "P<sub>2</sub>O<sub>5</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "5", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#11
        question: "Balance the equation: KClO<sub>3</sub> → KCl + O<sub>2</sub>",
        components: ["KClO<sub>3</sub>", "KCl", "O<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#12
        question: "Balance the equation: C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>2</sub>H<sub>5</sub>OH", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#13
        question: "Balance the equation: Mg + N<sub>2</sub> → Mg<sub>3</sub>N<sub>2</sub>",
        components: ["Mg", "N<sub>2</sub>", "Mg<sub>3</sub>N<sub>2</sub>"],
        answers: [
            { text: "3", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#14
        question: "Balance the equation: Zn + HCl → ZnCl<sub>2</sub> + H<sub>2</sub>",
        components: ["Zn", "HCl", "ZnCl<sub>2</sub>", "H<sub>2</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#15
        question: "Balance the equation: Ca(OH)<sub>2</sub> + H<sub>3</sub>PO<sub>4</sub> → Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + H<sub>2</sub>O",
        components: ["Ca(OH)<sub>2</sub>", "H<sub>3</sub>PO<sub>4</sub>", "Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "3", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "6", correct: true}
        ]
    },
    {//#16
        question: "Balance the equation: C<sub>4</sub>H<sub>10</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>4</sub>H<sub>10</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "13", correct: true},
            { text: "8", correct: true},
            { text: "10", correct: true}
        ]
    },
    {//#17
        question: "Balance the equation: H<sub>2</sub>SO<sub>4</sub> + NaOH → Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O",
        components: ["H<sub>2</sub>SO<sub>4</sub>", "NaOH", "Na<sub>2</sub>SO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#18
        question: "Balance the equation: HCl + Ca(OH)<sub>2</sub> → CaCl<sub>2</sub> + H<sub>2</sub>O",
        components: ["HCl", "Ca(OH)<sub>2</sub>", "CaCl<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#19
        question: "Balance the equation: K<sub>2</sub>CO<sub>3</sub> + HCl → KCl + CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["K<sub>2</sub>CO<sub>3</sub>", "HCl", "KCl", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#20
        question: "Balance the equation: Na<sub>2</sub>S + HCl → NaCl + H<sub>2</sub>S",
        components: ["Na<sub>2</sub>S", "HCl", "NaCl", "H<sub>2</sub>S"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#21
        question: "Balance the equation: AgNO<sub>3</sub> + NaCl → AgCl + NaNO<sub>3</sub>",
        components: ["AgNO<sub>3</sub>", "NaCl", "AgCl", "NaNO<sub>3</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#22
        question: "Balance the equation: Pb(NO<sub>3</sub>)<sub>2</sub> + KI → PbI<sub>2</sub> + KNO<sub>3</sub>",
        components: ["Pb(NO<sub>3</sub>)<sub>2</sub>", "KI", "PbI<sub>2</sub>", "KNO<sub>3</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#23
        question: "Balance the equation: Na<sub>2</sub>CO<sub>3</sub> + HCl → NaCl + CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["Na<sub>2</sub>CO<sub>3</sub>", "HCl", "NaCl", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#24
        question: "Balance the equation: Cu + AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + Ag",
        components: ["Cu", "AgNO<sub>3</sub>", "Cu(NO<sub>3</sub>)<sub>2</sub>", "Ag"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#25
        question: "Balance the equation: H<sub>2</sub> + Cl<sub>2</sub> → HCl",
        components: ["H<sub>2</sub>", "Cl<sub>2</sub>", "HCl"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#26
        question: "Balance the equation: BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + NaCl",
        components: ["BaCl<sub>2</sub>", "Na<sub>2</sub>SO<sub>4</sub>", "BaSO<sub>4</sub>", "NaCl"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#27
        question: "Balance the equation: KBr + Cl<sub>2</sub> → KCl + Br<sub>2</sub>",
        components: ["KBr", "Cl<sub>2</sub>", "KCl", "Br<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#28
        question: "Balance the equation: CaCO<sub>3</sub> → CaO + CO<sub>2</sub>",
        components: ["CaCO<sub>3</sub>", "CaO", "CO<sub>2</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#29
        question: "Balance the equation: H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + O<sub>2</sub>",
        components: ["H<sub>2</sub>O<sub>2</sub>", "H<sub>2</sub>O", "O<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#30
        question: "Balance the equation: SO<sub>2</sub> + O<sub>2</sub> → SO<sub>3</sub>",
        components: ["SO<sub>2</sub>", "O<sub>2</sub>", "SO<sub>3</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#31
        question: "Balance the equation: CH<sub>4</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["CH<sub>4</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#32
        question: "Balance the equation: H<sub>2</sub>SO<sub>4</sub> + NaOH → Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O",
        components: ["H<sub>2</sub>SO<sub>4</sub>", "NaOH", "Na<sub>2</sub>SO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#33
        question: "Balance the equation: HCl + Ca(OH)<sub>2</sub> → CaCl<sub>2</sub> + H<sub>2</sub>O",
        components: ["HCl", "Ca(OH)<sub>2</sub>", "CaCl<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#34
        question: "Balance the equation: NaOH + H<sub>2</sub>SO<sub>4</sub> → Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O",
        components: ["NaOH", "H<sub>2</sub>SO<sub>4</sub>", "Na<sub>2</sub>SO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#35
        question: "Balance the equation: H<sub>2</sub>SO<sub>4</sub> + KOH → K<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O",
        components: ["H<sub>2</sub>SO<sub>4</sub>", "KOH", "K<sub>2</sub>SO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#36
        question: "Balance the equation: C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>2</sub>H<sub>5</sub>OH", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#37
        question: "Balance the equation: C<sub>2</sub>H<sub>2</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>2</sub>H<sub>2</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "5", correct: true},
            { text: "4", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#38
        question: "Balance the equation: PCl<sub>5</sub> + H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + HCl",
        components: ["PCl<sub>5</sub>", "H<sub>2</sub>O", "H<sub>3</sub>PO<sub>4</sub>", "HCl"],
        answers: [
            { text: "1", correct: true},
            { text: "4", correct: true},
            { text: "1", correct: true},
            { text: "5", correct: true}
        ]
    },
    {//#39
        question: "Balance the equation: Al + Fe<sub>2</sub>O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + Fe",
        components: ["Al", "Fe<sub>2</sub>O<sub>3</sub>", "Al<sub>2</sub>O<sub>3</sub>", "Fe"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#40
        question: "Balance the equation: N<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O<sub>2</sub> → N<sub>2</sub> + H<sub>2</sub>O",
        components: ["N<sub>2</sub>H<sub>4</sub>", "H<sub>2</sub>O<sub>2</sub>", "N<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#41
        question: "Balance the equation: FeS + HCl → FeCl<sub>2</sub> + H<sub>2</sub>S",
        components: ["FeS", "HCl", "FeCl<sub>2</sub>", "H<sub>2</sub>S"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#42
        question: "Balance the equation: Cu + HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + NO<sub>2</sub> + H<sub>2</sub>O",
        components: ["Cu", "HNO<sub>3</sub>", "Cu(NO<sub>3</sub>)<sub>2</sub>", "NO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "4", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#43
        question: "Balance the equation: MnO<sub>2</sub> + HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + H<sub>2</sub>O",
        components: ["MnO<sub>2</sub>", "HCl", "MnCl<sub>2</sub>", "Cl<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "4", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#44
        question: "Balance the equation: P<sub>4</sub> + Cl<sub>2</sub> → PCl<sub>5</sub>",
        components: ["P<sub>4</sub>", "Cl<sub>2</sub>", "PCl<sub>5</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "10", correct: true},
            { text: "4", correct: true}
        ]
    },
    {//#45
        question: "Balance the equation: Zn + HCl → ZnCl<sub>2</sub> + H<sub>2</sub>",
        components: ["Zn", "HCl", "ZnCl<sub>2</sub>", "H<sub>2</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#46
        question: "Balance the equation: KClO<sub>3</sub> → KCl + O<sub>2</sub>",
        components: ["KClO<sub>3</sub>", "KCl", "O<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#47
        question: "Balance the equation: Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → NaCl + BaSO<sub>4</sub>",
        components: ["Na<sub>2</sub>SO<sub>4</sub>", "BaCl<sub>2</sub>", "NaCl", "BaSO<sub>4</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#48
        question: "Balance the equation: H<sub>3</sub>PO<sub>4</sub> + NaOH → Na<sub>3</sub>PO<sub>4</sub> + H<sub>2</sub>O",
        components: ["H<sub>3</sub>PO<sub>4</sub>", "NaOH", "Na<sub>3</sub>PO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "3", correct: true},
            { text: "1", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#49
        question: "Balance the equation: Mg + N<sub>2</sub> → Mg<sub>3</sub>N<sub>2</sub>",
        components: ["Mg", "N<sub>2</sub>", "Mg<sub>3</sub>N<sub>2</sub>"],
        answers: [
            { text: "3", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#50
        question: "Balance the equation: Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + Ca(OH)<sub>2</sub> → Al(OH)<sub>3</sub> + CaSO<sub>4</sub>",
        components: ["Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", "Ca(OH)<sub>2</sub>", "Al(OH)<sub>3</sub>", "CaSO<sub>4</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#51
        question: "Balance the equation: Na<sub>3</sub>PO<sub>4</sub> + CaCl<sub>2</sub> → NaCl + Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>",
        components: ["Na<sub>3</sub>PO<sub>4</sub>", "CaCl<sub>2</sub>", "NaCl", "Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "6", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#52
        question: "Balance the equation: NH<sub>3</sub> + O<sub>2</sub> → NO + H<sub>2</sub>O",
        components: ["NH<sub>3</sub>", "O<sub>2</sub>", "NO", "H<sub>2</sub>O"],
        answers: [
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "4", correct: true},
            { text: "6", correct: true}
        ]
    },
    {//#53
        question: "Balance the equation: P<sub>4</sub> + O<sub>2</sub> → P<sub>4</sub>O<sub>10</sub>",
        components: ["P<sub>4</sub>", "O<sub>2</sub>", "P<sub>4</sub>O<sub>10</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "5", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#54
        question: "Balance the equation: Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub>",
        components: ["Al", "O<sub>2</sub>", "Al<sub>2</sub>O<sub>3</sub>"],
        answers: [
            { text: "4", correct: true},
            { text: "3", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#55
        question: "Balance the equation: C<sub>4</sub>H<sub>10</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>4</sub>H<sub>10</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "13", correct: true},
            { text: "8", correct: true},
            { text: "10", correct: true}
        ]
    },
    {//#56
        question: "Balance the equation: NaClO<sub>3</sub> → NaCl + O<sub>2</sub>",
        components: ["NaClO<sub>3</sub>", "NaCl", "O<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true}
        ]
    },
    {//#57
        question: "Balance the equation: HNO<sub>3</sub> + Ca(OH)<sub>2</sub> → Ca(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O",
        components: ["HNO<sub>3</sub>", "Ca(OH)<sub>2</sub>", "Ca(NO<sub>3</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#58
        question: "Balance the equation: HCl + Na<sub>2</sub>CO<sub>3</sub> → NaCl + H<sub>2</sub>O + CO<sub>2</sub>",
        components: ["HCl", "Na<sub>2</sub>CO<sub>3</sub>", "NaCl", "H<sub>2</sub>O", "CO<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#59
        question: "Balance the equation: C<sub>3</sub>H<sub>7</sub>OH + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
        components: ["C<sub>3</sub>H<sub>7</sub>OH", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "9", correct: true},
            { text: "6", correct: true},
            { text: "8", correct: true}
        ]
    },
    {//#60
        question: "Balance the equation: H<sub>2</sub> + I<sub>2</sub> → HI",
        components: ["H<sub>2</sub>", "I<sub>2</sub>", "HI"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#61
        question: "Balance the equation: Mg + H<sub>2</sub>O → Mg(OH)<sub>2</sub> + H<sub>2</sub>",
        components: ["Mg", "H<sub>2</sub>O", "Mg(OH)<sub>2</sub>", "H<sub>2</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#62
        question: "Balance the equation: H<sub>2</sub>O + CO<sub>2</sub> → H<sub>2</sub>CO<sub>3</sub>",
        components: ["H<sub>2</sub>O", "CO<sub>2</sub>", "H<sub>2</sub>CO<sub>3</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#63
        question: "Balance the equation: H<sub>2</sub>O<sub>2</sub> + MnO<sub>2</sub> → H<sub>2</sub>O + O<sub>2</sub>",
        components: ["H<sub>2</sub>O<sub>2</sub>", "MnO<sub>2</sub>", "H<sub>2</sub>O", "O<sub>2</sub>"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#64
        question: "Balance the equation: Na<sub>2</sub>S + HCl → NaCl + H<sub>2</sub>S",
        components: ["Na<sub>2</sub>S", "HCl", "NaCl", "H<sub>2</sub>S"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true}
        ]
    },
    {//#65
        question: "Balance the equation: KOH + H<sub>2</sub>SO<sub>4</sub> → K<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O",
        components: ["KOH", "H<sub>2</sub>SO<sub>4</sub>", "K<sub>2</sub>SO<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#66
        question: "Balance the equation: SiO<sub>2</sub> + HF → SiF<sub>4</sub> + H<sub>2</sub>O",
        components: ["SiO<sub>2</sub>", "HF", "SiF<sub>4</sub>", "H<sub>2</sub>O"],
        answers: [
            { text: "1", correct: true},
            { text: "4", correct: true},
            { text: "1", correct: true},
            { text: "2", correct: true}
        ]
    },
    {//#67
        question: "Balance the equation: H<sub>2</sub>SO<sub>4</sub> + HI → H<sub>2</sub>O + I<sub>2</sub> + SO<sub>2</sub>",
        components: ["H<sub>2</sub>SO<sub>4</sub>", "HI", "H<sub>2</sub>O", "I<sub>2</sub>", "SO<sub>2</sub>"],
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "2", correct: true},
            { text: "1", correct: true},
            { text: "1", correct: true}
        ]
    },
];

const questionElement = document.getElementById("question");
const equationContainer = document.getElementById("equation-container");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("tryAgain-btn");
const checkButton = document.getElementById("check-btn");
const homeButton  = document.getElementById("home-button");

let currentQuestionIndex = 0;
let score = 0;
let visitedQuestions = [];

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    visitedQuestions = [];
    nextButton.innerHTML = "Next";
    tryAgainButton.innerHTML = "Try Again";
    showQuestion();
}

function showQuestion(retry = false){
    resetState();
    if (!retry) {
        let questionNumber;
        do {
            questionNumber = Math.floor(Math.random() * questions.length);
        } while (visitedQuestions.includes(questionNumber));

        qIndex = questionNumber;
        visitedQuestions.push(qIndex);
    }

    let currentQuestion = questions[qIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.components.forEach((component, index) => {
        const container = document.createElement("div");
        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("coefficient-box");
        input.placeholder = "Coeff";
        input.dataset.correct = currentQuestion.answers[index].text;
        container.appendChild(input);
        container.appendChild(document.createElement("span")).innerHTML = component;
        equationContainer.appendChild(container);
    });
}

function resetState(){
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
    checkButton.style.display = "block";
    while (equationContainer.firstChild) {
        equationContainer.removeChild(equationContainer.firstChild);
    }
}

function checkAnswer(){
    let correctCount = 0;
    Array.from(equationContainer.children).forEach((container, index) => {
        const input = container.querySelector("input");
        const correctValue = input.dataset.correct;
        if (input.value.trim() === correctValue) {
            input.classList.add("correct");
            correctCount++;
        } else {
            input.classList.add("incorrect");
        }
        input.disabled = true;
    });

    checkButton.style.display = "none";
    if (correctCount === equationContainer.children.length) {
        score++;
        nextButton.style.display = "block";
    } else {
        tryAgainButton.style.display = "block";
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${currentQuestionIndex}. Play again to improve your score!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < 20 && visitedQuestions.length < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

tryAgainButton.addEventListener("click", () => {
    showQuestion(true);
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < 20) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

checkButton.addEventListener("click", checkAnswer);

function redirectToNewPage() {
    window.location.href = 'index.html';
}

homeButton.addEventListener('click', redirectToNewPage);

startQuiz();
