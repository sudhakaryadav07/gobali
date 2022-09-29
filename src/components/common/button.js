import { Button as ButtonComponent } from "reactstrap";

const Button = ({ label, className, size, color, onClick }) => {
    return (
        <div className="text-center">
            <ButtonComponent
                size={size}
                color={color}
                type="button"
                className={className}
                onClick={(e) => onClick(e.target.value)}>
                {label}</ButtonComponent>
        </div>
    )
}

export default Button;
