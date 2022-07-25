
import React,{useState} from 'react'
import { Building, GeoAlt, Hospital, House, Search, Shop } from 'react-bootstrap-icons'
import './homeview.css'
import Carousel from './Carousel'
import {  CircularProgress, Divider } from '@mui/material';
import {
   Link,
 } from 'react-router-dom'

 import { useDispatch, useSelector } from 'react-redux';
import {getPostsBySearch1} from '../actions/posts'
import { useNavigate,useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Homeview() {
   const query = useQuery();
   const page = query.get('page') || 1;
   const searchQuery = query.get('searchQuery');
 
   const [currentId, setCurrentId] = useState(0);
   const dispatch = useDispatch();
 
   const [search, setSearch] = useState('');
   const [tags, setTags] = useState([]);
   const history = useNavigate();

   const handleKeyPress = (e) => {
       if (e.keyCode === 13) {
         searchPost();
       }
     };
 
 const searchPost = () => {
   if (search.trim() || tags) {
     dispatch(getPostsBySearch1({ search}));
     history.push(`/search1?searchQuery=${search || 'none'}`);
   } else {
     history('/');
    
   }
 };
 const {posts,isLoading}=useSelector((state)=>state.posts)
 if(!posts.length && !isLoading){
     return 'no data'
   }
   // if (isLoading) {
   //    return (
   //      <div  className="loadingPaper">
   //        <CircularProgress size="2em" />
   //      </div>
   //    );
   //  } 


 
return (
<div className='homeview'>
  <Carousel/>
<div className='image_section'>

<div className='search'>
   <GeoAlt color='tomato' />
<input value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress}  type="text"placeholder="search by places (Accra) "/>
<Search onClick={searchPost}/>
</div>
</div>
<div className='categories_section'>
<p>Categories</p>
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
<Shop color='tomato' size={13}/>
<p>office/s</p>
</div> 
</Link> 
</div>
<div className='recomendation'>
  <p>Recomendation</p>  
  <p style={{color:"#2196f3",fontSize:12}}>See More</p>
 </div>
</div>
</div>
)
}

export default Homeview