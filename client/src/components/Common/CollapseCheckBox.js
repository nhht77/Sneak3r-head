import React, { Component } from 'react';
import isEmpty from "../../utils/is-empty";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';


class CollapseCheckBox extends Component {
    constructor(props){
      super(props);
        this.state={
          isOpen:false,
          isData: !isEmpty(props.lists),
          checked: []
        }
    }

    componentDidMount = () => {
      if(!isEmpty(this.props.lists)){
        console.log(this.props.lists)
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
      console.log(this.state.checked)
    }

    renderList = () => (
      this.state.isData 
      ? this.props.lists.map((value)=>(
        <ListItem key={value._id} style={{padding:'10px 0'}}>
          <ListItemText primary={value.name}/>
          <Checkbox 
              value={value._id}
              checked={this.state.checked.indexOf(value._id) !== -1}
              onChange={this.onCheck(value._id)}/>
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
          <List component="div" disablePadding>
          {this.renderList()}
          </List>
        </Collapse>
      </List>
      </div>
    )
  }
}

export default CollapseCheckBox;