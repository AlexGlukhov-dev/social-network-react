import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';


const Posts = () => {
    return (
      <div className={classes.posts}>
        <Textarea />
        <Post name='Alex Glukhov' data='28 Okt. 2020' message='My first post' like='20' comment='2' repost='1' view='40' /> 
        <Post name='Alex Glukhov' data='28 Okt. 2020' message='Hello world' like='35' comment='1' repost='5' view='61' />
        <Post name='Lubov Glukhova' data='28 Okt. 2020' message='Lubashka kalabashka' like='12' comment='4' repost='1' view='21' />  
        <Post name='Alex Glukhov' data='29 Okt. 2020' message='I learn react' like='17' comment='8' repost='4' view='3' />
        <Post name='Alex Glukhov' data='29 Okt. 2020' message='I know, i will reach the end' like='62' comment='3' repost='2' view='25' />  
      </div>
    
    );
  }

export default Posts ;  
