import React from 'react'
import './loader.css';

const Loader = (customStyle) => {
    return (
        <div className="loader-top">
            <div id="loading-indicator" style={customStyle} role="progressbar" className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate">
                <svg viewBox="22 22 44 44" className="MuiCircularProgress-svg">
                    <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate">
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export default Loader;
