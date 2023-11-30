import React, { useState } from "react";
import { encode, decode } from "../logic/ceaser_cipher";

export default function Textform(props) {
    const handleUppercaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", props.pallete[props.mode]);
    };
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", props.pallete[props.mode]);
    };
    const handleRemoveExtraSpaces = () => {
        let ans = text.split(/[ ]+/);
        setText(ans.join(" "));
        props.showAlert("Removed extra spaces", props.pallete[props.mode]);
    };
    const handleRemoveUnwantedNewLines = () => {
        let ans = text.split(/[\n]+/);
        setText(ans.join("\n"));
        props.showAlert(
            "Removed unwanted new lines",
            props.pallete[props.mode]
        );
    };
    const handleEncodeClick = () => {
        setText(encode(text));
        props.showAlert("Text encoded", props.pallete[props.mode]);
    };
    const handleDecodeClick = () => {
        setText(decode(text));
        props.showAlert("Text decoded", props.pallete[props.mode]);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", props.pallete[props.mode]);
    };
    const handleClearClick = () => {
        setText("");
        setWordCount(0);
        props.showAlert("Text cleared", props.pallete[props.mode]);
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
                        props.mode === "dark"
                            ? props.pallete.bg
                            : props.pallete.bgLight,
                    color:
                        props.mode === "dark" ? props.pallete.color : "black",
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
                                props.mode === "dark"
                                    ? props.pallete.bgHeaderDark
                                    : props.pallete.bgHeaderLight,
                            color:
                                props.mode === "dark"
                                    ? props.pallete.color
                                    : "black",
                        }}
                        rows="8"></textarea>
                </div>
                <button
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    disabled={text.length === 0}
                    onClick={handleUppercaseClick}>
                    Convert to Uppercase
                </button>
                <button
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    disabled={text.length === 0}
                    onClick={handleLowerCaseClick}>
                    Convert to Lowercase
                </button>
                <button
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    disabled={text.length === 0}
                    onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    disabled={text.length === 0}
                    onClick={handleRemoveUnwantedNewLines}>
                    Remove Unwanted New Lines
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    onClick={handleEncodeClick}>
                    Ceaser Cipher Encode
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    onClick={handleDecodeClick}>
                    Ceaser Cipher Decode
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
                    onClick={handleCopy}>
                    Copy to Clipboard
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-${props.pallete.name} mx-1 my-1`}
                    style={{
                        borderColor: "rgb(209,213,216)",
                        color: "white",
                    }}
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
                        border: "1px solid #dee2e6",
                        borderRadius: "10px",
                        backgroundColor:
                            props.mode === "dark"
                                ? props.pallete.bgHeaderDark
                                : props.pallete.bgHeaderLight,
                        color:
                            props.mode === "dark"
                                ? props.pallete.color
                                : "black",
                        opacity: "0.65",
                    }}>
                    <plaintext>
                        {text.length > 0 ? text : "Nothing to preview"}
                    </plaintext>
                </div>
            </div>
        </>
    );
}
