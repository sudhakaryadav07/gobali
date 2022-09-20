export const Checkbox = ({ label }) => {
    try {
        return (
            <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox" />
                <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin">
                    <span>{label}</span>
                </label>
            </div>
        )
    } catch (e) {

    }
}