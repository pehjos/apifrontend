import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import FavoriteCard from './FavoriteCard'
import './Favorite.css'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from './Bottomnav'
function Favorite(setCurrentId,post) {
    const user = JSON.parse(localStorage.getItem('profile'));
 
    const userId = user?.result.googleId || user?.result?._id;
const navigate = useNavigate();
const {posts,isLoading}=useSelector((state)=>state.posts)
if(!posts?.length && !isLoading){
return 'no data'
}
if (!posts) {
//  window.location.reload()

return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>
);
}

return (
<div className='favorite'>
<div className='favorite__top'>
<ArrowLeft onClick={() => navigate(-1)} className='favorite__arrow' />
<p>Favorites</p>
</div>
<div className='favorite__cards'>
<BottomNav/>

{posts.map((post,index)=>(  
<FavoriteCard
key={post._id}
post={post} setCurrentId={setCurrentId}
img={post.image}
title={post.title}
town={post.city}
price={post.price}
/>
))} 
</div>
</div>
)
}

export default Favorite