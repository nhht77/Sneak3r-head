import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export class CollapseCheckBox extends Component {
    state={
        isOpen:false
    }
    
    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

  render() {
    return (
      <div className="collapse-items-wrapper">
      <List>
        <ListItem button onClick={this.handleClick}>
                <ListItemText inset primary="Some text" />
                Some text here
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText inset primary="Some text" />

                    some text here
                  </ListItem>
                </List>
              </Collapse>
          </List>
      </div>
    )
  }
}

export default CollapseCheckBox