/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Psychological Stress Detection Through Speech</h1>
            <h3>Stress has a powerful influence on various aspects of our day to day life. Psychological stress Identification and Classification through human voice clips in Sinhala Language using Machine Learning Algorithms.
</h3>
            
            <Button className="btn-round" size="lg" color="natural" outline type="button">
                Get Yor Stress Status.
              </Button>
          </div>
         
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
