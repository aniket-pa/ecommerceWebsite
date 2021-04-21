import react from 'react';
import './header.component.styles.scss';
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser}) =>{
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
            {
                currentUser ?
                
                    <Link onClick={()=> auth.signOut()}> 
                        <span className='option'>  SIGN OUT </span>
                    </Link>
                :
                <Link to='/signin'> 
                <span className='option'> 
                    SIGIN 
                </span>
                </Link>
            }

           
        </div>
    </div>
)
}

const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
})


export default connect(mapStateToProps)(Header) 