import react from 'react';
import SignIn from '../../components/sigin.component/sigincomponet';
import SignUp from '../../components/sigup-component/sigun-up.component';
import './sigin-sigup-page.styles.scss';

const SignInPage =()=>{
    return(
        <div className="signin-signup">
          <SignIn />
          <SignUp/>
        </div>
    )
}
    
  
export default SignInPage