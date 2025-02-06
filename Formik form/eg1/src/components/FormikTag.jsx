import React from "react";
import { Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  comment: "",
  address:"",
  social:{
    facebook:"",
    twitter:"",
  },
  phoneNumber : ["",""],
  phNumber: [''],
};


const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().min(4).max(20).required("Name is required"),
  email: Yup.string().email("Invalid Email Address").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
  comment: Yup.string().required("Comment is required"),
});

const FormComponent = () => {
  return (
    <div className="all-con">
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        
      >
        {() => (
          <FormikForm>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Field
                style={{width:400}}
                className="form-control"
                name="name"
                type="text"
                placeholder="Enter Name"
              />
              <ErrorMessage name="name">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Field
                style={{width:400}}
                className="form-control"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Field
                className="form-control"
                style={{width:400}}
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              <ErrorMessage name="password">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Field
                className="form-control"
                style={{width:400}}
                as="textarea"
                name="comment"
                placeholder="Enter Comments"
              />
              <ErrorMessage name="comment">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Field name="address" >
                {
                  (props)=>{
                    const { field, form, meta} = props;
                    console.log("Render Props", props);
                    return(
                      <div>
                        <input 
                        
                        className="form-control"
                        style={{width:400}}
                        type="text"
                        id="address"
                        {... field}
                        placeholder="Enter Address"
                         />
                         {meta.touched && meta.error ?(
                          <div>{meta.error}</div>
                         ): null}
                      </div>
                    );
                  }
                }
               
                </Field>
              <ErrorMessage name="address">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Primary Number</Form.Label>
              <Field
                style={{width:400}}
                className="form-control"
                name="phoneNumber[0]"
                type="phoneNumber"
                placeholder="Enter Number"
              />
               </Form.Group>
               <Form.Group className="mb-3">
              <Form.Label>Enter Secondary Number</Form.Label>
              <Field
                style={{width:400}}
                className="form-control"
                name="phoneNumber[1]"
                type="phoneNumber"
                placeholder="Enter Second Number"
              />
               </Form.Group>
               <Form.Group className="mb-3">
  <Form.Label>List of Phone Numbers</Form.Label>
  <FieldArray name="phNumber">
    {({ push, remove, form }) => {
      const { values } = form;
      const { phNumber } = values;
      return (
        <div>
          {phNumber.map((_, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <Field
                className="form-control"
                style={{ width: 300, marginRight: 10 }}
                name={`phNumber[${index}]`}
                placeholder="Enter Phone Number"
              />
              {index > 0 && (
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => remove(index)}
                  style={{ marginRight: 10 }}
                >
                  -
                </Button>
              )}
              {index === phNumber.length - 1 && (
                <Button
                  variant="success"
                  type="button"
                  onClick={() => {
                    if (phNumber[index] && phNumber[index].trim() !== "") {
                      push("");
                    } else {
                      alert("Please fill in the current field before adding another.");
                    }
                  }}
                >
                  +
                </Button>
              )}
            </div>
          ))}
        </div>
      );
    }}
  </FieldArray>
 
</Form.Group>


            <Form.Group className="mb-3">
            <Form.Label>Facebook Profile</Form.Label>
              <Field
                style={{ width: 400 }}
                className="form-control"
                name="social.facebook"
                type="text"
                placeholder="Facebook"
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Twitter Profile</Form.Label>
              <Field
                style={{ width: 400 }}
                className="form-control"
                name="social.twitter"
                type="text"
                placeholder="Twitter"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
 