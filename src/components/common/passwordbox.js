import { Row, Col, InputGroup, InputGroupText, Input, Label } from "reactstrap";

const PasswordBox = ({ label, invalid, type, value, errormsg, showPassword, onChange, setPassword }) => {
    return (
        <Row className="m-0 justify-content-between">
            <Col xs="12 p-0">
                <Label>{label}</Label>
                <InputGroup>
                    <Input
                        invalid={invalid}
                        type={type}
                        value={value}
                        onChange={(e) => onChange(e.target.value)} />
                    <InputGroupText className="security-refresh-btn" style={{ borderColor: invalid && invalid ? "red" : "" }}>
                        <i className="fa fa-eye" onClick={() => setPassword(!showPassword)}></i>
                    </InputGroupText>
                </InputGroup>
                <Label className="error-label">{errormsg}</Label>
            </Col>
        </Row >
    )
}

export default PasswordBox;