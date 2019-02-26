import React, { Component } from 'react';
import isEmpty from "../../utils/is-empty";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio'; 
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class CollapseRadio extends Component {
    constructor(props){
      super(props);
        this.state={
          isOpen:false,
          value: '0'
        }
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    onCheck = id => () => {
      const {checked}    = this.state;
      let newChecked     = [...checked];
      const currentIndex = checked.indexOf(id);

      currentIndex === -1 ? newChecked = [...newChecked, id] : newChecked = newChecked.slice(1, currentIndex);
      this.setState({checked:newChecked})
    }

    onChange = e => this.setState({value: e.target.value});

    renderList = () => (
      !isEmpty(this.props.lists)
      ? this.props.lists.map((value)=>(
        <FormControlLabel
            key={value._id}
            value={`${value._id}`}
            label={value.name}
            control={<Radio/>}
            style={{margin: '0'}}
        />
        
      ))
      :null
    )

  render() {
    return (
      <div className="collapse-items-wrapper">
      <List style={{borderBottom: '1px solid #dbdbdb'}}>
        <ListItem button onClick={this.handleClick} style={{padding:'10px 23px 10px 0'}}>
          <ListItemText inset className="collapse-title" primary={this.props.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <RadioGroup
            name={this.props.name}
            value={this.state.value}
            onChange={this.onChange}>
            {this.renderList()}
          </RadioGroup>
          </List>
        </Collapse>
      </List>
      </div>
    )
  }
}

export default CollapseRadio;