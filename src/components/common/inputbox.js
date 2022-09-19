import { FormGroup, Label as ErrorLabel, Input, Label } from "reactstrap";

const InputBox = ({ label, size, invalid, errormsg, type, value, setInput }) => {
    return (
        <FormGroup className="mb-3">
            <Label>{label}</Label>
            <Input
                invalid={invalid}
                type={type}
                value={value}
                size={size}
                onChange={(e) => setInput(e.target.value)}
            />
            {errormsg ? <ErrorLabel className="error-label">{errormsg}</ErrorLabel> : ""}
        </FormGroup>
    )
}

export default InputBox;
