import React from 'react';
import './menu-items.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) =>{
    
    return(
        
        <div className= {`menu-item ${size}`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>

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

export default withRouter(MenuItem)