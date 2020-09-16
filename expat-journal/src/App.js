import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useStyles from "./components/Styles"; //import useStyles

function App() {
	// init useStyles inside a var
	const classes = useStyles();
	//assign to className eg: className={classes.className}
	return (
		<div className="app">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p className={classes.app}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
