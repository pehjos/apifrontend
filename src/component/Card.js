import React, { useState } from 'react';
import { GeoAltFill, Heart, HeartFill, HeartHalf } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import { likePost } from '../actions/posts';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router'
import './card.css'
import {
  Link,
} from 'react-router-dom'
import { FavoriteBorderOutlined,Favorite, } from '@mui/icons-material'
function Card({town,img,title,price,post,setCurrentId}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);
const history=useNavigate()
  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><Favorite styles={{color:'tomato'}} fontSize="small" /> </>
        ) : (
          <><FavoriteBorderOutlined  styles={{color:'tomato'}} fontSize="small" /></>
        );
    }

    return <><FavoriteBorderOutlined styles={{color:'tomato'}} fontSize="small" /></>;
  };
  const openPost = (e) => {
    history(`/details/${post._id}`);
  };
  return (
    <div className='card'>
    
 <div className='card_img'>
   <div className='heart'>
   <button size="small"  disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </button>
 </div>
<img src={img}/>

 </div>

 
 <div className='card__footer' onClick={openPost} >
 <div className='card__footer_location'>
 <GeoAltFill color='tomato'/>
<p>{town}</p>
</div>
<div className='card__footer_last'>
<p style={{color:"gray"}}>{title}</p>
<p style={{color:"tomato"}}>₵{price}/M</p>
</div>
 </div>

    </div>
  )
}

export default Card