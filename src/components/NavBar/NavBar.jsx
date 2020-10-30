import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css' ;

const NavBar = () => {
    return (
      <nav className={classes.nav_bar}>
            <div>
              <NavLink to='/profile' activeClassName={classes.selected}>
                <span>Profile</span>
                <span>Profile</span>
              </NavLink>
            </div>
            <div>
              <NavLink to='/message' activeClassName={classes.selected}>
                <span>Message</span>
                <span>Message</span>
              </NavLink>
            </div>
            <div>
              <NavLink to='/friends' activeClassName={classes.selected}>
                <span>Friends</span>
                <span>Friends</span>
              </NavLink>
            </div>
            <div>
              <NavLink to='/music' activeClassName={classes.selected}>
                <span>Music</span>
                <span>Music</span>
              </NavLink>
            </div>
            <div>
              <NavLink to='/feeds' activeClassName={classes.selected}>
                <span>News</span>
                <span>News</span>
              </NavLink>
            </div>
            <div>
              <NavLink to='/settings' activeClassName={classes.selected}>
                <span>Settings</span>
                <span>Settings</span>
              </NavLink>
            </div>

      </nav>
    );
  }

export default NavBar ;  
