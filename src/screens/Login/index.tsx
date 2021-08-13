import React from "react";

import Button from "../../components/Button";

import { Container, Title, Subtitle, Label, Input, Link } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Title>Loging</Title>
      <Subtitle>Enter your email and password</Subtitle>
      <Label>Email</Label>
      <Input keyboardType="email-address" />
      <Label>Password</Label>
      <Input keyboardType="default" secureTextEntry />
      <Link>Forgot password?</Link>
      <Button text="Log In" />
      <Link>Don't have an account? Signup</Link>
    </Container>
  );
};

export default Login;
