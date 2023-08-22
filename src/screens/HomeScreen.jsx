import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormLabel from "../components/common/labels/FormLabel";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const initialValues = {
  employee_email: "",
  employee_password: "",
};
const HomeScreen = () => {
  const [values, setValues] = useState(initialValues);
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const hitAPI = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form onSubmit={handleSubmit((data) => hitAPI(data))}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <FormLabel label={"Email Address"} />
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      {...register("email")}
                      style={{
                        borderColor: errors.email ? "red" : "green",
                      }}
                    />
                    {errors.email && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.email.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <FormLabel label={"Password"} />
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      style={{
                        borderColor: errors.password ? "red" : "green",
                      }}
                    />
                    {errors.password && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.password.message}
                      </span>
                    )}
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <Link to="/user-register">{"Register"}</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
