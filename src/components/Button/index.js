import React from 'react'

export default function Button({ variant, target, text }) {
    const handleProgressIndicator = () => {
        const interval = window.setInterval(() => {
            const bodyClassList = document.querySelector('body').classList;
            if (bodyClassList.contains('page-loading')) {
                bodyClassList.remove('page-loading');
                clearInterval(interval);
            }
        }, 2000);
    }
    return (
        <a className={`btn btn-${variant}`} href={target} onClick={() => handleProgressIndicator()}>
            {text}
            <i style={{ marginLeft: "10px" }} className="fas fa-arrow-right"></i>
        </a >
    );
}
