export const Alert = ({ status, msg }) => {
    return (
        <div className={`alert alert-${status}`} role="alert" >
            {msg}
        </div >
    )
};