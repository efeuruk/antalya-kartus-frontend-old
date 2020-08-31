import React from 'react'

export default function Input({ type, id, name, placeholder }) {
    const eventHandler = (e) => {
        const input = e.target;
        const span = input.nextElementSibling;
        const eventType = e.type;
        input.classList[eventType === "focus" ? "add" : "remove"]("selected");
        span.classList[eventType === "focus" ? "add" : "remove"]("selected");
    };
    return (
        <div className="input-container">
            <label className="sr-only" htmlFor="name-surname">
                {placeholder}
            </label>
            <input
                type={type}
                id={id}
                className="input"
                name={name}
                placeholder={placeholder}
                onFocus={(e) => eventHandler(e)}
                onBlur={(e) => eventHandler(e)}
            />
            <span></span>
        </div>
    )
}
