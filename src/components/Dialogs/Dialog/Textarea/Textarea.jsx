import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = (props) => {
  const element = React.createRef() ;

  const addPost = () => {
    //props.addMessage() ;
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  const onMessageChange = () => {
    let text = element.current.value;
    //props.updateNewMessageText(text);
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }
 
  
    return (
      <div className={classes.textarea}>
        <div className={classes.texts}>
          <textarea ref={element} cols='80' rows='1' placeholder='write what you have new...' className={classes.new_feed}
                    onChange={onMessageChange} value={props.newMessageText}/>
        </div>
        <div className={classes.btns}>
          <button onClick={addPost} className={classes.btn} >Submit</button>
        </div>   
      </div>
    );
  }

export default Textarea ; 