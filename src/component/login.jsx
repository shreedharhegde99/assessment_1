import React, { Fragment, useState,useContext } from "react";
import "./login.css";
import { Data } from "./context";


function Login() {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuth,err,handleLogin} = useContext(Data)


	const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)
   
	};
	return (
		<Fragment>
			<div className="loginPage">
				<div className="loginForm">
					<div className="loginHeading">Login to App Ringer</div>
					<form onSubmit={handleSubmit}>
						<div className="formContainer">
							<div className="inputContainer">
								<label htmlFor="email">Email:</label> <br />
								<input
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="valueContainer"
								/>
							</div>
							<div className="inputContainer">
								<label htmlFor="password">Password:</label>
								<br />
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="valueContainer"
								/>
							</div>
							<div className=" btnContainer">
								<button type="submit" className="submitBtn">
									LOGIN
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
}

export default Login;
