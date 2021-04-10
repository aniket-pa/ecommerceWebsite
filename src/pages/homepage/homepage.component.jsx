import React from 'react';
import './homepage.styles.scss';
import MenuDirectory from '../../components/menu-directory/directory-menu.component'
//import './homepage.css'

export const HomePage = () =>{
       return (
        <div className="homepage"> 
            <MenuDirectory/>
        </div>
       ) 
}

