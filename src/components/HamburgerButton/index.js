import React from 'react'

export default function HamburgerButton({ openHamburger }) {
    return (
        <div className="hamburger-button">
            <button className="hamburger-button__button" onClick={() => openHamburger()}>
                <i className="fas fa-bars"></i>
            </button>
        </div>

    );
}
