import React from "react";
import CustomTab from "./CustomTab";

function SideBar({ questions, activeQuestionId, onTabClick }) {
  // Calculate the progress percentage based on the active question
  const progressPercentage =
    ((questions.findIndex((q) => q._id === activeQuestionId) + 1) /
      questions.length) *
    100;

  console.log(activeQuestionId);

  return (
    <div className="p-3 sidebar " style={{ minHeight: "100vh" }}>
      <h1 className="mb-1 heading">Questionnaire</h1>
      <small className="mb-4 me-2 text-wrap ">
        This questionnaire evaluates your oral health habits and recent dental
        experiences. Your responses will generate a personalized oral health
        score and tailored recommendations.
      </small>
      <div className="row mt-5 ">
        {/* Vertical tab */}
        <div className="col-10">
          <ul className="nav nav-pills flex-column gap-3">
            {questions.map((question, index) => (
              <li className="nav-item" key={question._id}>
                <CustomTab
                  id={question._id}
                  text={index + 1}
                  name={`Question ${index + 1}`}
                  isActive={activeQuestionId === question._id}
                  onClick={onTabClick}
                />
              </li>
            ))}
            <li className="nav-item">
              <CustomTab
                id={questions.length + 1}
                name={"Feedback"}
                isActive={activeQuestionId === questions.length + 1}
                onClick={onTabClick}
              />
            </li>
          </ul>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div className="progress-box w-100 h-100">
            {/* Vertical Progress bar */}
            <div className="progress vertical-progress h-100 ">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  height: `${
                    progressPercentage ||
                    (activeQuestionId === questions.length + 1 && 100)
                  }%`,
                }}
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
