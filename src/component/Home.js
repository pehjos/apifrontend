import React from 'react'
import Bottom from './Bottombar';
import Card from './Card';
import Homeview from './Homeview';
import './homeview.css'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from './Bottomnav'
import Map from './Map';
function Home(setCurrentId) {
  const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)
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
    <div className='home'> 
        <Homeview/>
    {/* <div className='views'>
    <div className='popular_view'>
    <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

    </div>
    <div className='home__view'>
    <Homeview/>

    </div>
    <div className='mapview'>
<Map />
  </div>
    </div> */}
    <div className='mediavi'>

     <BottomNav/> 

    {posts.map((post,index)=>(  
    <Card
    key={post._id}
    post={post} setCurrentId={setCurrentId}
    img={post.image}
    title={post.title}
    town={post.city}
    price={post.price}
    />
    ))}

 
    </div>
    <Bottom/>
    </div>
  )
}

export default Home