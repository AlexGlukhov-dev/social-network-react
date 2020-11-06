import React from 'react';
import classes from './FriendRow.module.css' ;
import FriendComp from './FriendComp/FriendComp';


const FriendRow = (props) => {

  let friendElement = props.friends.map(element => <FriendComp key={element.id} imgUrl={element.imgUrl} name={element.name}/>);
  
    return (
      <div className={classes.all_friends}>
        {friendElement}
      </div>
    );
  }

export default FriendRow ;  
