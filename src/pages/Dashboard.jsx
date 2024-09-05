import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import Questionnaire from "./Questionnaire";
import { useAppContext } from "../context/AppProvider";

import questionsService from "../services/questionsService";
import userService from "../services/userService";
import userResponseService from "../services/userResponseService";
import DentalScore from "../components/DentalScore";
import Feedback from "../components/Feedback";

function Dashboard() {
  const {
    questions,
    getQuestions,
    userStatsFromServer,
    setUserStats,
    retry,
    setRetry,
  } = useAppContext();

  useEffect(() => {
    fechQuestions();
    fetchUserResponseDetails();
    getUserStats();
  }, []);

  const fechQuestions = async () => {
    try {
      const res = await questionsService.getAllQuestions();

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
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserStats = async () => {
    try {
      const res = await userResponseService.getUserStats();

      setUserStats(res.data.data);
    } catch (error) {
      console.log(error);
      setUserStats(null);
      toast.error(error.message);
    }
  };

  // When the user clicks retry, set retry to false after rendering the Questionnaire
  const handleFinishRetry = () => {
    setRetry(false); // Reset the retry flag when retry is done
  };

  //render Questionnaire based on pendingQuestions from userStatsFromServer

  return (
    <div>
      {userStatsFromServer?.pendingQuestions !== 0 || retry ? (
        <Questionnaire
          questions={questions}
          onRetryComplete={handleFinishRetry}
        />
      ) : (
        <Feedback />
      )}
    </div>
  );
}

export default Dashboard;
