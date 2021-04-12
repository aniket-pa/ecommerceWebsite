import react from 'react';
import './form-input.styles.scss';

const FormInput = ({name,type,value,handleChange,label}) =>{
    return (
        <div className='group'>
            <input
            className="form-input"
            type={type}
            name={name}
            onChange={handleChange}
            value ={value}
            required
            />
            {
                label ?
                (<label className={`${value.length ? 'shrink' : ''} form-input-label`} >
                     {label}
                </label> )
                : 
                null
            }
        </div>
    )
}

export default FormInput