import { toast } from "react-toastify";
import React, { useEffect } from "react";
import Questionnaire from "./Questionnaire";
import { useAppContext } from "../context/AppProvider";

import questionsService from "../services/questionsService";
import userService from "../services/userService";

function Dashboard() {
  const { questions, getQuestions, user } = useAppContext();

  useEffect(() => {
    fechQuestions();
    fetchUserResponseDetails();
  }, []);

  const fechQuestions = async () => {
    try {
      const res = await questionsService.getAllQuestions();
      console.log(res);

      if (res.success) {
        getQuestions(res.data.data.questions);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchUserResponseDetails = async () => {
    try {
      const res = await userService.getUser();
      console.log(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {questions ? (
        <Questionnaire questions={questions} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Dashboard;
