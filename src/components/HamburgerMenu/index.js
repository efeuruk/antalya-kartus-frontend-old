import React from 'react'
import NavList from '../NavList';

export default function HamburgerMenu({ open }) {
    return (
        <div className={`hamburger-menu${open ? " active" : ""}`}>
            <NavList />
            <p className="copyright">Bütün haklar Antalya Kartuşa aittir. &copy;</p>
        </div>
    );
}