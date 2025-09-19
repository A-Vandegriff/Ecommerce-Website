import './LoginForm.css'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
export function LoginForm(){
        const [time, setTime] = useState(dayjs().format('HH:mm:ss'));
        const [showPassword,setPassword] = useState(true);
        function Hide(){
          {showPassword ? setPassword(false) : setPassword(true)}
        }
        useEffect(() => {
          setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
             console.log('run code');
          }, 1000);
        }, []);

        return(
        <>
          <p className="title">
            Hello, welcome to my website
          </p>
          <input className="email" placeholder="Email" ></input>
            <div>
              <input className="email" placeholder="Password" type={showPassword ? 'password' : 'text'}></input>
              <button className="hide" onClick={Hide}>{showPassword ? "Show" : "Hide"}</button>
            </div>
            <div>
              <button className="login">Login</button>
              <button className="login">Sign up</button>
              <p>Current time: {time}</p>
            </div>
        </>
        )
      }
