import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./component/SecondsCounter.jsx";
import "./index.css";

let seconds = 0;
let countingDown = false;
let interval = null;
let targetAlert = 10;

const root = ReactDOM.createRoot(document.querySelector("#root"));

const renderCounter = () => {
    root.render(
        <div style={{ textAlign: "center" }}>
            <SecondsCounter seconds={seconds} />
            <div style={{ marginTop: "20px" }}>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => countdown(20)}>Countdown from 20</button>
            </div>
        </div>
    );

    if (seconds === targetAlert) {
        alert(`⏰ Time reached: ${targetAlert} seconds`);
    }
};

const start = () => {
    if (interval) return;
    interval = setInterval(() => {
        seconds = countingDown ? seconds - 1 : seconds + 1;
        if (seconds < 0) stop();
        renderCounter();
    }, 1000);
};

const stop = () => {
    clearInterval(interval);
    interval = null;
};

const reset = () => {
    stop();
    seconds = 0;
    renderCounter();
};

const countdown = (startFrom) => {
    stop();
    countingDown = true;
    seconds = startFrom;
    start();
};

// Initial load
renderCounter();
