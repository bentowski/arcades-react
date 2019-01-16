import React from 'react';

const SignIn = (props) => {
    return (
      <div className="SignIn">
      <h3>Sign In</h3>
      <p>username : <input type="text"></input></p>
      <p>password : <input type="text"></input></p>
      <button onClick={props.click}>validation</button>
      </div>
    );
}

export default SignIn;
