import React, { useState } from "react";

function encode(text, cipherKey = text.length) {
    let ans = "";
    for (let index = 0; index < text.length; index++) {
        let currentChar = text[index];
        if (/[^a-zA-Z]/.test(currentChar)) {
            ans += currentChar;
        } else {
            let isUpperCase = currentChar === currentChar.toUpperCase();
            let baseCharCode = isUpperCase
                ? "A".charCodeAt(0)
                : "a".charCodeAt(0);

            ans += String.fromCharCode(
                baseCharCode +
                    ((currentChar.charCodeAt(0) - baseCharCode + cipherKey) %
                        26)
            );
        }
    }
    return ans;
}

function decode(text, cipherKey = text.length) {
    let ans = "";
    for (let index = 0; index < text.length; index++) {
        let currentChar = text[index];
        if (/[^a-zA-Z]/.test(currentChar)) {
            ans += currentChar;
        } else {
            let isUpperCase = currentChar === currentChar.toUpperCase();
            let baseCharCode = isUpperCase
                ? "A".charCodeAt(0)
                : "a".charCodeAt(0);

            let decodedCharCode =
                baseCharCode +
                ((currentChar.charCodeAt(0) - baseCharCode - cipherKey) % 26);

            if (decodedCharCode < baseCharCode) decodedCharCode += 26;

            ans += String.fromCharCode(decodedCharCode);
        }
    }
    return ans;
}

export default function Textform(props) {
    const handleUppercaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    };
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    };
    const handleRemoveExtraSpaces = () => {
        let ans = text.split(/[ ]+/);
        setText(ans.join(" "));
        props.showAlert("Removed extra spaces", "success");
    };
    const handleEncodeClick = () => {
        setText(encode(text));
        props.showAlert("Text encoded", "success");
    };
    const handleDecodeClick = () => {
        setText(decode(text));
        props.showAlert("Text decoded", "success");
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    };
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div
                className="container"
                style={{
                    backgroundColor:
                        props.mode === "dark" ? "#072942" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                }}>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "#3f474f" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        rows="8"></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUppercaseClick}>
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLowerCaseClick}>
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleEncodeClick}>
                    Click to Encode
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleDecodeClick}>
                    Click to Decode
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy to Clipboard
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleClearClick}>
                    Clear
                </button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    {text.length} characters and{" "}
                    {text.split(/[ ]+/).length -
                        (text.length === 0 ||
                        text.charAt(text.length - 1) === " "
                            ? 1
                            : 0)}{" "}
                    words
                </p>
                <p>
                    One can read this text in approximately{" "}
                    {(text.split(/[ ]+/).length -
                        (text.length === 0 ||
                        text.charAt(text.length - 1) === " "
                            ? 1
                            : 0)) *
                        0.008}{" "}
                    minutes
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter something in textbox to preview"}
                </p>
            </div>
        </>
    );
}
