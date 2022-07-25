
import './details.css'
import React, {useState, useEffect } from 'react';
import {  CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import { getPost, getPostsBySearch } from '../actions/posts';
import BottoNav from './Bottomnav'
import { Close, EditRoadOutlined, EmailOutlined, ExitToApp, ExitToAppTwoTone, ExpandMore, Help, HelpOutline, ReadMore, RoomOutlined, Settings } from '@mui/icons-material';
import {  ArrowLeftShort, ArrowReturnLeft, ArrowsFullscreen, Building, CalendarRange, CardHeading, ChatDots, GeoAlt, Hospital, House, Map, PeopleFill, Phone, PhoneFlip, Send } from 'react-bootstrap-icons'
import { ChatBubbleOutlineOutlined, MapRounded, PhoneAndroid } from '@mui/icons-material';
import 'photoswipe/dist/photoswipe.css'
import { transition } from "./transition";
import { Badge, IconButton, Dialog, Avatar, AvatarGroup, Button } from "@mui/material";
import useToggle from "./useToggle";
import { createCart } from '../actions/book';
import { createChart } from '../actions/chart';
import { Gallery, Item } from 'react-photoswipe-gallery'
function DetailsPage() {
  
  const { value, toggleValue } = useToggle(false);
  const user = JSON.parse(localStorage.getItem('profile'));
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  const [message, SetMessage] = useState("");
  useEffect(() => {
  dispatch(getPost(id));
  }, [id]);
  
  if (!post) return null;

 const openPost = (_id) => history.push(`/posts/${_id}`);
if (!post) {
    // window.location.reload()
return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>

);

}
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
// DATA IS THE MAIN 
const handleSubmit = () => {


  dispatch(createCart({ 
  area:post.area,
city:post.city,
 title:post.title,
 description:post.description,
  price: post.price,
  contact:post.contact,
 image:post.image,
 category: post.category,
  landlord: post.landlord,
 landlord_id: post.landlord_id,
 hno:post.hno, 
 user_id:user?.result?._id,
  }, ));
  // clear();
  
  };
  
  const SendBtn = () => {


    dispatch(createChart({ 
       message:message,
        landlord_id:post.landlord_id,
        landlord:post.landlord,
        user_id:user?.result._id,
    }, ));
    // clear();
    
    };


  return (
    <div className='detailpage'>
     <BottoNav/>
    <div className='img_detail'>
      <div className='img_icons'>
      <div className='img_icons_left'>
      <Link to="/">  <ArrowLeftShort className='ic' size={30} color="tomato"/></Link>
        </div>
        <div className='img_icons_right'>
       <ArrowsFullscreen  className='ic' size={30} color="tomato"/>
       <Link to="/3d"> <p >3D</p></Link>
        </div>
      </div>
      <Gallery>
     <Item
      original={post.image1}
      thumbnail={post.image1}
      width="1024"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={post.image}/>
      )}
    </Item>
    
    </Gallery>
      </div>  
      <div className='info_detail'>
      <div className='info_detail_top'>
      <div className='info_detail_left'>
       <GeoAlt size={20} color="tomato"/><h3>{post.area}</h3>
      <div className='info_detail_left_items'>
    <p>{post.title}</p>
      </div> 
      </div>
      <div className='info_detail_right'>
      <h5>${post.price}/</h5>
      <p>Month</p>
      </div>  
      </div> 
      <div className='info_detail_buttons'>
        <Link to="/houses">
      <House color='tomato' size={20} className='icons'/>
      </Link>
      <Link to="/hostel">
      <Hospital color='tomato' size={20} className='icons' />
      </Link>
      <Link to="/hotel">
      <Building color='tomato' size={20} className='icons'/>
      </Link>
      <Link to="/map">
      <MapRounded className='icons' />
      </Link>
      </div> 
      <div className='info_detail_description'>
      <p>{post.description}</p>
      </div> 
      </div> 
      <div className='footer_detail'>
      <div className="bottom1">
 <div className="bottom-icons1">
 
 <a href={`tel:${post.contact}`}><PhoneAndroid className='foot_btn'/></a>

<ChatBubbleOutlineOutlined onClick={toggleValue} className='foot_btn'/>

<Link to="/book">
<p className='foot_btn' onClick={handleSubmit}>Book now</p>
</Link>
 </div>
    </div>    
      </div> 
      <Dialog  
halfScreen
open={value}
onClose={toggleValue}
TransitionComponent={transition}
>
<p className='text_center'>Message {post.landlord}</p>
<IconButton
  edge="end"
  color="inherit"
  aria-label="close"
  style={{ marginRight: "5px" }}
  onClick={toggleValue}
>
  <Close className="closename" />
</IconButton>
<div className='sendmessage'>
  <div className='message'>
<input  value={message}
  onChange={event => SetMessage(event.target.value)} type="text" placeholder='send message'/>
<Send onClick={SendBtn}/>
</div>
</div>
</Dialog>   
    </div>
  )
}

export default DetailsPage