import React from "react";
import MyNav from "../components/MyNav";
import { Button, Form } from "react-bootstrap";
import MyFooter from "../components/MyFooter";
import "../../src/Contact.css"

const ContactUs = () => {
  return (
    <>
      <MyNav />
      <main className="container p-4 row mb-3 align-center mx-auto">
        <div className=" m-3  mx-auto text-center">
          <span className=" my-3 mx-auto text-center">
            <h2 className="mb-4 p-2 border-2 border-info border-bottom ">
              Get Connected
            </h2>
          </span>
        </div>
        <div className="forms col-xl-6 mx-auto">
          <div className="card " style={{borderRadius:"40px"}}>
            <div className="py-4 forms">
              <Form className="align-center mx-auto" style={{borderRadius:"90px"}}>
                
                <Form.Group
                  className="mb-3 mt-5 mx-auto col-xl-8"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-3.5 mx-auto col-xl-8 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3 mx-auto col-8 forms"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control placeholder="Your Subject" />
                </Form.Group>

                <Form.Group
                  className="mb-3 mx-auto col-8 mess"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Your Message" />
                </Form.Group>
                <Form.Group className="my-5 mx-auto col-4 contbtn">
                  <Button variant="info" type="submit">
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  );
};

export default ContactUs;
