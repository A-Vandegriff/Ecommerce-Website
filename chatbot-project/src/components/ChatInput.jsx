import { useState } from 'react'
import loadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {

        const [inputText, setInputText] = useState('');
      
      function saveInputText(event){
          setInputText(event.target.value);
      }
      
      async function sendMessage(){
        setInputText('');
        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
          ]
          setChatMessages([
          ...newChatMessages,
          {
            message: <img className="spinner" src={loadingSpinner}/>,
            sender: 'robot',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
          ]);
          const response = await Chatbot.getResponseAsync(inputText);
          
          setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
          }
          ]);
        }
        function onKeyDown(event){
        if(event.key === 'Enter'){
          sendMessage();
          setInputText('');
        } 
        else if(event.key === 'Escape'){
          setInputText('');
        }

        }
       return (
        <div className="chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText}
            value={inputText}
            onKeyDown={onKeyDown}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button"
          >Send</button>
        </div>
       );
      }