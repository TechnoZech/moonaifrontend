import React from 'react';
import "./MainStyles.css";
import profile from "../images/moonlogocompressed.png";

function Main(){
    return(
        <>
            <section className='main-section'>
                <div className="main-container">
                    <div className="message-bar-container">

                        <div className="profile-container">
                            <img src={profile} alt="profile" className='profile-img'/>
                        </div>

                        <div className="message-bar">
                            This is message bar 
                        </div>
                    </div>





{/* <<<---------------------    Search bar and btn    --------------------->>>  */}

                    <div className="search-and-btn-container">
                        <textarea cols="5" rows="1" className='main-input' placeholder='Enter your text...'>
                        
                        </textarea>
                        <button className='main-search-btn'>
                            Go
                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;