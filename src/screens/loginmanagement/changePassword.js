import { useState } from "react";
import { useHistory } from "react-router-dom";
import MessageHandler from "../../components/common/alert";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import { changePasswordValidation } from '../../utils/helper';
import PasswordBox from "../../components/common/passwordbox";
import Button from "../../components/common/button";

const ChangePassword = () => {

  const history = useHistory();
  const [password, setPassword] = useState("");
  const [isIncrypted, setPasswordType] = useState(true);

  const [repassword, setRePassword] = useState("");
  const [isReIncrypted, setRePasswordType] = useState(true);
  const [errors, setErrors] = useState("");


  const handleOnSubmit = () => {
    try {
      let model = { password, repassword };
      let { errors, errorFound } = changePasswordValidation(model);
      if (errorFound) {
        setErrors(errors);
        return;
      }

      setErrors("");
      history.push("/auth/successfullyUpdatePassword")

    } catch (e) {

    }
  }


  const renderPasswordMessages = () => {
    try {
      if (errors.matchpassword.status) {
        return <MessageHandler status="danger" msg={errors.matchpassword.message} />
      }
      return null
    } catch (e) {

    }
  }

  return (
    <Container className="pt-lg-7">
      <Row className="justify-content-center">
        <Col lg="7">
          {renderPasswordMessages()}
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 pt-5 pb-1 bg-white text-left">
              <p className="m-0 p-0 pb-2 label-color text-25">New Password</p>
              <p className="font-size pb-0">Set the new password for your account so you can login and access all features.</p>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <PasswordBox
                  label="Enter New Password"
                  type={isIncrypted ? "password" : "text"}
                  value={password}
                  showPassword={isIncrypted}
                  invalid={errors ? errors.password.status : false}
                  errormsg={errors ? errors.password.message : false}
                  setInput={(value) => setPassword(value)}
                  setPassword={() => setPasswordType(!isIncrypted)} />
                <PasswordBox
                  label="Confirm Password"
                  type={isReIncrypted ? "password" : "text"}
                  value={repassword}
                  showPassword={isReIncrypted}
                  invalid={errors ? errors.repassword.status : false}
                  errormsg={errors ? errors.repassword.message : false}
                  setInput={(value) => setRePassword(value)}
                  setPassword={() => setRePasswordType(!isIncrypted)} />
                <Button
                  label="UPDATE PASSWORD"
                  color="primary"
                  className="my-4 full-width"
                  onSubmit={() => handleOnSubmit()} />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangePassword;
