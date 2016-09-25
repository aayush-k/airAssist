import React from 'react';
import ReactDom from "react-dom";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginField extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
        <div>
          <h2>Welcome to React, Aayush</h2>
          <TextField
            hintText="Last Name"
          />
          <br />
          <TextField
            hintText="Seat Number"
          />
          <br />
          <RaisedButton
            label="Sign In"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      );
    }
}
