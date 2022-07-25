import React from 'react'
import { ArrowLeft, Building } from 'react-bootstrap-icons'
import FavoriteCard from './FavoriteCard'
import './Favorite.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from './Bottomnav'
import Categories from './CategorieCard'

function Design(setCurrentId,post) {
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
    <div className='design'>
     <div className='favorite__top'>
<ArrowLeft onClick={() => navigate(-1)} className='favorite__arrow' />
<Link to="/">
   <div className='categories_top' >
   <Building/>
   <p>designs</p>  
</div>
</Link> 
</div> 

<div className='design__cards'>
<BottomNav/>

{posts.map((post,index)=>(  
<Categories
key={post._id}
post={post} setCurrentId={setCurrentId}
img={post.image}

/>
))} 
</div>

    </div>
  )
}

export default Design