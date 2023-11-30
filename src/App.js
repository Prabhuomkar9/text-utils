import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const palletes = {
        success: {
            name: "success",
            light: "light",
            dark: "success",
            bg: "#198754",
            bgLight: "#9affd0",
            bgHeaderLight: "#79fabe",
            bgHeaderDark: "#177f4f",
            color: "white",
        },
        primary: {
            name: "primary",
            light: "light",
            dark: "primary",
            bg: "#0d6efd",
            bgLight: "#82b4ff",
            bgHeaderLight: "#589bff",
            bgHeaderDark: "#005feb",
            color: "white",
        },
        warning: {
            name: "warning",
            light: "light",
            dark: "warning",
            bg: "#ffc107",
            bgLight: "#ffe28d",
            bgHeaderLight: "#ffd760",
            bgHeaderDark: "#f5b700",
            color: "white",
        },
        danger: {
            name: "danger",
            light: "light",
            dark: "danger",
            bg: "#dc3545",
            bgLight: "#ff6f7d",
            bgHeaderLight: "#f95767",
            bgHeaderDark: "#d02636",
            color: "white",
        },
        dark: {
            name: "dark",
            light: "light",
            dark: "dark",
            bg: "#212529",
            bgLight: "#bdcdde",
            bgHeaderLight: "#b2c1d1",
            bgHeaderDark: "#1d2124",
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
            />
            <div className="container">
                <Alert alert={alert} pallete={pallete.name} />
            </div>
            <div className="container my-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Textform
                                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
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
            </div>
        </BrowserRouter>
    );
}

export default App;
