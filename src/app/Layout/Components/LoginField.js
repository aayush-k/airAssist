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
          <h2>Welcome</h2>
          <TextField
            floatingLabelText="Last Name"
          />
          <br />
          <TextField
            floatingLabelText="Seat Number"
          />
          <br/>
        </div>
      );
    }
}
