import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import { returnStatement } from '@babel/types';

/*
function handleClick(){
    console.log('Clicked!');
}
*/
class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foo: 'Click me'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            foo: 'bar'
        });
        console.log('Clicked!');
        
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}
export default MyComponent;