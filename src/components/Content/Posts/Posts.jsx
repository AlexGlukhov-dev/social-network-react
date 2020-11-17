import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';





const Posts = props => {
    
    let PostsElements = props.postsData.map(post => <Post key={post.id} name={post.name} data={post.data} message={post.message} like={post.like} comment={post.comment} repost={post.repost} view={post.view} avaPost={post.avaPost}/> 
    ) ;

    return (
      <div className={classes.posts}>
        <Textarea newPostText={props.newPostText}
                  dispatch={props.dispatch}
        />
        {PostsElements}
      </div>
    
    );
  }

export default Posts ;  
