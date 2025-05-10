import React from "react";
import './Services.css';

export default function Services(){
    const servicesItems = [
        {name: 'ser1', text: ""},
        {name: 'ser2', text: ""},
        {name: 'More Services', text: ""}
        ];

    return(
        <div className="includes">
            <h1 className="center">
                Services
            </h1>
            <h1 className="left">
                Company <br/> Formation <br/> Services
            </h1>
            <div className="rectange"></div>
            <div className="ser1">
                
            </div>
            <div className="ser2">
                
            </div>
            <div className="ser3">
                <h1 className="more">{servicesItems[2].name}</h1>
                <div className="row"></div>
            </div>
        </div>
    )
}