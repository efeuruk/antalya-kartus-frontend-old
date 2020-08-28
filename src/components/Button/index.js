import React from 'react'

export default function Button({ variant, target, text }) {
    return (
        <a className={`btn btn-${variant}`} href={target} >
            {text}
            <i style={{ marginLeft: "10px" }} className="fas fa-arrow-right"></i>
        </a >
    );
}
