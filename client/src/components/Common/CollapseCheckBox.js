import React, { Component } from 'react';
import isEmpty from "../../utils/is-empty";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class CollapseCheckBox extends Component {
    constructor(props){
      super(props);
        this.state={
          isOpen:false,
          isData: !isEmpty(props.lists),
          checked: []
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
      this.setState({checked:newChecked});
      this.props.onFilter(newChecked);
    }

    renderList = () => (
      !isEmpty(this.props.lists)
      ? this.props.lists.map((value)=>(
        <ListItem style={{padding:"0", paddingBottom:"11px"}} key={value._id}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={this.state.checked.indexOf(value._id) !== -1}
                onChange={this.onCheck(value._id)}/>}
                label={value.name}
                style={{ display: "flex", width: "70%", margin:"0"}}/>
        </ListItem>))
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
        <FormGroup>
          <List component="div" disablePadding>
          {this.renderList()}
          </List>
        </FormGroup>
        </Collapse>
      </List>
      </div>
    )
  }
}

export default CollapseCheckBox;