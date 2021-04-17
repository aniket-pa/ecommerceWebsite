import react from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-inpput/form-input.component';
import './sigin.component.scss';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends react.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email,password}= this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState( {email:'' , password:''} )
        }
        catch(error){
            console.log(error)
        }
        
    }

    handleChange = (event) =>{
        const { name, value }=event.target;
        this.setState( { [name]:value } )
    }

    render(){
        return(
            <div className="Sigin">
            <form onSubmit={this.handleSubmit}>
                <h1 className='title'> I already have an account </h1>
                <span> Sigin with your email id and password </span>
                <FormInput
                    name='email'
                    type="email"
                    label='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                />
                <FormInput 
                    name='password'
                    type='password'
                    label='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                />
            <div className='buttons'>
                <CustomButton  
                    type='submit'       
                    name="Sigin"
                >SIGIN
                </CustomButton>
                <CustomButton  
                    type='submit'       
                    name="Sigin"
                    onClick={signInWithGoogle}
                    googlesignbtn
                >SIGIN WITH GOOGLE
                </CustomButton>
            </div>
            </form>
            </div>
        )
    }
}

export default SignIn