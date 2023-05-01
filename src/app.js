import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import {
    Posts,
    AccountForm
} from './components';



const App = () => {
  const[token,setToken] = useState(null);
  const[user, setUser] = useState(null);

  useEffect(()=>{
    console.log('token: '+ token)
    console.log('user: '+ user) 
  },[token,user])


  return (
    <><nav>
      <Link to="/">Home</Link>|
      <Link to="/profile/login">Log In</Link>|
      <Link to="/posts">Posts</Link>

      </nav>
      <Route exact path="/">
        <h1>Welcome</h1>
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route exact path="/profile">
        <h1>My Profile</h1>
      </Route>
      <Route path="/profile/:actionType">
        <AccountForm setToken={setToken} setUser={setUser}/>
      </Route>
    </>
  );
};

export default App;
