import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import './App.css';
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import Home from './components/Home';
// import Footer from "./components/Footer.jsx";

function App() {

//Fetching User data from backend
const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    <>
      <Router>
      {/* <Footer /> */}
      <Routes>
	  				<Route path='/Home' element={user ? <Navigate to="/" /> : <Home />}/>
	  				<Route path="*" element={ user ?  <Main /> : <Navigate to="/Home" />} />
					<Route path="/" exact element={user ? <Main /> : <Navigate to="/Home" />} />
					<Route path="/Login" exact element={user ? <Navigate to="/" /> : <Login />} />
				</Routes>
      </Router>
    </>
  );
}

export default App;
