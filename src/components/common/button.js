import { Button as ButtonComponent } from "reactstrap";

const Button = ({ label, outline, color, onSubmit }) => {
    return (
        <div className="text-center">
            <ButtonComponent
                color={color}
                type="button"
                className="my-4 full-width"
                onClick={() => onSubmit()}>
                {label}</ButtonComponent>
        </div>
    )
}

export default Button;
