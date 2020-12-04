import React from 'react';
import classes from './Dialog.module.css' ;
import Item from './Item/Item';




const Dialog = props => {
  debugger;
  let DialogElemets = props.messagesData.map((dialog) => <Item key={dialog.id} message={dialog.message} id={dialog.id}/>);

  const element = React.createRef() ;

  const addMessage = () => {
    props.addMessage();
  }

  const onMessageChange = () => {
    let text = element.current.value;
    props.updateNewMessageText(text);  
  }
 
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogarea}>
        {DialogElemets}
      </div>

      <div className={classes.textarea}>
        <div className={classes.texts}>
          <textarea ref={element} cols='80' rows='1' placeholder='write what you have new...' className={classes.new_feed}
                    onChange={onMessageChange} value={props.newMessageText}/>
        </div>
        <div className={classes.btns}>
          <button onClick={addMessage} className={classes.btn} >Submit</button>
        </div>   
      </div>
    </div>
  );
}

export default Dialog;  
