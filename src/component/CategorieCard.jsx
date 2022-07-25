import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../actions/posts';
import { FavoriteBorderOutlined,Favorite, PriceCheckOutlined, } from '@mui/icons-material'
import { Building, EyeFill, Heart, House } from 'react-bootstrap-icons'
import './categories.css'
import {Link} from 'react-router-dom'
function Categories({post,img}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

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



  return (
    <div className='categories'>

<div className='main_houses_all' >
<div className='categories_content' >
    <img src={img}/>
 <div className='buttons' >
 <div className='heart'>
                        <button size="small" disabled={!user?.result} onClick={handleLike}>
                            <Likes />
                        </button>
                    </div>
 <Link to ="/details">
 <EyeFill size={20} className='m_icon'/> 
 </Link>  
</div>     
</div> 
</div>  
 </div>
  )
}

export default Categories