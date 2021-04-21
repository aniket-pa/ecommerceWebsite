import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/headercomponent/header.component';
import SignInPage from './pages/Signinpage/sigin-signup-page.component';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUserAction from './redux/user/user.actions';

class App extends React.Component{
  /*   constructor(){
      super()
      this.state={
        currentUser:null
      }
    } */
    
    unsubscribeFromAuth=null;

componentDidMount(){
  const  {setCurrentUserAction} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
  const userRef = await createUserProfileDocument(userAuth)

  if(userAuth){

    userRef.onSnapshot(snapshot=>{
        /* this.setState */
        setCurrentUserAction({
            id:snapshot.id,
            ...snapshot.data()
          })
        console.log(this.state)

    })

  }
  else{
    /* this.setState.({currentUser: userAuth},()=>{console.log(this.state.currentUser)}) */
    setCurrentUserAction(userAuth)
  }

  
  
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div className="App">
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header></Header>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUserAction: user =>  dispatch(setCurrentUserAction(user))
})


export default connect(null,mapDispatchToProps)(App);
