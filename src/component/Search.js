import React,{useState} from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { ArrowLeftShort, Search } from 'react-bootstrap-icons'
import './search.css'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getPostsBySearch} from '../actions/posts'
import { useNavigate,useLocation } from 'react-router-dom';
import BottomNav from './Bottomnav'
import Categories from './CategorieCard'
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
function Searchroom() {
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
      dispatch(getPostsBySearch({ search}));
      history.push(`/search?searchQuery=${search || 'none'}`);
    } else {
      history('/');
     
    }
  };
  const {posts,isLoading}=useSelector((state)=>state.posts)
  // if(!posts.length && !isLoading){
  //     return 'no data'
  //   }
    // if (isLoading) {
    //    return (
    //      <div  className="loadingPaper">
    //        <CircularProgress size="2em" />
    //      </div>
    //    );
    //  } 

return (
<div className='searchnew'>
<div className='searchnew_top'>
<div className='searchnew_top_left'>
    <Link to="/">
<ArrowLeftShort size={30} color="tomato"/>   
</Link>
<div className='inputnew'>
    <Search color='#333' />
    <input placeholder='search' value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress}  type="text" />
</div> 
</div> 
<div className='searchnew_top_right'>
<p onClick={searchPost} style={{color:'tomato'}}>search</p>

</div> 
</div>      
<div className='banner'>
<img src=""/>


</div>
<div className='home_search'>

<div className='grid_image'>
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

</div>
</div>
)
}

export default Searchroom