import React, { useState } from "react";
import Page from "../components/layouts/Page";
import { Row, Col } from "react-bootstrap";
import Content from "../components/layouts/Content";
import supabase from "../supabase/client";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Display Name: ", displayName);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            display_name: displayName,
            age: 27,
          },
        },
      });

      console.log("Signup Data:", data);

      //   if (!error) {
      //     await supabase
      //       .from("profiles")
      //       .update({
      //         display_name: displayName,
      //       })
      //       .eq("id", data.user.id);
      //   }

      if (error) {
        console.log("Supabase Auth Error:", error);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <h1>Signup</h1>
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
              <label className="mt-3" htmlFor="password">
                Display Name:
              </label>
              <input
                className="form-control"
                type="text"
                name="displayName"
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-lg mt-3">
                Submit
              </button>
            </form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default SignupPage;
