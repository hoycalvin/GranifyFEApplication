import React, { Component } from 'react';

/*function rCounter(){
    this.counter += 1;
}*/

export class RatioDis extends Component {
    constructor(props,context){
        super(props,context);
        this.counter = 0;
    }


    render(){
    return(
        <label>Ratio of Records Added per Hour/ Deleted per hour: <br/> </label> //{rCounter}
        )
    }
}