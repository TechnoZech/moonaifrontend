import React from 'react';
import "./HomeStyles.css";
import { Link } from 'react-router-dom';
import homeIMG from "../images/robocompressed.png";
import logo from "../images/moonlogocompressed.png";

export default function Home() {
  return (
    <>
        <section className='home-section'>
            <div className="home-container">
                <div className="text-container">
                        <div className="logo-div">
                            <img src={logo} alt="logo" className="nav-logo"/>
                            oon
                            <span className="nav-span">AI</span>
                        </div>

                    <h1 className="home-heading">The Intelligent <br /> conversation companion!</h1>
                    <h3 className="home-heading2">and beyond.</h3>

                    <Link to="/Login">
                        <button className="home-btn">
                            Chat Now
                        </button>
                    </Link>
                </div>
                <div className="home-img-container">
                    <img src={homeIMG} alt="robochat" className='robochat-image'/>
                </div>
            </div>
        </section>
    </>
  )
}
