import React from 'react';

const SignIn = (props) => {
    return (
      <div className="SignIn">
        <h3>Sign In</h3>
          <form onSubmit={props.click}> {/*change le state de App.js de "In" à "check"*/}
              <p><label htmlFor="username"></label>
                  <input type="text" placeholder="Username" name="username" id="username" required/>
              </p>
              <p><label htmlFor="password"></label>
                  <input type="password" placeholder="Password" name="password" id="password" required/>
              </p>
              <p>
                  <input type="submit" value="register"/>
              </p>
          </form>
      </div>
    );
}

export default SignIn;
