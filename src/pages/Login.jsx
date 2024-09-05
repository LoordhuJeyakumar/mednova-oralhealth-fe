import { toast } from "react-toastify";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const { setUserDataOnLogin } = useAppContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your valid email address"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Please enter your password"),
  });

  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await userService.login({
        email: values.email,
        password: values.password,
      });

      if (res.success) {
        toast.success(res.data.data.message);
        setSuccessMessage(res.data.data.message);
        setErrorMessage(null);
        setUserDataOnLogin(res.data.data.user);
        resetForm();
        setSubmitting(false);
        navigate("/redirect");
      } else {
        toast.error(res.error.response.data.message);
        setSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center" style={{ color: "#0D3545" }}>
            Login
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: "#2B8C72", borderColor: "#2B8C72" }}
                >
                  Login &nbsp;
                  <i className="bi bi-box-arrow-in-right"></i>
                  {/* Loading */}
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm ms-2"></span>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
