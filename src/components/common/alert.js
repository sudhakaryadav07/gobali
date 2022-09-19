
const MessageHandler = ({ status, msg }) => {
    return (
        <div className={`alert alert-${status}`} role="alert" >
            {msg}
        </div >
    )
}

export default MessageHandler;