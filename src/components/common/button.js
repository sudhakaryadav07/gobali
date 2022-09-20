import { Button as ButtonComponent } from "reactstrap";

export const Button = ({ label, outline, className, color, onSubmit }) => {
    return (
        <div className="text-center">
            <ButtonComponent
                color={color}
                type="button"
                className={className}
                onClick={() => onSubmit()}>
                {label}</ButtonComponent>
        </div>
    )
}


export default Button