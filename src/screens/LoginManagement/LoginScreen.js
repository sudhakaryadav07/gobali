import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../../components/Common/Alert";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Label,
  Input,
  InputGroupText,
  Container,
  Row,
  Col,
  InputGroup
} from "reactstrap";
import { loginValidation } from '../../utils/helper';
import InputBox from "../../components/Common/Inputbox";
import PasswordBox from "../../components/Common/Passwordbox";
import Button from "../../components/Common/Button";
import Checkbox from "../../components/Common/Checkbox";

const LoginScreen = () => {

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isIncrypted, setPasswordType] = useState(true);
  const [securityText, setSecurityText] = useState("");
  const [security, setSecurity] = useState("");
  const [errors, setErrors] = useState("");
  const [loginStatus, isLoginScreenSuccessful] = useState(false);

  useEffect(() => {
    refreshSecurityText();
  }, [])

  const refreshSecurityText = () => {
    try {
      setSecurity(Math.random().toString(36).substr(2, 4));
    } catch (e) {
    }
  }

  const handleOnSubmit = () => {
    try {
      let model = { username, password, securityText, security };
      let { errors, errorFound } = loginValidation(model);
      if (errorFound) {
        setErrors(errors);
        return;
      }

      isLoginScreenSuccessful(true);
      setErrors("");

    } catch (e) {

    }
  }

  return (
    <>
      <img alt="" src={require('../../assets/img/icons/usermanagement/login-background.png')} style={{ position: "absolute" }} />
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="7">
            {loginStatus ? <Alert status="success" msg="LoginScreen Successful !" /> : ""}
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white text-center pb-0">
                <img alt="" src={require("../../assets/img/icons/usermanagement/tata-power-icon.png")} />
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form">
                  <InputBox
                    label="User Name"
                    type="text"
                    value={username}
                    invalid={errors ? errors.username.status : false}
                    errormsg={errors ? errors.username.message : false}
                    setInput={(value) => setUsername(value)} />
                  <PasswordBox
                    label="Password"
                    type={isIncrypted ? "password" : "text"}
                    value={password}
                    showPassword={isIncrypted}
                    invalid={errors ? errors.password.status : false}
                    errormsg={errors ? errors.password.message : false}
                    setInput={(value) => setPassword(value)}
                    setPassword={() => setPasswordType(!isIncrypted)} />
                  <Row className="m-0 justify-content-between">
                    <Col xs="8 p-0">
                      <InputBox
                        label="Security Text"
                        type="text"
                        value={securityText}
                        invalid={errors ? errors.securityText.status : false}
                        setInput={(value) => setSecurityText(value)} />
                    </Col>
                    <Col xs="4 p-0 pl-2 security">
                      <InputGroup>
                        <Input type="text"
                          autoComplete="off"
                          size={40}
                          value={security} />
                        <InputGroupText className="security-refresh-btn" onClick={() => refreshSecurityText()}>
                          <i class="fa fa-refresh" aria-hidden="true"></i>
                        </InputGroupText>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Label className="error-label">{errors ? errors.securityText.message : false}</Label>
                  <Checkbox label="Remember me on this computer" />
                  <Button
                    label="LOG IN"
                    color="primary"
                    className="my-4 full-width"
                    onSubmit={() => handleOnSubmit()} />
                </Form>
                <Row>
                  <Col xs="12 text-center">
                    <p className="text-color" onClick={() => history.push("/auth/emailVerification")}>
                      Forgot Password?
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container >
    </>
  );
}

export default LoginScreen;
