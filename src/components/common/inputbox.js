import { FormGroup, Label as ErrorLabel, Input, Label } from "reactstrap";

const InputBox = ({ label, size, placeholder, invalid, errormsg, type, value, onChange }) => {
    return (
        <FormGroup className="mb-3">
            <Label>{label}</Label>
            <Input
                invalid={invalid}
                type={type}
                value={value}
                size={size}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
            {errormsg ? <ErrorLabel className="error-label">{errormsg}</ErrorLabel> : ""}
        </FormGroup>
    )
}

export default InputBox;