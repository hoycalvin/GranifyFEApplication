import React, { Component } from 'react';
import {AddB} from './buttonComponents/addButton.js';
import {DelB} from './buttonComponents/deleteButton.js';
import {DisB} from './buttonComponents/displayButton.js';
import {DisWindow} from './dataComponents/displayWindow.js';
import {RatioDis} from './dataComponents/ratioDisplay.js';
import {AddDis} from './dataComponents/addDisplay.js';



//import { Link } from 'react-router-dom';

export class NavP extends Component {
  render() {
      
    const navButtons = [<AddB />, <DelB />, <DisB />,
                        <DisWindow/>, <AddDis/>, <RatioDis />];
    const navLinks = navButtons.map(navButton => {
      

        return (
          <a>
            {navButton}
          </a>
        )
   });
   return <nav> {navLinks} </nav>;
  }
}
/*export class NavP extends Component {
    render() {
      return (
        <body>
          <div>
            <AddB />
            <DelB />
            <DisB />
          </div>
         <label onclick>
            <DisWindow />
          </label>
        </body>
      )
    }
  }*/
