import React from "react";
import PropTypes from "prop-types";
import "./SecondsCounter.css";

const SecondsCounter = ({ seconds }) => {
    const pad = (num) => String(num).padStart(6, "0").split("");

    return (
        <div className="counter">
            <div className="digit"><i className="fas fa-clock"></i></div>
            {pad(seconds).map((digit, index) => (
                <div className="digit" key={index}>{digit}</div>
            ))}
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounter;
