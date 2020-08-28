import React from 'react'

export default function Button({ variant }) {
    return (
        <a className={`btn btn-${variant}`} href="#contact-us" >
            Bize Ulaşın{ " "}
            <i style={{ marginLeft: "10px" }} className="fas fa-arrow-right"></i>
        </a >
    );
}
