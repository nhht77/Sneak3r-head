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
      <List style={{borderBottom: '1px solid #dbdbdb'}}>
        <ListItem button onClick={this.handleClick} style={{padding:'10px 23px 10px 0'}}>
                <ListItemText inset primary="Some text" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText inset primary="Some text" />

                  </ListItem>
                </List>
              </Collapse>
          </List>
      </div>
    )
  }
}

export default CollapseCheckBox