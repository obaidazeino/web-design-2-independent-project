import React, {useEffect, useRef, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../data"
import { usePosition } from '../hooks/usePosition'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import withCursor from "../HOCs/withCursor";



const Work = (props) => {
    const profile = () => {
        props.passData(false)
    }

    profile()
    console.log(profile())
    const { onCursor } = props.context;

    // let [position, ref, styles2] = usePosition()

// console.log(position)

    let {workPage} = useParams()
    let content = data.find(item => item.id === workPage).content.map(item =>
        {return(
<ScrollAnimation animateIn="fadeIn" delay="150">
<Link to={`${workPage}/${item.id}`}>
            <div className="card" onMouseEnter={() => {(item.link) ? onCursor("default") : onCursor("pointer")}}
        onMouseLeave={onCursor}>
                {item.image && <div className='img-cont'><img src={item.image}/></div>}
                <div className="card-text">
                    <h3>{item.title}</h3>
                    {!item.image && <p>{item.body}</p>}
                    <time>{item.date}</time>
                    {item.link &&
                        <div>
                            <a className="dev-visit" href={item.link}>Visit</a>
                            <a href={item.source}>Source</a>
                        </div> 
                        }
                </div>
            </div> 
            </Link>
            </ScrollAnimation>

        )}
        )

    return (
        <div className="cards">
            {content}
        </div>
    )
}

export default withCursor(Work)