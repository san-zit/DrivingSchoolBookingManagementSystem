import React from 'react'

function LernersEntry() {


  const inputs = [
    {
      label: "First Name *",
      placeholder: "Enter First Name",
      name: "fName",
      required: true,
      type: "text",
    },
    {
      label: "Last Name *",
      placeholder: "Enter Last Name",
      name: "lName",
      required: true,
      type: "text",
    },
    {
      label: "Address",
      placeholder: "22 Gungurra Crs, Rivett 2611,ACT",
      name: "address",
      type: "text",
    },
    {
      label: "Phone",
      placeholder: "041234567",
      name: "phone",
      type: "number",
    },
    {
      label: "Email *",
      placeholder: "abc@abc.com",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "Date of Birth *",
      placeholder: "dd/mm/yyyy",
      name: "dob",
      required: true,
      type: "date",
    },
    {
      label: "License No *",
      placeholder: "123456789",
      name: "licenseNo",
      required: true,
      type: "number",
    },
    {
      label: "Expiry date *",
      placeholder: "dd/mm/yyyy",
      name: "expirydate",
      required: true,
      type: "date",
    },
    {
      label: "Eligibility *",
      placeholder: "now/later",
      name: "eligibility",
      required: true,
      type: "text",
    },
    {
      label: "Transmission *",
      placeholder: "manual/auto",
      name: "transmission",
      required: true,
      type: "text",
    },
    {
      label: "School/Work *",
      placeholder: "manual/auto",
      name: "work",
      required: true,
      type: "text",
    },
  ];


  return (
    <>
      <div className="">
        <Form
          onSubmit={handleOnSubmit}
          className="login-form mt-3 mb-3 p-2 border rounded shadow-lg"
        >
          <h2>Lerner's Registration</h2>
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
            Submit
          </Button>

          <div>
            Already have an account? <Link to="/login">Click here</Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LernersEntry