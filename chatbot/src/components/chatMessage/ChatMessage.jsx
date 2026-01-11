
import "../../styles/components/ChatMessage.scss";
import userImg from "../../assets/user.png";
import robotImg from "../../assets/robot.png";


const ChatMessage = ({message, sender}) => {

    return (
        <div className={`message ${sender == "user" ? "message--left" : "message--right"}`}>
            <img className='message__img' src={`${sender == "user" ? userImg : robotImg}`} alt="user picture" />
            <p className='message__p'>{message}</p>
        </div>
    )
}

export default ChatMessage