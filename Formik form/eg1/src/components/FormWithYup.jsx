import React from 'react'
import { Form, Button } from 'react-bootstrap'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
const initialValues={
  name:"",
  email:"",
  password:"",
  cnassword:"",
  
};
const onSubmit=(values)=>{
  console.log("Form Data",values)

};

const validationSchema = Yup.object({
  name:Yup.string().min(2).max(20).required("required"),
  email: Yup.string().email("Invalid Email Address").required("required"),
  password: Yup.string().min(5, "Password must be at least 5 characters").required("required"),
  cnassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Must be Match").required("required"),
})


const FormComponent = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Form Values", formik.values);
 
 
  return (
    <div className='all-con'>
      <h1>Registration Form</h1>
     <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control style={{width:400}} onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} name="name" type="name" placeholder="Enter Name" />
        {formik.errors.name && formik.touched.name ? <div style={{fontSize:12, marginTop:5}} className="text-danger">{formik.errors.name}</div>: null}        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{width:400}} onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        {formik.errors.email && formik.touched.email ? <div style={{fontSize:12, marginTop:5}} className="text-danger">{formik.errors.email}</div>: null}  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control style={{width:400}} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" placeholder="Enter Password" />
        {formik.errors.password && formik.touched.password ? <div style={{fontSize:12, marginTop:5}} className="text-danger">{formik.errors.password}</div>: null}  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control style={{width:400}} name="cnassword" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.cnassword} placeholder="Confirm Password" />
        {formik.errors.cnassword && formik.touched.cnassword ? <div style={{fontSize:12, marginTop:5}} className="text-danger">{formik.errors.cnassword}</div>: null}  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default FormComponent

