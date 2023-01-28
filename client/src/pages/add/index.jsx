import React from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { SignupSchema } from './Schema';
import {  useNavigate} from "react-router";

const Add = () => {
  const navigate = useNavigate()
  return (
    <div> 
    <Formik
    initialValues={{
      img: '',
      complete: '',
      guide: '',
      imgtwo: '',
      author: '',
      number: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log(values);
    axios.post("http://localhost:8080/education", values )
    navigate("/")
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="img" placeholder="img" />
        {errors.img && touched.img ? (
          <div>{errors.img}</div>
        ) : null}
        <Field name="complete" placeholder="complete" />
        {errors.complete && touched.complete ? (
          <div>{errors.complete}</div>
        ) : null}
        <Field name="guide"  placeholder="guide"/>
        {errors.guide && touched.guide ? <div>{errors.guide}</div> : null}
        <Field name="author"  placeholder="author"/>
        {errors.author && touched.author ? <div>{errors.author}</div> : null}
        <Field name="imgtwo" placeholder="imgtwo" />
        {errors.imgtwo && touched.imgtwo ? (
          <div>{errors.imgtwo}</div>
        ) : null}

        <Field name="number" placeholder="number" />
        {errors.number && touched.number ? (
          <div>{errors.age}</div>
        ) : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik></div>
  )
}

export default Add
