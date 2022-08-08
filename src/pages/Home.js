import React from 'react'
import {Link} from "react-router-dom"
import withCursor from "../HOCs/withCursor";

const Home = (props) => {

    const profile = () => props.passData(true)

    profile()
    const { onCursor } = props.context;

    return (
        <div className="home" onMouseEnter={() => onCursor("pointer")}
        onMouseLeave={onCursor}>
            <div className="heading writing">
                <Link to="/1"><h2>Creative <br/>Writing</h2>
                <span>1</span>
                <div className="rect rect-6"></div></Link>
            </div>
            <div className="heading graphic">
                <Link to="/2"><h2>Graphic <br/>Design</h2>
                <span>2</span>
                <div className="rect rect-7"></div></Link>
            </div>
            <div
            className="rect rect-3"></div>
            <div className="heading dev">
                <Link to="/3"><h2>Web <br/>Dev</h2>
                <span>3</span>
                <div className="rect rect-8"></div></Link>
            </div>
        </div>
    )
}

export default withCursor(Home)