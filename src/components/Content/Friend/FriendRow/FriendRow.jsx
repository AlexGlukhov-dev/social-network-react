import React from 'react';
import classes from './FriendRow.module.css' ;
import FriendComp from './FriendComp/FriendComp';


const FriendRow = () => {

  let fr = [
    {imgUrl: './lubaha.jpg', name: 'Lubaha'},
    {imgUrl: './shamil.jpg', name: 'Shamil'},
    {imgUrl: './jora.jpg', name: 'Georgy'},
    {imgUrl: './leha.jpg', name: 'Alexey'},
    {imgUrl: './vlad.jpg', name: 'Vladislav'},
    {imgUrl: './andrey.jpg', name: 'Andrey'}
    ] ;

  let friendElement = fr.map(element => <FriendComp imgUrl={element.imgUrl} name={element.name}/>);
  
    return (
      <div className={classes.all_friends}>
        {friendElement}
      </div>
    );
  }

export default FriendRow ;  
