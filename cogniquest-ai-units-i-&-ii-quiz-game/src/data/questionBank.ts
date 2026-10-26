import { Question } from '../types/quiz';

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // UNIT I: FOUNDATIONS & APPLICATIONS OF AI
  // ==========================================
  {
    id: 'u1_q01',
    unit: 'Unit I',
    topic: 'Foundations of AI',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Who coined the term "Artificial Intelligence" and in which year was it officially introduced?',
    options: [
      'Alan Turing in 1950',
      'John McCarthy in 1960',
      'Marvin Minsky in 1965',
      'Herbert Simon in 1956'
    ],
    correctAnswer: 'John McCarthy in 1960',
    explanation: 'According to the Christ University lecture notes (Ch-01 Slide 3), the term "AI" was first introduced by John McCarthy in 1960.',
    slideReference: 'Ch-01 Slide 3',
    hint: 'Think of the father of LISP and AI conferences referenced in your introductory slides.'
  },
  {
    id: 'u1_q02',
    unit: 'Unit I',
    topic: 'Foundations of AI',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'In standard AI taxonomy (Russell & Norvig), modern AI systems predominantly focus on which of the four quadrants?',
    options: [
      'Thinking Humanly (Cognitive Science)',
      'Acting Humanly (Turing Test emulation)',
      'Thinking Rationally (Laws of Thought logic)',
      'Acting Rationally (The Rational Agent Approach)'
    ],
    correctAnswer: 'Acting Rationally (The Rational Agent Approach)',
    explanation: 'Ch-01 Slide 6 states: "Most modern AI systems focus entirely on Acting Rationally—making the optimal decision to solve a problem—rather than trying to emulate human emotions, fallacies, or biological quirks."',
    slideReference: 'Ch-01 Slide 6',
    hint: 'It is about taking actions that maximize the chance of achieving a specific goal rather than mirroring human biology.'
  },
  {
    id: 'u1_q03',
    unit: 'Unit I',
    topic: 'Foundations of AI',
    type: 'true_false',
    difficulty: 'Easy',
    question: 'A barometer predicts rain based on atmospheric pressure drops; therefore, according to AI foundations, prediction alone constitutes genuine intelligence.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Ch-01 Slide 7 explains: "A barometer predicts rain based on atmospheric pressure drops. Is a barometer intelligent? No. So prediction alone cannot be our definition of intelligence."',
    slideReference: 'Ch-01 Slide 7',
    hint: 'Does a simple mechanical pressure device possess autonomous perception, learning, and reasoning?'
  },
  {
    id: 'u1_q04',
    unit: 'Unit I',
    topic: 'Applications of AI',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'A cybersecurity operations center deploys the "AEG bot" and "AI2 Platform" to automatically inspect repository code for vulnerabilities and detect zero-day cyber-attacks. Which real-world AI application domain does this represent?',
    options: [
      'AI in Data Security',
      'AI in Astronomy',
      'AI in Social Media analytics',
      'AI in Transport Fleet Management'
    ],
    correctAnswer: 'AI in Data Security',
    explanation: 'Ch-01 Slide 29 specifically notes: "AI in Data Security: Some examples such as AEG bot, AI2 Platform, are used to determine software bugs and cyber-attacks in a better way."',
    slideReference: 'Ch-01 Slide 29',
    hint: 'The slide specifically lists AEG bot and AI2 Platform under this domain.'
  },
  {
    id: 'u1_q05',
    unit: 'Unit I',
    topic: 'Applications of AI',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Which prominent humanoid robots are highlighted in the lecture slides as prime examples of AI in robotics capable of conversation and human-like behaviour?',
    options: [
      'ASIMO and Atlas',
      'Erica and Sophia',
      'Pepper and Spot',
      'Optimus and Kismet'
    ],
    correctAnswer: 'Erica and Sophia',
    explanation: 'Ch-01 Slide 31 explicitly mentions: "Humanoid Robots are best examples for AI in robotics, recently the intelligent Humanoid robot named as Erica and Sophia has been developed which can talk and behave like humans."',
    slideReference: 'Ch-01 Slide 31',
    hint: 'Named in Ch-01 Slide 31 under AI in Robotics.'
  },
  {
    id: 'u1_q06',
    unit: 'Unit I',
    topic: 'Foundations of AI',
    type: 'fill_blank',
    difficulty: 'Medium',
    question: 'To be considered genuinely intelligent rather than just automated, a system must exhibit five key traits: Perception, Rational Decision-Making, Adaptation & Learning, Handling Uncertainty, and _______.',
    options: [
      'Goal Alignment',
      'Emotional Empathy',
      'Human Consciousness',
      'Hardware Redundancy'
    ],
    correctAnswer: 'Goal Alignment',
    explanation: 'Ch-01 Slide 9 lists the 5 defining capabilities: Perception, Rational Decision-Making, Adaptation & Learning, Handling Uncertainty, and Goal Alignment.',
    slideReference: 'Ch-01 Slide 9',
    hint: 'Directing internal capabilities toward achieving an objective (e.g. winning a game, discovering a drug compound).'
  },
  {
    id: 'u1_q07',
    unit: 'Unit I',
    topic: 'Applications of AI',
    type: 'match',
    difficulty: 'Medium',
    question: 'Match each AI application sector with its primary real-world task described in the lecture notes:',
    correctAnswer: {
      p1: 'r2',
      p2: 'r4',
      p3: 'r1',
      p4: 'r3'
    },
    matchPairs: [
      { id: 'p1', left: 'AI in Astronomy', right: 'r2: Solving complex universe problems and cosmic origins' },
      { id: 'p2', left: 'AI in Agriculture', right: 'r4: Crop monitoring, soil analysis, and agricultural robotics' },
      { id: 'p3', left: 'AI in Healthcare', right: 'r1: Early diagnosis before hospitalization and patient monitoring' },
      { id: 'p4', left: 'AI in Automotive', right: 'r3: TeslaBot virtual assistants and self-driving vehicles' }
    ],
    explanation: 'Ch-01 Slides 28, 30, and 32 detail real-world applications in Astronomy, Healthcare, Automotive, and Agriculture.',
    slideReference: 'Ch-01 Slides 28-32',
    hint: 'Review the 13 application domains in Christ University Unit 1 Part 1.'
  },

  // ==========================================
  // TURING TEST
  // ==========================================
  {
    id: 'u1_q08',
    unit: 'Unit I',
    topic: 'Turing Test',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'In the classic Turing Test scenario (Ch-01 Slide 39 & 40), how many participants are involved and what are their respective roles?',
    options: [
      'Two participants: One human interrogator and one AI machine',
      'Three participants: Two humans (one evaluator C, one human respondent B) and one machine A',
      'Four participants: Two evaluators, one machine, and one human control',
      'Three participants: Two machines competing to fool one human judge'
    ],
    correctAnswer: 'Three participants: Two humans (one evaluator C, one human respondent B) and one machine A',
    explanation: 'Ch-01 Slide 39-40: "In a typical Turing Test scenario, three participants are involved: two humans and one machine. The interrogator, a human judge (C), is isolated from the other two (A and B)."',
    slideReference: 'Ch-01 Slide 39-40',
    hint: 'Look at the diagram on Slide 40: Node C at bottom, A (computer) and B (human) across the screen.'
  },
  {
    id: 'u1_q09',
    unit: 'Unit I',
    topic: 'Turing Test',
    type: 'assertion_reason',
    difficulty: 'Hard',
    question: 'Assertion (A): The Turing Test does not require the machine to be objectively correct or strictly logical in its answers.\nReason (R): The Turing Test is fundamentally an imitation test of human conversation where deception and natural conversational style matter more than perfection.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true'
    ],
    correctAnswer: 'Both A and R are true, and R is the correct explanation of A',
    explanation: 'Ch-01 Slide 34 states: "The Turing Test does not require the machine to be correct or logical in its responses but rather to be convincing in simulating human conversation. The test is fundamentally about deception—the machine must fool the judge into believing that it is human."',
    slideReference: 'Ch-01 Slide 34',
    hint: 'If a human makes a slight math error or tells a conversational joke, does a human-like bot do the same?'
  },
  {
    id: 'u1_q10',
    unit: 'Unit I',
    topic: 'Turing Test',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Which four key disciplines/criteria must an AI system possess to effectively pass the Turing Test as specified in Ch-01 Slide 34?',
    options: [
      'Robotics, Computer Vision, Genetic Algorithms, Microprocessing',
      'Natural Language Processing (NLP), Knowledge Representation, Reasoning, and Learning',
      'Speech Synthesis, Database Normalization, Graph Coloring, Hill Climbing',
      'Neural Networks, Calculus, Blockchain, Heuristic Evaluation'
    ],
    correctAnswer: 'Natural Language Processing (NLP), Knowledge Representation, Reasoning, and Learning',
    explanation: 'Ch-01 Slide 34 identifies the four key criteria for the Turing test: NLP, Knowledge Representation, Reasoning, and Learning.',
    slideReference: 'Ch-01 Slide 34',
    hint: 'Language to communicate, memory to know facts, logic to infer, and adaptation to improve.'
  },
  {
    id: 'u1_q11',
    unit: 'Unit I',
    topic: 'Turing Test',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Which of the following is considered a primary DISADVANTAGE or limitation of the Turing Test as highlighted in the lecture slides?',
    options: [
      'It cannot be administered through a text interface',
      'It focuses primarily on language-based conversation and ignores perception, decision-making, and physical interaction',
      'It requires expensive supercomputing quantum hardware',
      'It has never inspired any benchmark studies in AI history'
    ],
    correctAnswer: 'It focuses primarily on language-based conversation and ignores perception, decision-making, and physical interaction',
    explanation: 'Ch-01 Slide 42 lists: "Limited Scope: The Turing Test focuses primarily on language-based conversations and does not account for other aspects of intelligence, such as perception, problem-solving, and decision-making."',
    slideReference: 'Ch-01 Slide 42',
    hint: 'Language alone does not encompass visual perception, spatial navigation, or physical robotics.'
  },

  // ==========================================
  // AGENTS & ENVIRONMENTS, GOOD BEHAVIOUR
  // ==========================================
  {
    id: 'u1_q12',
    unit: 'Unit I',
    topic: 'Intelligent Agents',
    type: 'fill_blank',
    difficulty: 'Easy',
    question: 'An agent is anything that can perceive its environment through _______ and acts upon that environment through _______.',
    options: [
      'Sensors; Effectors (or Actuators)',
      'Effectors; Sensors',
      'Programs; Networks',
      'Monitors; Keyboards'
    ],
    correctAnswer: 'Sensors; Effectors (or Actuators)',
    explanation: 'Ch-01-Part_2 Slide 2: "An agent is anything that can perceive its environment through sensors and acts upon that environment through effectors."',
    slideReference: 'Ch-01-Part_2 Slide 2',
    hint: 'Sensory inputs come in first, followed by motor action outputs.'
  },
  {
    id: 'u1_q13',
    unit: 'Unit I',
    topic: 'Rational Agents',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'How do the lecture notes distinguish "Rationality" from "Perfection"?',
    options: [
      'Rationality and perfection are synonymous in artificial intelligence',
      'Perfection maximizes actual performance (requiring impossible omniscience), whereas rationality maximizes expected performance based on available information',
      'Rationality requires 100% accurate prediction of future random events',
      'Perfection is achievable by any simple reflex agent in stochastic environments'
    ],
    correctAnswer: 'Perfection maximizes actual performance (requiring impossible omniscience), whereas rationality maximizes expected performance based on available information',
    explanation: 'Ch-01-Part_2 Slide 27: "Perfection maximizes actual performance (which requires impossible omniscience), whereas rationality maximizes expected performance based on available information."',
    slideReference: 'Ch-01-Part_2 Slide 27',
    hint: 'Rational agents act sensibly given what they know; they cannot predict unobservable coincidences.'
  },
  {
    id: 'u1_q14',
    unit: 'Unit I',
    topic: 'Good Behaviour',
    type: 'scenario',
    difficulty: 'Hard',
    question: 'A student designs an automated cleaning robot whose performance measure awards +1 point each time it sweeps dirt off the floor. As a result, the robot sweeps dirt, dumps it out, and sweeps it again to maximize points. What foundational AI principle did the designer violate?',
    options: [
      'Failing to implement recursive Depth-First Search',
      'Performance measures should be based on the desired state of the environment (e.g., clean floor) rather than how the agent behaves',
      'Neglecting to make the robot episodic rather than sequential',
      'Failing to convert the agent into a simple reflex agent'
    ],
    correctAnswer: 'Performance measures should be based on the desired state of the environment (e.g., clean floor) rather than how the agent behaves',
    explanation: 'Ch-01-Part_2 Slide 26 explicitly highlights: "It is generally better to design these measures based on the desired state of the environment (e.g., a clean floor) rather than how the agent should behave (e.g., cleaning up dirt, then dumping it to clean it again)."',
    slideReference: 'Ch-01-Part_2 Slide 26',
    hint: 'Measure the clean outcome, not the repeated action.'
  },
  {
    id: 'u1_q15',
    unit: 'Unit I',
    topic: 'Intelligent Agents',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'In agent terminology, what is a "Percept Sequence"?',
    options: [
      'The complete set of all actions an agent can perform in the future',
      'The history of all perceptual inputs that an agent has received till date',
      'The mathematical formula used to calculate utility scores',
      'The order of successor nodes in an A* search tree'
    ],
    correctAnswer: 'The history of all perceptual inputs that an agent has received till date',
    explanation: 'Ch-01-Part_2 Slide 4: "Percept Sequence − It is the history of all that an agent has perceived till date."',
    slideReference: 'Ch-01-Part_2 Slide 4',
    hint: 'A sequence of percepts recorded over time.'
  },

  // ==========================================
  // 5 TYPES OF AI AGENTS
  // ==========================================
  {
    id: 'u1_q16',
    unit: 'Unit I',
    topic: 'Types of AI Agents',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Which type of AI agent selects actions based solely on the current percept, completely ignoring percept history and using Condition-Action rules?',
    options: [
      'Simple Reflex Agent',
      'Model-based Reflex Agent',
      'Goal-based Agent',
      'Learning Agent'
    ],
    correctAnswer: 'Simple Reflex Agent',
    explanation: 'Ch-01-Part_2 Slide 7: "Simple Reflex Agents: They choose actions only based on the current percept... The Simple reflex agent does not consider any part of percepts history... works on Condition-action rule."',
    slideReference: 'Ch-01-Part_2 Slide 7',
    hint: 'Examples include automatic sliding doors and motion sensor lights.'
  },
  {
    id: 'u1_q17',
    unit: 'Unit I',
    topic: 'Types of AI Agents',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'A user tells a chatbot: "Call me Smrity." In the very next message, the user asks: "What is my name?" A Simple Reflex Agent replies: "I don\'t know. You didn\'t tell me in this message." But another agent replies: "Your name is Smrity!" Which agent type is the latter?',
    options: [
      'Simple Reflex Agent',
      'Model-Based Reflex Agent',
      'Stateless Vacuum Agent',
      'Breadth-First Agent'
    ],
    correctAnswer: 'Model-Based Reflex Agent',
    explanation: 'Ch-01-Part_2 Slide 12 provides this exact scenario: "A model-based reflex agent maintains an internal memory (model) of previous interactions and uses that information to make decisions."',
    slideReference: 'Ch-01-Part_2 Slide 12',
    hint: 'This agent maintains an internal state to track history in partially observable environments.'
  },
  {
    id: 'u1_q18',
    unit: 'Unit I',
    topic: 'Types of AI Agents',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What crucial element differentiates a Utility-Based Agent from a Goal-Based Agent?',
    options: [
      'Goal-based agents only work in continuous environments',
      'A utility function maps each state to a real number to evaluate "how happy" the agent is or how efficiently/desirably an action achieves the goal among multiple alternatives',
      'Utility-based agents do not have sensors or actuators',
      'Goal-based agents cannot perform any search or planning'
    ],
    correctAnswer: 'A utility function maps each state to a real number to evaluate "how happy" the agent is or how efficiently/desirably an action achieves the goal among multiple alternatives',
    explanation: 'Ch-01-Part_2 Slide 16-17: "Utility-based agents provide an extra component of utility measurement... The utility function maps each state to a real number to check how efficiently each action achieves the goals (How happy I will be in such a state)."',
    slideReference: 'Ch-01-Part_2 Slide 16-17',
    hint: 'Slide 17 illustrates: "How happy I will be in such a state".'
  },
  {
    id: 'u1_q19',
    unit: 'Unit I',
    topic: 'Types of AI Agents',
    type: 'scenario',
    difficulty: 'Hard',
    question: 'A flight booking agent needs to reserve a ticket under ₹5000. It evaluates Flight 1 (₹4500, Utility: 6), Flight 2 (₹5200, Utility: 9), and Flight 3 (₹4800, Utility: 7). It selects Flight 3 because it satisfies the price constraint while maximizing utility score. This agent is a:',
    options: [
      'Simple Reflex Agent',
      'Model-based Reflex Agent',
      'Utility-Based Agent',
      'Blind Search Agent'
    ],
    correctAnswer: 'Utility-Based Agent',
    explanation: 'Ch-01-Part_2 Slide 18 uses this exact flight booking example (Flight 1 ₹4500 u=6, Flight 2 ₹5200 u=9, Flight 3 ₹4800 u=7) to demonstrate Utility-Based Agents optimizing trade-offs.',
    slideReference: 'Ch-01-Part_2 Slide 18',
    hint: 'Check Ch-01-Part_2 Slide 18: "Utility-Based Agent = Goal-Based Agent + Smart Optimization".'
  },
  {
    id: 'u1_q20',
    unit: 'Unit I',
    topic: 'Types of AI Agents',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'A Learning Agent consists of four conceptual components. Which component is responsible for suggesting actions that will lead to new and informative experiences (exploration)?',
    options: [
      'Learning element',
      'Critic',
      'Performance element',
      'Problem generator'
    ],
    correctAnswer: 'Problem generator',
    explanation: 'Ch-01-Part_2 Slide 21: "Problem generator: This component is responsible for suggesting actions that will lead to new and informative experiences."',
    slideReference: 'Ch-01-Part_2 Slide 21',
    hint: 'It generates sub-problems and experiments to trigger new learning opportunities.'
  },

  // ==========================================
  // NATURE OF ENVIRONMENTS & PEAS
  // ==========================================
  {
    id: 'u1_q21',
    unit: 'Unit I',
    topic: 'Nature of Environments',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Why is playing Chess classified as a "Fully Observable" environment while Poker is "Partially Observable"?',
    options: [
      'Chess has a timer whereas Poker does not',
      'In Chess, the agent can see the entire board and all pieces at any instant; in Poker, opponents\' private cards are hidden',
      'Poker is deterministic while Chess is stochastic',
      'Chess requires a continuous state space'
    ],
    correctAnswer: 'In Chess, the agent can see the entire board and all pieces at any instant; in Poker, opponents\' private cards are hidden',
    explanation: 'Ch-01-Part_2 Slide 31: "Fully Observable: Chess — the AI can see the complete chessboard and all pieces. Partially Observable: Poker — the AI cannot see the opponent’s hidden cards."',
    slideReference: 'Ch-01-Part_2 Slide 31',
    hint: 'Can the agent sense every variable that affects the game outcome?'
  },
  {
    id: 'u1_q22',
    unit: 'Unit I',
    topic: 'Nature of Environments',
    type: 'match',
    difficulty: 'Hard',
    question: 'Match the environment dimension with its correct real-world pair from Ch-01-Part_2 slides:',
    correctAnswer: {
      p1: 'r3',
      p2: 'r1',
      p3: 'r4',
      p4: 'r2'
    },
    matchPairs: [
      { id: 'p1', left: 'Deterministic vs Stochastic', right: 'r3: Calculator vs Car driving in traffic' },
      { id: 'p2', left: 'Static vs Dynamic', right: 'r1: Crossword puzzle vs Drone soccer navigation' },
      { id: 'p3', left: 'Discrete vs Continuous', right: 'r4: Chess board positions vs Steering wheel angles and vehicle speed' },
      { id: 'p4', left: 'Episodic vs Sequential', right: 'r2: Factory product defect inspection vs Video game campaign' }
    ],
    explanation: 'Ch-01-Part_2 Slides 31-34 map out all real-world examples for the 7 environmental properties.',
    slideReference: 'Ch-01-Part_2 Slides 31-34',
    hint: 'Check the tables in slides 31-34 for exact classroom examples.'
  },
  {
    id: 'u1_q23',
    unit: 'Unit I',
    topic: 'PEAS Framework',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'What does the acronym PEAS stand for in Artificial Intelligence agent design?',
    options: [
      'Percepts, Environment, Actuators, Strategy',
      'Performance measure, Environment, Actuators, Sensors',
      'Planning, Evaluation, Algorithms, State',
      'Probability, Efficiency, Accuracy, Speed'
    ],
    correctAnswer: 'Performance measure, Environment, Actuators, Sensors',
    explanation: 'Ch-01-Part_2 Slide 35: "P: Performance measure, E: Environment, A: Actuators, S: Sensors."',
    slideReference: 'Ch-01-Part_2 Slide 35',
    hint: 'P is the measure of success, E is the surroundings, A does the moving, S does the sensing.'
  },
  {
    id: 'u1_q24',
    unit: 'Unit I',
    topic: 'PEAS Framework',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'For an automated "Part-picking Robot" on a manufacturing assembly line (Ch-01-Part_2 Slide 37), which of the following correctly describes its PEAS components?',
    options: [
      'P: High passenger comfort; E: Highway; A: Steering; S: Sonar',
      'P: Percentage of parts in correct bins; E: Conveyor belt with parts & bins; A: Jointed arms & Hand; S: Camera & Joint angle sensors',
      'P: Healthy patient; E: Hospital; A: Medical tests; S: Keyboard symptoms entry',
      'P: Cleanness; E: Carpet & table; A: Brushes; S: Dirt detection sensor'
    ],
    correctAnswer: 'P: Percentage of parts in correct bins; E: Conveyor belt with parts & bins; A: Jointed arms & Hand; S: Camera & Joint angle sensors',
    explanation: 'Ch-01-Part_2 Slide 37 specifically specifies the Part-picking Robot PEAS table.',
    slideReference: 'Ch-01-Part_2 Slide 37',
    hint: 'It puts items into bins on a conveyor belt using jointed arms and cameras.'
  },

  // ==========================================
  // PROBLEMS, FORMULATION & CHARACTERISTICS
  // ==========================================
  {
    id: 'u1_q25',
    unit: 'Unit I',
    topic: 'Problem Formulation',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'In the formal definition of a search problem (Ch-01-Part_3 Slide 3), what are the four core components?',
    options: [
      'Heuristic, Queue, Stack, Tree',
      'Initial State, Successor Function (Actions), Goal Test, Path Cost',
      'Variables, Domains, Constraints, Clauses',
      'Input vector, Hidden layers, Weights, Output'
    ],
    correctAnswer: 'Initial State, Successor Function (Actions), Goal Test, Path Cost',
    explanation: 'Ch-01-Part_3 Slide 3: "A problem is formally defined by four main components: Initial State, Successor Function (Actions), Goal Test, and Path Cost."',
    slideReference: 'Ch-01-Part_3 Slide 3',
    hint: 'Where you start, what moves you can make, how you know you won, and what it costs.'
  },
  {
    id: 'u1_q26',
    unit: 'Unit I',
    topic: 'Problem Formulation',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'In the Indian Traveller problem (Ch-01-Part_3 Slides 4-9), if the agent is at state In(Pune), what does the Successor Function return?',
    options: [
      'Only In(Chennai)',
      'A set of <action, successor> ordered pairs such as {<Go Mumbai, In(Mumbai)>, <Go Ahmednagar, In(Ahmednagar)>, <Go Solapur, In(Solapur)>, <Go Satara, In(Satara)>}',
      'The shortest distance in kilometers to Kolkata',
      'A Boolean value indicating whether Pune has an airport'
    ],
    correctAnswer: 'A set of <action, successor> ordered pairs such as {<Go Mumbai, In(Mumbai)>, <Go Ahmednagar, In(Ahmednagar)>, <Go Solapur, In(Solapur)>, <Go Satara, In(Satara)>}',
    explanation: 'Ch-01-Part_3 Slide 6 & 9: SUCCESSOR(In Pune) returns the set of legal action-destination pairs reachable from Pune.',
    slideReference: 'Ch-01-Part_3 Slide 6, 9',
    hint: 'Successor function returns ordered pairs of action and the resulting state.'
  },
  {
    id: 'u1_q27',
    unit: 'Unit I',
    topic: 'Problem Characteristics',
    type: 'match',
    difficulty: 'Hard',
    question: 'Regarding the question "Can problem solution steps be ignored or undone?" (Ch-01-Part_3 Slides 17-18), match each problem type with its definition and canonical example:',
    correctAnswer: {
      p1: 'r2',
      p2: 'r1',
      p3: 'r3'
    },
    matchPairs: [
      { id: 'p1', left: 'Ignorable', right: 'r2: Steps can be ignored; nothing lost by unneeded steps (e.g. Theorem proving)' },
      { id: 'p2', left: 'Recoverable', right: 'r1: Moves can be undone via backtracking (e.g. 8-Puzzle)' },
      { id: 'p3', left: 'Irrecoverable', right: 'r3: Moves cannot be retracted once made (e.g. Chess)' }
    ],
    explanation: 'Ch-01-Part_3 Slides 17-18 classify problems into Ignorable (Theorem proving), Recoverable (8-Puzzle), and Irrecoverable (Chess).',
    slideReference: 'Ch-01-Part_3 Slides 17-18',
    hint: 'Can you take back a piece in Chess? Can you backtrack in 8-puzzle?'
  },
  {
    id: 'u1_q28',
    unit: 'Unit I',
    topic: 'Problem Characteristics',
    type: 'scenario',
    difficulty: 'Hard',
    question: 'Consider the Marcus reasoning problem (Ch-01-Part_3 Slide 21): "Marcus was born in 40 A.D.; All Pompeians died in 79 A.D.; No mortal lives longer than 150 years; It is now 2008 A.D. Is Marcus alive?" Both reasoning paths conclude Marcus is dead. This illustrates which problem characteristic?',
    options: [
      'Is the problem universe unpredictable?',
      'Is a good solution absolute or relative?',
      'Is the problem decomposable?',
      'Is the search space continuous?'
    ],
    correctAnswer: 'Is a good solution absolute or relative?',
    explanation: 'Ch-01-Part_3 Slide 20-21: In absolute solution problems, any valid reasoning path yielding the correct answer suffices; in relative problems, we require the optimal/lowest cost path.',
    slideReference: 'Ch-01-Part_3 Slide 20-21',
    hint: 'Does it matter which proof path was taken as long as the true answer is found?'
  },
  {
    id: 'u1_q29',
    unit: 'Unit I',
    topic: 'Production Systems',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'A Production System in Artificial Intelligence consists of which four primary components?',
    options: [
      'Sensors, Actuators, Battery, Microcontroller',
      'Set of production rules (IF-THEN), Working memory, Control strategy, and Rule interpreter / inference engine',
      'Heuristic function, Admissibility table, Open list, Closed list',
      'Initial node, Fringe, Branching factor, Depth limit'
    ],
    correctAnswer: 'Set of production rules (IF-THEN), Working memory, Control strategy, and Rule interpreter / inference engine',
    explanation: 'Ch-01-Part_3 Slide 32 enumerates the 4 main components of a production system: Set of production rules, Working memory, Control strategy, and Rule interpreter/inference engine.',
    slideReference: 'Ch-01-Part_3 Slide 32',
    hint: 'Rule base, facts in memory, conflict resolution control, and execution engine.'
  },
  {
    id: 'u1_q30',
    unit: 'Unit I',
    topic: 'Issues in Search Design',
    type: 'true_false',
    difficulty: 'Medium',
    question: 'To avoid the wastage of time, redundant computation, and infinite loops caused by repeated states, graph search algorithms maintain a "closed list" to track already visited nodes.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Ch-01-Part_3 Slide 38: "A search program may visit the same state again and again... To avoid this, graph search uses a closed list to remember already visited states."',
    slideReference: 'Ch-01-Part_3 Slide 38',
    hint: 'Open list stores unexplored nodes; Closed list stores already visited nodes.'
  },

  // ==========================================
  // UNIT II: UNINFORMED SEARCH (BFS, DFS, IDDFS)
  // ==========================================
  {
    id: 'u2_q31',
    unit: 'Unit II',
    topic: 'Breadth-First Search',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Which fundamental data structure is utilized to implement Breadth-First Search (BFS)?',
    options: [
      'LIFO Stack',
      'FIFO Queue',
      'Min-Heap Priority Queue',
      'Binary Search Tree'
    ],
    correctAnswer: 'FIFO Queue',
    explanation: 'Ch-02-Part_1 Slide 4: "Breadth-first search implemented using FIFO queue data structure."',
    slideReference: 'Ch-02-Part_1 Slide 4',
    hint: 'First In, First Out allows level-by-level exploration.'
  },
  {
    id: 'u2_q32',
    unit: 'Unit II',
    topic: 'Breadth-First Search',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What are the theoretical Time Complexity and Space Complexity of standard Breadth-First Search (where b = branching factor, d = depth of shallowest solution)?',
    options: [
      'Time: O(b*d), Space: O(b*d)',
      'Time: O(b^d), Space: O(b^d)',
      'Time: O(b^m), Space: O(b*m)',
      'Time: O(d^b), Space: O(1)'
    ],
    correctAnswer: 'Time: O(b^d), Space: O(b^d)',
    explanation: 'Ch-02-Part_1 Slide 10: "Time Complexity: T(b) = O(b^d). Space Complexity: Memory size of frontier which is O(b^d)."',
    slideReference: 'Ch-02-Part_1 Slide 10',
    hint: 'Because all nodes at depth d must be stored in memory simultaneously, space is exponential.'
  },
  {
    id: 'u2_q33',
    unit: 'Unit II',
    topic: 'Depth-First Search',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'bfs_dfs_tree',
    question: 'In the search tree shown (Root S has children A and H; A has children B and C; B has children D and E; C has child G): If Depth-First Search explores left branches first, in what exact order will nodes be visited until Goal G is found?',
    options: [
      'S -> A -> H -> B -> C -> D -> E -> G',
      'S -> A -> B -> D -> E (backtrack) -> C -> G',
      'S -> H -> A -> G',
      'S -> B -> D -> G'
    ],
    correctAnswer: 'S -> A -> B -> D -> E (backtrack) -> C -> G',
    explanation: 'Ch-02-Part_1 Slide 13-14 traces this exact tree: "It will start searching from root node S, and traverse A, then B, then D and E. After traversing E, it will backtrack... then traverse node C and then G, terminating at goal G."',
    slideReference: 'Ch-02-Part_1 Slide 13-14',
    hint: 'Follow the deepest leftmost branch until a dead-end, then backtrack to the immediate parent.'
  },
  {
    id: 'u2_q34',
    unit: 'Unit II',
    topic: 'Depth-First Search',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What is the primary advantage of Depth-First Search over Breadth-First Search?',
    options: [
      'DFS is guaranteed to find the shortest path in all graphs',
      'DFS requires significantly less memory, having space complexity O(b*m) because it only needs to store the path from the root to the current node',
      'DFS can never get trapped in an infinite loop',
      'DFS does not require backtracking'
    ],
    correctAnswer: 'DFS requires significantly less memory, having space complexity O(b*m) because it only needs to store the path from the root to the current node',
    explanation: 'Ch-02-Part_1 Slide 12 & 16: "DFS requires very less memory as it only needs to store a stack of the nodes on the path from root node to the current node... Space complexity of DFS is O(bm)."',
    slideReference: 'Ch-02-Part_1 Slide 12, 16',
    hint: 'Linear space O(bm) versus exponential space O(b^d).'
  },
  {
    id: 'u2_q35',
    unit: 'Unit II',
    topic: 'Iterative Deepening Search',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Why is Iterative Deepening Search (IDDFS) widely regarded as the best uninformed search strategy for large state spaces when the depth of the solution is unknown?',
    options: [
      'It executes using a neural network heuristic',
      'It combines the completeness and optimality of BFS with the low memory footprint O(bd) of DFS',
      'It completely avoids visiting any node more than once',
      'It operates without any depth limits'
    ],
    correctAnswer: 'It combines the completeness and optimality of BFS with the low memory footprint O(bd) of DFS',
    explanation: 'Ch-02-Part_1 Slide 24: "It is useful because it combines the completeness and optimality of BFS with the low memory requirement of DFS."',
    slideReference: 'Ch-02-Part_1 Slide 24',
    hint: 'Takes the memory efficiency of depth search and the shallow guarantee of breadth search.'
  },
  {
    id: 'u2_q36',
    unit: 'Unit II',
    topic: 'Iterative Deepening Search',
    type: 'problem_solving',
    difficulty: 'Medium',
    question: 'In Iterative Deepening Search on a tree where Root A has children B and C, and B has children D and E while C has children F and G: How are nodes visited in Iteration 2 (Depth limit = 1)?',
    options: [
      'A only',
      'A, B, C',
      'A, B, D, E, C, F, G',
      'D, E, F, G only'
    ],
    correctAnswer: 'A, B, C',
    explanation: 'Ch-02-Part_1 Slide 20 shows: Iteration 1 (Limit=0): A. Iteration 2 (Limit=1): A, B, C.',
    slideReference: 'Ch-02-Part_1 Slide 20',
    hint: 'At depth limit 1, it explores root (level 0) and all its immediate children (level 1).'
  },

  // ==========================================
  // INFORMED SEARCH & HEURISTICS
  // ==========================================
  {
    id: 'u2_q37',
    unit: 'Unit II',
    topic: 'Heuristic Search',
    type: 'fill_blank',
    difficulty: 'Easy',
    question: 'A heuristic function h(n) is considered "Admissible" if it never overestimates the true cost to reach the goal, formally written as _______ where h*(n) is the true optimal cost.',
    options: [
      'h(n) <= h*(n)',
      'h(n) >= h*(n)',
      'h(n) = g(n) + h*(n)',
      'h(n) * h*(n) = 1'
    ],
    correctAnswer: 'h(n) <= h*(n)',
    explanation: 'Ch-02-Part_2 Slide 5: "Admissibility of the heuristic function is given as: h(n) <= h*(n). Here h(n) is heuristic cost, and h*(n) is the actual cost. Hence heuristic cost should be less than or equal to the actual cost."',
    slideReference: 'Ch-02-Part_2 Slide 5',
    hint: 'An admissible heuristic must be optimistic—it cannot overestimate.'
  },
  {
    id: 'u2_q38',
    unit: 'Unit II',
    topic: 'Greedy Best-First Search',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What evaluation function f(n) is used by Greedy Best-First Search to select the next node from the priority queue?',
    options: [
      'f(n) = g(n)',
      'f(n) = h(n)',
      'f(n) = g(n) + h(n)',
      'f(n) = g(n) - h(n)'
    ],
    correctAnswer: 'f(n) = h(n)',
    explanation: 'Ch-02-Part_2 Slide 7 & 40: "Greedy best-first search expands the node which is closest to the goal node estimated by heuristic function, i.e., f(n) = h(n). It does not consider the path cost g(n)."',
    slideReference: 'Ch-02-Part_2 Slide 7, 40',
    hint: 'It greedily minimizes the estimated distance to goal without accounting for past path cost.'
  },
  {
    id: 'u2_q39',
    unit: 'Unit II',
    topic: 'A* Search',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What is the evaluation function of the A* Search algorithm, and what do its individual components represent?',
    options: [
      'f(n) = h(n) where h(n) is past cost',
      'f(n) = g(n) + h(n), where g(n) is the exact cost to reach node n from the start, and h(n) is the estimated cost from n to the goal',
      'f(n) = g(n) * h(n), multiplying edge weights by the branching factor',
      'f(n) = b^d, calculating exponential frontier space'
    ],
    correctAnswer: 'f(n) = g(n) + h(n), where g(n) is the exact cost to reach node n from the start, and h(n) is the estimated cost from n to the goal',
    explanation: 'Ch-02-Part_2 Slide 29: "f(x) = g(x) + h(x) where g(x) represents the cost to get to node x and h(x) represents the estimated cost to arrive at the goal node from node x."',
    slideReference: 'Ch-02-Part_2 Slide 29',
    hint: 'Actual cost incurred so far plus heuristic estimated remaining cost.'
  },
  {
    id: 'u2_q40',
    unit: 'Unit II',
    topic: 'A* Search',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'a_star_graph',
    question: 'In an A* search tree, Start node S has child node A with edge cost g(A) = 4 and heuristic h(A) = 8; and child node B with edge cost g(B) = 10 and heuristic h(B) = 6. What are the evaluation values f(A) and f(B), and which node does A* explore first?',
    options: [
      'f(A) = 12, f(B) = 16; A* explores A first',
      'f(A) = 32, f(B) = 60; A* explores B first',
      'f(A) = 8, f(B) = 6; A* explores B first',
      'f(A) = 4, f(B) = 10; A* explores both simultaneously'
    ],
    correctAnswer: 'f(A) = 12, f(B) = 16; A* explores A first',
    explanation: 'Ch-02-Part_2 Slide 32 traces this exact tree: Node A has f(A) = 4 + 8 = 12. Node B has f(B) = 10 + 6 = 16. Since 12 < 16, A is the most promising candidate node and is explored next.',
    slideReference: 'Ch-02-Part_2 Slide 32',
    hint: 'Calculate f(x) = g(x) + h(x) for each node and choose the smallest value.'
  },
  {
    id: 'u2_q41',
    unit: 'Unit II',
    topic: 'A* Search vs Greedy',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Under what condition is A* Search GUARANTEED to return the optimal (lowest-cost) solution?',
    options: [
      'When the graph has negative cycle edge weights',
      'When the heuristic function h(n) is admissible (never overestimates the true cost to the goal)',
      'When DFS is run first to establish a depth limit',
      'When the branching factor is infinite'
    ],
    correctAnswer: 'When the heuristic function h(n) is admissible (never overestimates the true cost to the goal)',
    explanation: 'Ch-02-Part_2 Slide 29 & 40: "For the algorithm to generate the correct result, the evaluation function must be admissible, meaning that it never overestimates the cost to arrive at the goal node. Guaranteed if h(n) is admissible/consistent."',
    slideReference: 'Ch-02-Part_2 Slide 29, 40',
    hint: 'Admissibility guarantees optimality in tree search.'
  },

  // ==========================================
  // HILL CLIMBING & STATE SPACE DIAGRAMS
  // ==========================================
  {
    id: 'u2_q42',
    unit: 'Unit II',
    topic: 'Hill Climbing',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Hill Climbing belongs to which family of search algorithms?',
    options: [
      'Exhaustive Blind Tree Search',
      'Local Search methods',
      'Constraint Backtracking Search',
      'Bidirectional Graph Traversal'
    ],
    correctAnswer: 'Local Search methods',
    explanation: 'Ch-02-Part_2 Slide 15: "Hill climbing is a heuristic search algorithm that belongs to the family of local search methods. It iteratively moves from the current state to a better neighboring state."',
    slideReference: 'Ch-02-Part_2 Slide 15',
    hint: 'It only keeps track of the current state and looks at its immediate neighbors.'
  },
  {
    id: 'u2_q43',
    unit: 'Unit II',
    topic: 'Hill Climbing',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'hill_climbing_curve',
    question: 'In the State-Space Diagram of Hill Climbing (Ch-02-Part_2 Slide 20-23), what are the X-axis and Y-axis representing, and what is a "Ridge"?',
    options: [
      'X-axis: Time, Y-axis: Memory; A Ridge is an infinite loop',
      'X-axis: State Space, Y-axis: Objective Function; A Ridge is a higher region with a slope resembling a peak that causes the algorithm to stop prematurely',
      'X-axis: Cost, Y-axis: Depth; A Ridge is a global maximum',
      'X-axis: Closed list, Y-axis: Open list; A Ridge is a plateau'
    ],
    correctAnswer: 'X-axis: State Space, Y-axis: Objective Function; A Ridge is a higher region with a slope resembling a peak that causes the algorithm to stop prematurely',
    explanation: 'Ch-02-Part_2 Slide 21 & 23: "X-axis: State space. Y-axis: Objective function. Ridge: A ridge is a higher region with a slope which can look like a peak. This may cause the algorithm to stop prematurely, missing better solutions nearby."',
    slideReference: 'Ch-02-Part_2 Slide 21, 23',
    hint: 'X is the configuration, Y is the fitness/objective score being maximized.'
  },
  {
    id: 'u2_q44',
    unit: 'Unit II',
    topic: 'Hill Climbing',
    type: 'match',
    difficulty: 'Medium',
    question: 'Match the specific topographical region in the Hill Climbing state-space diagram with its defining characteristic:',
    correctAnswer: {
      p1: 'r3',
      p2: 'r1',
      p3: 'r4',
      p4: 'r2'
    },
    matchPairs: [
      { id: 'p1', left: 'Local Maximum', right: 'r3: A state better than all its neighbors but not the best overall' },
      { id: 'p2', left: 'Global Maximum', right: 'r1: The absolute best state where the objective function achieves its highest value' },
      { id: 'p3', left: 'Plateau / Flat Local Max', right: 'r4: A flat region where all neighboring states have the exact same evaluation score' },
      { id: 'p4', left: 'Shoulder', right: 'r2: A plateau with an uphill edge that allows progress if search continues beyond the flat area' }
    ],
    explanation: 'Ch-02-Part_2 Slides 22-23 detail the definitions of Local Maximum, Global Maximum, Plateau, and Shoulder.',
    slideReference: 'Ch-02-Part_2 Slides 22-23',
    hint: 'A shoulder has an uphill escape; a flat plateau is horizontal with equal values.'
  },
  {
    id: 'u2_q45',
    unit: 'Unit II',
    topic: 'Hill Climbing',
    type: 'problem_solving',
    difficulty: 'Hard',
    question: 'In the Block World Hill Climbing example (Ch-02-Part_2 Slide 24-25), the heuristic h(x) is defined as: +1 for every block in the support structure correctly positioned, -1 for every block incorrectly positioned. If the goal stack from bottom to top is [A, B, C, D] (+6), what is the heuristic value of the inverted stack [B, C, D, A] from bottom to top?',
    options: [
      '+6',
      '0',
      '-6',
      '-3'
    ],
    correctAnswer: '-6',
    explanation: 'Ch-02-Part_2 Slide 25: For the inverted initial stack with B at bottom, C on B, D on C, A on top, every single block is in the wrong support structure relative to the goal (A at bottom), resulting in h = -6.',
    slideReference: 'Ch-02-Part_2 Slide 25',
    hint: 'Each incorrectly placed block on the support receives -1 or cumulative penalty down to -6.'
  },

  // ==========================================
  // CONSTRAINT SATISFACTION PROBLEMS (CSP)
  // ==========================================
  {
    id: 'u2_q46',
    unit: 'Unit II',
    topic: 'Constraint Satisfaction Problems',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Unlike standard search problems where the state is treated as a "black box", how is a state represented in a Constraint Satisfaction Problem (CSP)?',
    options: [
      'A continuous differential equation',
      'A set of variables, each taking a value from a specified domain, satisfying a set of constraints',
      'A linked list of unvisited successor pointers',
      'A matrix of neural network activation weights'
    ],
    correctAnswer: 'A set of variables, each taking a value from a specified domain, satisfying a set of constraints',
    explanation: 'Ch-02-Part_2 Slide 41-42: "Unlike standard search problems where the state is a black box, a CSP state is defined by a set of variables X, domains D, and constraints C."',
    slideReference: 'Ch-02-Part_2 Slide 41-42',
    hint: 'Triad: Variables X, Domains D, Constraints C.'
  },
  {
    id: 'u2_q47',
    unit: 'Unit II',
    topic: 'Constraint Satisfaction Problems',
    type: 'problem_solving',
    difficulty: 'Medium',
    diagramSvg: 'csp_map',
    question: 'In the Map Coloring CSP (Ch-02-Part_2 Slide 44-47), regions A, B, and C are mutually adjacent to each other: A is adjacent to B, B is adjacent to C, and A is adjacent to C. If the domain is {Red, Green, Blue}, which assignment satisfies all constraints?',
    options: [
      'A = Red, B = Red, C = Blue',
      'A = Red, B = Green, C = Blue',
      'A = Green, B = Blue, C = Blue',
      'A = Blue, B = Blue, C = Blue'
    ],
    correctAnswer: 'A = Red, B = Green, C = Blue',
    explanation: 'Ch-02-Part_2 Slide 46-47: Constraints are A != B, B != C, A != C. Therefore, all three mutually adjacent regions must have distinct colors: A = Red, B = Green, C = Blue.',
    slideReference: 'Ch-02-Part_2 Slide 46-47',
    hint: 'No two adjacent regions can share the same color.'
  },
  {
    id: 'u2_q48',
    unit: 'Unit II',
    topic: 'Constraint Satisfaction Problems',
    type: 'scenario',
    difficulty: 'Easy',
    question: 'Which of the following real-world applications is explicitly cataloged in the lecture notes as a Constraint Satisfaction Problem with the constraint "Numbers 1 to 9 should not repeat in any row, column, or 3x3 box"?',
    options: [
      'Timetable scheduling',
      'Sudoku puzzle',
      'Conveyor belt part picking',
      'Autonomous vehicle cruise control'
    ],
    correctAnswer: 'Sudoku puzzle',
    explanation: 'Ch-02-Part_2 Slide 48 lists Sudoku with the exact constraint: "Numbers 1 to 9 should not repeat in a row, column, or box."',
    slideReference: 'Ch-02-Part_2 Slide 48',
    hint: 'A classic 9x9 grid Japanese number placement puzzle.'
  },
  {
    id: 'u2_q49',
    unit: 'Unit II',
    topic: 'Constraint Satisfaction Problems',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'What is the distinction between a "Complete Assignment" and a "Consistent Assignment" in solving CSPs?',
    options: [
      'Complete assignment assigns a value to every variable; consistent assignment violates no constraints',
      'Consistent assignment assigns all variables; complete assignment uses no memory',
      'There is no distinction; they mean the exact same thing',
      'Complete assignment only applies to binary constraints'
    ],
    correctAnswer: 'Complete assignment assigns a value to every variable; consistent assignment violates no constraints',
    explanation: 'Ch-02-Part_2 Slide 43: "A CSP is solved when every variable is assigned a value from its domain (complete assignment) in a way that satisfies every constraint (consistent assignment)."',
    slideReference: 'Ch-02-Part_2 Slide 43',
    hint: 'Complete = all variables filled. Consistent = no conflicts/violations.'
  },

  // ==========================================
  // MEANS-ENDS ANALYSIS (MEA)
  // ==========================================
  {
    id: 'u2_q50',
    unit: 'Unit II',
    topic: 'Means-Ends Analysis',
    type: 'mcq',
    difficulty: 'Easy',
    question: 'Who introduced the Means-Ends Analysis (MEA) technique, in which year, and in what computer program?',
    options: [
      'Alan Turing in 1950 in "Computing Machinery and Intelligence"',
      'Allen Newell and Herbert A. Simon in 1961 in the "General Problem Solver" (GPS)',
      'John McCarthy in 1960 in "LISP 1.5"',
      'Claude Shannon in 1956 in "Minimax"'
    ],
    correctAnswer: 'Allen Newell and Herbert A. Simon in 1961 in the "General Problem Solver" (GPS)',
    explanation: 'Ch-02-Part_2 Slide 50 explicitly notes: "The MEA technique was first introduced in 1961 by Allen Newell, and Herbert A. Simon in their problem-solving computer program, which was named as General Problem Solver (GPS)."',
    slideReference: 'Ch-02-Part_2 Slide 50',
    hint: 'GPS program created by Newell and Simon in 1961.'
  },
  {
    id: 'u2_q51',
    unit: 'Unit II',
    topic: 'Means-Ends Analysis',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Means-Ends Analysis is uniquely characterized by which search direction strategy?',
    options: [
      'Strict forward search only',
      'Strict backward chaining only',
      'A mixture of forward and backward search technique that evaluates differences between current state and goal state',
      'Random stochastic hill walking'
    ],
    correctAnswer: 'A mixture of forward and backward search technique that evaluates differences between current state and goal state',
    explanation: 'Ch-02-Part_2 Slide 50: "It is a mixture of Backward and forward search technique... The MEA analysis process centered on the evaluation of the difference between the current state and goal state."',
    slideReference: 'Ch-02-Part_2 Slide 50',
    hint: 'It blends forward and backward directions to reduce detected differences.'
  },
  {
    id: 'u2_q52',
    unit: 'Unit II',
    topic: 'Means-Ends Analysis',
    type: 'mcq',
    difficulty: 'Hard',
    question: 'In the Means-Ends Analysis process, what is "Operator Subgoaling"?',
    options: [
      'Deleting all unneeded nodes from the OPEN list',
      'Setting up sub-problems and sub-goals to satisfy the preconditions of an operator when that operator cannot be immediately applied to the current state',
      'Evaluating the heuristic cost of leaf nodes in A*',
      'Converting an irrecoverable problem into an ignorable problem'
    ],
    correctAnswer: 'Setting up sub-problems and sub-goals to satisfy the preconditions of an operator when that operator cannot be immediately applied to the current state',
    explanation: 'Ch-02-Part_2 Slide 52: "When an operator cannot be applied to the current state, we create the subproblem of the current state... setting up sub goals to establish the preconditions of the operator is called Operator Subgoaling."',
    slideReference: 'Ch-02-Part_2 Slide 52',
    hint: 'If you want to take the bus to college but don\'t have a ticket, buying a ticket becomes a subgoal.'
  },
  {
    id: 'u2_q53',
    unit: 'Unit II',
    topic: 'Means-Ends Analysis',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'mea_shapes',
    question: 'In the geometric transformation problem solved via MEA (Ch-02-Part_2 Slides 69-73), the initial state has a small diamond inside a circle with a black dot outside. The goal state has an enlarged diamond outside the circle with NO dot. What is the exact sequence of 3 operators applied to eliminate the differences?',
    options: [
      'Expand -> Move -> Delete',
      'Delete (removes dot) -> Move (moves diamond outside circle) -> Expand (enlarges diamond to match goal)',
      'Move -> Rotate -> Invert',
      'Delete -> Clone -> Minimize'
    ],
    correctAnswer: 'Delete (removes dot) -> Move (moves diamond outside circle) -> Expand (enlarges diamond to match goal)',
    explanation: 'Ch-02-Part_2 Slides 70-73 systematically trace: 1. Delete operator (removes dot), 2. Move operator (moves square outside circle), 3. Expand operator (enlarges square to goal size).',
    slideReference: 'Ch-02-Part_2 Slides 70-73',
    hint: 'Step 2 deletes dot, Step 3 moves shape outside, Step 4 expands size.'
  },
  {
    id: 'u2_q54',
    unit: 'Unit II',
    topic: 'Means-Ends Analysis',
    type: 'mcq',
    difficulty: 'Hard',
    question: 'In the recursive MEA algorithm (Ch-02-Part_2 Slide 53), the complete solution succeeds only if which two recursive sub-calls succeed?',
    options: [
      'BFS(start) and DFS(goal)',
      'FIRST-PART <- MEA(CURRENT, O-START) and LAST-PART <- MEA(O-Result, GOAL)',
      'PUSH(Stack) and POP(Queue)',
      'EVAL(f) and CHECK(h)'
    ],
    correctAnswer: 'FIRST-PART <- MEA(CURRENT, O-START) and LAST-PART <- MEA(O-Result, GOAL)',
    explanation: 'Ch-02-Part_2 Slide 53 & 67: "If FIRST-PART <- MEA(CURRENT, O-START) and LAST-PART <- MEA(O-Result, GOAL) are successful, then signal Success and return the result combining FIRST-PART, O, and LAST-PART."',
    slideReference: 'Ch-02-Part_2 Slide 53, 67',
    hint: 'Reach the operator\'s start precondition first, then reach the ultimate goal from the result.'
  },

  // ==========================================
  // ADDITIONAL SCENARIO, APPLICATION & PROBLEM-SOLVING
  // ==========================================
  {
    id: 'u1_q55',
    unit: 'Unit I',
    topic: 'Applications of AI',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'Netflix and Amazon utilize machine learning recommendation algorithms to analyze billions of viewing histories and suggest relevant movies and products. According to Ch-01 Slide 31, which application area does this represent?',
    options: [
      'AI in Entertainment and E-commerce',
      'AI in Astronomy and Planetary Physics',
      'Pure Heuristic Space Routing',
      'Single-Agent Theorem Proving'
    ],
    correctAnswer: 'AI in Entertainment and E-commerce',
    explanation: 'Ch-01 Slide 31 & 32 specifically discuss Netflix/Amazon under AI in Entertainment and product discovery under AI in E-commerce.',
    slideReference: 'Ch-01 Slide 31-32',
    hint: 'Streaming recommendations and online retail catalogs.'
  },
  {
    id: 'u1_q56',
    unit: 'Unit I',
    topic: 'PEAS Framework',
    type: 'scenario',
    difficulty: 'Hard',
    diagramSvg: 'agent_peas',
    question: 'Consider a Medical Diagnostic AI agent (Ch-01-Part_2 Slide 37). Which of the following represents its complete PEAS specification?',
    options: [
      'P: Car speed; E: Highway; A: Steering wheel; S: Sonar',
      'P: Healthy patient & minimized cost; E: Patient, hospital, staff; A: Tests & treatments; S: Keyboard (entry of symptoms)',
      'P: Cleanness; E: Wood floor; A: Brushes; S: Dirt detector',
      'P: Win rate; E: Chess board; A: Robotic claw; S: Camera'
    ],
    correctAnswer: 'P: Healthy patient & minimized cost; E: Patient, hospital, staff; A: Tests & treatments; S: Keyboard (entry of symptoms)',
    explanation: 'Ch-01-Part_2 Slide 37: Medical Diagnose: Performance = Healthy patient, Minimized cost; Environment = Patient, Hospital, Staff; Actuators = Tests, Treatments; Sensors = Keyboard (Entry of symptoms).',
    slideReference: 'Ch-01-Part_2 Slide 37',
    hint: 'The doctor/system enters symptoms via keyboard and orders medical tests and treatments.'
  },
  {
    id: 'u1_q57',
    unit: 'Unit I',
    topic: 'Problem Characteristics',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'In the game of Bridge, a player cannot observe opponents\' hidden hand cards, and actions involve chance and unpredictable opponent choices. In contrast, in the 8-Puzzle, every sliding move produces an exact, certain outcome. Which problem characteristic does this contrast?',
    options: [
      'Is the problem decomposable?',
      'Is the problem universe predictable (Certain outcome vs Uncertain outcome)?',
      'Is a good solution absolute or relative?',
      'Can solution steps be ignored?'
    ],
    correctAnswer: 'Is the problem universe predictable (Certain outcome vs Uncertain outcome)?',
    explanation: 'Ch-01-Part_3 Slide 19: "Is the problem universe predictable? In certain outcome problems (8-Puzzle), every move is known. In uncertain outcome problems (Bridge game), cards are hidden and other players\' moves are uncertain."',
    slideReference: 'Ch-01-Part_3 Slide 19',
    hint: 'Certain outcome (8-puzzle) vs uncertain outcome (bridge game).'
  },
  {
    id: 'u2_q58',
    unit: 'Unit II',
    topic: 'State Space Search',
    type: 'problem_solving',
    difficulty: 'Hard',
    question: 'In the 8-puzzle problem (a 3x3 grid with tiles 1 to 8 and one blank space), from a state where the blank space is in the center square (row 2, col 2), what is the exact number of legal successor states reachable in one move?',
    options: [
      '2 legal moves',
      '3 legal moves',
      '4 legal moves (Up, Down, Left, Right)',
      '8 legal moves'
    ],
    correctAnswer: '4 legal moves (Up, Down, Left, Right)',
    explanation: 'Ch-01-Part_3 Slide 27 shows the 8-puzzle state space search: from the center tile, the blank space can swap with tiles in 4 directions: Up, Down, Left, Right.',
    slideReference: 'Ch-01-Part_3 Slide 27',
    hint: 'A tile in the very center of a 3x3 grid has four orthogonal neighbors.'
  },
  {
    id: 'u2_q59',
    unit: 'Unit II',
    topic: 'Search Program Design',
    type: 'mcq',
    difficulty: 'Medium',
    question: 'Which four fundamental criteria are used by AI researchers to evaluate the performance of any search program (Ch-01-Part_3 Slide 35)?',
    options: [
      'Elegance, Code Length, Processor Frequency, Graphics Output',
      'Completeness, Optimality, Time Complexity, and Space Complexity',
      'Precision, Recall, F1-Score, ROC-AUC',
      'Voltage, Resistance, Current, Impedance'
    ],
    correctAnswer: 'Completeness, Optimality, Time Complexity, and Space Complexity',
    explanation: 'Ch-01-Part_3 Slide 35 explicitly specifies: 1. Completeness, 2. Optimality, 3. Time Complexity, 4. Space Complexity.',
    slideReference: 'Ch-01-Part_3 Slide 35',
    hint: 'Does it find a solution? Is it the cheapest? How long does it take? How much RAM does it need?'
  },
  {
    id: 'u2_q60',
    unit: 'Unit II',
    topic: 'Informed Search',
    type: 'true_false',
    difficulty: 'Medium',
    question: 'Pure Heuristic Search expands nodes strictly in order of their heuristic value h(n) and maintains two explicit collections: the OPEN list (nodes yet to be expanded) and the CLOSED list (nodes already expanded).',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Ch-02-Part_2 Slide 6: "Pure heuristic search expands nodes based on their heuristic value h(n). It maintains two lists, OPEN and CLOSED list. In CLOSED, it places nodes already expanded; in OPEN, nodes yet to be expanded."',
    slideReference: 'Ch-02-Part_2 Slide 6',
    hint: 'Review Ch-02-Part_2 Slide 6 description of Pure Heuristic Search.'
  },
  {
    id: 'u2_q61',
    unit: 'Unit II',
    topic: 'Constraint Satisfaction Problems',
    type: 'scenario',
    difficulty: 'Medium',
    question: 'A university examination committee is configuring automated timetable scheduling where: "Two classes cannot use the same room at the same time" and "A student should not have two exams at the same time". Under AI problem models, this is formulated as a:',
    options: [
      'Constraint Satisfaction Problem (CSP)',
      'Uninformed Depth-First Search with no goal test',
      'Simple Reflex Agent with zero memory',
      'Means-Ends Analysis with operator subgoaling only'
    ],
    correctAnswer: 'Constraint Satisfaction Problem (CSP)',
    explanation: 'Ch-02-Part_2 Slide 48 lists Timetable scheduling and Exam scheduling directly as classic real-life examples of CSP.',
    slideReference: 'Ch-02-Part_2 Slide 48',
    hint: 'Rooms, times, and exam slots must satisfy non-overlapping constraints.'
  },
  {
    id: 'u2_q62',
    unit: 'Unit II',
    topic: 'A* Search',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'a_star_graph',
    question: 'Consider finding the shortest route from S to G. Path 1: S -> A -> D -> F -> G with edge costs (4 + 5 + 1 + 13 = 23). Path 2: S -> C -> F -> G with edge costs (11 + 2 + 13 = 26). When A* with an admissible heuristic terminates and pops G from the OPEN list, which path will be returned as the optimal solution?',
    options: [
      'Path 1 (Total cost = 23)',
      'Path 2 (Total cost = 26)',
      'Both paths simultaneously',
      'Neither path, A* will loop indefinitely'
    ],
    correctAnswer: 'Path 1 (Total cost = 23)',
    explanation: 'Ch-02-Part_2 Slide 39 traces this exact tree: S -> A -> D -> F -> G gives total cost g = 23, which is the lowest-cost path found and traced backwards from G to S.',
    slideReference: 'Ch-02-Part_2 Slide 39',
    hint: 'A* guarantees the minimum total cost path when h is admissible: 23 is less than 26.'
  },
  {
    id: 'u1_q63',
    unit: 'Unit I',
    topic: 'Production Systems',
    type: 'scenario',
    difficulty: 'Easy',
    question: 'An expert medical diagnostic system has the rules: "Rule 1: IF temperature is high, THEN person may have fever." "Rule 2: IF fever and cough are present, THEN person may have flu." What type of AI system architecture is this?',
    options: [
      'Production System',
      'Iterative Deepening Search',
      'Convolutional Autoencoder',
      'Uninformed Graph Traversal'
    ],
    correctAnswer: 'Production System',
    explanation: 'Ch-01-Part_3 Slide 33 provides this exact fever and flu diagnosis example to explain how Production Systems apply IF-THEN rules step by step.',
    slideReference: 'Ch-01-Part_3 Slide 33',
    hint: 'A rule-based AI architecture using condition-action IF-THEN statements.'
  },
  {
    id: 'u2_q64',
    unit: 'Unit II',
    topic: 'Uninformed Search',
    type: 'problem_solving',
    difficulty: 'Hard',
    diagramSvg: 'bfs_dfs_tree',
    question: 'In a Breadth-First Search traversal of a tree where Root A has children B, C, D; B has children E, F; C has children G, H; D has child I. When node B is removed from the queue, what nodes are added, and what is the new Queue status?',
    options: [
      'Nodes added: [E, F]; Queue status: [C, D, E, F]',
      'Nodes added: [G, H]; Queue status: [B, C, D]',
      'Nodes added: [I]; Queue status: [E, F, G, H, I]',
      'Nodes added: []; Queue status: empty'
    ],
    correctAnswer: 'Nodes added: [E, F]; Queue status: [C, D, E, F]',
    explanation: 'Ch-02-Part_1 Slide 9 table Step 3: Node Removed: B; Nodes Added: E, F; Queue Status: [C, D, E, F].',
    slideReference: 'Ch-02-Part_1 Slide 9',
    hint: 'In FIFO queue: pop B from front, enqueue its children E and F at the back.'
  },
  {
    id: 'u1_q65',
    unit: 'Unit I',
    topic: 'Agent Types',
    type: 'fill_blank',
    difficulty: 'Medium',
    question: 'In a Learning Agent architecture (Ch-01-Part_2 Slide 21), the _______ takes feedback against a fixed performance standard and tells the learning element how well the agent is doing.',
    options: [
      'Critic',
      'Actuator',
      'Sensor',
      'Heuristic'
    ],
    correctAnswer: 'Critic',
    explanation: 'Ch-01-Part_2 Slide 21: "Critic: Learning element takes feedback from critic which describes that how well the agent is doing with respect to a fixed performance standard."',
    slideReference: 'Ch-01-Part_2 Slide 21',
    hint: 'The critic evaluates performance against the benchmark standard.'
  }
];

export const TOPIC_LIST = [
  'All Topics',
  'Foundations of AI',
  'Turing Test',
  'Intelligent Agents',
  'Rational Agents',
  'Types of AI Agents',
  'Nature of Environments',
  'PEAS Framework',
  'Problem Formulation',
  'Problem Characteristics',
  'Production Systems',
  'Breadth-First Search',
  'Depth-First Search',
  'Iterative Deepening Search',
  'Heuristic Search',
  'Greedy Best-First Search',
  'A* Search',
  'Hill Climbing',
  'Constraint Satisfaction Problems',
  'Means-Ends Analysis'
];
