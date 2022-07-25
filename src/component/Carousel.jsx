import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';


import './carosel.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
root: {
position: 'relative',
},
slide: {

minHeight: 200,
color: '#fff',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
};

class DemoAutoPlay extends React.Component {
state = {
index: 0,
};

handleChangeIndex = index => {
this.setState({
index,
});
};

render() {
const { index } = this.state;

return (
<div className="
">
<div className="demima" style={styles.root}>

<AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>


<div  className="img" style={Object.assign({}, styles.slide, styles.slide1)}><img src="https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720"></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide2)}><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720"></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide3)}><img src="https://a0.muscache.com/im/pictures/33086851/4a82f1ad_original.jpg?im_w=720"></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide1)}><img src="https://a0.muscache.com/im/pictures/2e5eccaf-acfb-474d-8000-843cff4b9757.jpg?im_w=720"></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide2)}><img src="https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=720"></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide3)}><img src="https://a0.muscache.com/im/pictures/cf296f82-70fe-41de-a436-ee613695fbfd.jpg?im_w=720"></img></div>
</AutoPlaySwipeableViews>
<Pagination dots={6} index={index} onChangeIndex={this.handleChangeIndex} />
</div>
</div>
);
}
}

export default DemoAutoPlay;
