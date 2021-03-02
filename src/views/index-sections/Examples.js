import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Examples() {
  return (
    <>
    <div
      className="section section-signup"
      style={{
        backgroundImage: "url(" + require("assets/img/bgfu.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "700px",
      }}
    >
      <Container>
      <Row className="justify-content-md-center">
          <Col lg="8" md="12">
            <h2 className="title" style={{
        
        color:"white"
      }} >Future Direction</h2>
            <h4 className="description" style={{
        
        color:"white"
      }}>
            We hope to enhance the detection performance of the model by using multiple ways. therefore, various physiological signals will be supposed to be taken as that data in multiple ways. Those are EEG signals, Heart rate variations, skin conductance, respiration irrigations (breathing patterns).

Furthermore, expected to build a practical system that can detect human stress levels in real-time.

We also hope to get a voice sample from students during a real exam. This will increase the accuracy of the data that we hope to obtain. It is also hoped to obtain more voice samples in similar practical situations to increase the accuracy of the model. Because it is more successful than taking samples from the scenarios which we have made.

The number of the currently collected voice clips were medium, but in future, more voice clips will be collected in the experiments. Also, we hope to train the model using a deep learning framework like CNN and see what the accuracy is like.



            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
}

export default Examples;
