import { Button ,Input,styled, IconButton} from '@mui/material';
import React, { useState, useEffect,useRef } from 'react';
import './form.css'
import swal from 'sweetalert2'
import {PhotoCamera} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { ArrowBackIos,AddPhotoAlternate, Check } from '@mui/icons-material'
import {createPost} from '../actions/posts'
import {updatePost} from '../actions/posts'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
function Form({setCurrentId,currentId}) {
const [useradmin, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const {posts,isLoading}=useSelector((state)=>state.posts)

// CLOUDINARY UPLOAD
const [image1, setImage1 ] = useState("");
const [image2, setImage2 ] = useState("");
const [image3, setImage3 ] = useState("");
const [image4, setImage4 ] = useState("");
const [image5, setImage5 ] = useState("");
const [ url1, setUrl1 ] = useState("");
const [ url2, setUrl2 ] = useState("");
const [ url3, setUrl3 ] = useState("");


const uploadImage = () => {
let timerInterval
swal.fire({
title: 'Wait while we confirm image',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", image1)

data.append("upload_preset", "obs8xuzh")
data.append("cloud_name","thefinder")
fetch(" https://api.cloudinary.com/v1_1/thefinder/image/upload",{
method:"post",
body: data, 
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
setUrl1(data.secure_url)

console.log(data.secure_url)
document.getElementById('acceptImg1').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Confirmed')
})
.catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
//  closeItems()
}
)

}
// CLOUDINARY

const uploadImage1 = () => {
let timerInterval
swal.fire({
title: 'Wait while we confirm image',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", image2)

data.append("upload_preset", "oaslskmp")
data.append("cloud_name","forecastmall-inc")
fetch(" https://api.cloudinary.com/v1_1/forecastmall-inc/image/upload",{
method:"post",
body: data, 
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
setUrl2(data.secure_url)

console.log(data.secure_url)
document.getElementById('acceptImg2').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Confirmed' )
})
.catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
//  closeItems()
}
)

}
// CLOUDINARY
const uploadImage2 = () => {
let timerInterval
swal.fire({
title: 'Wait while we confirm image',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
  swal.showLoading()
  const b = swal.getHtmlContainer().querySelector('b')
  timerInterval = setInterval(() => {
    b.textContent = swal.getTimerLeft()
  }, 100)
},
willClose: () => {
  clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
  console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", image3)

data.append("upload_preset", "oaslskmp")
data.append("cloud_name","forecastmall-inc")
fetch(" https://api.cloudinary.com/v1_1/forecastmall-inc/image/upload",{
method:"post",
body: data, 
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
setUrl3(data.secure_url)

console.log(data.secure_url)
document.getElementById('acceptImg3').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Confirmed' )
})
.catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
  })
//  closeItems()
}
)

}
// CLOUDINARY



const [currentRoom, setCurrentRoom] = useState(1)

const changeRoom = (newRoom) => {
setCurrentRoom(newRoom)
}
const [currentRoom1, setCurrentRoom1] = useState(1)

const changeRoom1 = (newRoom1) => {
setCurrentRoom1(newRoom1)
}
const [currentRoom2, setCurrentRoom2] = useState(1)

const changeRoom2 = (newRoom2) => {
setCurrentRoom2(newRoom2)
}
const [currentRoom4, setCurrentRoom4] = useState(1)

const changeRoom4 = (newRoom4) => {
setCurrentRoom4(newRoom4)
}
console.log(currentRoom1)
const Input = styled('input')({
display: 'none',
});
const [tags ,setTags]=useState(false)
const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)

}

}


const choseImg=()=>{
document.getElementById('btnImg').click()
setVideoImg(true)
setState(false)


}
const choseImg1=()=>{
document.getElementById('btnImg1').click()
setVideoImg(true)
setState(false)


}
const choseImg2=()=>{
document.getElementById('btnImg2').click()
setVideoImg(true)
setState(false)


}
const choseImg3=()=>{
document.getElementById('btnImg3').click()
setVideoImg(true)
setState(false)


}
const choseImg4=()=>{
document.getElementById('btnImg4').click()
setVideoImg(true)
setState(false)


}
const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)

}




const closeItems=()=>{
setState(true)
// document.getElementById('video').style.pointerEvents="initial"
// document.getElementById('photo').style.pointerEvents="initial"
// setBaseImage("")


}
const handleEmtyInput=({target})=>{

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit




const [postData, setPostData] = useState({   
title:"",
description:"",
price:"",
contact:"",
city:"",
area:"",
hno:"",
digital_address:"",
likes:"",
comments:"",
category:"",
landord_id:"",
landord:"",
image:"",
image1:"",
image2:"",
image3:"",
image4:"",
video:"",});
const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem('profile'));

useEffect(() => {
if (post) setPostData(post);
}, [post]);

const clear = () => {
setCurrentId(0);
setPostData({   
  title:"",
  description:"",
  price:"",
  contact:"",
  city:"",
  area:"",
  hno:"",
  digital_address:"",
  likes:"",
  comments:"",
  category:"",
  landord_id:"",
landord:"",
  image:"",
  image1:"",
  image2:"",
  image3:"",
  image4:"",
  video:"" });
};

useEffect(() => {
if (!post?.title) clear();
if (post) setPostData(post);
}, [post]);
const handleSubmit = async (e) => {
e.preventDefault();
if(url1=="" ){
alert("Please Select and Confirm Product Image 1")
}
else if(url2=="" ){
alert("Please Select and Confirm Product Image 2")
}
else if(url3=="" ){
alert("Please Select and Confirm Product Image 3")
}
else if (currentId === 0) {
dispatch(createPost({ ...postData, landlord: user?.result?.name,landlord_id: user?.result?._id ,
category:currentRoom4,
image:url1,
image1:url2,
image2:url3,

}, ));
// clear();
} else {
dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
clear();

};
}
if (!user) {
return (
<div>
<p>
Please Sign In to create your own memories and like other's memories.
</p>
</div>
);
}




const uploadPrev=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image:oFREvent.target.result})
setImage1(oFREvent.target.result)
}
}

const uploadPrev1=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg1').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev1").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image1:oFREvent.target.result})
setImage2(oFREvent.target.result)
}
}
const uploadPrev2=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg2').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev2").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image2:oFREvent.target.result})
setImage3(oFREvent.target.result)
}
}
const uploadPrev3=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg3').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev3").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image3:oFREvent.target.result})
setImage4(oFREvent.target.result)
}
}
const uploadPrev4=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg4').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev4").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image4:oFREvent.target.result})
setImage5(oFREvent.target.result)
}
}
const uploadprevvideo=()=>{
const ofFreader=new  FileReader()
ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
ofFreader.onload=function(ofFREvent){
document.getElementById("prevvideo").src=ofFREvent.target.result;
console.log(ofFREvent.target.result)
//  document.getElementById('video').style.pointerEvents="none"
//  document.getElementById('video').style.opacity="0.9"
console.log(ofFREvent.target.result,"video")
setPostData({...postData, video:ofFREvent.target.result})


}
}



return (
<div className="form">
<div className="categoryPage__top">
    <Link to="/">
        <ArrowBackIos className="categoryPage__topBackIcon" />
      </Link>
    </div>
<form  onSubmit={handleSubmit}>
<h4>Host a property</h4>  
<div className="form_main"  >  


<div className="form_1">
  
<select required  onChange={(event) => changeRoom4(event.target.value)}
value={currentRoom4}>
<option value={""}> Property type</option>
<option value="house">house</option>
<option value="design">design</option>
<option value="hostel">hostel</option>
<option value="hotel">hotel</option>
<option value="office">office</option>
<option value="hospital">hospital</option>

</select>
<input type="text" placeholder="title (eg 4bed room)"value={postData.  title}
onChange={(e)=>setPostData({...postData,   title:e.target.value})}
required/>
<input required type="text" placeholder="City (eg sunyani) "value={postData.city}
onChange={(e)=>setPostData({...postData,  city:e.target.value})}
/>
<input required type="text" placeholder="Area (eg kotokrom )"value={postData.area}
onChange={(e)=>setPostData({...postData,   area:e.target.value})}
/>






<input required type="text" placeholder="price/month (40 or 90)"value={postData.price}
onChange={(e)=>setPostData({...postData,     price:e.target.value})}/>
<input required type="text" placeholder="House number (eg. BD-3C-090)"value={postData.nno}
onChange={(e)=>setPostData({...postData,hno:e.target.value})}/>
<input required type="text" placeholder="Digital address (BS-090-58990)"value={postData.digital_address}
onChange={(e)=>setPostData({...postData,digital_address:e.target.value})}/>

<input required type="text" placeholder="Contact(eg +233596188679)"value={postData.contact}
onChange={(e)=>setPostData({...postData,   contact:e.target.value})}/>
</div>

<div className="form_1">


{/* ):""
} */}





<p>Upload product  image</p>
{videoImg?(<div className="prevImg">
<div className="prevImg">
<img accept="image/*" id="prev"/>

{image1?(<p id="acceptImg1" onClick={uploadImage}>Confirm <Check/></p>):""}
</div>
<div className="prevImg">
<img accept="image/*" id="prev1"/>

{image2?(<p id="acceptImg2" onClick={uploadImage1}>Confirm <Check/></p>):""}
</div>
<div className="prevImg">
<img accept="image/*" id="prev2"/>
{image3?(<p id="acceptImg3" onClick={uploadImage2}>Confirm <Check/></p>):""}
</div>
{/* <img accept="image/*" id="prev3"/>
<img accept="image/*" id="prev4"/> */}
</div>):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<label htmlFor="icon-button-file">
<div className="input">
<input accept="image/*"  type="file" id="btnImg"  
onClick={handleEmtyInput}
onChange={ uploadPrev}/>
<input accept="image/*"  type="file" id="btnImg1"  
onClick={handleEmtyInput}
onChange={ uploadPrev1}/>
<input accept="image/glb"  type="file" id="btnImg2"  
onClick={handleEmtyInput}
onChange={ uploadPrev2}/>
{/* <input accept="image/*"  type="file" id="btnImg3"  
onClick={handleEmtyInput}
onChange={ uploadPrev3}/>
<input accept="image/*"  type="file" id="btnImg4"  
onClick={handleEmtyInput}
onChange={ uploadPrev4}/> */}
</div>
<div>
<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add Photo"id="photo"  onClick={choseImg}/>
<p>Add Photo1</p>
</div>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add Photo"id="photo1"  onClick={choseImg1}/>
<p>Add Photo2</p>
</div>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add Photo"id="photo2"  onClick={choseImg2}/>
<p>Add 3D image</p>
</div>
</IconButton>
</div>
<div className="confir">

</div>
</label>
<textarea value={postData.description} required
onChange={(e)=>setPostData({...postData,    description:e.target.value})} type="text" placeholder="Property details (eg.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. )"/>
</div>

</div>
<button  type="submit" id="btnsub">
SUBMIT YOUR PROPERTY
</button>

</form>

</div>
)
}

export default Form
