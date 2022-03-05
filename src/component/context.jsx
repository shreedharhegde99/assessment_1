import React, { createContext, Component } from "react";
import axios from "axios";

export const Data = createContext();

class DataProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuth: true,
			err: false,
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(email, password) {
		axios
			.post("https://reqres.in/api/login", {
				email,
				password,
			})
			.then((res) => res.data)
			.then(() => this.setState({ isAuth: true, err: false }))
			.then(() => console.log("logged in"))
			.catch((err) => this.setState({ err: true }));
	}
	render() {
		const { isAuth, err } = this.state;
		const { handleLogin } = this;
		const value = { isAuth, err, handleLogin };
		return <Data.Provider value={value}>{this.props.children}</Data.Provider>;
	}
}

export default DataProvider;
