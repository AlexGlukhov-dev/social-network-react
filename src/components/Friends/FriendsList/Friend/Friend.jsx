import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css' ;

const Friend = (props) => {
    return (
      <div className={classes.friend}>   
        <div>
            
            <NavLink to={`/message/${props.id}`} activeClassName={classes.selected}>
                <img src={props.img_id} alt='images' className={classes.img} />
                <span className={classes.name}>{props.name}</span>
            </NavLink>
        </div>
          
      </div>
    );
  }

export default Friend;  