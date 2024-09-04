// Questionnaire.js
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Question from "../components/Question";
import Feedback from "../components/Feedback";

function Questionnaire() {
  const questions = [
    {
      id: 1,
      name: "Question 1",
      question: "How many times per day do you brush your teeth?",
      answerOptions: [
        { answerText: "Once", value: "A" },
        { answerText: "Twice", value: "B" },
        { answerText: "Three or more times", value: "C" },
        { answerText: "I don’t brush daily", value: "D" },
      ],
    },
    {
      id: 2,
      name: "Question 2",
      question:
        "How often do you floss or use other interdental cleaning tools?",
      answerOptions: [
        { answerText: "Daily", value: "A" },
        { answerText: "3-5 times a week", value: "B" },
        { answerText: "1-2 times a week", value: "C" },
        { answerText: "Rarely or never", value: "D" },
      ],
    },
    {
      id: 3,
      name: "Question 3",
      question:
        "How often do you visit the dentist for a routine check-up and cleaning?",
      answerOptions: [
        { answerText: "Every 6 months", value: "A" },
        { answerText: "Once a year", value: "B" },
        { answerText: "Every 2 years", value: "C" },
        { answerText: "I can’t remember my last visit", value: "D" },
      ],
    },
    {
      id: 4,
      name: "Question 4",
      question:
        "Do you currently have any ongoing dental conditions or treatments?",
      answerOptions: [
        { answerText: "Yes, I have cavities", value: "A" },
        {
          answerText: "Yes, I wear braces or have other orthodontic devices",
          value: "B",
        },
        { answerText: "Yes, I have crowns or fillings", value: "C" },
        {
          answerText: "No, I don’t have any ongoing dental conditions",
          value: "D",
        },
      ],
    },
    {
      id: 5,
      name: "Question 5",
      question:
        "In the past three months, have you experienced any oral health issues?",
      answerOptions: [
        { answerText: "Tooth pain", value: "A" },
        { answerText: "Bleeding gums", value: "B" },
        { answerText: "Sensitivity to hot or cold", value: "C" },
        { answerText: "Other", value: "D" },
      ],
    },

    // Add more questions here...
  ];

  const [activeQuestionId, setActiveQuestionId] = useState(questions[0].id);

  const handleTabClick = (id) => {
    setActiveQuestionId(id);
  };

  const activeQuestion = questions.find((q) => q.id === activeQuestionId);
  console.log(activeQuestion);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 border-end  d-none d-md-flex">
          <SideBar
            questions={questions}
            activeQuestionId={activeQuestionId}
            onTabClick={handleTabClick}
          />
        </div>
        <div className="col-md-9">
          <Question
            question={activeQuestion}
            questions={questions}
            activeQuestionId={activeQuestionId}
            onTabClick={handleTabClick}
          />
          {!activeQuestion && <Feedback />}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
