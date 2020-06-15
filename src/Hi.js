import React, { Component } from 'react';
import './Hi.css';


class  Hi extends Component {

    render(){
        return (
            <div className = "f1 tc">
                <h1>Hello World</h1>
        <p>{this.props.me}</p>
            </div>
            
        );
    }

}

export default Hi;