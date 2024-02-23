import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../redux/auth/userAction";
import CustomInput from "./CustomInput";

function Login() {
  const inputs = [
    {
      label: "Email *",
      placeholder: "abc@abc.com",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "Password",
      placeholder: "******",
      name: "password",
      required: true,
      type: "password",
      minLength: 6,
    },
    
  ];

  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login(email, password));
  };

  return (
    <>
      
      <div className="main">
        <Form
          onSubmit={handleOnSubmit}
          className="login-form mt-3 mb-3 p-2 border rounded shadow-lg"
        >
          <h2>Login</h2>
          {inputs.map((input) => {
            return (
              <CustomInput
                key={input.label}
                {...input}
                onChange={handleOnChange}
              />
            );
          })}
          <Button variant="primary" type="submit">
            Login
          </Button>
          {/* <div>
            Forget your password? <Link to="/forget-password">Click here</Link>
          </div>
          <div>
            Signup? <Link to="/signup">Click here</Link>
          </div> */}
        </Form>
      </div>
      
    </>
  );
}

export default Login;
