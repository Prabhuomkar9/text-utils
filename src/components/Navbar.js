import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    background:
                        props.mode === "light"
                            ? props.pallete.bgHeaderLight
                            : props.pallete.bgHeaderDark,
                    color: props.mode === "light" ? "black" : "white",
                }}>
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        style={{
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        to="/">
                        {props.title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    style={{
                                        color:
                                            props.mode === "dark"
                                                ? "white"
                                                : "black",
                                    }}
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={{
                                        color:
                                            props.mode === "dark"
                                                ? "white"
                                                : "black",
                                    }}
                                    to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex my-2">
                            <div
                                className={`bg-${
                                    props.mode === "dark" &&
                                    props.pallete.name === "success"
                                        ? "light"
                                        : "success"
                                } rounded mx-2`}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    props.updatePallete("success");
                                }}></div>
                            <div
                                className={`bg-${
                                    props.mode === "dark" &&
                                    props.pallete.name === "primary"
                                        ? "light"
                                        : "primary"
                                } rounded mx-2`}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    props.updatePallete("primary");
                                }}></div>
                            <div
                                className={`bg-${
                                    props.mode === "dark" &&
                                    props.pallete.name === "warning"
                                        ? "light"
                                        : "warning"
                                } rounded mx-2`}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    props.updatePallete("warning");
                                }}></div>
                            <div
                                className={`bg-${
                                    props.mode === "dark" &&
                                    props.pallete.name === "danger"
                                        ? "light"
                                        : "danger"
                                } rounded mx-2`}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    props.updatePallete("danger");
                                }}></div>
                            <div
                                className={`bg-${
                                    props.mode === "dark" &&
                                    props.pallete.name === "dark"
                                        ? "light"
                                        : "dark"
                                } rounded mx-2`}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    props.updatePallete("dark");
                                }}></div>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="btn-check"
                                type="checkbox"
                                id="btn-check-4"
                                autoComplete="off"
                                onClick={props.toggleMode}
                            />
                            <label
                                className={`btn text-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                htmlFor="btn-check-4">
                                Toggle Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Set title here, as its required",
    about: "Even if this default wasnt put the page would still work",
};
