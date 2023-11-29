import React from "react";

export default function About(props) {
    let myStyle = {
        backgroundColor: props.mode === "dark" ? "#072942" : "white",
        color: props.mode === "dark" ? "white" : "black",
    };
    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={myStyle}
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
                            style={myStyle}
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
                            style={myStyle}
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

// Analyze your text
// Textutils gives you a way to analyze your text quickly and efficiently. be it count, character cwnt or
// Free to use
// Textutiis is a free character counter that provides instant character count ?oed count statistics for a given
// text. Textutiis reports the nu?ber of and characters. Thus it is suitable for ?eiting text Sith sord/ character
// Ifni t.
// this software in any web such as Chro?e. 'ir?fox. Internet Explorer, Safari,
// suits to coa."t characters in blog, books, excel docta?ent, pdf essays. etc.
