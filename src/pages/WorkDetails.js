import React from 'react'
import data from "../data"
import { useParams } from 'react-router'
import ScrollAnimation from 'react-animate-on-scroll';
import withCursor from "../HOCs/withCursor";

const WorkDetails = (props) => {
    let {workPage, detailsPage} = useParams()
    let object = data.find(item => item.id === workPage).content.find(item => item.id === detailsPage)
    const profile = () => {
        props.passData(false)
    }

    profile()
    console.log(profile())
    const { onCursor } = props.context;


    return (
        <div className="article" onMouseEnter={{onCursor}}
        onMouseLeave={onCursor}>
                <h3>{object.title}</h3>
                {object.image && <img src={object.image} alt="project"/>}
                {!object.extened ? <p>{object.body}</p> : ""}
                {object.extended && object.extended.map(item => {
                    return(
                        <p>{item}</p>
                    )
                })} 
                {object.imgExtended && object.imgExtended.map(item => {
                    return(
                        <ScrollAnimation animateIn="fadeIn">

                        <img src={item} alt="additional project"/>
                        </ScrollAnimation>
                    )
                })} 
            
        </div>
    )
}


export default withCursor(WorkDetails)