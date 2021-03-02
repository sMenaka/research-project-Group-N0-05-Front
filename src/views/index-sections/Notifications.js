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

function Notifications() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <h3 className="title">Supervised By</h3>
        <Row>
        <Col className="ml-auto mr-auto" md="10" xl="6">
        </Col>
        </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="6" xl="4">
            <p className="category">Co Supervisor</p>
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/chamilaSir.jpg")}
                ></img>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <br/>
                      <p>
                      Mr. Chamila Karunathilake.
                      Lecturer, 
                      Department of Information and Communication Technology, 
                      Faculty of Technology,
                      University of Sri Jayewardenepura.
                      Contact details:
                      Email: <Link>chamilakarunathilake@sjp.ac.lk</Link>
                        
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
            <p className="category">Main Supervisor</p>
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/pulathiSir.jpg")}
                ></img>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1" >
                      <br/>
                      <p>
                      Dr. Pulasthi Gunewardhana.
                     Senior Lecturer,
                    Department of Information and Communication Technology, 
                    Faculty of Technology, 
                    University of Sri Jayewardenepura.
                     Contact details:
                    Email: <Link>pulasthi@sjp.ac.lk</Link> 
                        
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

export default Notifications;
