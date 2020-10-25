import React from 'react';


const Content = () => {
    return (
      <div className='container'>
        <div className='content'>
          <div className='ava_img'>
            <img src='https://msk.islandgift.ru/user/standard/man.png' />
          </div>
          <div className='profile' >
            <p>Alex Glukhov</p>
            <ul> 
              <li>Date of bridg : 06 may 1993</li>
              <li>City : Ivanovo</li>
              <li>Education : ИГЭУ им. В.И.Ленина (2016-2021)</li>
              <li>web-site : <a href='https://github.com/Alexander-Sergeevich-Glukhov' target='_blank'>my GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className='content_feed'>
            <div className='new__post'>
              <form method='get'>
              <input type='text' />
              <button>Submit</button>
              </form>
              <div className='post'>New Post</div>
              <div className='old_posts'>
                <p>Old Post</p>

              </div>
            </div>
          </div>
      </div>
    );
  }

export default Content ;  
