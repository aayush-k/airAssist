/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from "react-router";

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const bLabel = "Sign In";


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }


  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>AirAssist</h1>
          <h1>[insert logo image from ./images/aalogo.svg]</h1>
          {this.props.children}
          <Link to="dashboard">
            <RaisedButton
            label={bLabel}
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          </Link>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
