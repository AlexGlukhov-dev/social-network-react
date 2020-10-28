import React from 'react';
import classes from './Post.module.css' ;



const Post = (props) => {
    return (
      <div className={classes.post}>
        <img src='https://i02.fotocdn.net/s103/c95421a86eb8f1a8/user_xl/2183448216.jpg'/>
        <span >Alex Glukhov</span>
        <p className={classes.message}> {props.message} </p>
        <p className={classes.bb}></p>
        <div className={classes.icon}>
          <div className={classes.like}> <img src='https://icon-icons.com/icons2/2073/PNG/32/heart_like_love_twitter_icon_127132.png' /> <span>{props.like}</span></div>
          <div className={classes.comment}> <img src='https://icon-icons.com/icons2/1946/PNG/32/1904663-bubble-chat-comment-communication-message-talk-text_122514.png' /> <span>{props.comment}</span></div>
          <div className={classes.repost}> <img src='https://icon-icons.com/icons2/1875/PNG/32/share_120219.png' /> <span>{props.repost}</span></div>
          <div className={classes.view}> <img src='https://icon-icons.com/icons2/1456/PNG/32/mbripreview_99511.png' /> <span>{props.view}</span></div>
        </div>
      </div>
    );
  }

export default Post ;  
