import { FormGroup, Label, Input } from 'reactstrap';

const Checkbox = ({ label, classBoxName, classText }) => {
    try {
        return (
            <FormGroup className={classBoxName} check>
                <Input type="checkbox" />
                {' '}
                <Label check className={classText}>
                    {label}
                </Label>
            </FormGroup>
        )
    } catch (e) {

    }
}

export default Checkbox;