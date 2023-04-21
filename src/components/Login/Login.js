import { Card } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="loginCard">
        <h3>Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="moveToCenter">
            <Button
              className="loginButton"
              type="submit"
              onSubmit={() => login()}
              onClick={login}
            >
              Login
            </Button>
          </div>
        </Form>

        <p className="signupNavigate">
          Don't Have an Account{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>
        </p>
      </Card>
    </div>
  );
};

export default Login;
