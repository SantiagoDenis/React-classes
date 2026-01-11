import './styles/components/App.scss'
import ChatInput from './components/chatInput/ChatInput'
import ChatMessage from './components/chatMessage/ChatMessage'
import { useState } from 'react';

function App() {

  const [chatData, setChatData] = useState([])

  return (
    <div className='chatbot-container'>
      
      <div className="messages-container">
        {chatData.map((chat) => <ChatMessage message={chat.message} sender={chat.sender} key={chat.id}/>) }
      </div>
      <ChatInput chatData={chatData} setChatData={setChatData}/>
    </div>
  )
}

export default App
 