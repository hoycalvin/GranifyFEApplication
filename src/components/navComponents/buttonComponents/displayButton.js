import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Overlay } from 'react-bootstrap';

//Renders a options button with overlay

function CustomPopover({ className, style }) {
    return (
      <div
        className={className}
        style={{
          ...style,
          position: 'absolute',
          backgroundColor: '#EEE',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          border: '1px solid #CCC',
          borderRadius: 3,
          marginLeft: -5,
          marginTop: 5,
          padding: 10
        }}
      >
        <form>

            <header> Display Record:</header>
            <label>
                Name: 
                <input type="text" name="name" />
            </label>

            <label>
                Phone Number: 
                <input type="text" name="phone" />
            </label>


            <button onClick> Display Record </button>
        </form>
      </div>
    );
  }
  
export class DisB extends Component {
    constructor(props, context) {
        super(props, context);
  
        this.handleToggle = this.handleToggle.bind(this);
  
        this.state = {
            show: false
        };
    }
  
    handleToggle() {
        this.setState({ show: !this.state.show });
    }
  
    render() {
        return (
            <div style={{ height: 100, position: 'relative' }}>
            <Button
                ref={button => {
                this.target = button;
            }}
                onClick={this.handleToggle}
            >
                Display A Record
            </Button>
  
            <Overlay
                show={this.state.show}
                rootClose={true}
                onHide={() => this.setState({ show: false })}
                placement="bottom"
                container={this}
                target={() => ReactDOM.findDOMNode(this.target)}
            >
                <CustomPopover />
            </Overlay>
        </div>
      );
    }
  }