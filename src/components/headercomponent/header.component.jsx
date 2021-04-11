import react from 'react';
import './header.component.styles.scss';
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';

const Header = () =>{
return (
    <div className='header'>
       <div className='logo-container' >
            <Link to='/' >
                <Logo />
            </Link>
        </div>

        <div className='options'>
            <Link to='/shop'> 
                <span className='option'>  SHOP </span>
            </Link>
            <Link to='/contact'> 
            <span className='option'> 
                CONTACT 
            </span>
            </Link>
        </div>
    </div>
)
}

export default Header 