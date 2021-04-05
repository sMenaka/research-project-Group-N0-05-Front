import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SignUp() {

  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
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
        }} >Technology Stack</h2>
              <h4 className="description" style={{
          
          color:"white"
        }}>
              We have to have some way to identify the stress level of the speech which is coming from a stressed person or not and the relevant features are extracted from the sound signal. Therefore, the Mel-Frequency Cepstral Coefficients (MFCC) is used as the technique for extracting features from the audio signal.  MFCC is a standard method for feature extraction in speech recognition. This method consists of several steps such as Pre-emphasis the signal, windowing the signal, applying Fast Fourier transform to convert the time domain signal into the frequency domain, taking the log of magnitude, and then wrapping the frequencies on a Mel scale, followed by applying the inverse the Decrease cosine transform.
After the feature extraction, that dataset should have to go through a training and testing process of machine learning models. As the preliminary step, we tried for Support Vector Machine machine learning algorithm. Support Vector Machine classification model is used to train the extracted features. Because our scope goes around Supervised classification ML Models. SVM is also a supervised learning model associated with associating learning algorithms that analyze data used for classification and regression analysis.
Thereafter, for finding the best accuracy one of the Artificial Neural Network (ANN) named Recurrent Neural Network (RNN) is also utilized for training and testing using the same dataset.

              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
