const questions = [
    {//#1 A
        question: "1. A dichotomous key of different mollusks is shown.<br>Which mollusk moves by jet propulsion and does not have an external shell?",
        image: "bio1/one.jpg",
        imageBottom: "",
        answers: [
            { text: "Squid", image: "", correct: true },
            { text: "Slug", image: "", correct: false },
            { text: "Nautilus", image: "", correct: false },
            { text: "Snail", image: "", correct: false },
        ]
    },
    {//#2 B/G
        question: "2. Which statement best describes how a virus replicates?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "A virus divides into two identical virus particles before infecting the host cell.", image: "", correct: false },
            { text: "A virus enters a host cell and uses the materials from the host cell to produce new virus particles.", image: "", correct: true },
            { text: "Multiple virus particles fuse and form a large particle that breaks apart, releasing new virus particles.", image: "", correct: false },
            { text: "Multiple virus particles break down in component parts, which then reassemble into new copies of the virus.", image: "", correct: false },
        ]
    },
    {//#3 A
        question: "3. Biting flies can transmit diseases and cause loss of blood for animals in nature. Horses have developed behaviors to repel biting flies such as ear twitching, head tossing, leg stomping, and tail swishing.<br>Which statement best describes the interaction between body systems that allows horses to repel biting flies?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The nervous system senses the biting flies and sends a signal to the muscular system to move.", image: "", correct: true },
            { text: "The circulatory system senses the biting flies and sends a signal to the nervous system to move.", image: "", correct: false },
            { text: "The muscular system senses the biting flies and sends a signal to the integumentary system to move.", image: "", correct: false },
            { text: "The integumentary system senses the biting flies and sends a signal to the circulatory system to move.", image: "", correct: false },
        ]
    },
    {//#4 A
        question: "4. Oil spills in the ocean affect marine food webs. Animals that are initially affected by oil spills include sea otters, seabirds, and other organisms that spend most of their time on the ocean surface.<br>Based on the food web, how would a significant decrease in the sea otter population due to an oil spill most likely affect this ecosystem?",
        image: "bio1/four.jpg",
        imageBottom: "",
        answers: [
            { text: "The sea urchin population would increase causing the kelp population to decrease.", image: "", correct: true },
            { text: "The fish population would increase in response to the changes in the mussel population.", image: "", correct: false },
            { text: "The mussel population would increase in response to the changes in the algae population.", image: "", correct: false },
            { text: "The killer whale population would increase causing the fish population to decrease.", image: "", correct: false },
        ]
    },
    {//#5 D
        question: "5. Which of these shows an example of an insertion mutation?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/fiveA.jpg", correct: false },
            { text: "", image: "bio1/fiveB.jpg", correct: false },
            { text: "", image: "bio1/fiveC.jpg", correct: false },
            { text: "", image: "bio1/fiveD.jpg", correct: true },
        ]
    },
    {//#6 B/G
        question: "6. In a Central Texas grassland, the producers incorporate 12,000 kJ of energy from the sun into their tissues. About how much energy would be incorporated into the tissues of herbivores?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "12,000 kJ", image: "", correct: false },
            { text: "1,200 kJ", image: "", correct: true },
            { text: "10,800 kJ", image: "", correct: false },
            { text: "1,080 kJ", image: "", correct: false },
        ]
    },
    {//#7 D
        question: "7. Positive thigmotropism is a response in plants in which they move and grow toward an object the plant comes into physical contact with, usually curling around the object.<br><br>This response of the shoot system benefits the plant by allowing the plant to —",
        image: "bio1/seven.jpg",
        imageBottom: "",
        answers: [
            { text: "produce more pollen for pollinators", image: "", correct: false },
            { text: "take in more carbon dioxide to convert into glucose", image: "", correct: false },
            { text: "absorb more water to transport to the leaves", image: "", correct: false },
            { text: "reach more sunlight for photosynthesis", image: "", correct: true },
        ]
    },
    {//#8 C
        question: "8. White clovers, <i>Trifolium repens</i>, are plants that are native to Europe and Central Asia and are able to produce the poison cyanide within their cells. Skunk cabbage, <i>Symplocarpus foetidus</i>, is a plant that is native to eastern North America and can produce a chemical that makes it have a strong, foul odor and bitter taste.<br><br>The chemicals produced by both the white clovers and skunk cabbages are adaptations that allow them to —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "attract more pollinators", image: "", correct: false },
            { text: "survive a long-term drought", image: "", correct: false },
            { text: "protect against herbivores", image: "", correct: true },
            { text: "grow better in colder habitats", image: "", correct: false },
        ]
    },
    {//#9 A
        question: "9. A model of the genetic control of coat color in rabbits is shown. Which Punnett square represents a cross that would produce albino offspring?",
        image: "bio1/nine.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/nineA.jpg", correct: true },
            { text: "", image: "bio1/nineB.jpg", correct: false },
            { text: "", image: "bio1/nineC.jpg", correct: false },
            { text: "", image: "bio1/nineD.jpg", correct: false },
        ]
    },
    {//#10 D
        question: "10. When a stem cell divides, it produces two daughter cells. One daughter cell will remain a stem cell, while the other daughter cell will differentiate into a specialized cell.<br><br>Which factor will most directly determine what type of specialized cell will be produced?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The size of the cell", image: "", correct: false },
            { text: "The length of the cell cycle", image: "", correct: false },
            { text: "The number of chromosomes that are replicated", image: "", correct: false },
            { text: "The genes that are expressed", image: "", correct: true },
        ]
    },
    {//#11 C
        question: "11. Blue flying fish live in the upper layers of the ocean. Blue flying fish have enlarged pectoral fins that enable them to glide for 400 meters above the ocean surface and appear to fly.<br><br>Which statement best describes how natural selection led to enlarged pectoral fins in blue flying fish?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Fish were able to glide out of the ocean and into other bodies of water to mate with other species.", image: "", correct: false },
            { text: "Fish were able to live both on land and in the water as a result of their larger pectoral fins.", image: "", correct: false },
            { text: "Fish with enlarged pectoral fins were able to glide out of the ocean to escape predators, increasing their fitness.", image: "", correct: true },
            { text: "Fish changed their DNA to express enlarged pectoral fins, changing the allele frequency of the population.", image: "", correct: false },
        ]
    },
    {//#12 A
        question: "12. Scientists determined the total mass of DNA from a sample of animal cells. The masses of equal numbers of cells were taken during three different stages of the cell cycle. Stage I contains cells massed during G<sub>1</sub> of the cell cycle.<br><br>Which statement best describes the cells during Stage II?",
        image: "bio1/twelve.jpg",
        imageBottom: "",
        answers: [
            { text: "The cells have replicated their DNA, but have not completed mitosis and cytokinesis.", image: "", correct: true },
            { text: "The cells have completed mitosis and cytokinesis without replicating their DNA.", image: "", correct: false },
            { text: "The cells have replicated their DNA and completed mitosis and cytokinesis.", image: "", correct: false },
            { text: "The cells have temporarily exited the cell cycle without replicating their DNA.", image: "", correct: false },
        ]
    },
    {//#13 B
        question: "13. Green anoles are lizards that can change their skin color rapidly in response to various stimuli. This adaptation is the result of —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "selective breeding of lizards by humans", image: "", correct: false },
            { text: "beneficial traits passed from parents to offspring", image: "", correct: true },
            { text: "geographic isolation that prevented genetic mutation", image: "", correct: false },
            { text: "environmental pollutants that changed their genotype", image: "", correct: false },
        ]
    },
    {//#14 C/H
        question: "14. Which type of movement across a cell’s plasma membrane requires energy supplied by ATP?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Passive transport", image: "", correct: false },
            { text: "Simple diffusion", image: "", correct: false },
            { text: "Active transport", image: "", correct: true },
            { text: "Osmosis", image: "", correct: false },
        ]
    },
    {//#15 B
        question: "15. Leaf-cutter ants harvest leaves and carry them to fungi that convert plant material into a usable form for the ants to digest. The fungi depend on the leaves for nutrients. The ants also produce an antibiotic on their bodies that helps protect the fungi from harmful bacteria.<br><br> Which of these explains the relationship between the leaf-cutter ants and the fungi?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Predation, because the ants feed on the fungi", image: "", correct: false },
            { text: "Mutualism, because both the ants and the fungi benefit from each other", image: "", correct: true },
            { text: "Competition, because both organisms consume the same resource for energy", image: "", correct: false },
            { text: "Commensalism, because the ants receive energy from the fungi and the fungi are unaffected", image: "", correct: false },
        ]
    },
    {//#16 D
        question: "16. A model of transcription and a codon chart are shown. Which amino acid would be coded first from the DNA strand being transcribed?",
        image: "bio1/sixteen.jpg",
        imageBottom: "",
        answers: [
            { text: "Cys", image: "", correct: false },
            { text: "Phe", image: "", correct: false },
            { text: "Ile", image: "", correct: false },
            { text: "Met", image: "", correct: true },
        ]
    },
    {//#17 A
        question: "17. Why is it important to assign each organism a scientific name?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Each scientific name applies to only one species, making it universally identifiable to scientists.", image: "", correct: true },
            { text: "Each scientific name allows scientists to better study the behavior of an organism.", image: "", correct: false },
            { text: "The scientific name allows scientists to develop common names for organisms.", image: "", correct: false },
            { text: "The scientific name describes how an individual looks relative to others of the same genus.", image: "", correct: false },
        ]
    },
    {//#18 C/H
        question: "18. A cellular process is shown. Which of these is the most likely result of the process shown in the diagram?",
        image: "bio1/eighteen.jpg",
        imageBottom: "",
        answers: [
            { text: "Chromosome replication will cease to avoid errors that result in mutations.", image: "", correct: false },
            { text: "Offspring will no longer express traits from previous generations.", image: "", correct: false },
            { text: "Gametes will contain new allele combinations.", image: "", correct: true },
            { text: "Chromatids will have less genetic variety.", image: "", correct: false },
        ]
    },
    {//#19 D
        question: "19. Students studying the interaction among the reproductive parts of flowering plants make the graphic organizer shown. <br><br> Which terms best complete the numbered blanks in the flowchart?",
        image: "",
        imageBottom: "bio1/nineteen.jpg",
        answers: [
            { text: "(1) filaments, (2) petals, (3) stigma", image: "", correct: false },
            { text: "(1) petals, (2) ovule, (3) stigma", image: "", correct: false },
            { text: "(1) filaments, (2) petals, (3) ovule", image: "", correct: false },
            { text: "(1) petals, (2) stigma, (3) ovule", image: "", correct: true },
        ]
    },
    {//#20 C/H
        question: "20. What components make up the backbone of a DNA molecule?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Purines and deoxyribose", image: "", correct: false },
            { text: "Pyrimidines and purines", image: "", correct: false },
            { text: "Deoxyribose and phosphate groups", image: "", correct: true },
            { text: "Phosphate groups and pyrimidines", image: "", correct: false },
        ]
    },
    {//#21 A
        question: "21. A prokaryotic cell and a eukaryotic cell are shown.<br><br>Which characteristic best distinguishes these cells as either prokaryotic or eukaryotic?",
        image: "bio1/twentyone.jpg",
        imageBottom: "",
        answers: [
            { text: "The organization of the genetic material", image: "", correct: true },
            { text: "The location of the cytoplasm", image: "", correct: false },
            { text: "The role of the cell membrane", image: "", correct: false },
            { text: "The function of the flagella", image: "", correct: false },
        ]
    },
    {//#22 D/J
        question: "22. Which sequence best describes an interaction between the integumentary and excretory systems that helps maintain homeostasis?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Heart rate increases &rarr; Blood vessels constrict &rarr; Blood pressure increases", image: "", correct: false },
            { text: "Blood vessel is damaged &rarr; Platelets begin to clump &rarr; Blood vessel ruptures", image: "", correct: false },
            { text: "Blood sugar levels rise &rarr; Pancreas secretes insulin &rarr; Blood sugar continues to rise", image: "", correct: false },
            { text: "Body temperature increases &rarr; Glands release sweat &rarr; Body temperature decreases", image: "", correct: true },
        ]
    },
    {//#23 D/J
        question: "23. Which statement best describes a similarity among trees, cats, and amoebas?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "They are prokaryotic organisms.", image: "", correct: false },
            { text: "They are classified as members of the same kingdom.", image: "", correct: false },
            { text: "They have genomes that consist of the same number of genes.", image: "", correct: false },
            { text: "They contain DNA composed of the same four types of nucleotides.", image: "", correct: true },
        ]
    },
    {//#24 G/B
        question: "24. Students designed an experiment to model the carbon cycle. The students combined water and carbon dioxide-producing disks in a sealed flask. The flask represented Earth’s atmosphere, and the lamp represented the sun. Their design is shown.<br><br> Which component can be added to the flask to reduce the concentration of carbon dioxide in the model atmosphere created by the disks?",
        image: "bio1/twentyfour.jpg",
        imageBottom: "",
        answers: [
            { text: "Bacteria to use carbon during nitrification", image: "", correct: false },
            { text: "Plants to absorb carbon in the process of photosynthesis", image: "", correct: true },
            { text: "Snails to use carbon through cellular respiration", image: "", correct: false },
            { text: "Mushrooms to absorb carbon during decomposition", image: "", correct: false },
        ]
    },
    {//#25 A
        question: "25. Which characteristic do all organisms in Kingdoms Animalia, Protista, and Fungi have in common?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "They are eukaryotic.", image: "", correct: true },
            { text: "They are prokaryotic.", image: "", correct: false },
            { text: "They are unicellular.", image: "", correct: false },
            { text: "They are multicellular.", image: "", correct: false },
        ]
    },
    {//#26 D/J
        question: "26. The graph shows the oxygen consumed by an athlete during different stages of training.<br><br>Based on the graph, which process is occurring between minute 5 and minute 10?",
        image: "bio1/twentysix.jpg",
        imageBottom: "",
        answers: [
            { text: "Nuclei are building amino acids for energy storage.", image: "", correct: false },
            { text: "Ribosomes are building carbohydrates to increase energy output.", image: "", correct: false },
            { text: "Chloroplasts are using energy to produce oxygen.", image: "", correct: false },
            { text: "Mitochondria are using oxygen to produce ATP.", image: "", correct: true },
        ]
    },
    {//#27 A
        question: "27. The table shows the classification of four mammals found in Texas.<br><br> Based on this table, which explanation best describes why elk and fallow deer are classified in the same genus?",
        image: "bio1/twentyseven.jpg",
        imageBottom: "",
        answers: [
            { text: "They are both in family Cervidae and share a more recent common ancestor", image: "", correct: true },
            { text: "They mate and produce fertile offspring.", image: "", correct: false },
            { text: "They live in similar habitats.", image: "", correct: false },
            { text: "They are both in kingdom Animalia and have similar diets.", image: "", correct: false },
        ]
    },
    {//#28 D/J
        question: "28. A model of DNA is shown.<br><br>Which part of the DNA model is most directly associated with the coding of genetic information?",
        image: "bio1/twentyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/twentyeightA.jpg", correct: false },
            { text: "", image: "bio1/twentyeightB.jpg", correct: false },
            { text: "", image: "bio1/twentyeightC.jpg", correct: false },
            { text: "", image: "bio1/twentyeightD.jpg", correct: true },
        ]
    },
    {//#29 G/B
        question: "29. A model of an enzyme and its corresponding substrate is shown.<br><br>Which model best represents the molecules at the end of the reaction?",
        image: "bio1/twentynine.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/twentynineA.jpg", correct: false },
            { text: "", image: "bio1/twentynineB.jpg", correct: true },
            { text: "", image: "bio1/twentynineC.jpg", correct: false },
            { text: "", image: "bio1/twentynineD.jpg", correct: false },
        ]
    },
    {//#30 G/B
        question: "30. In domesticated dogs, hair type is controlled by two different alleles. The allele for wire hair is (H) and the allele for smooth hair is (h). When two heterozygous dogs are crossed, what percentage of the offspring is expected to be homozygous for smooth hair?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "0%", image: "", correct: false },
            { text: "25%", image: "", correct: true },
            { text: "50%", image: "", correct: false },
            { text: "75%", image: "", correct: false },
        ]
    },
    {//#31 G/B
        question: "31. Which statements best compare a function of proteins and lipids in a human cell?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Proteins provide energy for cellular processes.<br> Lipids catalyze chemical reactions inside the cell.", image: "", correct: false },
            { text: "Proteins catalyze chemical reactions inside the cell.<br> Lipids allow for the transport of certain molecules into and out of the cell.", image: "", correct: true },
            { text: "Proteins allow for the transport of certain molecules into and out of the cell.<br> Lipids store genetic information for cells.", image: "", correct: false },
            { text: " Proteins store genetic information for cells.<br> Lipids provide energy for cellular processes.", image: "", correct: false },
        ]
    },
    {//#32 C/H
        question: "32. A table comparing the characteristics of four samples is shown.<br><br>Which sample most likely contains viruses?",
        image: "bio1/thirtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Sample 1", image: "", correct: false },
            { text: "Sample 2", image: "", correct: false },
            { text: "Sample 3", image: "", correct: true },
            { text: "Sample 4", image: "", correct: false },
        ]
    },
    {//#33 B
        question: "33. In a recent study, scientists investigated the effects of microorganisms naturally found in the body. They raised mice in two different environments and compared their immune system functions in response to a bacterial infection. Their data are shown.<br><br>Which conclusion about the microorganisms naturally found in the body is most likely supported by these data?",
        image: "bio1/thirtythree.jpg",
        imageBottom: "",
        answers: [
            { text: "All microorganisms are harmful to the body.", image: "", correct: false },
            { text: "Microorganisms are important in promoting healthy immune systems.", image: "", correct: true },
            { text: "All bacteria in the body increase the effectiveness of the immune system.", image: "", correct: false },
            { text: "Bacteria that cause infections decrease the number and variety of immune cells in the body.", image: "", correct: false },
        ]
    },
    {//#34 C/H
        question: "34. Which statements explain how a mutation in a somatic cell is different from a mutation that occurs in gametes?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Somatic cell mutations occur in cells that give rise to gametes.<br> Gamete mutations occur in cells that result in apoptosis.", image: "", correct: false },
            { text: "Somatic cell mutations are maintained in the gene pool.<br> Gamete mutations are expelled from the gene pool.", image: "", correct: false },
            { text: "Somatic cell mutations are generally not passed to offspring.<br> Gamete mutations are usually passed to offspring.", image: "", correct: true },
            { text: "Somatic cell mutations will not be expressed by the individual that contains the mutation.<br> Gamete mutations will be expressed by the individual.", image: "", correct: false },
        ]
    },
    {//#35 B
        question: "35. Which model accurately shows a cell progressing through mitosis?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/thirtyfiveA.jpg", correct: false },
            { text: "", image: "bio1/thirtyfiveB.jpg", correct: true },
            { text: "", image: "bio1/thirtyfiveC.jpg", correct: false },
            { text: "", image: "bio1/thirtyfiveD.jpg", correct: false },
        ]
    },
    {//#36 C/H
        question: "36. Some relationships between species found in the Texas Gulf Coast are shown in the food web.<br><br>Which energy pyramid best models energy flow in the Texas Gulf Coast community?",
        image: "bio1/thirtysix.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/thirtysixA.jpg", correct: false },
            { text: "", image: "bio1/thirtysixB.jpg", correct: false },
            { text: "", image: "bio1/thirtysixC.jpg", correct: true },
            { text: "", image: "bio1/thirtysixD.jpg", correct: false },
        ]
    },
    {//#37 A
        question: "37. Normal cells have a contact inhibition feedback mechanism that prevents the cells from replicating when other cells are touched. A diagram of cells with contact inhibition and cells without contact inhibition is shown.<br><br>Which statement best describes what will happen to cells in an organism that lack contact inhibition?",
        image: "bio1/thirtyseven.jpg",
        imageBottom: "",
        answers: [
            { text: "The cells will continue to grow, causing a tumor in the body.", image: "", correct: true },
            { text: "The cells will replicate normally, replacing body cells that die.", image: "", correct: false },
            { text: "The cells will replicate until the food supply for each cell is used, causing each cell to die.", image: "", correct: false },
            { text: "The cells will stop replicating once one layer is produced, as other body cells will crowd them out.", image: "", correct: false },
        ]
    },
    {//#38 C/H
        question: "38. In some coral reefs, a symbiotic relationship exists between pygmy seahorses and sea fans. The pygmy seahorse can wrap its tail around the branches of the sea fan. This allows the pygmy seahorse to be camouflaged within the sea fan, protecting it from predators. The pygmy seahorse does not harm or benefit the sea fan while it grasps the branches with its tail.<br><br>What is the correct classification of this symbiotic relationship?",
        image: "bio1/thirtyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "Predator/prey", image: "", correct: false },
            { text: "Mutualism", image: "", correct: false },
            { text: "Commensalism", image: "", correct: true },
            { text: "Parasite/host", image: "", correct: false },
        ]
    },
    {//#39 C/H
        question: "39. Two scientists studied patterns of evolution in the fossil record. Many species they analyzed showed periods of slow changes interrupted by a period of rapid change. This pattern of periods of slow change interrupted by periods of rapid change with few, if any transitional fossils, best describes the theory of —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "natural selection", image: "", correct: false },
            { text: "genetic drift", image: "", correct: false },
            { text: "punctuated equilibrium", image: "", correct: true },
            { text: "gene flow", image: "", correct: false },
        ]
    },
    {//#40 A
        question: "40. Which table best compares the events that occur during different stages of the cell cycle?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/fourtyA.jpg", correct: true },
            { text: "", image: "bio1/fourtyB.jpg", correct: false },
            { text: "", image: "bio1/fourtyC.jpg", correct: false },
            { text: "", image: "bio1/fourtyD.jpg", correct: false },
        ]
    },
    {//#41 B
        question: "41. A phylogenetic tree based on genetic similarities is shown.<br><br>Which numbered location on the phylogenetic tree identifies characteristics shared by Species B, C, and D?",
        image: "bio1/fourtyone.jpg",
        imageBottom: "",
        answers: [
            { text: "Location 1", image: "", correct: false },
            { text: "Location 2", image: "", correct: true },
            { text: "Location 3", image: "", correct: false },
            { text: "Location 4", image: "", correct: false },
        ]
    },
    {//#42 D/J
        question: "42. Both the respiratory system and the digestive system involve the uptake of necessary molecules from an animal’s surroundings. Alveoli are tiny sacs that aid in the exchange of carbon dioxide and oxygen in the lungs. Intestinal villi are tiny projections along the lining of the intestines used to take in nutrients from food passing through.<br><br>Which system must interact with the respiratory and digestive systems to transport gases and nutrients throughout the body?",
        image: "bio1/fourtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Endocrine", image: "", correct: false },
            { text: "Integumentary", image: "", correct: false },
            { text: "Immune", image: "", correct: false },
            { text: "Circulatory", image: "", correct: true },
        ]
    },
    {//#43 A
        question: "43. Cross-pollination of flowers from different populations of the same species will most likely result in —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "gene flow as new alleles are introduced", image: "", correct: true },
            { text: "evolution of a different species as alleles mix", image: "", correct: false },
            { text: "hybrid sterility as gametes from different individuals are incompatible", image: "", correct: false },
            { text: "a decrease of genetic variation among individuals", image: "", correct: false },
        ]
    },
    {//#44 C/H
        question: "44. After a wheat field is cleared, wild grasses and weeds begin growing. This process is considered —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "primary succession because pioneer species appear", image: "", correct: false },
            { text: "primary succession because there are no large trees", image: "", correct: false },
            { text: "secondary succession because soil is already present", image: "", correct: true },
            { text: "secondary succession because the field contains inorganic matter", image: "", correct: false },
        ]
    },
    {//#45 D/J
        question: "45. A model of two structures that perform cellular processes is shown.<br><br>What are the products of the cellular processes in these organelles?",
        image: "bio1/fourtyfive.jpg",
        imageBottom: "",
        answers: [
            { text: "I: glucose and carbon dioxide<br> II: oxygen and water", image: "", correct: false },
            { text: "I: carbon dioxide and oxygen<br> II: glucose and water", image: "", correct: false },
            { text: "I: oxygen and glucose<br> II: water and carbon dioxide", image: "", correct: false },
            { text: "I: carbon dioxide and water<br> II: glucose and oxygen", image: "", correct: true },
        ]
    },
    {//#46 C/H
        question: "46. During an extended dry season in an area, the majority of the ground cover dried up. Which description best explains how this would affect the ecosystem in that area?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The ecosystem would become less stable because the ranges of many organisms would expand and overlap.", image: "", correct: false },
            { text: "The ecosystem would become more stable because there would be less competition among canopy plants.", image: "", correct: false },
            { text: "The ecosystem would become less stable because less energy would be available to it from the decrease in producers.", image: "", correct: true },
            { text: "The ecosystem would become more stable because organisms in higher trophic levels would be able to find prey more easily.", image: "", correct: false },
        ]
    },
    {//#47 D/J
        question: "47. Water, sugar, and other important nutrients need to be transported from one part of a plant to another. Which statement correctly describes the interaction of the root and shoot systems during nutrient transport?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The leaves take in water and sugar, which are then transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The roots take in water and sugar, which are then transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The leaves take in water and the roots produce sugar that are transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The roots take in water and the leaves produce sugar that are transported to the rest of the plant through vascular tissues.", image: "", correct: true },
        ]
    },
    {//#48 C/H
        question: "48. <i>E. coli</i> has three genes that each code for different enzymes that break down lactose. Scientists conducted investigations about the production of these enzymes using samples of <i>E. coli</i>. Their results are shown in the table.<br><br>Which conclusion about the production of the enzymes can be determined by analyzing the scientists’ results?",
        image: "bio1/fourtyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "Gene expression for the enzymes was controlled by the temperature of lactose.", image: "", correct: false },
            { text: "The genes for the enzymes were expressed in equal amounts during both experiments.", image: "", correct: false },
            { text: "Gene expression for the enzymes was controlled by the presence of lactose.", image: "", correct: true },
            { text: "The genes for the enzymes were mutated before being expressed by the presence of lactose.", image: "", correct: false },
        ]
    },
    {//#49 B
        question: "49. Most animals avoid eating monarch butterflies due to their bad taste. Viceroy butterflies look very similar to the monarchs.<br><br> Which of these best explains how the viceroy butterfly benefits from looking like the monarch butterfly?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Viceroy butterflies are able to reproduce with the monarch butterflies.", image: "", correct: false },
            { text: "Viceroy butterflies are able to deter predators in the same way as the monarch butterflies.", image: "", correct: true },
            { text: "Viceroy butterflies are able to follow the migratory patterns of the monarch butterflies.", image: "", correct: false },
            { text: "Viceroy butterflies are able to find additional sources of food used by the monarch butterflies.", image: "", correct: false },
        ]
    },
    {//#50 A
        question: "50. Which sequence represents the levels of organization found in a multicellular organism, from smallest to largest?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Cell &rarr; tissue &rarr; organ &rarr; organ system", image: "", correct: true },
            { text: "Organ system &rarr; organ &rarr; tissue &rarr; cell", image: "", correct: false },
            { text: "Tissue &rarr; organ &rarr; organ system &rarr; cell", image: "", correct: false },
            { text: "Tissue &rarr; organ &rarr; organ system &rarr; cell", image: "", correct: false },
        ]
    },
];

function redirectToNewPage() {
    window.location.href = 'biologyhome.html';
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