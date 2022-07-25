import React from 'react'
import { ArrowLeft, Cash, Clock, Trash } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router'
import BotomNav from './Bottomnav'
import { useStateValue } from "../stateprovider";
import {deleteCart} from '../actions/book'
import { useDispatch, useSelector } from 'react-redux';
import './book.css'
import { Link } from 'react-router-dom';
function Book({post,id, category,hno,landlord_id, landlord,image,title,price,area,}) {
  const dispatch =useDispatch()
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const {  cart, Loading } = useSelector((state) => state.cart);
  const [{basket},dispatch1]=useStateValue();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  console.log(cart)
  const addToBasket=()=>{
    dispatch1({
    type:'ADD_TO_BASKET',
    item:{
    id:id,
    title:title,
   price:price,
  area:area,
    image:image,
    category: category,
    landlord: landlord,
   landlord_id:landlord_id,
   hno:hno, 
    }
    })
  
   
    }

console.log(basket)
  return (
    <div className='book'>
      <BotomNav/>


     <div className='book_content' >
     <div className='book_content_card' onClick={addToBasket}>
     <div className='book_content_img'>
      <img src={image}/> 
       </div>  
       <div className='book_content_text'>
       <div className='book_content_tex'>
       <p>{title}</p>
       <p>{landlord}</p>
       <p>{area}</p>
       <p>${price}</p>
       </div>
       <div className='book_content_footer'>
         {/* <div className='footer_content'>
       <Clock size={13} color='teal'/>
       </div> */}
       <div className='footer_content'>
       <Link to="/order">
       <button  onClick={addToBasket}> 
       <Cash size={13} color='yellow'/>
   <p>Pay</p></button>
   </Link >
       </div>
       <div className='footer_content'>
      
       <button onClick={() => dispatch(deleteCart(post._id))}>
       <Trash   size={13} color='red'/>
      <p>cancel request</p></button>
      
       </div>
       
       </div> 
       </div> 
       </div>  
       </div> 
     
       </div>
  )
}

export default Book