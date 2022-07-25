import React from 'react'
import {Link} from 'react-router-dom'
import './bottom.css'
import { BookmarkAddedOutlined, Close, EditRoadOutlined, EmailOutlined, ExitToApp, ExitToAppTwoTone, ExpandMore, Help, HelpOutline, ReadMore, RoomOutlined, Settings } from '@mui/icons-material';
import { transition } from "./transition";
import { Badge, IconButton, Dialog, Avatar, Divider, AvatarGroup, Button } from "@mui/material";
import useToggle from "./useToggle";
import Bottomnav from  './Bottomnav'
import { useDispatch, useSelector } from 'react-redux';
import { 
    Bell,PersonPlus, Award, Search, Heart, ChatDotsFill, ChatDots, PersonCircle, BellFill, Shop, House, Hospital, Building
    } from 'react-bootstrap-icons';

function Bottom() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const { value, toggleValue } = useToggle(false);
  const {  cart, Loading } = useSelector((state) => state.cart);
        
  let counter=0;
  if (user) {
  cart?.map(post=> {
     if(user?.result?._id==post.user_id){
 counter++
     }
 
 })}
 console.log(counter)
  return (
    <div className="bottom">
     
 <div className="bottom-icons">
 <div className='categories_sectio'>
<div className='categoryMenu'  >
<Link to="/houses">
<div className='categoryMenu_item'  >
<House color='tomato' size={13}/>
<p>house</p>
</div> 
</Link>
<Link to="/design">
<div className='categoryMenu_item'  >
<Building color='tomato' size={13}/>
<p>design</p>
</div>
</Link>
<Link to="/hostel">
<div className='categoryMenu_item'  >
<Hospital color='tomato' size={13}/>
<p>hostel</p>
</div>
</Link>
<Link to="/hotel">
<div className='categoryMenu_item'  >
<House color='tomato' size={13}/>
<p>hotel</p>
</div>
</Link>
<Link to="/office">
<div className='categoryMenu_item'  >
< Shop color='tomato' size={13}/>
<p>office/s</p>
</div> 
</Link> 
</div>
</div>

   <Link to="/search">
     <div className='baritems_serach'>
     <Search size={19} color="#333"  className="ml-4"/>
     <p>search</p>
     </div>
     </Link>
     <Link to="/favorite">
     <div className='baritems_serach'>
     <Heart size={19} color="#333"  className="ml-4"/>
     <p>favourites</p>
     </div>
     </Link>
     <Link to="/chart">
     <div className='baritems_serach'>
     <ChatDots size={19} color="#333"  className="ml-4"/>
     <p>messages</p>
     </div>
     </Link>
     <div className='baritems_serach'>
  {!user?.result._id?(<Link to="/host">
    
    <PersonCircle size={19} color="orange"   className="ml-6" /></Link>
    ):(<PersonPlus onClick={toggleValue} className="ml-4"/>)}
  <p>account</p>
  </div>
  
  <Link to="/book">
  <div className='baritems_serach'>
     <Bell size={19} color="#333"  className="ml-4"/>
    
     {counter<=0?"": <sup className='text_sup'>{counter}</sup>}
   <p>bookings</p>  
  </div>   
     </Link>
 </div>
 <Dialog 
 className='dialog' 
fullScreen
open={value}
onClose={toggleValue}
TransitionComponent={transition}
>

<IconButton
  edge="end"
  color="inherit"
  aria-label="close"
  style={{ marginRight: "5px" }}
  onClick={toggleValue}
>
  <Close className="closename" />
</IconButton>
<div className='page_menus' >
<Avatar/>
<p>{user?.result?.name}s</p>
<div className='menus_child'>

<p>{user?.result.email}</p>
</div>
<div className='menus_child'>
</div>
<div className='menus_child'>
<h2>Hosting</h2>
</div>
<Link to="/form">
<div className='menus_child'>


<p className='host'>host a romm</p>
</div>
</Link>
 
<h2>Support</h2>
<div className='menus_child'>
  <EditRoadOutlined/>
<p>how thefinder works</p>
</div>
<div className='menus_child'>
  <HelpOutline/>
<p>Get help</p>
</div>
<div className='menus_child'>

<p>contact</p>

</div>
<Button color='primary'>
<p>Logout</p>
</Button>
</div>
</Dialog>
    </div>
  )
}

export default Bottom