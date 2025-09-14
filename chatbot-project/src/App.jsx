import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'
      
      function Welcome({chatMessages}){
        if(chatMessages.length === 0){
          return(
            <p>
              Welcome to the chatbot project! 
              Send a message using the textbox below.
            </p>
          );
        }
      }
   
function App(){
           
        const [chatMessages, setChatMessages] = useState([]);
        //const chatMessages = array[0];
        //const setChatMessages = array[1];
        //array destructuring (order matters)
        //^^const [chatMessages,setChatMessages] = array^^
       return( 
        <div className="app-container">
          <Welcome
            chatMessages={chatMessages}
          />
          <ChatMessages 
            chatMessages={chatMessages}
          />
          <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
       );
      }

export default App
