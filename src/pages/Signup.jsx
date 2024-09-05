import { useState } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userService from "../services/userService";
import { toast } from "react-toastify";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your valid email address "),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handeSignup = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await userService.signup({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });
      if (res.success) {
        setSuccessMessage(res.data.data.message);
        setErrorMessage(null);
        toast.success(res.data.data.message);
        resetForm();
        setSubmitting(false);
      } else {
       
        setErrorMessage(res.error.response.data.message);
        toast.error(res.error.response.data.message);
        setSubmitting(false);
        setSuccessMessage(null);
        resetForm();
        return;
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setSuccessMessage(null);
      resetForm();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center" style={{ color: "#0D3545" }}>
            Signup
          </h2>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handeSignup}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <Field name="fullName" type="text" className="form-control" />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-danger"
                  />
                </div>
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
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {/* message */}
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: "#2B8C72", borderColor: "#2B8C72" }}
                >
                  Signup &nbsp;
                  <i className="bi bi-arrow-right"></i>
                  {/* Loading */} &nbsp;
                  {isSubmitting && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
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

export default Signup;
