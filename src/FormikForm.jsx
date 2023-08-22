import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Card,
  Col,
  Container,
  FormLabel,
  Row,
  Form
} from "react-bootstrap";
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikForm = () => {
  const validationSchema = yup.object().shape({
    employee_name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    // .matches(/^\d+$/, 'Only numbers are allowed')
    // .required('This field is required'),
    employee_email: yup.string()
      .required("Email is required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
  });

  const formik = useFormik({
    initialValues: {
      employee_name: "",
      employee_email: ""
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
    validateOnChange: false,
  });

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{"Formic Test"}</Card.Title>
              
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FormLabel>{"Employee Name"}</FormLabel>
                  <Form.Control
                    type="text"
                    name="employee_name"
                    value={formik.values.employee_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Name"
                    style={{
                      borderColor: formik.errors.employee_name ? "red" : "blue",
                    }}
                  />
                  {formik.touched.employee_name &&
                  formik.errors.employee_name ? (
                  null
                  ) :  <div style={{ color: "red" }}>
                  {formik.errors.employee_name}
                </div>}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FormLabel>{"Employee Email"}</FormLabel>
                  <Form.Control
                    type="text"
                    name="employee_email"
                    value={formik.values.employee_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter email"
                    style={{
                      borderColor: formik.errors.employee_email ? "red" : "blue",
                    }}
                  />
                  {formik.touched.employee_email &&
                  formik.errors.employee_email ? (
                   null
                  ) :   <div style={{ color: "red" }}>
                  {formik.errors.employee_email}
                </div>}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormikForm;
