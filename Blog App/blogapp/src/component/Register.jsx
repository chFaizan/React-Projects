import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const registerSchema = yup.object().shape({
  fullName: yup.string().min(3, "Full Name must be at least 3 characters").required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    const newUser = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(user => user.email === newUser.email);
    if (userExists) {
      setEmailError("Email already exists. Please use Another Email.");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" {...register("fullName")} className="input-field" />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" {...register("email")} className="input-field" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" {...register("password")} className="input-field" />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" {...register("confirmPassword")} className="input-field" />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" {...register("phone")} className="input-field" />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
