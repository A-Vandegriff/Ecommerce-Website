import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/bigLez.png'
import './Chatmessage.css';
export function ChatMessage({ message, sender }){
  console.log(UserProfileImage);

        return (
          <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={RobotProfileImage} 
              className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={UserProfileImage}
              className="chat-message-profile"/>
            )}
          </div>
        );
      }