import React from 'react';

const SignUp = (props) => {
    return (
      <div className="SignUp">
        <h3>Sign Up</h3>
        <form onSubmit={props.click}>
            <p><label htmlFor="username"></label>
                <input type="text" placeholder="Username" name="username" id="username" required/>
            </p>
            <p><label htmlFor="password"></label>
                <input type="password" placeholder="Password" name="password" id="password" required/>
            </p>
            <p><label htmlFor="mail"></label>
                <input type="text" placeholder="mymail@example.com" name="mail" id="mail" required/>
            </p>
            <p>
                <input type="submit" value="register"/>
            </p>
        </form>
      </div>
    );
}

export default SignUp;
