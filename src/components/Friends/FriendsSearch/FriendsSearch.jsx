import React from 'react';
import classes from './FriendsSearch.module.css' ;

const FriendsSearch = (props) => {

    let SearchElement = React.createRef();
    
    let search = () => {
      props.search();
        
    }
    
    let onSearchChange = () => {
      let text = SearchElement.current.value;
      props.updateSearchText(text);
    }

    return (
      <div className={classes.FriendsSearch}>
        <div className={classes.form}>
          <div>
            <textarea onChange={onSearchChange} ref={SearchElement} cols='50' placeholder="enter friend's name...." className={classes.new_feed} value={props.friendsSearchText} />
          </div>
          <div className={classes.btns}>
            <div>
              <button onClick={search} className={classes.btn}>Search</button>
            </div>
          </div>   
        </div>
      </div>
    );
  }

export default FriendsSearch ;  
