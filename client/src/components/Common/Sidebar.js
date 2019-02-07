import { connect } from 'react-redux';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
            <div className="user-left-nav">
            <h2>My account</h2>
            <div className="links">
                <Link to="/user/dashboard">My account</Link>
                <Link to="/user/profile">User information</Link>
                <Link to="/user/cart">My Cart</Link>
            </div>
            { 
                //  Check if Logged-in User is Admin
                 this.props.auth.user.role === 1 
                 ? 
                 <div>
                     <h2>Admin</h2>
                     <div className="links">
                         <Link to="/admin/site-info">Site Info</Link>
                         <Link to="/admin/add-product">Add products</Link>
                         <Link to="/admin/manage-categories">My Manage categories</Link>
                         <Link to="/admin/add-file">Upload file</Link>
                         
                     </div>
                 </div> 
                 : null
             }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(Sidebar);

