import { useState } from "react";
import { useHistory } from "react-router-dom";
import MessageHandler from "../../components/common/Alert";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import { emailValidation } from '../../utils/helper';
import InputBox from "../../components/common/Inputbox";
import Button from "../../components/common/Button";

const EmailVerification = () => {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailSent, isEmailSent] = useState(false);
  const [errors, setErrors] = useState("");

  const handleOnSubmit = () => {
    try {
      let model = { email };
      let { errors, errorFound } = emailValidation(model);
      if (errorFound) {
        setErrors(errors);
        return;
      }
      isEmailSent(true);
      setErrors("");

      setTimeout(() => {
        history.push("/auth/otpVerification");
      }, 2000)
    } catch (e) {

    }
  }

  return (
    <Container className="pt-lg-7">
      <Row className="justify-content-center">
        <Col lg="7">
          {emailSent ? <MessageHandler status="success" msg="Email sent to you !" /> : ""}
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-5 bg-white text-left">
              <p className="m-0 p-0 pb-2 label-color text-25">Forgot Password</p>
              <p className="font-size pb-0">Enter your email for the verification , we will send 4 digits code to your email.</p>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-1">
              <Form role="form">
                <InputBox
                  label="E mail"
                  name="email"
                  value={email}
                  invalid={errors ? errors.email.status : false}
                  errormsg={errors ? errors.email.message : false}
                  setInput={(value) => setEmail(value)} />
                <Button
                  label="CONTINUE"
                  color="primary"
                  className="my-4 full-width"
                  onSubmit={() => handleOnSubmit()} />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container >
  );
}

export default EmailVerification;
