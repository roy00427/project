import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
 
export default class Header extends Component{
     
    render(){
        return (
            <React.Fragment>
                 <NavLink to="/">Users</NavLink>
			     <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                
            </React.Fragment>
        )
    }
}