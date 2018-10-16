import React,  { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import {RowB} from './rowButton.js';

//renders a scrollable List display window for elements

export class DisWindow extends Component{
    
    render(){
        
const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    
    Row {index}
    <RowB 
      style={{position:'right'}}/>
      
  </div>
);

const DisWin = () => (
  
  
  <List
    className="List"
    style = {{backgroundColor: 'lightgrey'}}
    height={150}
    itemCount={100} //would actually be amount_of_matches.length
    itemSize={35}
    width={600}
    
  >
    {Row}
    
  </List>
);
    return(<DisWin/>);
}
}
