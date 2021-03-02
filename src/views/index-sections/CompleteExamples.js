import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Our Research</h2>
              <h5 className="description">
              Speech is the verbal way of exchanging ideas among individuals. Through speech, it is possible to recognize whether an individual is in a stressful condition or not. Stress is a physical, mental or emotional factor that causes physical or mental tension which can arise from a particular event or thought that makes a person feel disappointed, angry or anxious. In general, speech is the main channel of communication therefore the mental state of a person can be extracted from that particular person’s voice.
Our main objective was to identify whether the people are in psychological stress or not. The first step in achieving this objective, a collection of voice clips from speakers in Sinhala Language is taken under both stressed and non-stressed conditions. Mainly a specific procedure was followed for taking voice from individuals.
Detection of psychological stress in speech in Sinhala language has become a challenge in human perception and their intelligence. Since stress is related to lifestyle it is needed to identify stress automatically to help individuals to get informed about their health risks prior to facing dangerous psychological diseases. So that, we have to predict the accuracy of the stress that can be detected in speech signals with the help of machine learning algorithms. 

              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
