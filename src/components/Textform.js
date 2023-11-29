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
    const handleRemoveUnwantedNewLines = () => {
        let ans = text.split(/[\n]+/);
        setText(ans.join("\n"));
        props.showAlert("Removed unwanted new lines", "success");
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
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    };
    const handleClearClick = () => {
        setText("");
        setWordCount(0);
        props.showAlert("Text cleared", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
        setWordCount(
            event.target.value
                .replaceAll("\n", " ")
                .split(" ")
                .filter((ele) => {
                    return ele.length > 0 && ele !== "\n";
                }).length
        );
    };

    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

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
                    <h1 className="mb-4">{props.heading}</h1>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "#0b4068" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        rows="8"></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleUppercaseClick}>
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleLowerCaseClick}>
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleRemoveUnwantedNewLines}>
                    Remove Unwanted New Lines
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleEncodeClick}>
                    Ceaser Cipher Encode
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleDecodeClick}>
                    Ceaser Cipher Decode
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleCopy}>
                    Copy to Clipboard
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleClearClick}>
                    Clear
                </button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <div className="container">
                    <p>Characters : {text.length}</p>
                    <p>Words : {wordCount}</p>
                    <p>Time required to read : {wordCount * 0.48} seconds</p>
                </div>
                <h2>Preview</h2>
                <div
                    className="container p-2"
                    style={{
                        border: "1px solid grey",
                        borderRadius: "10px",
                        backgroundColor:
                            props.mode === "dark" ? "#0b4068" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                    }}>
                    <plaintext>
                        {text.length > 0 ? text : "Nothing to preview"}
                    </plaintext>
                </div>
            </div>
        </>
    );
}
