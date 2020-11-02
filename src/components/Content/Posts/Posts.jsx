import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';


let PostsData = [
  {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'My first post', like : 20, comment : 2, repost : 1, view : 40, id : 1},
  {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'Hello world', like : 35, comment : 5, repost : 2, view : 61, id : 2},
  {name : 'Lubov Glukhova', data : '28 Okt. 2020', message : 'Lubashka kalabashka', like : 4, comment : 2, repost : 1, view : 43, id : 3},
  {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I learn react', like : 17, comment : 4, repost : 1, view : 20, id : 4},
  {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I know, i will reach the end', like : 62, comment : 3, repost : 9, view : 84, id : 5},
] ;


const Posts = () => {
    return (
      <div className={classes.posts}>
        <Textarea />
        <Post name={PostsData[0].name} data={PostsData[0].data} message={PostsData[0].message} like={PostsData[0].like} comment={PostsData[0].comment} repost={PostsData[0].repost} view={PostsData[0].view} /> 
        <Post name={PostsData[1].name} data={PostsData[1].data} message={PostsData[1].message} like={PostsData[1].like} comment={PostsData[1].comment} repost={PostsData[1].repost} view={PostsData[1].view}  />
        <Post name={PostsData[2].name} data={PostsData[2].data} message={PostsData[2].message} like={PostsData[2].like} comment={PostsData[2].comment} repost={PostsData[2].repost} view={PostsData[2].view}  />  
        <Post name={PostsData[3].name} data={PostsData[3].data} message={PostsData[3].message} like={PostsData[3].like} comment={PostsData[3].comment} repost={PostsData[3].repost} view={PostsData[3].view}  />
        <Post name={PostsData[4].name} data={PostsData[4].data} message={PostsData[4].message} like={PostsData[4].like} comment={PostsData[4].comment} repost={PostsData[4].repost} view={PostsData[4].view}  />  
      </div>
    
    );
  }

export default Posts ;  
