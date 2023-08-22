import React from "react";
import Form from "react-bootstrap/Form";

const DefaultInputBox = (props) => {
    console.log("props",props)
  return (
    <div>
      <Form.Control
        name={props?.name}
        type={props.type}
        placeholder={props.label}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
const DefaultTextArea = (props) => {
    console.log("props",props)
  return (
    <div>
      <Form.Control
        rows={props.rows ? props.rows : ""}
        as={props.as ? props.as : ""}
        placeholder={props.label}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export {DefaultInputBox,DefaultTextArea};

