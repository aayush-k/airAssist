import React from 'react';
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';


import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';


const name = "Aayush"

export default class Info extends React.Component {


    constructor(props) {
      super(props);
      this.state = {value: 1};
    }

    handleChange(event, index, value){
      this.setState({value});
    }

    render() {
      return (
        <div>
          <h2>Hi there, {name}!</h2>
          <h1>How may we help you?</h1>
          <br />

          <List>
            <ListItem
              primaryText="Order Beverage"
              secondaryText={
                <p>
                  Pending
                </p>
              }
            />
            <ListItem
              primaryText="Order Beverage"
              secondaryText={
                <p>
                  Pending
                </p>
              }
            />
            <ListItem
              primaryText="Order Beverage"
              secondaryText={
                <p>
                  Pending
                </p>
              }
            />

          </List>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
            <MenuItem value={1} primaryText="Order Beverage" />
            <MenuItem value={2} primaryText="Order Blankets" />
            <MenuItem value={3} primaryText="Order Sprite" />
            <MenuItem value={4} primaryText="Order Coke" />
            <MenuItem value={5} primaryText="Order " />
          </DropDownMenu>
        </div>
      );
    }
}
