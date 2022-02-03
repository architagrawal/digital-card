import React from "react"
import Icon from "../images/Icon.png"
import Vector from "../images/Vector.png"

export default function Info() {
    return (
        <div className="info-container">
            <div className="image-container">
            </div>
            <div className= "name-info">
                <h2 className= "name">Archit Agrawal</h2>
                <h3 className="job">Software Developer</h3>
                <p className= "website">github.com/architagrawal</p>
            </div>
            <div className="button-container">
                <div className="button button1">
                    <img src= {Icon} className="email-image"/>
                    <p className ="email-text">Email</p>
                </div>
                
                <div className="button button2">
                    <img src= {Vector} className ="linkedin-image"/>
                    <p className ="linkedin-text">LinkedIn</p>
                </div>
            </div>
        </div>
        )
}