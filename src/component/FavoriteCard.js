import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../actions/posts';
import { HeartFill } from 'react-bootstrap-icons'
import './FavoriteCard.css'
import { FavoriteBorderOutlined,Favorite, PriceCheckOutlined, } from '@mui/icons-material'
function FavoriteCard({ post,town,title,price,img,setCurrentId}) {
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
        <div className='favoriteCard1'>
            {hasLikedPost?(
                 <div className='favoriteCard'>  
            <><div className='favoriteCard__left'>
                    <div className='heart'>
                        <button size="small" disabled={!user?.result} onClick={handleLike}>
                            <Likes />
                        </button>
                    </div>
                    <img className='favoriteCard__img' src={img} alt='' />
                </div><div className='favoriteCard__info'>
                        <h4>Name of hostel</h4>
                        <p>
                            {town}
                            <strong className='favoriteCard__price'>${price}</strong>
                        </p>
                        <p>{title}</p>
                    </div></>
            </div>):(<div className='nolikes'>


            </div>)}
        </div>
    )
}

export default FavoriteCard