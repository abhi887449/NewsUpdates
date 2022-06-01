import React, { Component } from 'react'
import noimg from './no-image.jpg';
export class Newsitems extends Component {
    render() {
        let {title,description,url,imgurl}=this.props;
        if(imgurl===null || imgurl===""){
            imgurl=noimg;
        }
        if(description===null || description===""){
            description="No Description";
        }
        else{
            description=description.slice(0,100);
        }
        if(title===null || title===""){
            title="No Title";
        }
        else{
            title=title.slice(0,100);
        }
        return (
            <>
                <a href={url} target= "_blank" rel="noopener noreferrer" className="card my-3 bg-secondary text-white" style={{width: "18rem",height:"25rem",textDecoration:"none",color:"black"}}>
                    <img src={imgurl} style={{height:"150px",width:"17.89rem"}} className="card-img-top" alt="News images"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text fw-light">{description}...</p>
                        </div>
                </a>
            </>
        )
    }
}

export default Newsitems
