import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
import { fetchFromApi } from "../api";



const AccountForm = ({setToken, setUser }) => {
  const {actionType} = useParams()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();


    const requestBody = {
        user: {
            username,
            password
          }
    }

 

    const data = await fetchFromApi({
      endPoint: actionType,
      method: 'post',
      body: requestBody
    })
    console.log(data);
    
    const {token} = data
    if (token){
      const data = await fetchFromApi({
        endPoint: 'user',
        token,
      })
      const user = data.user;
      if (user){
        setUsername("")
        setPassword("")
        setToken(token)
        setUser(user)
      }
      console.log(user)
    }

  };

  return (
    <>
      <h1>{actionType==="register"? "Sign Up": "Log In"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserName">Username</label>
          <input
            name="Username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">{actionType==='register'?'Register':'Login'}</button>
        {actionType==='register'
        ?<Link to="/profile/login">Have an Account? Sign In</Link>
        :<Link to="/profile/register">Need an Account? Register Here!</Link>}
        </form>
    </>
  );
};
export default AccountForm;
