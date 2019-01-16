import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ticker extends Component{
    constructor(props){
        super(); //props?
        this.state = {count:props.count};

        this.incrementCount = this.incrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount(){
        this.setState({count: this.state.count + 1});  
    }

    resetCount(){
        this.setState({count: 0});
    }

    decrementCount(){
        this.setState({count: this.state.count - 1});
    }

    render(){
        return(
            <div className="container">
                    <div className="counter bg-light rounded">
                        {this.state.count}
                    </div>

                    <div className="btn btn-success" onClick={this.incrementCount}></div>

                    <div className="btn btn-warning" onClick={this.resetCount}></div>

                    <div className="btn btn-danger" onClick={this.decrementCount}></div>

            </div>
        );
    }
}

Ticker.propTypes ={
    count : PropTypes.number
};

Ticker.defaultProps={
    count : 0   
};

export default Ticker;