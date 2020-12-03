import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../../redux/messages_reducer';
import Dialog from './Dialog';



const DialogContainer = props => {
 
  let state = props.store.getState();


  const addMessage = () => {
    let action = addMessageActionCreater();
    props.store.dispatch(action);
  }

  const onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreater(text); 
    props.store.dispatch(action);
  }


  return (
    <Dialog addMessage={addMessage} 
      updateNewMessageText={onMessageChange} 
      newMessageText={state.messagesPage.newMessageText} 
      messagesData={state.messagesPage.messages}
    />
  )
}    

export default DialogContainer ;  