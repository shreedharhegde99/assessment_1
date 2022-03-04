import "./App.css";
import Login from "./component/login";
import { useContext } from "react";
import { Data } from "./component/context";
import Dashboard from "./component/dashboard";

function App() {
	const { isAuth } = useContext(Data);
	return isAuth ? <Dashboard /> : <Login />;
}

export default App;
