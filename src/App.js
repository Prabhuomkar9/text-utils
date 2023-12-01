import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const palletes = {
        dark: {
            name: "dark",
            light: "light",
            dark: "dark",
            bg: "#212529",
            bgLight: "#e4ebf3",
            bgHeaderLight: "#cdddec",
            bgHeaderDark: "#1d2124",
            color: "white",
        },
        success: {
            name: "success",
            light: "light",
            dark: "success",
            bg: "#0b4429",
            bgLight: "#e4ebf3",
            bgHeaderLight: "#cdddec",
            bgHeaderDark: "#0a3b24",
            color: "white",
        },
        primary: {
            name: "primary",
            light: "light",
            dark: "primary",
            bg: "#00245d",
            bgLight: "#e4ebf3",
            bgHeaderLight: "#cdddec",
            bgHeaderDark: "#002155",
            color: "white",
        },
        warning: {
            name: "warning",
            light: "light",
            dark: "warning",
            bg: "#876400",
            bgLight: "#e4ebf3",
            bgHeaderLight: "#cdddec",
            bgHeaderDark: "#775800",
            color: "white",
        },
        danger: {
            name: "danger",
            light: "light",
            dark: "danger",
            bg: "#991a26",
            bgLight: "#e4ebf3",
            bgHeaderLight: "#cdddec",
            bgHeaderDark: "#8b1823",
            color: "white",
        },
    };

    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const [pallete, setPallete] = useState(palletes.dark);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const updatePallete = (color) => {
        setPallete(palletes[color]);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = pallete.bg;
            document.body.style.color = pallete.color;
            showAlert("Dark mode has been enabled", pallete.name);
        } else {
            setMode("light");
            document.body.style.backgroundColor = pallete.bgLight;
            document.body.style.color = "black";
            showAlert("Light mode has been enabled", pallete.name);
        }
    };

    document.body.style.backgroundColor =
        mode === "light" ? pallete.bgLight : pallete.bg;
    document.body.style.color = mode === "light" ? "black" : pallete.color;

    return (
        <BrowserRouter>
            <Navbar
                title="TextUtils"
                mode={mode}
                toggleMode={toggleMode}
                updatePallete={updatePallete}
                pallete={pallete}
                alert={alert}
            />
            <div className="container my-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Textform
                                heading="Try TextUtils Today!!!"
                                mode={mode}
                                pallete={pallete}
                                showAlert={showAlert}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={<About mode={mode} pallete={pallete} />}
                    />
                </Routes>
                <div
                    className="container-fluid"
                    style={{
                        position: "fixed",
                        bottom: "0",
                        right: "0",
                        width: "max-content",
                    }}>
                    <Alert alert={alert} pallete={pallete.name} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
