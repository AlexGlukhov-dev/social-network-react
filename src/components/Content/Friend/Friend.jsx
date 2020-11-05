import React from 'react';
import classes from './Friend.module.css' ;



const Friend = (props) => {
  
    return (
      <div className={classes.container}>
        <div className={classes.friendLink}>
          <a href='/friends'>Friends</a>
          <span className={classes.friends_caunt}> : 10{props.all_count}</span>
        </div>
        <div className={classes.all_friends}>
          <div className={classes.friends_row_one}>
            <div >
              <img className={classes.img} src="./lubaha.jpg" alt="images"/>
              <p className={classes.friends_name}>Luba</p>
            </div>
            <div >
              <img className={classes.img} src="./shamil.jpg" alt="images"/>
              <p className={classes.friends_name}>Shamil</p>
            </div>
            <div >
              <img className={classes.img} src="./jora.jpg" alt="images"/>
              <p className={classes.friends_name}>Jora</p>
            </div>
          </div>
          <div className={classes.friends_row_two}>
            <div >
              <img className={classes.img} src="./leha.jpg" alt="images"/>
              <p className={classes.friends_name}>Leha</p>
            </div>
            <div >
              <img className={classes.img} src="./vlad.jpg" alt="images"/>
              <p className={classes.friends_name}>Vlad</p>
            </div>
            <div >
              <img className={classes.img} src="./andrey.jpg" alt="images"/>
              <p className={classes.friends_name}>Andrey</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Friend ;  
