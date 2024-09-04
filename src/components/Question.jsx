// Question.js
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CustomRadioButton from "./CustomRadioButton";
import CustomTabMobile from "./CustomTabMobile";
import BreadcrumbNav from "./BreadcrumbNav";
import { toast } from "react-toastify";
import userResponseService from "../services/userResponseService";

function Question({ question, questions, activeQuestionId, onTabClick }) {
  if (!question) return null; // Handle case where no question is selected

  const questionFormRef = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedQuestionAnswerObj, setSelectedQuestionAnswerObj] =
    useState(null);

  const handleQuestionAnswer = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    const answerObj = {
      questionId: question._id,
      selectedOption: question.options.find(
        (option) => option.optionValue === e.target.value
      ),
      score: question.options.find(
        (option) => option.optionValue === e.target.value
      ).score,
    };
    setSelectedQuestionAnswerObj(answerObj);
  };
  console.log("active Question Id :", activeQuestionId);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (questionFormRef.current.checkValidity()) {
      // Valid form logic here
      const answerObj = {
        questionId: question._id,
        selectedOption: question.options.find(
          (option) => option.optionValue === selectedOption
        ),
        score: question.options.find(
          (option) => option.optionValue === selectedOption
        ).score,
      };

      // Replace with your API request
      console.log("Answer submitted:", answerObj);

      let data = selectedQuestionAnswerObj
        ? selectedQuestionAnswerObj
        : answerObj;

      const res = await userResponseService.submitResponse(data);
      console.log(res);
      if (res.success) {
        toast.success(res.data.data.message);
        // Move to the next question
        const currentIndex = questions.findIndex(
          (q) => q._id === activeQuestionId
        );
        const nextQuestion = questions[currentIndex + 1];

        if (nextQuestion) {
          onTabClick(nextQuestion._id);
        } else {
          // If there are no more questions, move to the Feedback section
          onTabClick(questions.length + 1);
        }
      } else {
        toast.error(res.error.response.data.message);
      }
    } else {
      toast.error("Please select an option");
      setIsValid(false);
      questionFormRef.current.classList.add("was-validated");
    }
  };

  return (
    <div>
      <BreadcrumbNav />
      <div className="mobile-tab-box d-md-none">
        <ul className="nav nav-pills flex-row gap-1">
          {questions?.map((question) => (
            <li className="nav-item" key={question._id}>
              <CustomTabMobile
                id={question._id}
                isActive={activeQuestionId === question._id}
                onClick={onTabClick}
              />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ maxWidth: "549px" }}>
        <h2 className="my-4 question text-wrap">{question.questionText}</h2>
      </div>
      <form
        onSubmit={handleAnswerSubmit}
        ref={questionFormRef}
        noValidate
        className="needs-validation"
      >
        <div className="form-group" style={{ maxWidth: "549px" }}>
          <CustomRadioButton
            options={question?.options}
            name={question?.questionText}
            onChange={handleQuestionAnswer}
          />
          <div className="invalid-feedback">Please select an option.</div>
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
