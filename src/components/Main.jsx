import React from 'react';
import "./MainStyles.css";

function Main(){
    return(
        <>
            <section className='main-section'>
                <div className="main-container">

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