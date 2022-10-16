import React, { useState, useEffect } from "react";
import Page from "../components/layouts/Page";
import { Row, Col } from "react-bootstrap";
import Content from "../components/layouts/Content";
import supabase from "../supabase/client";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log("Login Data:", data);

      if (error) {
        console.log("Supabase Login Auth Error:", error);
      }
    } catch (error) {
      console.log("Login Err", error.message);
    }
  };

  const getUserData = () => {
    // const user = supabase.auth.user();
    const session = supabase.auth.session();
    // console.log("Auth User:", user);
    console.log("Auth Session:", session);
  };

  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <h1>Login</h1>
            <h4>Using Supbase Auth</h4>
          </Content>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light p-5">
            <form onSubmit={handleSubmit} className="form">
              <label className="mt-3" htmlFor="email">
                {" "}
                Email:
              </label>
              <input
                className="form-control"
                type="email"
                name="emal"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="mt-3" htmlFor="password">
                Password:
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-lg mt-3">
                Submit
              </button>
            </form>
          </Content>
          <button
            onClick={getUserData}
            type="button"
            className="btn btn-secondary btn-lg mt-3"
          >
            Auth User Test
          </button>
        </Col>
      </Row>
    </Page>
  );
}

export default LoginPage;
