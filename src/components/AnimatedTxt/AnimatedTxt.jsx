import React, { useState, useEffect } from "react";

const AnimatedTxt = ({ text, speed = 100 }) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const delay = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, speed);
        }, 1700); // 1.7s delay before typing starts

        return () => clearTimeout(delay);
    }, [text, speed]);


    return (
        <div className="typewriter">
            <h1>
                {displayed}
                <span className="cursor"></span>
            </h1>
        </div>
    );
};

export default AnimatedTxt;
