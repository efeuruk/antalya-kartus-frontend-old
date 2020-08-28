import React from 'react'

export default function HamburgerButton({ openHamburger, open }) {
    return (
        <button className="hamburger-button" onClick={() => openHamburger()}>
            <i className={`fas fa-${open ? "arrow-left" : "bars"}`}></i>
        </button>
    );
}
