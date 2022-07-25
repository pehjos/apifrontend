import React from 'react'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Cash, Clock, Trash } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router'
import BottomNav from './Bottomnav';
function Bookfeed() {
    const navigate = useNavigate();
    const dispatch =useDispatch()
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const {  cart, Loading } = useSelector((state) => state.cart);
   
    const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <div>
        <BottomNav/>
          <div className='favorite__top'>
<ArrowLeft onClick={() => navigate(-1)} className='favorite__arrow' />
<p>Bookings</p>
</div>    

        {cart.map(post=> (
   user?.result?._id!==post.user_id?"":(
  <Book
  post={post}
  key={post._id}
  title={post.title}
  price={post.price}
  area={post.area}
  image={post.image}
  _id={post._id}
  id={post._id}
  category={post.category}
    landlord={post.landlord}
   landlord_id={post.landlord_id}
   hno={post.hno}
  />
       ) ))}

    </div>
  )
}

export default Bookfeed