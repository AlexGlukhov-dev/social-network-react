import React from 'react';
import classes from './Friend.module.css' ;



const Friend = (props) => {
  
    return (
      <div className={classes.container}>
        <div className={classes.friendLink}>
          <a href='/friends'>Friends</a>
          <span className={classes.friends_caunt}> : 10{props.all_count}</span>
        </div>
        <div className={classes.All_friends}>
          <div >
            <img className={classes.img} src="./lubaha.jpg" alt="images"/>
            <p className={classes.friends_name}>Luba</p>
          </div>
          <div ><img className={classes.img} src="./shamil.jpg" alt="images"/></div>
          <div ><img className={classes.img} src="./jora.jpg" alt="images"/></div>
          
        </div>
      </div>
    );
  }

export default Friend ;  
