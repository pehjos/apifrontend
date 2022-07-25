import React from 'react'
import { usePaystackPayment } from 'react-paystack';
import { useStateValue } from "../stateprovider";
import { useNavigate } from 'react-router'
import { useDispatch} from 'react-redux';

import {createOrder} from '../actions/order'
import './order.css'
import { ArrowLeft } from 'react-bootstrap-icons';
function Order() {
    const history=useNavigate()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [{basket}]=useStateValue();
    console.log(basket)
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "pehjos4@gmail.com",
        currency: "GHS",
        amount:basket?.price*100 ,
        publicKey: 'pk_test_5c6aeafd30956039ac7b8b946d95a4075990913e',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
        alert(reference,"Keep this number in safe place")
        history("/")
        console.log(reference);
        dispatch(createOrder({
            title:basket.title,
            price:basket.price,
            area:basket.area,
            payment:reference,
            image:basket.image,
            landlord_id:basket.landlord_id,
            landlord:basket.landlord,
            user_id:user?.result._id,
            category:basket.category
    }, ));
}
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>
    <div className='payment'  >
     <button><img src="https://citinewsroom.com/wp-content/uploads/2020/03/MTN-Momo-e1584721116128.jpeg"/>momo</button>
     <button><img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"/>masterCard</button>
     <button><img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"/>visa</button>
     <button><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"/>paypal</button>   
</div>                 


              </button>
          </div>
        );
    };
  return (
    <div className='order'>
      <div className='favorite__top'>
<ArrowLeft onClick={() => navigate(-1)} className='favorite__arrow' />
<p>Payment</p>
</div>
        <p>Complete the payment</p>
        <PaystackHookExample />
</div>
  )
}

export default Order


//  npm install react-paystack  --legacy-peer-deps