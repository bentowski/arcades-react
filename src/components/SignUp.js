import React from 'react';

const SignUp = (props) => {
    return (
      <div className="SignUp">
        <h3>Sign Up</h3>
        <form onSubmit={props.click}> {/*change le state de App.js de "Up" à "registered" // TODO: passer par une étape de verification*/}
            <p><label htmlFor="username"></label>
                <input type="text" placeholder="Username" name="username" id="username" required/> {/* TODO: verifier que le nom est unique*/}
            </p>
            <p><label htmlFor="password"></label>
                <input type="password" placeholder="Password" name="password" id="password" required/> {/* TODO: imposer un minimum*/}
            </p>
            <p><label htmlFor="mail"></label>
                <input type="text" placeholder="mymail@example.com" name="mail" id="mail" required/> {/* TODO: imposer une structure mail*/}
            </p>
            <p>
                <input type="submit" value="register"/>
            </p>
        </form>
      </div>
    );
}

export default SignUp;
