import React from "react";
// import { Link } from 'react-router-dom';
import "./NavbarStyles.css";
import logo from "../images/moonlogocompressed.png";

function Navbar(userDetails) {

    //LogOut Function
    // const user = userDetails.user;
    // console.log(user.email);
    const logout = () => {
        window.open(
          `${process.env.REACT_APP_API_URL}/auth/logout`,
          "_self"
        )
        
      }
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
                        {/* <img src={user.profile} alt="logo" className="nav-logo"/> */}
                        {/* <p>{user}</p> */}
                        <button onClick={logout} className="nav-logout">
                            Logout
                        </button>
                    </div>
				</div>
			</section>
		</>
        
	);
}

export default Navbar;
