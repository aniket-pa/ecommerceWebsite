import React from 'react';
import './menu-items.style.scss'

export const MenuItem = ({title,imageUrl,size}) =>{
    return(
        <div className= {`menu-item ${size}`}>

        <div 
             style={{
                backgroundImage:`url(${imageUrl})`
            }}
            className="background-image"
        />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> ORDER NOW </span>
            </div>
        </div> 
    )
}