import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = () => {

  let newMessage = React.createRef(); 
  let addMessage = () => {
      let test = newMessage.current.value ;
      alert(test) ;
  }
    return (
      <div className={classes.textarea}>
        <div className={classes.texts}>
          <textarea ref={newMessage} cols='80' rows='1' placeholder='write what you have new...' className={classes.new_feed}></textarea>
        </div>
        <div className={classes.btns}>
          <button onClick={addMessage} className={classes.btn} >Submit</button>
        </div>   
      </div>
    );
  }

export default Textarea ; 