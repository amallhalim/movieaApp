import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//   return <div>Register</div>;
// }

export default function Register() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  // const [registerForm, setregisterForm] = useState({
  //   name: "",
  //   Password: "",
  //   email: "",
  // });

  const handelechange = e => {
    // console.log(e.target.value);
    // setregisterForm(e.target.value);

    if (e.target.id === "name") {
      setName(e.target.value);
      setNameErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 3
          ? "Min. Length is 3 characters"
          : null
      );
    }

    if (e.target.id === "username") {
      const { value } = e.target;
      setUsername(value);
      setUsernameErr(
        value.length === 0
          ? "This field is required."
          : value.length < 6
          ? "Username must be at least 6 characters long."
          : value.indexOf(" ") !== -1
          ? "Username cannot contain spaces."
          : null
      );
    }

    if (e.target.id === "password") {
      const { value } = e.target;
      setPassword(value);
      setPasswordErr(
        value.length === 0
          ? "This field is required."
          : value.length < 8
          ? "Password must be at least 8 characters long."
          : null
      );
      // setConfirmPasswordErr(
      //   confirmPassword.length > 0 && confirmPassword !== value
      //     ? "Passwords do not match."
      //     : null
      // );
    }

    if (e.target.id === "confirmPassword") {
      const { value } = e.target;
      setConfirmPassword(value);
      setConfirmPasswordErr(
        value.length === 0
          ? "This field is required."
          : value !== password
          ? "Passwords do not match."
          : null
      );
    }
    if (e.target.id === "email") {
      const { value } = e.target;
      setEmail(value);
      setEmailErr(
        value.length === 0
          ? "This field is required."
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email address."
          : null
      );
    }
  };

  // =========================
  // =========================
  const handleSubmitForm = e => {
    e.preventDefault();
    if (!name || !username || !password || !confirmPassword || !email) {
      alert("Please fill in all required fields.");
      return;
    }
    // console.log({
    //   name,
    //   username,
    //   password,
    //   confirmPassword,
    //   email,
    // });
  };

  return (
    <Form onSubmit={handleSubmitForm} className="container">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label htmlFor="name">name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          placeholder="name"
          name="name"
          onChange={handelechange}
        />
        {nameErr && <small className="text-danger">{nameErr}</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          placeholder="email"
          name="name"
          onChange={handelechange}
        />
        {emailErr && <small className="text-danger">{emailErr}</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>username</Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          id="username"
          name="username"
          onChange={handelechange}
          // value={username}
        />
        {usernameErr && <small className="text-danger">{usernameErr}</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="passwordErr">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handelechange}
          // value={confirmPassword}
        />
        {passwordErr && <small className="text-danger">{passwordErr}</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>confirmPassword</Form.Label>
        <Form.Control
          type="confirmPassword"
          placeholder="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handelechange}
          // value={confirmPassword}
        />
        {confirmPasswordErr && (
          <small className="text-danger">{confirmPasswordErr}</small>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        register
      </Button>
    </Form>
  );
}
