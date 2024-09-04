import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function VerifyEmailPage() {
  const navigate = useNavigate();

  //Error and success message
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const params = useParams();
  const { id, token } = params;

  useEffect(() => {
    //verifyEmailToken();
  }, [params]);

  async function verifyEmailToken() {
    if (!token && !id) {
      toast.error("Invalid verification link");
      setErrorMessage("Invalid verification link");
      return;
    }

    try {
      const res = await verifyEmail(id, token);
      if (res.success) {
        toast.success(res.data.data.message);
        setErrorMessage("");
        setSuccessMessage(
          "Email verified successfully. Redirecting to login page..."
        );
        setTimeout(() => navigate("/login"), 3000); // Redirect after a short delay
      } else {
        setSuccessMessage("");
        setErrorMessage(res.error.response.data.error);
        toast.error(res.error.response.data.error);
      }
    } catch (error) {
      setErrorMessage("Failed to verify email");
      console.error("Verification error:", error);
      toast.error("Failed to verify email");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div
        className="card text-center shadow p-4 d-flex justify-content-center"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="mb-4 text-primary">Verifying Your Email</h3>
        <p className="text-muted">
          Please wait while we verify your email. This may take a few moments.
        </p>
        <div>
          <div className="spinner-border text-primary mb-3 fs-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="text-secondary">
          If your email is verified successfully, you will be redirected to the
          login page.
        </p>
        <div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {successMessage && (
            <p className="text-success">
              {successMessage}
              <br />
              If you are not redirected, please click <a href="/login">here</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
