import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = () => {

  let newPostElement = React.createRef();
  let addPost = () => {
    let post = newPostElement.current.value;
    alert(post);
  }

    return (
      <div className={classes.form}>
          <div>
            <textarea ref={newPostElement} cols='50' placeholder='write what you have new....' className={classes.new_feed}></textarea>
          </div>
          <div className={classes.btns}>
            <div>
              <button onClick={addPost} className={classes.btn}>Submit</button>
            </div>
          </div>
          
      </div>
    );
  }

export default Textarea ;  
