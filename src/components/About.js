import React from "react";

export default function About(props) {
    let myStyleHeader = {
        backgroundColor:
            props.mode === "dark"
                ? props.pallete.bgHeaderDark
                : props.pallete.bgHeaderLight,
        color: props.mode === "dark" ? "white" : "black",
    };
    let myStyle = {
        backgroundColor:
            props.mode === "dark" ? props.pallete.bg : props.pallete.bgLight,
        color: props.mode === "dark" ? "white" : "black",
    };

    var accordionButtons = document.getElementsByClassName("accordion-button");
    if (accordionButtons.length > 0) {
        for (var i = 0; i < accordionButtons.length; i++) {
            accordionButtons[i].style.setProperty(
                "--after-filter",
                props.mode === "dark" ? "invert(1)" : "invert(0)"
            );
        }
    }

    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={myStyleHeader}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        style={myStyle}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text
                            quickly and efficiently. Be it word count, character
                            count or time required to read it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyleHeader}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        style={myStyle}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that
                            provides instant character count & word count
                            statistics for a given text. TextUtils reports the
                            number of words and characters. Thus it is suitable
                            for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyleHeader}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        style={myStyle}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers
                            such as Chrome, Firefox, Internet Explorer, Safari,
                            Opera. It suits to count characters in facebook,
                            blog, books, excel document, pdf document, essays,
                            etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
