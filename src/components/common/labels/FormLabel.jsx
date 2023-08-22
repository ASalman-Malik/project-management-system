import React from 'react'
import Form from 'react-bootstrap/Form';

const FormLabel = (props) => {
  return (
    <div>
         <Form.Label>{props.label}</Form.Label>
    </div>
  )
}

export default FormLabel