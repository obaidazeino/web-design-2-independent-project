import React, {useState} from 'react'
import {NavLink} from "react-router-dom"


const Navigation = () => {
    const [nav, setNav] = useState(false)

    function handleOpen() {
        setNav(true)
    }    

    function handleClose() {
        setNav(false)

    }    

    return (
        <div>
            <svg onClick={handleOpen} className="nav-icon hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g id="Layer_2" data-name="Layer 2"><g id="hamburger"><rect width="32" height="4" fill="#30bf97"/><rect y="10" width="32" height="4" fill="#30bf97"/><rect y="20" width="32" height="4" fill="#30bf97"/></g></g></svg>
            <nav>
                {/* <svg onClick={handleClose} style={!nav ? {display: "none"} : {display: "block"}} className="nav-icon exit" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g id="Layer_2" data-name="Layer 2"><g id="x"><line x1="32.1" y1="1.9" x2="1.9" y2="32.1" fill="none" stroke="#30bf97" stroke-miterlimit="10" stroke-width="5.33"/><line x1="1.9" y1="1.9" x2="32.1" y2="32.1" fill="none" stroke="#30bf97" stroke-miterlimit="10" stroke-width="5.33"/></g></g></svg> */}
                <svg onClick={handleClose} style={!nav ? {display: "none"} : {display: "block"}} className="nav-icon exit" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g id="Layer_2" data-name="Layer 2"><g id="x"><polygon points="34 3.8 30.2 0 17 13.2 3.8 0 0 3.8 13.2 17 0 30.2 3.8 34 17 20.8 30.2 34 34 30.2 20.8 17 34 3.8" fill="#30bf97"/></g></g></svg>

                <ul style={nav ? {opacity: "1", transform: "translateX(0%)"} : {opacity: "0", transform: "translateX(100%)"}}>
                    <li onClick={handleClose}><NavLink activeClassName="active" to="/1">Creative <br/>Writing</NavLink></li>
                    <li onClick={handleClose}><NavLink activeClassName="active" to="/2">Graphic <br/>Design</NavLink></li>
                    <li onClick={handleClose}><NavLink activeClassName="active" to="/3">Web <br/>Dev</NavLink></li>
                    <li><div className="social">
                        <a href="mailto:hi@obaidazeino.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="social-icon github"d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                        </a>
                        <a href="https://github.com/obaidazeino">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="social-icon github" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                        </a>
                        <a href="https://www.behance.net/obaidazenoab9f">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="social-icon behance" d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"/></svg>
                        </a>
                </div></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navigation