// Question.js
import React from "react";
import { Link } from "react-router-dom";
import CustomRadioButton from "./CustomRadioButton";
import CustomTabMobile from "./CustomTabMobile";
import BreadcrumbNav from "./BreadcrumbNav";

function Question({ question, questions, activeQuestionId, onTabClick }) {
  if (!question) return null; // Handle case where no question is selected

  const handleQuestionAnswer = () => {};

  return (
    <div>
      <BreadcrumbNav />
      <div className="mobile-tab-box d-md-none">
        <ul className="nav nav-pills flex-row gap-1">
          {questions.map((question) => (
            <li className="nav-item" key={question.id}>
              <CustomTabMobile
                id={question.id}
                isActive={activeQuestionId === question.id}
                onClick={onTabClick}
              />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ maxWidth: "549px" }}>
        <h2 className="my-4 question text-wrap">{question.question}</h2>
      </div>
      <form>
        <div className="form-group" style={{ maxWidth: "549px" }}>
          {
            <CustomRadioButton
              options={question.answerOptions}
              name={question.name}
              onChange={handleQuestionAnswer}
            />
          }
        </div>

        <div className="form-group mt-3" style={{ maxWidth: "549px" }}>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Describe in few words..."
          ></textarea>
          <div className="form-text text-end">
            <small>20 words</small>
          </div>
        </div>
        <button type="submit" className="custom-btn-primary mt-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Question;
