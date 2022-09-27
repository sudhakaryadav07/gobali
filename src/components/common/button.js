import { Button as ButtonComponent } from "reactstrap";

const Button = ({ label, className, color, onClick }) => {
    return (
        <div className="text-center">
            <ButtonComponent
                color={color}
                type="button"
                className={className}
                onClick={(e) => onClick(e.target.value)}>
                {label}</ButtonComponent>
        </div>
    )
}

export default Button;
