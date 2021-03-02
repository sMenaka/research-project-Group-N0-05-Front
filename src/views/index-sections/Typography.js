import React from "react";
import RecorderComp from "../../components/Recorder"

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

function Typography() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Tester</h3>
          <div id="typography">
            <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                     <TabPane tabId="iconPills1">
                     <RecorderComp/>
                     </TabPane>
                  </TabContent>
                
                </CardBody>
              </Card>
            </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
