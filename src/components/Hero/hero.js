import React from 'react';
import "./hero.css";

export default function Hero() {
    return (
        <>
            <div className="hero">
                <a href="https://nwlife.church" rel="noopener noreferrer" target= "_blank">
                    <img className="logo" src="./assets/logos/nwlifelogo.png" alt="logo"/>
                </a>
                <div className="filter"></div>
            </div>
        </>
    )
}
