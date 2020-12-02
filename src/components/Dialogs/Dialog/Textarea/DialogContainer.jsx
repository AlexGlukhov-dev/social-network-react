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
 
  
    return (<);
}

export default Textarea ; 