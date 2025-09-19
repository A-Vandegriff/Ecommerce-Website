import { useState, useEffect } from 'react'
import { Chatbot } from'supersimpledev'
import { dayjs } from 'dayjs';
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
                 useEffect(() => {
            Chatbot.addResponses({
                  'goodbye': 'Goodbye. Have a great day!',
                  'give me a unique id': function() {
                    return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
                  }
                });
                // [] tells useEffect to only run once. We only want to run
                // this setup code once because we only want to add these
                // extra responses once.
                }, []);
                
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
