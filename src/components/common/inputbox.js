import { FormGroup, Label as ErrorLabel, InputGroupText, Input, Label } from "reactstrap";

export const InputBox = ({ label, size, placeholder, invalid, errormsg, type, value, setInput }) => {
    return (
        <FormGroup className="mb-3">
            <Label>{label}</Label>
            <Input
                invalid={invalid}
                type={type}
                value={value}
                size={size}
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)}
            />
            {errormsg ? <ErrorLabel className="error-label">{errormsg}</ErrorLabel> : ""}
            {/* <InputGroupText>
                $
            </InputGroupText> */}
        </FormGroup>
    )
}

export default InputBox;
