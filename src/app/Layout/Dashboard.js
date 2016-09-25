/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Info from './Components/Info';
import Paper from 'material-ui/Paper';


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
      width: 900,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Paper
              style={paperStyle}
              zDepth={2}
              children={(
                <Info />
                )}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
