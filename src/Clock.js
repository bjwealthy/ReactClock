import React from 'react';
//changing state as time changes:
class Clock extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            time: new Date().toLocaleString()
        };
        this.updateClock = this.updateClock.bind(this);
    }
    componentDidMount(){
        this.intervalID = setInterval(
            () => this.updateClock(), 1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    updateClock(){
        //console.log(this);
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render(){
        return(
            <p className="App-clock">
                The time is {this.state.time}.
            </p>
        );
    }
}
export default Clock;


/*
let time = new Date().toLocaleTimeString();
class Clock extends React.Component{
    render() {
        return (
            <p>
                The time is {time};
            </p>
        );
    }
}
export default Clock;
*/