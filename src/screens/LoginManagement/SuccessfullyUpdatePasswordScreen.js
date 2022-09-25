import Button from "../../components/Common/Button";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";

const SuccessfullyUpdatePasswordScreen = () => {

  const history = useHistory();

  return (
    <>
      <img alt="" src={require('../../assets/img/icons/usermanagement/login-background.png')} style={{ position: "absolute" }} />
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="7">
            <Card className="bg-secondary shadow border-0">

              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form">

                  <Row className="m-0 justify-content-center">
                    <Col xs="12 p-0 text-center">
                      <i className="fa fa-check-circle-o" style={{ fontSize: 100, color: "#1261A9" }} aria-hidden="true"></i>

                    </Col>
                    <Col xs="12 p-0 text-center">
                      <CardHeader className="px-lg-5 py-lg-5 bg-white text-center">
                        <p className="m-0 p-0 pb-2 label-color text-25">Successfully</p>
                        <p className="font-size pb-0">Your password has been reset successfully.</p>
                      </CardHeader>
                    </Col>
                  </Row>
                  <Button
                    label="CONTINUE"
                    color="primary"
                    className="my-4 full-width"
                    onSubmit={() => history.push("/")} />
                </Form>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container >
    </>
  );
}

export default SuccessfullyUpdatePasswordScreen;
