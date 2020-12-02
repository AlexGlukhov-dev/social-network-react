import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post'






const Posts = (props) => {
    


  let PostsElements = props.postsData.map(post => <Post key={post.id} name={post.name} data={post.data} message={post.message} like={post.like} comment={post.comment} repost={post.repost} view={post.view} avaPost={post.avaPost}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
      
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.posts}>
      <div className={classes.form}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} cols='50' placeholder='write what you have new....' className={classes.new_feed} value={props.newPostText} />
        </div>
        <div className={classes.btns}>
          <div>
            <button onClick={onAddPost} className={classes.btn}>Submit</button>
          </div>
        </div>   
      </div>
      {PostsElements}
    </div>
 
  );
}

export default Posts ;  
