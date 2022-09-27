import { FormGroup, Label, Input } from 'reactstrap';

const Checkbox = ({ label, className }) => {
    try {
        return (
            <FormGroup className={className} check>
                <Input type="checkbox" />
                {' '}
                <Label check className='text-xs'>
                    {label}
                </Label>
            </FormGroup>
        )
    } catch (e) {

    }
}

export default Checkbox;