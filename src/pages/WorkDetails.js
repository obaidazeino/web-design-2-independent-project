import React from 'react'
import data from "../data"
import { useParams } from 'react-router'

const WorkDetails = () => {
    let {workPage, detailsPage} = useParams()
    let object = data.find(item => item.id === workPage).content.find(item => item.id === detailsPage)



    return (
        <div className="article">
                <h3>{object.title}</h3>
                {object.image && <img src={object.image} alt="project"/>}
                {!object.extened ? <p>{object.body}</p> : ""}
                {object.extended && object.extended.map(item => {
                    return(
                        <p>{item}</p>
                    )
                })} 
            
        </div>
    )
}


export default WorkDetails