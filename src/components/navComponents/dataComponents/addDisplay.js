import React, { Component } from 'react';

/*function rCounter(){
    this.counter += 1;
}*/

export class AddDis extends Component {
    constructor(props,context){
        super(props,context);
        this.counter = 0;
    }


    render(){
    return(
        <label>Average Records Added per Hour: <br/></label> //{rCounter}
        )
    }
}