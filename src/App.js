import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            setMode("dark");
            document.body.style.backgroundColor = "#072942";
            document.body.style.color = "white";
        }
    };
    const [mode, setMode] = useState("light");
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <Textform heading="Enter the input text below" mode={mode} />
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
