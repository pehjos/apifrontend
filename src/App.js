import React,{useEffect,useState} from 'react';
import './App.css';
import Home from './component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import DetailsPage from './component/DetailsPage';
import Model from './component/Model';
import Search from './component/Search';
import Design from './component/Design'
import Hostel from './component/Hostel'
import Hotel from './component/Hotel'
import Office from './component/Office'
import Categories from './component/Categories';
import Auth from './component/Auth/Auth'
import Form from './component/Form'
import Favorite from './component/Favorite';
import Chart from './component/Chart';
import Book from './component/Bookfeed';
import Order from './component/Order';
import Map from './component/Map';

function App() {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
<BrowserRouter>

<Routes>

<Route path="/"element={<Home/>}/>
<Route path="/details/:id" element={<DetailsPage/>}/>
<Route path="/favorite"element={<Favorite />}/>
<Route path="/3d"element={<Model/>}/>
<Route path="/search"element={<Search/>}/>
<Route path="/houses"element={<Categories/>}/>
<Route path="/design"element={<Design/>}/>
<Route path="/hostel"element={<Hostel/>}/>
<Route path="/hotel"element={<Hotel/>}/>
<Route path="/office"element={<Office/>}/>
<Route path="/host"element={<Auth/>}/>
<Route path="/chart"element={<Chart/>}/>
<Route path="/book"element={<Book/>}/>
<Route path="/map"element={<Map/>}/>
<Route path="/order"element={<Order/>}/>
<Route path="form"element={<Form currentId={currentId} setCurrentId={setCurrentId}/>}/>
 </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
