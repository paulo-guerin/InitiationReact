import React, { Component } from 'react';

export default class LogIn extends Component {
    render() {
        return(
            <div>
                <label>
                    Username :
                    <input type="text" id="loginField" name="userName" />
                </label>
                <label>
                    Password :
                    <input type="text" name="password" />
                </label>
                <input onClick = {this.submitLogInForm} type="submit" value="LogIn" />
            </div>
        )
    }

    submitLogInForm(){
        localStorage.setItem('login', document.getElementById("loginField").value);
        document.location = "/homepage";
    }
}
