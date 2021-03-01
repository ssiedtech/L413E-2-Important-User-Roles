export const quiz = {
  quizTitle: 'Check on Learning',
  questions: [
    

    
    {
      question:
        "What role enables user to execute the DDRS file extraction transaction?",
      answers: [
        'Payment Certifier',
        'BI Advanced Expert',
        'Financial Reporter',
        'None of the above',
      ],
      questionType: 'text',
      correctAnswer: '2',
    },
    {
      question:
        'The Payment Certifier role is responsible for certifying transactions created by the Purchase Requisition Processor.',
      questionType: 'text',
      answers: ['True', 'False'],
      correctAnswer: '2',
      answerSelectionType: 'single',
    },

    {
      question:
        'What role is responsible for generating reports to support the correct cash standing of the Army?',
      answers: [
        'Cash Balancing Processor',
        'Cash Balancing Processor & Approver',
        'Cash Balancing Payment Requestor',
        'Cash Balancing Approver',
      ],
      correctAnswer: '4',
      questionType: 'text',
    },

    {
      question:
        "What kind of data is recorded in GFEBS ECC that is reported to BI?",
      answers: [
        'Important Data',
        'Transactional Data',
        'Enterprise Data',
        'Supply Inventory Data',
      ],
      correctAnswer: '2',
      questionType: 'text',
    },
    // {
    //   question:
    //     "What data does GFEBS send to DDRS so that DDRS can produce the Army's financial statements?",
    //   answers: [
    //     'Real-time data',
    //     'Customizable reports',
    //     'Trial Balance',
    //     'All of the above',
    //   ],
    //   correctAnswer: '3',
    //   questionType: 'text',
    // },
  ],
};
