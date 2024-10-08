import React, { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "./CustomButton";
import { useAppContext } from "../context/AppProvider";
import userResponseService from "../services/userResponseService";
import { toast } from "react-toastify";

function DentalScore() {
  const { userStatsFromServer, setUserStats, user, retry, setRetry } =
    useAppContext();

  useEffect(() => {
    getUserStats();
  }, []);

  const handleRetry = () => {
    setRetry(true);
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

  return (
    <div className="card score-card p-3 m-4">
      <div className="p-2 m-2">
        <h1 className="text-center">Hello {user?.fullName}</h1>
        <h4 className="heading-2">Here is your Dental Score</h4>
      </div>
      <div className="circular-progress mx-auto my-3    ">
        <div style={{ width: 220, height: 220 }}>
          <CircularProgressbar
            value={userStatsFromServer?.totalScore || 0}
            text={`${userStatsFromServer?.totalScore || 0}%`}
            strokeWidth={9}
            styles={buildStyles({
              pathColor: "#0D3545",
              textColor: "#000",
              trailColor: "#2B8C72",
              backgroundColor: "#f8f8f8",
              textSize: "24px",
            })}
          />
        </div>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap gap-3 m-3">
        <span className="badge score-badge">Bad</span>
        <span className="badge score-badge active">Good</span>
        <span className="badge score-badge">Worst</span>
        <span className="badge score-badge">Better</span>
      </div>
      <div className="mt-3 d-flex justify-content-center flex-column">
        <span className="text-center">
          Opt in to receive monthly tips and insights tailored to your oral
          health.
        </span>
        <div className="d-flex justify-content-center gap-3 m-4 pb-5">
          <CustomButton
            variant="primary"
            size="btn-small"
            customClass={"px-5 py-2"}
          >
            Yes
          </CustomButton>
          <CustomButton
            variant="outline"
            size="btn-small"
            customClass={"px-5 py-2"}
          >
            No
          </CustomButton>
        </div>
        {!retry && (
          <div className="d-flex justify-content-end">
            <CustomButton
              variant="outline"
              size="btn-small"
              customClass={"px-5"}
              onClick={handleRetry}
            >
              Retry
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default DentalScore;
