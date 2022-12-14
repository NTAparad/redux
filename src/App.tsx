import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Page";

function App() {
    return <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </div>;
}

export default App;
