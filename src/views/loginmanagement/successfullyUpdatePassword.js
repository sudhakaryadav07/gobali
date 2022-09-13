import Button from "../../components/Buttons/button";
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

const SuccessfullyUpdatePassword = () => {

  const history = useHistory();

  return (
    <Container className="pt-lg-7">
      <Row className="justify-content-center">
        <Col lg="7">
          <Card className="bg-secondary shadow border-0">

            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">

                <Row className="m-0 justify-content-center">
                  <Col xs="12 p-0 text-center">
                    <i class="fa fa-check-circle-o" style={{ fontSize: 100, color: "#1261A9" }} aria-hidden="true"></i>

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
                  onSubmit={() => history.push("/")} />
              </Form>
            </CardBody>
          </Card>

        </Col>
      </Row>
    </Container >
  );
}

export default SuccessfullyUpdatePassword;
