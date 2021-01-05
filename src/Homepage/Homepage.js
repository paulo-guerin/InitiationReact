
import React, { Component } from 'react';
import CountClick from '../CountClick/CountClickClass.js';
import CountClickHook from '../CountClick/CountClickHook.js';

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
                <br/>
                <p>Counter with class method</p>
                <CountClick />
                <p>Counter with hook method</p>
                <CountClickHook/>
            </div>
        )
        
    }
    logOut(){
        document.location = "/logOut";
    }
}