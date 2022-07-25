import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Bottombar from './Bottombar'
import { Close, EditRoadOutlined, EmailOutlined, ExitToApp, ExitToAppTwoTone, ExpandMore, Help, HelpOutline, ReadMore, RoomOutlined, Settings } from '@mui/icons-material';
import './chart.css'
import {  CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from './Bottomnav'
import { Reply, Send } from 'react-bootstrap-icons';
import { createChart } from '../actions/chart';
import { transition } from "./transition";
import { Badge, IconButton, Dialog, Avatar, AvatarGroup, Button } from "@mui/material";
import useToggle from "./useToggle";


function Chart(post) {
  const dispatch = useDispatch();

  const [landlord, SetLandlord] = useState("");
  const [landlord_id, SetLandlord_id] = useState("");

  const [message, SetMessage] = useState("");
  const { value, toggleValue } = useToggle(false);
  const [val, setValue] = React.useState('1');
  const user = JSON.parse(localStorage.getItem('profile'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {chart,isLoading}=useSelector((state)=>state.chart)
console.log(chart)
if(!chart?.length && !isLoading){
  return 'no data'
  }
  if (!chart) {
  //  window.location.reload()
  return (
  <div  className="loadingPaper">
  <CircularProgress size="2em" />
  </div>
  );
  }
  const SendBtn = () => {


    dispatch(createChart({ 
       message:message,
        landlord_id:landlord_id,
        landlord:landlord,
        user_id:user?.result._id,
    }, ));
    // clear();
    
    };

  return (
    <div className='chart'>
      <BottomNav />
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={val} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="sent" value="1" />
            <Tab label="recieved" value="2" />
          
          </TabList>
        </Box>
        <TabPanel value="1">
        {chart.map(post=> (
   user?.result?._id!==post.user_id?"":( 
    <div className='sendpost'>
    <p>{post.landlord}</p>
    <p>{post.message}</p>

    <p>{post.createdAt}</p>
    </div>
    ) ))}

        </TabPanel>
        <TabPanel value="2">
          
        {chart.map(post=> (
   user?.result?._id!==post.landlord_id?"":( 
            <div className='sendpost'>
        
            <p>{post.landlord}</p>
            <p>{post.message}</p>
            <p>{post.createdAt}</p>
            <div onClick={()=>toggleValue(SetLandlord_id(post.landlord_id),SetLandlord(post.landlord))}
            
            className='reply'>
            <Reply/>
            <p>reply back</p>
            </div>
        
            </div>
    ) ))}


        </TabPanel>

      </TabContext>
    </Box>
    <Dialog  
halfScreen
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
<div className='sendmessage'>
  <div className='message'>
<input  value={message}
  onChange={event => SetMessage(event.target.value)} type="text" placeholder='send message'/>
<Send onClick={SendBtn}/>
</div>
</div>
</Dialog> 
  <Bottombar/> 

    </div>
  )
}

export default Chart