import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <h3 className="title">Developed By</h3>
        <Row>
        <Col className="ml-auto mr-auto" md="10" xl="6">
        </Col>
        </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="6" xl="4">
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/isuri.jpg")}
                ></img>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <br/>
                      <p>
                      Prabuddhini P.I.<br/>
                      Software Technology, 
                      Faculty of Technology, 
                      University of Sri Jayewardenepura.
                      Email:<Link> ict1600048@sjp.ac.lk</Link>
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="6" xl="4">

              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/shan.jpg")}
                ></img>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <br/>
                      <p>
                      Menaka D.G.S.<br/>
                      Software Technology, 
                      Faculty of Technology,
                      University of Sri Jayewardenepura.
                      Email: <Link>ict1600038@sjp.ac.lk</Link>
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="6" xl="4">
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/nirasha.jpg")}
                ></img>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <br/>
                      <p>
                      Kulasooriya K.N.J.<br/>
                      Software Technology, 
                      Faculty of Technology, 
                      University of Sri Jayewardenepura.
                      Email:<Link> ict1600030@sjp.ac.lk</Link>
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
