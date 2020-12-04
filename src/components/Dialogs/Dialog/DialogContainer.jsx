
import { connect } from 'react-redux';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../../redux/messages_reducer';
import Dialog from './Dialog';




let mapStateToProps = (state) => {
  return {
    newMessageText : state.messagesPage.newMessageText,
    messagesData : state.messagesPage.messages
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText : (text) => {
      dispatch(updateNewMessageTextActionCreater(text));
    },
    addMessage : () => {
      dispatch(addMessageActionCreater());
    }
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer ;  