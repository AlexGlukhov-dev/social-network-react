import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = props => {


  let newPostElement = React.createRef();

  let addedPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={classes.form}>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} cols='50' placeholder='write what you have new....' className={classes.new_feed} value={props.newPostText} />
          </div>
          <div className={classes.btns}>
            <div>
              <button onClick={addedPost} className={classes.btn}>Submit</button>
            </div>
          </div>
          
      </div>
    );
  }

export default Textarea ;  
