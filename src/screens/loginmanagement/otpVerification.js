import { useState } from "react";
import { useHistory } from "react-router-dom";
import OtpInput from 'react-otp-input';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import Button from "../../components/common/button";

const OtpVerification = () => {

  const history = useHistory();
  const [otp, setOtp] = useState("");

  return (
    <Container className="pt-lg-7">
      <Row className="justify-content-center">
        <Col lg="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-5 bg-white text-left">
              <p className="m-0 p-0 pb-2 label-color text-25">Verification</p>
              <p className="font-size pb-0">Enter your 4 digits code that you recieved on your email..</p>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-1">
              <Form role="form">
                <Row className="text-center">
                  <Col xs="12 justify-content-center">
                    <OtpInput
                      containerStyle={{ diplay: "flex", justifyContent: "center", marginBottom: 15 }}
                      inputStyle={{
                        width: "3.5rem",
                        height: "3.5rem",
                        margin: "0 1rem",
                        fontSize: "2rem",
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,0.3)"
                      }}
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      separator={<span> </span>}
                    />
                  </Col>
                </Row>
                <div>
                  <Row className="text-center">
                    <Col xs="12 justify-content-center mt-2 mb-2">
                      <a className="text-color" href="#abc">00.30</a>
                    </Col>
                  </Row>
                  <Button
                    label="CONTINUE"
                    color="primary"
                    onSubmit={() => history.push("/auth/changePassword")} />
                </div>
                <Row className="text-center">
                  <Col xs="12 justify-content-center mt-2 mb-2">
                    <p>If you didn't recieve a code! <a className="text-color" href="#abc">Resend</a></p>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container >
  );
}

export default OtpVerification;
