import react from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, googlesignbtn ,...otherprops}) =>{
    return(
            <button className={`${googlesignbtn ? 'googlesignbtnstyle' : ''}  custom-button`} {...otherprops}>
                {children}
            </button>
    )
}

export default CustomButton