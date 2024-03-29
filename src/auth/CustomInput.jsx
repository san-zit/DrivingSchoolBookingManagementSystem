import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function CustomInput({label, ...rest}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {/* <Form.Control type={"password"} placeholder={placeholder} /> */}
      <Form.Control {...rest} />
    </Form.Group>
  );
}

export default CustomInput