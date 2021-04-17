import react from 'react';
import FormInput from '../form-inpput/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


class SignUp extends react.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        console.log(event.target);
        console.log(email,password);
        if(password != confirmPassword){
            alert('Entered password doesnt matched')
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        }
        catch(err){
            console.log(err)
        }


    }

    handleChange = (event) =>{
        const {name,value}= event.target;
        this.setState({ [name] : value })
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h1 className='title'> I don't have an account </h1>
                <span> Enter your email and password</span>
                <form onClick={this.handleSubmit}>
                    <FormInput
                         name='displayName'
                         type='text'
                         label='displayName'
                         value={displayName}
                         handleChange={this.handleChange}
                    />
                    <FormInput
                         name='email'
                         type="email"
                         label='email'
                         value={email}
                         handleChange={this.handleChange}
                    />
                     <FormInput
                         name='password'
                         type="password"
                         label='password'
                         value={password}
                         handleChange={this.handleChange}
                    />
                    <FormInput
                         name='confirmPassword'
                         type="password"
                         label='confirmPassword'
                         value={confirmPassword}
                         handleChange={this.handleChange}
                    />

                    <CustomButton type='submit'> Signup</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp