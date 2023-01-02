import React from "react";
import "./NavbarStyles.css";
import logo from "../images/moonlogocompressed.png";

function Navbar() {
	return (
		<>
			<section className="nav-section">
				<div className="nav-container">
					<div className="navbar">
                        <a href="/" className="nav-a">
                            <img src={logo} alt="logo" className="nav-logo"/>
                            oon
                            <span className="nav-span">AI</span>
                        </a>
                        <a href="/" className="nav-logout">
                            Logout
                        </a>
                    </div>
				</div>
			</section>
		</>
	);
}

export default Navbar;
