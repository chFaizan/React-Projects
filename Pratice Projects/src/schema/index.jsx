import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    confirm_password: Yup.string().min(6).required().oneOf([Yup.ref('password'), null], "Password Must be Match"),
    

});