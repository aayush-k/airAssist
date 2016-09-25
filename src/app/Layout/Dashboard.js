/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Info from './Components/Info';
import Sidebar from './Components/Sidebar'
import Paper from 'material-ui/Paper';
import Grid from 'react-bootstrap/lib/Grid';

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  render() {


    const paperStyle = {
      width: 1000,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          
          <div class="col-sm-8 col-md-8 col-lg-8">
            <Paper
              style={paperStyle}
              zDepth={2}
              children={(
                <Info />
              )}
            />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <h2>Flight Attendants Onboard</h2>
              <h3>John Smith</h3>
            </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
