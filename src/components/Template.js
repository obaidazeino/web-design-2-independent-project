import React, {useRef, useEffect} from 'react'
import profile from "../images/profile.svg"
import { useParams, useLocation, withRouter } from 'react-router'


const Template = (props) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    // const refs = [ref1, ref2, ref3, ref4, ref5]
    // const location = useLocation().pathname

    // useEffect(()=> {
    //     function preventScroll(e){
    //         e.preventDefault();
    //         e.stopPropagation();
            
    //         return false;
    //     }
    //     refs.forEach(function(item){
    //         item.current.addEventListener('wheel', preventScroll);
    //     });
    //     // ref1.current.addEventListener('wheel', preventScroll, {passive: false});
    // }, [])

    return (
        <div className="template">
            <div ref={ref1} className="rect rect-1"></div>
            <div ref={ref2} className="rect rect-2"></div>
            {props.children}
            
            <div ref={ref3} className="rect rect-4"></div>
            <div ref={ref4} className="rect rect-5"></div>
            <div ref={ref5} className="profile">
                <img src={profile} alt=""/>
            </div>
        </div>
    )
}

const TemplateWithRouter = withRouter(Template)
export default TemplateWithRouter