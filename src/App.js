import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode("dark");
            document.body.style.backgroundColor = "#072942";
            document.body.style.color = "white";
            showAlert("Light mode has been enabled", "success");
        }
    };
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <BrowserRouter>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container">
                <Alert alert={alert} />
            </div>
            <div className="container my-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Textform
                                heading="Enter the input text below"
                                mode={mode}
                                showAlert={showAlert}
                            />
                        }
                    />

                    <Route path="/about" element={<About mode={mode} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
