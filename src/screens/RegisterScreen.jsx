import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../components/common/loader/Loader";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterOne from "../components/common/footer/FooterOne";
import HeaderOne from "../components/common/header/HeaderOne";
import NavList from "../components/common/header/NavList";
import differenceInYears from "date-fns/differenceInYears";
import { validateFields } from "../functions/Index";

const RegisterScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const dateToday = new Date();
  const supported_formats = ['image/jpg', 'image/jpeg', 'image/png'];
  const schema = Yup.object().shape({
    employee_name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    employee_email: Yup.string()
      .required("Email is required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
    employee_mobile: Yup.string()
      .required("Mobile is required")
      .matches(/^(0|91)?[6-9][0-9]{9}$/, "Invalid mobile number"),
    gender: Yup.string().required("Please select a gender"),
    department_id: Yup.string().min(1, "please select department"),
    designation_id: Yup.string().min(1, "please select designation"),
    title: Yup.string().min(1, "please select title"),
    date_of_birth: Yup.date()
      .required("Date of Birth is required")
      .max(dateToday, "Future date not allowed")
      .test("date_of_birth", "Should be greater than 18 yeasrs", (value) => {
        return differenceInYears(new Date(), new Date(value)) >= 18;
      })
      .test("date_of_birth", "Should be less than 48 yeasrs", function (value) {
        return differenceInYears(new Date(), new Date(value)) <= 48;
      }),
    father_name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    mother_name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    qualification: Yup.string().min(1, "please select designation"),
    experience: Yup.string()
      .required("Experience field is required")
      .min(1, "must be at least 3 characters"),
    primary_address: Yup.string().required("Address field is required"),
    state_id: Yup.string().min(1, "please select state"),
    city_id: Yup.string().min(1, "please select city"),
    pincode: Yup.string()
      .required("PIN code is required")
      .min(6, "Pin code must be at least 6 characters"),
    office_mail: Yup.string()
      .required("Office Email is required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
    image: Yup.mixed()
      // .nullable()
      .required("Image is required")
      .test(
        "fileSize",
        "Only documents up to 2MB are permitted.",
        files =>
          !files || // Check if `files` is defined
          files.length === 0 || // Check if `files` is not an empty list
          Array.from(files).every(file => file.size <= 2_000_000)
      )
      .test("imageFormat", "Invalid image format", (value) => {
        console.log("image", value[0]);
        if (value[0] == undefined) {
          console.log("return")
          return false;
        } else {
          // Define your image format conditions here
          const supportedFormats = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/jpg",
          ];
          return supportedFormats.includes(value[0].type);
        }
      })
      ,
      // .test("fileSize", "File size exceeds maximum limit", (value) => {
      //   console.log("Value", value[0]);
      //   if (!value) {
      //     console.log("Value2", value);
      //     return false;
      //   } else {
      //     const maxSizeInBytes = 3 * 1024 * 1024; // 3MB
      //     return value[0].size <= maxSizeInBytes;
      //   }
      // }),
    termsAccepted: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const  onNameChange = ()=>{
    
  }

  const hitAPI = (data) => {
    // console.log("Selected image", data.image[0]);
    console.log(data);
    // if (data.image[0] instanceof File) {
    //   console.log("Valid image file, proceeding...");
    // } else {
    //   console.log("Not a valid image data");
    // }
    // const formData = new FormData();

    // Object.keys(data).forEach((key) => {
    //   console.log("+++", data[key]);
    //   if (key === "image") {
    //     formData.append(key, data[key][0]);
    //     console.log(data[key][0]);
    //   } else {
    //     formData.append(key, data[key]);
    //   }
    // });
    // console.log("formData", formData);
    // axios
    //   .post(`https://fpcmis.demoquaeretech.in/api/test`, formData)
    //   .then((res) => {
    //     console.log(res.data.receivedData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Employee Registration</Card.Title>
                <Form onSubmit={handleSubmit((data) => hitAPI(data))}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <FormLabel label={"Employee Name"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee name"
                      {...register("employee_name")}
                      // value={validateFields(register,'name')}
                      style={{
                        borderColor: errors.employee_name ? "red" : "green",
                      }}
                    />
                    {errors.employee_name && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.employee_name.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <FormLabel label={"Employee Email"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee email"
                      {...register("employee_email")}
                      style={{
                        borderColor: errors.employee_email ? "red" : "green",
                      }}
                    />
                    {errors.employee_email && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.employee_email.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <FormLabel label={"Employee Mobile"} />
                    <Form.Control
                      type="number"
                      placeholder="Enter employee mobile"
                      {...register("employee_mobile")}
                      style={{
                        borderColor: errors.employee_mobile ? "red" : "green",
                      }}
                    />
                    {errors.employee_mobile && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.employee_mobile.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <FormLabel label={"Employee Department"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.department_id ? "red" : "green",
                      }}
                      // onClick={(e) => e.preventDefault()}
                      {...register("department_id", { required: true })}
                      // onChange={(e) => setValue('department_id', e.target.value, { shouldValidate: true })}
                    >
                      <option value="">--select department--</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    {errors.department_id && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.department_id.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <FormLabel label={"Employee Designation"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.designation_id ? "red" : "green",
                      }}
                      {...register("designation_id", { required: true })}
                    >
                      <option value="">--select designation--</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    {errors.designation_id && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.designation_id.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput6"
                  >
                    <FormLabel label={"Title"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.title ? "red" : "green",
                      }}
                      {...register("title", { required: true })}
                    >
                      <option value="">--select title--</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    {errors.title && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.title.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput7"
                  >
                    <FormLabel label={"Employee Mobile"} />
                    <Form.Control
                      type="date"
                      //  min="2000-01-01"//from accept date from 2000
                      // max="2018-12-31"//to accept date till 2018
                      placeholder="Enter employee date of birth"
                      {...register("date_of_birth")}
                      style={{
                        borderColor: errors.date_of_birth ? "red" : "green",
                      }}
                    />
                    {errors.date_of_birth && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.date_of_birth.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput8"
                  >
                    <FormLabel label={"Female"} />
                    <Form.Check
                      type="radio"
                      value="female"
                      label="Female"
                      {...register("gender")}
                      style={{
                        borderColor: errors.gender ? "red" : "green",
                      }}
                    />
                    <FormLabel label={"Male"} />{" "}
                    <Form.Check
                      type="radio"
                      value="male"
                      label="Male"
                      {...register("gender")}
                      style={{
                        borderColor: errors.gender ? "red" : "green",
                      }}
                    />
                    <FormLabel label={"Other"} />{" "}
                    <Form.Check
                      type="radio"
                      value="other"
                      label="Other"
                      {...register("gender")}
                      style={{
                        borderColor: errors.gender ? "red" : "green",
                      }}
                    />
                    {errors.gender && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.gender.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput9"
                  >
                    <FormLabel label={"Employee Father's Name"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee father's name"
                      {...register("father_name")}
                      style={{
                        borderColor: errors.father_name ? "red" : "green",
                      }}
                    />
                    {errors.father_name && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.father_name.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput10"
                  >
                    <FormLabel label={"Employee Mother's Name"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee mother's name"
                      {...register("mother_name")}
                      style={{
                        borderColor: errors.mother_name ? "red" : "green",
                      }}
                    />
                    {errors.mother_name && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.mother_name.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput11"
                  >
                    <FormLabel label={"Qualification"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.title ? "red" : "green",
                      }}
                      {...register("qualification", { required: true })}
                    >
                      <option value="">--Select qualification--</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="MBA">MBA</option>
                    </Form.Select>
                    {errors.qualification && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.qualification.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput12"
                  >
                    <FormLabel label={"Employee Experience"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee experience"
                      {...register("experience")}
                      style={{
                        borderColor: errors.experience ? "red" : "green",
                      }}
                    />
                    {errors.experience && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.experience.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput13"
                  >
                    <FormLabel label={"Employee Address"} />
                    <Form.Control
                      {...register("primary_address")}
                      placeholder="Enter employee experience"
                      as="textarea"
                      aria-label="With textarea"
                      style={{
                        borderColor: errors.primary_address ? "red" : "green",
                      }}
                    />
                    {errors.primary_address && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.primary_address.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput14"
                  >
                    <FormLabel label={"Employee State"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.state_id ? "red" : "green",
                      }}
                      {...register("state_id", { required: true })}
                    >
                      <option value="">--select state--</option>
                      <option value="1">UP</option>
                      <option value="2">MP</option>
                      <option value="3">HP</option>
                    </Form.Select>
                    {errors.state_id && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.state_id.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput15"
                  >
                    <FormLabel label={"Employee City"} />
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        borderColor: errors.city_id ? "red" : "green",
                      }}
                      {...register("city_id", { required: true })}
                    >
                      <option value="">--select city--</option>
                      <option value="1">Lucknow</option>
                      <option value="2">Kanpur</option>
                      <option value="3">Varanasi</option>
                    </Form.Select>
                    {errors.city_id && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.city_id.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <FormLabel label={"Employee Name"} />
                    <Form.Control
                      type="text"
                      placeholder="Pin Code"
                      {...register("pincode")}
                      style={{
                        borderColor: errors.pincode ? "red" : "green",
                      }}
                    />
                    {errors.pincode && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.pincode.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <FormLabel label={"Employee Office Email"} />
                    <Form.Control
                      type="text"
                      placeholder="Enter employee office email"
                      {...register("office_mail")}
                      style={{
                        borderColor: errors.office_mail ? "red" : "green",
                      }}
                    />
                    {errors.office_mail && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.office_mail.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput"
                  >
                    <FormLabel label={"Employee Profile Picture"} />
                    <Form.Control
                      type="file"
                      accept="image/jpeg,image/png,image/gif"
                      {...register("image")}
                      onChange={(e) => {
                        const selectedImage = e.target.files[0];
                        if (selectedImage) {
                          const imageUrl = URL.createObjectURL(selectedImage);
                          setImagePreview(imageUrl);
                        } else {
                          setImagePreview(null);
                        }
                      }}
                      style={{
                        borderColor: errors.image ? "red" : "green",
                      }}
                    />
                    {errors.image && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.image.message}
                      </span>
                    )}
                  </Form.Group>
                  {/* {imagePreview && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={imagePreview}
                        alt="Selected Preview"
                        style={{
                          maxWidth: "50%",
                          height: "auto",
                          marginRight: "10px",
                        }}
                      />
                      <button
                        type="button"
                        // {...register("image")}
                        onClick={() => {
                          setImagePreview(null);
                          // Clear the file input value as well

                          document.querySelector('input[type="file"]').value =
                            "";
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )} */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput8"
                  >
                    <FormLabel label={"Accept Terms & Condition"} />
                    <Form.Check
                      type="checkbox"
                      label="Accept Terms & Condition"
                      {...register("termsAccepted")}
                      style={{
                        borderColor: errors.termsAccepted ? "red" : "green",
                      }}
                    />
                    {errors.termsAccepted && (
                      <span style={{ color: "crimson", fontSize: "12px" }}>
                        {errors.termsAccepted.message}
                      </span>
                    )}
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <Link to="/">login</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterOne />
    </>
  );
};

export default RegisterScreen;
