import React, {useState} from 'react';
import "./MainStyles.css";
import profile from "../images/moonlogocompressed.png";
import user from "../images/user.png";
import Navbar from "./Navbar.jsx";

function Main(){

    // creating state for input and chatlog
    const[input, setInput] = useState("");
    const[chatLog, setChatLog] = useState([{
        user: "gpt",
        message: "Hello there! How can I help you today?"
    }
    // ,{
    //     user: "me",
    //     message: "How can I help you today?"
    ]);

    async function handleSubmit(e){
        e.preventDefault();

        let chatLogNew = [...chatLog, {user:"me", message: `${input}`}]
        setInput("");
        setChatLog(chatLogNew) 

        //Fetch response to api combining chat log array of messages and sending it as a message to localhost as a post

        const messages = chatLogNew.map((message)=> message.message).join("\n")

        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: messages
            })
        });
        const data = await response.json();
        await setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }])
        console.log(data.message);
    }


    return(
        <>
            <Navbar />
            <section className='main-section'>
                <div className="main-container">
                {chatLog.map((message, index) => (
                    <ChatMessage key={index} message={message}/>
                ))}

                    
                

{/* <<<---------------------    Search bar and btn    --------------------->>>  */}

                    <div className="search-and-btn-container">
                
                        <textarea 
                        value={input} 
                        onChange={(e)=> setInput(e.target.value) } 
                        cols="5" 
                        rows="1" 
                        className='main-input' 
                        placeholder='Enter your query...'></textarea>
                        
                        <button className='main-search-btn' onClick={handleSubmit}>
                            Go
                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        </button>
                    
                    </div>
                </div>
            </section>
        </>
    )
}

const ChatMessage = ({message}) => {
    return(
        <div className={`${message.user === "gpt" ? "message-bar-container" : "message-bar-container2"}`}>

            <div className={`${message.user === "gpt" ? "message-bar" : "message-bar2" }`}>
                {message.message}
            </div>
            <div className={`${message.user === "gpt" ? "profile-container" : "profile-container2"}`}>
                {message.user === "gpt" ? 
                <img src={profile} alt="profile" className='profile-img'/> : 
                <img src={user} alt="user" className='profile-img'/>}
            </div>

        </div>
    )
}

export default Main;