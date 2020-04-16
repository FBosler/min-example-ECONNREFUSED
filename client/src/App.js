import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import io from "socket.io-client";


function App() {
    // socket part test
  const fetchsocketData = () => {
    const socket = io();
    console.log("trying socket stuff");
    socket.on("FromBackEnd", data => {console.log(data)});
  };
  useEffect(() => fetchsocketData(),[])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
