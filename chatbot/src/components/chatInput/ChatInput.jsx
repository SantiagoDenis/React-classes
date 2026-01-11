import { useState } from "react";
import "../../styles/components/ChatInput.scss";
import { getBotReply } from "./botReply";

function ChatInput({chatData, setChatData}) {
    const [inputText, setInputText] = useState('');
    const sendMessage = () => {
        inputText.trim()
        if(!inputText) return
        setChatData((prev) => [
            ...prev,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }, 
            {
                message: getBotReply(inputText),
                sender: 'bot',
                id: crypto.randomUUID()
            }
        ])
        setInputText('');
    }

    const getInput = (event) => {
        setInputText(event.target.value)
    }

    return (
        <div className="ask">
            <input onChange={getInput} onKeyDown={(e) => (e.key == "Enter" && sendMessage()) || (e.key == "Escape" && setInputText(''))} type="text" placeholder="Send a message to chatbot" value={inputText}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatInput