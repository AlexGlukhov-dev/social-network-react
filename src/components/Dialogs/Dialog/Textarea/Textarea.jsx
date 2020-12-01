import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../../../redux/messages_reducer';
import classes from './Textarea.module.css' ;




const Textarea = (props) => {
  const element = React.createRef() ;

  const addMessage = () => {
    //props.addMessage() ;
    let action = addMessageActionCreater();
    props.dispatch(action);
  }

  const onMessageChange = () => {
    let text = element.current.value;
    //props.updateNewMessageText(text);
    let action = updateNewMessageTextActionCreater(text); 
    props.dispatch(action);
  }
 
  
    return (
      <div className={classes.textarea}>
        <div className={classes.texts}>
          <textarea ref={element} cols='80' rows='1' placeholder='write what you have new...' className={classes.new_feed}
                    onChange={onMessageChange} value={props.newMessageText}/>
        </div>
        <div className={classes.btns}>
          <button onClick={addMessage} className={classes.btn} >Submit</button>
        </div>   
      </div>
    );
  }

export default Textarea ; 