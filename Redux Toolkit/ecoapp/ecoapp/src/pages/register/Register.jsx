import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Register.css";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3,"Username must be at least 3 Characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 Characters")
    .required("Password is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  country: yup.string().required("Country is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === data.email) {
      setEmailError("Email is already registered.");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      console.log("User registered:", data);
      navigate("/login");
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create Your Account</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.username?.message}</p>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.password?.message}</p>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.email?.message}</p>
            {emailError && <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{emailError}</p>}
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.phoneNumber?.message}</p>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Country"
              {...register("country")}
            />
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.country?.message}</p>
          </div>
          <div className="register-agreement">
            <label>
              <input type="checkbox" {...register("terms")} />
              I agree to the <b>Terms</b> and <b>Privacy Policy</b>
            </label>
            <p className="error" style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>{errors.terms && "You must agree to terms"}</p>
          </div>
          <button type="submit">Create Your Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
