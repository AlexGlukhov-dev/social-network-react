import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';


let PostsData = [
  {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'My first post', like : 20, comment : 2, repost : 1, view : 40, id : 1, avaPost : './alex.jpg'},
  {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'Hello world', like : 35, comment : 5, repost : 2, view : 61, id : 2, avaPost : './alex.jpg'},
  {name : 'Lubov Glukhova', data : '28 Okt. 2020', message : 'Lubashka kalabashka', like : 4, comment : 2, repost : 1, view : 43, id : 3, avaPost : './lubaha.jpg'},
  {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I learn react', like : 17, comment : 4, repost : 1, view : 20, id : 4, avaPost : './alex.jpg'},
  {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I know, i will reach the end', like : 62, comment : 3, repost : 9, view : 84, id : 5, avaPost : './alex.jpg'},
  {name : 'Shamil Abdulkerimov', data : '03 Nov. 2020', message : 'I robocop', like : 62, comment : 3, repost : 9, view : 84, id : 6, avaPost : './shamil.jpg'},
  {name : 'Lubov Glukhova', data : '03 Nov. 2020', message : 'I reactive', like : 4, comment : 1, repost : 1, view : 23, id : 7, avaPost : './lubaha.jpg'},
] ;


let PostsElements = PostsData.map(post => <Post key={post.id} name={post.name} data={post.data} message={post.message} like={post.like} comment={post.comment} repost={post.repost} view={post.view} avaPost={post.avaPost}/> 
) ;



const Posts = () => {
    return (
      <div className={classes.posts}>
        <Textarea />
        {PostsElements}
      </div>
    
    );
  }

export default Posts ;  
