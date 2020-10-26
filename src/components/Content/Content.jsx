import React from 'react';
import classes from './Content.module.css' ;


const Content = () => {
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.ava_img}>
            <img src='https://msk.islandgift.ru/user/standard/man.png' />
          </div>
          <div className={classes.profile} >
            <p>Alex Glukhov</p>
            <ul> 
              <li>Date of birth : 06 may 1993</li>
              <li>City : Ivanovo</li>
              <li>Education : <span>«Ivanovo State Power Engineering University»</span></li>
              <li>web-site : <a href='https://github.com/Alexander-Sergeevich-Glukhov' target='_blank'>my GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className={classes.content_feed}>
            <div className={classes.new__post}>
              <div className={classes.form}>
                <form method='get'>
                  <textarea  cols='40' placeholder='write what you have new' className={classes.new_feed}></textarea>
                  <button>Submit</button>
                </form>
              </div>
              
              <div className={classes.post}>New Post</div>
              <div className={classes.old_posts}>
                <p>Old Post</p>

              </div>
            </div>
          </div>
      </div>
    );
  }

export default Content ;  
