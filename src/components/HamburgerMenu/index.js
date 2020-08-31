import React from 'react'
import NavList from '../NavList';

export default function HamburgerMenu({ open, setOpen }) {
    return (
        <div tabIndex="0" className={`hamburger-menu${open ? " active" : ""}`}
            onBlur={() => setOpen(false)}>
            <NavList />
            <p className="copyright">Bütün haklar Antalya Kartuşa aittir. &copy;</p>
        </div>
    );
}