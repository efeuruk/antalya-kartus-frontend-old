import React from 'react'
import focusAndBlurHandler from '../../helpers/focusAndBlurHandler';

export default function Input({ type, id, name, placeholder }) {
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
                onFocus={(e) => focusAndBlurHandler(e)}
                onBlur={(e) => focusAndBlurHandler(e)}
            />
            <span></span>
        </div>
    )
}
