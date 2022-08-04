import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../data"

const Work = () => {

    

    let {workPage} = useParams()
    let content = data.find(item => item.id === workPage).content.map(item =>
        {return(
            <div className="card">
                {item.image && <div className='img-cont'><img src={item.image}/></div>}
                <div className="card-text">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.link ? 
                        <div>
                            <a className="dev-visit" href={item.link}>Visit</a>
                            <a href={item.source}>Source</a>
                        </div> :
                        <Link to={`${workPage}/${item.id}`}>See more</Link>
                        }
                </div>
            </div> 
        )}
        )

    return (
        <div className="cards">
            {content}
        </div>
    )
}

export default Work