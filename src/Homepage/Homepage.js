
import React, { Component } from 'react';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let userName = localStorage.getItem('login');
        return(
            
            <div>
                <button onClick = {this.logOut}>Logout</button>
                <h1>Homepage</h1>
                <span>User name: </span>
                <span>
                    {
                        userName
                    }
                </span>
            </div>
        )
    }
    logOut(){
        document.location = "/logOut";
    }
}