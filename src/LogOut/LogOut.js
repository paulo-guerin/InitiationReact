import React, { Component } from 'react';

export default class LogOut extends Component {
    render() {
        localStorage.removeItem('login');
        return(
            <div>
                <p>Logged out successfully</p>
                <button onClick = {this.logIn}>Login</button>
            </div>
        )
    }

    logIn(){
        document.location = "/";
    }
}
