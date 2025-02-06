import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), mode: "all",
  });

  const handleLogin = (data) => {
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === data.email) {
        if (storedUser.password === data.password) {
          dispatch(loginSuccess({ email: data.email }));
          navigate("/");
        } else {
          setLoginError("Incorrect password");
        }
      } else {
        setLoginError("Email not found");
      }
    } else {
      setLoginError("No User registered");
    }
  };


  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p className="error" style={{color:'red',fontWeight:'bold', fontSize:'18px'}}>{errors.email?.message}</p>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="error" style={{color:'red',fontWeight:'bold', fontSize:'18px'}}>{errors.password?.message}</p>
            {loginError && <p style={{marginTop:7, color:'red',fontWeight:'bold', fontSize:'18px'}} className="error">{loginError}</p>}

          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;





//1
// import "./Login.css";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "test@test.com" && password === "password") {
//       dispatch(loginSuccess({ email }));
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
      
//       <form onSubmit={handleLogin}>
//       <h1>Login</h1>
//       <div className="input-box">
//         <input 
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         /></div>
//         <div className="input-box">
//         <input 
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login;

//2

// import React from 'react'
// import "./Login.css"

// const Login = () => {
//   return (
//     <>
//     <div className="login-container">
//         <div className="login-wrapper">
//             <form action="">
//                 <h1>Login</h1>
//                 <div className="input-box">
//                     <input type="text" placeholder='Username' />
//                     </div>
//                     <div className="input-box">
//                     <input type="password" placeholder='Password' />
//                     </div>
//                     <div className="remember-forgot">
//                         <label>
//                         <input type="checkbox" />Remeber Me
//                         </label>
//                         <a href="/#">Forget Password</a>

//                     </div>
//                     <button type='submit'>Login</button>
//                     <div className="register-link">
//                         <p>Don't have an account? <a href='./register'>Register</a></p>
//                     </div>
//             </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Login