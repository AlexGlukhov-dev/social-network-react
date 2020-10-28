import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';


const Posts = () => {
    return (
      <div className={classes.posts}>
        <Textarea />
        <Post message='My first post' like='20' comment='2' repost='1' view='40'/> 
        <Post message='Hello world' like='35' comment='1' repost='5' view='61'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>    
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/>
        <Post message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21'/> 
      </div>
    
    );
  }

export default Posts ;  
