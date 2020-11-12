import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText } from './redux/state';











let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter >
            <React.StrictMode>
                <App state={state} 
                     addedPost={addPost} 
                     updateNewPostText={updateNewPostText} 
                     addedMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(state)

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
